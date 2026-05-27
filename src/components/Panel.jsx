import PropTypes from 'prop-types';

export function Panel({ title, subtitle, footer, tone = 'default', children }) {
  return (
    <section className={`ui-panel ui-panel-${tone}`}>
      <header className="ui-panel-header">
        <h3 className="ui-panel-title">{title}</h3>
        {subtitle ? <p className="ui-panel-subtitle">{subtitle}</p> : null}
      </header>

      <div className="ui-panel-body">{children}</div>

      {footer ? <footer className="ui-panel-footer">{footer}</footer> : null}
    </section>
  );
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  footer: PropTypes.string,
  tone: PropTypes.oneOf(['default', 'accent', 'teal', 'danger']),
  children: PropTypes.node.isRequired
};