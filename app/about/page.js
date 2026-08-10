export default function About() {
  const stages = [
    ["SOURCE", "Strategic Sourcing", "Supplier Identification", "Negotiation"],
    ["BUILD", "Supplier Development", "Networks", "Relationships"],
    ["OPERATE", "Customers", "Logistics", "Risk · Execution"],
    ["GROW", "Business Development", "Markets", "Opportunity"],
  ];

  return (
    <main className="about-four">
      <div className="about-four-container">
        <header className="about-four-header">
          <a className="about-four-brand" href="/" aria-label="Brandon Baek home">
            <strong>BRANDON BAEK</strong>
            <span>GLOBAL BUSINESS · SUPPLY CHAIN</span>
          </a>
          <nav className="about-four-nav" aria-label="Primary navigation">
            <a href="/">Home</a>
            <a className="active" href="/about" aria-current="page">About</a>
            <a href="/work">Work</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <section className="about-screen about-screen-one">
          <div>
            <p className="about-four-label">ABOUT <span>/</span> 01</p>
            <h1>I build across borders,<br />industries, and cultures.</h1>
            <p className="about-four-intro">My career has been shaped by one consistent theme:<br />building something from the ground up and solving<br />problems where business, supply chain, and people<br />come together.</p>
            <p className="about-four-signature">BUILDER · OPERATOR · CONNECTOR</p>
          </div>
          <div className="about-four-stats" aria-label="Professional summary">
            <div><strong>15+</strong><span>YEARS OF EXPERIENCE</span></div>
            <div><strong>3</strong><span>CORE MARKETS</span></div>
            <div><strong>3</strong><span>LANGUAGES</span></div>
          </div>
        </section>

        <section className="about-screen about-screen-two">
          <div className="about-four-heading">
            <p className="about-four-label">02 <span>/</span> GLOBAL PERSPECTIVE</p>
            <h2>THREE MARKETS.<br /><em>ONE OPERATING PERSPECTIVE.</em></h2>
          </div>

          <div className="market-network" aria-label="Cross-border connection diagram">
            <div className="network-line network-line-us" aria-hidden="true"></div>
            <div className="network-line network-line-korea" aria-hidden="true"></div>
            <div className="network-line network-line-china" aria-hidden="true"></div>
            <article className="market-node market-us"><span>01 / MARKET</span><h3>U.S.</h3><p>Business Development</p><p>Customers</p><p>Operations</p></article>
            <article className="market-node market-korea"><span>02 / MARKET</span><h3>KOREA</h3><p>Supplier Relationships</p><p>Market Understanding</p><p>Business Culture</p></article>
            <article className="market-node market-china"><span>03 / MARKET</span><h3>CHINA</h3><p>Sourcing</p><p>Manufacturing</p><p>Supplier Development</p></article>
            <div className="network-center"><i></i><strong>CROSS-BORDER<br />EXECUTION</strong></div>
          </div>

          <blockquote>I don’t just work across these markets.<br /><strong>I understand how to connect them.</strong></blockquote>
        </section>

        <section className="about-screen about-screen-three">
          <div className="about-four-heading">
            <p className="about-four-label">03 <span>/</span> HOW I CREATE VALUE</p>
            <h2>FROM SOURCE<br /><em>TO GROWTH.</em></h2>
          </div>

          <div className="operating-flow">
            {stages.map(([name, line1, line2, line3], index) => (
              <article key={name}>
                <div className="flow-node"><i></i><span>0{index + 1}</span></div>
                <h3>{name}</h3><p>{line1}</p><p>{line2}</p><p>{line3}</p>
              </article>
            ))}
          </div>

          <div className="entrepreneur-moment">
            <h3>I DIDN’T LEARN BUSINESS<br />FROM ONE FUNCTION.</h3>
            <p>I learned it by building one.</p>
            <div className="operating-range">CUSTOMERS · SUPPLIERS · CASH FLOW · LOGISTICS · OPERATIONS · NEGOTIATION · RISK · GROWTH</div>
          </div>

          <div className="growth-standard">SUSTAINABLE GROWTH REQUIRES<br />STRONG SYSTEMS,<br />DISCIPLINED EXECUTION,<br />AND GREAT TEAMS.</div>

          <div className="operating-principles"><span>HANDS-ON</span><span>PERSISTENT</span><span>CROSS-CULTURAL</span><span>ALWAYS LEARNING</span></div>
        </section>

        <section className="about-screen about-screen-four">
          <div className="about-next-copy">
            <p className="about-four-label">04 <span>/</span> THE NEXT CHAPTER</p>
            <h2>15+ years taught me how to build.</h2>
            <h3>The next chapter is about<br />what I can build with the right team.</h3>
            <div className="about-four-actions">
              <a href="/work"><span>EXPLORE MY EXPERIENCE</span><strong>→</strong></a>
              <a href="/contact"><span>CONTACT ME</span><strong>→</strong></a>
            </div>
          </div>
          <div className="about-number-summary">
            <div><strong>15+</strong><span>YEARS</span></div>
            <div><strong>03</strong><span>MARKETS</span></div>
            <div><strong>03</strong><span>LANGUAGES</span></div>
            <div><strong>01</strong><span>PERSPECTIVE</span></div>
          </div>
        </section>
      </div>
    </main>
  );
}
