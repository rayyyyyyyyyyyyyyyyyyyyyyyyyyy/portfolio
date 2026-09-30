import { MapPin, Calendar, UserRound, Check, ArrowUp } from 'lucide-react';
import StitchTitle from './ui/StitchTitle';
import { Paperclip, Sticker } from './ui/Decor';
import certificate from '../assets/nitoc-certificate.webp';
import certificateThumb from '../assets/nitoc-certificate-thumb.webp';
import './Experience.css';

const ACHIEVEMENTS = [
  {
    key: 'roadsense',
    content: (
      <>
        Designed and built RoadSense end to end: ESP32 firmware, the Python logger, and the web dashboard.{' '}
        <a href="#projects" className="postcard__jump">See RoadSense <ArrowUp size={14} aria-hidden="true" /></a>
      </>
    ),
  },
  { key: 'presented', content: 'Presented the finished project in English at the end of the internship.' },
];

const SKILLS = ['Python', 'JavaScript', 'ESP32 / MicroPython', 'Google Maps API'];

function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <StitchTitle thread="green" id="experience-title">Experience</StitchTitle>

        <article className="postcard">
          <div className="postcard__front">
            <span className="postcard__sun" aria-hidden="true" />
            <span className="postcard__sea" aria-hidden="true" />

            <figure className="postcard__cert">
              <Paperclip style={{ top: -26, left: 26, transform: 'rotate(-8deg)' }} />
              <a href={certificate} target="_blank" rel="noreferrer" className="postcard__cert-link">
                <img
                  src={certificateThumb}
                  width="640"
                  height="476"
                  loading="lazy"
                  alt="Certificate of Completion from National Institute of Technology (KOSEN), Okinawa College, certifying that Onuma Dokpikul completed the internship program from April 1 to May 31, 2026. Opens full size in a new tab."
                />
              </a>
              <figcaption>Certificate of completion, tap to enlarge</figcaption>
            </figure>

            <div className="postcard__greeting" aria-hidden="true">
              <span className="postcard__greet">Greetings from</span>
              <span className="postcard__place">Okinawa</span>
            </div>
          </div>

          <div className="postcard__back">
            <div className="postcard__stamp" aria-hidden="true">
              <span className="postcard__stamp-inner">
                <span>NITOC</span>
                <span className="postcard__stamp-year">2026</span>
              </span>
            </div>

            <h3 className="postcard__role">International Internship</h3>
            <p className="postcard__org">National Institute of Technology, Okinawa College (NITOC)</p>
            <p className="postcard__meta">
              <span><MapPin size={15} aria-hidden="true" /> Okinawa, Japan</span>
              <span><Calendar size={15} aria-hidden="true" /> April 2026 - May 2026</span>
              <span><UserRound size={15} aria-hidden="true" /> Advisor: Prof. Suriyon Tansuriyavong</span>
            </p>

            <p className="postcard__desc">
              A two-month internship in Japan where I took one project, RoadSense, from first prototype to a
              working system with a web dashboard.
            </p>

            <ul className="postcard__list">
              {ACHIEVEMENTS.map(({ key, content }) => (
                <li key={key}><Check size={16} aria-hidden="true" /><span>{content}</span></li>
              ))}
            </ul>

            <ul className="postcard__skills" aria-label="Skills used">
              {SKILLS.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
          </div>

          <Sticker shape="heart" color="pink" size={42} style={{ bottom: -18, right: 32 }} />
        </article>
      </div>
    </section>
  );
}

export default Experience;
