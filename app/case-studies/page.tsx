import type { Metadata } from "next";
import Link from "next/link";
import PartnersTicker from "@/components/common/PartnersTicker";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: `Case Studies | ${COMPANY.name}`,
  description: `Case Studies and client engagement summaries for ${COMPANY.name}. Available upon qualified request under bilateral NDA.`,
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Page Header Section Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Case <span>Studies</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Case Studies
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Section End */}

      <PartnersTicker />

      {/* Case Studies Content Section */}
      <div className="page-case-study py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-5">
                <h3 className="wow fadeInUp">Client Engagements &amp; Discretion</h3>
                <h2 className="text-anime-style-2">
                  Confidentiality-First <span>Advisory</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "700px", margin: "0 auto" }}>
                  Due to the critical and sensitive nature of cybersecurity assessments, incident response roadmaps, and enterprise artificial intelligence deployments, {COMPANY.name} adheres to strict non-disclosure obligations.
                </p>
              </div>

              <div
                className="p-4 p-md-5 rounded text-center my-4"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #f7fafc 100%)",
                  border: "1.5px solid rgba(14, 27, 44, 0.1)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 30px rgba(14, 27, 44, 0.05)",
                }}
              >
                <div
                  className="mb-4 d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(7, 134, 95, 0.1)",
                    border: "1.5px solid rgba(7, 134, 95, 0.25)",
                    boxShadow: "0 4px 12px rgba(7, 134, 95, 0.12)",
                  }}
                >
                  <img
                    src="/images/axionyte-shield.png"
                    alt="AXIONYTE Security Shield"
                    style={{ width: "46px", height: "auto", objectFit: "contain" }}
                  />
                </div>
                <h3
                  style={{
                    color: "var(--color-primary, #0E1B2C)",
                    fontSize: "24px",
                    fontWeight: 700,
                    marginBottom: "14px",
                  }}
                >
                  Sanitized Case Studies Available Upon Request
                </h3>
                <p
                  style={{
                    color: "var(--color-text-secondary, #697386)",
                    maxWidth: "640px",
                    margin: "0 auto 24px",
                    lineHeight: "1.7",
                    fontSize: "15px",
                  }}
                >
                  We are pleased to provide sanitized case studies and methodology walkthroughs to prospective clients following an initial discovery consultation and standard mutual NDA.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/contact" className="btn-default">
                    Request Methodology Overview
                  </Link>
                  <a
                    href={COMPANY.phoneLink}
                    className="btn-default btn-hero-secondary"
                    style={{ border: "1.5px solid rgba(14, 27, 44, 0.2)" }}
                  >
                    Call {COMPANY.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
