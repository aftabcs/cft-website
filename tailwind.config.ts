import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0A0A0A',
          surface: '#111111',
          elevated: '#1A1A1A',
          overlay: '#222222',
        },
        accent: {
          primary: {
            300: '#FF6B6B',
            400: '#FF4444',
            500: '#E53E3E',
            600: '#C53030',
            700: '#9B2C2C',
          },
        },
        glass: {
          light: 'rgba(255,255,255,0.10)',
          medium: 'rgba(255,255,255,0.15)',
          heavy: 'rgba(255,255,255,0.22)',
          border: 'rgba(255,255,255,0.18)',
          'border-hover': 'rgba(255,255,255,0.30)',
          'border-red': 'rgba(229,62,62,0.35)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E0E0E0',
          muted: '#999999',
          subtle: '#666666',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['4.5rem', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
        hero: ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h2: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h3: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'gradient-hero-text': 'linear-gradient(135deg, #FFFFFF 0%, #FF6B6B 50%, #E53E3E 100%)',
        'gradient-cta': 'linear-gradient(135deg, #E53E3E 0%, #C53030 100%)',
        'glass-sheen': 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0) 100%)',
      },
      borderRadius: {
        card: '20px',
        chip: '999px',
        btn: '8px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 0 20px rgba(255,255,255,0.03)',
        'glass-hover': '0 16px 48px rgba(0,0,0,0.60), 0 0 40px rgba(229,62,62,0.10), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 0 30px rgba(255,255,255,0.05)',
        neo: '8px 8px 24px rgba(0,0,0,0.60), -4px -4px 16px rgba(255,255,255,0.04)',
        'glow-red': '0 0 50px rgba(229,62,62,0.30)',
        'btn-red': '0 4px 20px rgba(229,62,62,0.40), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15)',
        'btn-red-hover': '0 8px 36px rgba(229,62,62,0.55), 0 0 20px rgba(229,62,62,0.25), inset 0 1px 0 rgba(255,255,255,0.30)',
        nav: '0 1px 0 rgba(255,255,255,0.10)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'blob-float': 'blobFloat 10s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        blobFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
