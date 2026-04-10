'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Mail, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { COMPANY_KNOWLEDGE } from '@/lib/chatbot-knowledge';

type Message = {
  id: number;
  from: 'bot' | 'user';
  text: string;
};

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const SYSTEM_PROMPT = `You are the Code Flick Technologies virtual assistant on the company website (codeftech.com). Be helpful, friendly, concise, and professional.

RESPONSE GUIDELINES:
- Answer in 2-3 sentences for simple questions
- For detailed questions about services or industries, provide thorough answers with specific details from the knowledge base below
- Use the specific details, client names, technologies, and offerings from the knowledge base — be precise, not vague
- For pricing questions, say it depends on scope and suggest reaching out at info@codeftech.com for a free consultation
- Never fabricate information. If unsure, suggest contacting the team at info@codeftech.com
- Do not mention or suggest any "contact form" — the website UI handles that separately
- Do not use markdown formatting — use plain text only
- Be conversational and warm, not robotic

COMPANY KNOWLEDGE BASE:
${COMPANY_KNOWLEDGE}`;

const quickActions = [
  'What services do you offer?',
  'Tell me about your AI solutions',
  'How can I contact you?',
  'What are your locations?',
];

// Initialize Gemini client
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
let genAI: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'your_gemini_api_key_here') {
  genAI = new GoogleGenAI({ apiKey });
}

type ChatMessage = { role: 'user' | 'model'; content: string };

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: 'bot',
      text: 'Hi! I\'m the Code Flick assistant. Ask me about our services, or I can connect you with our team. How can I help?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);
  const chatHistoryRef = useRef<ChatMessage[]>([]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showContactForm]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Re-focus input after loading completes
  useEffect(() => {
    if (!isLoading && isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading, isOpen]);

  const addBotMessage = useCallback((text: string) => {
    setMessages((prev) => [...prev, { id: nextId.current++, from: 'bot', text }]);
    chatHistoryRef.current.push({ role: 'model', content: text });
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { id: nextId.current++, from: 'user', text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setShowContactForm(false);

    setTimeout(() => inputRef.current?.focus(), 0);

    chatHistoryRef.current.push({ role: 'user', content: text.trim() });

    if (!genAI) {
      console.error('[ChatBot] Gemini not initialized. API key:', apiKey ? 'SET' : 'MISSING');
      addBotMessage('I\'m having trouble connecting right now. Please send us a message using the button below and our team will get back to you shortly!');
      setIsLoading(false);
      return;
    }

    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        console.log(`[ChatBot] Attempt ${attempt + 1} with gemini-2.5-flash-lite...`);

        const contents = chatHistoryRef.current.map((msg) => ({
          role: msg.role as 'user' | 'model',
          parts: [{ text: msg.content }],
        }));

        const response = await genAI.models.generateContentStream({
          model: 'gemini-2.5-flash-lite',
          contents,
          config: {
            systemInstruction: SYSTEM_PROMPT,
            maxOutputTokens: 300,
            temperature: 0.3,
          },
        });

        let fullText = '';
        for await (const chunk of response) {
          fullText += chunk.text ?? '';
        }

        console.log('[ChatBot] Success! Response length:', fullText.length);
        addBotMessage(fullText);
        setIsLoading(false);
        return;
      } catch (err: unknown) {
        const error = err as Error & { status?: number };
        console.error(`[ChatBot] Attempt ${attempt + 1} failed:`, error.message);

        if (error.status === 429 && attempt < 1) {
          console.log('[ChatBot] Rate limited, retrying in 3 seconds...');
          await new Promise((resolve) => setTimeout(resolve, 3000));
          continue;
        }
      }
    }

    console.warn('[ChatBot] All attempts failed');
    addBotMessage('I\'m experiencing high demand right now. Please try again in a moment, or send us a message using the button below!');
    setIsLoading(false);
  }, [isLoading, addBotMessage]);

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setFormStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xojpwlvz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone,
          message: `[Chat Widget] ${contactForm.message}`,
          source: 'chat-widget',
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setFormStatus('success');
      setShowContactForm(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, from: 'bot', text: 'Your message has been sent! Our team will get back to you within 24 hours.' },
      ]);
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setFormStatus('error');
    }
  }

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-accent-primary-500 to-accent-primary-700 text-white shadow-[0_4px_20px_rgba(225,29,72,0.40),0_0_40px_rgba(225,29,72,0.15)] flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-6rem)] flex flex-col rounded-card overflow-hidden border border-glass-border shadow-[0_16px_48px_rgba(0,0,0,0.30),0_0_60px_rgba(225,29,72,0.08)]"
            style={{
              background: 'var(--glass-card-bg)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-glass-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary-500 to-accent-primary-700 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Code Flick Assistant</p>
                  <p className="text-xs text-accent-primary-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-glass-light transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-hide">
              {messages.map((msg, index) => (
                <div key={msg.id}>
                  <motion.div
                    initial={msg.id === 0 ? false : { opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.from === 'user'
                          ? 'bg-gradient-to-br from-accent-primary-500 to-accent-primary-700 text-white rounded-br-md'
                          : 'neo-badge !rounded-2xl !rounded-bl-md text-text-secondary'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>

                  {/* "Send Us a Message" button after the last bot response */}
                  {msg.from === 'bot' && !isLoading && index === messages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="flex justify-start mt-2"
                    >
                      <button
                        onClick={() => {
                          setShowContactForm(true);
                          setFormStatus('idle');
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-chip text-xs text-accent-primary-400 border border-accent-primary-500/20 bg-accent-primary-500/5 hover:bg-accent-primary-500/10 hover:border-accent-primary-500/30 transition-all"
                      >
                        <Mail className="w-3 h-3" />
                        Send Us a Message
                      </button>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Typing dots — shown while waiting for API response */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start"
                >
                  <div className="neo-badge !rounded-2xl !rounded-bl-md px-4 py-3 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              )}

              {/* Quick actions on initial screen */}
              {messages.length <= 2 && !showContactForm && !isLoading && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {quickActions.map((action) => (
                    <button
                      key={action}
                      onClick={() => sendMessage(action)}
                      className="px-3 py-1.5 rounded-chip text-xs text-accent-primary-400 border border-accent-primary-500/20 bg-accent-primary-500/5 hover:bg-accent-primary-500/10 hover:border-accent-primary-500/30 transition-all"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}

              {/* Contact form inline */}
              {showContactForm && formStatus !== 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="neo-badge !rounded-2xl !rounded-bl-md p-4 max-w-[90%]"
                >
                  <p className="text-xs font-semibold text-text-primary mb-3">Quick Contact Form</p>
                  <form onSubmit={handleContactSubmit} className="space-y-2.5">
                    <input
                      type="text"
                      placeholder="Your name *"
                      value={contactForm.name}
                      onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full px-3 py-2 neo-input text-text-primary placeholder:text-text-subtle text-xs"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email address *"
                      value={contactForm.email}
                      onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))}
                      className="w-full px-3 py-2 neo-input text-text-primary placeholder:text-text-subtle text-xs"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full px-3 py-2 neo-input text-text-primary placeholder:text-text-subtle text-xs"
                    />
                    <textarea
                      placeholder="Your message *"
                      value={contactForm.message}
                      onChange={(e) => setContactForm((p) => ({ ...p, message: e.target.value }))}
                      rows={2}
                      className="w-full px-3 py-2 neo-input text-text-primary placeholder:text-text-subtle text-xs resize-none"
                      required
                    />
                    <div className="flex items-center gap-2">
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="px-4 py-2 rounded-btn bg-gradient-to-r from-accent-primary-500 to-accent-primary-700 text-white text-xs font-semibold disabled:opacity-60 hover:opacity-90 transition-opacity flex items-center gap-1.5"
                      >
                        {formStatus === 'submitting' ? 'Sending...' : 'Send'}
                        <Send className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowContactForm(false)}
                        className="px-3 py-2 text-xs text-text-muted hover:text-text-primary transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                    {formStatus === 'error' && (
                      <p className="text-xs text-accent-primary-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Failed to send. Please try again.
                      </p>
                    )}
                  </form>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-glass-border">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage(input);
                    }
                  }}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 neo-input text-text-primary placeholder:text-text-subtle text-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isLoading}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary-500 to-accent-primary-700 text-white flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
