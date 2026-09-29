import './Skills.css';
import { Terminal, Layout, Server, Cpu, Wrench } from 'lucide-react';
import { WashiStrip, Paperclip, Sticker } from './ScrapbookDecorations';

/*
  Skills Section — Y2K Bling + Scrapbook 🩵✨
*/

function Skills() {
  const skillGroups = [
    {
      title: 'Programming Languages',
      icon: <Terminal size={20} color="var(--color-primary)" />,
      color: 'green',
      tape: 'green',
      skills: ['Python', 'JavaScript', 'C/C++', 'HTML5 / CSS3', 'SQL'],
    },
    {
      title: 'Frontend Web',
      icon: <Layout size={20} color="var(--color-accent-blue)" />,
      color: 'blue',
      tape: 'blue',
      skills: ['React.js', 'Modern CSS', 'Bootstrap', 'REST APIs'],
    },
    {
      title: 'Backend & Data',
      icon: <Server size={20} color="var(--color-accent-lavender)" />,
      color: 'violet',
      tape: 'lavender',
      skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'IoT & Hardware',
      icon: <Cpu size={20} color="var(--color-accent-yellow)" />,
      color: 'yellow',
      tape: 'yellow',
      skills: ['Arduino', 'ESP32', 'ZED-F9P RTK-GNSS', 'MPU6050 Accelerometer', 'IoT Sensors'],
    },
    {
      title: 'Tools & Environments',
      icon: <Wrench size={20} color="var(--color-accent-pink)" />,
      color: 'pink',
      tape: 'pink',
      skills: ['Git', 'GitHub', 'VS Code', 'Linux Terminal', 'Google Maps API'],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="accent">Skills</span>
        </h2>
        <p className="skills__subtitle cross-stitch">✦ tools of the trade ✦</p>

        <div className="skills__grid">
          {skillGroups.map((group, idx) => (
            <div key={group.title} className="card skills__group">
              <WashiStrip color={group.tape} rotate={idx % 2 === 0 ? -2 : 2} width={90} />
              {idx === 0 && <Paperclip top="-10px" right="16px" rotate={20} color="gold" />}
              <h3 className="skills__group-title">
                <span className="skills__icon">{group.icon}</span>
                <span>{group.title}</span>
              </h3>
              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span key={skill} className={`tag tag--${group.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Sticker type="star" bottom="-10px" right="60px" delay="1s" />
      </div>
    </section>
  );
}

export default Skills;
