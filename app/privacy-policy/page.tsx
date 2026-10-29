import type { Metadata } from "next";
import Link from "next/link";
import PartnersTicker from "@/components/common/PartnersTicker";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY.name}`,
  description: `Privacy Policy for ${COMPANY.name}. Understand how we handle data, inquiries, and client information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Privacy <span>Policy</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Privacy Policy
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

                <h3 className="mb-3">1. Overview</h3>
                <p>
                  At <strong>{COMPANY.name}</strong>, we respect your privacy and are committed to safeguarding the personal and organizational information you share with us. This Privacy Policy outlines our practices regarding data collection, handling, and security across our website and consulting inquiries.
                </p>

                <h3 className="mt-4 mb-3">2. Information We Collect</h3>
                <p>
                  When you request a consultation, submit our contact form, or communicate with us directly, we may collect:
                </p>
                <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                  <li>Your full name and contact information (such as email address and phone number).</li>
                  <li>Company or organization name and your designation.</li>
                  <li>Specific service areas of interest or inquiry details provided in your communications.</li>
                  <li>Standard technical web telemetry (such as browser type and access times) to ensure website integrity.</li>
                </ul>

                <h3 className="mt-4 mb-3">3. How We Use Your Information</h3>
                <p>The information we collect is strictly utilized to:</p>
                <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                  <li>Respond directly to your inquiries and coordinate advisory consultations.</li>
                  <li>Provide relevant assessments, proposals, or information regarding cybersecurity and AI services.</li>
                  <li>Maintain operational communications with clients and prospective partners.</li>
                  <li>Ensure the security and reliability of our digital platforms.</li>
                </ul>

                <h3 className="mt-4 mb-3">4. Data Confidentiality & Non-Disclosure</h3>
                <p>
                  We treat client information and inquiries with strict enterprise confidentiality. We do not sell, rent, or trade your personal or business information to third-party marketing companies. Information is disclosed only when required by law or to trusted infrastructure service providers operating under confidentiality obligations.
                </p>

                <h3 className="mt-4 mb-3">5. Data Security</h3>
                <p>
                  As a cybersecurity and technology advisory firm, we implement recognized administrative and technical safeguards designed to protect submitted information from unauthorized access, alteration, or disclosure.
                </p>

                <h3 className="mt-4 mb-3">6. Contact Information</h3>
                <p>
                  For any questions regarding this Privacy Policy or our data handling practices, please contact:
                </p>
                <div className="p-3 rounded mt-3" style={{ background: "rgba(255, 255, 255, 0.05)" }}>
                  <p className="mb-1"><strong>{COMPANY.name}</strong></p>
                  <p className="mb-1">Attention: {COMPANY.owner} ({COMPANY.role})</p>
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
