/**
 * Namespaced, JSON-safe wrapper around localStorage. Every access is guarded:
 * private mode, disabled storage or corrupt values fall back instead of crashing
 * (the original app crashed on first load because it parsed missing keys).
 */
const PREFIX = "lecrimson:";

export function readJSON<T>(key: string, fallback: T, validate?: (v: unknown) => v is T): T {
  try {
    const raw = globalThis.localStorage?.getItem(PREFIX + key);
    if (raw == null) return fallback;
    const parsed: unknown = JSON.parse(raw);
    if (validate && !validate(parsed)) return fallback;
    return parsed as T;
  } catch {
    return fallback;
  }
}

export function writeJSON(key: string, value: unknown): void {
  try {
    globalThis.localStorage?.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* storage full or unavailable — state stays in memory for this session */
  }
}

export function removeKey(key: string): void {
  try {
    globalThis.localStorage?.removeItem(PREFIX + key);
  } catch {
    /* ignore */
  }
}
