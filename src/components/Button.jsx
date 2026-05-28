import PropTypes from 'prop-types';

export function Button({ label, variant = 'accent', size = 'md', type = 'button', ...rest }) {
  return (
    <button type={type} className={`ui-button ui-button-${variant} ui-button-${size}`} {...rest}>
      title {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['accent', 'teal', 'danger', 'ghost', 'muted']),
  size: PropTypes.oneOf(['sm', 'md']),
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};