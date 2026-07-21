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
import { useIsMounted } from "@/hooks/useIsMounted";

const nodes = [
  { icon: BookOpen, lines: ["Kinh tế", "chưa bền vững"], delay: 0.3 },
  { icon: Heart, lines: ["Vấn đề", "xã hội"], delay: 0.45 },
  { icon: Building2, lines: ["Bốn", "nguy cơ"], delay: 0.6 },
  { icon: Globe2, lines: ["Nguyên nhân", "chủ quan"], delay: 0.75 },
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
  mounted,
}: {
  icon: LucideIcon;
  lines: string[];
  className: string;
  delay: number;
  mounted: boolean;
}) {
  const Wrapper = mounted ? motion.div : "div";
  const Inner = mounted ? motion.div : "div";

  const wrapperProps = mounted
    ? {
        initial: { opacity: 0, scale: 0.4 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
      }
    : {};

  const innerProps = mounted
    ? {
        animate: { y: [0, -6, 0] },
        transition: { duration: 3.6 + delay, repeat: Infinity, ease: "easeInOut" as const, delay: delay * 1.2 },
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`${className} z-10`}
    >
      <Inner
        {...innerProps}
        className="group flex w-[96px] flex-col items-center gap-2 rounded-2xl border border-amber/40 bg-gradient-to-b from-[#161e35]/90 to-[#0a0e1a]/90 px-2 py-3 shadow-[0_4px_24px_rgba(245,197,24,0.2),0_1px_4px_rgba(0,0,0,0.4)] backdrop-blur-md"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber/20 to-crimson/15 ring-1 ring-amber/40 shadow-inner">
          <Icon className="h-[20px] w-[20px] text-amber" strokeWidth={2} />
        </div>
        <div className="text-center font-body text-[9px] font-semibold leading-snug text-cream">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </Inner>
    </Wrapper>
  );
}

function LotusSvg({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden>
      <ellipse cx="32" cy="44" rx="6" ry="10" fill="#f5c518" opacity="0.9" />
      <ellipse cx="20" cy="40" rx="5" ry="14" fill="#f5c518" transform="rotate(-25 20 40)" opacity="0.85" />
      <ellipse cx="44" cy="40" rx="5" ry="14" fill="#f5c518" transform="rotate(25 44 40)" opacity="0.85" />
      <ellipse cx="12" cy="36" rx="4" ry="12" fill="#f5c518" opacity="0.7" transform="rotate(-45 12 36)" />
      <ellipse cx="52" cy="36" rx="4" ry="12" fill="#f5c518" opacity="0.7" transform="rotate(45 52 36)" />
      <circle cx="32" cy="32" r="5" fill="#dc2626" />
    </svg>
  );
}

export function CultureInfographic() {
  const mounted = useIsMounted();
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

  const SceneWrapper = mounted ? motion.div : "div";
  const Center = mounted ? motion.div : "div";
  const Line = mounted ? motion.line : "line";

  const sceneProps = mounted
    ? {
        style: { rotateX, rotateY, transformStyle: "preserve-3d" as const },
        animate: { rotateY: [0, 14, 0, -14, 0], rotateX: [0, 6, 0, -6, 0] },
        transition: { duration: 9, repeat: Infinity, ease: "easeInOut" as const, repeatType: "loop" as const },
        whileHover: { scale: 1.03 },
      }
    : {};

  const centerProps = mounted
    ? {
        initial: { scale: 0.5, opacity: 0 },
        whileInView: { scale: 1, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: "easeOut" as const },
      }
    : {};

  return (
    <div
      ref={containerRef}
      className="relative flex h-full min-h-[340px] w-full items-center justify-center"
      style={{
        perspective: "900px",
        background:
          "radial-gradient(circle at center, rgba(245,197,24,0.06) 0%, transparent 60%), linear-gradient(160deg, #0a0e1a 0%, #0f1729 50%, #161e35 100%)",
      }}
      onMouseMove={reduced ? undefined : handleMouseMove}
      onMouseLeave={reduced ? undefined : handleMouseLeave}
    >
      {/* 3D rotating wrapper */}
      <SceneWrapper
        className="relative w-full h-full flex items-center justify-center"
        {...sceneProps}
      >
        {/* Decorative SVG layer */}
        <svg viewBox="0 0 340 340" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <radialGradient id="ciGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f5c518" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f5c518" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="centerGrad" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#7b1e2e" />
            </radialGradient>
            <filter id="ciShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="#f5c518" floodOpacity="0.4" />
            </filter>
          </defs>

          <circle cx="170" cy="170" r="168" fill="url(#ciGlow)" />
          <circle cx="170" cy="170" r="148" fill="none" stroke="#f5c518" strokeWidth="0.6" opacity="0.18" strokeDasharray="3 11" />
          <circle cx="170" cy="170" r="118" fill="none" stroke="#f5c518" strokeWidth="0.8" opacity="0.3" strokeDasharray="2 7" />
          <circle cx="170" cy="170" r="84" fill="none" stroke="#f43f5e" strokeWidth="0.8" opacity="0.25" />

          {ringDotAngles.map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <circle
                key={i}
                cx={170 + 118 * Math.cos(rad)}
                cy={170 + 118 * Math.sin(rad)}
                r="4"
                fill="#f5c518"
                opacity="0.7"
                style={{ filter: "drop-shadow(0 0 4px rgba(245,197,24,0.8))" }}
              />
            );
          })}

          {lineCoords.map(([x1, y1, x2, y2], i) => {
            const lineAnimProps = mounted
              ? {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 0.6 },
                  viewport: { once: true },
                  transition: { duration: 0.8, delay: 0.15 + i * 0.12 },
                }
              : {};
            return (
              <Line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#f5c518"
                strokeWidth="1.5"
                strokeDasharray="5 6"
                {...lineAnimProps}
              />
            );
          })}
        </svg>

        {/* HTML positioned nodes */}
        <div className="relative h-[340px] w-[340px]">
          {/* Center medallion */}
          <Center
            {...centerProps}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <div
              className="flex h-[124px] w-[124px] flex-col items-center justify-center gap-1.5 rounded-full border-2 border-amber bg-gradient-to-br from-[#fbbf24] via-[#f5c518] to-[#7b1e2e]"
              style={{ boxShadow: "0 0 0 6px rgba(245,197,24,0.15), 0 0 40px rgba(245,197,24,0.5), 0 6px 20px rgba(220,38,38,0.3)" }}
            >
              <LotusSvg size={40} />
              <div className="text-center font-body text-[10px] font-bold leading-tight tracking-wide text-[#0a0e1a]">
                <div>Hạn chế</div>
                <div>& Nguyên nhân</div>
              </div>
            </div>
          </Center>

          <NodeCard
            icon={nodes[0].icon}
            lines={nodes[0].lines}
            className="absolute top-0 left-1/2 -translate-x-1/2"
            delay={nodes[0].delay}
            mounted={mounted}
          />
          <NodeCard
            icon={nodes[1].icon}
            lines={nodes[1].lines}
            className="absolute right-0 top-1/2 -translate-y-1/2"
            delay={nodes[1].delay}
            mounted={mounted}
          />
          <NodeCard
            icon={nodes[2].icon}
            lines={nodes[2].lines}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            delay={nodes[2].delay}
            mounted={mounted}
          />
          <NodeCard
            icon={nodes[3].icon}
            lines={nodes[3].lines}
            className="absolute left-0 top-1/2 -translate-y-1/2"
            delay={nodes[3].delay}
            mounted={mounted}
          />
        </div>
      </SceneWrapper>
    </div>
  );
}