import styles from "./work.module.css";
import refine from "./work-refine.module.css";

const cases=[
 {number:"01",href:"/work/br-international",status:"VIEW CASE →",category:"ENTREPRENEURSHIP · SUPPLY CHAIN · OPERATIONS",title:"FROM ZERO TO A REAL BUSINESS.",company:"B.R. INTERNATIONAL USA LLC · 2018–2025",context:"Built and operated a cross-border plastics business spanning sourcing, logistics, processing, and manufacturing across the U.S. and Asia.",proof:"7 YEARS · 30–40 U.S. SUPPLIERS · ~$3M NORMAL PEAK-YEAR REVENUE"},
 {number:"02",href:"/work/hyla",status:"VIEW CASE →",category:"STRATEGY · PROJECT FINANCE · CROSS-BORDER",title:"FINDING WHAT COULD UNLOCK A COMPLEX PROJECT.",company:"HYLA CO., LTD. · SOUTH KOREA · 2025–2026",context:"Strategic advisory work across equipment sourcing, financing structure, negotiation, and stakeholder alignment without formal authority.",proof:"~$37M PROJECT FRAMEWORK · KOREA ↔ CHINA"},
 {number:"03",href:"/work/weihai-port",status:"VIEW CASE →",category:"CROSS-BORDER SUPPLY CHAIN · OPERATIONS · MARKET DEVELOPMENT",title:"VALIDATING DEMAND. THEN BUILDING THE SUPPLY CHAIN.",company:"WEIHAI PORT AUTHORITY · KOREA REPRESENTATIVE OFFICE · 2009–2012",context:"Validated Korean demand first, then built the sourcing, team, cold chain, logistics, and operating system required to execute from China to Korea.",proof:"100+ REEFER CONTAINERS · 6–7 MONTHS · CHINA → KOREA"},
];

export const metadata={title:"Selected Work — Brandon Baek",description:"Selected case studies across entrepreneurship, supply chain, project finance, and international business."};

export default function Work(){return <main className={styles.page}>
 <header className={styles.header}><a className={styles.brand} href="/"><strong>BRANDON BAEK</strong><span>GLOBAL BUSINESS · SUPPLY CHAIN</span></a><nav className={styles.nav}><a href="/">Home</a><a href="/about">About</a><a className={styles.active} href="/work" aria-current="page">Work</a><a href="/contact">Contact</a></nav></header>
 <div className={styles.shell}>
  <section className={`${styles.intro} ${refine.intro}`}><p>SELECTED WORK / CASE STUDIES</p><h1><span>BUILT. STRUCTURED.</span><span><em>MOVED FORWARD.</em></span></h1><div><span>ENTREPRENEURSHIP</span><span>SUPPLY CHAIN</span><span>PROJECT FINANCE</span><span>CROSS-BORDER EXECUTION</span></div></section>
  <section className={styles.index} aria-label="Selected case studies">
   {cases.map(item=>item.href?<a className={styles.case} href={item.href} key={item.number}><span className={styles.number}>CASE {item.number}</span><div className={styles.story}><p>{item.category}</p><h2>{item.title}</h2><strong>{item.company}</strong><span>{item.context}</span></div><div className={styles.result}><span>{item.proof}</span><b>{item.status}</b></div></a>:<article className={`${styles.case} ${styles.upcoming}`} key={item.number}><span className={styles.number}>CASE {item.number}</span><div className={styles.story}><p>{item.category}</p><h2>{item.title}</h2><strong>{item.company}</strong><span>{item.context}</span></div><div className={styles.result}><span>{item.proof}</span><b>{item.status}</b></div></article>)}
  </section>
  <footer className={styles.footer}><span>SELECTED WORK</span><a href="/contact">START A CONVERSATION →</a></footer>
 </div>
</main>}
