import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import PartnersTicker from "@/components/common/PartnersTicker";
import { CORE_SERVICES, CORE_SOLUTIONS, COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Service | AXIONYTE Consulting",
  description:
    "Explore AXIONYTE Consulting's comprehensive cybersecurity advisory, vulnerability assessments, and enterprise AI transformation services.",
};

export default function ServicePage() {
  return (
    <>
      <PageHeader
        title="Our"
        highlightedWord="Service"
        breadcrumbCurrent="Service"
      />

      <PartnersTicker />

      {/* Core Practice Areas & Solutions Section */}
      <div className="our-services" style={{ padding: "90px 0 60px" }}>
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Practice Areas</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Strategic Solutions for Modern <span>Enterprise Resilience</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our multidisciplinary service portfolio unifies proactive defense engineering with intelligent
                  process enablement to address digital risks and technological opportunities.
                </p>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end">
              <div className="section-btn wow fadeInUp" data-wow-delay="0.3s">
                <Link href="/contact" className="btn-default">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Strategic Solution Frameworks */}
          <div className="row mt-4">
            {CORE_SOLUTIONS.map((sol, idx) => (
              <div className="col-lg-6 mb-4" key={sol.id}>
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay={`${0.15 * (idx + 1)}s`}
                  style={{
                    height: "100%",
                    padding: "40px 32px",
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "1.5px solid var(--divider-color)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                  }}
                >
                  <div className="service-header d-flex justify-content-between align-items-center mb-3">
                    <span
                      style={{
                        color: "var(--brand-blue, #438DD5)",
                        fontSize: "13px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {sol.tagline}
                    </span>
                    <div className="service-btn">
                      <Link href={`/service/${sol.id}`}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="service-body">
                    <h3 style={{ fontSize: "22px", marginBottom: "14px" }}>
                      <Link href={`/service/${sol.id}`}>{sol.title}</Link>
                    </h3>
                    <p style={{ marginBottom: "20px", color: "var(--text-secondary, #697386)" }}>{sol.description}</p>

                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {sol.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          style={{
                            color: "var(--text-color, #252B36)",
                            fontSize: "14px",
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <i
                            className="fa-solid fa-circle-check"
                            style={{ color: "var(--brand-green, #07865F)", fontSize: "15px" }}
                          ></i>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialized Service Catalog Section */}
      <div className="specialized-services-section" style={{ padding: "60px 0 90px", backgroundColor: "var(--secondary-color, #F5F8FC)" }}>
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Detailed Offerings</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Specialized Consulting for <span>Security & Intelligence</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We provide advisory, evaluation, and implementation planning services engineered to safeguard assets,
                  satisfy compliance requirements, and harness intelligent capabilities.
                </p>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end">
              <div className="section-btn wow fadeInUp" data-wow-delay="0.3s">
                <Link href="/contact" className="btn-default">
                  Inquire About Services
                </Link>
              </div>
            </div>
          </div>

          <div className="row mt-4">
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
                        aria-label={`Inquire about ${service.title}`}
                      >
                        <img src="/images/arrow-primary.svg" alt="" />
                      </Link>
                    </div>
                    <p className="service-card-desc">{service.description}</p>
                    <div className="service-card-footer">
                      <Link href={`/service/${service.id}`} className="service-card-action">
                        Request Service Details &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consultation Banner */}
      <div className="cta-box text-center" style={{ padding: "80px 0", backgroundColor: "#0e1b2c" }}>
        <div className="container">
          <h2 style={{ color: "#ffffff", marginBottom: "16px" }}>
            Align Your Organization with Resilient Architecture
          </h2>
          <p style={{ color: "#9ea4b5", maxWidth: "600px", margin: "0 auto 30px" }}>
            Connect with {COMPANY.name} to discuss how our tailored cybersecurity and AI services can meet your operational objectives.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/contact" className="btn-default">
              Talk with Our Expert
            </Link>
            <a href={COMPANY.phoneLink} className="btn-default btn-highlighted">
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
