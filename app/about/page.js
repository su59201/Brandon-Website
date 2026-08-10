export default function About() {
  return (
    <main className="about-page">
      <header className="about-header">
        <a className="about-brand" href="/" aria-label="Brandon Baek home">
          <span className="about-logo">BRANDON BAEK</span>
          <span className="about-brand-subtitle">GLOBAL BUSINESS · SUPPLY CHAIN</span>
        </a>
        <nav className="about-nav" aria-label="Primary navigation">
          <a className="about-home-link" href="/"><span aria-hidden="true">←</span> Home</a>
          <a className="about-nav-active" href="/about" aria-current="page">About</a>
          <a href="/work">Work</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="about-eyebrow">ABOUT BRANDON</p>
          <h1>Building across borders.<span>Turning complexity into opportunity.</span></h1>
          <p className="about-lead">
            Entrepreneur and global sourcing leader with 15+ years of hands-on
            experience connecting businesses, suppliers, and opportunities
            across the U.S., Korea, and China.
          </p>
          <a className="about-return" href="/"><span aria-hidden="true">←</span> RETURN TO HOME</a>
        </div>

        <aside className="about-markets" aria-label="Cross-border markets">
          <p>MARKETS</p>
          <div className="about-market-list">
            <span>U.S.</span><i aria-hidden="true"></i>
            <span>KOREA</span><i aria-hidden="true"></i>
            <span>CHINA</span>
          </div>
          <div className="about-years">
            <strong>15+</strong>
            <span>YEARS BUILDING<br />ACROSS BORDERS</span>
          </div>
        </aside>
      </section>

      <section className="about-positioning" aria-labelledby="about-positioning-title">
        <div className="about-section-intro">
          <p>WHAT I BRING</p>
          <h2 id="about-positioning-title">Business perspective.<br />Operator discipline.</h2>
        </div>
        <div className="about-pillars">
          <article><span>01</span><h3>ENTREPRENEUR</h3><p>A builder&apos;s mindset shaped by creating businesses, making decisions, and turning ideas into practical growth.</p></article>
          <article><span>02</span><h3>GLOBAL SOURCING</h3><p>Cross-border sourcing experience that connects commercial goals with cost, quality, delivery, and long-term value.</p></article>
          <article><span>03</span><h3>SUPPLIER DEVELOPMENT</h3><p>Hands-on partnership with suppliers to strengthen capabilities, solve problems, and build dependable performance.</p></article>
          <article><span>04</span><h3>BUSINESS BUILDING</h3><p>The ability to see beyond transactions and build the relationships, systems, and momentum that help a business scale.</p></article>
        </div>
      </section>
    </main>
  );
}
