import type { Metadata } from "next";
import Link from "next/link";
import PartnersTicker from "@/components/common/PartnersTicker";
import FaqAccordion from "@/components/common/FaqAccordion";
import {
  COMPANY,
  CORE_SERVICES,
  HOW_IT_WORKS_STEPS,
  FAQS,
  BLOG_POSTS,
} from "@/lib/company-data";

export const metadata: Metadata = {
  title: "AXIONYTE Consulting | Cybersecurity & AI Services",
  description:
    "AXIONYTE Consulting helps organizations strengthen digital security, adopt intelligent technologies, and build resilient business operations through cybersecurity and AI-focused solutions.",
};

export default function HomePage() {
  // Flag to hide sections per client instructions while preserving code for future use
  const showPricing = false;
  const showTestimonials = false;

  return (
    <>
      {/* Hero Section Start */}
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-box">
                {/* Hero Content Start */}
                <div className="hero-content">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">
                      <span>AXIONYTE</span> Cybersecurity &middot; AI Services
                    </h3>
                    <h1 className="text-anime-style-2" data-cursor="-opaque">
                      Secure Your Digital Future with Intelligent{" "}
                      <span>Cybersecurity & AI Solutions</span>
                    </h1>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      AXIONYTE Consulting helps organizations strengthen digital security,
                      adopt intelligent technologies, and build resilient business operations
                      through cybersecurity and AI-focused solutions.
                    </p>
                  </div>

                  <div className="hero-body wow fadeInUp" data-wow-delay="0.4s">
                    {/* Action Buttons: Removed 'Get Started' and 'Watch Our Video' */}
                    <div className="hero-btn">
                      <Link href="/contact" className="btn-default">
                        Talk with Our Expert
                      </Link>
                    </div>
                    <div className="hero-btn ms-sm-3 mt-2 mt-sm-0">
                      <Link href="/services" className="btn-default btn-highlighted">
                        Explore Services
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Hero Content End */}

                {/* Hero Item List Start */}
                <div className="hero-item-list">
                  {/* Hero Box 1 */}
                  <div className="hero-item box-1 dark-box wow fadeInUp">
                    <div className="hero-item-content">
                      <h3>
                        &ldquo;Cybersecurity and AI are strategic business imperatives for modern enterprise resilience.&rdquo;
                      </h3>
                      <p>
                        {COMPANY.owner}, <span>{COMPANY.role}</span>
                      </p>
                    </div>
                    <div className="hero-author-image">
                      <figure className="image-anime">
                        <img
                          src="/images/axionyte-shield.png"
                          alt="AXIONYTE Shield"
                          style={{ width: "70px", height: "auto" }}
                        />
                      </figure>
                    </div>
                  </div>

                  {/* Hero Box 2 */}
                  <div
                    className="hero-item box-2 dark-box wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="hero-item-content">
                      <h2 style={{ fontSize: "24px", color: "#00f0ff", marginBottom: "8px" }}>
                        Strategic Advisory
                      </h2>
                      <h3>Enterprise Focus</h3>
                      <p>Tailored cybersecurity and AI guidance aligned with your business goals.</p>
                    </div>
                  </div>

                  {/* Hero Box 3 */}
                  <div
                    className="hero-item box-3 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="hero-item-content">
                      <h3 style={{ color: "#ffffff", fontSize: "20px", marginBottom: "8px" }}>
                        Trusted Expertise
                      </h3>
                      <p style={{ color: "#9ea4b5", fontSize: "14px" }}>
                        Collaborate with senior practitioners to evaluate risk, fortify architecture, and automate workflows.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Hero Item List End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Moving Band / Marquee (Industries Served) */}
      <PartnersTicker />

      {/* About Us Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="about-image-box">
                <div className="section-sub-title">
                  <h3 className="wow fadeInUp">About AXIONYTE Consulting</h3>
                </div>

                <div className="about-us-image">
                  <figure className="image-anime reveal">
                    <img
                      src="/images/about-us-image.jpg"
                      alt="AXIONYTE Consulting"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="about-us-content">
                <div className="section-title">
                  <h2 className="text-effect" data-cursor="-opaque">
                    Delivering Strategic Cybersecurity & AI Solutions for Resilient Enterprise Growth
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
      {/* About Us Section End */}

      {/* Our Services Section Start */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Our Core Practice</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Comprehensive Services Designed for <span>Security & Intelligence</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We provide specialized consulting services engineered to evaluate organizational risk,
                  secure enterprise assets, and accelerate AI adoption.
                </p>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end">
              <div className="section-btn wow fadeInUp" data-wow-delay="0.3s">
                <Link href="/services" className="btn-default">
                  View All Services
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {CORE_SERVICES.map((service, idx) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                key={service.id}
              >
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay={`${0.15 * (idx + 1)}s`}
                >
                  <div className="service-header">
                    <div className="service-icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <div className="service-btn">
                      <Link href="/services">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service-body">
                    <h3>
                      <Link href="/services">{service.title}</Link>
                    </h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Services Section End */}

      {/* Why Choose Us Section Start */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            {/* Rebalanced layout without removed images */}
            <div className="col-lg-12">
              <div className="why-choose-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Why Choose Us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Strategic Insight, Technical Rigor, and <span>Tailored Execution</span>
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
                      <p>Collaborate directly with senior leadership and experienced practitioners on your specific security and AI objectives.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="why-choose-box wow fadeInUp" data-wow-delay="0.3s">
                      <div className="why-choose-icon mb-3">
                        <img src="/images/icon-why-choose-2.svg" alt="Pragmatic Frameworks" />
                      </div>
                      <h3>Pragmatic Frameworks</h3>
                      <p>We deliver prioritized, actionable roadmaps rather than generic boilerplate reports, optimizing your resources.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="why-choose-box wow fadeInUp" data-wow-delay="0.4s">
                      <div className="why-choose-icon mb-3">
                        <img src="/images/icon-why-choose-1.svg" alt="Security & AI Synergy" />
                      </div>
                      <h3>Security & AI Synergy</h3>
                      <p>Unified guidance that balances proactive threat defense with intelligent process enablement.</p>
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
      {/* Why Choose Us Section End */}

      {/* How It Works Section Start */}
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
              {/* Phone call prompt replacing review badge */}
              <div className="how-it-work-contact wow fadeInUp" data-wow-delay="0.3s">
                <p style={{ color: "#9ea4b5", marginBottom: "4px", fontSize: "14px" }}>
                  Talk to Our Expert:
                </p>
                <a
                  href={COMPANY.phoneLink}
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#00f0ff",
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* How It Works Section End */}

      {/* Our Features Section Start */}
      <div className="our-features">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp">Core Strengths</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Engineered for Enterprise <span>Security & Agility</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Discover how our tailored consulting capabilities help organizations navigate complexity and achieve digital security.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="feature-icon mb-3">
                  <img src="/images/icon-how-it-work-1.svg" alt="Vulnerability Discovery" />
                </div>
                <h3>Vulnerability Discovery</h3>
                <p>Systematic identification of security blind spots across cloud and on-premise environments.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-item wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-icon mb-3">
                  <img src="/images/icon-how-it-work-2.svg" alt="Regulatory Compliance" />
                </div>
                <h3>Regulatory Alignment</h3>
                <p>Aligning data governance with international cybersecurity and privacy standards.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="feature-icon mb-3">
                  <img src="/images/icon-how-it-work-3.svg" alt="AI Feasibility" />
                </div>
                <h3>AI Feasibility & Safety</h3>
                <p>Assessing AI readiness, mitigating algorithm risks, and designing secure automation pipelines.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-item wow fadeInUp" data-wow-delay="0.5s">
                <div className="feature-icon mb-3">
                  <img src="/images/icon-how-it-work-4.svg" alt="Incident Preparedness" />
                </div>
                <h3>Incident Preparedness</h3>
                <p>Establishing clear response protocols to contain threats and maintain business continuity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Features Section End */}

      {/* Pricing Plan Section — Preserved in code, hidden per client instructions */}
      {showPricing && (
        <div className="our-pricing">
          <div className="container">
            <div className="section-title text-center">
              <h2>Service Plans</h2>
            </div>
          </div>
        </div>
      )}

      {/* Frequently Asked Questions Section Start */}
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
      {/* Frequently Asked Questions Section End */}

      {/* Testimonials Section — Preserved in code, hidden per client instructions (No unverified reviews) */}
      {showTestimonials && (
        <div className="our-testimonials">
          <div className="container">
            <div className="section-title text-center">
              <h2>Client Feedback</h2>
            </div>
          </div>
        </div>
      )}

      {/* Recent Blogs Preview Section Start */}
      <div className="our-blog">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Latest Insights</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Articles on <span>Cybersecurity & AI Strategy</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Explore our latest editorial analyses on securing digital infrastructure, evaluating AI safety, and modern risk governance.
                </p>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end">
              <div className="section-btn wow fadeInUp" data-wow-delay="0.3s">
                <Link href="/blogs" className="btn-default">
                  View All Articles
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {BLOG_POSTS.map((post, idx) => (
              <div className="col-lg-4 col-md-6 mb-4" key={post.slug}>
                <div
                  className="blog-item wow fadeInUp"
                  data-wow-delay={`${0.15 * (idx + 1)}s`}
                >
                  <div className="blog-featured-image">
                    <figure className="image-anime">
                      <Link href={`/blogs/${post.slug}`}>
                        <img src={post.image} alt={post.title} />
                      </Link>
                    </figure>
                    <div className="blog-date">
                      <p>{post.date}</p>
                    </div>
                  </div>

                  <div className="blog-content">
                    <div className="blog-content-header">
                      <span className="badge mb-2" style={{ backgroundColor: "rgba(0,240,255,0.1)", color: "#00f0ff", padding: "4px 10px", borderRadius: "4px", fontSize: "12px" }}>
                        {post.category}
                      </span>
                      <h3>
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                      </h3>
                    </div>

                    <p>{post.excerpt}</p>

                    <div className="blog-btn">
                      <Link href={`/blogs/${post.slug}`} className="readmore-btn">
                        Read Article <i className="fa-solid fa-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Recent Blogs Preview Section End */}
    </>
  );
}
