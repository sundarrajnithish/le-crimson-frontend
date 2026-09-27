import { createPersistedStore } from "./persisted";

const isStringArray = (v: unknown): v is string[] =>
  Array.isArray(v) && v.every((x) => typeof x === "string");

export const savedStore = createPersistedStore<string[]>("saved", [], isStringArray);

export function useSaved() {
  const saved = savedStore.use();
  return {
    saved,
    isSaved: (id: string) => saved.includes(id),
    toggle: (id: string) =>
      savedStore.set((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [id, ...prev])),
  };
}
