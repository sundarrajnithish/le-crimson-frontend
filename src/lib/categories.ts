import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Clapperboard,
  Cpu,
  FlaskConical,
  Globe2,
  HeartPulse,
  Landmark,
  MapPin,
  Trophy,
} from "lucide-react";

export const CATEGORY_IDS = [
  "world",
  "business",
  "sports",
  "politics",
  "health",
  "local",
  "science",
  "technology",
  "entertainment",
] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];

export interface Category {
  id: CategoryId;
  label: string;
  icon: LucideIcon;
  /** Two-stop gradient used for generated article covers. */
  hues: [string, string];
  blurb: string;
}

export const CATEGORIES: Record<CategoryId, Category> = {
  world: {
    id: "world",
    label: "World",
    icon: Globe2,
    hues: ["#1e3a8a", "#0ea5e9"],
    blurb: "Global affairs and the stories shaping every continent.",
  },
  business: {
    id: "business",
    label: "Business",
    icon: Briefcase,
    hues: ["#78350f", "#f59e0b"],
    blurb: "Markets, companies and the economy.",
  },
  sports: {
    id: "sports",
    label: "Sports",
    icon: Trophy,
    hues: ["#14532d", "#22c55e"],
    blurb: "Results, rivalries and the people behind them.",
  },
  politics: {
    id: "politics",
    label: "Politics",
    icon: Landmark,
    hues: ["#3b0764", "#a855f7"],
    blurb: "Policy, elections and power.",
  },
  health: {
    id: "health",
    label: "Health",
    icon: HeartPulse,
    hues: ["#881337", "#fb7185"],
    blurb: "Medicine, wellbeing and public health.",
  },
  local: {
    id: "local",
    label: "Local",
    icon: MapPin,
    hues: ["#7c2d12", "#fb923c"],
    blurb: "What is happening close to home.",
  },
  science: {
    id: "science",
    label: "Science",
    icon: FlaskConical,
    hues: ["#134e4a", "#2dd4bf"],
    blurb: "Discoveries from the lab to deep space.",
  },
  technology: {
    id: "technology",
    label: "Technology",
    icon: Cpu,
    hues: ["#0f172a", "#6366f1"],
    blurb: "Software, hardware and the internet.",
  },
  entertainment: {
    id: "entertainment",
    label: "Entertainment",
    icon: Clapperboard,
    hues: ["#701a75", "#f472b6"],
    blurb: "Film, music, TV and culture.",
  },
};

export const CATEGORY_LIST: Category[] = CATEGORY_IDS.map((id) => CATEGORIES[id]);

export function isCategoryId(value: unknown): value is CategoryId {
  return typeof value === "string" && (CATEGORY_IDS as readonly string[]).includes(value);
}

/** Accepts legacy values like "World" or "WORLD" from the old backend. */
export function toCategoryId(value: unknown): CategoryId | undefined {
  if (typeof value !== "string") return undefined;
  const lower = value.trim().toLowerCase();
  return isCategoryId(lower) ? lower : undefined;
}
