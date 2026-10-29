import type { Metadata } from "next";
import Link from "next/link";
import PartnersTicker from "@/components/common/PartnersTicker";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${COMPANY.name}`,
  description: `Terms and Conditions governing the use of ${COMPANY.name}'s website and advisory services.`,
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Terms &amp; <span>Conditions</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Terms &amp; Conditions
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PartnersTicker />

      <div className="page-content py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="policy-content p-4 p-md-5 rounded"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <p className="text-muted mb-4">Last Updated: October 2026</p>

                <h3 className="mb-3">1. Acceptance of Terms</h3>
                <p>
                  By accessing and using the website of <strong>{COMPANY.name}</strong>, you acknowledge and agree to comply with these Terms &amp; Conditions. If you do not agree with any part of these terms, please refrain from using our digital properties.
                </p>

                <h3 className="mt-4 mb-3">2. Nature of Website Information</h3>
                <p>
                  The content published on this website—including articles, service overviews, and draft frameworks—is provided solely for general informational and educational purposes. It does not constitute formal legal counsel, binding contractual commitments, or certified security guarantees until a formal Statement of Work (SOW) or consulting agreement is executed between both parties.
                </p>

                <h3 className="mt-4 mb-3">3. Professional Advisory Engagements</h3>
                <p>
                  Any formal cybersecurity consulting, security assessments, or AI implementation services delivered by {COMPANY.name} shall be governed by specific bilateral agreements, non-disclosure agreements (NDAs), and agreed scopes of work detailing deliverables, liabilities, and timelines.
                </p>

                <h3 className="mt-4 mb-3">4. Intellectual Property</h3>
                <p>
                  All proprietary text, visual marks, logos (including the {COMPANY.name} shield emblem and typography), graphics, and software code on this website are protected under applicable copyright and trademark laws. Unauthorized reproduction, modification, or distribution is strictly prohibited.
                </p>

                <h3 className="mt-4 mb-3">5. Limitation of Liability</h3>
                <p>
                  In no event shall {COMPANY.name}, its leadership, or affiliates be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, materials on this website.
                </p>

                <h3 className="mt-4 mb-3">6. Governing Law</h3>
                <p>
                  These terms are governed by and construed in accordance with the laws of India, with jurisdiction in Ahmedabad, Gujarat.
                </p>

                <h3 className="mt-4 mb-3">7. Inquiries</h3>
                <p>
                  Direct any questions regarding these Terms &amp; Conditions to:
                </p>
                <div className="p-3 rounded mt-3" style={{ background: "rgba(255, 255, 255, 0.05)" }}>
                  <p className="mb-1"><strong>{COMPANY.name}</strong></p>
                  <p className="mb-1">Phone: <a href={COMPANY.phoneLink}>{COMPANY.phone}</a></p>
                  <p className="mb-0">Address: {COMPANY.address.full}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
