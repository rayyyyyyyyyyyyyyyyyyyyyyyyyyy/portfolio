import { useEffect, useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import StitchTitle from './ui/StitchTitle';
import ContactForm from './contact/ContactForm';
import XPWindow from './ui/XPWindow';
import { Sticker } from './ui/Decor';
import portrait from '../assets/onuma-portrait.webp';
import './Contact.css';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const BuddyIcon = () => (
  <svg viewBox="0 0 18 18" width="18" height="18">
    <circle cx="9" cy="5.5" r="4" fill="#6fd23c" stroke="#fff" strokeWidth="1" />
    <path d="M2 17 C2 11 16 11 16 17Z" fill="#6fd23c" stroke="#fff" strokeWidth="1" />
  </svg>
);

const EMAIL = 'bp.onuma@gmail.com';

/* mailto: does nothing on machines without a mail app, so offer a one-click copy too */
function CopyEmail() {
  const [state, setState] = useState('idle');
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setState('copied');
    } catch {
      setState('failed');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState('idle'), 2200);
  };

  return (
    <div className="im__address">
      <a href={`mailto:${EMAIL}`} className="im__email">{EMAIL}</a>
      <button type="button" className={`im__copy ${state === 'copied' ? 'is-copied' : ''}`} onClick={copy}>
        {state === 'copied' ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
        {state === 'copied' ? 'Copied!' : 'Copy'}
      </button>
      <span className="visually-hidden" aria-live="polite">
        {state === 'copied' ? 'Email address copied' : state === 'failed' ? 'Copy failed, please select the address' : ''}
      </span>
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState([]);

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__wrap">
        <StitchTitle thread="pink" id="contact-title">Contact</StitchTitle>

        <XPWindow title="Onuma Dokpikul: Conversation" icon={<BuddyIcon />} className="im" labelledBy="im-title">
          <div className="im__buddy">
            <img className="im__avatar" src={portrait} alt="" width="600" height="800" loading="lazy" />
            <div>
              <p className="im__name">Onuma Dokpikul</p>
              <p className="im__status">
                <span className="im__dot" aria-hidden="true" /> Open to internships &amp; junior full-stack roles
              </p>
            </div>
          </div>

          <div className="im__log">
            <p className="im__msg">
              <span className="im__who">Onuma says:</span>
              Hi! I'm looking for an internship or a junior full-stack role. If you have an opportunity or just want
              to talk about web apps, send me a message here.
            </p>
            {sent.map((m, i) => (
              <p key={i} className="im__msg im__msg--you">
                <span className="im__who">You ({m.email}) say:</span>
                {m.message}
              </p>
            ))}
          </div>

          <ContactForm onSent={(m) => setSent((list) => [...list, m])} />

          <div className="im__direct">
            <span className="im__direct-label">Or reach me directly:</span>
            <CopyEmail />
            <a href="https://github.com/rayyyyyyyyyyyyyyyyyyyyyyyyyyy" target="_blank" rel="noreferrer" className="im__github">
              <GithubIcon size={17} /> GitHub
            </a>
          </div>
        </XPWindow>

        <Sticker shape="sparkle" color="gold" size={54} className="contact__sticker" style={{ top: 70, right: '6%' }} />
        <Sticker shape="heart" color="pink" size={38} className="contact__sticker" style={{ bottom: 40, left: '4%' }} />

        <p className="contact__foot">Built in React by Onuma Dokpikul, 2026.</p>
      </div>
    </section>
  );
}

export default Contact;
