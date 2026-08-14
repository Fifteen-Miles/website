import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type ReactNode } from "react";

export function TiltFrame({ children }: { children: ReactNode }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const springX = useSpring(mx, { stiffness: 90, damping: 24, mass: 1 });
  const springY = useSpring(my, { stiffness: 90, damping: 24, mass: 1 });

  const rotX = useTransform(springY, [0, 1], [5, -5]);
  const rotY = useTransform(springX, [0, 1], [-5, 5]);
  const sheenX = useTransform(springX, [0, 1], ["-60%", "160%"]);
  const sheenOpacity = useTransform(springX, [0.15, 0.5, 0.85], [0, 0.09, 0]);

  return (
    <motion.div
      style={{ rotateX: rotX, rotateY: rotY, perspective: 1400 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      className="relative w-full"
    >
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] shadow-[0_60px_160px_-40px_rgba(0,0,0,0.9)]">
        {children}
        <motion.div
          aria-hidden
          style={{ left: sheenX, opacity: sheenOpacity }}
          className="pointer-events-none absolute inset-y-0 w-[40%] -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}

