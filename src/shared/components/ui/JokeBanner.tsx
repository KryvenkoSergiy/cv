import { DownloadCvButton } from "../../../features/pdf/DownloadCvButton";

export interface JokeBannerCopy {
  emoji: string;
  title: string;
  joke: string;
  buttonLabel: string;
  loadingLabel?: string;
}

export const JokeBanner = ({
  emoji,
  title,
  joke,
  buttonLabel,
  loadingLabel,
}: JokeBannerCopy) => (
  <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-card border border-border bg-surface-1 px-5 py-4">
    <div className="flex items-start gap-3">
      {/* Tonal copy, part of the joke — not iconography, so it stays an emoji. */}
      <span aria-hidden className="text-base leading-6">
        {emoji}
      </span>
      <div>
        <p className="text-body font-medium text-fg">{title}</p>
        <p className="mt-0.5 text-small text-fg-dim">{joke}</p>
      </div>
    </div>
    <DownloadCvButton label={buttonLabel} busyLabel={loadingLabel} />
  </div>
);
