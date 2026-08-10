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
          <p className="label">GLOBAL BUSINESS · U.S. & ASIA</p>

          <h1>
            Building businesses.
            <br />
            Solving problems.
          </h1>

          <p className="role">
            Strategic Sourcing · Supply Chain · Business Development
          </p>

          <p className="intro">
            15+ years of cross-border experience across the U.S.,
            Korea, and China — building businesses, developing suppliers,
            and turning complex problems into practical solutions.
          </p>

          <a className="cta" href="#work">
            Explore My Work →
          </a>
        </div>

        <div className="portrait">
          <img src="/brandon-baek.jpg" alt="Brandon Baek" />
        </div>
      </section>
    </main>
  );
}
