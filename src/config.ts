/** Runtime configuration, read once from Vite env vars. All values are optional. */
const clean = (v: string | undefined) => (v && v.trim() !== "" ? v.trim() : undefined);

export const config = {
  apiBaseUrl: clean(import.meta.env.VITE_API_BASE_URL)?.replace(/\/+$/, ""),
  googleClientId: clean(import.meta.env.VITE_GOOGLE_CLIENT_ID),
  contactEndpoint: clean(import.meta.env.VITE_CONTACT_ENDPOINT),
  routerMode: import.meta.env.VITE_ROUTER_MODE === "hash" ? "hash" : "browser",
} as const;

export const isDemoApi = !config.apiBaseUrl;
