import { config } from "../config";
import { createDemoApi } from "./demo";
import { createHttpApi } from "./http";
import type { LeCrimsonApi } from "./types";

const demo = createDemoApi();

/** App-wide API instance: the live backend when configured, otherwise the demo. */
export const api: LeCrimsonApi = config.apiBaseUrl ? createHttpApi(config.apiBaseUrl, demo) : demo;

export * from "./types";
