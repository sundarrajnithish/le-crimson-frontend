import { useElementWidth } from "../../lib/useElementWidth";

export interface Bar {
  label: string;
  value: number;
}

const ROW = 30;
const THICK = 18; // ≤ 24px, leaving air between rows
const LABEL_W = 108;
const VALUE_W = 48;

/** Horizontal single-hue bars, 4px rounded data-end, value at the tip. */
export function BarList({ data, title, unit }: { data: Bar[]; title: string; unit: string }) {
  const [wrapRef, width] = useElementWidth<HTMLDivElement>();
  const max = Math.max(1, ...data.map((d) => d.value));
  const iw = width - LABEL_W - VALUE_W;
  const height = data.length * ROW;

  return (
    <div ref={wrapRef} className="w-full min-w-0 overflow-hidden">
      <svg
        width={width}
        height={height}
        role="img"
        aria-label={`${title}, in ${unit}. ${data.map((d) => `${d.label} ${d.value}`).join(", ")}.`}
        className="block"
      >
        {data.map((d, i) => {
          const w = Math.max(4, (d.value / max) * iw);
          const yTop = i * ROW + (ROW - THICK) / 2;
          // Square at the baseline, 4px radius at the data end.
          const r = Math.min(4, w);
          const path = `M${LABEL_W},${yTop}h${w - r}a${r},${r} 0 0 1 ${r},${r}v${THICK - 2 * r}a${r},${r} 0 0 1 ${-r},${r}h${-(w - r)}Z`;
          return (
            <g key={d.label} className="group">
              <title>{`${d.label}: ${d.value} ${unit}`}</title>
              <rect x={0} y={i * ROW} width={width} height={ROW} fill="transparent" />
              <text
                x={LABEL_W - 10}
                y={i * ROW + ROW / 2}
                dy="0.32em"
                textAnchor="end"
                className="fill-ink text-xs"
              >
                {d.label}
              </text>
              <path d={path} className="fill-chart transition-opacity group-hover:opacity-80" />
              <text
                x={LABEL_W + w + 6}
                y={i * ROW + ROW / 2}
                dy="0.32em"
                className="fill-muted text-xs tabular-nums"
              >
                {d.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
