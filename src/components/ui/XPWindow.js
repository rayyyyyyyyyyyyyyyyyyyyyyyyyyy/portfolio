import './XPWindow.css';

/* A Luna-style window frame. The caption buttons are decoration only. */
function XPWindow({ title, icon, children, className = '', bodyClassName = '', labelledBy }) {
  return (
    <div className={`xp-window ${className}`} role="group" aria-labelledby={labelledBy}>
      <div className="xp-window__titlebar">
        {icon && <span className="xp-window__icon" aria-hidden="true">{icon}</span>}
        <span className="xp-window__title" id={labelledBy}>{title}</span>
        <span className="xp-window__caption" aria-hidden="true">
          <span className="xp-cap xp-cap--min" />
          <span className="xp-cap xp-cap--max" />
          <span className="xp-cap xp-cap--close" />
        </span>
      </div>
      <div className={`xp-window__body ${bodyClassName}`}>{children}</div>
    </div>
  );
}

export default XPWindow;
