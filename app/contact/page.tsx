import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/common/ContactForm";
import PartnersTicker from "@/components/common/PartnersTicker";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: `Contact Us | ${COMPANY.name}`,
  description: `Get in touch with ${COMPANY.name} for enterprise cybersecurity consulting, risk assessment, and AI service solutions. Contact ${COMPANY.owner} at ${COMPANY.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header Section Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Contact <span>Us</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Section End */}

      {/* Industries Marquee */}
      <PartnersTicker />

      {/* Page Contact Us Start */}
      <div className="page-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Contact Info List Start */}
              <div className="contact-info-list">
                {/* Contact Info Item: Phone */}
                <div className="contact-info-item wow fadeInUp">
                  <div className="icon-box">
                    <img src="/images/icon-phone-white.svg" alt="Phone" />
                  </div>
                  <div className="contact-info-content">
                    <h3>Direct Phone</h3>
                    <p>
                      <a href={COMPANY.phoneLink}>{COMPANY.phone}</a>
                    </p>
                    <p style={{ fontSize: "14px", color: "var(--text-color)" }}>
                      Contact: {COMPANY.owner} ({COMPANY.role})
                    </p>
                  </div>
                </div>

                {/* Contact Info Item: Address */}
                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon-box">
                    <img src="/images/icon-location-white.svg" alt="Location" />
                  </div>
                  <div className="contact-info-content">
                    <h3>Office Address</h3>
                    <p style={{ lineHeight: "1.5" }}>
                      {COMPANY.address.suite},<br />
                      {COMPANY.address.street},<br />
                      {COMPANY.address.cityStateZip}
                    </p>
                  </div>
                </div>

                {/* Contact Info Item: Focus */}
                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/images/icon-service-item-1.svg" alt="Services" />
                  </div>
                  <div className="contact-info-content">
                    <h3>Business Focus</h3>
                    <p>{COMPANY.tagline}</p>
                    <p style={{ fontSize: "14px", color: "var(--text-color)" }}>
                      Enterprise Advisory & Strategy
                    </p>
                  </div>
                </div>

                {/* Contact Info Item: Consultation */}
                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <img src="/images/icon-how-it-work-3.svg" alt="Consultation" />
                  </div>
                  <div className="contact-info-content">
                    <h3>Consultations</h3>
                    <p>Monday - Friday</p>
                    <p style={{ fontSize: "14px", color: "var(--text-color)" }}>
                      Strategic discussions by appointment
                    </p>
                  </div>
                </div>
              </div>
              {/* Contact Info List End */}
            </div>

            <div className="col-xl-5">
              {/* Contact Us Content Start */}
              <div className="contact-content-box">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Get In Touch</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Talk With Our <span>Expert</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Have questions about hardening your security posture or integrating AI solutions? Reach out to {COMPANY.name} today for specialized consulting and guidance.
                  </p>
                </div>

                {/* Google Map Embed */}
                <div className="google-map-iframe wow fadeInUp" data-wow-delay="0.4s">
                  <iframe
                    src={COMPANY.mapEmbedUrl}
                    title="AXIONYTE Consulting Office Location"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-3">
                  <a
                    href={COMPANY.mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-underline"
                    style={{ fontSize: "14px" }}
                  >
                    Open address in Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-7">
              {/* Contact Us Form Start */}
              <div className="contact-us-form">
                <div className="section-title">
                  <h2 className="text-anime-style-2">
                    Submit Your <span>Inquiry</span>
                  </h2>
                  <p className="wow fadeInUp">
                    Fill out the form below with your requirements and {COMPANY.owner} will connect with you to discuss how we can support your business.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Contact Us End */}
    </>
  );
}
