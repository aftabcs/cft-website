import type { Metadata } from 'next';
import Link from 'next/link';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions for Code Flick Technologies — governing the use of our website and IT services.',
  alternates: {
    canonical: 'https://codeftech.com/terms',
  },
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Code Flick Technologies website (codeftech.com) or engaging our IT services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.`,
  },
  {
    title: '2. Services',
    content: `Code Flick Technologies provides end-to-end IT solutions including software development, AI & machine learning, automation, FinTech solutions, e-commerce development, CRM implementation, healthcare systems, and related technology consulting services.

The scope, deliverables, timelines, and fees for specific engagements are defined in individual service agreements or statements of work executed between Code Flick Technologies and the client.`,
  },
  {
    title: '3. Use of Website',
    content: `You agree to use our website only for lawful purposes and in a manner that does not infringe upon or restrict the rights of others. You must not:

- Attempt to gain unauthorized access to our systems, servers, or networks.
- Introduce malicious code, viruses, or other harmful material.
- Use automated tools to scrape, mine, or extract content from our website without prior written consent.
- Reproduce, distribute, or commercially exploit any content from our website without authorization.`,
  },
  {
    title: '4. Intellectual Property',
    content: `All content on the Code Flick Technologies website — including text, graphics, logos, icons, images, code, and design — is the property of Code Flick Technologies or its licensors and is protected by applicable intellectual property laws.

Unless otherwise specified in a service agreement, all intellectual property developed during a client engagement is assigned to the client upon full payment. Code Flick Technologies retains the right to use general knowledge, techniques, and methodologies developed during engagements.`,
  },
  {
    title: '5. Client Responsibilities',
    content: `When engaging our services, clients are responsible for:

- Providing accurate and complete project requirements, specifications, and business context.
- Granting timely access to systems, environments, and resources required for service delivery.
- Reviewing and providing feedback on deliverables within agreed timelines.
- Ensuring that any materials provided to us do not infringe third-party intellectual property rights.`,
  },
  {
    title: '6. Confidentiality',
    content: `Both parties agree to maintain the confidentiality of proprietary and sensitive information exchanged during the course of a service engagement. Confidential information shall not be disclosed to third parties without prior written consent, except as required by law or as necessary to fulfill contractual obligations.`,
  },
  {
    title: '7. Payment Terms',
    content: `Payment terms, including fees, milestones, and schedules, are defined in individual service agreements. Unless otherwise specified:

- Invoices are due within 30 days of issuance.
- Late payments may incur interest at the rate specified in the service agreement.
- Code Flick Technologies reserves the right to suspend services in the event of non-payment beyond 60 days.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Code Flick Technologies shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or in connection with our services or website, including but not limited to loss of profits, data, business opportunities, or goodwill.

Our total aggregate liability for any claim arising from our services shall not exceed the fees paid by the client for the specific service giving rise to the claim.`,
  },
  {
    title: '9. Warranties & Disclaimers',
    content: `Our website and its contents are provided on an "as is" and "as available" basis. Code Flick Technologies makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or availability of the website.

For service engagements, warranties are defined in the applicable service agreement. Unless otherwise stated, we warrant that services will be performed in a professional and workmanlike manner consistent with industry standards.`,
  },
  {
    title: '10. Termination',
    content: `Either party may terminate a service engagement in accordance with the terms of the applicable service agreement. Code Flick Technologies reserves the right to suspend or terminate website access for any user who violates these Terms and Conditions, without prior notice.`,
  },
  {
    title: '11. Governing Law & Jurisdiction',
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of India. For clients based in Qatar or the Middle East, applicable local laws may also apply as specified in individual service agreements.

Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bhopal, Madhya Pradesh, India, unless an alternative jurisdiction is agreed upon in a service agreement.`,
  },
  {
    title: '12. Modifications',
    content: `Code Flick Technologies reserves the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page with a revised effective date. Continued use of our website or services after any changes constitutes acceptance of the updated terms.`,
  },
  {
    title: '13. Contact Us',
    content: `For questions about these Terms and Conditions, please contact us:

- **Email:** info@codeftech.com
- **Phone:** +91 7987421429
- **India Office:** Bhopal, Madhya Pradesh, India
- **Qatar Office:** Al Sadd, Doha, Qatar`,
  },
];

export default function TermsPage() {
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
              <li className="text-text-primary font-medium">Terms &amp; Conditions</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary-400 mb-3 rounded-chip bg-accent-primary-500/10 px-3 py-1 border border-accent-primary-500/15">
            Legal
          </span>
          <h1 className="font-sans font-bold text-hero text-text-primary max-w-2xl mb-4">
            Terms &amp; <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            The terms governing your use of the Code Flick Technologies website and services.
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
                <div className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                  {content.split('\n').map((line, j) => {
                    const trimmed = line.trim();
                    if (!trimmed) return <br key={j} />;
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
                    if (trimmed.startsWith('- **')) {
                      const match = trimmed.match(/^- \*\*(.+?)\*\*\s*(.+)$/);
                      if (match) {
                        return (
                          <p key={j} className="ml-4 mb-1.5">
                            <span className="text-text-primary">• </span>
                            <strong className="text-text-primary">{match[1]}</strong> {match[2]}
                          </p>
                        );
                      }
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
