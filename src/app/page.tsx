export default function Home() {
  return (
    <div className="simple-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="site-shell hero-content">
          <h1>Veer Game - Casual Entertainment App</h1>
          <p className="hero-subtitle">
            Your Complete Guide to India&#39;s Popular Entertainment &amp; Puzzle App
          </p>
        </div>
      </section>

      {/* What is Veer Game */}
      <section className="info-section">
        <div className="site-shell">
          <h2>What is Veer Game?</h2>
          <p>
            Veer Game is a popular casual entertainment application available for
            Android devices. The app offers a collection of interactive puzzle
            and strategy mini-games designed for short-session entertainment.
            Users can enjoy a variety of brain-teasing challenges, pattern
            recognition activities, and arcade-style experiences — all from a
            single, lightweight mobile app.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-puzzle-piece"></i>
              <h3>Puzzle &amp; Strategy</h3>
              <p>Brain teasers, pattern games &amp; logic challenges</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Lightweight App</h3>
              <p>Only 12 MB — works on any Android phone</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>Community Driven</h3>
              <p>Active user community with tips &amp; discussions</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="content-block">
            <h2>How the App Works</h2>
            <p>
              Veer Game provides a simple interface where users can browse
              through different categories of mini-games. After creating a free
              account, you get access to the full library of interactive
              entertainment content. The app features daily challenges,
              leaderboards, and community events to keep users engaged.
            </p>
            <ul className="info-list">
              <li>Create a free account in under 30 seconds</li>
              <li>Browse the game library by category</li>
              <li>Track your progress with in-app stats</li>
              <li>Join community events and daily challenges</li>
              <li>Lightweight — runs smoothly on budget phones</li>
            </ul>
          </div>

          {/* App Features Review */}
          <div className="content-block">
            <h2>App Features Overview</h2>
            <p>
              Here is a detailed look at what the Veer Game app offers to its
              users based on our hands-on review:
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-th-large"></i>
                <h3>Multiple Game Modes</h3>
                <p>
                  The app includes several categories of entertainment including
                  arcade games, number puzzles, and interactive challenges that
                  test your reflexes and strategy.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-download"></i>
                <h3>Easy Download</h3>
                <p>
                  The APK file is only 12.4 MB and works on Android 5.0+. No
                  heavy hardware required — it runs on any smartphone.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-shield-alt"></i>
                <h3>User-Friendly Interface</h3>
                <p>
                  Clean, intuitive design with simple navigation. New users can
                  start exploring within seconds of opening the app.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-comments"></i>
                <h3>Community Support</h3>
                <p>
                  Community discussions can help users compare features and learn
                  how the entertainment modes work.
                </p>
              </div>
            </div>
          </div>

          {/* Installation information */}
          <div className="content-block">
            <h2>App Installation Information</h2>
            <p>
              Only install software from a trusted, verified distribution
              channel. This guide does not host APK files, process accounts, or
              direct visitors to registration or payment services.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="content-block">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-item">
              <h3>Is Veer Game free to use?</h3>
              <p>
                Yes, the app is free to download and create an account. The
                entertainment content is accessible to all users.
              </p>
            </div>

            <div className="faq-item">
              <h3>What devices are supported?</h3>
              <p>
                Veer Game works on any Android device running Android 5.0 or
                higher. iPhone users can access the platform through the mobile
                web browser.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do I contact support?</h3>
              <p>
                This guide is informational and does not provide account,
                payment, registration, or customer-support services.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
