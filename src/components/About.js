import React from 'react';
import './About.css';
import { Globe2, Radio, GraduationCap, Code2 } from 'lucide-react';
import { Paperclip, Sticker, WashiStrip, Stamp } from './ScrapbookDecorations';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">
          About <span className="accent">Me</span> ✦
        </h2>

        <div className="about__grid">
          {/* Card แนะนำตัวสไตล์กระดาษโน้ต */}
          <div className="card about__intro-card">
            <WashiStrip color="pink" rotate={-1.5} />
            <Paperclip top="-8px" right="24px" rotate={15} color="gold" />
            <h3>Hi there! ✨</h3>
            <p>
              I'm <strong>Onuma Dokpikul (อรอุมา ดอกพิกุล)</strong>, a senior student majoring 
              in <strong>Electronic Engineering Technology (Computer) — EnET-C</strong> at 
              King Mongkut's University of Technology North Bangkok (KMUTNB).
            </p>
            <p>
              Passionate about bridging hardware and software, from engineering IoT road sensing 
              systems (<strong>RoadSense</strong>) to building interactive web applications. 
              Proud to be an international engineering intern in <strong>Okinawa, Japan (2026) 🇯🇵</strong>.
            </p>
            <Stamp top="auto" left="auto" right="16px" bottom="16px" text="EnET-C ★ KMUTNB" />
          </div>

          {/* Stat Cards with Scrapbook Decorations */}
          <div className="about__stats">
            <div className="card about__stat-card">
              <WashiStrip color="blue" rotate={2} width={80} />
              <div className="about__stat-icon">
                <Globe2 size={26} color="#0284c7" />
              </div>
              <span className="about__stat-label">Japan Intern '26</span>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Okinawa 🇯🇵</span>
            </div>

            <div className="card about__stat-card">
              <WashiStrip color="pink" rotate={-2} width={80} />
              <div className="about__stat-icon">
                <Radio size={26} color="#f43f5e" />
              </div>
              <span className="about__stat-label">RoadSense</span>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>IoT Hardware</span>
            </div>

            <div className="card about__stat-card">
              <WashiStrip color="lavender" rotate={1} width={80} />
              <div className="about__stat-icon">
                <GraduationCap size={26} color="#8b5cf6" />
              </div>
              <span className="about__stat-label">Senior EnET-C</span>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>KMUTNB</span>
            </div>

            <div className="card about__stat-card">
              <WashiStrip color="green" rotate={-1} width={80} />
              <div className="about__stat-icon">
                <Code2 size={26} color="#10b981" />
              </div>
              <span className="about__stat-label">Full Stack & IoT</span>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Hardware + Web</span>
            </div>

            {/* Scattered Stickers */}
            <Sticker type="gem" top="-16px" right="-12px" delay="0.5s" />
            <Sticker type="butterfly" bottom="-14px" left="-10px" delay="1.5s" />
          </div>
        </div>

        {/* More stickers around section */}
        <Sticker type="sparkle" top="60px" right="20px" delay="2s" />
        <Sticker type="ribbon" bottom="40px" left="30px" delay="0.8s" />
      </div>
    </section>
  );
}

export default About;