import React from 'react';
import './Contact.css';
import { Mail, Sparkles } from 'lucide-react';
import { Paperclip, Sticker, WashiStrip, Stamp } from './ScrapbookDecorations';

const GithubIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Let's Connect ✦</h2>

        <div className="contact__wrapper">
          <div className="card contact-card">
            {/* Scrapbook Tape & Clip */}
            <WashiStrip color="mint" rotate={-1.5} width={130} />
            <Paperclip top="-12px" right="32px" rotate={20} color="gold" />
            <Stamp bottom="24px" left="24px" text="OPEN TO WORK ★ 2025" />

            <div className="contact-card__inner">
              <div className="contact-card__header">
                <div className="contact-card__badge">
                  <Sparkles size={16} />
                  <span>Get In Touch</span>
                </div>
                <h3 className="contact-card__title">Have a project or opportunity?</h3>
                <p className="contact-card__subtitle">
                  I'm always interested in discussing new engineering projects, IoT solutions, or full-stack software opportunities!
                </p>
              </div>

              <div className="contact-links">
                {/* Email Card */}
                <a
                  href="mailto:bp.onuma@gmail.com"
                  className="contact-btn contact-btn--email"
                >
                  <div className="contact-btn__icon">
                    <Mail size={22} />
                  </div>
                  <div className="contact-btn__text">
                    <span className="contact-btn__label">Email Me</span>
                    <span className="contact-btn__val">Send an inquiry &rarr;</span>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href="https://github.com/rayyyyyyyyyyyyyyyyyyyyyyyyyyy"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn contact-btn--github"
                >
                  <div className="contact-btn__icon">
                    <GithubIcon size={22} />
                  </div>
                  <div className="contact-btn__text">
                    <span className="contact-btn__label">GitHub</span>
                    <span className="contact-btn__val">Explore repositories &rarr;</span>
                  </div>
                </a>
              </div>

              <div className="contact-footer">
                <p>
                  Crafted with passion for engineering & design ✦ 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scattered Stickers */}
        <Sticker type="heart" top="50px" left="30px" delay="1s" />
        <Sticker type="ribbon" bottom="30px" right="40px" delay="2s" />
      </div>
    </section>
  );
}

export default Contact;
