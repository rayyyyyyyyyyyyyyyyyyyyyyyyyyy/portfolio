import './Navbar.css';
import { Home, User, Code2, FolderGit2, Briefcase, GraduationCap, Mail } from 'lucide-react';

/*
  Navbar — Floating Dock Navigation
  ใช้ Vector Icons จาก lucide-react แทน Emoji เพื่อความมืออาชีพ
*/

function Navbar() {
  const navItems = [
    { label: 'Home', icon: <Home size={18} />, href: '#hero' },
    { label: 'About', icon: <User size={16} />, href: '#about' },
    { label: 'Skills', icon: <Code2 size={16} />, href: '#skills' },
    { label: 'Projects', icon: <FolderGit2 size={16} />, href: '#projects' },
    { label: 'Experience', icon: <Briefcase size={16} />, href: '#experience' },
    { label: 'Education', icon: <GraduationCap size={16} />, href: '#education' },
    { label: 'Contact', icon: <Mail size={16} />, href: '#contact' },
  ];

  return (
    <nav className="dock-nav" id="main-nav">
      <div className="dock-nav__container">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="dock-nav__link"
            title={item.label}
          >
            <span className="dock-nav__icon">{item.icon}</span>
            <span className="dock-nav__label">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
