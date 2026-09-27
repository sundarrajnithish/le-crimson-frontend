import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { api as defaultApi } from "./api";
import { ApiProvider } from "./api/ApiProvider";
import type { LeCrimsonApi } from "./api/types";
import { AuthProvider } from "./auth/AuthProvider";
import { Toaster } from "./components/ui/Toaster";
import { createQueryClient } from "./lib/queryClient";
import { useTheme } from "./lib/theme";
import { createAppRouter } from "./router";

function ThemeSync() {
  useTheme();
  return null;
}

export function App({
  api = defaultApi,
  router: routerProp,
}: {
  api?: LeCrimsonApi;
  router?: ReturnType<typeof createAppRouter>;
}) {
  const [queryClient] = useState(createQueryClient);
  const [router] = useState(() => routerProp ?? createAppRouter());
  return (
    <ApiProvider api={api}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeSync />
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </ApiProvider>
  );
}
