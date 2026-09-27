import { useId, useState, type KeyboardEvent, type PointerEvent } from "react";
import { useElementWidth } from "../../lib/useElementWidth";
import { niceTicks } from "./niceTicks";

export interface LinePoint {
  label: string;
  /** Short label for the x-axis. */
  tick: string;
  value: number;
}

const H = 220;
const PAD = { top: 16, right: 44, bottom: 28, left: 36 };

/**
 * Single-series line + 10% area wash. Crosshair snaps to the nearest point on
 * hover; ←/→ move it for keyboard users. Values are also in the table view.
 */
export function LineChart({
  data,
  title,
  unit,
}: {
  data: LinePoint[];
  title: string;
  unit: string;
}) {
  const [wrapRef, width] = useElementWidth<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);
  const tipId = useId();
  if (data.length === 0) return null;

  const max = Math.max(...data.map((d) => d.value));
  const ticks = niceTicks(max);
  const top = ticks[ticks.length - 1] ?? max;
  const iw = width - PAD.left - PAD.right;
  const ih = H - PAD.top - PAD.bottom;
  const x = (i: number) => PAD.left + (data.length === 1 ? iw / 2 : (i / (data.length - 1)) * iw);
  const y = (v: number) => PAD.top + ih - (v / top) * ih;

  const line = data
    .map((d, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(d.value).toFixed(1)}`)
    .join("");
  const area = `${line}L${x(data.length - 1)},${PAD.top + ih}L${x(0)},${PAD.top + ih}Z`;
  const last = data[data.length - 1]!;
  const everyNth = Math.ceil(data.length / Math.max(2, Math.floor(iw / 70)));

  const onMove = (e: PointerEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - PAD.left;
    setActive(Math.max(0, Math.min(data.length - 1, Math.round((px / iw) * (data.length - 1)))));
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    setActive((a) => Math.max(0, Math.min(data.length - 1, (a ?? data.length - 1) + dir)));
  };
  const cur = active != null ? data[active] : undefined;

  return (
    <div ref={wrapRef} className="relative w-full min-w-0 overflow-hidden">
      <svg
        width={width}
        height={H}
        role="img"
        aria-label={`${title}. Latest: ${last.value} ${unit} on ${last.label}. Use left and right arrow keys to read each day.`}
        aria-describedby={cur ? tipId : undefined}
        tabIndex={0}
        onPointerMove={onMove}
        onPointerLeave={() => setActive(null)}
        onKeyDown={onKey}
        onBlur={() => setActive(null)}
        className="block touch-pan-y rounded-lg focus-visible:outline-2"
      >
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={PAD.left}
              x2={width - PAD.right}
              y1={y(t)}
              y2={y(t)}
              className="stroke-rule"
              strokeWidth={1}
            />
            <text
              x={PAD.left - 8}
              y={y(t)}
              dy="0.32em"
              textAnchor="end"
              className="fill-muted text-[11px] tabular-nums"
            >
              {t}
            </text>
          </g>
        ))}
        {data.map((d, i) =>
          // Anchor ticks on the latest day so labels are evenly spaced and never collide.
          (data.length - 1 - i) % everyNth === 0 ? (
            <text
              key={d.label}
              x={x(i)}
              y={H - 8}
              textAnchor="middle"
              className="fill-muted text-[11px]"
            >
              {d.tick}
            </text>
          ) : null,
        )}
        <path d={area} className="fill-chart" opacity={0.1} />
        <path
          d={line}
          fill="none"
          className="stroke-chart"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* End marker + direct label on the latest value. */}
        <circle
          cx={x(data.length - 1)}
          cy={y(last.value)}
          r={4}
          className="fill-chart stroke-surface"
          strokeWidth={2}
        />
        <text
          x={x(data.length - 1) + 8}
          y={y(last.value)}
          dy="0.32em"
          className="fill-ink text-xs font-semibold"
        >
          {last.value}
        </text>
        {cur && active != null && (
          <g pointerEvents="none">
            <line
              x1={x(active)}
              x2={x(active)}
              y1={PAD.top}
              y2={PAD.top + ih}
              className="stroke-muted"
              strokeWidth={1}
            />
            <circle
              cx={x(active)}
              cy={y(cur.value)}
              r={5}
              className="fill-chart stroke-surface"
              strokeWidth={2}
            />
          </g>
        )}
      </svg>
      {cur && active != null && (
        <div
          id={tipId}
          role="status"
          className="pointer-events-none absolute top-0 rounded-lg border border-rule bg-surface px-3 py-2 text-xs shadow-lg"
          style={{ left: Math.min(Math.max(x(active) - 60, 0), width - 130) }}
        >
          <p className="text-sm font-semibold text-ink tabular-nums">
            {cur.value} {unit}
          </p>
          <p className="text-muted">{cur.label}</p>
        </div>
      )}
    </div>
  );
}
