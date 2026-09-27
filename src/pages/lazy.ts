import { lazy } from "react";

// Route-level code splitting: each page is its own chunk.
export const HomePage = lazy(() => import("./HomePage"));
export const InterestsPage = lazy(() => import("./InterestsPage"));
export const TopicPage = lazy(() => import("./TopicPage"));
export const SearchPage = lazy(() => import("./SearchPage"));
export const ArticlePage = lazy(() => import("./ArticlePage"));
export const SavedPage = lazy(() => import("./SavedPage"));
export const CommunityPage = lazy(() => import("./CommunityPage"));
export const ConnectionsPage = lazy(() => import("./ConnectionsPage"));
export const ProfilePage = lazy(() => import("./ProfilePage"));
export const AdminPage = lazy(() => import("./AdminPage"));
export const AboutPage = lazy(() => import("./AboutPage"));
export const ContactPage = lazy(() => import("./ContactPage"));
export const CreditsPage = lazy(() => import("./CreditsPage"));
