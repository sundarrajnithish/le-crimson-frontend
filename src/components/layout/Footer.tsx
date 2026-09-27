import { Link } from "react-router";
import { useApi } from "../../api/context";
import { Logo } from "./Logo";

export function Footer() {
  const api = useApi();
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo className="text-xl" />
          <p className="mt-2 text-sm text-muted">
            News, tuned to you. {api.mode === "demo" && "Demo mode: every story is sample content."}
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-5 text-sm text-muted">
          <Link to="/about" className="hover:text-ink">
            About
          </Link>
          <Link to="/contact" className="hover:text-ink">
            Contact
          </Link>
          <a
            href="https://github.com/sundarrajnithish/le-crimson-frontend"
            className="hover:text-ink"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
