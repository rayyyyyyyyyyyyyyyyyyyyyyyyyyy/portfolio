import { MapPin } from 'lucide-react';
import StitchTitle from './ui/StitchTitle';
import { Paperclip, Sticker } from './ui/Decor';
import portrait from '../assets/onuma-portrait.webp';
import './Education.css';

function Education() {
  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <StitchTitle thread="blue" id="education-title">Education</StitchTitle>

        <div className="edu">
          <article className="idcard">
            <div className="idcard__band">
              <span>KMUTNB</span>
              <span className="idcard__band-sub">Student</span>
            </div>
            <div className="idcard__body">
              <img className="idcard__photo" src={portrait} alt="" width="600" height="800" loading="lazy" />
              <div className="idcard__info">
                <h3 className="idcard__name">Onuma Dokpikul</h3>
                <p className="idcard__major">Electronics Engineering Technology (Computer), EnET-C</p>
                <p className="idcard__degree">Bachelor of Engineering (B.Eng.)</p>
                <p className="idcard__inst">
                  College of Industrial Technology, King Mongkut's University of Technology North Bangkok
                </p>
                <p className="idcard__meta"><MapPin size={14} aria-hidden="true" /> Bangkok, Thailand</p>
              </div>
            </div>
            <div className="idcard__foot">
              <dl className="idcard__facts">
                <div><dt>Expected graduation</dt><dd>2027</dd></div>
                <div><dt>GPAX</dt><dd>3.07</dd></div>
              </dl>
              <span className="idcard__holo" aria-hidden="true" />
            </div>
          </article>

          <Paperclip style={{ top: -26, left: '48%', transform: 'rotate(-12deg)' }} />
          <Sticker shape="gem" color="blue" size={46} style={{ top: -18, right: -14 }} />
        </div>
      </div>
    </section>
  );
}

export default Education;
