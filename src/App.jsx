import React, { useEffect, useState } from "react";
import { ArrowRight, Bell, Car, CheckCircle2, Clock, CloudSun, Mail, MapPin, Menu, PawPrint, Phone, Ticket, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";

// ------------------------------------------------------------ Content (from coloradorenaissance.com)
// Facebook and Instagram links are empty on the current site; add them when the owner confirms the URLs.
const COMPANY = "Colorado Renaissance Festival";
const ABBR = "crf";
const END_DATE = "2026-11-24T23:59:59-07:00";
const PHONE = "(303) 688-6010";
const PHONE_LINK = "tel:+13036886010";
const EMAIL = "crfcrf@coloradorenaissance.com";
const ADDRESS = "650 W. Perry Park Ave., Larkspur, CO 80118";
const MAPS = "https://www.google.com/maps/search/?api=1&query=650+W+Perry+Park+Ave+Larkspur+CO+80118";
const TICKETS = "https://coloradorenaissance.com/tickets/";
const UP = "https://coloradorenaissance.com/wp-content/uploads/";
const LOGO = `${UP}2022/01/colorado-shield-logo.png`;
const SOCIAL = [
  ["X", "https://x.com/corenfest"],
];

const NAV = [["Plan your visit", "#visit"], ["The realm", "#realm"], ["Gallery", "#gallery"], ["Sponsors", "#sponsors"], ["Contact", "#contact"]];

const VISIT = [
  { icon: MapPin, title: "Where", body: "650 W. Perry Park Ave. in Larkspur, about halfway between Denver and Colorado Springs, 25 to 30 minutes from either.", foot: "I-25 exit 173 from Denver · exit 172 from the south" },
  { icon: Clock, title: "When", body: "Eight summer weekends in June 2027. Saturdays and Sundays, 10:00 a.m. to 6:30 p.m. The on-site box office closes at 5:00 p.m.", foot: "Exact 2027 dates announced soon" },
  { icon: Ticket, title: "Tickets", body: "Single-day adult and child (ages 5 to 12) tickets. Children under 5 are free. Buy online through Etix, at the box office, or at King Soopers.", foot: "2027 prices to be announced" },
  { icon: Car, title: "Parking", body: "Free parking, sponsored by King Soopers, with a shuttle from the lot to the gate. Handicap and motorcoach/RV parking available.", foot: "Free · shuttle to the gate" },
  { icon: CloudSun, title: "Rain or shine", body: "The festival runs rain or shine, so bring a hat for the sun and a layer for a foothills afternoon storm.", foot: "All tickets are non-refundable" },
  { icon: PawPrint, title: "Leave pets home", body: "Pets aren't allowed at the festival. An accessibility brochure and photo policy are available from the festival office.", foot: "Questions? Call the office" },
];

const REALM = [
  {
    key: "entertainment",
    label: "Entertainment",
    title: "Stage shows from gate to gate",
    body: "Music, comedy, swordplay and street performers on stages across the village, plus a full slate of kids' activities.",
    tags: ["Stage Shows", "Kids Activities", "Themed Weekends", "Special Events", "Weddings"],
    img: `${UP}2022/04/the-Craic-show-993x1024.jpeg`,
    alt: "The Craic performing on a festival stage",
  },
  {
    key: "feast",
    label: "Food & Drynk",
    title: "Royal eateries and the famous turkey leg",
    body: "Feast your way down the lanes at the Royal Eateries, from smoked turkey legs to the festival's kitchens and taverns.",
    tags: ["Royal Eateries", "Turkey Legs", "Taverns", "Sweets"],
    img: `${UP}2022/02/Turkey-leg-short.jpg`,
    alt: "A smoked turkey leg from the festival kitchen",
  },
  {
    key: "artisans",
    label: "Artisans",
    title: "A marketplace of hand-crafted goods",
    body: "Shop artisans working in leather, metal, wood and more, many of them demonstrating their craft right in their stalls.",
    tags: ["Accessories", "Artwork", "Attractions", "Clothing", "Graphic Art", "Home Goods", "Indulgences", "Jewelry", "Leather", "Metal", "Naturals", "Wood"],
    img: `${UP}2022/03/unicornclothing.jpg`,
    alt: "Hand-made garb in an artisan's shop",
  },
];

const GALLERY = [
  [`${UP}2022/04/CrimsonTrio2.jpg`, "Crimson Trio"],
  [`${UP}2022/04/about-face-painting-683x1024.jpg`, "Face painting"],
  [`${UP}2022/02/reelin-rogues-1024x714.webp`, "Reelin' Rogues"],
  [`${UP}2022/02/kitchen-turkey-short-1024x964.jpg`, "The kitchen"],
  [`${UP}2022/02/the-angels-1.jpg`, "The Angels"],
  [`${UP}2022/02/hullaballo-Henna-1024x1024.jpg`, "Henna"],
];

const SPONSORS = [
  ["King Soopers", `${UP}2023/05/KingS-4C.png`],
  ["Pepsi", `${UP}2024/04/PepsiLogo-150x150.jpeg`],
  ["Coors Light", `${UP}2022/01/coorslight.png`],
  ["FOX31 KDVR", `${UP}2022/01/KDVR-transparent-1-300x169-1.png`],
  ["Circle K", `${UP}2022/01/circle-K.png`],
  ["iHeartMedia", `${UP}2022/01/iheartmedia.jpeg`],
  ["Sunbelt Rentals", `${UP}2024/05/sunbelt-rentals-logo.png`],
  ["CBS Colorado", `${UP}2023/05/CBS-COLORADO-PRIMARY.png`],
];

// ------------------------------------------------------------ Pieces
function Img({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className={`img-fallback ${className}`} role="img" aria-label={alt}><span>{alt}</span></span>;
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

function Shield({ size = "md" }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className={`shield shield-${size}`}>
      {failed
        ? <span className="shield-fallback" aria-label={COMPANY}><b>CRF</b><small>Larkspur</small></span>
        : <img src={LOGO} alt={COMPANY} onError={() => setFailed(true)} />}
    </span>
  );
}

function Pennants() {
  const colors = ["var(--crimson)", "var(--gold)", "var(--forest)", "var(--royal)"];
  return (
    <div className="pennants" aria-hidden="true">
      <svg viewBox="0 0 1200 70" preserveAspectRatio="none">
        <path d="M0 6 Q600 46 1200 6" fill="none" stroke="currentColor" strokeWidth="2" />
        {Array.from({ length: 24 }, (_, i) => {
          const x = 25 + i * 48.5;
          const t = x / 1200;
          const y = 6 + 160 * t * (1 - t);
          return <path key={i} d={`M${x - 16} ${y} L${x + 16} ${y} L${x} ${y + 30} Z`} fill={colors[i % 4]} />;
        })}
      </svg>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
  return (
    <>
      <div className="herald-bar">
        <span>Huzzah! The 50th anniversary season arrives June 2027</span>
        <a href="#notify">Get the dates first <ArrowRight size={14} /></a>
      </div>
      <header className="site-header">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}>
          <Shield size="sm" />
          <span className="brand-text"><b>Colorado</b><span>Renaissance Festival</span></span>
        </a>
        <nav className={open ? "nav open" : "nav"} aria-label="Main">
          {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="btn btn-gold nav-cta" href={TICKETS} target="_blank" rel="noopener noreferrer"><Ticket size={17} /> Tickets</a>
        </nav>
        <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Pennants />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Larkspur, Colorado · Eight summer weekends</p>
          <h1>Fifty summers <em>in the realm.</em></h1>
          <p className="lead">Thank you for an amazing, sold-out 2026. The Colorado Renaissance Festival returns in June 2027 for its 50th anniversary celebration, with stage shows, artisans and royal feasting in the foothills off I-25.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#notify"><Bell size={18} /> Notify me when tickets open</a>
            <a className="btn btn-ghost" href="#visit">Plan your visit</a>
          </div>
          <ul className="hero-facts">
            <li><strong>50th</strong><span>season in 2027</span></li>
            <li><strong>Sat &amp; Sun</strong><span>10 a.m. to 6:30 p.m.</span></li>
            <li><strong>Free</strong><span>parking &amp; shuttle</span></li>
          </ul>
        </div>
        <div className="hero-crest">
          <div className="banner-drop">
            <Shield size="lg" />
            <div className="banner-years"><span>Season</span><i /><span>L</span></div>
            <p>Golden Jubilee</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proclamation() {
  return (
    <section className="proclamation">
      <div className="scroll">
        <span className="seal" aria-hidden="true">50</span>
        <p className="eyebrow dark">A proclamation</p>
        <h2>Hear ye: the 2026 season sold out for the first time in almost five decades.</h2>
        <p>Every gate ticket was spoken for this summer. Next June the gates open on our 50th season, and the best way to get in is to hear about tickets the moment they go on sale.</p>
        <a className="btn btn-crimson" href="#notify">Be first in line <ArrowRight size={17} /></a>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="section visit" id="visit">
      <div className="section-head">
        <p className="eyebrow dark">Plan your visit</p>
        <h2>Everything you need before the drawbridge drops.</h2>
        <p>The answers visitors ask for most, in one place. No digging through last season's pages.</p>
      </div>
      <div className="visit-grid">
        {VISIT.map(({ icon: Icon, title, body, foot }) => (
          <article className="visit-card" key={title}>
            <span className="visit-icon"><Icon size={22} /></span>
            <h3>{title}</h3>
            <p>{body}</p>
            <small>{foot}</small>
          </article>
        ))}
      </div>
      <div className="visit-map">
        <div>
          <h3>Getting here</h3>
          <p>{ADDRESS}</p>
          <p>Coming from Denver, take I-25 south to exit 173. From Colorado Springs, take I-25 north to exit 172. Follow the signs to the free lot and ride the shuttle to the gate.</p>
          <a className="btn btn-crimson" href={MAPS} target="_blank" rel="noopener noreferrer"><MapPin size={17} /> Open in Google Maps</a>
        </div>
        <iframe title="Map to the Colorado Renaissance Festival" src="https://www.google.com/maps?q=650+W+Perry+Park+Ave+Larkspur+CO+80118&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  );
}

function Realm() {
  const [active, setActive] = useState(REALM[0].key);
  const item = REALM.find((r) => r.key === active);
  return (
    <section className="section realm" id="realm">
      <div className="section-head light">
        <p className="eyebrow">The realm</p>
        <h2>Three reasons the whole family comes back every summer.</h2>
      </div>
      <div className="realm-tabs" role="tablist" aria-label="Festival highlights">
        {REALM.map((r) => (
          <button key={r.key} type="button" role="tab" aria-selected={active === r.key} className={active === r.key ? "tab on" : "tab"} onClick={() => setActive(r.key)}>
            {r.label}
          </button>
        ))}
      </div>
      <div className="realm-panel" role="tabpanel">
        <div className="realm-photo"><Img src={item.img} alt={item.alt} /></div>
        <div className="realm-copy">
          <p className="eyebrow">{item.label}</p>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <ul className="tags">{item.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="section-head">
        <p className="eyebrow dark">Scenes from the lanes</p>
        <h2>Performers, kitchens and craftspeople you'll meet.</h2>
      </div>
      <div className="gallery-grid">
        {GALLERY.map(([src, alt]) => (
          <figure key={src}><Img src={src} alt={alt} /><figcaption>{alt}</figcaption></figure>
        ))}
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section className="sponsors" id="sponsors">
      <p className="eyebrow dark">With thanks to our sponsors</p>
      <ul>
        {SPONSORS.map(([name, src]) => <li key={name}><Img src={src} alt={name} /></li>)}
      </ul>
    </section>
  );
}

function NotifyForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "2027 ticket on-sale date", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.message || "Something went wrong.");
      setStatus(result.demo ? "demo" : "sent");
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  if (status === "sent" || status === "demo") {
    return (
      <div className="notify-form done">
        <CheckCircle2 size={44} />
        <h3>{status === "demo" ? "This is where the festival office gets your note." : "You're on the list."}</h3>
        <p>{status === "demo"
          ? `In this concept preview, nothing is sent. On the live site it would reach ${EMAIL}, or feed straight into the festival newsletter.`
          : "We'll send word as soon as 2027 tickets and dates are announced."}</p>
        <button type="button" className="btn btn-crimson" onClick={() => setStatus("idle")}>Back to the form</button>
      </div>
    );
  }

  return (
    <form className="notify-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name<input required value={form.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" /></label>
        <label>Email<input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label>Phone <small>(optional)</small><input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" /></label>
        <label>I'd like to hear about
          <select value={form.interest} onChange={(e) => set("interest", e.target.value)}>
            <option>2027 ticket on-sale date</option>
            <option>Themed weekends</option>
            <option>Group tickets</option>
            <option>Weddings &amp; special events</option>
            <option>Becoming an artisan or performer</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label>Message <small>(optional)</small><textarea rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} /></label>
      <div className="hp" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set("website", e.target.value)} /></label></div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="btn btn-gold wide" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send my raven"}</button>
    </form>
  );
}

function Notify() {
  return (
    <section className="section notify" id="notify">
      <div className="notify-copy" id="contact">
        <p className="eyebrow">Send a raven</p>
        <h2>Get the 2027 dates before anyone else.</h2>
        <p>Leave your email and we'll tell you the moment 50th-season tickets go on sale. Questions about groups, weddings or joining the festival as an artisan go to the same place.</p>
        <ul className="contact-list">
          <li><Phone size={18} /><a href={PHONE_LINK}>{PHONE}</a></li>
          <li><Mail size={18} /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><MapPin size={18} /><a href={MAPS} target="_blank" rel="noopener noreferrer">{ADDRESS}</a></li>
        </ul>
      </div>
      <NotifyForm />
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Shield size="sm" />
          <p><b>{COMPANY}</b><br />Eight summer weekends in Larkspur. Our 50th season begins June 2027.</p>
        </div>
        <div>
          <h4>Visit</h4>
          <a href="#visit">Plan your visit</a>
          <a href={TICKETS} target="_blank" rel="noopener noreferrer">Tickets</a>
          <a href={MAPS} target="_blank" rel="noopener noreferrer">Directions</a>
        </div>
        <div>
          <h4>The realm</h4>
          <a href="#realm">Entertainment</a>
          <a href="#realm">Food &amp; Drynk</a>
          <a href="#realm">Artisans</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={PHONE_LINK}>{PHONE}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <div className="socials">{SOCIAL.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noopener noreferrer">{n}</a>)}</div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Colorado Renaissance Festival · Independent concept · not for official use</span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Proclamation />
        <Visit />
        <Realm />
        <Gallery />
        <Sponsors />
        <Notify />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
