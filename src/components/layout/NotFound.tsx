import { ButtonLink } from "../ui/Button";
import { Logo } from "./Logo";

export function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-24 text-center">
      <Logo className="mb-10 text-3xl" />
      <p className="kicker mb-3">404</p>
      <h1 className="headline text-4xl">This page isn’t in print</h1>
      <p className="mt-3 max-w-md text-muted">The link may be old or mistyped.</p>
      <div className="mt-8">
        <ButtonLink to="/home">Back to your feed</ButtonLink>
      </div>
    </div>
  );
}
