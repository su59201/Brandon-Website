export default function About() {
  const markets = [
    ["01", "U.S.", ["Business Development", "Customers", "Operations"]],
    ["02", "KOREA", ["Supplier Relationships", "Market Understanding", "Business Culture"]],
    ["03", "CHINA", ["Sourcing", "Manufacturing", "Supplier Development"]],
  ];

  const capabilities = [
    ["◎", "STRATEGIC SOURCING", "Supplier identification, qualification, negotiation, cost analysis, and global sourcing strategy."],
    ["◇", "SUPPLIER DEVELOPMENT", "Building long-term supplier relationships, solving operational problems, and creating reliable supply networks."],
    ["↗", "BUSINESS DEVELOPMENT", "Finding opportunities, building relationships from zero, and turning ideas into practical business."],
  ];

  const principles = [
    ["01", "HANDS-ON", "I like understanding problems from the ground level, not only from reports."],
    ["02", "PERSISTENT", "Some of my best business results came from opportunities I pursued for years, not weeks."],
    ["03", "CROSS-CULTURAL", "I’m comfortable working between different languages, expectations, and ways of doing business."],
    ["04", "ALWAYS LEARNING", "I’m most energized when I’m learning a new industry, solving an unfamiliar problem, or building something better than what existed before."],
  ];

  return (
    <main className="about-redesign">
      <div className="about-shell">
        <header className="about-site-header">
          <a className="about-site-brand" href="/" aria-label="Brandon Baek home">
            <strong>BRANDON BAEK</strong>
            <span>GLOBAL BUSINESS · SUPPLY CHAIN</span>
          </a>
          <nav className="about-site-nav" aria-label="Primary navigation">
            <a href="/">Home</a>
            <a className="is-active" href="/about" aria-current="page">About</a>
            <a href="/work">Work</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <section className="about-executive-hero">
          <div className="about-hero-message">
            <p className="about-kicker">ABOUT <span>/</span> 01</p>
            <h1>I build across borders,<br /><em>industries, and cultures.</em></h1>
            <p className="about-hero-intro">My career has been shaped by one consistent theme: building something from the ground up and solving problems where business, supply chain, and people come together.</p>
          </div>
          <div className="about-stat-composition" aria-label="Career highlights">
            <div className="about-stat about-stat-primary"><strong>15+</strong><span>YEARS OF<br />EXPERIENCE</span></div>
            <div className="about-stat"><strong>3</strong><span>CORE<br />MARKETS</span></div>
            <div className="about-stat"><strong>3</strong><span>LANGUAGES</span></div>
          </div>
        </section>

        <section className="about-narrative">
          <div className="about-narrative-rule"><span></span><p>BUILDER · OPERATOR · CONNECTOR</p></div>
          <div className="about-narrative-copy">
            <p>Over the past 15+ years, I’ve worked across the U.S., Korea, and China in global sourcing, supplier development, business development, and entrepreneurship.</p>
            <p>I’ve built businesses, developed supplier networks, negotiated across cultures, managed complex supply chains, and worked through the kind of problems that rarely have a simple answer.</p>
            <p>Being fluent in English, Korean, and Mandarin has helped me do more than communicate. It has allowed me to understand how people on different sides of a business think, make decisions, and build trust.</p>
          </div>
        </section>

        <section className="about-major-section about-global-section">
          <div className="about-section-heading">
            <p className="about-kicker">02 <span>/</span> GLOBAL PERSPECTIVE</p>
            <h2>Three markets.<br /><em>One perspective.</em></h2>
          </div>
          <div className="about-market-panels">
            {markets.map(([number, name, details]) => (
              <article key={name}>
                <span className="about-panel-number">{number}</span>
                <h3>{name}</h3>
                <ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </div>
          <blockquote>I don’t just work across these markets.<br /><strong>I understand how to connect them.</strong></blockquote>
        </section>

        <section className="about-major-section">
          <div className="about-section-heading about-section-heading-row">
            <p className="about-kicker">03 <span>/</span> CORE CAPABILITIES</p>
            <h2>What I bring.</h2>
          </div>
          <div className="about-capability-panels">
            {capabilities.map(([icon, title, text]) => (
              <article key={title}>
                <span className="about-capability-icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-major-section about-experience-layout">
          <div className="about-experience-title">
            <p className="about-kicker">04 <span>/</span> BUILT THROUGH EXPERIENCE</p>
            <h2>I learned business<br /><em>by building one.</em></h2>
          </div>
          <div className="about-experience-story">
            <p>My experience as an entrepreneur gave me a different perspective on business.</p>
            <p>I wasn’t responsible for only one function. I had to think about customers, suppliers, cash flow, logistics, operations, negotiations, risk, and growth at the same time.</p>
            <p>Building and operating a business taught me to take ownership, make decisions with incomplete information, and stay close to the actual problem.</p>
            <p className="about-experience-highlight">Sustainable growth requires strong systems, disciplined execution, and great teams.</p>
          </div>
        </section>

        <section className="about-major-section">
          <div className="about-section-heading about-section-heading-row">
            <p className="about-kicker">05 <span>/</span> PRINCIPLES</p>
            <h2>How I work.</h2>
          </div>
          <div className="about-principle-grid">
            {principles.map(([number, title, text]) => (
              <article key={title}>
                <span className="about-panel-number">{number}</span>
                <h3>{title}</h3>
                <p>“{text}”</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-next-chapter">
          <p className="about-kicker">THE NEXT CHAPTER</p>
          <h2>I’m interested in building the next chapter<br />with companies solving difficult, meaningful<br />problems on a global scale.</h2>
          <div className="about-cta-grid">
            <a href="/work"><span>01 / EXPERIENCE</span><strong>EXPLORE MY EXPERIENCE</strong><i>→</i></a>
            <a href="/contact"><span>02 / CONNECT</span><strong>CONTACT ME</strong><i>→</i></a>
          </div>
        </section>
      </div>
    </main>
  );
}
