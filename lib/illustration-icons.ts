import {
  AlertTriangle,
  BookOpen,
  DollarSign,
  Flame,
  Globe2,
  Heart,
  Landmark,
  Mic2,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sprout,
  TrendingDown,
  TrendingUp,
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
  TrendingUp,
  TrendingDown,
  Landmark,
  AlertTriangle,
  DollarSign,
  ShieldAlert,
};

export type ChecklistIconName =
  | "BookOpen"
  | "ShieldCheck"
  | "Smartphone"
  | "Users"
  | "Sparkles"
  | "TrendingDown"
  | "AlertTriangle"
  | "ShieldAlert"
  | "DollarSign";

export const checklistIconMap: Record<ChecklistIconName, LucideIcon> = {
  BookOpen,
  ShieldCheck,
  Smartphone,
  Users,
  Sparkles,
  TrendingDown,
  AlertTriangle,
  ShieldAlert,
  DollarSign,
};
