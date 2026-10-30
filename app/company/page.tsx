import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import PartnersTicker from "@/components/common/PartnersTicker";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Company | AXIONYTE Consulting",
  description:
    "Learn about AXIONYTE Consulting, our mission, vision, and leadership in delivering cybersecurity and AI advisory services.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        title="About Our"
        highlightedWord="Company"
        breadcrumbCurrent="Company"
      />

      <PartnersTicker />

      {/* About Section */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="about-image-box">
                <div className="section-sub-title">
                  <h3 className="wow fadeInUp">Corporate Profile</h3>
                </div>
                <div className="about-us-image">
                  <figure className="image-anime reveal">
                    <img
                      src="/images/about-us-image.jpg"
                      alt="AXIONYTE Consulting Office"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="about-us-content">
                <div className="section-title">
                  <h2 className="text-effect" data-cursor="-opaque">
                    Guiding Organizations at the Intersection of <span>Cybersecurity & AI</span>
                  </h2>
                  <p className="wow fadeInUp">
                    <strong>{COMPANY.name}</strong> is an Ahmedabad-based specialized consulting practice
                    dedicated to helping modern organizations navigate digital risk, fortify critical infrastructure,
                    and adopt intelligent technologies with confidence.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    In an increasingly connected global landscape, securing enterprise assets requires more than static defenses;
                    it demands adaptive strategy, continuous vulnerability management, and responsible artificial intelligence integration.
                    Our advisory services empower decision-makers with the clarity and technical rigor required to safeguard their operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section - Redesigned per Client Feedback */}
      <div className="mission-vision-section" style={{ backgroundColor: "var(--secondary-color, #F5F8FC)", padding: "90px 0", borderTop: "1px solid var(--divider-color)", borderBottom: "1px solid var(--divider-color)" }}>
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp">Guiding Principles</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Our Mission & <span>Vision</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "620px", margin: "14px auto 0" }}>
                  The foundational pillars guiding our cybersecurity vigilance and artificial intelligence transformation for enterprise clients.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-2">
            {/* Mission Card - Primary Blue Color Coding */}
            <div className="col-lg-6 col-md-12">
              <div
                className="mission-card wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #f0f6fc 100%)",
                  border: "1.5px solid rgba(67, 141, 213, 0.3)",
                  borderRadius: "16px",
                  padding: "44px 38px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: "0 10px 30px rgba(67, 141, 213, 0.08)",
                  overflow: "hidden",
                }}
              >
                {/* Top Accent Line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #1766A8 0%, #438DD5 100%)",
                  }}
                />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "14px",
                      background: "rgba(67, 141, 213, 0.12)",
                      border: "1px solid rgba(67, 141, 213, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1766A8",
                      fontSize: "26px",
                    }}
                  >
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <span
                    style={{
                      background: "rgba(67, 141, 213, 0.12)",
                      color: "#1766A8",
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      padding: "5px 14px",
                      borderRadius: "20px",
                      border: "1px solid rgba(67, 141, 213, 0.2)",
                    }}
                  >
                    Strategic Foundation
                  </span>
                </div>

                <h3
                  style={{
                    color: "#1766A8",
                    fontSize: "26px",
                    fontWeight: 700,
                    marginBottom: "16px",
                  }}
                >
                  Our Mission
                </h3>

                <p
                  style={{
                    color: "#252B36",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    flexGrow: 1,
                    marginBottom: "24px",
                  }}
                >
                  To provide clear, pragmatic, and uncompromising cybersecurity and artificial intelligence advisory
                  that protects enterprise value, ensures statutory compliance, and enables intelligent organizational transformation.
                </p>

                <div
                  style={{
                    borderTop: "1px solid rgba(67, 141, 213, 0.15)",
                    paddingTop: "18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#F2A326",
                    }}
                  />
                  <span style={{ fontSize: "14px", color: "#697386", fontWeight: 500 }}>
                    Uncompromising integrity & operational rigor
                  </span>
                </div>
              </div>
            </div>

            {/* Vision Card - Secondary Green Color Coding */}
            <div className="col-lg-6 col-md-12">
              <div
                className="vision-card wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #f0f8f5 100%)",
                  border: "1.5px solid rgba(7, 134, 95, 0.3)",
                  borderRadius: "16px",
                  padding: "44px 38px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: "0 10px 30px rgba(7, 134, 95, 0.08)",
                  overflow: "hidden",
                }}
              >
                {/* Top Accent Line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #064D3D 0%, #07865F 100%)",
                  }}
                />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "14px",
                      background: "rgba(7, 134, 95, 0.12)",
                      border: "1px solid rgba(7, 134, 95, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#07865F",
                      fontSize: "26px",
                    }}
                  >
                    <i className="fa-solid fa-compass"></i>
                  </div>
                  <span
                    style={{
                      background: "rgba(7, 134, 95, 0.12)",
                      color: "#07865F",
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      padding: "5px 14px",
                      borderRadius: "20px",
                      border: "1px solid rgba(7, 134, 95, 0.2)",
                    }}
                  >
                    Future Horizons
                  </span>
                </div>

                <h3
                  style={{
                    color: "#07865F",
                    fontSize: "26px",
                    fontWeight: 700,
                    marginBottom: "16px",
                  }}
                >
                  Our Vision
                </h3>

                <p
                  style={{
                    color: "#252B36",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    flexGrow: 1,
                    marginBottom: "24px",
                  }}
                >
                  To be a premier cybersecurity and AI consulting partner recognized for technical integrity,
                  strategic foresight, and dependable enterprise enablement across evolving digital threat landscapes.
                </p>

                <div
                  style={{
                    borderTop: "1px solid rgba(7, 134, 95, 0.15)",
                    paddingTop: "18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#F2A326",
                    }}
                  />
                  <span style={{ fontSize: "14px", color: "#697386", fontWeight: 500 }}>
                    Forward-looking defense & intelligent transformation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="our-team" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp">Practice Leadership</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Leadership at <span>{COMPANY.name}</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Experienced advisory guidance providing direct oversight on all strategic client engagements.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div
                className="team-item text-center wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  background: "#ffffff",
                  border: "1.5px solid var(--divider-color)",
                  borderRadius: "16px",
                  padding: "40px 30px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="leadership-shield-badge mx-auto mb-4"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "rgba(7, 134, 95, 0.08)",
                    border: "2px solid var(--color-secondary, #07865F)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/axionyte-shield.png"
                    alt={COMPANY.owner}
                    style={{ width: "55px", height: "auto" }}
                  />
                </div>
                <div className="team-content">
                  <h3 style={{ fontSize: "26px", color: "#252B36", marginBottom: "6px" }}>
                    {COMPANY.owner}
                  </h3>
                  <p style={{ color: "#1766A8", fontWeight: 600, fontSize: "16px", marginBottom: "16px" }}>
                    {COMPANY.role}
                  </p>
                  <p style={{ color: "#697386", fontSize: "15px", lineHeight: "1.7" }}>
                    Leading strategic direction, enterprise cybersecurity consultations, and AI service integration at {COMPANY.name}.
                  </p>
                  <div className="mt-4">
                    <a
                      href={COMPANY.phoneLink}
                      className="btn-default"
                      style={{ padding: "10px 24px", fontSize: "14px" }}
                    >
                      <i className="fa-solid fa-phone me-2"></i>
                      Contact Directly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-box text-center" style={{ padding: "80px 0", backgroundColor: "#0e1b2c" }}>
        <div className="container">
          <h2 style={{ color: "#ffffff", marginBottom: "16px" }}>
            Ready to Discuss Your Security or AI Roadmap?
          </h2>
          <p style={{ color: "#9ea4b5", maxWidth: "600px", margin: "0 auto 30px" }}>
            Connect with our leadership to evaluate your organization&apos;s digital posture and explore collaborative solutions.
          </p>
          <Link href="/contact" className="btn-default">
            Request an Introductory Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
