import React from 'react';
import './Experience.css';
import { Calendar, MapPin, CheckCircle2, Sparkles, Globe2 } from 'lucide-react';
import { Paperclip, Sticker, WashiStrip, Stamp } from './ScrapbookDecorations';

function Experience() {
  const experiences = [
    {
      id: 'japan-internship',
      role: 'International Engineering Intern',
      organization: 'Engineering Research Laboratory & Industry Exchange',
      location: 'Okinawa, Japan 🇯🇵',
      period: '2026 (Okinawa, Japan)',
      type: 'International Engineering Internship',
      image: '/assets/japan_internship.jpg',
      description:
        'Selected for an overseas engineering internship in Okinawa, Japan (2026), engaging in international technical collaboration, embedded systems development, and applied engineering research.',
      achievements: [
        'Collaborated with multinational engineers and Japanese researchers on embedded robotics and sensing prototypes.',
        'Developed C/C++ firmware and hardware interfacing for multi-sensor data acquisition.',
        'Participated in technical presentations and cross-cultural engineering sprint reviews in English.',
        'Gained hands-on experience with international engineering workflows and laboratory safety standards.',
      ],
      skills: ['Embedded C/C++', 'Microcontrollers', 'Sensor Interfacing', 'International Teamwork', 'Technical Research'],
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience & Journey ✦</h2>

        <div className="experience__container">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="card exp-card">
              {/* Scrapbook Tape & Clip */}
              <WashiStrip color="pink" rotate={-2} width={130} />
              <Paperclip top="-12px" right="30px" rotate={18} color="gold" />
              <Stamp bottom="20px" right="20px" text="OKINAWA ★ 2026" />

              <div className="exp-card__grid">
                {/* Photo / Scrapbook Collage */}
                <div className="exp-card__media">
                  <div className="exp-card__polaroid">
                    <img
                      src={exp.image}
                      alt={exp.role}
                      className="exp-card__img"
                    />
                    <div className="exp-card__caption">
                      <span>🇯🇵 Okinawa Engineering Logbook (2026)</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="exp-card__content">
                  <div className="exp-card__header">
                    <span className="exp-badge">
                      <Globe2 size={15} />
                      <span>{exp.type}</span>
                    </span>
                    <h3 className="exp-card__role">{exp.role}</h3>
                    <h4 className="exp-card__org">{exp.organization}</h4>
                    
                    <div className="exp-card__meta">
                      <span className="meta-item">
                        <MapPin size={15} color="#f43f5e" />
                        <span>{exp.location}</span>
                      </span>
                      <span className="meta-item">
                        <Calendar size={15} color="#0284c7" />
                        <span>{exp.period}</span>
                      </span>
                    </div>
                  </div>

                  <p className="exp-card__desc">{exp.description}</p>

                  <div className="exp-card__achievements">
                    <h5 className="achievements-heading">
                      <Sparkles size={16} color="#f43f5e" />
                      <span>Key Highlights & Contributions:</span>
                    </h5>
                    <ul>
                      {exp.achievements.map((item, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="exp-card__skills">
                    {exp.skills.map((s) => (
                      <span key={s} className="tag tag--pink">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scattered Stickers */}
        <Sticker type="flower" top="60px" left="20px" delay="0.5s" />
        <Sticker type="butterfly" bottom="30px" right="25px" delay="1.8s" />
      </div>
    </section>
  );
}

export default Experience;
