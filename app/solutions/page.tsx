import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import PartnersTicker from "@/components/common/PartnersTicker";
import { CORE_SOLUTIONS, COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Solutions | AXIONYTE Consulting",
  description:
    "Explore AXIONYTE Consulting solutions across Adaptive Threat Defense, Cloud Resilience, Enterprise AI Modernization, and Governance & Compliance.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="Intelligent"
        highlightedWord="Solutions"
        breadcrumbCurrent="Solutions"
      />

      <PartnersTicker />

      {/* Solutions Catalog */}
      <div className="our-services" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Practice Areas</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Comprehensive Solutions for Modern <span>Enterprise Resilience</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our multidisciplinary solutions unify proactive defense engineering with intelligent
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

          <div className="row mt-4">
            {CORE_SOLUTIONS.map((sol, idx) => (
              <div className="col-lg-6 mb-4" key={sol.id}>
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay={`${0.15 * (idx + 1)}s`}
                  style={{ height: "100%", padding: "40px 32px" }}
                >
                  <div className="service-header d-flex justify-content-between align-items-center mb-3">
                    <span
                      style={{
                        color: "#00f0ff",
                        fontSize: "13px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {sol.tagline}
                    </span>
                    <div className="service-btn">
                      <Link href="/contact">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="service-body">
                    <h3 style={{ fontSize: "22px", marginBottom: "14px" }}>
                      <Link href="/contact">{sol.title}</Link>
                    </h3>
                    <p style={{ marginBottom: "20px" }}>{sol.description}</p>

                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {sol.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          style={{
                            color: "#ffffff",
                            fontSize: "14px",
                            marginBottom: "8px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <i className="fa-solid fa-circle-check" style={{ color: "#00f0ff", fontSize: "14px" }}></i>
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

      {/* Consultation Banner */}
      <div className="cta-box text-center" style={{ padding: "80px 0", backgroundColor: "#050914" }}>
        <div className="container">
          <h2 style={{ color: "#ffffff", marginBottom: "16px" }}>
            Align Your Organization with Resilient Architecture
          </h2>
          <p style={{ color: "#9ea4b5", maxWidth: "600px", margin: "0 auto 30px" }}>
            Connect with {COMPANY.name} to discuss how our tailored cybersecurity and AI solutions can meet your operational objectives.
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
