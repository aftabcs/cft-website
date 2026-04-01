'use client';

export default function TechCircuit({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent-primary-500 opacity-[0.06] dark:opacity-[0.08]"
      >
        {/* Horizontal lines */}
        <line x1="0" y1="80" x2="160" y2="80" stroke="currentColor" strokeWidth="1" />
        <line x1="200" y1="80" x2="400" y2="80" stroke="currentColor" strokeWidth="1" />
        <line x1="40" y1="160" x2="360" y2="160" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="240" x2="180" y2="240" stroke="currentColor" strokeWidth="1" />
        <line x1="220" y1="240" x2="400" y2="240" stroke="currentColor" strokeWidth="1" />
        <line x1="80" y1="320" x2="320" y2="320" stroke="currentColor" strokeWidth="1" />

        {/* Vertical lines */}
        <line x1="80" y1="40" x2="80" y2="160" stroke="currentColor" strokeWidth="1" />
        <line x1="200" y1="0" x2="200" y2="120" stroke="currentColor" strokeWidth="1" />
        <line x1="320" y1="80" x2="320" y2="240" stroke="currentColor" strokeWidth="1" />
        <line x1="160" y1="200" x2="160" y2="360" stroke="currentColor" strokeWidth="1" />
        <line x1="240" y1="240" x2="240" y2="400" stroke="currentColor" strokeWidth="1" />

        {/* Junction nodes */}
        <circle cx="80" cy="80" r="4" fill="currentColor" />
        <circle cx="200" cy="80" r="4" fill="currentColor" />
        <circle cx="320" cy="80" r="4" fill="currentColor" />
        <circle cx="80" cy="160" r="4" fill="currentColor" />
        <circle cx="160" cy="160" r="4" fill="currentColor" />
        <circle cx="320" cy="160" r="3" fill="currentColor" />
        <circle cx="160" cy="240" r="4" fill="currentColor" />
        <circle cx="240" cy="240" r="4" fill="currentColor" />
        <circle cx="320" cy="240" r="3" fill="currentColor" />
        <circle cx="160" cy="320" r="4" fill="currentColor" />
        <circle cx="240" cy="320" r="3" fill="currentColor" />

        {/* Accent rings */}
        <circle cx="200" cy="80" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="160" cy="240" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="80" cy="160" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />

        {/* Diagonal connectors */}
        <line x1="200" y1="80" x2="240" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="160" y1="240" x2="120" y2="280" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="320" y1="160" x2="360" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
}
