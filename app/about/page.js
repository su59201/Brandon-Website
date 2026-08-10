export default function About() {
  const markets = [
    ["U.S.", "Business development · Customers · Operations"],
    ["KOREA", "Supplier relationships · Market understanding · Business culture"],
    ["CHINA", "Sourcing · Manufacturing · Supplier development"],
  ];

  const capabilities = [
    ["01", "STRATEGIC SOURCING", "Supplier identification, qualification, negotiation, cost analysis, and global sourcing strategy."],
    ["02", "SUPPLIER DEVELOPMENT", "Building long-term supplier relationships, solving operational problems, and creating reliable supply networks."],
    ["03", "BUSINESS DEVELOPMENT", "Finding opportunities, building relationships from zero, and turning ideas into practical business."],
  ];

  const principles = [
    ["01", "HANDS-ON", "I like understanding problems from the ground level, not only from reports."],
    ["02", "PERSISTENT", "Some of my best business results came from opportunities I pursued for years, not weeks."],
    ["03", "CROSS-CULTURAL", "I’m comfortable working between different languages, expectations, and ways of doing business."],
    ["04", "ALWAYS LEARNING", "I’m most energized when I’m learning a new industry, solving an unfamiliar problem, or building something better than what existed before."],
  ];

  return (
    <main className="about-page about-v2">
      <header className="about-header">
        <a className="about-brand" href="/" aria-label="Brandon Baek home">
          <span className="about-logo">BRANDON BAEK</span>
          <span className="about-brand-subtitle">GLOBAL BUSINESS · SUPPLY CHAIN</span>
        </a>
        <nav className="about-nav about-v2-nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a className="about-nav-active" href="/about" aria-current="page">About</a>
          <a href="/work">Work</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="about-v2-hero">
        <div className="about-v2-hero-copy">
          <p className="about-v2-label">ABOUT BRANDON</p>
          <h1>I build across borders,<br /><span>industries, and cultures.</span></h1>
          <p className="about-v2-intro">My career has been shaped by one consistent theme: building something from the ground up and solving problems where business, supply chain, and people come together.</p>
        </div>
        <div className="about-v2-hero-meta" aria-label="Professional summary">
          <div><strong>15+</strong><span>YEARS OF<br />EXPERIENCE</span></div>
          <p>U.S. <i>•</i> KOREA <i>•</i> CHINA</p>
        </div>
      </section>

      <section className="about-v2-story about-v2-section">
        <div className="about-v2-section-label"><span>01</span><p>THE STORY</p></div>
        <div className="about-v2-prose">
          <p>Over the past 15+ years, I’ve worked across the U.S., Korea, and China in global sourcing, supplier development, business development, and entrepreneurship.</p>
          <p>I’ve built businesses, developed supplier networks, negotiated across cultures, managed complex supply chains, and worked through the kind of problems that rarely have a simple answer.</p>
          <p>Being fluent in English, Korean, and Mandarin has helped me do more than communicate. It has allowed me to understand how people on different sides of a business think, make decisions, and build trust.</p>
        </div>
      </section>

      <section className="about-v2-section about-v2-markets-section">
        <div className="about-v2-section-head">
          <div className="about-v2-section-label"><span>02</span><p>GLOBAL PERSPECTIVE</p></div>
          <h2>Three markets.<br /><span>One perspective.</span></h2>
        </div>
        <div className="about-v2-markets">
          {markets.map(([market, detail], index) => (
            <article key={market}>
              <span>0{index + 1}</span>
              <h3>{market}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
        <blockquote>I don’t just work across these markets. <span>I understand how to connect them.</span></blockquote>
      </section>

      <section className="about-v2-section">
        <div className="about-v2-section-head">
          <div className="about-v2-section-label"><span>03</span><p>CORE CAPABILITIES</p></div>
          <h2>What I bring.</h2>
        </div>
        <div className="about-v2-capabilities">
          {capabilities.map(([number, title, detail]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-v2-experience about-v2-section">
        <div className="about-v2-section-label"><span>04</span><p>BUILT THROUGH EXPERIENCE</p></div>
        <div className="about-v2-experience-copy">
          <h2>I learned business<br /><span>by building one.</span></h2>
          <div className="about-v2-prose">
            <p>My experience as an entrepreneur gave me a different perspective on business.</p>
            <p>I wasn’t responsible for only one function. I had to think about customers, suppliers, cash flow, logistics, operations, negotiations, risk, and growth at the same time.</p>
            <p>Building and operating a business taught me to take ownership, make decisions with incomplete information, and stay close to the actual problem.</p>
            <p>It also taught me something equally important: sustainable growth requires strong systems, disciplined execution, and great teams.</p>
          </div>
        </div>
      </section>

      <section className="about-v2-section">
        <div className="about-v2-section-head">
          <div className="about-v2-section-label"><span>05</span><p>PRINCIPLES</p></div>
          <h2>How I work.</h2>
        </div>
        <div className="about-v2-principles">
          {principles.map(([number, title, quote]) => (
            <article key={title}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>“{quote}”</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-v2-closing">
        <p className="about-v2-label">THE NEXT CHAPTER</p>
        <h2>I’m interested in building the next chapter with companies solving difficult, meaningful problems on a global scale.</h2>
        <div className="about-v2-actions">
          <a className="about-v2-primary" href="/work">EXPLORE MY EXPERIENCE <span>→</span></a>
          <a href="/contact">CONTACT ME <span>→</span></a>
        </div>
      </section>
    </main>
  );
}
