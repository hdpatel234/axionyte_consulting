import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import PartnersTicker from "@/components/common/PartnersTicker";
import { CORE_SERVICES, COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Services | AXIONYTE Consulting",
  description:
    "Explore AXIONYTE Consulting's core services: Cybersecurity Consulting, Security Assessment, Risk & Compliance, AI Consulting, and AI Automation Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Core"
        highlightedWord="Services"
        breadcrumbCurrent="Services"
      />

      <PartnersTicker />

      {/* Services List Section */}
      <div className="our-services" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Practice Areas</h3>
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

          <div className="row">
            {CORE_SERVICES.map((service, idx) => (
              <div className="col-lg-4 col-md-6 mb-4" key={service.id}>
                <div
                  className="service-card-modern wow fadeInUp"
                  data-wow-delay={`${0.15 * (idx + 1)}s`}
                >
                  <div className="service-card-image">
                    <Link href="/contact">
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
                        <Link href="/contact">{service.title}</Link>
                      </h3>
                      <Link
                        href="/contact"
                        className="service-card-arrow-btn"
                        aria-label={`Inquire about ${service.title}`}
                      >
                        <img src="/images/arrow-primary.svg" alt="" />
                      </Link>
                    </div>
                    <p className="service-card-desc">{service.description}</p>
                    <div className="service-card-footer">
                      <Link href="/contact" className="service-card-action">
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

      {/* Call to Action */}
      <div className="cta-box text-center" style={{ padding: "80px 0", backgroundColor: "#050914" }}>
        <div className="container">
          <h2 style={{ color: "#ffffff", marginBottom: "16px" }}>
            Tailored Engagement Models for Your Organization
          </h2>
          <p style={{ color: "#9ea4b5", maxWidth: "600px", margin: "0 auto 30px" }}>
            Whether you need a targeted security assessment, comprehensive compliance advisory, or strategic AI consulting, {COMPANY.name} delivers focused expertise.
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
