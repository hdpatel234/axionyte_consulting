import React from "react";

export default function PartnersTicker() {
  const logos = [
    "/images/company-supports-logo-1.svg",
    "/images/company-supports-logo-2.svg",
    "/images/company-supports-logo-3.svg",
    "/images/company-supports-logo-4.svg",
    "/images/company-supports-logo-1.svg",
    "/images/company-supports-logo-2.svg",
    "/images/company-supports-logo-3.svg",
    "/images/company-supports-logo-4.svg",
  ];

  return (
    <div className="our-scrolling-ticker">
      <div className="scrolling-ticker-box">
        <div className="scrolling-content">
          {logos.map((logo, idx) => (
            <span key={`ticker-1-${idx}`}>
              <img src={logo} alt={`Partner ${idx + 1}`} />
            </span>
          ))}
        </div>
        <div className="scrolling-content">
          {logos.map((logo, idx) => (
            <span key={`ticker-2-${idx}`}>
              <img src={logo} alt={`Partner ${idx + 1}`} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
