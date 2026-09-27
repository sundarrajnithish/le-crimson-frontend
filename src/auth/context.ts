import { createContext, useContext } from "react";
import type { User } from "../api/types";

export interface AuthContextValue {
  user: User | null;
  signInDemo: () => User;
  signInWithGoogle: (credential: string) => User;
  updateUser: (patch: Partial<Pick<User, "interests" | "bio" | "location" | "name">>) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}

/** For pages that only render behind <RequireAuth>. */
export function useUser(): User {
  const { user } = useAuth();
  if (!user) throw new Error("useUser called without a signed-in user");
  return user;
}
