export default function Home() {
  return (
    <main className="home">

      <header className="header">
        <div className="brand">
          <div className="logo">BRANDON BAEK</div>
          <div className="brand-subtitle">
            GLOBAL BUSINESS · SUPPLY CHAIN
          </div>
        </div>

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
            <span>•</span>
            <span>KOREA</span>
            <span>•</span>
            <span>CHINA</span>
          </div>

          <div className="market-line">
            <span></span>
          </div>

          <h1>Cross-border supply chains.</h1>

          <h2>Built for business growth.</h2>

          <div className="expertise">

            <div className="expertise-item">
              <div className="expertise-icon">◎</div>
              <div>
                STRATEGIC
                <br />
                SOURCING
              </div>
            </div>

            <div className="expertise-item">
              <div className="expertise-icon">♙</div>
              <div>
                SUPPLIER
                <br />
                DEVELOPMENT
              </div>
            </div>

            <div className="expertise-item">
              <div className="expertise-icon">↗</div>
              <div>
                BUSINESS
                <br />
                DEVELOPMENT
              </div>
            </div>

          </div>

          <p className="intro">
            15+ years of hands-on experience building businesses,
            developing suppliers, and solving complex cross-border
            challenges across the U.S. and Asia.
          </p>

          <div className="actions">
            <a className="cta" href="#work">
              EXPLORE EXPERIENCE <span>→</span>
            </a>

            <a className="secondary-link" href="#about">
              ABOUT BRANDON
            </a>
          </div>

        </div>

        <div className="portrait">
          <img src="/brandon-baek.jpg" alt="Brandon Baek" />

          <div className="portrait-meta">
            <span>GLOBAL BUSINESS</span>
            <span className="meta-dot">•</span>
            <span>DALLAS, TEXAS</span>
          </div>
        </div>

      </section>

    </main>
  );
}
