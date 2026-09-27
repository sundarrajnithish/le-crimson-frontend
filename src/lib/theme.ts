import { useEffect } from "react";
import { createPersistedStore } from "./persisted";

export type Theme = "light" | "dark";

const systemTheme = (): Theme =>
  typeof matchMedia === "function" && matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export const themeStore = createPersistedStore<Theme>(
  "theme",
  systemTheme(),
  (v): v is Theme => v === "light" || v === "dark",
);

export function useTheme() {
  const theme = themeStore.use();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return { theme, toggle: () => themeStore.set(theme === "dark" ? "light" : "dark") };
}
