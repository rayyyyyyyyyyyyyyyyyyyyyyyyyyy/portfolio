import { ArrowRight } from 'lucide-react';
import { Paperclip, Sticker, Tape } from './ui/Decor';
import portrait from '../assets/onuma-portrait.webp';
import './Hero.css';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 className="hero__name">
            <span className="hero__name-line">Onuma</span>
            <span className="hero__name-line">Dokpikul</span>
          </h1>

          <p className="hero__plate">Computer Engineering</p>

          <div className="hero__notebook" id="about">
            <Paperclip style={{ top: -22, right: 40, transform: 'rotate(8deg)' }} />
            <div className="hero__rings" aria-hidden="true" />
            <p className="hero__lede">
              Senior Computer Engineering student at KMUTNB, heading into full-stack development.
            </p>
            <p>
              I like building the whole product: the database, the API, and the interface people use.
              My IoT project <strong>RoadSense</strong> (internship in Okinawa, 2026) ended in a web dashboard
              too, so I'm at home when the data comes from real sensors.
            </p>
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn">
              See RoadSense <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/rayyyyyyyyyyyyyyyyyyyyyyyyyyy"
              target="_blank"
              rel="noreferrer"
              className="btn btn--aqua"
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>

        <div className="hero__collage">
          <figure className="hero__polaroid">
            <img src={portrait} alt="Portrait of Onuma Dokpikul" width="600" height="800" />
            <figcaption aria-hidden="true">hi, it's me!</figcaption>
          </figure>

          <div className="hero__note" aria-hidden="true">
            <Tape color="blue" style={{ top: -12, left: 40, transform: 'rotate(-4deg)' }} />
            <p>looking for: <span className="hero__nowrap">full-stack</span> roles</p>
            <p>based in: Bangkok, Thailand</p>
            <p>say hi! email or GitHub</p>
          </div>

          {/* Education, as a student ID laid on the collage (the polaroid already carries the photo) */}
          <article className="hero__idcard" id="education" aria-labelledby="hero-edu-title">
            <div className="hero__idcard-band">
              <span id="hero-edu-title">KMUTNB</span>
              <span className="hero__idcard-band-sub">Student</span>
            </div>
            <div className="hero__idcard-body">
              <p className="hero__idcard-major">B.Eng. Electronics Engineering Technology (Computer)</p>
              <p className="hero__idcard-inst">College of Industrial Technology</p>
              <dl className="hero__idcard-facts">
                <div><dt>Expected graduation</dt><dd>2027</dd></div>
                <div><dt>GPAX</dt><dd>3.07</dd></div>
              </dl>
            </div>
            <span className="hero__idcard-holo" aria-hidden="true" />
          </article>

          <Sticker shape="sparkle" color="gold" size={58} style={{ top: '4%', left: '-2%' }} />
          <Sticker shape="heart" color="pink" size={46} style={{ bottom: '4%', left: '2%' }} />
          <Sticker shape="gem" color="chrome" size={40} style={{ top: '84%', right: '8%' }} />
          <Sticker shape="star" color="blue" size={34} style={{ top: '-4%', left: '38%' }} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
