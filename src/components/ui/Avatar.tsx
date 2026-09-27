import { useState } from "react";
import { cn } from "../../lib/cn";
import { initials } from "../../lib/format";

const PALETTE = [
  "#9f1239",
  "#1e3a8a",
  "#14532d",
  "#78350f",
  "#3b0764",
  "#134e4a",
  "#7c2d12",
  "#701a75",
];

export function Avatar({
  name,
  src,
  size = 40,
  className,
}: {
  name: string;
  src?: string;
  size?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const color = PALETTE[[...name].reduce((s, c) => s + c.charCodeAt(0), 0) % PALETTE.length];
  const style = { width: size, height: size, fontSize: size * 0.38 };

  if (src && !failed) {
    return (
      <img
        src={src}
        alt=""
        width={size}
        height={size}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className={cn("shrink-0 rounded-full object-cover", className)}
        style={style}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white",
        className,
      )}
      style={{ ...style, backgroundColor: color }}
    >
      {initials(name)}
    </span>
  );
}
