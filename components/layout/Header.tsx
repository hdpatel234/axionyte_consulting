"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_LINKS } from "@/lib/company-data";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const handleScroll = () => {
      if (window.scrollY > 60) {
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
  };

  return (
    <>
      {/* Preloader */}
      <div className={`preloader ${isLoaded ? "loaded" : ""}`}>
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <img
              src="/images/favicon.png"
              alt="Loading"
              style={{ width: "45px", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="main-header">
        <div className={`header-sticky ${isSticky ? "active" : ""}`}>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              {/* Official AXIONYTE Consulting Logo */}
              <Link
                className="navbar-brand"
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    display: "inline-flex",
                    alignItems: "center",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  <img
                    src="/images/axionyte-logo.png"
                    alt={COMPANY.name}
                    style={{
                      height: "40px",
                      width: "auto",
                      maxWidth: "230px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    {NAV_LINKS.map((item) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href);
                      return (
                        <li
                          key={item.href}
                          className={`nav-item ${isActive ? "active" : ""}`}
                        >
                          <Link className="nav-link" href={item.href}>
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Header CTA Button & Theme Toggle */}
                <div className="header-btn" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <ThemeToggle />
                  <Link className="btn-default" href="/contact">
                    Talk with Our Expert
                  </Link>
                </div>
              </div>

              {/* Mobile Right Controls: Theme Toggle & Hamburger */}
              <div className="mobile-header-controls d-lg-none" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <ThemeToggle />
                <div
                  className="navbar-toggle"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{ cursor: "pointer" }}
                  aria-label="Toggle navigation menu"
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
            </div>
          </nav>

          {/* Mobile Responsive Menu Drawer */}
          {mobileMenuOpen && (
            <div className="responsive-menu d-lg-none">
              <div className="slicknav_menu">
                <ul className="slicknav_nav" role="menu">
                  {NAV_LINKS.map((item) => (
                    <li key={`mobile-${item.href}`}>
                      <Link
                        href={item.href}
                        role="menuitem"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li style={{ marginTop: "14px", padding: "0 10px" }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                      <ThemeToggle showText={true} />
                    </div>
                    <Link
                      href="/contact"
                      className="btn-default"
                      role="menuitem"
                      onClick={closeMenu}
                      style={{
                        display: "block",
                        textAlign: "center",
                        padding: "10px 16px",
                      }}
                    >
                      Talk with Our Expert
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
