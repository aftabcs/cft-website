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
    { color: '#E53E3E', size: 800, top: '-12%', right: '-8%', blur: 120, opacity: 0.40 },
    { color: '#FF6B9D', size: 550, top: '35%', left: '-12%', blur: 90, opacity: 0.32, delay: 2 },
    { color: '#9B2C2C', size: 650, bottom: '8%', right: '18%', blur: 130, opacity: 0.28, delay: 4 },
    { color: '#FF4444', size: 300, top: '20%', right: '30%', blur: 60, opacity: 0.18, delay: 6 },
  ],
  services: [
    { color: '#E53E3E', size: 600, top: '-5%', left: '10%', blur: 100, opacity: 0.30 },
    { color: '#FF6B9D', size: 500, top: '50%', right: '-8%', blur: 90, opacity: 0.25, delay: 3 },
  ],
  about: [
    { color: '#FF6B9D', size: 600, top: '-8%', right: '15%', blur: 110, opacity: 0.30 },
    { color: '#E53E3E', size: 500, bottom: '15%', left: '-5%', blur: 80, opacity: 0.28, delay: 2 },
  ],
  industries: [
    { color: '#E53E3E', size: 550, top: '5%', right: '-10%', blur: 90, opacity: 0.32 },
    { color: '#9B2C2C', size: 600, bottom: '5%', left: '5%', blur: 110, opacity: 0.22, delay: 3 },
  ],
  contact: [
    { color: '#FF6B9D', size: 500, top: '-5%', left: '20%', blur: 80, opacity: 0.28 },
    { color: '#E53E3E', size: 450, top: '40%', right: '-5%', blur: 70, opacity: 0.30, delay: 2 },
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
