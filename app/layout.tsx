import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import PageLoader from '@/components/PageLoader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'CodeFlick Technologies — From Software to AI, We Build Everything',
    template: '%s | CodeFlick Technologies',
  },
  description:
    'CodeFlick Technologies delivers end-to-end IT solutions across AI, Automation, FinTech, E-commerce, Healthcare, and more. Trusted by Ajman Bank, Qatar Airways, Government of Uganda, and leading enterprises worldwide.',
  keywords: [
    'IT solutions',
    'AI development',
    'FinTech',
    'digital transformation',
    'software development',
    'CodeFlick Technologies',
    'codeftech',
    'automation',
    'machine learning',
    'enterprise software',
  ],
  authors: [{ name: 'CodeFlick Technologies' }],
  creator: 'CodeFlick Technologies',
  metadataBase: new URL('https://codeftech.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codeftech.com',
    siteName: 'CodeFlick Technologies',
    title: 'CodeFlick Technologies — From Software to AI, We Build Everything',
    description:
      'End-to-end IT solutions across AI, Automation, FinTech, and Enterprise systems. Trusted by global leaders.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CodeFlick Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeFlick Technologies',
    description: 'From Software to AI — We Build Everything',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&!window.matchMedia('(prefers-color-scheme: light)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <PageLoader />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-primary-500 focus:text-bg-base focus:rounded-btn focus:font-semibold"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
