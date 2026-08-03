export default function GrainEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9990] overflow-hidden opacity-30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,160,89,0.04),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(140,115,85,0.03),transparent_50%)]" />
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(140,115,85,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(140,115,85,0.02)_1px,transparent_1px)] [background-size:120px_120px] opacity-40" />
    </div>
  );
}