import React from 'react';
import './Projects.css';
import { Radio, ExternalLink, Sparkles } from 'lucide-react';
import { Paperclip, Sticker, WashiStrip } from './ScrapbookDecorations';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function Projects() {
  const projects = [
    {
      id: 'roadsense',
      isFeatured: true,
      title: 'RoadSense',
      subtitle: 'Vehicle-Mounted IoT Road Damage Detection System',
      description:
        'A comprehensive hardware-software IoT solution that detects and classifies road anomalies (potholes, cracks, bumps) in real time using vehicle-mounted sensors and centimeter-accurate GNSS positioning.',
      image: '/assets/roadsense.jpg',
      tags: ['ESP32', 'RTK-GNSS (ZED-F9P)', 'MPU6050 Accelerometer', 'Python', 'React Dashboard', 'Google Maps API'],
      highlights: [
        'Real-time vibration analysis via 3-axis accelerometer',
        'Centimeter-level precision with RTK-GNSS telemetry',
        'Interactive map dashboard with anomaly heatmaps & severity filters',
      ],
      githubUrl: 'https://github.com/rayyyyyyyyyyyyyyyyyyyyyyyyyyy/RoadSense',
      demoUrl: 'https://github.com/rayyyyyyyyyyyyyyyyyyyyyyyyyyy/RoadSense',
    },
    {
      id: 'portfolio-site',
      isFeatured: false,
      title: 'Interactive Cloud Portfolio',
      subtitle: 'Modern Digital Scrapbook Web App',
      description:
        'A personalized single-page portfolio engineered with React 19, Frutiger Aero sky aesthetics, floating dock navigation, and customized SVG micro-interactions.',
      image: null,
      tags: ['React 19', 'Modern CSS', 'Glassmorphism', 'Lucide Icons'],
      highlights: [
        'Custom Scrapbook & Y2K aesthetic design system',
        'Floating macOS-style glassmorphism dock navigation',
        'SEO-optimized, responsive, and performance-tuned',
      ],
      githubUrl: 'https://github.com/rayyyyyyyyyyyyyyyyyyyyyyyyyyy',
      demoUrl: '#hero',
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects ✦</h2>

        <div className="projects__list">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`card project-card ${project.isFeatured ? 'project-card--featured' : ''}`}
            >
              {/* Scrapbook Tape & Clip Decorations */}
              <WashiStrip
                color={idx % 2 === 0 ? 'yellow' : 'blue'}
                rotate={idx % 2 === 0 ? -1.5 : 2}
                width={120}
              />
              <Paperclip
                top="-10px"
                right={idx % 2 === 0 ? '24px' : 'auto'}
                left={idx % 2 !== 0 ? '24px' : 'auto'}
                rotate={15}
                color={idx % 2 === 0 ? 'gold' : 'silver'}
              />

              {project.image && (
                <div className="project-card__image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image"
                  />
                  <span className="project-card__badge">
                    <Radio size={14} className="badge-pulse" />
                    <span>IoT Telemetry Live</span>
                  </span>
                </div>
              )}

              <div className="project-card__content">
                <div className="project-card__header">
                  <div>
                    <span className="project-card__category">
                      {project.isFeatured ? '🌟 Core Hardware & Software Project' : '💻 Web Application'}
                    </span>
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__subtitle">{project.subtitle}</p>
                  </div>
                </div>

                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__highlights">
                  <h4 className="highlights-title">
                    <Sparkles size={16} color="#0284c7" />
                    <span>Key Features:</span>
                  </h4>
                  <ul>
                    {project.highlights.map((h, i) => (
                      <li key={i}>
                        <span className="bullet">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag tag--blue">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn project-btn--outline"
                  >
                    <GithubIcon size={18} />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    className="project-btn project-btn--primary"
                  >
                    <ExternalLink size={18} />
                    <span>Project Overview</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scattered Scrapbook Stickers */}
        <Sticker type="sparkle" top="80px" right="30px" delay="1s" />
        <Sticker type="star" bottom="40px" left="20px" delay="2s" />
      </div>
    </section>
  );
}

export default Projects;
