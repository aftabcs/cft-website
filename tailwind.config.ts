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
          base: '#050505',
          surface: '#0A0A0A',
          elevated: '#111111',
          overlay: '#1A1A1A',
        },
        accent: {
          primary: {
            300: '#FB7185',
            400: '#F43F5E',
            500: '#E11D48',
            600: '#BE123C',
            700: '#9F1239',
          },
        },
        glass: {
          light: 'rgba(255,255,255,0.06)',
          medium: 'rgba(255,255,255,0.10)',
          heavy: 'rgba(255,255,255,0.16)',
          border: 'rgba(255,255,255,0.12)',
          'border-hover': 'rgba(255,255,255,0.22)',
          'border-accent': 'rgba(225,29,72,0.30)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#D4D4D4',
          muted: '#888888',
          subtle: '#555555',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['5rem', { lineHeight: '0.95', letterSpacing: '-0.05em', fontWeight: '900' }],
        hero: ['3.75rem', { lineHeight: '1.0', letterSpacing: '-0.04em', fontWeight: '800' }],
        h2: ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        h3: ['1.625rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-hero-text': 'linear-gradient(135deg, #FFFFFF 0%, #F43F5E 50%, #E11D48 100%)',
        'gradient-cta': 'linear-gradient(135deg, #E11D48 0%, #BE123C 50%, #9F1239 100%)',
        'gradient-cta-hover': 'linear-gradient(135deg, #F43F5E 0%, #E11D48 50%, #BE123C 100%)',
        'glass-sheen': 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(225,29,72,0.15) 0%, transparent 70%)',
      },
      borderRadius: {
        card: '20px',
        chip: '999px',
        btn: '10px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.60), inset 0 1px 0 rgba(255,255,255,0.10), inset 0 0 20px rgba(255,255,255,0.02)',
        'glass-hover': '0 16px 48px rgba(0,0,0,0.70), 0 0 40px rgba(225,29,72,0.08), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 0 30px rgba(255,255,255,0.04)',
        neo: '8px 8px 24px rgba(0,0,0,0.70), -4px -4px 16px rgba(255,255,255,0.02)',
        'glow-red': '0 0 60px rgba(225,29,72,0.20), 0 0 120px rgba(225,29,72,0.08)',
        'glow-red-sm': '0 0 30px rgba(225,29,72,0.15)',
        'btn-primary': '0 4px 20px rgba(225,29,72,0.30), 0 0 40px rgba(225,29,72,0.10), inset 0 1px 0 rgba(255,255,255,0.15)',
        'btn-primary-hover': '0 8px 36px rgba(225,29,72,0.40), 0 0 60px rgba(225,29,72,0.15), inset 0 1px 0 rgba(255,255,255,0.20)',
        nav: '0 1px 0 rgba(255,255,255,0.06)',
        'code-float': '0 8px 32px rgba(0,0,0,0.80), 0 0 20px rgba(225,29,72,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'blob-float': 'blobFloat 12s ease-in-out infinite',
        'code-float-1': 'codeFloat1 8s ease-in-out infinite',
        'code-float-2': 'codeFloat2 10s ease-in-out infinite',
        'code-float-3': 'codeFloat3 9s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        blobFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        codeFloat1: {
          '0%, 100%': { transform: 'translateY(0) rotate(2deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        codeFloat2: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-18px) rotate(-2deg)' },
        },
        codeFloat3: {
          '0%, 100%': { transform: 'translateY(0) rotate(1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
