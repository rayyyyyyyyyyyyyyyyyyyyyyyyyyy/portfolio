import { useRef, useState, useId } from 'react';
import { ArrowRight, Crosshair, Camera, Activity, LayoutDashboard } from 'lucide-react';
import StitchTitle from './ui/StitchTitle';
import XPWindow from './ui/XPWindow';
import { Disc, Sticker, Tape } from './ui/Decor';
import DetectionDemo from './projects/DetectionDemo';
import systemDiagram from '../assets/roadsense-system.webp';
import './Projects.css';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const RoadIcon = () => (
  <svg viewBox="0 0 18 18" width="18" height="18">
    <path d="M6 1 L2 17 H16 L12 1Z" fill="#4a5568" />
    <path d="M9 2 V5 M9 8 V11 M9 14 V17" stroke="#ffe45c" strokeWidth="1.6" />
  </svg>
);

const REPO = 'https://github.com/rayyyyyyyyyyyyyyyyyyyyyyyyyyy/RoadSense';

const HIGHLIGHTS = [
  {
    Icon: Crosshair,
    title: 'Centimeter-accurate location',
    body: 'RTK-GNSS (ZED-F9P) with NTRIP corrections pins every pothole to the exact spot on the road.',
  },
  {
    Icon: Camera,
    title: 'Automatic photo evidence',
    body: 'The shutter delay follows live vehicle speed, so each photo lands 5 m past the damage.',
  },
  {
    Icon: Activity,
    title: 'No false alarms from bounce',
    body: 'A ΔG ≥ 0.70 trigger plus a 1.5 s cooldown ignores the suspension rebound after each hit.',
    tab: 1,
  },
  {
    Icon: LayoutDashboard,
    title: 'Live severity dashboard',
    body: 'Drop in a survey, see every hit on Google Maps, and re-rank Critical, Urgent and Moderate with sliders.',
  },
];

const STACK = ['JavaScript', 'HTML5 / CSS3', 'Google Maps API', 'Chart.js', 'IndexedDB', 'Python', 'OpenCV', 'ESP32', 'MicroPython', 'RTK-GNSS'];

const TABS = ['Overview', 'Detection', 'System'];

function RoadSenseWindow() {
  const [tab, setTab] = useState(0);
  const tabRefs = useRef([]);
  const base = useId();

  const onKeyDown = (e) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (tab + dir + TABS.length) % TABS.length;
    setTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <XPWindow title="RoadSense.exe" icon={<RoadIcon />} className="rs-window" labelledBy={`${base}-title`}>
      <div className="rs-tabs" role="tablist" aria-label="RoadSense details" onKeyDown={onKeyDown}>
        {TABS.map((t, i) => (
          <button
            key={t}
            ref={(el) => (tabRefs.current[i] = el)}
            role="tab"
            id={`${base}-tab-${i}`}
            aria-selected={tab === i}
            aria-controls={`${base}-panel-${i}`}
            tabIndex={tab === i ? 0 : -1}
            className="rs-tab"
            onClick={() => setTab(i)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="rs-sheet">
        {tab === 0 && (
          <div role="tabpanel" id={`${base}-panel-0`} aria-labelledby={`${base}-tab-0`} className="rs-panel rs-overview">
            <div className="rs-overview__main">
              <h3 className="rs-title">RoadSense</h3>
              <p className="rs-sub">Road damage dashboard, from vehicle sensor to map</p>
              <p className="rs-desc rs-desc--lead">
                A low-cost system that finds potholes from a moving car and turns each survey into a ranked repair
                list on a map.
              </p>
              <p className="rs-desc">
                An ESP32 samples an accelerometer at 20 Hz, a Python logger filters each hit and takes the photo, and
                a web dashboard (Google Maps, Chart.js, IndexedDB) shows the results. I built all three parts.
              </p>
              <p className="rs-desc rs-desc--note">
                Built during a two-month international internship at the National Institute of Technology, Okinawa
                College (<strong>NITOC</strong>), under Prof. Suriyon Tansuriyavong.
              </p>
              <ul className="rs-stack" aria-label="Tech stack">
                {STACK.map((s) => <li key={s} className="chip">{s}</li>)}
              </ul>
              <div className="rs-actions">
                <a href={REPO} target="_blank" rel="noreferrer" className="btn btn--aqua">
                  <GithubIcon /> Source code
                </a>
                <button type="button" className="btn btn--glass" onClick={() => { setTab(1); tabRefs.current[1]?.focus(); }}>
                  Try the detector <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            <fieldset className="rs-highlights">
              <legend>Why it stands out</legend>
              <ul>
                {HIGHLIGHTS.map(({ Icon, title, body, tab: goTo }) => (
                  <li key={title} className="rs-hl">
                    <span className="rs-hl__icon" aria-hidden="true"><Icon size={20} /></span>
                    <div>
                      <h4 className="rs-hl__title">{title}</h4>
                      <p className="rs-hl__body">{body}</p>
                      {goTo !== undefined && (
                        <button type="button" className="rs-hl__link" onClick={() => { setTab(goTo); tabRefs.current[goTo]?.focus(); }}>
                          See it work <ArrowRight size={14} aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </fieldset>
          </div>
        )}

        {tab === 1 && (
          <div role="tabpanel" id={`${base}-panel-1`} aria-labelledby={`${base}-tab-1`} className="rs-panel">
            <DetectionDemo />
          </div>
        )}

        {tab === 2 && (
          <div role="tabpanel" id={`${base}-panel-2`} aria-labelledby={`${base}-tab-2`} className="rs-panel rs-pipeline">
            <figure className="rs-diagram">
              <a href={systemDiagram} target="_blank" rel="noreferrer" className="rs-diagram__link">
                <img
                  src={systemDiagram}
                  width="1272"
                  height="620"
                  loading="lazy"
                  alt="RoadSense hardware setup: an MPU6050 accelerometer and a u-blox GPS module wired to an ESP32, which connects to a notebook running the Python logger, with a USB webcam attached to the notebook. Opens full size in a new tab."
                />
              </a>
              <figcaption>
                How the parts connect: sensors to the ESP32, ESP32 and webcam to the notebook.
                <span className="rs-diagram__hint"> Tap the image to view full size.</span>
              </figcaption>
            </figure>
            <ol className="pipe">
              <li className="pipe__stage">
                <h4>ESP32 firmware</h4>
                <p className="pipe__tech mono">MicroPython</p>
                <ul>
                  <li>Reads the MPU6050 over I2C at 20 Hz</li>
                  <li>Parses ZED-F9P UBX position over UART</li>
                  <li>Pulls RTK corrections from an NTRIP caster</li>
                  <li>Streams telemetry over USB serial</li>
                </ul>
              </li>
              <li className="pipe__stage">
                <h4>Python logger</h4>
                <p className="pipe__tech mono">pyserial · OpenCV</p>
                <ul>
                  <li>ΔG filter with a 1.5 s cooldown</li>
                  <li>Speed-based shutter delay for the evidence photo</li>
                  <li>Writes a CSV log and an image registry per survey</li>
                </ul>
              </li>
              <li className="pipe__stage">
                <h4>Web dashboard</h4>
                <p className="pipe__tech mono">HTML5/JS · Google Maps · Chart.js</p>
                <ul>
                  <li>Drag and drop a survey's CSV and photos</li>
                  <li>Severity sliders: Critical, Urgent, Moderate</li>
                  <li>Map markers, vibration and severity charts, EN/TH</li>
                </ul>
              </li>
            </ol>
          </div>
        )}
      </div>
    </XPWindow>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <StitchTitle thread="pink" id="projects-title">Projects</StitchTitle>

        <RoadSenseWindow />

        <article className="jewel">
          <Tape color="yellow" style={{ top: -12, right: 60, transform: 'rotate(5deg)' }} />
          <Disc className="jewel__disc" label="portfolio" sub="React + CSS" />
          <div className="jewel__text">
            <h3>This portfolio</h3>
            <p>
              Single-page portfolio in React 19 and plain CSS, deployed on Vercel. The taskbar, stitched headings,
              stickers and windows are drawn in code, and the RoadSense detector above runs its logic live in the
              browser.
            </p>
            <ul className="rs-stack" aria-label="Tech stack">
              {['React 19', 'CSS', 'SVG', 'Vercel'].map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
            <a href="https://github.com/rayyyyyyyyyyyyyyyyyyyyyyyyyyy/portfolio" target="_blank" rel="noreferrer" className="jewel__link">
              <GithubIcon size={16} /> Source code
            </a>
          </div>
          <Sticker shape="star" color="pink" size={40} style={{ bottom: -16, left: '38%' }} />
        </article>
      </div>
    </section>
  );
}

export default Projects;
