export default function About() {
  const valueStages = [
    ["01", "SOURCE", "STRATEGIC SOURCING", "Supplier Identification", "Qualification", "Negotiation", "HANDS-ON"],
    ["02", "BUILD", "SUPPLIER DEVELOPMENT", "Relationships", "Supplier Networks", "Problem Solving", "PERSISTENT"],
    ["03", "OPERATE", "EXECUTION", "Customers", "Logistics", "Risk Management", "CROSS-CULTURAL"],
    ["04", "GROW", "BUSINESS DEVELOPMENT", "Markets", "Opportunity", "Growth", "ALWAYS LEARNING"],
  ];

  return (
    <main className="about-story">
      <div className="about-story-container">
        <header className="about-story-header">
          <a className="about-story-brand" href="/" aria-label="Brandon Baek home">
            <strong>BRANDON BAEK</strong><span>GLOBAL BUSINESS · SUPPLY CHAIN</span>
          </a>
          <nav className="about-story-nav" aria-label="Primary navigation">
            <a href="/">Home</a><a className="active" href="/about" aria-current="page">About</a><a href="/work">Work</a><a href="/contact">Contact</a>
          </nav>
        </header>

        <section className="about-story-hero">
          <div>
            <p className="about-story-label">ABOUT <span>/</span> 01</p>
            <h1>I build across borders,<br />industries, and cultures.</h1>
            <p className="about-story-intro">My career has been shaped by one consistent theme:<br />building something from the ground up and solving<br />problems where business, supply chain, and people<br />come together.</p>
            <p className="about-story-signature">BUILDER · OPERATOR · CONNECTOR</p>
          </div>
          <div className="about-story-stats">
            <div><strong>15+</strong><span>YEARS OF EXPERIENCE</span></div><div><strong>3</strong><span>CORE MARKETS</span></div><div><strong>3</strong><span>LANGUAGES</span></div>
          </div>
        </section>

        <div className="about-continuum">
          <section className="about-markets-editorial">
            <p className="about-story-label">THREE MARKETS <span>/</span> ONE PERSPECTIVE</p>
            <div className="market-wordline">
              <article><h2>U.S.</h2><p>Business · Customers · Operations</p></article>
              <article><h2>KOREA</h2><p>Suppliers · Relationships · Culture</p></article>
              <article><h2>CHINA</h2><p>Sourcing · Manufacturing · Development</p></article>
              <div className="market-axis" aria-hidden="true"><i></i><span>BRANDON<br />CROSS-BORDER</span></div>
            </div>
            <blockquote>I don’t just understand three markets.<br /><strong>I know how to move between them.</strong></blockquote>
          </section>

          <section className="value-chain-section" aria-label="How I create value">
            <div className="value-chain-heading">
              <p className="about-story-label">03 <span>/</span> HOW I CREATE VALUE</p>
              <h2>FROM SOURCE<br /><em>TO GROWTH.</em></h2>
            </div>

            <div className="value-chain-flow">
              {valueStages.map(([number, stage, capability, item1, item2, item3, principle]) => (
                <article key={stage}>
                  <div className="value-chain-node"><i></i><span>{number}</span></div>
                  <h3>{stage}</h3>
                  <h4>{capability}</h4>
                  <p>{item1}</p><p>{item2}</p><p>{item3}</p>
                  <small>{principle}</small>
                </article>
              ))}
            </div>

            <div className="value-chain-editorial">
              <div>
                <h3>I DIDN’T BUILD MY CAREER<br />INSIDE ONE FUNCTION.</h3>
              </div>
              <div>
                <p>I learned how the functions connect<br />by building and operating a business.</p>
                <blockquote>SUSTAINABLE GROWTH REQUIRES<br />STRONG SYSTEMS, DISCIPLINED EXECUTION,<br />AND GREAT TEAMS.</blockquote>
              </div>
            </div>
          </section>

          <section className="about-story-next">
            <div className="story-end-node" aria-hidden="true"><i></i></div>
            <p className="about-story-label">WHAT’S NEXT <span>/</span> 04</p>
            <h2>I KNOW HOW TO BUILD.</h2>
            <h3>Now I’m looking for<br />what’s worth building next.</h3>
            <div className="about-story-actions"><a href="/work"><span>VIEW EXPERIENCE</span><strong>→</strong></a><a href="/contact"><span>START A CONVERSATION</span><strong>→</strong></a></div>
          </section>
        </div>
      </div>
    </main>
  );
}
