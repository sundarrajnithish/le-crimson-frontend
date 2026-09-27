import { createContext, useContext } from "react";
import type { LeCrimsonApi } from "./types";

export const ApiContext = createContext<LeCrimsonApi | null>(null);

export function useApi(): LeCrimsonApi {
  const api = useContext(ApiContext);
  if (!api) throw new Error("useApi must be used inside <ApiProvider>");
  return api;
}
