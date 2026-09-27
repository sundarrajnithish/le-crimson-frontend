import { useState } from "react";
import type { Article } from "../../api/types";
import { CATEGORIES } from "../../lib/categories";
import { cn } from "../../lib/cn";

/**
 * Uses the article's image when there is one; otherwise draws a deterministic
 * generative cover from the category palette. No broken-image boxes, and the
 * demo stays fully self-contained.
 */
export function ArticleCover({
  article,
  className,
  iconSize = 44,
}: {
  article: Article;
  className?: string;
  iconSize?: number;
}) {
  const [failed, setFailed] = useState(false);
  const cat = CATEGORIES[article.category];

  if (article.imageUrl && !failed) {
    return (
      <img
        src={article.imageUrl}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }

  const [a, b] = cat.hues;
  const s = article.seed;
  const angle = s % 360;
  const circles = Array.from({ length: 5 }, (_, i) => {
    const n = (s >> (i * 3)) & 0xff;
    return { cx: (n * 7) % 400, cy: (n * 13) % 250, r: 30 + (n % 90), o: 0.08 + (i % 3) * 0.05 };
  });
  const Icon = cat.icon;
  const gid = `g-${article.id}`;

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)} aria-hidden="true">
      <svg
        viewBox="0 0 400 250"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={gid} gradientTransform={`rotate(${angle} 0.5 0.5)`}>
            <stop offset="0" stopColor={a} />
            <stop offset="1" stopColor={b} />
          </linearGradient>
        </defs>
        <rect width="400" height="250" fill={`url(#${gid})`} />
        {circles.map((c, i) => (
          <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill="#fff" opacity={c.o} />
        ))}
        <path
          d={`M0 ${180 + (s % 40)} Q200 ${120 + (s % 80)} 400 ${190 - (s % 30)} V250 H0Z`}
          fill="#000"
          opacity="0.12"
        />
      </svg>
      <Icon
        className="absolute right-4 bottom-4 text-white/85"
        style={{ width: iconSize, height: iconSize }}
        strokeWidth={1.5}
      />
    </div>
  );
}
