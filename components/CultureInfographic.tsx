"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { BookOpen, Building2, Globe2, Heart, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { LotusIcon } from "@/components/ui/decorations/LotusIcon";

const nodes = [
  { icon: BookOpen, lines: ["Phát triển", "toàn diện"], delay: 0.3 },
  { icon: Heart,    lines: ["Môi trường", "lành mạnh"], delay: 0.45 },
  { icon: Building2, lines: ["VH chính trị", "& Kinh tế"], delay: 0.6 },
  { icon: Globe2,   lines: ["Hội nhập", "quốc tế"],    delay: 0.75 },
];

const lineCoords = [
  [170, 170, 170, 28],
  [170, 170, 312, 170],
  [170, 170, 170, 312],
  [170, 170, 28, 170],
] as const;

const ringDotAngles = [270, 0, 90, 180];

function NodeCard({
  icon: Icon,
  lines,
  className,
  delay,
  reduced,
}: {
  icon: LucideIcon;
  lines: string[];
  className: string;
  delay: number;
  reduced: boolean;
}) {
  return (
    <motion.div
      className={`${className} z-10`}
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "backOut" }}
    >
      <motion.div
        animate={reduced ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 3.6 + delay, repeat: Infinity, ease: "easeInOut", delay: delay * 1.2 }}
        className="flex w-[88px] flex-col items-center gap-2 rounded-2xl border border-gold/50 bg-gradient-to-b from-white to-amber-50/70 px-2 py-3 shadow-[0_4px_18px_rgba(123,30,46,0.13),0_1px_4px_rgba(123,30,46,0.07)]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-burgundy/15 to-burgundy/5 ring-1 ring-burgundy/25 shadow-inner">
          <Icon className="h-[18px] w-[18px] text-burgundy" strokeWidth={2} />
        </div>
        <div className="text-center font-body text-[8.5px] font-semibold leading-snug text-brown">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CultureInfographic() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [18, -18]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-22, 22]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      className="relative flex h-full min-h-[340px] w-full items-center justify-center illustration-variant-culture"
      style={{ perspective: "900px" }}
      onMouseMove={reduced ? undefined : handleMouseMove}
      onMouseLeave={reduced ? undefined : handleMouseLeave}
    >
      {/* 3D rotating wrapper */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY, transformStyle: "preserve-3d" }}
        animate={reduced ? undefined : {
          rotateY: [0, 14, 0, -14, 0],
          rotateX: [0, 6, 0, -6, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
        whileHover={{ scale: 1.03 }}
      >

      {/* Decorative SVG layer */}
      <svg viewBox="0 0 340 340" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="ciGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF4E0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFF4E0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="centerGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF8F2" />
            <stop offset="100%" stopColor="#F5E3D0" />
          </radialGradient>
          <filter id="ciShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#7B1E2E" floodOpacity="0.18" />
          </filter>
        </defs>

        <circle cx="170" cy="170" r="168" fill="url(#ciGlow)" />
        <circle cx="170" cy="170" r="148" fill="none" stroke="#7B1E2E" strokeWidth="0.5" opacity="0.08" strokeDasharray="3 11" />
        <circle cx="170" cy="170" r="118" fill="none" stroke="#F5C518" strokeWidth="0.8" opacity="0.22" strokeDasharray="2 7" />
        <circle cx="170" cy="170" r="84"  fill="none" stroke="#7B1E2E" strokeWidth="0.8" opacity="0.1" />

        {/* Gold accent dots where axes cross the middle ring */}
        {ringDotAngles.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <circle
              key={i}
              cx={170 + 118 * Math.cos(rad)}
              cy={170 + 118 * Math.sin(rad)}
              r="3.5"
              fill="#F5C518"
              opacity="0.45"
            />
          );
        })}

        {/* Animated connecting lines */}
        {lineCoords.map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#F5C518"
            strokeWidth="1.5"
            strokeDasharray="5 6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.45 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 + i * 0.12 }}
          />
        ))}
      </svg>

      {/* HTML positioned nodes */}
      <div className="relative h-[340px] w-[340px]">
        {/* Center medallion */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            className="flex h-[116px] w-[116px] flex-col items-center justify-center gap-1.5 rounded-full border-2 border-burgundy/65 bg-gradient-to-br from-[#FFF6EE] to-[#F8E5D4] shadow-[0_0_32px_rgba(123,30,46,0.2),0_6px_16px_rgba(123,30,46,0.14)]"
            style={{ boxShadow: "0 0 0 6px rgba(245,197,24,0.12), 0 0 32px rgba(123,30,46,0.2), 0 6px 16px rgba(123,30,46,0.14)" }}
          >
            <LotusIcon size={36} />
            <div className="text-center font-body text-[9.5px] font-bold leading-tight tracking-wide text-burgundy">
              <div>Văn hóa</div>
              <div>Con người</div>
            </div>
          </div>
        </motion.div>

        {/* Top: Phát triển toàn diện */}
        <NodeCard
          icon={nodes[0].icon}
          lines={nodes[0].lines}
          className="absolute top-0 left-1/2 -translate-x-1/2"
          delay={nodes[0].delay}
          reduced={!!reduced}
        />
        {/* Right: Môi trường lành mạnh */}
        <NodeCard
          icon={nodes[1].icon}
          lines={nodes[1].lines}
          className="absolute right-0 top-1/2 -translate-y-1/2"
          delay={nodes[1].delay}
          reduced={!!reduced}
        />
        {/* Bottom: VH chính trị & KT */}
        <NodeCard
          icon={nodes[2].icon}
          lines={nodes[2].lines}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          delay={nodes[2].delay}
          reduced={!!reduced}
        />
        {/* Left: Hội nhập quốc tế */}
        <NodeCard
          icon={nodes[3].icon}
          lines={nodes[3].lines}
          className="absolute left-0 top-1/2 -translate-y-1/2"
          delay={nodes[3].delay}
          reduced={!!reduced}
        />
      </div>
      </motion.div>
    </div>
  );
}
