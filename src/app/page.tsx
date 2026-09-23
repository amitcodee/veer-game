const REGISTER_URL = "https://www.veergame14.com/#/register?invitationCode=69548120159";
const INVITE_CODE = "69548120159";

export default function Home() {
  return (
    <div className="simple-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="site-shell hero-content">
          <h1>Veer Game</h1>
          <p className="hero-subtitle">Your Entertainment Gaming Platform</p>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="register-btn"
          >
            Register Now
          </a>
          <p className="invite-code">
            Invite Code: <strong>{INVITE_CODE}</strong>
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="site-shell">
          <h2>About Veer Game</h2>
          <p>
            Veer Game is an entertainment gaming platform offering various games
            including color prediction, aviator, and more.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-gamepad"></i>
              <h3>Multiple Games</h3>
              <p>Wingo, Aviator, Slots & more</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Mobile App</h3>
              <p>Play anytime, anywhere</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-gift"></i>
              <h3>Welcome Bonus</h3>
              <p>Get rewards on signup</p>
            </div>
          </div>

          <div className="cta-box">
            <h3>Ready to Start?</h3>
            <p>Join thousands of players on Veer Game today</p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Create Account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
