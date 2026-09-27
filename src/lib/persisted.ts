import { useSyncExternalStore } from "react";
import { readJSON, writeJSON } from "./storage";

/**
 * A tiny persisted store: in-memory value mirrored to localStorage, shared by
 * every component via useSyncExternalStore (no provider needed).
 */
export function createPersistedStore<T>(
  key: string,
  fallback: T,
  validate?: (v: unknown) => v is T,
) {
  let value = readJSON(key, fallback, validate);
  const listeners = new Set<() => void>();

  const get = () => value;
  const set = (next: T | ((prev: T) => T)) => {
    value = typeof next === "function" ? (next as (prev: T) => T)(value) : next;
    writeJSON(key, value);
    listeners.forEach((l) => l());
  };
  const subscribe = (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  };
  const reset = () => set(fallback);
  const use = () => useSyncExternalStore(subscribe, get, get);

  return { get, set, subscribe, reset, use };
}

/** Same API as createPersistedStore, memory only (for transient UI like toasts). */
export function createMemoryStore<T>(initial: T) {
  let value = initial;
  const listeners = new Set<() => void>();
  const get = () => value;
  const set = (next: T | ((prev: T) => T)) => {
    value = typeof next === "function" ? (next as (prev: T) => T)(value) : next;
    listeners.forEach((l) => l());
  };
  const subscribe = (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  };
  const use = () => useSyncExternalStore(subscribe, get, get);
  return { get, set, subscribe, use };
}
