import React from 'react';
import './Hero.css';
import { Sparkles, Cpu, Radio, Code2, ArrowRight, Mail } from 'lucide-react';

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Floating Sticker Badges */}
      <span className="hero__tag hero__tag--1">
        <Cpu size={16} /> Senior EnET-C @ KMUTNB ✧
      </span>
      <span className="hero__tag hero__tag--2">
        <Radio size={16} /> Japan Intern 2026 (Okinawa) 🇯🇵
      </span>
      <span className="hero__tag hero__tag--3">
        <Code2 size={16} /> RoadSense IoT Creator ✦
      </span>

      {/* Decorative Y2K Star Graphics */}
      <div className="hero__star hero__star--1">✦</div>
      <div className="hero__star hero__star--2">★</div>
      <div className="hero__star hero__star--3">✧</div>

      <div className="container hero__content">
        <div className="hero__badge">
          <Sparkles size={18} color="#ffd700" />
          <span className="hero__badge-text">✦ ONUMA DOKPIKUL • อรอุมา ดอกพิกุล ✦</span>
          <Sparkles size={18} color="#ff69b4" />
        </div>

        <h1 className="hero__title">
          ELECTRONICS & <br />
          <span className="accent">COMPUTER TECH</span> <br />
          PORTFOLIO
        </h1>

        <p className="hero__subtitle">
          Senior EnET-C student at KMUTNB with hands-on experience in IoT embedded systems and software development. 
          Creator of the RoadSense vehicle telemetry system and international engineering intern in Okinawa, Japan (2026).
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            <span>Explore Projects</span>
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            <span>Let's Connect</span>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;