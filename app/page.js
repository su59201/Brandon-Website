export default function Home() {
  return (
    <main className="home">
      <header className="header">
        <a className="logo" href="#">
          BRANDON BAEK
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            U.S. · KOREA · CHINA
          </p>

          <h1>
            <span>Cross-border supply chains.</span>
            <span>Built for business growth.</span>
          </h1>

          <p className="expertise">
            Strategic Sourcing
            <span>·</span>
            Supplier Development
            <span>·</span>
            Business Development
          </p>

          <p className="intro">
            15+ years of hands-on experience building businesses,
            developing suppliers, and solving complex cross-border
            challenges across the U.S. and Asia.
          </p>

          <div className="actions">
            <a className="primary-link" href="#work">
              Explore Experience
              <span>→</span>
            </a>

            <a className="secondary-link" href="#about">
              About Brandon
            </a>
          </div>
        </div>

        <div className="portrait-wrap">
          <img
            className="portrait"
            src="/brandon-baek.jpg"
            alt="Brandon Baek"
          />

          <div className="portrait-caption">
            <span>Global Business</span>
            <span>Dallas, Texas</span>
          </div>
        </div>
      </section>
    </main>
  );
}
