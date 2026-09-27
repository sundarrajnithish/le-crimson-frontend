import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Skeleton } from "../ui/Skeleton";

export function PageFallback() {
  return (
    <div className="container-page py-10" role="status" aria-label="Loading page">
      <Skeleton className="mb-4 h-4 w-24" />
      <Skeleton className="mb-10 h-10 w-2/3" />
      <Skeleton className="aspect-[16/7] w-full" />
    </div>
  );
}

export function AppShell() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-crimson px-4 py-2 text-crimson-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
