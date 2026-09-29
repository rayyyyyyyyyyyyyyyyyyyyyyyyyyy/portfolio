import React from 'react';
import './ScrapbookDecorations.css';

/*
  Scrapbook Decoration Components
  ใช้ซ้ำได้ทั่วทั้งเว็บ — Paperclip, Sticker, WashiStrip, Stamp
*/

export function Paperclip({ top, left, right, bottom, rotate = -20, color = '' }) {
  return (
    <div
      className={`paperclip ${color ? `paperclip--${color}` : ''}`}
      style={{
        top, left, right, bottom,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
}

export function Sticker({ top, left, right, bottom, type = 'star', delay = '0s', children }) {
  const icons = {
    star: '⭐',
    heart: '💖',
    flower: '🌸',
    sparkle: '✨',
    ribbon: '🎀',
    gem: '💎',
    butterfly: '🦋',
  };

  return (
    <div
      className={`sticker sticker--${type}`}
      style={{
        top, left, right, bottom,
        '--delay': delay,
        animationDelay: delay,
      }}
    >
      {children || icons[type] || '⭐'}
    </div>
  );
}

export function WashiStrip({ top, left, right, rotate = -1.5, color = 'pink', width = 110 }) {
  return (
    <div
      className={`washi-tape washi-tape--${color}`}
      style={{
        top,
        left: left || '50%',
        right,
        transform: left ? `rotate(${rotate}deg)` : `translateX(-50%) rotate(${rotate}deg)`,
        width: `${width}px`,
      }}
    />
  );
}

export function Stamp({ top, left, right, bottom, text = 'CPE ★ 2025' }) {
  return (
    <div className="stamp" style={{ top, left, right, bottom }}>
      {text}
    </div>
  );
}
