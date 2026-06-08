import Image from "next/image";
import { FadeIn } from "./FadeIn";

type BannerImageProps = {
  src: string;
  alt: string;
  height?: "sm" | "md";
  priority?: boolean;
};

export function BannerImage({
  src,
  alt,
  height = "md",
  priority = false,
}: BannerImageProps) {
  const h = height === "sm" ? "h-[260px]" : "h-[280px]";

  return (
    <FadeIn className={`relative z-[1] mb-12 w-full overflow-hidden rounded-2xl ${h}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1140px) 100vw, 1140px"
        priority={priority}
      />
    </FadeIn>
  );
}
