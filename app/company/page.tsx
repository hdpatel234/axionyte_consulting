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

      {/* Mission & Vision Section */}
      <div className="our-value" style={{ backgroundColor: "#050914", padding: "100px 0" }}>
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp">Guiding Principles</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Our Mission & <span>Vision</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6 mb-4">
              <div
                className="value-item wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "40px",
                  borderRadius: "12px",
                  height: "100%",
                }}
              >
                <div className="value-icon mb-3">
                  <img src="/images/icon-our-value-1.svg" alt="Our Mission" />
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "24px", marginBottom: "16px" }}>Our Mission</h3>
                <p style={{ color: "#9ea4b5", lineHeight: "1.8" }}>
                  To provide clear, pragmatic, and uncompromising cybersecurity and artificial intelligence advisory
                  that protects enterprise value, ensures statutory compliance, and enables intelligent organizational transformation.
                </p>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div
                className="value-item wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "40px",
                  borderRadius: "12px",
                  height: "100%",
                }}
              >
                <div className="value-icon mb-3">
                  <img src="/images/icon-our-value-2.svg" alt="Our Vision" />
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "24px", marginBottom: "16px" }}>Our Vision</h3>
                <p style={{ color: "#9ea4b5", lineHeight: "1.8" }}>
                  To be a premier cybersecurity and AI consulting partner recognized for technical integrity,
                  strategic foresight, and dependable enterprise enablement across evolving digital threat landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="our-team" style={{ padding: "100px 0" }}>
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
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "40px 30px",
                }}
              >
                <div
                  className="leadership-shield-badge mx-auto mb-4"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "rgba(0,240,255,0.08)",
                    border: "2px solid #00f0ff",
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
                  <h3 style={{ fontSize: "26px", color: "#ffffff", marginBottom: "6px" }}>
                    {COMPANY.owner}
                  </h3>
                  <p style={{ color: "#00f0ff", fontWeight: 600, fontSize: "16px", marginBottom: "16px" }}>
                    {COMPANY.role}
                  </p>
                  <p style={{ color: "#9ea4b5", fontSize: "15px", lineHeight: "1.7" }}>
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
      <div className="cta-box text-center" style={{ padding: "80px 0", backgroundColor: "#050914" }}>
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
