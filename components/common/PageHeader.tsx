import Link from "next/link";
import React from "react";

interface PageHeaderProps {
  title: string;
  highlightedWord?: string;
  breadcrumbCurrent: string;
}

export default function PageHeader({
  title,
  highlightedWord,
  breadcrumbCurrent,
}: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                {title} {highlightedWord && <span>{highlightedWord}</span>}
              </h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {breadcrumbCurrent}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
