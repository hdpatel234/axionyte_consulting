import React from "react";
import Link from "next/link";
import { OEM_PARTNERS, STRATEGIC_PARTNERS } from "@/lib/company-data";

export default function OurEsteemedPartners() {
  return (
    <section className="esteemed-partners-section">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="section-title text-center mb-5">
              {/* Section Label */}
              <div
                className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill wow fadeInUp"
                style={{
                  background: "rgba(14, 27, 44, 0.06)",
                  border: "1px solid rgba(14, 27, 44, 0.15)",
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
                  Our Partnerships
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "var(--color-primary, #0E1B2C)",
                  marginBottom: "16px",
                  letterSpacing: "-0.5px",
                }}
              >
                Our Esteemed <span style={{ color: "var(--color-secondary, #07865F)" }}>Partners</span>
              </h2>

              {/* Description */}
              <p
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  maxWidth: "820px",
                  margin: "0 auto 16px",
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "var(--color-text, #252B36)",
                }}
              >
                Building strong relationships with trusted technology providers, OEMs, and strategic partners to deliver innovative cybersecurity and AI solutions. Through collaboration and shared expertise, we aim to create greater value and help organizations navigate their digital transformation journey.
              </p>

              {/* Supporting Text */}
              <p
                className="wow fadeInUp"
                data-wow-delay="0.25s"
                style={{
                  maxWidth: "760px",
                  margin: "0 auto",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "var(--color-text-secondary, #697386)",
                }}
              >
                At AXIONYTE Consulting, we believe meaningful partnerships are the foundation of innovation. We work towards building collaborative relationships that combine technology expertise, industry knowledge, and shared business goals.
              </p>
            </div>
          </div>
        </div>

        {/* Two Partnership Categories */}
        <div className="row g-4 align-items-stretch">
          {/* Category A: OEM Partners */}
          <div className="col-lg-6 col-12">
            <div className="partner-category-card oem-category wow fadeInUp" data-wow-delay="0.2s">
              <div className="partner-category-header">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2">
                  <span className="partner-cat-badge">
                    <i className="fa-solid fa-microchip"></i>
                    Technology Providers
                  </span>
                  {/* Subtle collaboration nodes visual */}
                  <svg
                    width="32"
                    height="20"
                    viewBox="0 0 32 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ opacity: 0.35 }}
                    aria-hidden="true"
                  >
                    <circle cx="6" cy="10" r="3" fill="#0E1B2C" />
                    <circle cx="16" cy="6" r="3" fill="#07865F" />
                    <circle cx="26" cy="14" r="3" fill="#0E1B2C" />
                    <line x1="6" y1="10" x2="16" y2="6" stroke="#0E1B2C" strokeWidth="1.5" strokeDasharray="2 2" />
                    <line x1="16" y1="6" x2="26" y2="14" stroke="#07865F" strokeWidth="1.5" strokeDasharray="2 2" />
                  </svg>
                </div>
                <h3 className="partner-cat-title">Our OEM Partners</h3>
                <p className="partner-cat-desc">
                  Collaborating with Original Equipment Manufacturers and technology providers to connect organizations with relevant technologies, platforms, and solutions.
                </p>
              </div>

              {OEM_PARTNERS && OEM_PARTNERS.length > 0 ? (
                <div className="partner-logo-grid">
                  {OEM_PARTNERS.map((partner) => (
                    <div key={partner.id} className="partner-logo-card" title={partner.name}>
                      {partner.logo ? (
                        <img src={partner.logo} alt={partner.name} />
                      ) : (
                        <span style={{ fontWeight: 600, color: "#0E1B2C" }}>{partner.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="partner-ready-box">
                  <div className="partner-ready-icon">
                    <i className="fa-solid fa-network-wired"></i>
                  </div>
                  <h4 className="partner-ready-title">OEM Alliances &amp; Architecture Alignments</h4>
                  <p className="partner-ready-text">
                    Official OEM partner accreditations and technology vendor integrations are cataloged under collaborative engagement governance. Enterprise vendor disclosures are published in alignment with client project confidentiality.
                  </p>
                  <div className="partner-status-pill">
                    <span className="partner-status-dot"></span>
                    <span>Alliance Evaluation Active</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Category B: Strategic Partners */}
          <div className="col-lg-6 col-12">
            <div className="partner-category-card strategic-category wow fadeInUp" data-wow-delay="0.3s">
              <div className="partner-category-header">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2">
                  <span className="partner-cat-badge">
                    <i className="fa-solid fa-handshake"></i>
                    Strategic Alliances
                  </span>
                  {/* Subtle collaboration nodes visual */}
                  <svg
                    width="32"
                    height="20"
                    viewBox="0 0 32 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ opacity: 0.35 }}
                    aria-hidden="true"
                  >
                    <circle cx="6" cy="14" r="3" fill="#07865F" />
                    <circle cx="16" cy="8" r="3" fill="#0E1B2C" />
                    <circle cx="26" cy="12" r="3" fill="#07865F" />
                    <line x1="6" y1="14" x2="16" y2="8" stroke="#07865F" strokeWidth="1.5" strokeDasharray="2 2" />
                    <line x1="16" y1="8" x2="26" y2="12" stroke="#0E1B2C" strokeWidth="1.5" strokeDasharray="2 2" />
                  </svg>
                </div>
                <h3 className="partner-cat-title">Our Strategic Partners</h3>
                <p className="partner-cat-desc">
                  Building strategic relationships with organizations and technology specialists to strengthen capabilities, encourage innovation, and support business growth.
                </p>
              </div>

              {STRATEGIC_PARTNERS && STRATEGIC_PARTNERS.length > 0 ? (
                <div className="partner-logo-grid">
                  {STRATEGIC_PARTNERS.map((partner) => (
                    <div key={partner.id} className="partner-logo-card" title={partner.name}>
                      {partner.logo ? (
                        <img src={partner.logo} alt={partner.name} />
                      ) : (
                        <span style={{ fontWeight: 600, color: "#07865F" }}>{partner.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="partner-ready-box">
                  <div className="partner-ready-icon">
                    <i className="fa-solid fa-handshake-angle"></i>
                  </div>
                  <h4 className="partner-ready-title">Consulting &amp; Solution Networks</h4>
                  <p className="partner-ready-text">
                    Strategic relationships with systems integrators, regional consultancies, and domain specialists are actively coordinated under collaborative client delivery frameworks.
                  </p>
                  <div className="partner-status-pill">
                    <span className="partner-status-dot"></span>
                    <span>Collaborative Network Open</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section 7: Optional CTA */}
        <div className="partner-cta-container wow fadeInUp" data-wow-delay="0.35s">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent, #F2A326)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--color-accent, #F2A326)",
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                  }}
                >
                  Ecosystem Collaboration
                </span>
              </div>
              <h3 className="partner-cta-heading">Become Our Partner</h3>
              <p className="partner-cta-desc">
                Interested in building a strategic relationship with AXIONYTE Consulting? Let&apos;s explore opportunities to collaborate and create value together.
              </p>
            </div>
            <div className="col-lg-4 col-md-5 text-md-end mt-4 mt-md-0">
              <Link href="/contact" className="btn-default">
                Explore Partnership Opportunities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

