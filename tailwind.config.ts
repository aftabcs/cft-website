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
          base: '#050816',
          surface: '#0d1117',
          elevated: '#161b27',
          overlay: '#1e2636',
        },
        accent: {
          primary: {
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
          },
          secondary: {
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
          },
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#94a3b8',
          muted: '#475569',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['4.5rem', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
        hero: ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h2: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h3: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'gradient-hero-text': 'linear-gradient(135deg, #67e8f9 0%, #a78bfa 100%)',
        'gradient-cta': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
        'gradient-bg-mesh':
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(6,182,212,0.15) 0%, transparent 100%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139,92,246,0.10) 0%, transparent 100%)',
      },
      borderRadius: {
        card: '16px',
        chip: '999px',
        btn: '8px',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(6,182,212,0.15)',
        'glow-violet': '0 0 40px rgba(139,92,246,0.15)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(6,182,212,0.08)',
        nav: '0 1px 0 rgba(255,255,255,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
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
      },
    },
  },
  plugins: [],
};

export default config;
