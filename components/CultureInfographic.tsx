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
        animate: { y: [0, -4, 0] },
        transition: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" as const, delay: delay * 1.2 },
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`${className} z-10`}
    >
      <Inner
        {...innerProps}
        className="group flex w-[96px] flex-col items-center gap-2 rounded-lg border border-amber/30 bg-gradient-to-b from-[rgba(45,31,26,0.95)] to-[rgba(26,20,16,0.98)] px-2 py-3 shadow-[0_4px 16px_rgba(212,168,75,0.15),0_1px 4px_rgba(0,0,0,0.4)] backdrop-blur-md"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-amber/20 to-crimson/15 ring-1 ring-amber/30 shadow-inner">
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

function TraditionalLotusSvg({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden>
      <ellipse cx="32" cy="44" rx="5" ry="9" fill="#D4A84B" opacity="0.9" />
      <ellipse cx="22" cy="40" rx="4" ry="12" fill="#D4A84B" transform="rotate(-25 22 40)" opacity="0.85" />
      <ellipse cx="42" cy="40" rx="4" ry="12" fill="#D4A84B" transform="rotate(25 42 40)" opacity="0.85" />
      <ellipse cx="14" cy="34" rx="3" ry="10" fill="#D4A84B" opacity="0.7" transform="rotate(-45 14 34)" />
      <ellipse cx="50" cy="34" rx="3" ry="10" fill="#D4A84B" opacity="0.7" transform="rotate(45 50 34)" />
      <circle cx="32" cy="32" r="4" fill="#C8102E" />
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

  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

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
        animate: { rotateY: [0, 10, 0, -10, 0], rotateX: [0, 4, 0, -4, 0] },
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" as const, repeatType: "loop" as const },
        whileHover: { scale: 1.02 },
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
          "radial-gradient(circle at center, rgba(212,168,75,0.06) 0%, transparent 60%), linear-gradient(160deg, #1a1410 0%, #2d1f1a 50%, #3d2a1f 100%)",
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
              <stop offset="0%" stopColor="#D4A84B" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#D4A84B" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="centerGrad" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#E8C068" />
              <stop offset="100%" stopColor="#6b1520" />
            </radialGradient>
            <filter id="ciShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#D4A84B" floodOpacity="0.3" />
            </filter>
          </defs>

          <circle cx="170" cy="170" r="168" fill="url(#ciGlow)" />
          <circle cx="170" cy="170" r="148" fill="none" stroke="#D4A84B" strokeWidth="0.6" opacity="0.15" strokeDasharray="3 11" />
          <circle cx="170" cy="170" r="118" fill="none" stroke="#D4A84B" strokeWidth="0.8" opacity="0.25" strokeDasharray="2 7" />
          <circle cx="170" cy="170" r="84" fill="none" stroke="#C8102E" strokeWidth="0.8" opacity="0.2" />

          {ringDotAngles.map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <circle
                key={i}
                cx={170 + 118 * Math.cos(rad)}
                cy={170 + 118 * Math.sin(rad)}
                r="3.5"
                fill="#D4A84B"
                opacity="0.6"
                style={{ filter: "drop-shadow(0 0 4px rgba(212,168,75,0.6))" }}
              />
            );
          })}

          {lineCoords.map(([x1, y1, x2, y2], i) => {
            const lineAnimProps = mounted
              ? {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 0.5 },
                  viewport: { once: true },
                  transition: { duration: 0.8, delay: 0.15 + i * 0.12 },
                }
              : {};
            return (
              <Line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#D4A84B"
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
              className="flex h-[120px] w-[120px] flex-col items-center justify-center gap-1.5 rounded-full border-2 border-amber/50 bg-gradient-to-br from-amber via-gold to-burgundy"
              style={{ boxShadow: "0 0 0 5px rgba(212,168,75,0.1), 0 0 30px rgba(212,168,75,0.4), 0 6px 20px rgba(200,16,46,0.2)" }}
            >
              <TraditionalLotusSvg size={38} />
              <div className="text-center font-body text-[10px] font-bold leading-tight tracking-wide text-[#1a1410]">
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
