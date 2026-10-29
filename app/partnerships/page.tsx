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
  // Configured data arrays: clean architecture ready for verified client partners
  const oemList: { name: string; category: string; description: string }[] = [];
  const partnerList: { name: string; category: string; description: string }[] = [];

  return (
    <>
      <PageHeader
        title="Partnership &"
        highlightedWord="OEM Ecosystem"
        breadcrumbCurrent="Partnerships"
      />

      <PartnersTicker />

      {/* Partnership Intro */}
      <div className="about-us" style={{ padding: "90px 0 60px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp">Collaborative Ecosystem</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Strategic Alliances Driving <span>Enterprise Value</span>
                </h2>
                <p className="wow fadeInUp mx-auto" style={{ maxWidth: "800px" }} data-wow-delay="0.2s">
                  At {COMPANY.name}, we collaborate with leading technology OEMs and specialized solution
                  partners to deliver robust, enterprise-grade cybersecurity and artificial intelligence implementations.
                  Our collaborative ecosystem ensures clients receive objective advisory coupled with proven technology capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OEM Information Section */}
      <div className="oem-section" style={{ backgroundColor: "#050914", padding: "80px 0" }}>
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Original Equipment Manufacturers</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  OEM <span>Technology Alliances</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We engage with global security and infrastructure OEMs to design interoperable, vendor-neutral architectures that protect critical enterprise environments.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {oemList.length > 0 ? (
              oemList.map((oem, idx) => (
                <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                  <div className="service-item p-4">
                    <h3>{oem.name}</h3>
                    <p>{oem.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-12">
                <div
                  className="p-5 text-center"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px dashed rgba(255,255,255,0.15)",
                    borderRadius: "12px",
                  }}
                >
                  <i
                    className="fa-solid fa-network-wired mb-3"
                    style={{ fontSize: "36px", color: "#00f0ff" }}
                  ></i>
                  <h4 style={{ color: "#ffffff", marginBottom: "10px" }}>
                    OEM Partner Program Under Alignment
                  </h4>
                  <p style={{ color: "#9ea4b5", maxWidth: "600px", margin: "0 auto" }}>
                    We work with selected security and AI technology OEMs. If your organization is an OEM seeking technical integration or consulting collaboration, connect with our leadership.
                  </p>
                  <div className="mt-4">
                    <Link href="/contact" className="btn-default btn-sm">
                      OEM Inquiry
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Partner Information Section */}
      <div className="partners-section" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Solutions & Channel Partners</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Strategic <span>Solution Partners</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Collaborating with managed service providers, system integrators, and specialized consultants to extend comprehensive capabilities to clients.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {partnerList.length > 0 ? (
              partnerList.map((partner, idx) => (
                <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                  <div className="service-item p-4">
                    <h3>{partner.name}</h3>
                    <p>{partner.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-12">
                <div
                  className="p-5 text-center"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px dashed rgba(255,255,255,0.15)",
                    borderRadius: "12px",
                  }}
                >
                  <i
                    className="fa-solid fa-handshake mb-3"
                    style={{ fontSize: "36px", color: "#00f0ff" }}
                  ></i>
                  <h4 style={{ color: "#ffffff", marginBottom: "10px" }}>
                    Solution Partner Ecosystem
                  </h4>
                  <p style={{ color: "#9ea4b5", maxWidth: "600px", margin: "0 auto" }}>
                    {COMPANY.name} welcomes channel collaborations and strategic alliance inquiries. Partner with us to co-deliver cybersecurity audits and AI implementation frameworks.
                  </p>
                  <div className="mt-4">
                    <Link href="/contact" className="btn-default btn-sm">
                      Partner With Us
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Partnership Inquiry CTA */}
      <div className="cta-box text-center" style={{ padding: "80px 0", backgroundColor: "#050914" }}>
        <div className="container">
          <h2 style={{ color: "#ffffff", marginBottom: "16px" }}>
            Explore Partnership Opportunities
          </h2>
          <p style={{ color: "#9ea4b5", maxWidth: "600px", margin: "0 auto 30px" }}>
            Get in touch directly with {COMPANY.owner} to discuss OEM alignment, channel synergy, and collaborative enterprise engagements.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/contact" className="btn-default">
              Submit Partnership Inquiry
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
