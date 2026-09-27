import type { User } from "../api/types";
import { isCategoryId } from "../lib/categories";
import { createPersistedStore } from "../lib/persisted";

export const isUser = (v: unknown): v is User => {
  if (typeof v !== "object" || v === null) return false;
  const u = v as Partial<User>;
  return (
    typeof u.id === "string" &&
    typeof u.name === "string" &&
    typeof u.email === "string" &&
    (u.role === "member" || u.role === "admin") &&
    Array.isArray(u.interests) &&
    u.interests.every(isCategoryId)
  );
};

export const sessionStore = createPersistedStore<User | null>(
  "session",
  null,
  (v): v is User | null => v === null || isUser(v),
);

export function createDemoUser(now = new Date()): User {
  return {
    id: "demo-user",
    name: "Alex Rivera",
    email: "alex@demo.lecrimson.app",
    role: "admin",
    interests: [],
    location: "Riverside District",
    bio: "Exploring Le Crimson in demo mode.",
    joinedAt: now.toISOString(),
    provider: "demo",
  };
}
