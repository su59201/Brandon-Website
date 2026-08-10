import styles from "./case.module.css";
import { narrative } from "./narrative";

const supplierSteps=["SEARCH","CALL","VISIT","FOLLOW UP","PROVE RELIABILITY","BUILD THE RELATIONSHIP"];
const functions=["SUPPLIER DEVELOPMENT","U.S. SOURCING","CUSTOMER DEVELOPMENT","INTERNATIONAL SALES","LOGISTICS","CONTAINER PLANNING","EXPORT OPERATIONS","CASH FLOW","PAYMENT RISK","PROCESSING","MANUFACTURING","QUALITY","EQUIPMENT","EMPLOYEES","PROBLEM SOLVING"];
const pressures=["WEAK RECYCLING MARKET","LOW VIRGIN RESIN PRICES","MARGIN PRESSURE","MACHINE FAILURES","FACTORY ECONOMICS","OPERATIONAL COMPLEXITY","FOUNDER WORKLOAD"];
const solved=[
 ["WORKING CAPITAL","I started without enough capital to carry a traditional inventory-heavy model, so the early business used customer prepayment to make transactions executable."],
 ["SUPPLIER DEVELOPMENT","I built an approximately 30–40-company U.S. supplier network through research, cold calls, repeated travel, factory visits, follow-up, and consistent execution."],
 ["SUPPLIER OPERATIONS","With suppliers such as Dura-Line, I learned to create value by solving handling and logistics problems rather than focusing only on purchase price."],
 ["CROSS-BORDER EXECUTION","I connected U.S. sourcing with Asian customers through pricing, domestic logistics, containers, documentation, export, payment, and customer coordination."],
 ["PROCESSING ECONOMICS","Moving into processing allowed the company to handle bulky materials that were difficult to move economically in their original form."],
 ["TECHNICAL PROBLEM SOLVING","I learned enough about machinery, power requirements, production flow, and equipment failure to diagnose problems and coordinate professional solutions when required."],
 ["MARKET VALIDATION","The EVA business reinforced the discipline of validating downstream demand and target economics before committing capital upstream."],
 ["MATERIAL JUDGMENT","Years of hands-on exposure allowed me to question material identification when product behavior did not match the supplier description and then seek proper verification."],
 ["COMMERCIAL CRISIS RESPONSE","When a customer defaulted after four containers had shipped, I used the company’s network to redirect the cargo and reduce the potential loss."],
 ["SCALE MANAGEMENT","I experienced directly what happens when physical capacity grows faster than technical capability, management systems, and organizational structure."],
 ["CAPITAL DISCIPLINE","In the end, I had to decide whether continuing to invest was economically justified rather than allowing seven years of sunk cost to decide for me."],
];
const lessons=[
 ["01","START SMALL. VALIDATE BEFORE SCALING.","The company began through real transactions rather than assumptions. Testing small made it possible to understand the economics before making a larger commitment."],
 ["02","CREATE VALUE BEFORE ASKING FOR VALUE.","Dura-Line taught me that supplier relationships become much stronger when I begin with the supplier’s operational problem rather than my purchasing objective."],
 ["03","UNDERSTAND THE EXIT BEFORE COMMITTING TO THE BUY.","The EVA transaction reinforced the importance of validating customer demand, price, and downstream economics before committing capital."],
 ["04","CASH FLOW AND COMMERCIAL DISCIPLINE MATTER AS MUCH AS REVENUE.","The four-container default showed me how quickly one relaxed payment rule can create unnecessary exposure."],
 ["05","CAPABILITY MATTERS MORE THAN CAPACITY.","The factory expansion taught me that machines, square footage, and production capacity do not automatically create the technical organization required to operate them."],
 ["06","SYSTEMS HAVE TO SCALE BEFORE COMPLEXITY DOES.","As the company grew, suppliers, customers, equipment, people, logistics, cash flow, and risk became increasingly connected."],
 ["07","A BUSINESS CANNOT DEPEND ON ONE PERSON FOREVER.","My willingness to personally solve problems helped build B.R. International. It was not a sustainable long-term operating model."],
 ["08","PERSISTENCE AND SUNK COST ARE NOT THE SAME THING.","Knowing when to keep going matters. Knowing when the fundamentals no longer justify continuing matters too."],
];
function Label({children}){return <p className={styles.label}>{children}</p>}
function Flow({items}){return <div className={styles.arrowFlow}>{items.map((x,i)=><div className={styles.flowPair} key={x}><span>{x}</span>{i<items.length-1&&<b>→</b>}</div>)}</div>}
function Copy({children}){return <div className={styles.deepCopy}>{children}</div>}
function Narrative({id}){return <Copy>{narrative[id].map((paragraph,index)=><p key={`${id}-${index}`}>{paragraph}</p>)}</Copy>}
export const metadata={title:"B.R. International USA LLC — Brandon Baek",description:"The complete seven-year story of building B.R. International from cross-border trading into processing and manufacturing."};

export default function Case(){return <main className={styles.casePage}>
 <header className={styles.header}><a className={styles.brand} href="/"><strong>BRANDON BAEK</strong><span>GLOBAL BUSINESS · SUPPLY CHAIN</span></a><nav className={styles.nav}><a href="/">Home</a><a href="/about">About</a><a className={styles.active} href="/work">Work</a><a href="/contact">Contact</a></nav></header>
 <div className={styles.journey}>
  <section className={`${styles.section} ${styles.hero}`}><div className={styles.heroMain}><Label>CASE 01 / B.R. INTERNATIONAL</Label><p className={styles.company}>B.R. INTERNATIONAL USA LLC <span>2018—2025</span></p><h1>FROM ZERO<br/><em>TO A REAL BUSINESS.</em></h1></div><aside className={styles.heroMeta}><p>FOUNDER / CEO</p><p>CROSS-BORDER PLASTICS</p><p>TRADING → PROCESSING / MANUFACTURING</p><p>U.S. → ASIA</p></aside><div className={styles.stats}><div><strong>2018—2025</strong><span>SEVEN-YEAR JOURNEY</span></div><div><strong>~30–40</strong><span>U.S. SUPPLIERS</span></div><div><strong>~15</strong><span>EMPLOYEES AT PEAK</span></div><div><strong>~$3M</strong><span>NORMAL PEAK-YEAR REVENUE</span></div></div></section>

  <section className={`${styles.section} ${styles.beginning}`}><div><Label>01 / THE BEGINNING</Label><h2>I SAW AN OPPORTUNITY.<br/><em>BUT I DIDN’T HAVE MUCH<br/>TO START WITH.</em></h2></div><Narrative id="chapter1"/><blockquote>THE OPPORTUNITY WAS REAL.<br/><strong>THE BUSINESS MODEL HAD TO FIT THE RESOURCES AVAILABLE.</strong></blockquote></section>

  <section className={styles.section}><Label>02 / VALIDATION</Label><h2>BEFORE BUILDING A COMPANY,<br/><em>I NEEDED TO KNOW IF THE TRANSACTION WORKED.</em></h2><Narrative id="chapter2"/><Flow items={["CUSTOMER PREPAYMENT","MATERIAL PURCHASE","DOMESTIC FREIGHT","CONTAINER / EXPORT","ASIAN CUSTOMER","COMPLETED TRANSACTION"]}/><Flow items={["TRUST","EXECUTION","REPEAT BUSINESS","REFERRALS","GROWTH"]}/></section>

  <section className={styles.section}><Label>THE COMMITMENT / MOVING TO TEXAS</Label><h2>THE TEST WORKED.<br/><em>NOW I HAD TO DECIDE WHETHER I REALLY BELIEVED IN IT.</em></h2><Narrative id="chapter3"/><Flow items={["ORANGE COUNTY","HOUSTON / ~9 MONTHS","DALLAS / OPERATING BASE"]}/></section>

  <section className={`${styles.section} ${styles.suppliers}`}><Label>03 / BUILDING SUPPLY</Label><h2>CUSTOMERS WERE ONLY USEFUL<br/><em>IF I COULD FIND THE MATERIAL.</em></h2><Narrative id="chapter4"/><div className={styles.loop}>{supplierSteps.map((x,i)=><div key={x}><b>{String(i+1).padStart(2,"0")}</b><span>{x}</span></div>)}</div><div className={styles.networkResult}><span>BUILT OVER TIME</span><strong>~30–40</strong><span>U.S. SUPPLIERS</span></div><div className={styles.zoom}><strong>DURA-LINE</strong><i/></div></section>

  <section className={`${styles.section} ${styles.duraline}`}><Label>STORY MOMENT / DURA-LINE</Label><h2>THEY WOULDN’T<br/>MEET ME.</h2><Narrative id="chapter5"/><div className={styles.question}><small>THE QUESTION THAT CHANGED THE RELATIONSHIP</small><blockquote>“WHAT IS YOUR BIGGEST PROBLEM<br/>WITH THIS MATERIAL?”</blockquote></div><blockquote className={styles.principle}>BEFORE ASKING WHAT A SUPPLIER CAN GIVE ME,<br/><strong>I ASK WHAT PROBLEM I CAN SOLVE FOR THEM.</strong></blockquote></section>

  <section className={`${styles.section} ${styles.pivot}`}><Label>04 / THE PIVOT</Label><h2>TRADING WAS WORKING.<br/><em>BUT IT HAD LIMITS.</em></h2><Narrative id="chapter6"/><Flow items={["TRADING","PROCESSING","MANUFACTURING"]}/><div className={styles.facility}><strong>~6,000</strong><span>SQ FT</span><p>THE FIRST PROCESSING OPERATION</p></div></section>

  <section className={styles.section}><Label>BUILDING PROCESSING CAPABILITY</Label><h2>THE COMPANY STOPPED BEING ONLY A TRADER.<br/><em>IT HAD TO LEARN HOW TO OPERATE.</em></h2><Narrative id="chapter7"/><Flow items={["IDENTIFY POWER PROBLEM","FIND TRANSFORMER","HIRE ELECTRICIAN","CONNECT EQUIPMENT","REORGANIZE FLOW","LEARN PRODUCTION"]}/><blockquote>PROCESSING DID NOT JUST ADD EQUIPMENT.<br/><strong>IT CHANGED WHAT THE BUSINESS WAS CAPABLE OF DOING.</strong></blockquote></section>

  <section className={`${styles.section} ${styles.scale}`}><Label>05 / SCALE</Label><h2>THEN I MADE THE MISTAKE<br/><em>OF GROWING TOO FAST.</em></h2><Narrative id="chapter8"/><Flow items={["MORE EQUIPMENT","MORE CAPACITY","MORE MATERIAL","MORE REVENUE","MORE PROFIT"]}/><div className={styles.footprint}><div><strong>~6,000</strong><span>SQ FT</span></div><b>→</b><div><strong>~24,000</strong><span>SQ FT</span></div></div><blockquote className={styles.principle}>CAPACITY IS NOT CAPABILITY.<br/><strong>BUYING EQUIPMENT DOES NOT CREATE THE ORGANIZATION REQUIRED TO OPERATE IT.</strong></blockquote></section>

  <section className={`${styles.section} ${styles.maturity}`}><Label>THE COMPANY AT SCALE</Label><h2>WHAT STARTED AS A SMALL TRADING IDEA<br/><em>HAD BECOME A REAL OPERATING BUSINESS.</em></h2><Narrative id="chapter9"/><div className={styles.constraints}>{functions.map(x=><span key={x}>{x}</span>)}</div><div className={styles.stats}><div><strong>~30–40</strong><span>U.S. SUPPLIERS</span></div><div><strong>~15</strong><span>EMPLOYEES</span></div><div><strong>~$3M</strong><span>NORMAL PEAK-YEAR REVENUE</span></div></div><blockquote>SUPPLY, CUSTOMERS, LOGISTICS, CASH FLOW, OPERATIONS, PEOPLE, AND RISK<br/><strong>ALL AFFECTED ONE ANOTHER.</strong></blockquote></section>

  <section className={`${styles.section} ${styles.pressure}`}><Label>06 / CRITICAL MOMENTS</Label><h2>BUSINESS IS WHAT HAPPENS<br/><em>WHEN THE PLAN BREAKS.</em></h2>
   <article className={styles.eva}><div className={styles.momentNo}>01</div><div><Label>EVA / MARKET VALIDATION</Label><h3>DON’T BUY FIRST<br/>AND LOOK FOR A CUSTOMER LATER.</h3><Narrative id="eva"/></div><div className={styles.momentEvidence}><strong>~20</strong><span>CONTAINERS</span><strong>~400+</strong><span>TONS</span></div><blockquote>VALIDATE THE EXIT<br/><strong>BEFORE COMMITTING TO THE BUY.</strong></blockquote></article>
   <article className={styles.abs}><div className={styles.momentNo}>02</div><div><Label>ABS VS. PS / HIPS</Label><h3>DON’T LET THE LABEL<br/><em>REPLACE YOUR OWN JUDGMENT.</em></h3><Narrative id="abs"/></div><div className={styles.materialConflict}><strong>PRODUCT KNOWLEDGE</strong><b>+</b><strong>COMMERCIAL JUDGMENT</strong><b>+</b><strong>VERIFICATION</strong></div></article>
   <article className={styles.default}><div className={styles.momentNo}>03</div><div><Label>FOUR-CONTAINER CUSTOMER DEFAULT</Label><h3>THE FIRST MISTAKE<br/><em>WAS MINE.</em></h3><Narrative id="customerDefault"/></div><div className={styles.defaultStats}><div><strong>~50%</strong><span>DEPOSIT</span></div><div><strong>4</strong><span>CONTAINERS MOVING</span></div><div><strong>~15–20%</strong><span>DISCOUNT + DIVERSION COST</span></div></div><div className={styles.twoLessons}><p><span>THE ORIGINAL MISTAKE</span>WEAKENING MY OWN PAYMENT DISCIPLINE.</p><p><span>AFTER THE MISTAKE</span>SPEED, NETWORK, AND COMMERCIAL FLEXIBILITY PROTECTED THE BEST REMAINING OUTCOME.</p></div></article>
  </section>

  <section className={styles.section}><Label>07 / COMPLEXITY</Label><h2>THE BUSINESS WAS GROWING.<br/><em>THE SYSTEMS WERE NOT GROWING FAST ENOUGH.</em></h2><Narrative id="chapter11"/><blockquote className={styles.principle}>A FOUNDER CAN START AS THE SYSTEM.<br/><strong>A COMPANY CANNOT SCALE IF THE FOUNDER REMAINS THE SYSTEM.</strong></blockquote></section>

  <section className={`${styles.section} ${styles.ending}`}><Label>08 / THE FINAL DECISION</Label><h2>THE COMPANY ENDED.<br/><em>THE EXPERIENCE DIDN’T.</em></h2><Narrative id="chapter12"/><div className={styles.convergence}><div>{pressures.map(x=><span key={x}>{x}</span>)}</div><b>→</b><strong>CONTINUE<br/>OR STOP?</strong></div><blockquote className={styles.principle}>CONTINUING BECAUSE I HAD ALREADY SPENT<br/>SEVEN YEARS BUILDING IT<br/><strong>WOULD HAVE BEEN SUNK-COST THINKING,<br/>NOT PERSISTENCE.</strong></blockquote></section>

  <section className={styles.section}><Label>09 / WHAT THE EXPERIENCE REQUIRED</Label><h2>SEVEN YEARS.<br/><em>MORE THAN ONE FUNCTION.</em></h2><div className={styles.solvedGrid}>{solved.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

  <section className={`${styles.section} ${styles.lessons}`}><Label>10 / LESSONS</Label><h2>I LEARNED HOW TO BUILD.<br/><em>BUT BUILDING WAS ONLY HALF THE LESSON.</em></h2><div className={styles.lessonList}>{lessons.map(([n,title,text])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

  <section className={`${styles.section} ${styles.final}`}><Label>CASE 01 / FINAL REFLECTION</Label><h2>I LEARNED<br/>HOW TO BUILD.</h2><div className={styles.finalBuild}><p>FROM ZERO.</p><p>FROM LIMITED RESOURCES.</p><p>ACROSS SUPPLY, CUSTOMERS, LOGISTICS, OPERATIONS, AND MARKETS.</p></div><p>I ALSO LEARNED THAT SUSTAINABLE GROWTH REQUIRES MORE THAN ENTREPRENEURIAL DRIVE.</p><div className={styles.finalPillars}><strong>SYSTEMS.</strong><strong>DISCIPLINE.</strong><strong>TECHNICAL CAPABILITY.</strong><strong>LEADERSHIP.</strong><strong>THE RIGHT TEAM.</strong></div><Narrative id="final"/><nav className={styles.caseNav}><a href="/work">← <span>BACK TO WORK</span></a><span className={styles.nextDisabled}><span>NEXT CASE</span> →</span></nav></section>
 </div>
 </main>}
