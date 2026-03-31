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

const blobConfigs: Record<string, Blob[]> = {
  home: [
    { color: '#E53E3E', size: 600, top: '-10%', right: '-5%', blur: 120, opacity: 0.25 },
    { color: '#FF6B9D', size: 400, top: '40%', left: '-10%', blur: 100, opacity: 0.18, delay: 2 },
    { color: '#9B2C2C', size: 500, bottom: '10%', right: '20%', blur: 140, opacity: 0.15, delay: 4 },
  ],
  services: [
    { color: '#E53E3E', size: 500, top: '-5%', left: '10%', blur: 120, opacity: 0.20 },
    { color: '#FF6B9D', size: 450, top: '50%', right: '-8%', blur: 110, opacity: 0.15, delay: 3 },
  ],
  about: [
    { color: '#FF6B9D', size: 500, top: '-8%', right: '15%', blur: 130, opacity: 0.20 },
    { color: '#E53E3E', size: 400, bottom: '15%', left: '-5%', blur: 100, opacity: 0.18, delay: 2 },
  ],
  industries: [
    { color: '#E53E3E', size: 450, top: '5%', right: '-10%', blur: 110, opacity: 0.22 },
    { color: '#9B2C2C', size: 500, bottom: '5%', left: '5%', blur: 130, opacity: 0.15, delay: 3 },
  ],
  contact: [
    { color: '#FF6B9D', size: 400, top: '-5%', left: '20%', blur: 100, opacity: 0.18 },
    { color: '#E53E3E', size: 350, top: '40%', right: '-5%', blur: 90, opacity: 0.20, delay: 2 },
  ],
};

export default function BackgroundBlobs({ page }: { page: keyof typeof blobConfigs }) {
  const blobs = blobConfigs[page] ?? blobConfigs.home;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-blob-float"
          style={{
            background: blob.color,
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
