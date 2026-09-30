import { useId, useMemo, useState } from 'react';
import './DetectionDemo.css';

/*
  Live re-run of the RoadSense detection rule on a synthetic trace:
    anomaly when dG(t) = |G(t) - G(t-1)| >= threshold
    then a 1.5 s cooldown (30 samples at 20 Hz) to ignore suspension bounce.
  Severity bands come from the RoadSense dashboard defaults.
*/

const HZ = 20;
const SECONDS = 24;
const N = HZ * SECONDS;
const COOLDOWN = 1.5 * HZ;

const BANDS = [
  { min: 1.2, key: 'critical', label: 'Critical', note: '>= 1.20' },
  { min: 1.0, key: 'urgent', label: 'Urgent', note: '1.00 to 1.19' },
  { min: 0.7, key: 'moderate', label: 'Moderate', note: '0.70 to 0.99' },
  { min: -Infinity, key: 'normal', label: 'Normal', note: 'below 0.70' },
];

const bandFor = (v) => BANDS.find((b) => v >= b.min);

// Deterministic PRNG so the trace is identical on every visit.
function mulberry32(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildTrace() {
  const rand = mulberry32(2026);
  const g = new Array(N).fill(0).map(() => 1 + (rand() + rand() + rand() - 1.5) * 0.07);

  // [sample index, target peak dG]
  const bumps = [[38, 1.36], [104, 0.86], [150, 1.1], [214, 0.6], [268, 1.26], [334, 0.76], [398, 0.96], [446, 0.52]];
  const impulse = [1, -0.7, 0.45, -0.28, 0.14];

  bumps.forEach(([at, peak]) => {
    const a = peak / 1.7;
    impulse.forEach((k, j) => { if (at + j < N) g[at + j] += a * k; });
    // suspension settling after the hit
    for (let j = 5; j < 26 && at + j < N; j++) {
      g[at + j] += a * 0.42 * Math.sin((j - 5) * 0.9) * Math.exp(-(j - 5) / 7);
    }
  });

  const dG = g.map((v, i) => (i === 0 ? 0 : Math.abs(v - g[i - 1])));
  return dG;
}

function detect(dG, threshold, debounce) {
  const hits = [];
  let last = -Infinity;
  for (let i = 1; i < dG.length; i++) {
    if (dG[i] < threshold) continue;
    if (debounce && i - last < COOLDOWN) continue;
    const windowEnd = Math.min(dG.length, i + (debounce ? COOLDOWN : 1));
    let peak = dG[i];
    for (let j = i; j < windowEnd; j++) peak = Math.max(peak, dG[j]);
    hits.push({ i, peak });
    last = i;
  }
  return hits;
}

const W = 720;
const H = 230;
const PAD = { l: 44, r: 12, t: 14, b: 30 };
const Y_MAX = 1.6;
const x = (i) => PAD.l + (i / (N - 1)) * (W - PAD.l - PAD.r);
const y = (v) => PAD.t + (1 - Math.min(v, Y_MAX) / Y_MAX) * (H - PAD.t - PAD.b);

function DetectionDemo() {
  const [threshold, setThreshold] = useState(0.7);
  const [debounce, setDebounce] = useState(true);
  const sliderId = useId();
  const dG = useMemo(buildTrace, []);

  const hits = useMemo(() => detect(dG, threshold, debounce), [dG, threshold, debounce]);
  const withDebounce = useMemo(() => detect(dG, threshold, true).length, [dG, threshold]);
  const withoutDebounce = useMemo(() => detect(dG, threshold, false).length, [dG, threshold]);

  const path = useMemo(
    () => dG.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' '),
    [dG]
  );

  return (
    <div className="demo">
      <div className="demo__controls">
        <div className="demo__field">
          <label htmlFor={sliderId}>Threshold (ΔG)</label>
          <div className="demo__range">
            <input
              id={sliderId}
              type="range"
              min="0.4"
              max="1.4"
              step="0.05"
              value={threshold}
              onChange={(e) => setThreshold(parseFloat(e.target.value))}
            />
            <output className="mono" htmlFor={sliderId}>{threshold.toFixed(2)}</output>
          </div>
        </div>

        <label className="demo__check">
          <input type="checkbox" checked={debounce} onChange={(e) => setDebounce(e.target.checked)} />
          <span>1.5 s debounce</span>
        </label>

        <div className="demo__counts" aria-live="polite">
          <span><b className="mono">{withDebounce}</b> events with debounce</span>
          <span><b className="mono">{withoutDebounce}</b> records without it</span>
        </div>
      </div>

      <div className="demo__chart-scroll">
        <svg className="demo__chart" viewBox={`0 0 ${W} ${H}`} role="img"
          aria-label={`Vibration change over ${SECONDS} seconds. ${hits.length} detections at threshold ${threshold.toFixed(2)}.`}>
          {[0, 0.5, 1, 1.5].map((v) => (
            <g key={v}>
              <line className="demo__grid" x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} />
              <text className="demo__tick" x={PAD.l - 8} y={y(v) + 4} textAnchor="end">{v.toFixed(1)}</text>
            </g>
          ))}
          {[0, 6, 12, 18, 24].map((s) => (
            <text key={s} className="demo__tick" x={x(Math.min(s * HZ, N - 1))} y={H - 8} textAnchor="middle">{s}s</text>
          ))}

          {debounce && hits.map((h) => (
            <rect key={`w${h.i}`} className="demo__cooldown" x={x(h.i)} y={PAD.t}
              width={x(Math.min(h.i + COOLDOWN, N - 1)) - x(h.i)} height={H - PAD.t - PAD.b} />
          ))}

          <path className="demo__trace" d={path} />

          <line className="demo__threshold" x1={PAD.l} x2={W - PAD.r} y1={y(threshold)} y2={y(threshold)} />

          {hits.map((h) => (
            <circle key={`h${h.i}`} className={`demo__hit demo__hit--${bandFor(h.peak).key}`}
              cx={x(h.i)} cy={y(h.peak)} r="7" />
          ))}
        </svg>
      </div>

      <ul className="demo__legend">
        {BANDS.map((b) => (
          <li key={b.key}><span className={`demo__swatch demo__hit--${b.key}`} aria-hidden="true" />{b.label} <span className="mono">{b.note}</span></li>
        ))}
      </ul>

      <p className="demo__caption">
        Synthetic 20 Hz trace for illustration. The ΔG rule, the 1.5 s cooldown, and the severity bands are the ones
        RoadSense uses. Drop the threshold or switch off debounce to see why the cooldown exists.
      </p>
    </div>
  );
}

export default DetectionDemo;
