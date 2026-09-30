import { Terminal, Layout, Server, Wrench, Cpu } from 'lucide-react';
import StitchTitle from './ui/StitchTitle';
import { Sticker } from './ui/Decor';
import './Skills.css';

/* Each cell of the sheet holds one or more titled groups. */
const CELLS = [
  [{ title: 'Languages', Icon: Terminal, skills: ['JavaScript', 'Python', 'Dart', 'SQL', 'Java', 'C', 'C++'] }],
  [{ title: 'Frontend & mobile', Icon: Layout, core: true, skills: ['React.js', 'HTML / CSS', 'Bootstrap', 'Flutter'] }],
  [{
    title: 'Backend & data',
    Icon: Server,
    core: true,
    skills: ['Node.js', 'Express', 'FastAPI', 'PHP', 'REST APIs', 'MongoDB', 'MySQL', 'Firebase Auth'],
  }],
  [
    { title: 'Tools & deployment', Icon: Wrench, skills: ['Docker', 'Vercel', 'Git', 'GitHub', 'Linux', 'VS Code'] },
    { title: 'IoT & Hardware', Icon: Cpu, skills: ['ESP32', 'MicroPython', 'Arduino'] },
  ],
];

function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <StitchTitle thread="blue" id="skills-title">Skills</StitchTitle>

        <div className="sheet">
          {CELLS.map((groups) => (
            <div key={groups[0].title} className={`sheet__cell ${groups[0].core ? 'sheet__cell--core' : ''}`}>
              {groups.map(({ title, Icon, skills, core }) => (
                <div key={title} className="sheet__group">
                  <h3 className="sheet__title">
                    <span className="sheet__icon" aria-hidden="true"><Icon size={18} /></span>
                    {title}
                  </h3>
                  <ul className="sheet__stickers">
                    {skills.map((s) => <li key={s} className={core ? 'gem-chip' : 'chip'}>{s}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          <Sticker shape="sparkle" color="pink" size={48} style={{ top: -22, right: 24 }} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
