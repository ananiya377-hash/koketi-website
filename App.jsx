import React, { useState } from "react";

const NAV = ["Home", "About", "Services", "Contact"];

const SERVICES = [
  {
    name: "Bookkeeping & financial statements",
    note: "Monthly close, reconciliations, and reports you can actually read.",
    tag: "Ongoing",
  },
  {
    name: "Tax planning & compliance",
    note: "Filings done on time, and a plan that keeps next year's bill lower.",
    tag: "Annual",
  },
  {
    name: "Budgeting & cash flow forecasting",
    note: "A working model of where the money is going, updated as you grow.",
    tag: "Ongoing",
  },
  {
    name: "Audit preparation & support",
    note: "Books organised and reconciled before the auditor ever asks.",
    tag: "Project",
  },
  {
    name: "Business & financial advisory",
    note: "Pricing, hiring, and investment decisions, worked through with the numbers.",
    tag: "Project",
  },
];

function LedgerMark() {
  return (
    <svg viewBox="0 0 220 180" width="100%" height="100%" aria-hidden="true">
      <circle cx="70" cy="90" r="52" fill="var(--green)" opacity="0.18" />
      <circle cx="150" cy="55" r="32" fill="var(--amber)" opacity="0.35" />
      <rect x="38" y="70" width="130" height="14" rx="7" fill="var(--ink)" opacity="0.85" />
      <rect x="38" y="98" width="95" height="14" rx="7" fill="var(--green)" />
      <rect x="38" y="126" width="70" height="14" rx="7" fill="var(--amber)" />
      <circle cx="176" cy="133" r="16" fill="none" stroke="var(--ink)" strokeWidth="2" opacity="0.4" />
      <path d="M170 133 l4 5 l9 -10" stroke="var(--green)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Home({ go }) {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-text">
          <p className="kicker">Hi, we're Koketi — Financial & Accounting Consulting</p>
          <h1>Numbers you can finally feel good about.</h1>
          <p className="lede">
            We keep small and growing businesses on top of their books, their
            taxes, and their next big decision — and we explain all of it in
            plain language, over a real conversation.
          </p>
          <div className="cta-row">
            <button className="btn-primary" onClick={() => go("Contact")}>
              Say hello
            </button>
            <button className="btn-ghost" onClick={() => go("Services")}>
              See what we do
            </button>
          </div>
        </div>
        <div className="hero-mark">
          <LedgerMark />
        </div>
      </section>

      <section className="strip">
        <div className="strip-row">
          <span className="strip-num">12+</span>
          <span className="strip-label">years advising owner-run businesses</span>
        </div>
        <div className="strip-row">
          <span className="strip-num">1</span>
          <span className="strip-label">point of contact, start to finish</span>
        </div>
        <div className="strip-row">
          <span className="strip-num">0</span>
          <span className="strip-label">jargon in the reports you get back</span>
        </div>
      </section>

      <section className="quote-block">
        <p className="quote-text">
          "I used to dread opening my books. Now I actually look forward to
          our monthly call — I finally understand where the money goes."
        </p>
        <p className="quote-attr">— A Koketi client, small retail business</p>
      </section>

      <section className="teaser">
        <h2>Not just a bookkeeper. A second opinion on the business.</h2>
        <p>
          Every engagement starts the same way: we read your books before we
          touch them. Most of what we recommend comes out of that first pass —
          the rest comes from actually knowing your industry.
        </p>
        <button className="text-link" onClick={() => go("About")}>
          Read about how Koketi works
        </button>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <section className="page-head">
        <p className="kicker">About</p>
        <h1>One friendly desk, one client at a time.</h1>
      </section>
      <section className="prose">
        <p>
          Koketi started the way most good consultancies do — with a
          spreadsheet somebody else was afraid to open. Over the years since,
          the work has stayed the same in spirit: sit with a business's actual
          numbers, figure out what they mean, and say so plainly.
        </p>
        <p>
          That means fewer clients, not more of them. Every engagement gets
          the same person from the first meeting to the year-end filing, and
          every report is written to be read by the owner, not just filed by
          an accountant.
        </p>
        <p>
          The firm works across bookkeeping, tax, forecasting, and advisory —
          but the underlying job is always the same: make sure the person
          running the business understands the business.
        </p>
      </section>
      <section className="values">
        <div className="value">
          <span className="value-dot" style={{ background: "var(--green)" }} />
          <h3>Direct</h3>
          <p>If a number is a problem, you hear that in the first sentence, not the last.</p>
        </div>
        <div className="value">
          <span className="value-dot" style={{ background: "var(--amber)" }} />
          <h3>Accountable</h3>
          <p>One consultant owns your file. No hand-offs, no re-explaining your business.</p>
        </div>
        <div className="value">
          <span className="value-dot" style={{ background: "var(--ink)" }} />
          <h3>Grounded</h3>
          <p>Recommendations come from your actual ledger, not a template.</p>
        </div>
      </section>
    </div>
  );
}

function Services({ go }) {
  return (
    <div className="page">
      <section className="page-head">
        <p className="kicker">Services</p>
        <h1>Here's how we can help.</h1>
      </section>
      <div className="ledger">
        {SERVICES.map((s) => (
          <div className="ledger-row" key={s.name}>
            <div className="ledger-main">
              <h3>{s.name}</h3>
              <p>{s.note}</p>
            </div>
            <span className="ledger-tag">{s.tag}</span>
          </div>
        ))}
      </div>
      <section className="teaser">
        <h2>Not sure which of these you need?</h2>
        <p>Most businesses don't. Tell us where things feel unclear and we'll tell you honestly what would help.</p>
        <button className="btn-primary" onClick={() => go("Contact")}>
          Get in touch
        </button>
      </section>
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div className="page">
      <section className="page-head">
        <p className="kicker">Contact</p>
        <h1>We'd love to hear from you.</h1>
      </section>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-row">
            <span className="info-label">Email</span>
            <span className="info-value">hello@koketi.example</span>
          </div>
          <div className="info-row">
            <span className="info-label">Phone</span>
            <span className="info-value">+251 00 000 0000</span>
          </div>
          <div className="info-row">
            <span className="info-label">Office</span>
            <span className="info-value">Addis Ababa, Ethiopia</span>
          </div>
          <div className="info-row">
            <span className="info-label">Hours</span>
            <span className="info-value">Mon–Fri, 9:00–17:00</span>
          </div>
          <p className="info-note">
            Replace these with your real details — they're placeholders for now.
          </p>
        </div>

        <form className="contact-form" onSubmit={submit}>
          {sent ? (
            <div className="sent">
              <h3>Message received.</h3>
              <p>We'll get back to you within one business day.</p>
            </div>
          ) : (
            <>
              <label>
                Name
                <input value={form.name} onChange={update("name")} required />
              </label>
              <label>
                Email
                <input type="email" value={form.email} onChange={update("email")} required />
              </label>
              <label>
                Message
                <textarea rows={5} value={form.message} onChange={update("message")} required />
              </label>
              <button className="btn-primary" type="submit">
                Send message
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");

  const views = { Home, About, Services, Contact };
  const View = views[page];

  return (
    <div className="site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        :root {
          --paper: #FBF4E8;
          --paper-warm: #F4E6CF;
          --ink: #2E241C;
          --green: #3F7D5C;
          --amber: #D98F3B;
          --rule: #E8D8BE;
          --radius: 14px;
          --serif: 'Fraunces', serif;
          --sans: 'IBM Plex Sans', sans-serif;
        }

        * { box-sizing: border-box; }

        .site {
          background: var(--paper);
          color: var(--ink);
          font-family: var(--sans);
          min-height: 100%;
          width: 100%;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 48px;
          border-bottom: 1px solid var(--rule);
        }

        .brand {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          background: none;
          border: none;
          font-family: var(--sans);
          font-size: 15px;
          color: var(--ink);
          cursor: pointer;
          padding: 4px 0;
          position: relative;
          opacity: 0.65;
        }

        .nav-link.active {
          opacity: 1;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 2px;
          background: var(--green);
        }

        .page {
          max-width: 980px;
          margin: 0 auto;
          padding: 72px 48px 96px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 56px;
          align-items: center;
          padding-bottom: 56px;
        }

        .kicker {
          font-family: var(--sans);
          font-size: 14px;
          color: var(--green);
          margin: 0 0 18px;
        }

        h1 {
          font-family: var(--serif);
          font-size: 46px;
          line-height: 1.12;
          font-weight: 600;
          margin: 0 0 20px;
          max-width: 16ch;
        }

        .lede {
          font-size: 17px;
          line-height: 1.6;
          color: rgba(46,36,28,0.75);
          max-width: 46ch;
          margin: 0 0 32px;
        }

        .cta-row {
          display: flex;
          gap: 16px;
        }

        .btn-primary {
          background: var(--green);
          color: var(--paper);
          border: none;
          border-radius: var(--radius);
          padding: 14px 26px;
          font-family: var(--sans);
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .btn-primary:hover { background: #34664C; transform: translateY(-1px); }

        .btn-ghost {
          background: none;
          border: 1px solid var(--rule);
          border-radius: var(--radius);
          padding: 14px 26px;
          font-family: var(--sans);
          font-size: 15px;
          cursor: pointer;
          color: var(--ink);
          transition: border-color 0.15s ease, transform 0.15s ease;
        }

        .btn-ghost:hover { border-color: var(--amber); transform: translateY(-1px); }

        .hero-mark {
          background: var(--paper-warm);
          border-radius: 24px;
          padding: 28px;
        }

        .strip {
          display: flex;
          background: var(--paper-warm);
          border-radius: 20px;
          padding: 32px 40px;
          gap: 56px;
        }

        .quote-block {
          background: var(--green);
          color: var(--paper);
          border-radius: 24px;
          padding: 44px 48px;
          margin-top: 56px;
        }

        .quote-text {
          font-family: var(--serif);
          font-size: 22px;
          line-height: 1.5;
          font-style: italic;
          max-width: 44ch;
          margin: 0 0 16px;
        }

        .quote-attr {
          font-size: 14px;
          opacity: 0.85;
          margin: 0;
        }

        .strip-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .strip-num {
          font-family: var(--serif);
          font-size: 32px;
          font-weight: 600;
          color: var(--green);
        }

        .strip-label {
          font-size: 14px;
          color: rgba(46,36,28,0.65);
          max-width: 20ch;
        }

        .teaser {
          padding-top: 56px;
        }

        .teaser h2 {
          font-family: var(--serif);
          font-size: 28px;
          font-weight: 600;
          margin: 0 0 14px;
          max-width: 24ch;
        }

        .teaser p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(46,36,28,0.75);
          max-width: 52ch;
          margin: 0 0 20px;
        }

        .text-link {
          background: none;
          border: none;
          font-family: var(--sans);
          font-size: 15px;
          font-weight: 500;
          color: var(--green);
          cursor: pointer;
          padding: 0;
          border-bottom: 1px solid var(--green);
        }

        .page-head { padding-bottom: 40px; }
        .page-head h1 { font-size: 38px; max-width: 20ch; }

        .prose p {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(46,36,28,0.8);
          max-width: 58ch;
          margin: 0 0 18px;
        }

        .values {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }

        .value {
          background: var(--paper-warm);
          border-radius: 18px;
          padding: 28px 24px;
        }

        .value-dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-bottom: 14px;
        }

        .value h3 {
          font-family: var(--serif);
          font-size: 19px;
          margin: 0 0 8px;
        }

        .value p {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(46,36,28,0.7);
          margin: 0;
        }

        .ledger {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ledger-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          padding: 24px 28px;
          background: var(--paper-warm);
          border-radius: 16px;
          transition: transform 0.15s ease;
        }

        .ledger-row:hover {
          transform: translateY(-2px);
        }

        .ledger-main h3 {
          font-family: var(--serif);
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 8px;
        }

        .ledger-main p {
          font-size: 15px;
          line-height: 1.55;
          color: rgba(46,36,28,0.7);
          max-width: 48ch;
          margin: 0;
        }

        .ledger-tag {
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
          background: rgba(255,255,255,0.6);
          border-radius: 999px;
          padding: 6px 14px;
          white-space: nowrap;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
        }

        .contact-info {
          background: var(--paper-warm);
          border-radius: 18px;
          padding: 28px 32px;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 14px 0;
          border-bottom: 1px solid var(--rule);
        }

        .info-row:last-of-type {
          border-bottom: none;
        }

        .info-label {
          font-size: 14px;
          color: rgba(46,36,28,0.55);
        }

        .info-value {
          font-size: 14px;
          font-weight: 500;
        }

        .info-note {
          font-size: 13px;
          color: rgba(46,36,28,0.5);
          margin-top: 18px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 14px;
          color: rgba(46,36,28,0.7);
        }

        .contact-form input,
        .contact-form textarea {
          font-family: var(--sans);
          font-size: 15px;
          padding: 12px 14px;
          border: 1px solid var(--rule);
          border-radius: 10px;
          background: white;
          color: var(--ink);
          resize: vertical;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: 2px solid var(--green);
          outline-offset: 1px;
        }

        .contact-form button {
          align-self: flex-start;
          margin-top: 4px;
        }

        .sent {
          background: var(--paper-warm);
          border-radius: 16px;
          padding: 28px 32px;
        }

        .sent h3 {
          font-family: var(--serif);
          font-size: 22px;
          margin: 0 0 8px;
          color: var(--green);
        }

        .sent p {
          font-size: 15px;
          color: rgba(46,36,28,0.7);
          margin: 0;
        }

        @media (max-width: 720px) {
          .nav { padding: 20px 24px; }
          .nav-links { gap: 18px; }
          .page { padding: 48px 24px 64px; }
          .hero { grid-template-columns: 1fr; }
          .values { grid-template-columns: 1fr; }
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          h1 { font-size: 34px; }
        }
      `}</style>

      <nav className="nav">
        <span className="brand">Koketi</span>
        <div className="nav-links">
          {NAV.map((n) => (
            <button
              key={n}
              className={`nav-link ${page === n ? "active" : ""}`}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}
        </div>
      </nav>

      <View go={setPage} />
    </div>
  );
}
