'use client';

import { useTheme } from '@/components/ThemeProvider';

interface Blob {
  color: string;
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  blur: number;
  opacity: number;
  delay?: number;
}

type PageKey = 'home' | 'services' | 'about' | 'industries' | 'contact';

const darkBlobs: Record<PageKey, Blob[]> = {
  home: [
    { color: '#E11D48', size: 900, top: '-15%', right: '-10%', blur: 160, opacity: 0.12 },
    { color: '#9F1239', size: 600, top: '40%', left: '-15%', blur: 120, opacity: 0.10, delay: 2 },
    { color: '#F43F5E', size: 500, bottom: '5%', right: '20%', blur: 140, opacity: 0.08, delay: 4 },
    { color: '#BE123C', size: 350, top: '15%', right: '35%', blur: 80, opacity: 0.06, delay: 6 },
  ],
  services: [
    { color: '#E11D48', size: 700, top: '-8%', left: '5%', blur: 140, opacity: 0.10 },
    { color: '#9F1239', size: 550, top: '50%', right: '-10%', blur: 120, opacity: 0.08, delay: 3 },
  ],
  about: [
    { color: '#BE123C', size: 650, top: '-10%', right: '10%', blur: 130, opacity: 0.10 },
    { color: '#E11D48', size: 500, bottom: '10%', left: '-8%', blur: 110, opacity: 0.07, delay: 2 },
  ],
  industries: [
    { color: '#E11D48', size: 600, top: '3%', right: '-12%', blur: 130, opacity: 0.09 },
    { color: '#9F1239', size: 650, bottom: '0%', left: '0%', blur: 140, opacity: 0.10, delay: 3 },
  ],
  contact: [
    { color: '#BE123C', size: 550, top: '-8%', left: '15%', blur: 120, opacity: 0.10 },
    { color: '#E11D48', size: 500, top: '35%', right: '-8%', blur: 100, opacity: 0.07, delay: 2 },
  ],
};

const lightBlobs: Record<PageKey, Blob[]> = {
  home: [
    { color: '#818CF8', size: 900, top: '-15%', right: '-10%', blur: 160, opacity: 0.15 },
    { color: '#6366F1', size: 600, top: '40%', left: '-15%', blur: 120, opacity: 0.12, delay: 2 },
    { color: '#2DD4BF', size: 500, bottom: '5%', right: '20%', blur: 140, opacity: 0.10, delay: 4 },
    { color: '#A78BFA', size: 350, top: '15%', right: '35%', blur: 80, opacity: 0.08, delay: 6 },
  ],
  services: [
    { color: '#818CF8', size: 700, top: '-8%', left: '5%', blur: 140, opacity: 0.12 },
    { color: '#2DD4BF', size: 550, top: '50%', right: '-10%', blur: 120, opacity: 0.10, delay: 3 },
  ],
  about: [
    { color: '#6366F1', size: 650, top: '-10%', right: '10%', blur: 130, opacity: 0.12 },
    { color: '#818CF8', size: 500, bottom: '10%', left: '-8%', blur: 110, opacity: 0.09, delay: 2 },
  ],
  industries: [
    { color: '#A78BFA', size: 600, top: '3%', right: '-12%', blur: 130, opacity: 0.11 },
    { color: '#2DD4BF', size: 650, bottom: '0%', left: '0%', blur: 140, opacity: 0.12, delay: 3 },
  ],
  contact: [
    { color: '#6366F1', size: 550, top: '-8%', left: '15%', blur: 120, opacity: 0.12 },
    { color: '#818CF8', size: 500, top: '35%', right: '-8%', blur: 100, opacity: 0.09, delay: 2 },
  ],
};

export default function BackgroundBlobs({ page }: { page: PageKey }) {
  const { theme } = useTheme();
  const blobs = theme === 'dark'
    ? (darkBlobs[page] ?? darkBlobs.home)
    : (lightBlobs[page] ?? lightBlobs.home);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500" aria-hidden="true">
      {blobs.map((blob, i) => (
        <div
          key={`${theme}-${i}`}
          className="absolute rounded-full animate-blob-float"
          style={{
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            width: blob.size,
            height: blob.size,
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
            filter: `blur(${blob.blur}px)`,
            opacity: blob.opacity,
            animationDelay: blob.delay ? `${blob.delay}s` : '0s',
          }}
        />
      ))}
    </div>
  );
}
