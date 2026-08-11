"use client";

import { useState } from "react";
import styles from "./contact.module.css";

const initial = { name: "", email: "", subject: "", message: "", website: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");

  function update(event) {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Message not sent");
      setForm(initial);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <form className={styles.form} onSubmit={submit} noValidate>
    <div className={styles.field}><label htmlFor="contact-name">NAME *</label><input id="contact-name" name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" maxLength={100} required/></div>
    <div className={styles.field}><label htmlFor="contact-email">EMAIL *</label><input id="contact-email" name="email" type="email" value={form.email} onChange={update} placeholder="Your email" autoComplete="email" maxLength={254} required/></div>
    <div className={styles.field}><label htmlFor="contact-subject">SUBJECT</label><input id="contact-subject" name="subject" value={form.subject} onChange={update} placeholder="What would you like to discuss?" maxLength={200}/></div>
    <div className={styles.field}><label htmlFor="contact-message">MESSAGE *</label><textarea id="contact-message" name="message" value={form.message} onChange={update} placeholder="Write your message here..." maxLength={5000} required/></div>
    <div className={styles.honeypot} aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" value={form.website} onChange={update} tabIndex={-1} autoComplete="off"/></div>
    <button type="submit" disabled={status === "sending"}>{status === "sending" ? "SENDING..." : "SEND MESSAGE →"}</button>
    <div className={styles.feedback} aria-live="polite">
      {status === "success" && <p className={styles.success}><strong>MESSAGE SENT.</strong><span>Thanks for reaching out.<br/>I'll get back to you soon.</span></p>}
      {status === "error" && <p className={styles.error}><strong>MESSAGE NOT SENT.</strong><span>Please try again or email me directly at<br/><a href="mailto:su59201@gmail.com">su59201@gmail.com</a></span></p>}
    </div>
  </form>;
}
