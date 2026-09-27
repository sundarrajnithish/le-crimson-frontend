import { act, screen, waitFor, within } from "@testing-library/react";
import { sessionStore, createDemoUser } from "./auth/session";
import { renderApp } from "./test/render";

const signedIn = (interests = ["science", "technology"] as const) =>
  sessionStore.set({ ...createDemoUser(), interests: [...interests] });

describe("app journeys", () => {
  it("onboards a new reader: demo sign-in → pick interests → personalised feed", async () => {
    const { user, router } = renderApp("/");
    await user.click(screen.getByRole("button", { name: /try the live demo/i }));

    expect(
      await screen.findByRole("heading", { name: /what do you want to read about/i }),
    ).toBeInTheDocument();
    const build = screen.getByRole("button", { name: /build my feed/i });
    expect(build).toBeDisabled();

    await user.click(screen.getByRole("checkbox", { name: /science/i }));
    await user.click(build);

    expect(
      await screen.findByRole("heading", { name: /good (morning|afternoon|evening), alex/i }),
    ).toBeInTheDocument();
    expect(router.state.location.pathname).toBe("/home");
    // Only Science stories in the feed.
    const topStories = await screen.findByRole("region", { name: /top stories/i });
    expect(within(topStories).getAllByText("Science").length).toBeGreaterThan(0);
    expect(within(topStories).queryByText("Sports")).not.toBeInTheDocument();
  });

  it("redirects signed-out visitors away from private pages and back after sign-in", async () => {
    const { router } = renderApp("/saved");
    expect(await screen.findByRole("button", { name: /try the live demo/i })).toBeInTheDocument();
    expect(router.state.location.pathname).toBe("/");
    // A returning reader (interests already chosen) signs in…
    act(() => signedIn());
    // …and lands on the page they originally asked for.
    await waitFor(() => expect(router.state.location.pathname).toBe("/saved"));
  });

  it("renders the header without crashing when no preferences exist (v1 regression)", async () => {
    sessionStore.set({ ...createDemoUser(), interests: [] });
    renderApp("/preferences");
    expect(await screen.findByRole("heading", { name: /your interests/i })).toBeInTheDocument();
    // Falls back to every topic in the topic strip.
    const topics = screen.getByRole("navigation", { name: /your topics/i });
    expect(within(topics).getAllByRole("link")).toHaveLength(9);
  });

  it("searches, filters and saves a story", async () => {
    signedIn();
    const { user } = renderApp("/search?q=satellite");
    expect(await screen.findByText(/student team's satellite/i)).toBeInTheDocument();
    expect(screen.getByText(/1 result for “satellite”/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /save “student team's satellite/i }));
    await user.click(screen.getByRole("link", { name: /^saved$/i }));
    expect(await screen.findByRole("heading", { name: /saved stories/i })).toBeInTheDocument();
    expect(screen.getByText(/student team's satellite/i)).toBeInTheDocument();
  });

  it("shares an article to the community feed", async () => {
    signedIn();
    const { user } = renderApp("/article/t4");
    expect(
      await screen.findByRole("heading", { level: 1, name: /student team's satellite/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^share$/i }));
    const dialog = await screen.findByRole("dialog", { name: /share with your community/i });
    await user.type(within(dialog).getByLabelText(/add a comment/i), "Tiny satellites, big ideas");
    await user.click(within(dialog).getByRole("button", { name: /^share$/i }));
    expect(await screen.findByText(/shared to your community feed/i)).toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: /community/i }));
    expect(await screen.findByText("Tiny satellites, big ideas")).toBeInTheDocument();
  });

  it("accepts a friend request", async () => {
    signedIn();
    const { user } = renderApp("/connections?tab=requests");
    const accept = await screen.findByRole("button", { name: /accept naomi park/i });
    await user.click(accept);
    await waitFor(() =>
      expect(screen.queryByRole("button", { name: /accept naomi park/i })).not.toBeInTheDocument(),
    );
    await user.click(screen.getByRole("tab", { name: /friends/i }));
    expect(await screen.findByText("Naomi Park")).toBeInTheDocument();
  });

  it("keeps the admin dashboard behind the admin role", async () => {
    sessionStore.set({ ...createDemoUser(), role: "member", interests: ["world"] });
    const { router } = renderApp("/admin");
    await waitFor(() => expect(router.state.location.pathname).toBe("/home"));
  });

  it("shows the admin dashboard with charts and table views", async () => {
    signedIn();
    renderApp("/admin");
    expect(await screen.findByRole("img", { name: /new readers per day/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /readers by interest/i })).toBeInTheDocument();
    expect(screen.getAllByText(/view as table/i)).toHaveLength(2);
  });

  it("shows a friendly 404 for unknown routes and topics", async () => {
    signedIn();
    renderApp("/topic/astrology");
    expect(await screen.findByRole("heading", { name: /isn’t in print/i })).toBeInTheDocument();
  });

  it("redirects legacy v1 URLs", async () => {
    const { router } = renderApp("/aboutus");
    await waitFor(() => expect(router.state.location.pathname).toBe("/about"));
  });
});
