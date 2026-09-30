import './SparkleOverlay.css';

/*
  Y2K glints: a few four-point sparkles twinkling behind the content.
  Sits under the page (z-index below main) so it never covers text.
*/
const GLINTS = [
  { top: '9%', left: '6%', size: 22, delay: '0s', dur: '3.6s' },
  { top: '18%', left: '88%', size: 16, delay: '1.2s', dur: '4.2s' },
  { top: '34%', left: '96%', size: 26, delay: '2.1s', dur: '5s' },
  { top: '47%', left: '2%', size: 18, delay: '0.7s', dur: '4.4s' },
  { top: '63%', left: '92%', size: 14, delay: '2.8s', dur: '3.8s' },
  { top: '76%', left: '4%', size: 24, delay: '1.6s', dur: '4.8s' },
  { top: '88%', left: '84%', size: 18, delay: '0.4s', dur: '4s' },
];

function SparkleOverlay() {
  return (
    <div className="glints" aria-hidden="true">
      {GLINTS.map((g, i) => (
        <svg
          key={i}
          className="glint"
          viewBox="0 0 100 100"
          style={{ top: g.top, left: g.left, width: g.size, height: g.size, animationDelay: g.delay, animationDuration: g.dur }}
        >
          <path d="M50 0 C53 38 62 47 100 50 C62 53 53 62 50 100 C47 62 38 53 0 50 C38 47 47 38 50 0Z" />
        </svg>
      ))}
    </div>
  );
}

export default SparkleOverlay;
