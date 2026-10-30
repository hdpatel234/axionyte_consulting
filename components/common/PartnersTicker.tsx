import React from "react";
import { INDUSTRIES_SERVED } from "@/lib/company-data";

export default function PartnersTicker() {
  return (
    <div className="our-scrolling-ticker">
      <div className="scrolling-ticker-box">
        <div className="scrolling-content">
          {INDUSTRIES_SERVED.map((industry, idx) => (
            <span
              key={`industry-1-${idx}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                margin: "0 24px",
              }}
            >
              <img
                src="/images/icon-asterisk.svg"
                alt=""
                style={{
                  width: "15px",
                  height: "15px",
                  filter:
                    "brightness(0) saturate(100%) invert(35%) sepia(85%) saturate(540%) hue-rotate(115deg) brightness(95%) contrast(92%)",
                }}
              />
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#ffffff",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                {industry}
              </span>
            </span>
          ))}
        </div>

        <div className="scrolling-content">
          {INDUSTRIES_SERVED.map((industry, idx) => (
            <span
              key={`industry-2-${idx}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                margin: "0 24px",
              }}
            >
              <img
                src="/images/icon-asterisk.svg"
                alt=""
                style={{
                  width: "15px",
                  height: "15px",
                  filter:
                    "brightness(0) saturate(100%) invert(35%) sepia(85%) saturate(540%) hue-rotate(115deg) brightness(95%) contrast(92%)",
                }}
              />
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#ffffff",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                {industry}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
