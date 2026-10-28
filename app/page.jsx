"use client";

import { useState, useEffect } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  CreditCard,
  Cpu,
  Database,
  ExternalLink,
  GraduationCap,
  Layers3,
  Lock,
  Mail,
  Menu,
  Server,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Users,
  Workflow,
  X,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Custom Software",
    text: "Thoughtful, maintainable applications designed around your business goals.",
    tags: ["Web apps", "Backend systems"],
  },
  {
    icon: Layers3,
    number: "02",
    title: "API & Backend",
    text: "Reliable APIs and services built for performance, clarity, and future growth.",
    tags: ["Go & Java", "REST APIs"],
  },
  {
    icon: Cloud,
    number: "03",
    title: "Cloud & DevOps",
    text: "Practical cloud deployments and streamlined delivery workflows for your team.",
    tags: ["AWS", "CI/CD"],
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Quality Engineering",
    text: "Test automation and API validation to help your product ship with confidence.",
    tags: ["API testing", "Automation"],
  },
];

const steps = [
  ["01", "Discover", "We learn about your goals, users, and constraints."],
  ["02", "Design", "We agree on a practical plan and clear milestones."],
  ["03", "Build", "We develop in focused iterations and share progress."],
  ["04", "Deliver", "We test, document, and prepare your solution to launch."],
];

const portfolioProjects = [
  {
    id: "ecommerce",
    name: "Tiamo Diamonds",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    bannerClass: "banner-ecommerce",
    icon: ShoppingCart,
    statusBadge: "Enterprise Live",
    subtitle: "Luxury Diamond & Fine Jewelry Commerce Platform",
    description: "High-ticket luxury jewelry commerce platform featuring 360° certified diamond inspect, real-time vault inventory synchronization, and bespoke ring builder.",
    features: [
      "Real-time diamond vault inventory with GIA certificate sync",
      "Interactive 360° stone visualizer & custom ring customizer",
      "Secure high-limit payment gateway with escrow & multi-currency",
    ],
    techStack: ["Laravel", "Mysql", "Redis", "Paypal API", "FedX Api", "React", "AWS"],
    challenge: "High-value luxury diamond purchases required flawless 360° visual inspection, real-time GIA certificate verification, and high-concurrency fraud prevention without checkout latency.",
    solution: "We engineered a headless luxury commerce architecture with real-time vault inventory locking, CDN-accelerated 3D diamond renders, and bank-grade secure checkout.",
    results: "+220% digital luxury sales conversion, zero fraud chargebacks, and 99.99% vault inventory accuracy.",
  },
  {
    id: "school",
    name: "Assistanto",
    category: "school",
    categoryLabel: "School Management",
    bannerClass: "banner-school",
    icon: GraduationCap,
    statusBadge: "Production Deployed",
    subtitle: "K-12 & Higher-Ed Digital Campus Suite",
    description: "Cloud-native institutional operations suite managing 50,000+ active students, automated biometric attendance, fee billing, and parent-teacher collaboration.",
    features: [
      "Automated timetable generator with clash prevention",
      "Real-time RFID student attendance with instant SMS alerts",
      "Tuition fee billing portal with automated recurring receipts",
    ],
    techStack: ["React", "Laravel", "Mysql", "AWS S3 ,EC2,SES", "FireBase", "Docker"],
    challenge: "Fragmented legacy systems resulted in delayed attendance reporting, complex fee collection reconciliations, and poor communication between faculty and parents.",
    solution: "Designed a consolidated multi-branch platform featuring role-based portals, automated grading rubrics, payment gateway integrations, and instant parent push notifications.",
    results: "94% reduction in manual clerical effort and 100% reconciliation accuracy across 5 campuses.",
  },
  {
    id: "booking",
    name: "Nature Camp Retreat",
    category: "booking",
    categoryLabel: "Resort & Retreat Booking",
    bannerClass: "banner-booking",
    icon: Calendar,
    statusBadge: "Live Booking Platform",
    subtitle: "Resort Reservation & Nature Retreat Management Platform",
    description: "Resort and nature camp booking website featuring accommodation reservations, availability management, seasonal pricing, booking confirmations, and seamless guest reservation experiences.",
    features: [
      "Resort and campsite booking with real-time room and accommodation availability",
      "Date-based reservations with seasonal pricing, guest details, and booking management",
      "Automated booking confirmations, cancellation updates, and guest notifications",
    ],
    techStack: ["Laravel", "React.js", "Firebase", "PayPal Payment Gateway"],
    challenge: "Managing resort reservations manually made it difficult to track accommodation availability, handle guest bookings efficiently, and prevent overlapping reservations during peak seasons.",
    solution: "Developed a user-friendly resort booking website with centralized reservation management, availability tracking, streamlined booking workflows, and automated guest notifications.",
    results: "Simplified resort reservation management, improved the guest booking experience, and enabled more efficient handling of accommodation availability and bookings.",
  },
  {
    id: "social",
    name: "PulseWave Community",
    category: "social",
    categoryLabel: "Social Platform",
    bannerClass: "banner-social",
    icon: Users,
    statusBadge: "Production Live",
    subtitle: "Creator Network & Real-Time Engagement Engine",
    description: "Next-gen social engagement network featuring algorithmic interest feeds, live audio stages, encrypted direct messaging, and creator monetization.",
    features: [
      "Low-latency live interactive audio rooms powered by WebRTC",
      "Algorithmic feed ranking with vector recommendation",
      "Creator monetization passes, digital tipping, and storefronts",
    ],
    techStack: ["React", "Python / FastAPI", "Apache Kafka", "Cassandra", "WebSockets", "AWS"],
    challenge: "Surges of viral content generated massive spikes in concurrent websocket events, causing latency degradation and message dropouts.",
    solution: "Constructed an event-driven architecture using Kafka message streaming and Cassandra for high-volume write scalability and sub-second broadcast.",
    results: "Successfully scaled to 1.8M MAU with 35ms median event delivery latency and 99.98% platform uptime.",
  },
  {
    id: "fintech",
    name: "ApexPay Ledger & Gateway",
    category: "fintech",
    categoryLabel: "Fintech & Payments",
    bannerClass: "banner-fintech",
    icon: CreditCard,
    statusBadge: "PCI-DSS Level 1",
    subtitle: "Bank-Grade Payment Orchestration & Wallet",
    description: "Bank-grade payment orchestrator with automated double-entry ledger bookkeeping, real-time KYC validation, and multi-currency routing.",
    features: [
      "Mathematically balanced double-entry ledger with audit trail",
      "Dynamic multi-acquirer smart routing to minimize decline rates",
      "Automated AML sanctions screening and biometric KYC verification",
    ],
    techStack: ["Java / Spring Boot", "Go", "PostgreSQL", "AWS KMS", "Docker", "Redis"],
    challenge: "Frequent payment gateway outages and complex multi-currency reconciliation across borders caused customer churn and inflated transaction fees.",
    solution: "Implemented an immutable double-entry ledger with automated failover smart routing and hardware-secured cryptographic key management.",
    results: "$280M+ in cumulative transactions processed with 99.999% uptime and an 18% reduction in gateway interchange fees.",
  },
  {
    id: "saas",
    name: "CloudPulse B2B SaaS",
    category: "saas",
    categoryLabel: "B2B SaaS Platform",
    bannerClass: "banner-saas",
    icon: Cpu,
    statusBadge: "Enterprise Deployed",
    subtitle: "Multi-Tenant Workflow & API Observability Suite",
    description: "Multi-tenant cloud operations and workflow orchestration suite with granular role-based access control (RBAC), usage metering, and real-time alerts.",
    features: [
      "Enterprise RBAC with SAML 2.0 / Okta / Azure AD single sign-on",
      "Sub-second analytics on billions of telemetry records via ClickHouse",
      "Usage-based tiered subscription billing and automated webhook web",
    ],
    techStack: ["Next.js", "TypeScript", "ClickHouse", "Python / Celery", "Redis", "Stripe Billing"],
    challenge: "Enterprise clients required strict tenant isolation, SOC2 compliance auditing, and instant querying over billions of microservice log lines.",
    solution: "Built a columnar analytics engine with row-level security isolation, asynchronous worker pipelines, and pre-aggregated metric rollups.",
    results: "Adopted by 650+ enterprise teams, achieving 4.9/5 CSAT and seamless SOC2 Type II compliance.",
  },
];

const categoryFilters = [
  { id: "all", label: "All Applications" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "school", label: "School Management" },
  { id: "booking", label: "Booking & Events" },
  { id: "social", label: "Social Platform" },
  { id: "fintech", label: "Fintech" },
  { id: "saas", label: "B2B SaaS" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileNavOpen(false);
        setSelectedProject(null);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        A small team with a big-picture mindset
        <ArrowRight size={14} aria-hidden="true" />
      </div>

      <header className="site-header">
        <a className="brand brand-logo" href="#home" aria-label="Tribrian Technologies home">
          <img src="/tribrian-logo.png?v=2" alt="TRIBRIAN TECHNOLOGIES logo" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#approach">Our approach</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#work">Capabilities</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowDownRight size={16} /></a>
        </nav>
        <div className="mobile-header-actions">
          <a className="mobile-cta" href="#contact" aria-label="Contact us"><Mail size={19} /></a>
          <button
            type="button"
            className="burger-menu-btn"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileNavOpen}
          >
            {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-nav-overlay ${mobileNavOpen ? "open" : ""}`}
        onClick={() => setMobileNavOpen(false)}
        aria-hidden={!mobileNavOpen}
      >
        <div
          className={`mobile-nav-drawer ${mobileNavOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mobile-nav-header">
            <span className="mobile-nav-brand">
              <img src="/tribrian-logo.png?v=2" alt="TRIBRIAN TECHNOLOGIES logo" />
            </span>
            <button
              type="button"
              className="mobile-nav-close"
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile navigation links">
            <a href="#services" className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>
              <span>Services</span>
              <ChevronRight size={15} />
            </a>
            <a href="#approach" className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>
              <span>Our approach</span>
              <ChevronRight size={15} />
            </a>
            <a href="#portfolio" className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>
              <span>Portfolio</span>
              <ChevronRight size={15} />
            </a>
            <a href="#work" className="mobile-nav-link" onClick={() => setMobileNavOpen(false)}>
              <span>Capabilities</span>
              <ChevronRight size={15} />
            </a>
          </nav>

          <div className="mobile-nav-footer">
            <a
              className="button button-dark mobile-nav-cta"
              href="#contact"
              onClick={() => setMobileNavOpen(false)}
            >
              Let&apos;s talk <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> SOFTWARE · CLOUD · QUALITY</div>
          <h1>Three minds.<br />One vision.<br /><span>Infinite</span> innovation.</h1>
          <p className="hero-description">
            We help turn complex ideas into dependable digital products—with
            thoughtful engineering, clear communication, and a focus on what matters.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Start a conversation <ArrowRight size={17} /></a>
            <a className="text-link" href="#portfolio">View our work <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-proof">
            <div className="proof-icon"><CheckCircle2 size={19} /></div>
            <div><strong>Built around your goals</strong><span>Practical solutions. Collaborative delivery.</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract illustration of connected technology layers">
          <div className="visual-glow" />
          <div className="visual-topline"><span>IDEAS → IMPACT</span><span>01 / 04</span></div>
          <div className="orbital orbital-one" />
          <div className="orbital orbital-two" />
          <div className="orbital orbital-three" />
          <div className="core">
            <div className="core-symbol"><span /><span /><span /></div>
            <span className="core-label">BUILD WITH PURPOSE</span>
          </div>
          <div className="float-card card-code"><Code2 size={17} /><span>Clean code</span><i /></div>
          <div className="float-card card-cloud"><Cloud size={17} /><span>Cloud ready</span><i /></div>
          <div className="float-card card-quality"><ShieldCheck size={17} /><span>Quality first</span><i /></div>
          <div className="visual-bottom"><Sparkles size={15} /><span>Technology that works for people.</span></div>
        </div>
        <div className="hero-index"><span>SCROLL TO EXPLORE</span><span className="index-line" /></div>
      </section>

      <section className="ticker" aria-label="Our focus areas">
        <div className="ticker-inner">
          <div className="ticker-track">
            {["Software engineering", "Backend & APIs", "Cloud solutions", "Quality automation", "UI/UX Design", "SaaS Platforms", "Software engineering", "Backend & APIs", "Cloud solutions", "Quality automation", "UI/UX Design", "SaaS Platforms"].map((item, i) => (
              <span key={`${item}-${i}`}><i />{item}</span>
            ))}
          </div>
        </div>
      </section>


      <section className="services section-wrap" id="services">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> WHAT WE DO</div>
            <h2>Good technology.<br /><span>Real-world outcomes.</span></h2>
          </div>
          <p>From the first conversation to the final deployment, we focus on building solutions that are useful, reliable, and ready to grow with you.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, number, title, text, tags }) => (
            <article className="service-card" key={number}>
              <div className="service-card-top"><span className="service-icon"><Icon size={21} /></span><span className="service-number">{number}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="tag-row">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a href="#contact" className="card-arrow" aria-label={`Discuss ${title}`}><ArrowRight size={18} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="section-wrap approach-inner">
          <div className="approach-intro">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> HOW WE WORK</div>
            <h2>Clear thinking.<br /><span>Careful building.</span></h2>
            <p>Great outcomes come from strong collaboration. Our process stays transparent, flexible, and focused on progress you can see.</p>
            <a className="button button-light" href="#contact">Work with us <ArrowRight size={17} /></a>
          </div>
          <div className="steps-list">
            {steps.map(([number, title, text]) => (
              <div className="step" key={number}>
                <span className="step-number">{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ArrowDownRight className="step-arrow" size={20} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* PROJECT PORTFOLIO SECTION                                         */}
      {/* ================================================================= */}
      <section className="portfolio-section" id="portfolio">
        <div className="section-wrap">
          <div className="portfolio-header">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> FEATURED WORK & PORTFOLIO</div>
              <h2>Real-world applications.<br /><span>Engineered for scale.</span></h2>
            </div>
            <p className="portfolio-header-copy">
              Explore our production-grade software solutions across e-commerce, school management, appointment booking, social media platforms, fintech infrastructure, and enterprise SaaS.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="portfolio-filter-bar" role="tablist" aria-label="Portfolio filters">
            {categoryFilters.map((filter) => (
              <button
                key={filter.id}
                role="tab"
                aria-selected={activeCategory === filter.id}
                className={`filter-btn ${activeCategory === filter.id ? "active" : ""}`}
                onClick={() => setActiveCategory(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="portfolio-grid">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <article className="portfolio-card" key={project.id}>
                  <div className={`card-banner ${project.bannerClass}`}>
                    <IconComponent className="banner-watermark" size={130} aria-hidden="true" />
                    <div className="banner-top-row">
                      <span className="category-pill">
                        <IconComponent size={12} />
                        {project.categoryLabel}
                      </span>
                      <span className="live-indicator">
                        <span className="pulse-dot" />
                        {project.statusBadge}
                      </span>
                    </div>
                    <div className="banner-project-spec">
                      <span className="banner-subtitle">{project.subtitle}</span>
                    </div>
                  </div>

                  <div className="card-content">
                    <h3 className="card-title">{project.name}</h3>
                    <p className="card-desc">{project.description}</p>

                    <ul className="card-feature-list">
                      {project.features.map((feat, idx) => (
                        <li key={idx}>
                          <Check size={14} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="card-tags">
                      {project.techStack.map((tech) => (
                        <span className="card-tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="card-actions">
                      <button
                        className="btn-case-study"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`View case study for ${project.name}`}
                      >
                        Explore Case Study <ChevronRight size={15} />
                      </button>
                      <a
                        href="#contact"
                        className="btn-case-secondary"
                        aria-label={`Request architecture for ${project.name}`}
                      >
                        Discuss <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close case study modal"
            >
              <X size={18} />
            </button>

            <div className={`modal-header-banner ${selectedProject.bannerClass}`}>
              <span className="category-pill">
                {selectedProject.categoryLabel} · {selectedProject.statusBadge}
              </span>
              <div className="modal-title-row">
                <h3>{selectedProject.name}</h3>
                <p style={{ margin: "6px 0 0", color: "#d2ded5", fontSize: "13px" }}>
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-grid-two">
                <div>
                  <div className="modal-section-title">
                    <Workflow size={14} /> The Business Challenge
                  </div>
                  <p className="modal-text">{selectedProject.challenge}</p>

                  <div className="modal-section-title" style={{ marginTop: "20px" }}>
                    <Cpu size={14} /> Engineering Solution & Architecture
                  </div>
                  <p className="modal-text">{selectedProject.solution}</p>
                </div>

                <div>
                  <div className="modal-highlights">
                    <h4 className="modal-highlights-title">Core Results & Deliverables</h4>
                    <ul className="modal-highlights-list">
                      {selectedProject.features.map((feat, i) => (
                        <li key={i}>
                          <Check size={14} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: "14px", paddingTop: "12px", borderTop: "1px solid var(--line)" }}>
                      <span style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: ".1em", color: "#6e7f72", fontWeight: 800 }}>
                        Measured Outcome
                      </span>
                      <p style={{ margin: "4px 0 0", fontSize: "12px", fontWeight: 750, color: "#283e2e" }}>
                        {selectedProject.results}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-tech-box">
                <div className="modal-section-title">
                  <Database size={14} /> Production Technology Stack
                </div>
                <div className="card-tags" style={{ margin: "8px 0 0" }}>
                  {selectedProject.techStack.map((tech) => (
                    <span className="card-tag" key={tech} style={{ fontSize: "11px", padding: "6px 12px" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <div>
                  <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                    Ready to build a similar application for your business?
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    className="button"
                    style={{ background: "#edf2ea", color: "var(--ink)", border: "none", cursor: "pointer" }}
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                  <a
                    className="button button-dark"
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                  >
                    Discuss This Project <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="capabilities section-wrap" id="work">
        <div className="capabilities-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> OUR TOOLKIT</div>
          <h2>Modern tools.<br /><span>Solid foundations.</span></h2>
          <p>We choose technology to fit the problem—not the other way around. Our capabilities span backend engineering, web experiences, cloud infrastructure, and software quality.</p>
        </div>
        <div className="tech-panel">
          <div className="tech-panel-heading"><Workflow size={19} /><span>TECHNOLOGY CAPABILITIES</span></div>
          <div className="tech-list">
            <div><span className="tech-dot dot-lime" /><div><strong>Backend</strong><p>Go · Java · PHP. Laravel. Express . Nest Js . Python . REST APIs</p></div><span className="tech-index">01</span></div>
            <div><span className="tech-dot dot-blue" /><div><strong>Web</strong><p>React · Next.js · Responsive UI</p></div><span className="tech-index">02</span></div>
            <div><span className="tech-dot dot-orange" /><div><strong>Cloud & delivery</strong><p>AWS · CI/CD · Deployment</p></div><span className="tech-index">03</span></div>
            <div><span className="tech-dot dot-purple" /><div><strong>Quality</strong><p>API testing · Automation . Cypress . Playwright . Postman . Selenium </p></div><span className="tech-index">04</span></div>
          </div>
          <p className="tech-note">Technologies are selected based on each project&apos;s needs and scope.</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div>
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> HAVE A PROJECT IN MIND?</div>
            <h2>Let&apos;s make<br />something <span>matter.</span></h2>
          </div>
          <div className="contact-copy">
            <p>Tell us what you&apos;re building, what&apos;s slowing you down, or where you want to go next. Let&apos;s explore how we can help.</p>
            <a className="button button-lime" href="mailto:technologiestribrain@gmail.com?subject=Project%20enquiry">Email our team <ArrowRight size={17} /></a>

          </div>
          <div className="contact-decoration">T<span>.</span></div>
        </div>
      </section>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a className="brand brand-logo brand-logo-footer" href="#home" aria-label="Tribrian Technologies home">
            <img src="/tribrian-logo-white.png" alt="TRIBRIAN TECHNOLOGIES logo" />
          </a>
          <p>Three Minds. One Vision. Infinite Innovation.</p>
          <span className="copyright" suppressHydrationWarning>
            © {new Date().getFullYear()} TRIBRIAN TECHNOLOGIES
          </span>
        </div>
      </footer>
    </main>
  );
}
