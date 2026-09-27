import { ButtonLink } from "../components/ui/Button";
import { Logo } from "../components/layout/Logo";

const timeline = [
  {
    year: "2022",
    text: "Le Crimson starts as a team project: a Spring Boot backend plus a React front end, built over three sprints.",
  },
  {
    year: "2022",
    text: "Google sign-in, interest-based feeds, search, a social feed, connections, chat and an admin dashboard ship across 30+ branches.",
  },
  {
    year: "2026",
    text: "Version 2: rebuilt from scratch in TypeScript with Vite, React 19, React Router 8 and TanStack Query, plus tests and CI. It now runs fully in demo mode.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <Logo className="mb-8 text-4xl" />
      <h1 className="headline text-4xl sm:text-5xl">A calmer way to follow the news.</h1>
      <p className="mt-5 text-lg text-muted">
        Le Crimson pulls stories from many outlets and arranges them around the topics you choose.
        Nine interests, from World to Entertainment, shape your feed, your navigation and the people
        we suggest you follow. Share a story with a comment, like what friends post, and save
        anything for later.
      </p>

      <h2 className="headline mt-12 mb-5 text-2xl">The story so far</h2>
      <ol className="relative space-y-6 border-l border-rule pl-6">
        {timeline.map((t, i) => (
          <li key={i}>
            <span
              className="absolute -left-[5px] mt-1.5 size-2.5 rounded-full bg-crimson"
              aria-hidden="true"
            />
            <p className="kicker">{t.year}</p>
            <p className="mt-1">{t.text}</p>
          </li>
        ))}
      </ol>

      <h2 className="headline mt-12 mb-3 text-2xl">Team</h2>
      <p className="text-muted">
        Originally built by Nitish Sundarraj, Sindhiya and Mohamed Nabeel Deen. The v2 rebuild is
        maintained by Nitish Sundarraj.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink to="/contact">Get in touch</ButtonLink>
        <ButtonLink to="/" variant="secondary">
          Try the demo
        </ButtonLink>
      </div>
    </div>
  );
}
