import PropTypes from "prop-types";
import "../styles/LoginForm.css";

export function LoginForm({
  title = 'Welcome back',
  subtitle = 'Sign in to continue to your workspace.',
  emailLabel = 'Email address',
  passwordLabel = 'Password',
  rememberLabel = 'Keep me signed in',
  submitLabel = 'Sign in',
  errorMessage,
  rememberMeDefaultChecked = false,
  onSubmit
}) {
  function handleSubmit(event) {
    event.preventDefault();

    if (onSubmit) {
      onSubmit(event);
    }
  }

  return (
    <section className="login-shell" aria-label="Login form">
      <article className="login-card">
        <div className="login-badge">Secure Access</div>

        <header className="login-header">
          <h2 className="login-title">{title}</h2>
          <p className="login-subtitle">{subtitle}</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-field">
            <span>{emailLabel}</span>
            <input
              className="login-input"
              name="email"
              type="email"
              autoComplete="username"
              placeholder="nama@perusahaan.com"
              required
            />
          </label>

          <label className="login-field">
            <span>{passwordLabel}</span>
            <input
              className="login-input"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Masukkan kata sandi"
              required
            />
          </label>

          <label className="login-remember">
            <input
              type="checkbox"
              name="rememberMe"
              defaultChecked={rememberMeDefaultChecked}
            />
            <span>{rememberLabel}</span>
          </label>

          {errorMessage ? (
            <p className="login-error" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <button className="login-button" type="submit">
            {submitLabel}
          </button>
        </form>
      </article>
    </section>
  );
}

LoginForm.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  emailLabel: PropTypes.string,
  passwordLabel: PropTypes.string,
  rememberLabel: PropTypes.string,
  submitLabel: PropTypes.string,
  errorMessage: PropTypes.string,
  rememberMeDefaultChecked: PropTypes.bool,
  onSubmit: PropTypes.func
};