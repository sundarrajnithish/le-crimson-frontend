import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach } from "vitest";
import { sessionStore } from "../auth/session";
import { savedStore } from "../lib/saved";
import { themeStore } from "../lib/theme";

// jsdom gaps used by the app.
if (!HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function (this: HTMLDialogElement) {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function (this: HTMLDialogElement) {
    this.removeAttribute("open");
    this.dispatchEvent(new Event("close"));
  };
}
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}
window.scrollTo = () => {};

beforeEach(() => {
  localStorage.clear();
  // Module-level stores outlive a single test; reset them explicitly.
  sessionStore.set(null);
  savedStore.reset();
  themeStore.set("light");
});
afterEach(() => cleanup());
