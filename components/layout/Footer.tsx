"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail("");
    }
  };

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
                      <img src="/images/icon-asterisk.svg" alt="" /> Let&apos;s Work Together
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Let&apos;s Work Together
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Let&apos;s Work Together
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Let&apos;s Work Together
                    </span>
                  </div>

                  <div className="scrolling-content">
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Let&apos;s Work Together
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Let&apos;s Work Together
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Let&apos;s Work Together
                    </span>
                    <span>
                      <img src="/images/icon-asterisk.svg" alt="" /> Let&apos;s Work Together
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
          <div className="col-xl-3 col-md-6">
            {/* About Footer */}
            <div className="about-footer">
              <div className="footer-logo">
                <Link href="/">
                  <img src="/images/footer-logo.svg" alt="Netzon" />
                </Link>
              </div>
              <div className="about-footer-content">
                <p>
                  Secure your cloud environments & ensure safe migration with
                  compliance-ready.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            {/* Footer Location Link */}
            <div className="footer-location footer-links">
              <h3>Our Location</h3>
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            {/* Footer Contact */}
            <div className="footer-contact footer-links">
              <h3>Contact Information</h3>
              <ul>
                <li>
                  <a href="tel:123456789">+(123) 456-789</a>
                </li>
                <li>
                  <a href="mailto:info@domainname.com">info@domainname.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            {/* Footer Newsletter Form */}
            <div className="footer-newsletter-form footer-links">
              <h3>Subscribe To Newsletter</h3>
              <p>
                Stay informed with the latest cybersecurity news & expert tips.
              </p>
              <form id="newslettersForm" onSubmit={handleNewsletter}>
                <div className="form-group">
                  <input
                    type="email"
                    name="mail"
                    className="form-control"
                    id="mail"
                    placeholder="Email Address *"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    Subscribe
                  </button>
                </div>
                {subscribed && (
                  <p style={{ color: "#00f0ff", marginTop: "8px", fontSize: "14px" }}>
                    Thank you for subscribing!
                  </p>
                )}
              </form>
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
                  <p>Copyright © 2025 All Rights Reserved.</p>
                </div>

                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blogs</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
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
