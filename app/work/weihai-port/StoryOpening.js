import styles from "./story-opening.module.css";

const storyLogic = [
  "WEIHAI–PYEONGTAEK CONNECTION",
  "BUILD THE KOREA OFFICE",
  "OFFICE BECOMES OPERATIONAL",
  "ROLE SHIFTS TO BUSINESS DEVELOPMENT",
  "MARKET SHORTAGE APPEARS",
  "VALIDATE DEMAND",
  "SECURE INTERNAL SUPPORT",
  "BUILD THE SUPPLY CHAIN",
];

const projectNeeds = [
  "CAPITAL",
  "PEOPLE",
  "SOURCING",
  "LOGISTICS",
  "COLD CHAIN",
  "INSTITUTIONAL SUPPORT",
];

const execution = [
  ["01", "SELECT THE SOURCING REGION", "INNER MONGOLIA"],
  ["02", "BUILD THE TEAM", "~10 PEOPLE"],
  ["03", "BRING IN AGRICULTURAL EXPERTISE", "QUALITY + CATEGORY KNOWLEDGE"],
  ["04", "BUILD QUALITY + COLD STORAGE", "FREEZING + PRODUCT CONTROL"],
  ["05", "BUILD REFRIGERATED TRANSPORT", "END-TO-END COLD CHAIN"],
  ["06", "CHOOSE THE RIGHT PORT", "WEIHAI VS. DALIAN"],
  ["07", "MOVE PRODUCT TO KOREA", "REEFER CONTAINERS"],
  ["08", "CONTROL DAILY EXECUTION", "~100+ CONTAINERS · PROFITABLE"],
];

export default function StoryOpening() {
  return <>
    <section className={styles.context}>
      <p className={styles.label}>00 / THE CONTEXT</p>
      <h2>FIRST:<br/>WHY WAS WEIHAI PORT<br/><em>IN SOUTH KOREA?</em></h2>
      <div className={styles.contextGrid}>
        <div className={styles.copy}>
          <p>Weihai Port Authority was part of a China–Korea transportation and trade connection linking Weihai, China with Pyeongtaek, South Korea.</p>
          <p>A passenger-and-cargo ferry route connected the two markets across the Yellow Sea.</p>
          <p>The organization wanted a stronger local presence in Korea — not only to support the transportation connection, but also to identify and develop new commercial opportunities between China and Korea.</p>
        </div>
        <div className={styles.geo} aria-label="Weihai to Pyeongtaek route">
          <div><small>CHINA</small><strong>WEIHAI</strong></div>
          <span><i/>YELLOW SEA<i/></span>
          <div><strong>PYEONGTAEK</strong><small>SOUTH KOREA</small></div>
          <p>PASSENGERS <b>+</b> CARGO <b>+</b> CROSS-BORDER TRADE</p>
        </div>
      </div>
    </section>

    <section className={styles.entry}>
      <p className={styles.label}>WHY BRANDON?</p>
      <h2>THAT'S WHERE<br/><em>I ENTERED THE STORY.</em></h2>
      <div className={styles.copy}>
        <p>At the time, I was living in South Korea and could operate comfortably in both Korean and Mandarin Chinese.</p>
        <p>I was recommended to help establish Weihai Port's local operating presence in Korea. I was approximately 22 years old.</p>
        <p>My first assignment was not to build an agricultural supply chain. It was much more basic:</p>
      </div>
      <blockquote>BUILD THE KOREA OFFICE.</blockquote>
      <div className={styles.bigTransition}><span>BEFORE I COULD<br/>DEVELOP BUSINESS,</span><b>↓</b><strong>WE NEEDED<br/>A BUSINESS BASE.</strong></div>
      <div className={styles.storyLogic}>{storyLogic.map((item, index)=><div key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong>{index<storyLogic.length-1&&<b>↓</b>}</div>)}</div>
    </section>

  </>;
}

export function ExecutionBridge() {
  return <section className={styles.projectBridge}>
      <p className={styles.label}>THE OPERATING LOGIC</p>
      <h2>DEMAND WAS REAL.<br/><em>NOW THE ORGANIZATION<br/>HAD TO MAKE IT EXECUTABLE.</em></h2>
      <div className={styles.copy}>
        <p>Identifying an opportunity and executing it were two very different things. The project needed an operating system around the demand.</p>
      </div>
      <div className={styles.needs}>{projectNeeds.map(item=><span key={item}>{item}</span>)}</div>
      <div className={styles.equation}><span>KOREAN DEMAND</span><b>+</b><span>CHINESE AGRICULTURAL SUPPLY</span><b>+</b><span>WEIHAI PORT'S<br/>TRADE / LOGISTICS CAPABILITY</span></div>
      <div className={styles.question}><small>THE QUESTION CHANGED AGAIN.</small><p><del>IS THERE AN OPPORTUNITY?</del></p><strong>CAN WE ACTUALLY<br/>BUILD THE SUPPLY CHAIN?</strong></div>
      <div className={styles.execution}>{execution.map(([number, action, result],index)=><div key={number}><span>{number}</span><p>{action}<strong>{result}</strong></p>{index<execution.length-1&&<b>↓</b>}</div>)}</div>
    </section>;
}
