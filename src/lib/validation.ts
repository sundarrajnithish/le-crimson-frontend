import type { ContactMessage } from "../api/types";

export type ContactErrors = Partial<Record<keyof ContactMessage, string>>;

export function validateContact(m: ContactMessage): ContactErrors {
  const e: ContactErrors = {};
  if (!m.name.trim()) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email.trim()))
    e.email = "Please enter a valid email address.";
  if (m.message.trim().length < 10) e.message = "Please write at least 10 characters.";
  return e;
}
