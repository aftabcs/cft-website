'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const serviceOptions = [
  'AI & ML',
  'Automation',
  'Software Development',
  'FinTech',
  'E-commerce',
  'Manufacturing',
  'CRM',
  'Healthcare',
  'Cloud & DevOps',
  'Other',
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.fullName.trim()) errors.fullName = 'Full name is required';
  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!form.company.trim()) errors.company = 'Company name is required';
  if (!form.phone.trim()) errors.phone = 'Phone number is required';
  if (!form.service) errors.service = 'Please select a service';
  if (!form.message.trim()) {
    errors.message = 'Message is required';
  } else if (form.message.trim().length < 20) {
    errors.message = 'Please provide at least 20 characters';
  }
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    // Simulate form submission — replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setForm(initialForm);
  }

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 bg-bg-elevated border rounded-btn text-text-primary placeholder:text-text-muted text-sm transition-all focus:outline-none focus:ring-1 ${
      errors[field]
        ? 'border-red-500 focus:border-red-400 focus:ring-red-500/30'
        : 'border-white/8 focus:border-accent-primary-500 focus:ring-accent-primary-500/20 hover:border-white/15'
    }`;

  const labelClass = 'block text-sm font-medium text-text-secondary mb-1.5';

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" aria-hidden="true" />
        </div>
        <h3 className="font-semibold text-text-primary text-xl mb-2">Message Sent!</h3>
        <p className="text-text-secondary text-sm max-w-sm">
          Thank you for reaching out. Our team will review your message and get back to you within
          24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-accent-primary-400 hover:text-accent-primary-300 font-medium transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      {/* Row 1: Full Name */}
      <div className="mb-4">
        <label htmlFor="fullName" className={labelClass}>
          Full Name <span className="text-accent-primary-400" aria-hidden="true">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          value={form.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className={inputClass('fullName')}
          aria-required="true"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-accent-primary-400" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={inputClass('email')}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-accent-primary-400" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={inputClass('phone')}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Company */}
      <div className="mb-4">
        <label htmlFor="company" className={labelClass}>
          Company Name <span className="text-accent-primary-400" aria-hidden="true">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={handleChange}
          placeholder="Your company"
          className={inputClass('company')}
          aria-required="true"
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? 'company-error' : undefined}
        />
        {errors.company && (
          <p id="company-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />
            {errors.company}
          </p>
        )}
      </div>

      {/* Row 4: Service Interest */}
      <div className="mb-4">
        <label htmlFor="service" className={labelClass}>
          Service of Interest <span className="text-accent-primary-400" aria-hidden="true">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputClass('service')} cursor-pointer`}
          aria-required="true"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'service-error' : undefined}
        >
          <option value="" disabled>
            Select a service...
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />
            {errors.service}
          </p>
        )}
      </div>

      {/* Row 5: Message */}
      <div className="mb-6">
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-accent-primary-400" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          className={`${inputClass('message')} resize-none`}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-cta disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base rounded-btn shadow-glow-cyan hover:brightness-110 hover:shadow-glow-violet transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary-500"
        aria-live="polite"
      >
        {status === 'submitting' ? (
          <>
            <svg
              className="animate-spin w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
