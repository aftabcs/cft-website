'use client';

import Image from 'next/image';

const logos = [
  { name: 'Ajman Bank', src: '/logos/Ajman_Bank_Logo.png' },
  { name: 'Capital Bank of Jordan', src: '/logos/Capital_Bank_of_Jordan_logo.png' },
  { name: 'Government of India', src: '/logos/Government_of_India_logo.png' },
  { name: 'Government of Uganda', src: '/logos/Government_of_Uganda_logo.png' },
  { name: 'Invest Bank', src: '/logos/Invest_Bank_logo.png' },
  { name: 'MPSEDC', src: '/logos/MPSEDC_logo.png' },
  { name: 'National Bank of Iraq', src: '/logos/National_Bank_of_Iraq_logo.png' },
  { name: 'Qatar Airways', src: '/logos/Qatar_Airways_logo.png' },
];

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-r from-bg-base to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-l from-bg-base to-transparent" />

      <div className="flex animate-marquee gap-16 sm:gap-24 w-max">
        {/* Render logos twice for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex items-center justify-center flex-shrink-0 h-14 w-36 sm:h-16 sm:w-44 transition-all duration-500"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={160}
              height={56}
              className="object-contain max-h-12 sm:max-h-14 w-auto"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
