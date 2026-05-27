import PropTypes from 'prop-types';

export function CoverSlide({ dayLabel, titleMain, titleAccent, subtitle, duration, sessions, level, agenda }) {
  return (
    <section className="cover-slide" aria-label="Workshop cover slide">
      <div className="cover-left">
        <span className="cover-tag">{dayLabel}</span>
        <h1 className="cover-title">
          {titleMain}
          <span>{titleAccent}</span>
        </h1>
        <p className="cover-subtitle">{subtitle}</p>

        <div className="cover-meta">
          <div className="cover-meta-item">
            <span className="cover-meta-label">Duration</span>
            <span className="cover-meta-value">{duration}</span>
          </div>
          <div className="cover-meta-item">
            <span className="cover-meta-label">Sessions</span>
            <span className="cover-meta-value">{sessions}</span>
          </div>
          <div className="cover-meta-item">
            <span className="cover-meta-label">Level</span>
            <span className="cover-meta-value">{level}</span>
          </div>
        </div>
      </div>

      <aside className="cover-right" aria-label="Agenda">
        <h2 className="cover-agenda-title">Today&apos;s Agenda</h2>
        <ul className="cover-agenda-list">
          {agenda.map((item, index) => (
            <li className="cover-agenda-item" key={`${item.title}-${index}`}>
              <span className="cover-agenda-num">{index + 1}</span>
              <div className="cover-agenda-text">
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}

CoverSlide.propTypes = {
  dayLabel: PropTypes.string.isRequired,
  titleMain: PropTypes.string.isRequired,
  titleAccent: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  sessions: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  agenda: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired
    })
  ).isRequired
};