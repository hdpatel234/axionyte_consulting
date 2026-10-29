import type { Metadata } from "next";
import Link from "next/link";
import PartnersTicker from "@/components/common/PartnersTicker";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: `Page Not Found - ${COMPANY.name}`,
  description: `${COMPANY.name} - Cybersecurity & AI Services`,
};

export default function NotFound() {
  return (
    <>
      {/* Page Header Section Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Page <span>Not Found</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Page Not Found
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Section End */}

      <PartnersTicker />

      {/* Error Page Start */}
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-page-image wow fadeInUp">
                <img src="/images/404-error-img.png" alt="404 Error" />
              </div>
              <div className="error-page-content">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Oops! Page <span>Not Found</span>
                  </h2>
                </div>
                <div className="error-page-content-body">
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    The page you are looking for does not exist or may have been relocated.
                  </p>
                  <Link className="btn-default wow fadeInUp" data-wow-delay="0.4s" href="/">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Error Page End */}
    </>
  );
}
