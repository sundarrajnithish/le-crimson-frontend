import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter } from "react-router";
import { App } from "../App";
import { createDemoApi } from "../api/demo";
import { routes } from "../router";

/** Renders the real app (all routes, providers) at a URL with an instant demo API. */
export function renderApp(url = "/") {
  const api = createDemoApi({ latency: 0, persist: false });
  const router = createMemoryRouter(routes, { initialEntries: [url] });
  const user = userEvent.setup();
  const utils = render(<App api={api} router={router} />);
  return { ...utils, user, router, api };
}
