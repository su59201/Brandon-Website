import styles from "./crisis.module.css";

const normalRoute = ["COLD STORAGE", "REEFER TRUCK", "PORT", "REEFER CONTAINER", "KOREA"];
const recovery = ["OPERATIONAL FAILURE", "RESPONSIBILITY DISCUSSION", "COMMERCIAL NEGOTIATION", "FUTURE FREIGHT DISCOUNT", "PARTIAL RISK RECOVERY"];
const response = ["PROTECT THE CUSTOMER", "CONTROL THE LOSS", "ASSIGN RESPONSIBILITY", "NEGOTIATE RECOVERY", "KEEP THE OPERATION MOVING"];

export default function CrisisSection() {
  return <section className={styles.crisis}>
    <p className={styles.label}>EXECUTION / WHEN THE PLAN BREAKS</p>
    <h2>BUILDING THE SYSTEM<br/>WAS ONE THING.<br/><em>RUNNING IT<br/>WHEN SOMETHING FAILED<br/>WAS ANOTHER.</em></h2>

    <div className={styles.copy}>
      <p>During one refrigerated shipment, a refrigeration failure created a serious temperature-control risk.</p>
      <p>The normal transportation window was approximately 12 hours. The refrigeration issue extended the exposure period to approximately 15–18 hours.</p>
      <p>For agricultural cargo, this was not simply a transportation delay. Product condition, quality, customer acceptance, and financial loss were now at risk.</p>
    </div>

    <div className={styles.interruption}>
      <div className={styles.normal}>
        <span>NORMAL PLAN</span>
        <div>{normalRoute.map((item,index)=><p key={item}>{item}{index<normalRoute.length-1&&<b>→</b>}</p>)}</div>
        <strong>~12 HOURS</strong>
        <small>EXPECTED TRANSPORT WINDOW</small>
      </div>
      <div className={styles.failure}>
        <span>WHAT HAPPENED</span>
        <strong>REFRIGERATION FAILURE</strong>
        <b>↓</b>
        <p><em>~15–18 HOURS</em>TEMPERATURE-CONTROL RISK</p>
        <b>↓</b>
        <p>PRODUCT QUALITY AT RISK</p>
        <b>↓</b>
        <p>FINANCIAL EXPOSURE</p>
      </div>
    </div>

    <div className={styles.action}>
      <p className={styles.label}>WHAT I DID</p>
      <h3>THE QUESTION WASN'T<br/>WHO TO BLAME.<br/><em>IT WAS:<br/>HOW DO WE<br/>CONTROL THE LOSS?</em></h3>
      <div className={styles.copy}>
        <p>The shipment had already encountered the problem. The immediate issue was no longer designing the perfect logistics plan. It was how to manage responsibility and reduce the project's financial exposure.</p>
        <p>I worked with the logistics provider over responsibility for the refrigeration failure. Instead of treating the situation only as a dispute over the affected shipment, I negotiated a practical commercial recovery mechanism.</p>
      </div>
      <div className={styles.recovery}>{recovery.map((item,index)=><div key={item}><span>{item}</span>{index<recovery.length-1&&<b>→</b>}</div>)}</div>
      <div className={styles.recollection}>
        <strong>APPROXIMATELY 50%</strong>
        <p>OF THE RELEVANT RISK / LOSS EXPOSURE</p>
        <span>BRANDON'S RECOLLECTION · PARTIAL RECOVERY, NOT AN AUDITED FIGURE</span>
      </div>
      <div className={styles.copy}>
        <p>The final solution used future freight discounts as the recovery mechanism. I remember the commercial recovery as approximately 50% of the relevant risk or loss exposure. It did not mean that every loss was recovered.</p>
      </div>
    </div>

    <div className={styles.lesson}>
      <p className={styles.label}>WHY THIS MATTERED</p>
      <h3>A SUPPLY CHAIN<br/>ISN'T PROVEN<br/>WHEN EVERYTHING<br/>GOES RIGHT.<br/><em>IT'S PROVEN<br/>WHEN SOMETHING<br/>GOES WRONG.</em></h3>
      <div className={styles.copy}>
        <p>This was one of my earliest lessons in operational risk. Contracts, routes, cold storage, equipment, and planning matter. But execution also requires the ability to respond when the plan breaks.</p>
        <p>The objective is not always to eliminate the problem after it has happened. Sometimes the job becomes controlling the exposure and keeping the operation moving.</p>
      </div>
      <div className={styles.response}>{response.map(item=><span key={item}>{item}</span>)}</div>
    </div>

    <div className={styles.return}>
      <span>ONE FAILURE<br/>DIDN'T DEFINE<br/>THE PROGRAM.</span>
      <b>→</b>
      <strong>THE RESPONSE<br/>BECAME PART<br/>OF HOW WE RAN IT.</strong>
    </div>
  </section>;
}
