import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import PageLoader from '@/components/PageLoader';
import ChatWidget from '@/components/ChatWidget';

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
    default: 'Code Flick Technologies — From Software to AI, We Build Everything',
    template: '%s | Code Flick Technologies',
  },
  description:
    'Code Flick Technologies delivers end-to-end IT solutions across AI, Automation, FinTech, E-commerce, Healthcare, and more. Trusted by Ajman Bank, Qatar Airways, Government of Uganda, and leading enterprises worldwide.',
  keywords: [
    'IT solutions',
    'AI development',
    'FinTech',
    'digital transformation',
    'software development',
    'Code Flick Technologies',
    'codeftech',
    'automation',
    'machine learning',
    'enterprise software',
  ],
  authors: [{ name: 'Code Flick Technologies' }],
  creator: 'Code Flick Technologies',
  metadataBase: new URL('https://codeftech.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codeftech.com',
    siteName: 'Code Flick Technologies',
    title: 'Code Flick Technologies — From Software to AI, We Build Everything',
    description:
      'End-to-end IT solutions across AI, Automation, FinTech, and Enterprise systems. Trusted by global leaders.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Code Flick Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Flick Technologies',
    description: 'From Software to AI — We Build Everything',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml' }],
  },
  manifest: '/manifest.json',
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
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
