import { useCallback, useRef, useState } from "react";
import { personalInfo } from "../../shared/data/cv";
import { DownloadIcon } from "../../shared/components/icons";

type Status = "idle" | "working" | "error";

/**
 * Downloads the CV as a PDF, loading @react-pdf/renderer only on demand.
 *
 * Deliberately NOT PDFDownloadLink: that component starts rendering the
 * document when it mounts, so lazy-mounting it gives the user a two-click
 * flow (click -> chunk downloads -> a link appears -> click again). The
 * imperative pdf().toBlob() API keeps it to one click and lets us show a
 * real busy state.
 *
 * The two dynamic imports must stay separate. Importing only the renderer
 * would let the bundler pull CvDocument's own static @react-pdf/renderer
 * import back into the entry chunk, undoing the split.
 */
const loadPdfDeps = () =>
  Promise.all([import("@react-pdf/renderer"), import("./CvDocument")]);

interface DownloadCvButtonProps {
  label: string;
  busyLabel?: string;
  /** Spell the action out when `label` is abbreviated, e.g. a nav "CV". */
  ariaLabel?: string;
  className?: string;
}

export const DownloadCvButton = ({
  label,
  busyLabel = "Generating…",
  ariaLabel,
  className = "",
}: DownloadCvButtonProps) => {
  const [status, setStatus] = useState<Status>("idle");
  const prefetched = useRef(false);

  // Warm the chunk on intent so desktop gets an instant download; mobile,
  // which never hovers or focuses first, still pays nothing up front.
  const prefetch = useCallback(() => {
    if (prefetched.current) return;
    prefetched.current = true;
    loadPdfDeps().catch(() => {
      prefetched.current = false;
    });
  }, []);

  const handleClick = useCallback(async () => {
    setStatus("working");
    let url: string | undefined;
    try {
      const [{ pdf }, { CvDocument }] = await loadPdfDeps();
      const blob = await pdf(<CvDocument />).toBlob();
      url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = personalInfo.pdfFilename;
      document.body.appendChild(link);
      link.click();
      link.remove();

      setStatus("idle");
    } catch {
      setStatus("error");
    } finally {
      if (url) {
        const objectUrl = url;
        setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
      }
    }
  }, []);

  const busy = status === "working";

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={prefetch}
      onFocus={prefetch}
      disabled={busy}
      aria-busy={busy}
      aria-label={ariaLabel}
      className={`inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-control border border-border bg-surface-2 px-3.5 py-2 font-mono text-label text-fg-muted uppercase transition-colors duration-[var(--dur-fast)] hover:border-border-strong hover:bg-surface-3 hover:text-fg disabled:cursor-wait disabled:opacity-70 ${className}`}
    >
      <DownloadIcon className="h-3.5 w-3.5" />
      {busy ? busyLabel : label}
      <span aria-live="polite" className="sr-only">
        {busy ? busyLabel : status === "error" ? "Download failed" : ""}
      </span>
    </button>
  );
};
