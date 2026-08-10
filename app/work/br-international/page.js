import styles from "./case.module.css";

const supplierSteps = ["ONLINE RESEARCH", "COLD CALLS", "FACTORY VISITS", "FOLLOW-UP", "RELATIONSHIP BUILDING"];
const scalePressures = ["POWER REQUIREMENTS", "MAINTENANCE", "BLADES", "MACHINE SETTINGS", "REPAIR", "TECHNICAL KNOWLEDGE", "PRODUCTION MANAGEMENT"];
const endPressures = ["WEAK RECYCLING MARKET", "LOW VIRGIN RESIN PRICES", "RECYCLED-MATERIAL MARGIN PRESSURE", "MACHINE FAILURES", "FACTORY ECONOMICS", "OPERATIONAL COMPLEXITY", "FOUNDER WORKLOAD"];
const lessons = [
  ["01", "BUILD FROM ZERO.", "LIMITED CAPITAL", "Ambiguity is not a reason to wait. A business can begin with limited resources when the model fits the reality."],
  ["02", "CREATE VALUE BEFORE ASKING FOR VALUE.", "DURA-LINE", "Solving a supplier’s operational problem can create a stronger relationship than beginning with price."],
  ["03", "VALIDATE BEFORE COMMITTING.", "EVA", "Real demand, target price, and commercial viability should be tested before major capital is committed."],
  ["04", "CASH FLOW AND RISK MATTER AS MUCH AS REVENUE.", "CUSTOMER DEFAULT", "The four-container default reinforced why commercial discipline cannot be relaxed casually."],
  ["05", "CAPABILITY MATTERS MORE THAN CAPACITY.", "FACTORY EXPANSION", "Equipment does not create the technical organization required to operate it."],
  ["06", "SYSTEMS MUST SCALE BEFORE THE BUSINESS DOES.", "FOUNDER BOTTLENECK", "Founder effort cannot remain the permanent solution to every operating gap."],
  ["07", "KNOW WHEN PERSISTENCE BECOMES SUNK COST.", "2025 CLOSURE", "Stopping can be a disciplined business decision, not a failure of commitment."],
];

function Label({children}) { return <p className={styles.label}>{children}</p>; }
function ArrowFlow({items, className=""}) { return <div className={`${styles.arrowFlow} ${className}`}>{items.map((item,index)=><div className={styles.flowPair} key={item}><span>{item}</span>{index<items.length-1&&<b aria-hidden="true">→</b>}</div>)}</div>; }

export const metadata = {
  title: "B.R. International USA LLC — Brandon Baek",
  description: "A seven-year company-building journey across trading, processing, manufacturing, and cross-border plastics.",
};

export default function BRInternationalCase() {
  return (
    <main className={styles.casePage}>
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Brandon Baek home"><strong>BRANDON BAEK</strong><span>GLOBAL BUSINESS · SUPPLY CHAIN</span></a>
        <nav className={styles.nav} aria-label="Primary navigation"><a href="/">Home</a><a href="/about">About</a><a className={styles.active} href="/work" aria-current="page">Work</a><a href="/contact">Contact</a></nav>
      </header>

      <div className={styles.journey}>
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={styles.heroMain}>
            <Label>CASE 01 / COMPANY JOURNEY</Label>
            <p className={styles.company}>B.R. INTERNATIONAL USA LLC <span>2018—2025</span></p>
            <h1>FROM ZERO<br/><em>TO A REAL BUSINESS.</em></h1>
            <p className={styles.lede}>Seven years of building a cross-border plastics business—from trading and supplier development to processing, manufacturing, and the lessons that came with scaling.</p>
          </div>
          <aside className={styles.heroMeta}><p>FOUNDER / CEO</p><p>CROSS-BORDER PLASTICS</p><p>TRADING → PROCESSING / MANUFACTURING</p><p>U.S. → ASIA</p></aside>
          <div className={styles.stats}>
            <div><strong>7</strong><span>YEARS</span></div><div><strong>~30–40</strong><span>U.S. SUPPLIERS</span></div><div><strong>~15</strong><span>EMPLOYEES AT PEAK</span></div><div><strong>~$3M</strong><span>NORMAL PEAK-YEAR REVENUE</span></div>
          </div>
          <div className={styles.masterTimeline}><span>2018</span><i/><b>START</b><b>BUILD</b><b>PIVOT</b><b>SCALE</b><b>COMPLEXITY</b><b>END</b><i/><span>2025</span></div>
        </section>

        <section className={`${styles.section} ${styles.beginning}`}>
          <div><Label>01 / THE BEGINNING</Label><h2>I SAW A GAP.<br/><em>I DIDN’T HAVE<br/>THE CAPITAL.</em></h2></div>
          <div className={styles.storyCopy}><p>Available U.S. plastic-material supply existed. Demand existed in Korea and other Asian markets. Brandon understood plastics, logistics, and how to work across both business environments.</p><p>The constraint was working capital. He could not build a traditional inventory-heavy trading business, so the operating model had to fit the resources available.</p><h3>PREPAYMENT.</h3><p>Customers paid before the material was purchased, allowing the company to execute without carrying the full working-capital burden itself.</p></div>
          <ArrowFlow items={["CUSTOMER PAYMENT","PURCHASE MATERIAL","FREIGHT / EXPORT","DELIVERY"]}/>
          <div className={styles.geo}><small>THE BUSINESS MOVED WITH THE OPPORTUNITY</small><ArrowFlow items={["ORANGE COUNTY","HOUSTON","DALLAS"]}/></div>
          <blockquote>LIMITED RESOURCES DID NOT REMOVE THE OPPORTUNITY.<br/><strong>THE BUSINESS MODEL HAD TO FIT THE RESOURCES AVAILABLE.</strong></blockquote>
        </section>

        <section className={`${styles.section} ${styles.suppliers}`}>
          <Label>02 / BUILDING THE SUPPLIER NETWORK</Label><h2>THE BUSINESS GREW<br/><em>ONE RELATIONSHIP AT A TIME.</em></h2>
          <div className={styles.supplierIntro}><p>Reliable U.S. supply did not arrive as a ready-made network. Brandon spent approximately a year developing it directly—often traveling around half of each month.</p><div><strong>~1</strong><span>YEAR OF AGGRESSIVE DEVELOPMENT</span></div><div><strong>~15</strong><span>TRAVEL DAYS / TYPICAL MONTH</span></div></div>
          <div className={styles.loop}>{supplierSteps.map((step,index)=><div key={step}><b>{String(index+1).padStart(2,"0")}</b><span>{step}</span></div>)}</div>
          <div className={styles.networkResult}><span>THE RESULTING NETWORK</span><strong>~30–40</strong><span>U.S. SUPPLIERS</span></div>
          <div className={styles.zoom}><span>ONE RELATIONSHIP CHANGED THE METHOD.</span><strong>DURA-LINE</strong><i/></div>
        </section>

        <section className={`${styles.section} ${styles.duraline}`}>
          <Label>STORY MOMENT / DURA-LINE</Label><h2>THEY WOULDN’T<br/>MEET ME.</h2>
          <div className={styles.persistence}><div><strong>EVERY ~1–2 WEEKS</strong><span>BRANDON RETURNED</span></div><i/><div><strong>~3 MONTHS</strong><span>LITTLE PROGRESS</span></div><i/><div><strong>COMMUNICATION</strong><span>FINALLY OPENED</span></div></div>
          <div className={styles.question}><small>HE DIDN’T BEGIN WITH</small><del>“WHAT PRICE CAN YOU GIVE ME?”</del><small>HE ASKED</small><blockquote>“WHAT IS YOUR BIGGEST PROBLEM<br/>WITH THIS MATERIAL?”</blockquote></div>
          <div className={styles.solution}>
            <div><Label>THE PROBLEM</Label><h3>BULKY PIPE SCRAP</h3><p>Difficult and expensive to handle and move.</p></div><b>→</b>
            <div><Label>THE PRACTICAL MOVE</Label><h3>OPEN-TOP REMOVAL APPROACH</h3><p>A logistics solution that made the difficult material easier to remove.</p></div><b>→</b>
            <div><Label>THE RELATIONSHIP</Label><h3>~1–1.5 YEARS</h3><p>He solved the difficult material first. Trust deepened, and better material opportunities followed.</p></div>
          </div>
          <blockquote className={styles.principle}>BEFORE ASKING WHAT A SUPPLIER CAN GIVE ME,<br/><strong>I ASK WHAT PROBLEM I CAN SOLVE FOR THEM.</strong></blockquote>
        </section>

        <section className={`${styles.section} ${styles.pivot}`}>
          <Label>03 / THE PIVOT</Label><h2>TRADING WAS WORKING.<br/><em>BUT IT WASN’T ENOUGH.</em></h2>
          <div className={styles.constraints}>{["HEAVY TRAVEL","FRAGMENTED SUPPLY","BULKY MATERIALS","FREIGHT ECONOMICS","EXPORT DEPENDENCY","COVID PRESSURE"].map(x=><span key={x}>{x}</span>)}</div>
          <ArrowFlow className={styles.bigFlow} items={["TRADING","PROCESSING","MANUFACTURING"]}/>
          <div className={styles.facility}><strong>~6,000</strong><span>SQ FT</span><p>Brandon took over a small recycling operation. It was not a ready-made professional manufacturing system; the facility, machinery, and operating process all required work.</p></div>
          <div className={styles.commission}><p>One Chinese machine had not operated properly because its electrical requirements did not match the facility setup. Brandon had no formal electrical or machinery background. He identified the issue, found the transformer solution, hired a professional electrician, and learned how to build the operation around the equipment.</p><ArrowFlow items={["IDENTIFY POWER PROBLEM","FIND TRANSFORMER SOLUTION","HIRE ELECTRICIAN","CONNECT EQUIPMENT","REORGANIZE WAREHOUSE","LEARN PRODUCTION"]}/></div>
          <div className={styles.materialShift}><div><span>BEFORE</span><strong>BULKY / UNECONOMIC TO MOVE</strong></div><b>→</b><div><span>AFTER PROCESSING</span><strong>EASIER / MORE ECONOMICAL TO TRANSPORT</strong></div></div>
          <blockquote>THE COMPANY STOPPED BEING ONLY A TRADER.<br/><strong>IT BEGAN BUILDING PHYSICAL OPERATING CAPABILITY.</strong></blockquote>
        </section>

        <section className={`${styles.section} ${styles.scale}`}>
          <Label>04 / SCALE</Label><h2>THEN I MADE<br/>THE MISTAKE<br/><em>OF GROWING TOO FAST.</em></h2>
          <div className={styles.footprint}><div><strong>~6,000</strong><span>SQ FT</span></div><b>→</b><div><strong>~24,000</strong><span>SQ FT</span></div></div>
          <div className={styles.equipment}>{["SHREDDERS","CRUSHERS","WASHING EQUIPMENT","SEMI-AUTOMATED LINES"].map(x=><span key={x}>{x}</span>)}</div>
          <div className={styles.assumption}><Label>THE ASSUMPTION</Label><ArrowFlow items={["MORE EQUIPMENT","MORE CAPACITY","MORE MATERIAL","MORE PROFIT"]}/></div>
          <div className={styles.reality}><Label>THE REALITY</Label>{scalePressures.map(x=><span key={x}>{x}</span>)}</div>
          <div className={styles.capabilityGap}><div><span>PHYSICAL CAPACITY</span><i className={styles.long}/></div><div><span>TECHNICAL CAPABILITY</span><i className={styles.medium}/></div><div><span>OPERATING SYSTEMS</span><i className={styles.short}/></div></div>
          <div className={styles.candid}><p>The company expanded physical capacity faster than its technical and organizational capability. Strong plant technical leadership was not built early enough.</p><p>As problems appeared, Brandon spent substantial time learning machines, disassembling equipment, troubleshooting, repairing, and reinstalling systems. That solved immediate problems—but revealed a deeper capability gap.</p></div>
          <blockquote className={styles.principle}>CAPACITY IS NOT THE SAME AS CAPABILITY.<br/><strong>A FOUNDER SHOULD NOT BECOME THE PERMANENT SOLUTION TO EVERY CAPABILITY GAP.</strong></blockquote>
        </section>

        <section className={`${styles.section} ${styles.pressure}`}>
          <Label>05 / OPERATING UNDER PRESSURE</Label><h2>BUSINESS IS WHAT HAPPENS<br/><em>WHEN THE PLAN BREAKS.</em></h2>
          <article className={styles.eva}><div className={styles.momentNo}>01</div><div><Label>CRITICAL MOMENT / EVA</Label><h3>VALIDATE THE EXIT<br/>BEFORE COMMITTING<br/>TO THE BUY.</h3><p>Brandon identified a potential EVA opportunity. Instead of buying first and searching for customers later, he validated Malaysian demand, target price, and commercial viability before committing.</p></div><div className={styles.momentEvidence}><strong>~20</strong><span>CONTAINERS</span><strong>~400+</strong><span>TONS</span></div><ArrowFlow items={["VALIDATE DEMAND","CONFIRM TARGET PRICE","TEST VIABILITY","COMMIT TO BUY"]}/></article>
          <article className={styles.abs}><div className={styles.momentNo}>02</div><div><Label>CRITICAL MOMENT / ABS VS. PS/HIPS</Label><h3>THE LABEL SAID ONE THING.<br/><em>THE MATERIAL BEHAVED LIKE ANOTHER.</em></h3><p>A supplier represented material as ABS. Based on physical behavior, burning characteristics, smell, and accumulated material experience, Brandon suspected PS/HIPS. He separated samples and sought external, customer, or professional verification. Later verification supported his concern.</p><small>BRANDON IDENTIFIED AND VALIDATED THE INCONSISTENCY; HE DID NOT CLAIM LABORATORY EXPERTISE.</small></div><div className={styles.materialConflict}><div><span>SUPPLIER CLAIM</span><strong>ABS</strong></div><b>≠</b><div><span>OBSERVED BEHAVIOR</span><strong>PS / HIPS?</strong></div><ArrowFlow items={["QUESTION ASSUMPTION","SEPARATE SAMPLES","EXTERNAL VERIFICATION"]}/></div></article>
          <article className={styles.default}><div className={styles.momentNo}>03</div><div><Label>CRITICAL MOMENT / CUSTOMER DEFAULT</Label><h3>THE FIRST MISTAKE HAPPENED<br/><em>BEFORE THE SHIPS LEFT.</em></h3><p>The company’s normal discipline was full prepayment. In this transaction, Brandon accepted approximately a 50% deposit. Four containers were shipped; the buyer then disappeared or defaulted while the cargo was already moving.</p></div><div className={styles.defaultStats}><div><strong>~50%</strong><span>DEPOSIT</span></div><div><strong>4</strong><span>CONTAINERS IN TRANSIT</span></div><div><strong>~15–20%</strong><span>REPLACEMENT-SALE DISCOUNT</span></div></div><ArrowFlow items={["BUYER DEFAULT","ACTIVATE NETWORK","FIND SOUTHEAST ASIAN BUYER","REDIRECT MATERIAL","ABSORB DIVERSION COST","AVOID LARGER LOSS"]}/><div className={styles.twoLessons}><p><span>THE ORIGINAL MISTAKE</span>WEAKENING MY OWN PAYMENT DISCIPLINE.</p><p><span>THE RESPONSE</span>SPEED, NETWORK, AND COMMERCIAL FLEXIBILITY PROTECTED THE BEST REMAINING OUTCOME.</p></div></article>
        </section>

        <section className={`${styles.section} ${styles.maturity}`}>
          <Label>06 / THE COMPANY AT SCALE</Label><h2>WHAT STARTED AS A PREPAYMENT TRADING MODEL<br/><em>HAD BECOME AN OPERATING COMPANY.</em></h2>
          <ArrowFlow className={styles.operatingChain} items={["U.S. SUPPLIERS","TRADING / SOURCING","PROCESSING / MANUFACTURING","CROSS-BORDER LOGISTICS","ASIAN MARKETS"]}/>
          <p className={styles.capabilities}>SUPPLIER DEVELOPMENT · CUSTOMER DEVELOPMENT · PRODUCTION · OPERATIONS</p>
          <div className={styles.stats}><div><strong>~30–40</strong><span>U.S. SUPPLIERS</span></div><div><strong>~15</strong><span>EMPLOYEES</span></div><div><strong>~$3M</strong><span>NORMAL PEAK-YEAR REVENUE</span></div></div>
          <blockquote>HAD THE BUSINESS BECOME SUSTAINABLE—<br/><strong>OR SIMPLY LARGER?</strong></blockquote>
        </section>

        <section className={`${styles.section} ${styles.ending}`}>
          <Label>07 / THE END</Label><h2>THE COMPANY ENDED.<br/><em>THE EXPERIENCE DIDN’T.</em></h2>
          <div className={styles.convergence}><div>{endPressures.map(x=><span key={x}>{x}</span>)}</div><b>→</b><strong>CONTINUE<br/>OR STOP?</strong></div>
          <div className={styles.questionShift}><p><span>THE QUESTION HAD BEEN</span>“HOW DO I KEEP GROWING?”</p><b>↓</b><p><span>THE QUESTION BECAME</span>“DOES CONTINUING STILL MAKE ECONOMIC SENSE?”</p></div>
          <p className={styles.endCopy}>By 2025, market weakness, low virgin-resin prices, margin pressure, machine failures, factory economics, operating complexity, and founder workload were converging. Brandon decided to stop consuming cash and personal capacity simply because seven years had already been invested.</p>
          <blockquote className={styles.principle}>CONTINUING BECAUSE I HAD ALREADY SPENT<br/>SEVEN YEARS BUILDING IT<br/><strong>WOULD HAVE BEEN SUNK-COST THINKING,<br/>NOT PERSISTENCE.</strong></blockquote>
        </section>

        <section className={`${styles.section} ${styles.lessons}`}>
          <Label>FINAL CHAPTER / WHAT SEVEN YEARS TAUGHT ME</Label>
          <div className={styles.lessonList}>{lessons.map(([number,title,event,text])=><article key={number}><span>{number}</span><div><small>{event}</small><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </section>

        <section className={`${styles.section} ${styles.final}`}>
          <Label>CASE 01 / FINAL STATEMENT</Label><h2>I LEARNED<br/>HOW TO BUILD.</h2><p>I ALSO LEARNED THAT SUSTAINABLE GROWTH<br/>REQUIRES <strong>SYSTEMS, DISCIPLINE,<br/>TECHNICAL CAPABILITY,<br/>AND THE RIGHT TEAM.</strong></p>
          <div className={styles.closingMeta}><span>B.R. INTERNATIONAL USA LLC</span><span>2018—2025</span><span>FOUNDER / CEO</span></div>
          <nav className={styles.caseNav} aria-label="Case study navigation"><a href="/work">← <span>BACK TO WORK</span></a><span className={styles.nextDisabled} aria-disabled="true"><span>NEXT CASE</span> →</span></nav>
        </section>
      </div>
    </main>
  );
}
