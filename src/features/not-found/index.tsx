import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Eyebrow } from "../../shared/components/ui/Eyebrow";

/**
 * Catch-all for unknown paths and render errors.
 *
 * GitHub Pages serves 404.html (a copy of index.html) for any unmatched URL,
 * so a mistyped path reaches the router rather than the host — without this it
 * would land on React Router's default error screen.
 */
export default function NotFound() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 404;

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center pb-section">
      <Eyebrow rule className="mb-5">
        Error {status}
      </Eyebrow>
      <h1 className="mb-4 text-h1 text-fg">
        Page <span className="text-fg-muted">not found</span>
      </h1>
      <p className="mb-10 max-w-[58ch] text-body text-fg-muted">
        That link doesn't lead anywhere. The CV is still here, though.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/"
          className="rounded-control bg-accent px-5 py-2.5 font-mono text-label text-accent-ink uppercase transition-colors duration-[var(--dur-fast)] hover:bg-accent-hover"
        >
          Back Home
        </Link>
        <Link
          to="/experience"
          className="rounded-control border border-border bg-surface-1 px-5 py-2.5 font-mono text-label text-fg-muted uppercase transition-colors duration-[var(--dur-fast)] hover:border-border-strong hover:bg-surface-2 hover:text-fg"
        >
          View Experience
        </Link>
      </div>
    </div>
  );
}
