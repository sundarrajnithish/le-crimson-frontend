import { Link } from "react-router";
import { photoFor } from "../api/demo";
import { PageHeader } from "../components/ui/PageHeader";
import { SEED_ARTICLES } from "../data/articles";

/** Attribution for every bundled photo (required by CC BY / CC BY-SA). */
export default function CreditsPage() {
  const rows = SEED_ARTICLES.map((a) => ({ article: a, photo: photoFor(a.id) })).filter(
    (r) => r.photo,
  );
  const link = "underline decoration-rule underline-offset-2 hover:decoration-crimson";
  return (
    <div className="container-page max-w-4xl py-10">
      <PageHeader kicker="Credits" title="Photo credits">
        Every photo in the demo comes from Wikimedia Commons under a free license: public domain,
        CC0, or Creative Commons BY / BY-SA. Photos are resized and cropped to fit; cropped versions
        of CC BY-SA photos are shared under the same license. The stories they illustrate are
        fictional and are not about the people or places shown.
      </PageHeader>
      <ul className="grid gap-4 sm:grid-cols-2">
        {rows.map(({ article, photo }) => (
          <li key={article.id} className="card flex gap-3 p-3">
            <img
              src={photo!.small}
              alt=""
              width={96}
              height={60}
              loading="lazy"
              className="h-16 w-24 shrink-0 rounded-lg object-cover"
            />
            <div className="min-w-0 text-sm">
              <p className="truncate font-medium">{photo!.credit.title}</p>
              <p className="text-muted">
                {photo!.credit.author} ·{" "}
                {photo!.credit.licenseUrl ? (
                  <a
                    href={photo!.credit.licenseUrl}
                    target="_blank"
                    rel="noreferrer license"
                    className={link}
                  >
                    {photo!.credit.license}
                  </a>
                ) : (
                  photo!.credit.license
                )}{" "}
                ·{" "}
                <a href={photo!.credit.source} target="_blank" rel="noreferrer" className={link}>
                  source
                </a>
              </p>
              <p className="truncate text-xs text-muted">
                Used for:{" "}
                <Link to={`/article/${article.id}`} className={link}>
                  {article.title}
                </Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
