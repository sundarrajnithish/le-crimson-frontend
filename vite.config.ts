/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// `--mode demo` produces one self-contained HTML file (hash routing, inlined
// assets) that can be embedded in a portfolio page or opened from disk.
export default defineConfig(({ mode }) => {
  const isDemo = mode === "demo";
  return {
    base: isDemo ? "./" : "/",
    plugins: [react(), tailwindcss(), ...(isDemo ? [viteSingleFile()] : [])],
    build: {
      outDir: isDemo ? "dist-demo" : "dist",
      sourcemap: !isDemo,
      target: "es2022",
    },
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: ["./src/test/setup.ts"],
      include: ["src/**/*.test.{ts,tsx}"],
      css: false,
      coverage: {
        provider: "v8",
        include: ["src/**/*.{ts,tsx}"],
        exclude: ["src/**/*.test.{ts,tsx}", "src/test/**", "src/main.tsx", "src/vite-env.d.ts"],
      },
    },
  };
});
