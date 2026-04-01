'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  value: string;
  className?: string;
  duration?: number;
};

export default function CountUp({ value, className, duration = 1.8 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState('0');

  // Parse the numeric part and suffix (e.g. "50+" -> 50, "+")
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!isInView) return;

    const steps = 60;
    const stepDuration = (duration * 1000) / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      // Ease-out curve
      const progress = 1 - Math.pow(1 - current / steps, 3);
      const val = Math.round(progress * target);
      setDisplay(val + suffix);

      if (current >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, target, suffix, value, duration]);

  return (
    <span ref={ref} className={className}>
      {isInView ? display : '0' + suffix}
    </span>
  );
}
