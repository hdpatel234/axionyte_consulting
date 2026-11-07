import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import IndustriesWeServe from "@/components/common/IndustriesWeServe";
import OurEsteemedPartners from "@/components/common/OurEsteemedPartners";
import { COMPANY, SITE_CONFIG } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Company | AXIONYTE Consulting",
  description:
    "Learn about AXIONYTE Consulting, our corporate profile, mission, vision, and strategic approach to delivering cybersecurity, AI, and ESG advisory services.",
};

export default function CompanyPage() {
  return (
    <>
      {/* Section 1: Company Banner */}
      <PageHeader
        title="About Our"
        highlightedWord="Company"
        breadcrumbCurrent="Company"
      />

      {/* Section 2: Corporate Profile */}
      <div className="about-us corporate-profile-section" style={{ padding: "85px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5">
              <div className="about-image-box">
                <div className="about-us-image">
                  <figure className="image-anime reveal">
                    <img
                      src="/images/about-us-tech-security.jpg"
                      alt="AXIONYTE Consulting - Corporate Profile"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-7">
              <div className="about-us-content">
                <div className="section-title">
                  <div
                    className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill wow fadeInUp"
                    style={{
                      background: "rgba(14, 27, 44, 0.06)",
                      border: "1px solid rgba(14, 27, 44, 0.12)",
                    }}
                  >
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary, #0E1B2C)",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "var(--color-primary, #0E1B2C)",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Corporate Profile
                    </span>
                  </div>

                  <h2
                    className="text-effect"
                    data-cursor="-opaque"
                    style={{
                      fontSize: "36px",
                      fontWeight: 700,
                      color: "var(--color-primary, #0E1B2C)",
                      marginBottom: "20px",
                    }}
                  >
                    Guiding Organizations at the Intersection of{" "}
                    <span style={{ color: "var(--color-secondary, #07865F)" }}>
                      Cybersecurity, AI &amp; ESG
                    </span>
                  </h2>

                  <p
                    className="wow fadeInUp"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.8",
                      color: "var(--color-text, #252B36)",
                      marginBottom: "16px",
                    }}
                  >
                    <strong>{COMPANY.name}</strong> is a specialized consulting advisory
                    dedicated to helping modern organizations strengthen cybersecurity posture, embrace secure
                    artificial intelligence, and advance environmental, social, and governance objectives.
                  </p>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.8",
                      color: "var(--color-text-secondary, #697386)",
                    }}
                  >
                    In an increasingly connected global landscape, securing enterprise assets requires more than static defenses;
                    it demands adaptive strategy, continuous vulnerability management, and responsible technology integration.
                    Our advisory services empower decision-makers with the clarity and technical rigor required to safeguard their operations and achieve sustainable growth.
                  </p>

                  {/* Dual Business Presence: Our Presence */}
                  <div
                    className="our-presence-box wow fadeInUp mt-4"
                    data-wow-delay="0.3s"
                    style={{
                      background: "linear-gradient(145deg, #ffffff 0%, #f7fafc 100%)",
                      border: "1.5px solid rgba(14, 27, 44, 0.08)",
                      borderLeft: "4px solid var(--color-secondary, #07865F)",
                      borderRadius: "14px",
                      padding: "20px 24px",
                      boxShadow: "0 6px 20px rgba(14, 27, 44, 0.04)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <i
                        className="fa-solid fa-map-location-dot"
                        style={{ color: "var(--color-secondary, #07865F)", fontSize: "17px" }}
                      ></i>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: "15px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.8px",
                          color: "var(--color-secondary, #07865F)",
                        }}
                      >
                        Our Presence
                      </h4>
                    </div>
                    <p
                      style={{
                        margin: "0 0 14px 0",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        color: "var(--color-text-secondary, #697386)",
                      }}
                    >
                      Serving organizations through our presence in Ahmedabad and Mumbai.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                      <div
                        className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                        style={{
                          background: "rgba(14, 27, 44, 0.05)",
                          border: "1px solid rgba(14, 27, 44, 0.12)",
                        }}
                      >
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ color: "var(--color-primary, #0E1B2C)", fontSize: "14px" }}
                        ></i>
                        <span
                          style={{
                            fontSize: "13.5px",
                            fontWeight: 600,
                            color: "var(--color-primary, #0E1B2C)",
                          }}
                        >
                          Ahmedabad, Gujarat
                        </span>
                      </div>
                      <div
                        className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                        style={{
                          background: "rgba(7, 134, 95, 0.08)",
                          border: "1px solid rgba(7, 134, 95, 0.2)",
                        }}
                      >
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ color: "var(--color-secondary, #07865F)", fontSize: "14px" }}
                        ></i>
                        <span
                          style={{
                            fontSize: "13.5px",
                            fontWeight: 600,
                            color: "var(--color-secondary, #07865F)",
                          }}
                        >
                          Mumbai, Maharashtra
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Mission & Vision */}
      <div
        className="mission-vision-section"
        style={{
          backgroundColor: "var(--secondary-color, #F5F8FC)",
          padding: "90px 0",
          borderTop: "1px solid var(--divider-color)",
          borderBottom: "1px solid var(--divider-color)",
        }}
      >
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp">Guiding Principles</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Our Mission &amp; <span>Vision</span>
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{ maxWidth: "620px", margin: "14px auto 0" }}
                >
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
                  border: "1.5px solid rgba(14, 27, 44, 0.15)",
                  borderRadius: "16px",
                  padding: "44px 38px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: "0 10px 30px rgba(14, 27, 44, 0.06)",
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
                    background: "linear-gradient(90deg, #0E1B2C 0%, #172B44 100%)",
                  }}
                />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "14px",
                      background: "rgba(14, 27, 44, 0.08)",
                      border: "1px solid rgba(14, 27, 44, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0E1B2C",
                      fontSize: "26px",
                    }}
                  >
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <span
                    style={{
                      background: "rgba(14, 27, 44, 0.08)",
                      color: "#0E1B2C",
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      padding: "5px 14px",
                      borderRadius: "20px",
                      border: "1px solid rgba(14, 27, 44, 0.15)",
                    }}
                  >
                    Strategic Foundation
                  </span>
                </div>

                <h3
                  style={{
                    color: "#0E1B2C",
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
                    borderTop: "1px solid rgba(14, 27, 44, 0.1)",
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
                    Uncompromising integrity &amp; operational rigor
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
                    Forward-looking defense &amp; intelligent transformation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Our Features (from Main Theme, matching AXIONYTE's Cybersecurity, AI & ESG positioning) */}
      <div className="our-features" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center text-center">
                <h3 className="wow fadeInUp">Our Features</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Intelligent Capabilities Designed{" "}
                  <span style={{ color: "var(--color-secondary, #07865F)" }}>
                    for Enterprise Resilience
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="feature-item-box">
                {/* Feature Item 1 (box-1) */}
                <div className="feature-item box-1 wow fadeInUp">
                  <div className="feature-image">
                    <figure>
                      <img src="/images/feature-image-1.png" alt="Advanced Threat Defense" />
                    </figure>
                  </div>
                  <div className="feature-item-content">
                    <h3>Advanced Threat Defense</h3>
                    <p>
                      Proactive risk discovery, continuous vulnerability auditing, and robust controls engineered for hybrid environments.
                    </p>
                  </div>
                </div>

                {/* Feature Item 2 (box-2 with scrolling ticker) */}
                <div className="feature-item box-2 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="scrolling-ticker feature-scrolling-ticker">
                    <div className="scrolling-ticker-box">
                      <div className="scrolling-content">
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Risk Governance</span>
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Intelligent AI</span>
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />ESG Alignment</span>
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cyber Defense</span>
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Data Protection</span>
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cloud Security</span>
                      </div>
                      <div className="scrolling-content">
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Risk Governance</span>
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Intelligent AI</span>
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />ESG Alignment</span>
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cyber Defense</span>
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Data Protection</span>
                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cloud Security</span>
                      </div>
                    </div>
                  </div>

                  <div className="feature-item-content">
                    <h3>Strategic Advisory Framework</h3>
                    <p>
                      Harmonizing cybersecurity vigilance, secure artificial intelligence adoption, and ESG compliance for sustainable enterprise growth.
                    </p>
                  </div>
                </div>

                {/* Feature Item 3 (box-3) */}
                <div className="feature-item box-3 wow fadeInUp" data-wow-delay="0.4s">
                  <div className="feature-image">
                    <figure>
                      <img src="/images/feature-image-2.png" alt="Data Governance &amp; Privacy" />
                    </figure>
                  </div>
                  <div className="feature-item-content">
                    <h3>Data Governance &amp; Privacy</h3>
                    <p>
                      Structuring robust data protections to ensure compliance with privacy regulations and enterprise standards.
                    </p>
                  </div>
                </div>

                {/* Feature Item 4 (box-4) */}
                <div className="feature-item box-4 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="feature-image">
                    <figure>
                      <img src="/images/feature-image-3.png" alt="Secure AI &amp; Automation" />
                    </figure>
                  </div>
                  <div className="feature-item-content">
                    <h3>Secure AI &amp; Automation</h3>
                    <p>
                      Assessing model safety, mitigating algorithmic risk, and deploying resilient automated workflows that protect enterprise assets.
                    </p>
                  </div>
                </div>

                {/* Feature Item 5 (box-5) */}
                <div className="feature-item box-5 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="feature-image">
                    <figure>
                      <img src="/images/feature-image-4.png" alt="Sustainable Enterprise Resilience" />
                    </figure>
                  </div>
                  <div className="feature-item-content">
                    <h3>Sustainable Enterprise Resilience</h3>
                    <p>
                      Aligning digital infrastructure resilience with environmental, social, and governance objectives for enduring business impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-footer-text wow fadeInUp text-center" data-wow-delay="0.8s">
                <p>
                  <span>Advisory</span> Protecting what matters most &ndash;{" "}
                  <Link href="/contact">Connect with our team to safeguard your future!</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Industries We Serve – Moving Band */}
      <IndustriesWeServe />

      {/* Section 6: Our Partners (Conditionally rendered via centralized configuration) */}
      {SITE_CONFIG.showPartnerships && <OurEsteemedPartners />}
    </>
  );
}
