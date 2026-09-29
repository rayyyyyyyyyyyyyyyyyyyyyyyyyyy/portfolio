import React from 'react';
import './Education.css';
import { GraduationCap, Calendar, MapPin, BookOpen, Sparkles } from 'lucide-react';
import { Paperclip, Sticker, WashiStrip, Stamp } from './ScrapbookDecorations';

function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Industrial Technology / Engineering',
      major: 'Electronic Engineering Technology (Computer) — EnET-C',
      institution: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
      period: 'Senior Year (4th Year)',
      location: 'Bangkok, Thailand',
      status: 'Senior EnET-C Student',
      keyCourses: [
        'Electronic Circuits & Microcontrollers',
        'Embedded Systems Architecture',
        'Data Structures & Algorithms',
        'Computer Networks & Protocols',
        'Database Management Systems',
        'Selected Topics in Software Development',
      ],
      highlights: [
        'Specialized in IoT Embedded Electronics, Sensor Integration & Full-Stack Web Development.',
        'Developed RoadSense: Vehicle-Mounted IoT Road Damage Detection Senior Capstone System.',
        'Selected for International Engineering Internship in Okinawa, Japan (2026).',
      ],
    },
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education ✦</h2>

        <div className="education__container">
          {educationData.map((edu, idx) => (
            <div key={idx} className="card edu-card">
              {/* Scrapbook Tape & Clip */}
              <WashiStrip color="lavender" rotate={1.5} width={130} />
              <Paperclip top="-12px" left="28px" rotate={-15} color="silver" />
              <Stamp bottom="24px" right="24px" text="KMUTNB ★ EnET-C" />

              <div className="edu-card__header">
                <div className="edu-card__icon-wrapper">
                  <GraduationCap size={32} className="edu-icon" />
                </div>
                <div className="edu-card__title-group">
                  <span className="edu-badge">{edu.status}</span>
                  <h3 className="edu-card__degree">{edu.degree}</h3>
                  <h4 className="edu-card__major">{edu.major}</h4>
                  <h5 className="edu-card__inst">{edu.institution}</h5>

                  <div className="edu-card__meta">
                    <span className="meta-item">
                      <Calendar size={15} color="#8b5cf6" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="meta-item">
                      <MapPin size={15} color="#f43f5e" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="edu-card__body">
                <div className="edu-block">
                  <h5 className="block-title">
                    <Sparkles size={16} color="#8b5cf6" />
                    <span>Academic Highlights & Focus:</span>
                  </h5>
                  <ul className="edu-highlights">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>
                        <span className="bullet">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="edu-block">
                  <h5 className="block-title">
                    <BookOpen size={16} color="#0284c7" />
                    <span>Key Coursework:</span>
                  </h5>
                  <div className="course-tags">
                    {edu.keyCourses.map((c) => (
                      <span key={c} className="tag tag--lavender">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scattered Stickers */}
        <Sticker type="star" top="40px" right="40px" delay="0.8s" />
        <Sticker type="gem" bottom="20px" left="30px" delay="1.6s" />
      </div>
    </section>
  );
}

export default Education;
