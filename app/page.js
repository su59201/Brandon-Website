export default function Home() {
  return (
    <main className="home">
      <header className="header">
        <div className="logo">BRANDON BAEK</div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">

          <div className="markets">
            <span>U.S.</span>
            <span className="dot">•</span>
            <span>KOREA</span>
            <span className="dot">•</span>
            <span>CHINA</span>
          </div>

          <div className="market-line"></div>

          <h1>Cross-border supply chains.</h1>

          <div className="hero-subtitle">
            Built for business growth.
          </div>

          <div className="expertise">

            <div className="expertise-item">
              <div className="expertise-icon">◎</div>
              <div>
                <strong>STRATEGIC</strong>
                <strong>SOURCING</strong>
              </div>
            </div>

            <div className="expertise-item">
              <div className="expertise-icon">♙</div>
              <div>
                <strong>SUPPLIER</strong>
                <strong>DEVELOPMENT</strong>
              </div>
            </div>

            <div className="expertise-item">
              <div className="expertise-icon">↗</div>
              <div>
                <strong>BUSINESS</strong>
                <strong>DEVELOPMENT</strong>
              </div>
            </div>

          </div>

          <p className="intro">
            15+ years of hands-on experience building businesses,
            developing suppliers, and solving complex cross-border
            challenges across the U.S. and Asia.
          </p>

          <div className="hero-actions">
            <a className="primary-link" href="#work">
              EXPLORE EXPERIENCE <span>→</span>
            </a>

            <a className="secondary-link" href="#about">
              ABOUT BRANDON
            </a>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait">
            <img src="/brandon-baek.jpg" alt="Brandon Baek" />
          </div>

          <div className="portrait-caption">
            <span>GLOBAL BUSINESS</span>
            <span className="caption-dot">•</span>
            <span>DALLAS, TEXAS</span>
          </div>
        </div>
      </section>
    </main>
  );
}
