"use client";

import { useState, useEffect, type ReactNode, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { IllustrationIconName, IllustrationVariant } from "@/data/illustrations";
import { blurDataURL } from "@/lib/blur";
import { illustrationIconMap } from "@/lib/illustration-icons";
import { IllustrationPlaceholder } from "@/components/ui/IllustrationPlaceholder";

type IllustrationSize = "sm" | "md" | "lg" | "hero";

type IllustrationCardProps = {
  title: string;
  description?: string;
  imageSrc?: string;
  icon?: LucideIcon;
  iconName?: IllustrationIconName;
  variant?: IllustrationVariant;
  className?: string;
  size?: IllustrationSize;
  delay?: number;
  floating?: boolean;
  showCaption?: boolean;
  children?: ReactNode;
  skipImage?: boolean;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
};

const sizeClasses: Record<IllustrationSize, string> = {
  sm: "aspect-[16/10] w-full",
  md: "aspect-[4/5] w-full max-h-[400px]",
  lg: "aspect-[4/3] w-full max-h-[440px]",
  hero: "aspect-[4/5] w-full max-h-[520px] lg:aspect-square",
};

export function IllustrationCard({
  title,
  description,
  imageSrc,
  icon,
  iconName,
  variant = "hero",
  className = "",
  size = "md",
  delay = 0,
  floating = false,
  showCaption = true,
  children,
  skipImage = false,
  objectPosition = "center",
  objectFit = "cover",
}: IllustrationCardProps) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => setMounted(true), []);

  const showImage = Boolean(imageSrc && !imageError && !skipImage && !children);
  const ResolvedIcon = icon ?? (iconName ? illustrationIconMap[iconName] : undefined);

  // 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const inner = children ? (
    <div className="relative h-full w-full">{children}</div>
  ) : showImage && imageSrc ? (
    <Image
      src={imageSrc}
      alt={title}
      fill
      className={objectFit === "contain" ? "object-contain" : "object-cover"}
      style={{ objectPosition }}
      sizes="(max-width: 768px) 100vw, 50vw"
      placeholder="blur"
      blurDataURL={blurDataURL}
      onError={() => setImageError(true)}
    />
  ) : ResolvedIcon ? (
    <IllustrationPlaceholder
      title={title}
      description={description}
      icon={ResolvedIcon}
      variant={variant}
      showCaption={showCaption}
    />
  ) : null;

  // SSR + first paint: render plain div (no animation, no transform).
  // After mount: render motion.div with initial=hidden + 3D tilt.
  if (!mounted) {
    return (
      <div className={`group relative overflow-hidden rounded-3xl border border-amber/20 bg-dark-card backdrop-blur-md ${sizeClasses[size]} ${className}`}>
        <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "linear-gradient(135deg, rgba(245,197,24,0.3), rgba(220,38,38,0.2), rgba(16,185,129,0.2))",
            filter: "blur(8px)",
          }}
        />
        {inner}
      </div>
    );
  }

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative overflow-hidden rounded-3xl border border-amber/20 bg-dark-card backdrop-blur-md ${sizeClasses[size]} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 animate-shine-sweep bg-gradient-to-r from-transparent via-amber/10 to-transparent" />
      </div>

      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(245,197,24,0.3), rgba(220,38,38,0.2), rgba(16,185,129,0.2))",
          filter: "blur(8px)",
        }}
      />

      {inner}
    </motion.div>
  );

  if (floating) {
    return (
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-full"
      >
        {card}
      </motion.div>
    );
  }

  return card;
}