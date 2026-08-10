export default function About() {
  const markets = [
    ["01", "U.S.", "Business Development", "Customers", "Operations"],
    ["02", "KOREA", "Supplier Relationships", "Market Understanding", "Business Culture"],
    ["03", "CHINA", "Sourcing", "Manufacturing", "Supplier Development"],
  ];

  const capabilities = [
    ["◎", "STRATEGIC", "SOURCING", "Supplier identification, qualification, negotiation, cost analysis, and global sourcing strategy."],
    ["◇", "SUPPLIER", "DEVELOPMENT", "Building long-term supplier relationships, solving operational problems, and creating reliable supply networks."],
    ["↗", "BUSINESS", "DEVELOPMENT", "Finding opportunities, building relationships from zero, and turning ideas into practical business."],
  ];

  const principles = [
    ["01", "HANDS-ON", "I like understanding problems from the ground level, not only from reports."],
    ["02", "PERSISTENT", "Some of my best business results came from opportunities I pursued for years, not weeks."],
    ["03", "CROSS-CULTURAL", "I’m comfortable working between different languages, expectations, and ways of doing business."],
    ["04", "ALWAYS LEARNING", "I’m most energized when I’m learning a new industry, solving an unfamiliar problem, or building something better than what existed before."],
  ];

  return (
    <main className="about-final">
      <div className="about-final-container">
        <header className="about-final-header">
          <a className="about-final-brand" href="/" aria-label="Brandon Baek home">
            <strong>BRANDON BAEK</strong>
            <span>GLOBAL BUSINESS · SUPPLY CHAIN</span>
          </a>
          <nav className="about-final-nav" aria-label="Primary navigation">
            <a href="/">Home</a>
            <a className="active" href="/about" aria-current="page">About</a>
            <a href="/work">Work</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <section className="about-final-section about-final-hero">
          <div className="about-final-hero-copy">
            <p className="about-final-label">ABOUT <span>/</span> 01</p>
            <h1>I build across borders,<br />industries, and cultures.</h1>
            <p className="about-final-intro">My career has been shaped by one consistent theme: building something from the ground up and solving problems where business, supply chain, and people come together.</p>
            <div className="about-final-body-copy">
              <p>Over the past 15+ years, I’ve worked across the U.S., Korea, and China in global sourcing, supplier development, business development, and entrepreneurship.</p>
              <p>I’ve built businesses, developed supplier networks, negotiated across cultures, managed complex supply chains, and worked through the kind of problems that rarely have a simple answer.</p>
              <p>Being fluent in English, Korean, and Mandarin has helped me do more than communicate. It has allowed me to understand how people on different sides of a business think, make decisions, and build trust.</p>
            </div>
            <p className="about-final-role-line">BUILDER · OPERATOR · CONNECTOR</p>
          </div>
          <div className="about-final-stats" aria-label="Career statistics">
            <div><strong>15+</strong><span>YEARS OF EXPERIENCE</span></div>
            <div><strong>3</strong><span>CORE MARKETS</span></div>
            <div><strong>3</strong><span>LANGUAGES</span></div>
          </div>
        </section>

        <section className="about-final-section about-final-global">
          <div className="about-final-heading">
            <p className="about-final-label">02 <span>/</span> GLOBAL PERSPECTIVE</p>
            <h2>THREE MARKETS.<br /><em>ONE PERSPECTIVE.</em></h2>
          </div>
          <div className="about-final-markets">
            {markets.map(([number, country, line1, line2, line3]) => (
              <article key={country}>
                <span>{number}</span>
                <h3>{country}</h3>
                <div className="about-final-market-lines"><p>{line1}</p><p>{line2}</p><p>{line3}</p></div>
              </article>
            ))}
          </div>
          <blockquote>I don’t just work across these markets.<br /><strong>I understand how to connect them.</strong></blockquote>
        </section>

        <section className="about-final-section">
          <div className="about-final-heading">
            <p className="about-final-label">03 <span>/</span> CORE CAPABILITIES</p>
            <h2>WHAT I BRING.</h2>
          </div>
          <div className="about-final-capabilities">
            {capabilities.map(([icon, title1, title2, text]) => (
              <article key={title1}>
                <span className="about-final-icon" aria-hidden="true">{icon}</span>
                <h3>{title1}<br />{title2}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-final-section about-final-experience">
          <div>
            <p className="about-final-label">04 <span>/</span> BUILT THROUGH EXPERIENCE</p>
            <h2>I LEARNED BUSINESS<br /><em>BY BUILDING ONE.</em></h2>
          </div>
          <div className="about-final-story">
            <p>My experience as an entrepreneur gave me a different perspective on business.</p>
            <p>I wasn’t responsible for only one function. I had to think about customers, suppliers, cash flow, logistics, operations, negotiations, risk, and growth at the same time.</p>
            <p>Building and operating a business taught me to take ownership, make decisions with incomplete information, and stay close to the actual problem.</p>
            <div className="about-final-quote">SUSTAINABLE GROWTH REQUIRES<br />STRONG SYSTEMS,<br />DISCIPLINED EXECUTION,<br />AND GREAT TEAMS.</div>
          </div>
        </section>

        <section className="about-final-section">
          <div className="about-final-heading">
            <p className="about-final-label">05 <span>/</span> PRINCIPLES</p>
            <h2>HOW I WORK.</h2>
          </div>
          <div className="about-final-principles">
            {principles.map(([number, title, text]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>“{text}”</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-final-cta">
          <p className="about-final-label">THE NEXT CHAPTER</p>
          <h2>I’m interested in building the next chapter<br />with companies solving difficult,<br />meaningful problems on a global scale.</h2>
          <div className="about-final-links">
            <a href="/work"><span>01 / EXPERIENCE</span><strong>EXPLORE MY EXPERIENCE →</strong></a>
            <a href="/contact"><span>02 / CONNECT</span><strong>CONTACT ME →</strong></a>
          </div>
        </section>
      </div>
    </main>
  );
}
