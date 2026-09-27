import type { PhotoCredit } from "../../api/types";

/** "Photo: Author · CC BY-SA 4.0 · Wikimedia Commons", as the licenses require. */
export function PhotoCaption({ credit }: { credit: PhotoCredit }) {
  const link =
    "underline decoration-rule underline-offset-2 hover:text-ink hover:decoration-crimson";
  return (
    <figcaption className="mt-2 text-right text-xs text-muted">
      Photo: {credit.author} ·{" "}
      {credit.licenseUrl ? (
        <a href={credit.licenseUrl} target="_blank" rel="noreferrer license" className={link}>
          {credit.license}
        </a>
      ) : (
        credit.license
      )}{" "}
      ·{" "}
      <a href={credit.source} target="_blank" rel="noreferrer" className={link}>
        Wikimedia Commons
      </a>
      , cropped
    </figcaption>
  );
}
