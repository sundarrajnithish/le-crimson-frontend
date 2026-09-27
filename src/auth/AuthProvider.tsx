import { useCallback, useMemo, type ReactNode } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useApi } from "../api/context";
import type { User } from "../api/types";
import { savedStore } from "../lib/saved";
import { decodeGoogleCredential } from "./google";
import { AuthContext, type AuthContextValue } from "./context";
import { createDemoUser, sessionStore } from "./session";

export function AuthProvider({ children }: { children: ReactNode }) {
  const user = sessionStore.use();
  const api = useApi();
  const queryClient = useQueryClient();

  const sync = useCallback(
    (u: User) => {
      // Best-effort sync to the backend; the UI never blocks on it.
      api.upsertProfile(u).catch((err: unknown) => console.warn("Profile sync failed", err));
    },
    [api],
  );

  const signIn = useCallback(
    (u: User) => {
      const existing = sessionStore.get();
      // Returning users keep their saved interests.
      const merged = existing && existing.id === u.id ? { ...u, interests: existing.interests } : u;
      sessionStore.set(merged);
      sync(merged);
      return merged;
    },
    [sync],
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      signInDemo: () => signIn(createDemoUser()),
      signInWithGoogle: (credential) => {
        const profile = decodeGoogleCredential(credential);
        if (!profile) throw new Error("Google sign-in returned an unreadable token.");
        return signIn({
          id: `google-${profile.sub}`,
          name: profile.name,
          email: profile.email,
          avatarUrl: profile.picture,
          role: "member",
          interests: [],
          joinedAt: new Date().toISOString(),
          provider: "google",
        });
      },
      updateUser: (patch) => {
        const current = sessionStore.get();
        if (!current) return;
        const next = { ...current, ...patch };
        sessionStore.set(next);
        sync(next);
      },
      signOut: () => {
        sessionStore.set(null);
        savedStore.reset();
        queryClient.clear();
      },
    }),
    [user, signIn, sync, queryClient],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
