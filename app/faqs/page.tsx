import type { Metadata } from "next";
import Link from "next/link";
import PartnersTicker from "@/components/common/PartnersTicker";
import { FAQS, COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${COMPANY.name}`,
  description: `Common questions regarding cybersecurity consulting, security assessments, and AI advisory services with ${COMPANY.name}.`,
};

export default function FaqsPage() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Frequently Asked <span>Questions</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      FAQs
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      <PartnersTicker />

      {/* FAQs Section Start */}
      <div className="page-faqs py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-5">
                <h3 className="wow fadeInUp">Common Inquiries</h3>
                <h2 className="text-anime-style-2">
                  Navigating Cybersecurity &amp; AI <span>Consulting</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Here are straightforward answers to common questions about how {COMPANY.name} collaborates with organizations to fortify defenses and accelerate intelligent capabilities.
                </p>
              </div>

              <div className="faq-accordion" id="accordionFaqPage">
                {FAQS.map((faq, index) => {
                  const collapseId = `faqCollapse${index}`;
                  const headingId = `faqHeading${index}`;
                  const isOpen = index === 0;

                  return (
                    <div key={faq.id} className="accordion-item wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
                      <h2 className="accordion-header" id={headingId}>
                        <button
                          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded={isOpen ? "true" : "false"}
                          aria-controls={collapseId}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={collapseId}
                        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                        aria-labelledby={headingId}
                        data-bs-parent="#accordionFaqPage"
                      >
                        <div className="accordion-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Consultation CTA Box */}
              <div
                className="mt-5 p-4 rounded text-center text-white"
                style={{
                  background: "linear-gradient(135deg, rgba(16, 32, 54, 0.95), rgba(10, 48, 30, 0.95))",
                  border: "1px solid rgba(46, 204, 113, 0.3)",
                }}
              >
                <h3 className="text-white mb-2">Have a Specific Technical Question?</h3>
                <p className="text-white-50 mb-4">
                  Connect directly with {COMPANY.owner} to discuss your organization&apos;s unique security or technology landscape.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/contact" className="btn-default">
                    Talk with Our Expert
                  </Link>
                  <a href={COMPANY.phoneLink} className="btn-default btn-outline" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                    Call {COMPANY.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQs Section End */}
    </>
  );
}
