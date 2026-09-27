import type { ReactElement } from "react";
import { createBrowserRouter, createHashRouter, Navigate, type RouteObject } from "react-router";
import { RequireAuth } from "./auth/RequireAuth";
import { AppShell } from "./components/layout/AppShell";
import { RouteError } from "./components/layout/RouteError";
import { config } from "./config";
import LandingPage from "./pages/LandingPage";
import {
  HomePage,
  InterestsPage,
  TopicPage,
  SearchPage,
  ArticlePage,
  SavedPage,
  CommunityPage,
  ConnectionsPage,
  ProfilePage,
  AdminPage,
  AboutPage,
  ContactPage,
} from "./pages/lazy";

const guard = (el: ReactElement, opts?: { requireInterests?: boolean; role?: "admin" }) => (
  <RequireAuth {...opts}>{el}</RequireAuth>
);

export const routes: RouteObject[] = [
  {
    element: <AppShell />,
    errorElement: <RouteError />,
    children: [
      {
        errorElement: <RouteError />,
        children: [
          { path: "/", element: <LandingPage /> },
          { path: "/about", element: <AboutPage /> },
          { path: "/contact", element: <ContactPage /> },
          {
            path: "/welcome",
            element: guard(<InterestsPage mode="onboarding" />, { requireInterests: false }),
          },
          {
            path: "/preferences",
            element: guard(<InterestsPage mode="edit" />, { requireInterests: false }),
          },
          { path: "/home", element: guard(<HomePage />) },
          { path: "/topic/:topic", element: guard(<TopicPage />) },
          { path: "/search", element: guard(<SearchPage />) },
          { path: "/article/:id", element: guard(<ArticlePage />) },
          { path: "/saved", element: guard(<SavedPage />) },
          { path: "/community", element: guard(<CommunityPage />) },
          { path: "/connections", element: guard(<ConnectionsPage />) },
          { path: "/profile", element: guard(<ProfilePage />) },
          { path: "/admin", element: guard(<AdminPage />, { role: "admin" }) },
          // Legacy URLs from v1 keep working.
          { path: "/aboutus", element: <Navigate to="/about" replace /> },
          { path: "/contactus", element: <Navigate to="/contact" replace /> },
          { path: "/chat", element: <Navigate to="/community" replace /> },
          { path: "/social", element: <Navigate to="/community" replace /> },
          { path: "/followers", element: <Navigate to="/connections?tab=followers" replace /> },
          { path: "/friends", element: <Navigate to="/connections?tab=friends" replace /> },
          {
            path: "*",
            loader: () => {
              throw new Response("Not found", { status: 404 });
            },
          },
        ],
      },
    ],
  },
];

export function createAppRouter() {
  return config.routerMode === "hash" ? createHashRouter(routes) : createBrowserRouter(routes);
}
