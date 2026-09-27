import type { ReactNode } from "react";
import { ApiContext } from "./context";
import type { LeCrimsonApi } from "./types";

export function ApiProvider({ api, children }: { api: LeCrimsonApi; children: ReactNode }) {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}
