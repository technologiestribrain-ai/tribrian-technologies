import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cloud,
  Layers3,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  Workflow,
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

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        A small team with a big-picture mindset
        <ArrowRight size={14} aria-hidden="true" />
      </div>

      <header className="site-header">
        <a className="brand brand-logo" href="#home" aria-label="Tribrian Technologies home">
          <img src="/tribrian-logo.png" alt="TRIBRIAN TECHNOLOGIES logo" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#approach">Our approach</a>
          <a href="#work">Capabilities</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowDownRight size={16} /></a>
        </nav>
        <a className="mobile-cta" href="#contact" aria-label="Contact us"><Mail size={19} /></a>
      </header>

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
            <a className="text-link" href="#services">Explore our services <ArrowDownRight size={16} /></a>
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
          {["Software engineering", "Backend & APIs", "Cloud solutions", "Quality automation", "Software engineering", "Backend & APIs"].map((item, i) => (
            <span key={`${item}-${i}`}><i />{item}</span>
          ))}
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

      <section className="capabilities section-wrap" id="work">
        <div className="capabilities-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> OUR TOOLKIT</div>
          <h2>Modern tools.<br /><span>Solid foundations.</span></h2>
          <p>We choose technology to fit the problem—not the other way around. Our capabilities span backend engineering, web experiences, cloud infrastructure, and software quality.</p>
        </div>
        <div className="tech-panel">
          <div className="tech-panel-heading"><Workflow size={19} /><span>TECHNOLOGY CAPABILITIES</span></div>
          <div className="tech-list">
            <div><span className="tech-dot dot-lime" /><div><strong>Backend</strong><p>Go · Java · REST APIs</p></div><span className="tech-index">01</span></div>
            <div><span className="tech-dot dot-blue" /><div><strong>Web</strong><p>React · Next.js · Responsive UI</p></div><span className="tech-index">02</span></div>
            <div><span className="tech-dot dot-orange" /><div><strong>Cloud & delivery</strong><p>AWS · CI/CD · Deployment</p></div><span className="tech-index">03</span></div>
            <div><span className="tech-dot dot-purple" /><div><strong>Quality</strong><p>API testing · Automation</p></div><span className="tech-index">04</span></div>
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
            <a className="button button-lime" href="mailto:hello@tribriantechnologies.com?subject=Project%20enquiry">Email our team <ArrowRight size={17} /></a>
            <span className="contact-small">Replace this email with your preferred business email before launch.</span>
          </div>
          <div className="contact-decoration">T<span>.</span></div>
        </div>
      </section>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a className="brand brand-footer" href="#home" aria-label="Tribrian Technologies home">
            <span className="footer-brand-name">TRIBRIAN TECHNOLOGIES</span>
          </a>
          <p>Three Minds. One Vision. Infinite Innovation.</p>
          <span className="copyright">© {new Date().getFullYear()} TRIBRIAN TECHNOLOGIES</span>
        </div>
      </footer>
    </main>
  );
}
