"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
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
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(imageSrc && !imageError && !skipImage && !children);
  const ResolvedIcon = icon ?? (iconName ? illustrationIconMap[iconName] : undefined);

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

  const card = (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24, scale: reduced ? 1 : 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={
        reduced
          ? undefined
          : { scale: 1.02, y: -4, filter: "brightness(1.03)" }
      }
      className={`relative overflow-hidden rounded-3xl border border-gold/30 bg-white/40 shadow-xl backdrop-blur-md ${sizeClasses[size]} ${className}`}
    >
      {inner}
    </motion.div>
  );

  if (floating && !reduced) {
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
