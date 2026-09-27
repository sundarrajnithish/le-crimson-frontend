import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "./context";

interface Props {
  children: ReactNode;
  /** Send users with no interests to onboarding first (default true). */
  requireInterests?: boolean;
  role?: "admin";
}

export function RequireAuth({ children, requireInterests = true, role }: Props) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user)
    return <Navigate to="/" replace state={{ from: location.pathname + location.search }} />;
  if (requireInterests && user.interests.length === 0) return <Navigate to="/welcome" replace />;
  if (role && user.role !== role) return <Navigate to="/home" replace />;
  return <>{children}</>;
}
