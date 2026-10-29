import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "lenis/dist/lenis.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MagicCursor from "@/components/common/MagicCursor";
import SmoothScroll from "@/components/common/SmoothScroll";
import { COMPANY } from "@/lib/company-data";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axionyte-consulting.vercel.app"),
  title: {
    default: "AXIONYTE Consulting | Cybersecurity & AI Services",
    template: "%s | AXIONYTE Consulting",
  },
  description:
    "AXIONYTE Consulting helps organizations strengthen digital security, adopt intelligent technologies, and build resilient business operations through cybersecurity and AI-focused solutions.",
  keywords: [
    "Cybersecurity Consulting",
    "AI Services",
    "Security Assessment",
    "Risk and Compliance Advisory",
    "AI Automation",
    "Digital Security Strategy",
    "Ahmedabad Cybersecurity",
  ],
  authors: [{ name: COMPANY.owner }],
  creator: COMPANY.name,
  icons: {
    icon: [
      { url: "/images/favicon.png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: "/images/axionyte-shield.png",
  },
  openGraph: {
    title: "AXIONYTE Consulting | Cybersecurity & AI Services",
    description:
      "Empowering organizations with intelligent cybersecurity and AI consulting solutions for enterprise resilience.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/axionyte-logo-original.jpg",
        width: 1200,
        height: 630,
        alt: "AXIONYTE Consulting - Cybersecurity · AI Services",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY.name,
  image: "https://axionyte-consulting.vercel.app/images/axionyte-logo-original.jpg",
  telephone: COMPANY.phone,
  founder: {
    "@type": "Person",
    name: COMPANY.owner,
    jobTitle: COMPANY.role,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${COMPANY.address.suite}, ${COMPANY.address.street}`,
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    addressCountry: "IN",
  },
  description:
    "AXIONYTE Consulting provides specialized cybersecurity assessments, strategic risk advisory, and AI automation solutions for enterprise organizations.",
  knowsAbout: [
    "Cybersecurity Consulting",
    "Artificial Intelligence",
    "Security Assessments",
    "Risk & Compliance Advisory",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.variable} suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('axionyte-theme');
                  var theme = saved === 'dark' ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={sora.className} suppressHydrationWarning>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <MagicCursor />
      </body>
    </html>
  );
}
