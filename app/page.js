export default function Home() {
  return (
    <main className="site-shell">
      <header className="top-nav">
        <div className="brand">BRANDON BAEK</div>

        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">GLOBAL BUSINESS · U.S. & ASIA</p>

          <h1>
            Building businesses.
            <br />
            Solving complex problems.
          </h1>

          <p className="hero-role">
            Strategic Sourcing · Supply Chain · Business Development
          </p>

          <p className="hero-description">
            15+ years of hands-on experience building businesses,
            developing suppliers, and solving cross-border challenges
            across the U.S., Korea, and China.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="primary-button">
              View Experience
            </a>

            <a href="#about" className="text-link">
              About Brandon →
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-frame">
            <img
              src="/brandon-baek.jpg"
              alt="Brandon Baek"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
