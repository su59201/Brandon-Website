import Image from "next/image";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact — Brandon Baek",
  description: "Contact Brandon Baek about global sourcing, supply chain, cross-border business, and professional opportunities.",
};

export default function ContactPage() {
  return <main className={styles.page}>
    <header className={styles.header}>
      <a className={styles.brand} href="/"><strong>BRANDON BAEK</strong><span>GLOBAL BUSINESS · SUPPLY CHAIN</span></a>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a href="/">Home</a><a href="/about">About</a><a href="/work">Work</a><a className={styles.active} href="/contact" aria-current="page">Contact</a>
      </nav>
    </header>

    <div className={styles.shell}>
      <section className={styles.hero}>
        <p>CONTACT</p>
        <h1>LET'S START<br/><em>A CONVERSATION.</em></h1>
        <span>I'm always open to conversations around global sourcing, supply chain, cross-border business, and new opportunities.</span>
      </section>

      <section className={styles.contact}>
        <div className={styles.profile}>
          <div className={styles.portrait}><Image src="/brandon-contact.jpg" alt="Brandon Baek in a navy suit and light blue shirt" fill sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 900px) 300px, 390px" priority/></div>
          <div className={styles.identity}><strong>BRANDON BAEK</strong><span>GLOBAL BUSINESS · SUPPLY CHAIN</span></div>
          <dl>
            <div><dt>LOCATION</dt><dd>Dallas–Fort Worth, Texas</dd></div>
            <div><dt>EMAIL</dt><dd><a href="mailto:su59201@gmail.com">su59201@gmail.com</a></dd></div>
            <div><dt>LINKEDIN</dt><dd><a href="https://www.linkedin.com/in/brandon-geumsu-baek" target="_blank" rel="noopener noreferrer">linkedin.com/in/brandon-geumsu-baek ↗</a></dd></div>
          </dl>
        </div>

        <div className={styles.formSide}>
          <p className={styles.sectionLabel}>SEND A MESSAGE</p>
          <p className={styles.formIntro}>Have a question, opportunity, or idea to discuss? Send me a note.</p>
          <ContactForm/>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><strong>BRANDON BAEK</strong><span>GLOBAL BUSINESS · SUPPLY CHAIN</span><span>Dallas–Fort Worth, Texas</span></div>
        <div><a href="mailto:su59201@gmail.com">EMAIL</a><a href="https://www.linkedin.com/in/brandon-geumsu-baek" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a></div>
        <small>© 2026 BRANDON BAEK</small>
      </footer>
    </div>
  </main>;
}
