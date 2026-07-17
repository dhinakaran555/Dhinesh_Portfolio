"use client";
import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
const SKILLS = [
  { name: "React & Next.js", pct: 90, icon: "⚛" },
  { name: "HTML", pct: 98, icon: "ht" },
  { name: "Tailwind CSS", pct: 96, icon: "✦" },
  { name: "UI / Figma", pct: 78, icon: "◈" },
];

const PROJECTS = [
  {
    id: 1,
    num: "01",
    title: "Presento Template",
    sub: "SaaS Analytics",
    desc: "Real-time analytics platform with custom charting, role-based access, and a dark/light token system shared with Figma.",
    tags: ["HTML5", "CSS3", "BOOTSTRAP"],
    accent: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    id: 2,
    num: "02",
    title: "Verdant Store",
    sub: "E-Commerce",
    desc: "End-to-end commerce experience with Stripe Checkout, Sanity CMS, instant search, and sub-100ms page loads on Vercel Edge.",
    tags: ["Next.js", "Stripe", "Sanity", "Edge"],
    accent: "#0284C7",
    bg: "#F0F9FF",
  },
  {
    id: 3,
    num: "03",
    title: "Orbit UI Kit",
    sub: "Design System",
    desc: "40+ accessible components built on Radix primitives, documented in Storybook, published to npm, and used across 3 products.",
    tags: ["Radix UI", "Storybook", "CVA", "ARIA"],
    accent: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    id: 4,
    num: "04",
    title: "Pulse Social",
    sub: "Real-time App",
    desc: "Live social feed using WebSockets for instant updates, optimistic UI with Zustand, and infinite scroll with virtual lists.",
    tags: ["Socket.io", "Zustand", "React Query", "Vite"],
    accent: "#0369A1",
    bg: "#F0F9FF",
  },
];

const TOOLS = [
  "React",
  "Next.js",
  "Javascript",
  "Tailwind CSS",
  "Bootstrap",
  "Html 5",
  "CSS 3",
  "Figma",
  "Adobe Photoshop",
  "Scss",
];
const submit = (e) => {
  e.preventDefault();
  emailjs
    .send(
      "service_h6t3e0i",
      "YOUR_TEMPLATE_ID",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.msg,
      },
      "YOUR_PUBLIC_KEY"
    )
    .then(
      (result) => {
        console.log("Message sent!", result.text);
        setSent(true);
      },
      (error) => {
        console.log("Error:", error.text);
      }
    );
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Counter({ to }) {
  const [val, setVal] = useState(0);
  const [ref, vis] = useInView(0.5);
  const done = useRef(false);
  useEffect(() => {
    if (!vis || done.current) return;
    done.current = true;
    let n = 0;
    const step = to / 50;
    const t = setInterval(() => {
      n = Math.min(n + step, to);
      setVal(Math.round(n));
      if (n >= to) clearInterval(t);
    }, 20);
  }, [vis, to]);
  return <span ref={ref}>{val}</span>;
}

function SkillRow({ skill, delay }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} className="flex items-center gap-4 group">
      <span className="w-8 text-center text-xs font-mono text-blue-400 font-semibold shrink-0">
        {skill.icon}
      </span>
      <div className="flex-1">
        <div className="flex justify-between mb-1.5">
          <span className="text-sm font-medium text-slate-700">
            {skill.name}
          </span>
          <span className="text-xs font-mono text-blue-500">{skill.pct}%</span>
        </div>
        <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all ease-out duration-1000"
            style={{
              width: vis ? `${skill.pct}%` : "0%",
              transitionDelay: `${delay}ms`,
              background: "linear-gradient(90deg, #93C5FD, #2563EB)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [nav, setNav] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [isMobile, SetIsMobile] = useState(true);

  useEffect(() => {
    const onScroll = () => setNav(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", msg: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <>
      <style>{`
        @import url('${FONT_LINK}');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; background: #F8FAFF;}

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scaleIn { from{opacity:0;transform:scale(.94)} to{opacity:1;transform:scale(1)} }
        @keyframes spinSlow { to{transform:rotate(360deg)} }
        @keyframes blob { 0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%} 50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%} }

        .anim-fade   { animation: fadeUp .7s ease both; }
        .anim-scale  { animation: scaleIn .7s ease both; }
        .float-anim  { animation: float 4s ease-in-out infinite; }
        .spin-slow   { animation: spinSlow 18s linear infinite; }
        .blob-anim   { animation: blob 8s ease-in-out infinite; }

        .hero-bg {
          background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 40%, #E0F2FE 70%, #F0F9FF 100%) px-4;
        }
        .card-hover {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px -10px rgba(37,99,235,.14);
        }
        .btn-primary {
          background: linear-gradient(135deg, #3B82F6, #2563EB);
          box-shadow: 0 4px 20px rgba(37,99,235,.35);
          transition: transform .2s, box-shadow .2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(37,99,235,.45);
        }
        .tag-chip {
          background: rgba(219,234,254,.7);
          color: #1D4ED8;
          border: 1px solid rgba(147,197,253,.6);
          font-family: 'DM Mono', monospace;
          font-size: .7rem;
          padding: .2rem .7rem;
          border-radius: 99px;
        }
        .input-field {
          width: 100%;
          background: white;
          border: 1.5px solid #BFDBFE;
          border-radius: 12px;
          padding: .75rem 1rem;
          font-size: .875rem;
          color: #1e3a5f;
          outline: none;
          transition: border-color .2s, box-shadow .2s;

        }
        .input-field:focus { border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,.12); }
        .input-field::placeholder { color: #93C5FD; }
        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: .7rem;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #3B82F6;
        }
      `}</style>

      <div
        style={{ background: "#F8FAFF", minHeight: "100vh", color: "#1e3a5f" }}
      >
        <header className="relative z-10 md:px-[100px]">
          <div className="flex items-center justify-between mx-auto p-4">
            <div className="font-bold text-xl">DK</div>

            <nav className="hidden md:flex gap-10 items-center">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-blue-700 font-medium hover:text-blue-900"
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                className="bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold"
              >
                Hire Me
              </a>
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-blue-700"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>

          <div
            className={`md:hidden absolute left-0 top-full w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
              mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 border-b text-blue-700"
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-4 text-center bg-blue-700 text-white py-3 rounded-lg"
              >
                Hire Me
              </a>
            </div>
          </div>
        </header>

        <section
          id="home"
          className="hero-bg"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            // paddingTop: 80,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            className="blob-anim"
            style={{
              position: "absolute",
              top: "10%",
              right: "5%",
              width: 420,
              height: 420,
              background: "rgba(147,197,253,.25)",
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />
          <div
            className="blob-anim"
            style={{
              position: "absolute",
              bottom: "10%",
              left: "5%",
              width: 300,
              height: 300,
              background: "rgba(186,230,255,.3)",
              filter: "blur(50px)",
              zIndex: 0,
              animationDelay: "3s",
            }}
          />

          <div
            className="spin-slow"
            style={{
              position: "absolute",
              top: "12%",
              right: "8%",
              width: 380,
              height: 380,
              border: "1.5px dashed rgba(147,197,253,.4)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(12% + 40px)",
              right: "calc(8% + 40px)",
              width: 300,
              height: 300,
              border: "1px solid rgba(191,219,254,.3)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          />

          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "5rem 1.5rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
              width: "100%",
            }}
            className="hero-grid"
          >
            <style>{`.hero-grid { grid-template-columns: 1fr 1fr !important; } @media(max-width:768px){ .hero-grid { grid-template-columns: 1fr !important; } .hero-img-col { order: -1; } }`}</style>

            {/* text */}
            <div>
              <div className="anim-fade" style={{ animationDelay: ".1s" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: ".5rem",
                    background: "rgba(219,234,254,.7)",
                    border: "1px solid #BFDBFE",
                    borderRadius: 99,
                    padding: ".35rem 1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#22C55E",
                      display: "inline-block",
                      animation: "pulse 1.5s infinite",
                    }}
                  />
                  <span
                    className="mono"
                    style={{
                      fontSize: ".72rem",
                      color: "#2563EB",
                      letterSpacing: ".1em",
                    }}
                  >
                    AVAILABLE FOR WORK
                  </span>
                </span>
              </div>

              <h1
                className="serif anim-fade"
                style={{
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  lineHeight: 1.08,
                  fontWeight: 900,
                  marginBottom: ".5rem",
                  animationDelay: ".2s",
                  color: "#0F2B5B",
                }}
              >
                Hello, I'm
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #0EA5E9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Dhinakaran R
                </span>
              </h1>

              <p
                className="anim-fade"
                style={{
                  fontSize: "1.15rem",
                  color: "#3B82F6",
                  fontWeight: 500,
                  marginBottom: "1.25rem",
                  animationDelay: ".3s",
                }}
              >
                Frontend Developer - 2 Years Experience
              </p>

              <p
                className="anim-fade"
                style={{
                  color: "#4B6D99",
                  lineHeight: 1.75,
                  fontSize: ".97rem",
                  maxWidth: 460,
                  marginBottom: "2.5rem",
                  animationDelay: ".4s",
                }}
              >
                I build beautiful, fast, and accessible web experiences using
                React, Next.js, and Tailwind CSS. From polished UI components to
                full-stack products — I turn designs into reality.
              </p>

              <div
                className="anim-fade"
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  animationDelay: ".5s",
                }}
              >
                <a
                  href="#projects"
                  className="btn-primary"
                  style={{
                    color: "white",
                    padding: ".8rem 2rem",
                    borderRadius: 99,
                    fontSize: ".9rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  View My Work →
                </a>
                <a
                  href="/Dinakaran Resume.pdf"
                  download="Dinakaran_Resume.pdf"
                  style={{
                    color: "#2563EB",
                    padding: ".8rem 2rem",
                    borderRadius: 99,
                    fontSize: ".9rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "1.5px solid #BFDBFE",
                    background: "white",
                    display: "inline-block",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "#2563EB";
                    e.target.style.background = "#EFF6FF";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "#BFDBFE";
                    e.target.style.background = "white";
                  }}
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* avatar */}
            <div
              className="hero-img-col"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative" }} className="float-anim">
                <div />
                <div />

                <div
                  style={{
                    width: 280,
                    height: 280,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #DBEAFE, #EFF6FF, #E0F2FE)",
                    border: "4px solid white",
                    boxShadow:
                      "0 20px 60px rgba(37,99,235,.2), 0 0 0 1px rgba(147,197,253,.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "5rem",
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: 900,
                    color: "#2563EB",
                    letterSpacing: "-.04em",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div />
                  <span style={{ position: "relative", zIndex: 1 }}>
                    <img src="/Dhinakaran.png" alt="img" />
                  </span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: -60,
                    background: "white",
                    border: "1.5px solid #BFDBFE",
                    borderRadius: 12,
                    padding: ".5rem .85rem",
                    boxShadow: "0 8px 24px rgba(37,99,235,.12)",
                    whiteSpace: "nowrap",
                    zIndex: 111,
                  }}
                >
                  <p
                    className="mono"
                    style={{ fontSize: ".68rem", color: "#93C5FD" }}
                  >
                    stack
                  </p>
                  <p
                    style={{
                      fontSize: ".8rem",
                      fontWeight: 600,
                      color: "#1D4ED8",
                    }}
                  >
                    Next.js · Tailwind
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: -55,
                    background: "white",
                    border: "1.5px solid #BFDBFE",
                    borderRadius: 12,
                    padding: ".5rem .85rem",
                    boxShadow: "0 8px 24px rgba(37,99,235,.12)",
                    whiteSpace: "nowrap",
                    zIndex: 111,
                  }}
                >
                  <p
                    className="mono"
                    style={{ fontSize: ".68rem", color: "#93C5FD" }}
                  >
                    experience
                  </p>
                  <p
                    style={{
                      fontSize: ".8rem",
                      fontWeight: 600,
                      color: "#1D4ED8",
                    }}
                  >
                    2 Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          style={{ padding: "7rem 1.5rem", background: "white" }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
            className="two-col"
          >
            <style>{`@media(max-width:768px){ .two-col { grid-template-columns:1fr !important; gap:3rem !important; } }`}</style>

            {/* timeline */}
            <div>
              <p className="section-label" style={{ marginBottom: ".75rem" }}>
                // experience
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem,3vw,2.8rem)",
                  fontWeight: 900,
                  marginBottom: "2.5rem",
                  color: "#0F2B5B",
                  lineHeight: 1.15,
                }}
              >
                My Journey So Far
              </h2>

              <div style={{ position: "relative", paddingLeft: "2rem" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 8,
                    bottom: 8,
                    width: 2,
                    background: "linear-gradient(to bottom, #3B82F6, #BFDBFE)",
                  }}
                />

                {[
                  {
                    role: "Frontend Developer",
                    company: "Starhealth and Allied Insurance Pvt Ltd",
                    period: "Nov 2024 — Present",
                  },
                  {
                    role: "Graphic Designer",
                    company: "Saas Mantra",
                    period: "Jul 2024 — Sep 2024",
                  },
                  {
                    role: "Store Assistant",
                    company: "Team infotech",
                    period: "2018 — 2022",
                  },
                ].map((x, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: "2rem",
                      paddingLeft: "1.5rem",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: -2.5,
                        top: 6,
                        width: 11,
                        height: 11,
                        borderRadius: "50%",
                        background: "#3B82F6",
                        border: "2px solid white",
                        boxShadow: "0 0 0 2px #BFDBFE",
                      }}
                    />
                    <div
                      style={{
                        background: "#F8FAFF",
                        border: "1.5px solid #DBEAFE",
                        borderRadius: 14,
                        padding: "1.1rem 1.25rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: ".5rem",
                          flexWrap: "wrap",
                          marginBottom: ".25rem",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 700,
                            color: "#0F2B5B",
                            fontSize: ".9rem",
                          }}
                        >
                          {x.role}
                        </span>
                        <span
                          className="mono"
                          style={{ fontSize: ".68rem", color: "#7BA4CF" }}
                        >
                          {x.period}
                        </span>
                      </div>
                      <p
                        style={{
                          color: "#3B82F6",
                          fontSize: ".78rem",
                          fontWeight: 600,
                          marginBottom: ".4rem",
                        }}
                      >
                        {x.company}
                      </p>
                      <p
                        style={{
                          color: "#4B6D99",
                          fontSize: ".82rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {x.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* about text + values */}
            <div>
              <p className="section-label" style={{ marginBottom: ".75rem" }}>
                // about me
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem,3vw,2.8rem)",
                  fontWeight: 900,
                  marginBottom: "1.5rem",
                  color: "#0F2B5B",
                  lineHeight: 1.15,
                }}
              >
                Crafting Interfaces
                <br />
                People Love
              </h2>
              <p
                style={{
                  color: "#4B6D99",
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                  fontSize: ".95rem",
                }}
              >
                I'm a frontend developer with 2 years of professional experience
                building modern web applications. I care deeply about
                performance, accessibility, and visual polish — because great
                products need all three.
              </p>
              <p
                style={{
                  color: "#4B6D99",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                  fontSize: ".95rem",
                }}
              >
                When I'm not writing code, I'm studying design systems,
                contributing to open source, or exploring the latest in the
                React ecosystem.
              </p>

              {/* value cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: ".85rem",
                }}
              ></div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          style={{
            padding: "7rem 1.5rem",
            background: "linear-gradient(180deg, #EFF6FF 0%, #F8FAFF 100%)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p className="section-label" style={{ marginBottom: ".75rem" }}>
                // skills
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem,3vw,2.8rem)",
                  fontWeight: 900,
                  color: "#0F2B5B",
                }}
              >
                What I Work With
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
              }}
              className="two-col"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {SKILLS.map((s, i) => (
                  <SkillRow key={s.name} skill={s} delay={i * 100} />
                ))}
              </div>

              {/* tools grid */}
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#0F2B5B",
                    marginBottom: "1.25rem",
                    fontSize: ".9rem",
                  }}
                >
                  Tools & Technologies
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: ".65rem" }}
                >
                  {TOOLS.map((t) => (
                    <span
                      key={t}
                      className="card-hover"
                      style={{
                        background: "white",
                        border: "1.5px solid #BFDBFE",
                        borderRadius: 10,
                        padding: ".5rem .9rem",
                        fontSize: ".78rem",
                        color: "#1D4ED8",
                        fontWeight: 500,
                        cursor: "default",
                        display: "flex",
                        alignItems: "center",
                        gap: ".4rem",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#93C5FD",
                          display: "inline-block",
                        }}
                      />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          style={{ padding: "7rem 1.5rem", background: "white" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p className="section-label" style={{ marginBottom: ".75rem" }}>
                // projects
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem,3vw,2.8rem)",
                  fontWeight: 900,
                  color: "#0F2B5B",
                  marginBottom: ".75rem",
                }}
              >
                Featured Work
              </h2>
              <p style={{ color: "#7BA4CF", fontSize: ".95rem" }}>
                A selection of projects I've built and shipped.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.5rem",
              }}
              className="proj-grid"
            >
              <style>{`@media(max-width:640px){ .proj-grid { grid-template-columns:1fr !important; } }`}</style>

              {PROJECTS.map((p, i) => (
                <div
                  key={p.id}
                  className="card-hover"
                  style={{
                    background: p.bg,
                    border: "1.5px solid",
                    borderColor: `${p.accent}22`,
                    borderRadius: 20,
                    padding: "2rem",
                    position: "relative",
                    overflow: "hidden",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {/* big number bg */}
                  <span
                    className="serif"
                    style={{
                      position: "absolute",
                      top: -10,
                      right: 16,
                      fontSize: "6rem",
                      fontWeight: 900,
                      color: `${p.accent}0D`,
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {p.num}
                  </span>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1.1rem",
                    }}
                  >
                    <div>
                      <p
                        className="mono"
                        style={{
                          fontSize: ".68rem",
                          color: p.accent,
                          marginBottom: ".35rem",
                          letterSpacing: ".1em",
                        }}
                      >
                        {p.sub.toUpperCase()}
                      </p>
                      <h3
                        className="serif"
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 900,
                          color: "#0F2B5B",
                          lineHeight: 1.2,
                        }}
                      >
                        {p.title}
                      </h3>
                    </div>
                    <span
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: `${p.accent}14`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                        color: p.accent,
                        border: `1px solid ${p.accent}22`,
                      }}
                    >
                      ↗
                    </span>
                  </div>

                  <p
                    style={{
                      color: "#4B6D99",
                      fontSize: ".875rem",
                      lineHeight: 1.7,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {p.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: ".5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: `${p.accent}12`,
                          color: p.accent,
                          border: `1px solid ${p.accent}25`,
                          borderRadius: 99,
                          fontSize: ".68rem",
                          padding: ".22rem .7rem",
                          fontFamily: "'DM Mono',monospace",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-8">
                    <a
                      href="https://github.com/dhinakaran555/presento-template"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: ".4rem",
                        color: p.accent,
                        fontSize: ".82rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        borderBottom: `1.5px solid ${p.accent}40`,
                        paddingBottom: "1px",
                        transition: "gap .2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.gap = ".7rem")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.gap = ".4rem")
                      }
                    >
                      View Project <span>→</span>
                    </a>
                    <a
                      href="https://dhinakaran555.github.io/presento-template/"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: ".4rem",
                        color: p.accent,
                        fontSize: ".82rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        borderBottom: `1.5px solid ${p.accent}40`,
                        paddingBottom: "1px",
                        transition: "gap .2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.gap = ".7rem")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.gap = ".4rem")
                      }
                    >
                      Live Demo <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <a
                href="https://github.com/dhinakaran555"
                target="_blank"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".5rem",
                  color: "#3B82F6",
                  fontSize: ".875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderBottom: "1.5px solid #BFDBFE",
                  paddingBottom: "2px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.01 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                See more on GitHub
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          style={{
            padding: "7rem 1.5rem",
            background: "linear-gradient(135deg, #EFF6FF, #E0F2FE, #F8FAFF)",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p className="section-label" style={{ marginBottom: ".75rem" }}>
                // contact
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem,3vw,2.8rem)",
                  fontWeight: 900,
                  color: "#0F2B5B",
                  marginBottom: ".75rem",
                }}
              >
                Let's Work Together
              </h2>
              <p
                style={{
                  color: "#7BA4CF",
                  maxWidth: 420,
                  margin: "0 auto",
                  fontSize: ".95rem",
                  lineHeight: 1.7,
                }}
              >
                I'm currently open to new opportunities. Whether it's a
                full-time role, freelance project, or just a chat — reach out!
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.6fr",
                gap: "3rem",
              }}
              className="two-col"
            >
              {/* info */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {[
                  {
                    icon: "✉️",
                    label: "Email",
                    val: "dhineshkrishnan94@gmail.com",
                  },
                  {
                    icon: "/maps-and-flags-pin-svgrepo-com.svg",
                    label: "Location",
                    val: "Chennai",
                  },
                ].map((x) => (
                  <div
                    key={x.label}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      background: "white",
                      border: "1.5px solid #DBEAFE",
                      borderRadius: 14,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    {x.icon.startsWith("/") ? (
                      <img src={x.icon} alt={x.label} width={20} height={20} />
                    ) : (
                      <span style={{ fontSize: "1.2rem" }}>{x.icon}</span>
                    )}
                    <div>
                      <p
                        style={{
                          fontSize: ".7rem",
                          color: "#93C5FD",
                          textTransform: "uppercase",
                          letterSpacing: ".1em",
                          marginBottom: ".2rem",
                        }}
                      >
                        {x.label}
                      </p>
                      <p
                        style={{
                          fontWeight: 600,
                          color: "#1D4ED8",
                          fontSize: ".875rem",
                        }}
                      >
                        {x.val}
                      </p>
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #0EA5E9)",
                    borderRadius: 16,
                    padding: "1.5rem",
                    color: "white",
                    marginTop: ".5rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: ".5rem",
                    }}
                  >
                    Download CV
                  </p>
                  <p
                    style={{
                      fontSize: ".8rem",
                      opacity: 0.8,
                      lineHeight: 1.6,
                      marginBottom: "1rem",
                    }}
                  >
                    Get a full overview of my experience and skills.
                  </p>
                  <a
                    href="/Dinakaran Resume.pdf/"
                    download="My_Resume.pdf"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: ".4rem",
                      background: "rgba(255,255,255,.2)",
                      border: "1px solid rgba(255,255,255,.3)",
                      borderRadius: 99,
                      padding: ".5rem 1.1rem",
                      color: "white",
                      fontSize: ".8rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    ↓ Resume.pdf
                  </a>
                </div>
              </div>

              {/* form */}
              <form
                onSubmit={submit}
                style={{
                  background: "white",
                  border: "1.5px solid #DBEAFE",
                  borderRadius: 20,
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.1rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                  className="form-grid"
                >
                  <style>{`@media(max-width:480px){ .form-grid { grid-template-columns:1fr !important; } }`}</style>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: ".72rem",
                        color: "#7BA4CF",
                        textTransform: "uppercase",
                        letterSpacing: ".1em",
                        marginBottom: ".5rem",
                      }}
                    >
                      Name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: ".72rem",
                        color: "#7BA4CF",
                        textTransform: "uppercase",
                        letterSpacing: ".1em",
                        marginBottom: ".5rem",
                      }}
                    >
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: ".72rem",
                      color: "#7BA4CF",
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                      marginBottom: ".5rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="input-field"
                    style={{ resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    color: "white",
                    padding: ".9rem",
                    borderRadius: 12,
                    fontSize: ".9rem",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: ".02em",
                    background: sent
                      ? "linear-gradient(135deg,#22C55E,#16A34A)"
                      : undefined,
                    boxShadow: sent
                      ? "0 4px 20px rgba(34,197,94,.35)"
                      : undefined,
                  }}
                >
                  {sent ? "✓ Message Sent!" : "Send Message →"}
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer
          style={{
            background: "#0F2B5B",
            color: "rgba(255,255,255,.5)",
            padding: "2.5rem 1.5rem",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p style={{ fontSize: ".78rem" }}>
              All copy Rights Reserved By Dhinakaran {new Date().getFullYear()}
            </p>
            {/* <a
              href="#home"
              style={{
                color: "#93C5FD",
                fontSize: ".8rem",
                textDecoration: "none",
              }}
            >
              Back to top ↑
            </a> */}
          </div>
        </footer>
      </div>
    </>
  );
}
