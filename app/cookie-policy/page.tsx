import type { Metadata } from "next";
import Link from "next/link";
import PartnersTicker from "@/components/common/PartnersTicker";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: `Cookie Policy | ${COMPANY.name}`,
  description: `Cookie Policy for ${COMPANY.name}. How we use cookies to provide a reliable user experience.`,
};

export default function CookiePolicyPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Cookie <span>Policy</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Cookie Policy
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

                <h3 className="mb-3">1. What Are Cookies?</h3>
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you browse websites. They are widely used to make web experiences functional, seamless, and secure.
                </p>

                <h3 className="mt-4 mb-3">2. How We Use Cookies</h3>
                <p>
                  At <strong>{COMPANY.name}</strong>, we use cookies solely for essential purposes:
                </p>
                <ul className="ps-4 mb-3" style={{ listStyleType: "disc" }}>
                  <li><strong>Essential Cookies:</strong> Required to enable core navigation, page transitions, and website stability.</li>
                  <li><strong>Functional Cookies:</strong> Allow the site to remember interface preferences, such as menu states or language defaults.</li>
                  <li><strong>Performance Analytics:</strong> Aggregate anonymous telemetry (without identifying individual users) to assess general traffic patterns and identify technical errors.</li>
                </ul>

                <h3 className="mt-4 mb-3">3. Managing and Disabling Cookies</h3>
                <p>
                  You can control or disable cookies through your internet browser settings. Please note that disabling essential cookies may impact certain interactive animations or page transitions on our website.
                </p>

                <h3 className="mt-4 mb-3">4. Questions &amp; Inquiries</h3>
                <p>
                  If you have inquiries regarding our cookie usage, please contact us at:
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
