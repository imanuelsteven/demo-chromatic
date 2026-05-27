import PropTypes from 'prop-types';

export function DesignTokenCard({ token, usage, value, type = 'accent' }) {
  return (
    <article className={`token-card token-card-${type}`}>
      <div className="token-name">{token}</div>
      <div className="token-value">{value}</div>
      <p className="token-usage">{usage}</p>
    </article>
  );
}

DesignTokenCard.propTypes = {
  token: PropTypes.string.isRequired,
  usage: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['accent', 'teal', 'muted', 'danger'])
};