import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export default function Footer() {
  return (
    <footer className="main-footer">
      {/* Footer Scrolling Ticker Box Start */}
      <div className="footer-scrolling-ticker-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-scrolling-ticker">
                {/* Scrolling Ticker Box */}
                <div className="scrolling-ticker-box">
                  <div className="scrolling-content">
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Talk to Our Expert: {COMPANY.phone}
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Cybersecurity & AI Services
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Talk to Our Expert: {COMPANY.phone}
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Cybersecurity & AI Services
                    </span>
                  </div>

                  <div className="scrolling-content">
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Talk to Our Expert: {COMPANY.phone}
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Cybersecurity & AI Services
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Talk to Our Expert: {COMPANY.phone}
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Cybersecurity & AI Services
                    </span>
                  </div>
                </div>

                {/* Footer Contact Button */}
                <div className="footer-contact-btn">
                  <Link href="/contact" className="schedule-btn">
                    Contact Us <img src="/images/arrow-white.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Scrolling Ticker Box End */}

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 mb-4">
            {/* About Footer */}
            <div className="about-footer">
              <div className="footer-logo mb-3">
                <Link
                  href="/"
                  style={{
                    display: "inline-block",
                    background: "#ffffff",
                    padding: "6px 14px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src="/images/axionyte-logo.png"
                    alt={COMPANY.name}
                    style={{ height: "42px", width: "auto" }}
                  />
                </Link>
              </div>
              <div className="about-footer-content">
                <p>
                  {COMPANY.name} delivers strategic Cybersecurity and AI Services,
                  helping forward-thinking organizations build robust security postures
                  and adopt intelligent enterprise technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-md-6 mb-4">
            {/* Quick Links */}
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
                  <Link href="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/partnerships">Partnerships</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            {/* Contact Information */}
            <div className="footer-contact footer-links">
              <h3>Contact Us</h3>
              <ul>
                <li style={{ color: "#ffffff", marginBottom: "8px" }}>
                  <strong>{COMPANY.owner}</strong> — {COMPANY.role}
                </li>
                <li>
                  <a href={COMPANY.phoneLink}>
                    <i className="fa-solid fa-phone me-2" style={{ color: "#00f0ff" }}></i>
                    {COMPANY.phone}
                  </a>
                </li>
                <li style={{ marginTop: "12px" }}>
                  <Link
                    href="/contact"
                    className="btn-default"
                    style={{
                      padding: "8px 18px",
                      fontSize: "13px",
                      display: "inline-block",
                    }}
                  >
                    Schedule Consultation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            {/* Office Location */}
            <div className="footer-location footer-links">
              <h3>Office Address</h3>
              <p style={{ lineHeight: "1.7" }}>
                {COMPANY.address.suite},<br />
                {COMPANY.address.street},<br />
                {COMPANY.address.cityStateZip},<br />
                {COMPANY.address.country}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
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
