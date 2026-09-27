import { createMemoryStore } from "../../lib/persisted";

interface Toast {
  id: number;
  message: string;
}

export const toastStore = createMemoryStore<Toast[]>([]);

export function toast(message: string) {
  const id = Date.now() + Math.random();
  toastStore.set((t) => [...t.slice(-2), { id, message }]);
  setTimeout(() => toastStore.set((t) => t.filter((x) => x.id !== id)), 4000);
}
