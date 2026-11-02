import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/common/FaqAccordion";
import {
  COMPANY,
  CORE_SERVICES,
  HOW_IT_WORKS_STEPS,
  FAQS,
} from "@/lib/company-data";

export const metadata: Metadata = {
  title: "AXIONYTE Consulting | Cybersecurity & AI Services",
  description:
    "AXIONYTE Consulting helps organizations strengthen digital security, adopt intelligent technologies, and build resilient business operations through cybersecurity and AI-focused solutions.",
};

export default function HomePage() {
  return (
    <>
      {/* =========================================================================
          Section 1: Banner / Hero
          ========================================================================= */}
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-box">
                {/* Hero Content */}
                <div className="hero-content">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">
                      <span>AXIONYTE</span> Cybersecurity &middot; AI Services
                    </h3>
                    <h1 className="text-anime-style-2" data-cursor="-opaque">
                      Secure Your Digital Future with Intelligent{" "}
                      <span style={{ color: "var(--color-secondary, #07865F)" }}>
                        Cybersecurity
                      </span>{" "}
                      &amp; <span>AI Solutions</span>
                    </h1>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      AXIONYTE Consulting helps organizations strengthen digital security,
                      adopt intelligent technologies, and build resilient business operations
                      through cybersecurity and AI-focused solutions.
                    </p>
                  </div>

                  <div className="hero-body wow fadeInUp" data-wow-delay="0.4s">
                    <div className="hero-btn">
                      <Link href="/contact" className="btn-default">
                        Talk with Our Expert
                      </Link>
                    </div>
                    <div className="hero-btn ms-sm-3 mt-2 mt-sm-0">
                      <Link href="/service" className="btn-default btn-hero-secondary">
                        Explore Services
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Hero Item List - Technology-Focused Visuals (Zero Humans) */}
                <div className="hero-item-list">
                  {/* Hero Box 1: Owner Trust Statement */}
                  <div className="hero-item box-1 dark-box wow fadeInUp">
                    <div className="hero-item-content">
                      <h3>
                        &ldquo;Cybersecurity is not just tech, it&apos;s about trust &ndash; protecting your data.&rdquo;
                      </h3>
                      <p style={{ color: "#ffffff" }}>
                        {COMPANY.owner},{" "}
                        <span style={{ color: "#ffffff", opacity: 0.9 }}>{COMPANY.role}</span>
                      </p>
                    </div>
                    <div className="hero-author-image">
                      <figure className="image-anime">
                        <img
                          src="/images/hero-cyber-trust.jpg"
                          alt="AXIONYTE Cybersecurity &amp; Data Trust"
                        />
                      </figure>
                    </div>
                  </div>

                  {/* Hero Box 2: Counter */}
                  <div className="hero-item box-2 dark-box wow fadeInUp" data-wow-delay="0.2s">
                    <div className="hero-counter hero-item-content">
                      <h2>
                        <span className="counter">15</span>K+
                      </h2>
                    </div>
                    <div className="hero-item-content">
                      <h3>Empowering businesses</h3>
                      <p>Our experts combine advanced technology with years</p>
                    </div>
                  </div>

                  {/* Hero Box 3: Enterprise Technology Assurance */}
                  <div className="hero-item box-3 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="hero-client-box">
                      {/* Enterprise Technology Badges (Zero humans) */}
                      <div
                        className="satisfy-client-images"
                        style={{ display: "flex", alignItems: "center", paddingLeft: "8px" }}
                      >
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "rgba(7, 134, 95, 0.15)",
                            border: "2px solid #ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--color-secondary, #07865F)",
                            fontSize: "13px",
                            marginLeft: "-8px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                          }}
                        >
                          <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "rgba(14, 27, 44, 0.12)",
                            border: "2px solid #ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--color-primary, #0E1B2C)",
                            fontSize: "13px",
                            marginLeft: "-8px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                          }}
                        >
                          <i className="fa-solid fa-lock"></i>
                        </div>
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "rgba(242, 163, 38, 0.18)",
                            border: "2px solid #ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--color-accent, #F2A326)",
                            fontSize: "13px",
                            marginLeft: "-8px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                          }}
                        >
                          <i className="fa-solid fa-microchip"></i>
                        </div>
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "rgba(7, 134, 95, 0.15)",
                            border: "2px solid #ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--color-secondary, #07865F)",
                            fontSize: "13px",
                            marginLeft: "-8px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                          }}
                        >
                          <i className="fa-solid fa-network-wired"></i>
                        </div>
                      </div>

                      <div className="hero-client-content hero-item-content">
                        <h3>15K+ Satisfied Clients</h3>
                        <p>Our experts combine advanced technology with years</p>
                      </div>
                    </div>

                    <div className="hero-item-content">
                      <h2>
                        <span className="counter" style={{ color: "var(--color-secondary, #07865F)" }}>
                          500
                        </span>
                        +
                      </h2>
                      <p>Every day, our technology stops, and eliminate 500+ threats.</p>
                    </div>
                  </div>

                  {/* Hero Box 4: Security Features */}
                  <div className="hero-item box-4 dark-box wow fadeInUp" data-wow-delay="0.6s">
                    <div className="hero-item-content">
                      <h3>Empowering businesses to grow smarter, move faster, and stay secure.</h3>
                    </div>

                    <div className="hero-item-image">
                      <figure>
                        <img src="/images/hero-item-image.png" alt="Cloud Security &amp; Smart Defense" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          Section 2: About Us
          ========================================================================= */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5">
              <div className="about-image-box">
                <div className="section-sub-title">
                  <h3 className="wow fadeInUp">About AXIONYTE Consulting</h3>
                </div>

                <div className="about-us-image">
                  <figure className="image-anime reveal">
                    <img
                      src="/images/about-us-tech-security.jpg"
                      alt="AXIONYTE Consulting - Cybersecurity and AI Advisory"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-7">
              <div className="about-us-content">
                <div className="section-title">
                  <h2 className="text-effect" data-cursor="-opaque">
                    Delivering Strategic{" "}
                    <span style={{ color: "var(--color-secondary, #07865F)" }}>
                      Cybersecurity
                    </span>{" "}
                    &amp; AI Solutions for Resilient Enterprise Growth
                  </h2>
                  <p className="wow fadeInUp">
                    AXIONYTE Consulting is a dedicated consulting advisory specializing in cybersecurity
                    and artificial intelligence services. We help organizations protect critical digital
                    infrastructure, assess operational vulnerabilities, and adopt intelligent automation
                    to achieve scalable business performance.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Our consultative approach bridges technological strategy and risk mitigation, ensuring
                    your systems remain secure, compliant, and prepared for future technological advancements.
                  </p>
                </div>

                <div className="about-us-body wow fadeInUp" data-wow-delay="0.4s">
                  <div className="about-btn">
                    <Link href="/company" className="btn-default">
                      Learn More About Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          Section 3: Services
          ========================================================================= */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Our Core Practice</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Comprehensive Services Designed for{" "}
                  <span style={{ color: "var(--color-secondary, #07865F)" }}>
                    Security
                  </span>{" "}
                  &amp; <span>Intelligence</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We provide specialized consulting services engineered to evaluate organizational risk,
                  secure enterprise assets, and accelerate AI adoption.
                </p>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end">
              <div className="section-btn wow fadeInUp" data-wow-delay="0.3s">
                <Link href="/service" className="btn-default">
                  View All Services
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {CORE_SERVICES.map((service, idx) => (
              <div className="col-lg-4 col-md-6 mb-4" key={service.id}>
                <div
                  className="service-card-modern wow fadeInUp"
                  data-wow-delay={`${0.15 * (idx + 1)}s`}
                >
                  <div className="service-card-image">
                    <Link href={`/service/${service.id}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                      />
                    </Link>
                    <div className="service-card-icon-badge">
                      <img src={service.icon} alt={service.title} />
                    </div>
                  </div>

                  <div className="service-card-content">
                    <div className="service-card-header">
                      <h3 className="service-card-title">
                        <Link href={`/service/${service.id}`}>{service.title}</Link>
                      </h3>
                      <Link
                        href={`/service/${service.id}`}
                        className="service-card-arrow-btn"
                        aria-label={`Read more about ${service.title}`}
                      >
                        <img src="/images/arrow-primary.svg" alt="" />
                      </Link>
                    </div>
                    <p className="service-card-desc">{service.description}</p>
                    <div className="service-card-footer">
                      <Link href={`/service/${service.id}`} className="service-card-action">
                        Consult on this Service &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          Section 4: Why Choose Us
          ========================================================================= */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="why-choose-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Why Choose Us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Strategic Insight,{" "}
                    <span style={{ color: "var(--color-secondary, #07865F)" }}>
                      Technical Rigor
                    </span>
                    , and <span>Tailored Execution</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    AXIONYTE Consulting partners with enterprise leaders to deliver actionable recommendations
                    grounded in operational reality. We combine cybersecurity governance with forward-thinking
                    AI strategy to protect your business and enable sustainable innovation.
                  </p>
                </div>

                <div className="row mt-4">
                  <div className="col-md-4 mb-4">
                    <div className="why-choose-box wow fadeInUp" data-wow-delay="0.2s">
                      <div className="why-choose-icon mb-3">
                        <img src="/images/icon-why-choose-1.svg" alt="Direct Expert Advisory" />
                      </div>
                      <h3>Direct Expert Advisory</h3>
                      <p>
                        Collaborate directly with senior leadership and experienced practitioners on your specific security and AI objectives.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="why-choose-box wow fadeInUp" data-wow-delay="0.3s">
                      <div className="why-choose-icon mb-3">
                        <img src="/images/icon-why-choose-2.svg" alt="Pragmatic Frameworks" />
                      </div>
                      <h3>Pragmatic Frameworks</h3>
                      <p>
                        We deliver prioritized, actionable roadmaps rather than generic boilerplate reports, optimizing your resources.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="why-choose-box wow fadeInUp" data-wow-delay="0.4s">
                      <div className="why-choose-icon mb-3">
                        <img src="/images/icon-why-choose-1.svg" alt="Security &amp; AI Synergy" />
                      </div>
                      <h3>Security &amp; AI Synergy</h3>
                      <p>
                        Unified guidance that balances proactive threat defense with intelligent process enablement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="why-choose-btn mt-3 wow fadeInUp" data-wow-delay="0.5s">
                  <Link href="/contact" className="btn-default">
                    Talk with Our Expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          Section 5: Consulting Methodology
          ========================================================================= */}
      <div className="how-it-work">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Consulting Methodology</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Our Structured <span>Engagement Process</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  A disciplined 4-stage framework designed to deliver transparent, measurable outcomes from initial discovery to execution planning.
                </p>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end">
              <div className="how-it-work-contact wow fadeInUp" data-wow-delay="0.3s">
                <p style={{ color: "#9ea4b5", marginBottom: "4px", fontSize: "14px" }}>
                  Talk to Our Expert:
                </p>
                <a
                  href={COMPANY.phoneLink}
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--brand-blue, #0E1B2C)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <i className="fa-solid fa-phone"></i>
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div className="col-xl-3 col-md-6 mb-4" key={step.step}>
                <div
                  className="how-it-work-item wow fadeInUp"
                  data-wow-delay={`${0.15 * (idx + 1)}s`}
                >
                  <div className="how-it-work-header">
                    <div className="how-it-work-number">
                      <span className="step-tag">Phase</span>
                      <h3>{step.step}</h3>
                    </div>
                    <div className="how-it-work-icon">
                      <img src={step.icon} alt={step.title} />
                    </div>
                  </div>
                  <div className="how-it-work-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <div className="how-it-work-footer">
                    <div className="step-progress-bar">
                      <span
                        className="step-progress-fill"
                        style={{ width: `${(idx + 1) * 25}%` }}
                      ></span>
                    </div>
                    <span className="step-progress-label">Milestone 0{idx + 1} / 04</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          Section 6: Core Strength
          ========================================================================= */}
      <div className="our-features">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp">Core Strengths</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Engineered for Enterprise{" "}
                  <span style={{ color: "var(--color-secondary, #07865F)" }}>
                    Security
                  </span>{" "}
                  &amp; <span>Agility</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Discover how our tailored consulting capabilities help organizations navigate complexity and achieve digital security.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="core-feature-card wow fadeInUp" data-wow-delay="0.15s">
                <div className="feature-icon-wrapper">
                  <img src="/images/icon-how-it-work-1.svg" alt="Vulnerability Discovery" />
                </div>
                <h3>Vulnerability Discovery</h3>
                <p>Systematic identification of security blind spots across cloud and on-premise environments.</p>
                <div className="feature-card-footer">
                  <Link href="/service" className="feature-link">
                    Explore Advisory &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="core-feature-card wow fadeInUp" data-wow-delay="0.25s">
                <div className="feature-icon-wrapper">
                  <img src="/images/icon-how-it-work-2.svg" alt="Regulatory Compliance" />
                </div>
                <h3>Regulatory Alignment</h3>
                <p>Aligning data governance with international cybersecurity and privacy standards.</p>
                <div className="feature-card-footer">
                  <Link href="/service" className="feature-link">
                    Explore Advisory &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="core-feature-card wow fadeInUp" data-wow-delay="0.35s">
                <div className="feature-icon-wrapper">
                  <img src="/images/icon-how-it-work-3.svg" alt="AI Feasibility" />
                </div>
                <h3>AI Feasibility &amp; Safety</h3>
                <p>Assessing AI readiness, mitigating algorithm risks, and designing secure automation pipelines.</p>
                <div className="feature-card-footer">
                  <Link href="/service" className="feature-link">
                    Explore Solutions &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="core-feature-card wow fadeInUp" data-wow-delay="0.45s">
                <div className="feature-icon-wrapper">
                  <img src="/images/icon-how-it-work-4.svg" alt="Incident Preparedness" />
                </div>
                <h3>Incident Preparedness</h3>
                <p>Establishing clear response protocols to contain threats and maintain business continuity.</p>
                <div className="feature-card-footer">
                  <Link href="/service" className="feature-link">
                    Explore Advisory &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          Section 7: FAQ
          ========================================================================= */}
      <div className="our-faqs">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">Common Inquiries</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Frequently Asked <span>Questions</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Learn more about our cybersecurity advisory and AI consulting services. If you have additional questions, our team is always ready to assist.
                </p>
                <div className="mt-4 wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="/contact" className="btn-default">
                    Ask a Question
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <FaqAccordion items={FAQS} defaultOpenIndex={0} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
