'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

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

const FAQ: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['service', 'offer', 'do you do', 'what do you', 'help with'],
    answer:
      'We offer end-to-end IT solutions including AI & Machine Learning, Automation, Software Development, FinTech, E-commerce, CRM, Healthcare IT, Cloud & DevOps, and Data Analytics. Would you like details on any specific service?',
  },
  {
    keywords: ['ai', 'machine learning', 'ml', 'artificial intelligence', 'chatbot', 'llm'],
    answer:
      'Our AI & ML services include chatbots, predictive analytics, LLM integration, AI agents, computer vision, NLP, and generative AI solutions. We can build custom AI solutions tailored to your business needs.',
  },
  {
    keywords: ['automation', 'rpa', 'workflow', 'power automate'],
    answer:
      'We specialize in business process automation using Power Automate, Power Apps, n8n, and Make. Our solutions cover RPA, workflow automation, and intelligent document processing.',
  },
  {
    keywords: ['fintech', 'banking', 'payment', 'kyc'],
    answer:
      'We build digital banking platforms, payment gateways, KYC/AML systems, core banking integrations (Temenos T24), and lending platforms. Our clients include Ajman Bank, National Bank of Iraq, and Capital Bank of Jordan.',
  },
  {
    keywords: ['price', 'cost', 'quote', 'budget', 'how much', 'pricing'],
    answer:
      'Pricing depends on the project scope, complexity, and timeline. I\'d recommend speaking with our team for a tailored quote. Would you like to fill out a quick contact form?',
  },
  {
    keywords: ['location', 'office', 'where', 'based', 'country'],
    answer:
      'Code Flick Technologies has offices in Bhopal and Lucknow (India) and Doha (Qatar). We serve clients across 10+ countries globally.',
  },
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'call'],
    answer:
      'You can reach us at info@codeftech.com or call +91 7987421429. Or I can open a contact form right here for you!',
  },
  {
    keywords: ['client', 'portfolio', 'project', 'work', 'case study'],
    answer:
      'We\'ve delivered solutions for Ajman Bank, National Bank of Iraq, Qatar Airways, Government of Uganda, Government of India, and 50+ other enterprise clients worldwide.',
  },
  {
    keywords: ['ecommerce', 'e-commerce', 'shopify', 'woocommerce', 'store', 'online'],
    answer:
      'We build high-performance storefronts on Shopify, WooCommerce, and Magento, plus custom marketplace platforms and headless commerce architectures.',
  },
  {
    keywords: ['healthcare', 'emr', 'ehr', 'telemedicine', 'medical'],
    answer:
      'Our healthcare solutions include EMR/EHR platforms, telemedicine systems, patient portals, HL7/FHIR integration, and clinical decision support tools.',
  },
  {
    keywords: ['crm', 'salesforce', 'odoo', 'dynamics', 'hubspot'],
    answer:
      'We implement and customize leading CRM platforms — Salesforce, Odoo, Microsoft Dynamics, Zoho, and HubSpot — with full integration across your business systems.',
  },
  {
    keywords: ['cloud', 'devops', 'aws', 'azure', 'docker', 'kubernetes'],
    answer:
      'We offer cloud-native architecture on AWS, Azure, and GCP, plus CI/CD pipelines, containerization with Docker/Kubernetes, and enterprise-grade security.',
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
    answer:
      'Hello! Welcome to Code Flick Technologies. I\'m here to help you learn about our services. What can I assist you with today?',
  },
];

function findAnswer(input: string): string | null {
  const lower = input.toLowerCase();
  for (const faq of FAQ) {
    if (faq.keywords.some((kw) => lower.includes(kw))) {
      return faq.answer;
    }
  }
  return null;
}

const quickActions = [
  'What services do you offer?',
  'Tell me about your AI solutions',
  'How can I contact you?',
  'What are your locations?',
];

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
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showContactForm]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMsg: Message = { id: nextId.current++, from: 'user', text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const answer = findAnswer(text);
      if (answer) {
        setMessages((prev) => [...prev, { id: nextId.current++, from: 'bot', text: answer }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: nextId.current++,
            from: 'bot',
            text: 'I\'m not sure I can answer that directly. Would you like to fill out a quick contact form so our team can get back to you?',
          },
        ]);
        setTimeout(() => setShowContactForm(true), 500);
      }
    }, 600);
  }

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
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
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
              ))}

              {/* Quick actions (show only after first bot message if few messages) */}
              {messages.length <= 2 && !showContactForm && (
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
                <button
                  onClick={() => setShowContactForm(true)}
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-accent-primary-400 hover:bg-accent-primary-500/10 transition-all"
                  aria-label="Open contact form"
                  title="Contact form"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
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
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim()}
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
