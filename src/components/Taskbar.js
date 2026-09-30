import { useEffect, useState } from 'react';
import { Sparkles, FolderGit2, Plane, GraduationCap, Mail } from 'lucide-react';
import './Taskbar.css';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ITEMS = [
  { id: 'skills', label: 'Skills', Icon: Sparkles },
  { id: 'projects', label: 'Projects', Icon: FolderGit2 },
  { id: 'experience', label: 'Experience', Icon: Plane },
  { id: 'education', label: 'Education', Icon: GraduationCap },
  { id: 'contact', label: 'Contact', Icon: Mail },
];

const TIME_FMT = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Bangkok', hour: 'numeric', minute: '2-digit' });
const DATE_FMT = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Bangkok', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
});

/* The XP tray clock, pinned to Bangkok time so visitors abroad see my local time. */
function TrayClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let interval;
    // line the ticks up with the start of each minute
    const first = setTimeout(() => {
      setNow(new Date());
      interval = setInterval(() => setNow(new Date()), 60000);
    }, 60000 - (Date.now() % 60000));
    return () => { clearTimeout(first); clearInterval(interval); };
  }, []);

  const time = TIME_FMT.format(now);
  const date = DATE_FMT.format(now);

  return (
    <time
      className="taskbar__clock"
      dateTime={now.toISOString()}
      title={`${date} (Bangkok, UTC+7)`}
      aria-label={`Local time in Bangkok: ${time}`}
    >
      <span className="taskbar__clock-zone" aria-hidden="true">Bangkok</span>
      <span aria-hidden="true">{time}</span>
    </time>
  );
}

/* XP-style taskbar: the Start button returns to the top, each section is a window button. */
function Taskbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const ids = ['hero', ...ITEMS.map((i) => i.id)];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="taskbar" aria-label="Sections">
      <a href="#hero" className="taskbar__start" aria-label="Back to top">
        <span className="taskbar__flag" aria-hidden="true">
          <i /><i /><i /><i />
        </span>
        <span className="taskbar__start-label">onuma</span>
      </a>

      <ul className="taskbar__items">
        {ITEMS.map(({ id, label, Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`taskbar__btn ${active === id ? 'is-active' : ''}`}
              aria-current={active === id ? 'location' : undefined}
              aria-label={label}
            >
              <Icon size={16} aria-hidden="true" />
              <span className="taskbar__label">{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="taskbar__tray">
        <a
          href="https://github.com/rayyyyyyyyyyyyyyyyyyyyyyyyyyy"
          target="_blank"
          rel="noreferrer"
          className="taskbar__tray-link"
          aria-label="GitHub profile (opens in a new tab)"
        >
          <GithubIcon size={17} />
        </a>
        <TrayClock />
      </div>
    </nav>
  );
}

export default Taskbar;
