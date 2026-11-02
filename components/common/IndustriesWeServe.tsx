import React from "react";
import { INDUSTRIES_DETAILS } from "@/lib/company-data";

export default function IndustriesWeServe() {
  return (
    <section
      className="industries-we-serve-section"
      style={{
        backgroundColor: "var(--color-surface, #F8FAFC)",
        padding: "90px 0",
        borderBottom: "1px solid var(--divider-color, rgba(14, 27, 44, 0.08))",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="row section-row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="section-title text-center mb-5">
              <div
                className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill wow fadeInUp"
                style={{
                  background: "rgba(7, 134, 95, 0.08)",
                  border: "1px solid rgba(7, 134, 95, 0.2)",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-secondary, #07865F)",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--color-secondary, #07865F)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Sector Expertise
                </span>
              </div>

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
                Industries We{" "}
                <span style={{ color: "var(--color-secondary, #07865F)" }}>Serve</span>
              </h2>

              <p
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  maxWidth: "760px",
                  margin: "0 auto",
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "var(--color-text-secondary, #697386)",
                }}
              >
                Delivering cybersecurity and AI-driven solutions across industries to help
                organizations strengthen security, improve operations, and embrace digital
                transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Cards Grid (Box Type Layout) */}
        <div className="row g-4">
          {INDUSTRIES_DETAILS.map((industry, index) => (
            <div
              key={industry.id}
              className="col-xl-3 col-lg-3 col-md-6 col-12"
            >
              <div
                className="industry-card wow fadeInUp h-100"
                data-wow-delay={`${0.1 + (index % 4) * 0.1}s`}
              >
                {/* Top Decorative Line */}
                <div className="industry-card-accent" />

                {/* Icon Box */}
                <div className="industry-icon-box mb-4">
                  <i className={industry.icon}></i>
                </div>

                {/* Content */}
                <div className="industry-card-body d-flex flex-column flex-grow-1">
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-desc">{industry.description}</p>

                  {/* Decorative Footer Accent */}
                  <div className="industry-card-footer mt-auto pt-3">
                    <span className="accent-dot" />
                    <span className="accent-label">Advisory &amp; Security</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
