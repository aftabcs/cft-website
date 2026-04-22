'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCircle, AlertCircle } from 'lucide-react';

type Props = {
  product: string;
  heading?: string;
  subheading?: string;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NotifyForm({
  product,
  heading = 'Get notified at launch',
  subheading = "Drop your email and we'll reach out with early access and updates.",
}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError(null);
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xojpwlvz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name || '(not provided)',
          email,
          message: `Early access request for ${product}`,
          source: `${product} waitlist`,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      setName('');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-8"
      >
        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-7 h-7 text-green-400" aria-hidden="true" />
        </div>
        <h3 className="font-semibold text-text-primary text-lg mb-1">You&apos;re on the list</h3>
        <p className="text-text-secondary text-sm max-w-sm">
          We&apos;ll email you as soon as {product} is ready for early access.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label={`${product} early access form`}>
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
          <Bell className="w-4 h-4 text-accent-primary-500" aria-hidden="true" />
          {heading}
        </h3>
        <p className="text-sm text-text-muted mt-1">{subheading}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full px-4 py-3 neo-input text-text-primary placeholder:text-text-subtle text-sm"
          aria-label="Your name"
        />
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          placeholder="you@company.com"
          className={`w-full px-4 py-3 neo-input text-text-primary placeholder:text-text-subtle text-sm ${
            error
              ? '!border-accent-primary-500 !shadow-[var(--shadow-neo-inset),0_0_0_3px_rgba(225,29,72,0.15)]'
              : ''
          }`}
          aria-label="Email address"
          aria-invalid={!!error}
        />
      </div>

      {error && (
        <p className="text-accent-primary-400 text-xs mt-2 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" aria-hidden="true" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-4 w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Notify Me'}
      </button>

      {status === 'error' && (
        <p className="text-accent-primary-400 text-xs mt-3 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" aria-hidden="true" />
          Something went wrong. Please try again or email info@codeftech.com.
        </p>
      )}
    </form>
  );
}
