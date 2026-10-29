"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fade out preloader shortly after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 400);

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <>
      {/* Preloader */}
      <div className={`preloader ${isLoaded ? "loaded" : ""}`}>
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <img src="/images/loader.svg" alt="Loading" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="main-header">
        <div className={`header-sticky ${isSticky ? "active" : ""}`}>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              {/* Logo */}
              <Link className="navbar-brand" href="/">
                <img src="/images/logo.svg" alt="Netzon Logo" />
              </Link>

              {/* Desktop Menu */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li
                      className={`nav-item submenu ${
                        pathname === "/" ||
                        pathname === "/index-image" ||
                        pathname === "/index-video"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link className="nav-link" href="/">
                        Home
                      </Link>
                      <ul>
                        <li className="nav-item">
                          <Link className="nav-link" href="/">
                            Home - Main
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/index-image">
                            Home - Image
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/index-video">
                            Home - Video
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={`nav-item ${
                        pathname === "/about" ? "active" : ""
                      }`}
                    >
                      <Link className="nav-link" href="/about">
                        About Us
                      </Link>
                    </li>

                    <li
                      className={`nav-item ${
                        pathname === "/services" ||
                        pathname === "/service-single"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link className="nav-link" href="/services">
                        Services
                      </Link>
                    </li>

                    <li
                      className={`nav-item ${
                        pathname === "/blog" || pathname === "/blog-single"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link className="nav-link" href="/blog">
                        Blog
                      </Link>
                    </li>

                    <li
                      className={`nav-item submenu ${
                        [
                          "/service-single",
                          "/blog-single",
                          "/case-study",
                          "/case-study-single",
                          "/team",
                          "/team-single",
                          "/pricing",
                          "/testimonials",
                          "/image-gallery",
                          "/video-gallery",
                          "/faqs",
                          "/404",
                        ].includes(pathname)
                          ? "active"
                          : ""
                      }`}
                    >
                      <a
                        className="nav-link"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        Pages
                      </a>
                      <ul>
                        <li className="nav-item">
                          <Link className="nav-link" href="/service-single">
                            Service Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/blog-single">
                            Blog Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/case-study">
                            Case Study
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/case-study-single">
                            Case Study Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/team">
                            Our Team
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/team-single">
                            Team Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/pricing">
                            Pricing Plan
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/testimonials">
                            Testimonials
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/image-gallery">
                            Image Gallery
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/video-gallery">
                            Video Gallery
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/faqs">
                            FAQs
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/not-found">
                            404
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={`nav-item ${
                        pathname === "/contact" ? "active" : ""
                      }`}
                    >
                      <Link className="nav-link" href="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Header CTA Button */}
                <div className="header-btn">
                  <Link className="btn-default" href="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Mobile Navbar Toggle */}
              <div
                className="navbar-toggle d-lg-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className={`slicknav_btn ${
                    mobileMenuOpen ? "slicknav_open" : ""
                  }`}
                >
                  <span className="slicknav_menutxt"></span>
                  <span className="slicknav_icon">
                    <span className="slicknav_icon-bar"></span>
                    <span className="slicknav_icon-bar"></span>
                    <span className="slicknav_icon-bar"></span>
                  </span>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Responsive Menu Drawer */}
          {mobileMenuOpen && (
            <div className="responsive-menu d-lg-none">
              <div className="slicknav_menu">
                <ul className="slicknav_nav" role="menu">
                  <li
                    className={`slicknav_collapsed ${
                      activeSubmenu === "home" ? "slicknav_open" : ""
                    }`}
                  >
                    <a
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      className="slicknav_item slicknav_row"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu("home");
                      }}
                    >
                      <span>Home</span>
                      <span className="slicknav_arrow">
                        {activeSubmenu === "home" ? "▼" : "▶"}
                      </span>
                    </a>
                    {activeSubmenu === "home" && (
                      <ul role="menu" className="slicknav_hidden" style={{ display: "block" }}>
                        <li>
                          <Link href="/" role="menuitem" onClick={closeMenu}>
                            Home - Main
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-image" role="menuitem" onClick={closeMenu}>
                            Home - Image
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-video" role="menuitem" onClick={closeMenu}>
                            Home - Video
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link href="/about" role="menuitem" onClick={closeMenu}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" role="menuitem" onClick={closeMenu}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" role="menuitem" onClick={closeMenu}>
                      Blog
                    </Link>
                  </li>

                  <li
                    className={`slicknav_collapsed ${
                      activeSubmenu === "pages" ? "slicknav_open" : ""
                    }`}
                  >
                    <a
                      href="#"
                      role="menuitem"
                      aria-haspopup="true"
                      className="slicknav_item slicknav_row"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu("pages");
                      }}
                    >
                      <span>Pages</span>
                      <span className="slicknav_arrow">
                        {activeSubmenu === "pages" ? "▼" : "▶"}
                      </span>
                    </a>
                    {activeSubmenu === "pages" && (
                      <ul role="menu" className="slicknav_hidden" style={{ display: "block" }}>
                        <li>
                          <Link href="/service-single" role="menuitem" onClick={closeMenu}>
                            Service Details
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-single" role="menuitem" onClick={closeMenu}>
                            Blog Details
                          </Link>
                        </li>
                        <li>
                          <Link href="/case-study" role="menuitem" onClick={closeMenu}>
                            Case Study
                          </Link>
                        </li>
                        <li>
                          <Link href="/case-study-single" role="menuitem" onClick={closeMenu}>
                            Case Study Details
                          </Link>
                        </li>
                        <li>
                          <Link href="/team" role="menuitem" onClick={closeMenu}>
                            Our Team
                          </Link>
                        </li>
                        <li>
                          <Link href="/team-single" role="menuitem" onClick={closeMenu}>
                            Team Details
                          </Link>
                        </li>
                        <li>
                          <Link href="/pricing" role="menuitem" onClick={closeMenu}>
                            Pricing Plan
                          </Link>
                        </li>
                        <li>
                          <Link href="/testimonials" role="menuitem" onClick={closeMenu}>
                            Testimonials
                          </Link>
                        </li>
                        <li>
                          <Link href="/image-gallery" role="menuitem" onClick={closeMenu}>
                            Image Gallery
                          </Link>
                        </li>
                        <li>
                          <Link href="/video-gallery" role="menuitem" onClick={closeMenu}>
                            Video Gallery
                          </Link>
                        </li>
                        <li>
                          <Link href="/faqs" role="menuitem" onClick={closeMenu}>
                            FAQs
                          </Link>
                        </li>
                        <li>
                          <Link href="/not-found" role="menuitem" onClick={closeMenu}>
                            404
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link href="/contact" role="menuitem" onClick={closeMenu}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
