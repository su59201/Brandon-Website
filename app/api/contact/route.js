import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RECIPIENT = "su59201@gmail.com";
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;
const requests = globalThis.__brandonContactRequests || new Map();
globalThis.__brandonContactRequests = requests;

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function emailLooksValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function limited(ip) {
  const now = Date.now();
  const recent = (requests.get(ip) || []).filter(time => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return true;
  recent.push(now);
  requests.set(ip, recent);
  return false;
}

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }

  const name = clean(body.name);
  const email = clean(body.email);
  const subject = clean(body.subject);
  const message = clean(body.message);
  const website = clean(body.website);

  if (website) return NextResponse.json({ ok: true });
  if (!name || name.length > 100) return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  if (!email || email.length > 254 || !emailLooksValid(email)) return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  if (subject.length > 200) return NextResponse.json({ error: "Invalid subject" }, { status: 400 });
  if (!message || message.length > 5000) return NextResponse.json({ error: "Invalid message" }, { status: 400 });

  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });

  const safe = { name: escapeHtml(name), email: escapeHtml(email), subject: escapeHtml(subject || "No subject"), message: escapeHtml(message).replace(/\n/g, "<br>") };
  const text = `NEW MESSAGE FROM BRANDON WEBSITE\n\nNAME:\n${name}\n\nEMAIL:\n${email}\n\nSUBJECT:\n${subject || "No subject"}\n\nMESSAGE:\n${message}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Brandon Website <onboarding@resend.dev>",
      to: [RECIPIENT],
      reply_to: email,
      subject: `NEW MESSAGE FROM BRANDON WEBSITE${subject ? ` — ${subject}` : ""}`,
      text,
      html: `<h2>NEW MESSAGE FROM BRANDON WEBSITE</h2><p><strong>NAME:</strong><br>${safe.name}</p><p><strong>EMAIL:</strong><br>${safe.email}</p><p><strong>SUBJECT:</strong><br>${safe.subject}</p><p><strong>MESSAGE:</strong><br>${safe.message}</p>`,
    }),
  });

  if (!response.ok) return NextResponse.json({ error: "Email provider rejected the request" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
