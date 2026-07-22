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

  // 3D tilt - reduced for traditional feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

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
  // Traditional border styling with double line effect
  if (!mounted) {
    return (
      <div 
        className={`group relative overflow-hidden rounded-lg border border-amber/20 bg-dark-card ${sizeClasses[size]} ${className}`}
        style={{
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(212, 168, 75, 0.1)"
        }}
      >
        {/* Traditional inner border */}
        <div 
          className="pointer-events-none absolute inset-1 rounded-sm border border-amber/10 opacity-50 transition-opacity duration-500 group-hover:opacity-80" 
        />
        {inner}
      </div>
    );
  }

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative overflow-hidden rounded-lg border border-amber/25 bg-dark-card ${sizeClasses[size]} ${className}`}
    >
      {/* Traditional double border effect */}
      <div 
        className="pointer-events-none absolute inset-1 z-10 rounded-sm border border-amber/15 opacity-0 transition-opacity duration-500 group-hover:opacity-70" 
      />
      
      {/* Subtle inner glow on hover */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(212,168,75,0.05), transparent, rgba(200,16,46,0.03))"
        }}
      />

      {/* Top corner ornaments on hover */}
      <div className="pointer-events-none absolute -top-1 -left-1 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path d="M0 0 L20 0 L20 3 L3 3 L3 20 L0 20 Z" fill="#D4A84B" opacity="0.4" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -top-1 -right-1 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <svg viewBox="0 0 20 20" className="h-5 w-5" style={{ transform: "scaleX(-1)" }}>
          <path d="M0 0 L20 0 L20 3 L3 3 L3 20 L0 20 Z" fill="#D4A84B" opacity="0.4" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -bottom-1 -left-1 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <svg viewBox="0 0 20 20" className="h-5 w-5" style={{ transform: "scaleY(-1)" }}>
          <path d="M0 0 L20 0 L20 3 L3 3 L3 20 L0 20 Z" fill="#D4A84B" opacity="0.4" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -bottom-1 -right-1 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <svg viewBox="0 0 20 20" className="h-5 w-5" style={{ transform: "scale(-1)" }}>
          <path d="M0 0 L20 0 L20 3 L3 3 L3 20 L0 20 Z" fill="#D4A84B" opacity="0.4" />
        </svg>
      </div>

      {inner}
    </motion.div>
  );

  if (floating) {
    return (
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="w-full"
      >
        {card}
      </motion.div>
    );
  }

  return card;
}
