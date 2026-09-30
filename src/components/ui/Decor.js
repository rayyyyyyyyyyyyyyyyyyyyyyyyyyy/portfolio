import { useId } from 'react';
import './Decor.css';

/* Scrapbook pieces. All decorative, all hidden from assistive tech. */

export function Paperclip({ className = '', style }) {
  const gradId = `clip-${useId().replace(/:/g, '')}`;
  return (
    <svg className={`paperclip ${className}`} style={style} viewBox="0 0 22 62" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradId} x1="0" x2="1">
          <stop offset="0" stopColor="#8e9aa8" />
          <stop offset="0.45" stopColor="#f4f7fa" />
          <stop offset="1" stopColor="#7c8896" />
        </linearGradient>
      </defs>
      <path
        d="M15 18 V46 a4 4 0 0 1 -8 0 V10 a6 6 0 0 1 12 0 V50 a8 8 0 0 1 -16 0 V16"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Tape({ color = 'pink', className = '', style }) {
  return <span className={`tape tape--${color} ${className}`} style={style} aria-hidden="true" />;
}

const SHAPES = {
  sparkle: <path d="M50 2 C54 36 64 46 98 50 C64 54 54 64 50 98 C46 64 36 54 2 50 C36 46 46 36 50 2Z" />,
  star: <path d="M50 4 L62 36 L96 37 L69 58 L79 92 L50 72 L21 92 L31 58 L4 37 L38 36Z" />,
  heart: <path d="M50 90 C18 66 4 50 4 31 A22 22 0 0 1 50 20 A22 22 0 0 1 96 31 C96 50 82 66 50 90Z" />,
  gem: (
    <>
      <path d="M22 12 H78 L96 38 L50 94 L4 38Z" />
      <path className="sticker__facet" d="M4 38 H96 M22 12 L36 38 L50 94 L64 38 L78 12 M36 38 L50 12 L64 38" />
    </>
  ),
};

export function Sticker({ shape = 'sparkle', color = 'pink', size = 40, className = '', style }) {
  return (
    <svg
      className={`sticker sticker--${color} ${className}`}
      style={{ width: size, height: size, ...style }}
      viewBox="-8 -8 116 116"
      aria-hidden="true"
      focusable="false"
    >
      {SHAPES[shape]}
    </svg>
  );
}

/* Iridescent CD-R with a handwritten label */
export function Disc({ label, sub, className = '', style }) {
  return (
    <div className={`disc ${className}`} style={style} aria-hidden="true">
      <div className="disc__label">
        <span className="disc__title">{label}</span>
        {sub && <span className="disc__sub">{sub}</span>}
      </div>
      <div className="disc__hub" />
    </div>
  );
}
