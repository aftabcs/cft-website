import type { Metadata } from 'next';
import Link from 'next/link';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Code Flick Technologies — how we collect, use, and protect your personal data across our IT solutions and services.',
  alternates: {
    canonical: 'https://codeftech.com/privacy',
  },
};

const sections = [
  {
    title: '1. Information We Collect',
    content: `We may collect the following categories of personal information when you interact with our website, services, or team:

- **Contact Information** — Name, email address, phone number, company name, and job title provided through contact forms, email inquiries, or service agreements.
- **Technical Data** — IP address, browser type, operating system, device information, and browsing behavior collected automatically when you visit our website.
- **Cookies & Analytics** — We use cookies and similar tracking technologies to understand website usage patterns, improve user experience, and measure the effectiveness of our content. You can manage cookie preferences through your browser settings.
- **Service Data** — Information provided in the course of delivering our IT services, including project-related communications and documentation.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect for the following purposes:

- To respond to your inquiries and provide requested IT services.
- To communicate project updates, deliverables, and support information.
- To improve our website, services, and overall user experience.
- To send relevant industry insights or service updates (only with your consent — you may opt out at any time).
- To comply with applicable legal and regulatory obligations in India and Qatar.`,
  },
  {
    title: '3. Data Sharing & Third Parties',
    content: `We do not sell, rent, or trade your personal information to third parties. We may share data with:

- **Service Providers** — Trusted partners who assist in website hosting, analytics, email delivery, and cloud infrastructure, bound by confidentiality agreements.
- **Legal Compliance** — When required by law, regulation, or legal process under the jurisdictions of India or Qatar.
- **Business Transfers** — In connection with a merger, acquisition, or sale of assets, where your data would remain subject to this Privacy Policy.`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard technical and organizational security measures to protect your personal information, including encryption in transit (TLS/SSL), access controls, secure hosting environments, and regular security assessments. While no system is completely immune to risk, we are committed to safeguarding your data to the highest practical standard.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Contact and project data is typically retained for the duration of the business relationship and a reasonable period thereafter.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your jurisdiction, you may have the right to:

- Access the personal data we hold about you.
- Request correction of inaccurate or incomplete data.
- Request deletion of your personal data, subject to legal retention requirements.
- Withdraw consent for marketing communications at any time.
- Lodge a complaint with a relevant data protection authority.

To exercise any of these rights, contact us at **info@codeftech.com**.`,
  },
  {
    title: '7. International Data Transfers',
    content: `Code Flick Technologies operates from India and Qatar. If you access our services from other jurisdictions, your data may be transferred to and processed in these countries. We ensure that appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.`,
  },
  {
    title: '8. Children\u2019s Privacy',
    content: `Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such data, please contact us immediately and we will take steps to delete it.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. The updated policy will be posted on this page with a revised effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us:

- **Email:** info@codeftech.com
- **Phone:** +91 7987421429
- **India Office:** Bhopal, Madhya Pradesh, India
- **Qatar Office:** Al Sadd, Doha, Qatar`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-bg-base py-28 pt-40 overflow-hidden">
        <BackgroundBlobs page="about" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-accent-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text-primary font-medium">Privacy Policy</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
            Legal
          </span>
          <h1 className="font-sans font-bold text-hero text-text-primary max-w-2xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            How Code Flick Technologies collects, uses, and protects your personal information.
          </p>
          <p className="text-text-muted text-sm mt-4">
            Effective Date: April 1, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-bg-base py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map(({ title, content }, i) => (
            <AnimatedSection key={i}>
              <div className="glass-card p-8">
                <h2 className="font-sans font-bold text-h3 text-text-primary mb-4">{title}</h2>
                <div className="text-text-secondary text-sm leading-relaxed whitespace-pre-line prose-styles">
                  {content.split('\n').map((line, j) => {
                    const trimmed = line.trim();
                    if (!trimmed) return <br key={j} />;
                    if (trimmed.startsWith('- **')) {
                      const match = trimmed.match(/^- \*\*(.+?)\*\*\s*[—–-]\s*(.+)$/);
                      if (match) {
                        return (
                          <p key={j} className="ml-4 mb-1.5">
                            <span className="text-text-primary">• </span>
                            <strong className="text-text-primary">{match[1]}</strong>
                            <span className="text-text-muted"> — </span>
                            {match[2]}
                          </p>
                        );
                      }
                    }
                    if (trimmed.startsWith('- **Email:**')) {
                      return (
                        <p key={j} className="ml-4 mb-1.5">
                          <span className="text-text-primary">• </span>
                          <strong className="text-text-primary">Email: </strong>
                          <a href="mailto:info@codeftech.com" className="text-accent-primary-400 hover:underline">info@codeftech.com</a>
                        </p>
                      );
                    }
                    if (trimmed.startsWith('- **Phone:**')) {
                      return (
                        <p key={j} className="ml-4 mb-1.5">
                          <span className="text-text-primary">• </span>
                          <strong className="text-text-primary">Phone: </strong>
                          <a href="tel:+917987421429" className="text-accent-primary-400 hover:underline">+91 7987421429</a>
                        </p>
                      );
                    }
                    if (trimmed.startsWith('- ')) {
                      return (
                        <p key={j} className="ml-4 mb-1.5">
                          <span className="text-text-primary">• </span>
                          {trimmed.slice(2)}
                        </p>
                      );
                    }
                    return <p key={j} className="mb-2">{trimmed}</p>;
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
