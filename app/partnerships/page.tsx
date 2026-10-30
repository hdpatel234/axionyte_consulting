import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import PartnersTicker from "@/components/common/PartnersTicker";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Partnerships & OEM Ecosystem | AXIONYTE Consulting",
  description:
    "Learn about AXIONYTE Consulting's partnership framework, OEM collaborations, and ecosystem alignment for cybersecurity and AI technology.",
};

export default function PartnershipsPage() {
  const valueDrivers = [
    {
      icon: "fa-solid fa-scale-balanced",
      title: "Vendor-Neutral Advisory",
      description:
        "We evaluate enterprise architectures objectively based on genuine risk posture and mission requirements, ensuring recommendations remain independent.",
      color: "#1766A8",
      bgColor: "rgba(23, 102, 168, 0.1)",
      borderColor: "rgba(23, 102, 168, 0.2)",
    },
    {
      icon: "fa-solid fa-microchip",
      title: "Technical Interoperability",
      description:
        "Direct engineering alignment with leading security and AI vendors to validate configurations, conduct rigorous POCs, and harden enterprise environments.",
      color: "#07865F",
      bgColor: "rgba(7, 134, 95, 0.1)",
      borderColor: "rgba(7, 134, 95, 0.2)",
    },
    {
      icon: "fa-solid fa-bolt-lightning",
      title: "Accelerated Time-to-Defense",
      description:
        "Pre-validated integration blueprints and compliance checklists reduce deployment friction and streamline enterprise security adoption.",
      color: "#D98E1A",
      bgColor: "rgba(242, 163, 38, 0.12)",
      borderColor: "rgba(242, 163, 38, 0.25)",
    },
  ];

  const engagementSteps = [
    {
      step: "01",
      title: "Discovery & Alignment",
      description:
        "Initial consultation to understand mutual capabilities, strategic focus areas, and target market opportunities.",
      icon: "fa-solid fa-compass-drafting",
    },
    {
      step: "02",
      title: "Technical Validation",
      description:
        "Reviewing architecture compatibility, security standards, and integration scope against enterprise client needs.",
      icon: "fa-solid fa-shield-halved",
    },
    {
      step: "03",
      title: "Collaborative Engagement",
      description:
        "Co-delivering client advisory, audits, or technical rollouts with clear governance and transparent communication.",
      icon: "fa-solid fa-users-gear",
    },
    {
      step: "04",
      title: "Ongoing Evolution",
      description:
        "Continuous ecosystem alignment, technical roadmap synchronization, and proactive long-term value creation.",
      icon: "fa-solid fa-chart-line",
    },
  ];

  const oemFocusPoints = [
    "Next-Gen Firewalls & Perimeter Defense Architectures",
    "Endpoint Detection & Response (EDR / XDR) Systems",
    "Cloud Infrastructure & Zero-Trust Access Verification",
    "Enterprise AI Governance, Gateway & Model Security",
  ];

  const channelFocusPoints = [
    "Co-Delivered Cybersecurity Audits & Penetration Testing",
    "Regulatory Compliance Programs (ISO 27001, DPDP, SOC 2)",
    "Artificial Intelligence Strategy & Secure Adoption",
    "Technical Pre-Sales & Subject Matter Advisory for Enterprise Bids",
  ];

  return (
    <>
      <PageHeader
        title="Partnership &"
        highlightedWord="OEM Ecosystem"
        breadcrumbCurrent="Partnerships"
      />

      <PartnersTicker />

      {/* Section 1: Strategic Intro & Value Drivers */}
      <div className="partnership-intro-section" style={{ padding: "65px 0 50px", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-5">
                <h3 className="wow fadeInUp">Collaborative Ecosystem</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Strategic Alliances Driving <span>Enterprise Value</span>
                </h2>
                <p className="wow fadeInUp mx-auto" style={{ maxWidth: "780px", color: "var(--text-secondary, #697386)" }} data-wow-delay="0.1s">
                  At {COMPANY.name}, we collaborate with leading technology OEMs and specialized solution
                  partners to deliver robust, enterprise-grade cybersecurity and artificial intelligence implementations.
                  Our collaborative ecosystem ensures clients receive objective advisory coupled with proven technology capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Value Pillars Row */}
          <div className="row g-4">
            {valueDrivers.map((item, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div
                  className="value-driver-card wow fadeInUp h-100"
                  data-wow-delay={`${0.15 * (idx + 1)}s`}
                  style={{
                    background: "#ffffff",
                    border: `1.5px solid ${item.borderColor}`,
                    borderRadius: "16px",
                    padding: "32px 28px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      backgroundColor: item.bgColor,
                      border: `1px solid ${item.borderColor}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      fontSize: "22px",
                      marginBottom: "20px",
                    }}
                  >
                    <i className={item.icon}></i>
                  </div>
                  <h4 style={{ fontSize: "19px", fontWeight: 700, color: "var(--dark-color, #0E1B2C)", marginBottom: "12px" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "14.5px", color: "var(--text-secondary, #697386)", lineHeight: "1.7", margin: 0, flexGrow: 1 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Two Strategic Partnership Tracks */}
      <div
        className="partnership-tracks-section"
        style={{
          backgroundColor: "var(--secondary-color, #F5F8FC)",
          padding: "70px 0",
          borderTop: "1px solid var(--divider-color)",
          borderBottom: "1px solid var(--divider-color)",
        }}
      >
        <div className="container">
          <div className="row section-row align-items-center mb-4">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Partnership Framework</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Two Distinct Paths to <span>Collaborate & Grow</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.1s" style={{ color: "var(--text-secondary, #697386)" }}>
                  Whether you are a global technology vendor seeking trusted enterprise integration or a solutions consultancy extending client capabilities, we offer defined engagement models.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link href="/contact" className="btn-default">
                Discuss Collaboration
              </Link>
            </div>
          </div>

          <div className="row g-4 mt-1">
            {/* OEM Track Card */}
            <div className="col-lg-6">
              <div
                className="partnership-track-card wow fadeInUp h-100"
                data-wow-delay="0.2s"
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1.5px solid rgba(23, 102, 168, 0.22)",
                  boxShadow: "0 10px 30px rgba(23, 102, 168, 0.06)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  padding: "38px 34px",
                }}
              >
                {/* Top Accent Gradient Line */}
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

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: "rgba(23, 102, 168, 0.1)",
                      border: "1px solid rgba(23, 102, 168, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1766A8",
                      fontSize: "24px",
                    }}
                  >
                    <i className="fa-solid fa-network-wired"></i>
                  </div>
                  <span
                    style={{
                      background: "rgba(23, 102, 168, 0.08)",
                      color: "#1766A8",
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      padding: "5px 14px",
                      borderRadius: "20px",
                      border: "1px solid rgba(23, 102, 168, 0.2)",
                    }}
                  >
                    Technology Alliances
                  </span>
                </div>

                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#1766A8", marginBottom: "8px" }}>
                  OEM Technology Alliances
                </h3>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--brand-blue, #438DD5)", marginBottom: "14px" }}>
                  For Cybersecurity & AI Software / Hardware Vendors
                </p>
                <p style={{ color: "var(--text-color, #252B36)", fontSize: "15px", lineHeight: "1.7", marginBottom: "22px" }}>
                  We engage with global security and infrastructure OEMs to design interoperable, vendor-neutral architectures that protect critical enterprise environments and validate real-world efficacy.
                </p>

                <div style={{ marginBottom: "24px", flexGrow: 1 }}>
                  <h5 style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: "var(--text-secondary, #697386)", marginBottom: "14px" }}>
                    Key Focus Domains:
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {oemFocusPoints.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        style={{
                          fontSize: "14px",
                          color: "var(--text-color, #252B36)",
                          marginBottom: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <i
                          className="fa-solid fa-circle-check"
                          style={{ color: "#1766A8", fontSize: "15px", flexShrink: 0 }}
                        ></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    borderTop: "1px solid rgba(23, 102, 168, 0.15)",
                    paddingTop: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "14px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#07865F",
                      }}
                    />
                    <span style={{ fontSize: "13px", color: "var(--text-secondary, #697386)", fontWeight: 600 }}>
                      Open for OEM Alignment
                    </span>
                  </div>
                  <Link href="/contact" className="btn-default btn-sm">
                    OEM Inquiry <i className="fa-solid fa-arrow-right ms-2" style={{ fontSize: "12px" }}></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Solution & Channel Partner Card */}
            <div className="col-lg-6">
              <div
                className="partnership-track-card wow fadeInUp h-100"
                data-wow-delay="0.3s"
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1.5px solid rgba(7, 134, 95, 0.22)",
                  boxShadow: "0 10px 30px rgba(7, 134, 95, 0.06)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  padding: "38px 34px",
                }}
              >
                {/* Top Accent Gradient Line */}
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

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: "rgba(7, 134, 95, 0.1)",
                      border: "1px solid rgba(7, 134, 95, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#07865F",
                      fontSize: "24px",
                    }}
                  >
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <span
                    style={{
                      background: "rgba(7, 134, 95, 0.08)",
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
                    Solutions & Channel
                  </span>
                </div>

                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#07865F", marginBottom: "8px" }}>
                  Strategic Solution Partners
                </h3>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#07865F", marginBottom: "14px" }}>
                  For MSPs, System Integrators & IT Consultancies
                </p>
                <p style={{ color: "var(--text-color, #252B36)", fontSize: "15px", lineHeight: "1.7", marginBottom: "22px" }}>
                  Collaborating with managed service providers, systems integrators, and specialized consultants to extend comprehensive cybersecurity posture evaluations and AI adoption strategies.
                </p>

                <div style={{ marginBottom: "24px", flexGrow: 1 }}>
                  <h5 style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: "var(--text-secondary, #697386)", marginBottom: "14px" }}>
                    Collaborative Offerings:
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {channelFocusPoints.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        style={{
                          fontSize: "14px",
                          color: "var(--text-color, #252B36)",
                          marginBottom: "10px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <i
                          className="fa-solid fa-circle-check"
                          style={{ color: "#07865F", fontSize: "15px", flexShrink: 0 }}
                        ></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    borderTop: "1px solid rgba(7, 134, 95, 0.15)",
                    paddingTop: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "14px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#07865F",
                      }}
                    />
                    <span style={{ fontSize: "13px", color: "var(--text-secondary, #697386)", fontWeight: 600 }}>
                      Welcoming Channel Inquiries
                    </span>
                  </div>
                  <Link href="/contact" className="btn-default btn-sm">
                    Partner With Us <i className="fa-solid fa-arrow-right ms-2" style={{ fontSize: "12px" }}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Engagement Methodology */}
      <div className="partnership-process-section" style={{ padding: "65px 0 60px", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-5">
                <h3 className="wow fadeInUp">Engagement Model</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  How We <span>Partner Together</span>
                </h2>
                <p className="wow fadeInUp mx-auto" style={{ maxWidth: "640px", color: "var(--text-secondary, #697386)" }} data-wow-delay="0.1s">
                  A structured four-step collaboration framework engineered to deliver measurable enterprise value, mutual technical alignment, and lasting client trust.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {engagementSteps.map((item, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <div
                  className="step-card wow fadeInUp h-100"
                  data-wow-delay={`${0.12 * (idx + 1)}s`}
                  style={{
                    background: "linear-gradient(180deg, #ffffff 0%, #f9fbfe 100%)",
                    border: "1.5px solid var(--divider-color)",
                    borderRadius: "14px",
                    padding: "30px 22px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span
                      style={{
                        fontSize: "26px",
                        fontWeight: 800,
                        color: "var(--brand-blue, #438DD5)",
                        letterSpacing: "-0.5px",
                        fontFamily: "var(--font-sora), sans-serif",
                      }}
                    >
                      {item.step}
                    </span>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(67, 141, 213, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--brand-blue, #438DD5)",
                        fontSize: "17px",
                      }}
                    >
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <h4 style={{ fontSize: "17px", fontWeight: 700, color: "var(--dark-color, #0E1B2C)", marginBottom: "10px" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "var(--text-secondary, #697386)", lineHeight: "1.65", margin: 0, flexGrow: 1 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4: Partnership Inquiry CTA */}
      <div
        className="cta-box text-center"
        style={{
          padding: "60px 0",
          background: "linear-gradient(135deg, #0E1B2C 0%, #172B44 100%)",
          borderTop: "1px solid rgba(67, 141, 213, 0.2)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(67, 141, 213, 0.15)",
                  color: "var(--brand-blue, #438DD5)",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  padding: "5px 16px",
                  borderRadius: "20px",
                  border: "1px solid rgba(67, 141, 213, 0.3)",
                  marginBottom: "16px",
                }}
              >
                Let&apos;s Build Together
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 700, marginBottom: "14px" }}>
                Explore Partnership Opportunities with AXIONYTE
              </h2>
              <p style={{ color: "#B0B7C3", fontSize: "15px", maxWidth: "620px", margin: "0 auto 28px", lineHeight: "1.7" }}>
                Get in touch directly with {COMPANY.owner} to discuss OEM alignment, channel synergy, and collaborative enterprise engagements.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link href="/contact" className="btn-default">
                  Submit Partnership Inquiry
                </Link>
                <a href={COMPANY.phoneLink} className="btn-default btn-highlighted">
                  <i className="fa-solid fa-phone me-2"></i> Call {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
