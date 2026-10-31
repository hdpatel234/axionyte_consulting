import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export default function Footer() {
  return (
    <footer className="main-footer compact-footer">
      <div className="container">
        <div className="row footer-main-row">
          {/* Column 1: Brand & Description */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
            <div className="about-footer">
              <div className="footer-logo mb-3">
                <Link
                  href="/"
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src="/images/axionyte-logo.png"
                    alt={COMPANY.name}
                    className="footer-logo-img"
                    style={{
                      height: "58px",
                      width: "auto",
                      maxWidth: "290px",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Link>
              </div>
              <div className="about-footer-content">
                <p className="footer-company-desc">
                  Strategic Cybersecurity and AI advisory services empowering modern enterprises
                  to fortify resilience, satisfy compliance, and embrace intelligent technology securely.
                </p>
                <div className="footer-brand-badge">
                  <span className="badge-dot"></span>
                  <span>{COMPANY.tagline}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-3 col-md-5 col-6 mb-4 mb-lg-0">
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/company">Company</Link>
                </li>
                <li>
                  <Link href="/service">Service</Link>
                </li>
                <li>
                  <Link href="/partnerships">Partnerships</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="col-lg-4 col-md-7 col-12 mb-4 mb-lg-0">
            <div className="footer-contact footer-links">
              <h3>Contact Information</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <span className="footer-contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <div>
                    <span className="contact-label">Phone:</span>
                    <a href={COMPANY.phoneLink} className="contact-value phone-highlight">
                      {COMPANY.phone}
                    </a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <span className="footer-contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <div>
                    <span className="contact-label">Office Address:</span>
                    <address className="contact-address mb-0">
                      {COMPANY.address.suite}, {COMPANY.address.street},<br />
                      {COMPANY.address.cityStateZip}, {COMPANY.address.country}
                    </address>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright Bottom Bar */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright-box">
                <div className="footer-copyright-text">
                  <p>Copyright © 2026 {COMPANY.name}. All Rights Reserved.</p>
                </div>

                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms-and-conditions">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="/cookie-policy">Cookie Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

