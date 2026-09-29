import React from 'react';
import './SparkleOverlay.css';

/*
  SparkleOverlay — Y2K Bling Sparkle Particles ✨
  ดาวกะพริบ + Lens Flare + Decorative Stars ลอยทั่วหน้าจอ
*/

function SparkleOverlay() {
  // สุ่มตำแหน่งดาว
  const sparkles = [
    { top: '8%',  left: '12%', size: 'lg', color: 'gold', duration: '3s', delay: '0s' },
    { top: '15%', left: '78%', size: 'md', color: 'pink', duration: '4s', delay: '1.2s' },
    { top: '25%', left: '5%',  size: 'sm', color: 'white', duration: '3.5s', delay: '0.5s' },
    { top: '35%', left: '92%', size: 'lg', color: 'gold', duration: '5s', delay: '2s' },
    { top: '45%', left: '20%', size: 'md', color: 'pink', duration: '3s', delay: '1.8s' },
    { top: '55%', left: '65%', size: 'sm', color: 'gold', duration: '4.5s', delay: '0.8s' },
    { top: '60%', left: '88%', size: 'lg', color: 'white', duration: '3.8s', delay: '2.5s' },
    { top: '70%', left: '35%', size: 'md', color: 'gold', duration: '4s', delay: '1s' },
    { top: '78%', left: '55%', size: 'sm', color: 'pink', duration: '3.2s', delay: '3s' },
    { top: '85%', left: '10%', size: 'lg', color: 'gold', duration: '5s', delay: '0.3s' },
    { top: '12%', left: '45%', size: 'sm', color: 'white', duration: '4.2s', delay: '2.2s' },
    { top: '40%', left: '50%', size: 'md', color: 'gold', duration: '3.6s', delay: '1.5s' },
    { top: '90%', left: '75%', size: 'sm', color: 'pink', duration: '4s', delay: '0.7s' },
    { top: '5%',  left: '60%', size: 'md', color: 'gold', duration: '3.4s', delay: '2.8s' },
    { top: '50%', left: '3%',  size: 'lg', color: 'white', duration: '5s', delay: '1.3s' },
  ];

  const flares = [
    { top: '10%', left: '30%', duration: '6s', delay: '1s' },
    { top: '65%', left: '85%', duration: '8s', delay: '3s' },
    { top: '30%', left: '70%', duration: '7s', delay: '5s' },
  ];

  const stars = [
    { top: '18%', left: '95%', size: '28px', delay: '0s', char: '✦' },
    { top: '42%', left: '2%',  size: '22px', delay: '1.5s', char: '★' },
    { top: '72%', left: '96%', size: '20px', delay: '2.5s', char: '✧' },
    { top: '88%', left: '40%', size: '18px', delay: '0.8s', char: '✦' },
    { top: '5%',  left: '85%', size: '24px', delay: '3s', char: '★' },
  ];

  return (
    <div className="sparkle-overlay">
      {/* Twinkle Sparkles */}
      {sparkles.map((s, i) => (
        <div
          key={`sparkle-${i}`}
          className={`sparkle sparkle--${s.size} sparkle--${s.color}`}
          style={{
            top: s.top,
            left: s.left,
            '--duration': s.duration,
            '--delay': s.delay,
          }}
        />
      ))}

      {/* Lens Flares */}
      {flares.map((f, i) => (
        <div
          key={`flare-${i}`}
          className="lens-flare"
          style={{
            top: f.top,
            left: f.left,
            '--duration': f.duration,
            '--delay': f.delay,
          }}
        />
      ))}

      {/* Decorative Stars */}
      {stars.map((s, i) => (
        <span
          key={`star-${i}`}
          className="deco-star"
          style={{
            top: s.top,
            left: s.left,
            '--size': s.size,
            '--delay': s.delay,
          }}
        >
          {s.char}
        </span>
      ))}
    </div>
  );
}

export default SparkleOverlay;
