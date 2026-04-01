export default function GradientDivider() {
  return (
    <div className="relative h-px w-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary-500/20 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
    </div>
  );
}
