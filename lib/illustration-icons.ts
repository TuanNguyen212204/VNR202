import {
  BookOpen,
  Flame,
  Globe2,
  Heart,
  Mic2,
  Scale,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sprout,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { IllustrationIconName } from "@/data/illustrations";

export const illustrationIconMap: Record<IllustrationIconName, LucideIcon> = {
  BookOpen,
  Mic2,
  User,
  Heart,
  Users,
  Sprout,
  Flame,
  Scale,
  ShieldCheck,
  Sparkles,
  Globe2,
};

export type ChecklistIconName =
  | "BookOpen"
  | "ShieldCheck"
  | "Smartphone"
  | "Users"
  | "Sparkles";

export const checklistIconMap: Record<ChecklistIconName, LucideIcon> = {
  BookOpen,
  ShieldCheck,
  Smartphone,
  Users,
  Sparkles,
};
