import { isRouteErrorResponse, useRouteError } from "react-router";
import { Button, ButtonLink } from "../ui/Button";
import { Logo } from "./Logo";
import { NotFound } from "./NotFound";

/** Router-level error boundary: a crash in one page never blanks the whole app. */
export function RouteError() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) return <NotFound />;
  console.error(error);
  return (
    <div className="container-page flex flex-col items-center justify-center py-24 text-center">
      <Logo className="mb-10 text-3xl" />
      <p className="kicker mb-3">Unexpected error</p>
      <h1 className="headline text-4xl">Something broke on this page</h1>
      <p className="mt-3 max-w-md text-muted">
        The error has been logged. Reloading usually fixes it.
      </p>
      <div className="mt-8 flex gap-3">
        <ButtonLink to="/home">Back to your feed</ButtonLink>
        <Button variant="secondary" onClick={() => window.location.reload()}>
          Reload
        </Button>
      </div>
    </div>
  );
}
