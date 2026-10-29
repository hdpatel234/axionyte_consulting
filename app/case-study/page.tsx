import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Case Studies - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function CaseStudyPage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Case <span>Studies</span></h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Case Studies</li>
                            </ol>
                        </nav>
                    </div>
                    {/*  Page Header Box End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Header Section End  */}

    {/*  Scrolling Ticker Section Start  */}
    <div className="our-scrolling-ticker">
        {/*  Scrolling Ticker Start  */}
        <div className="scrolling-ticker-box">
            <div className="scrolling-content">
                <span><img src="/images/company-supports-logo-1.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-2.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-3.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-4.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-1.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-2.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-3.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-4.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-1.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-2.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-3.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-4.svg" alt="" /></span>
            </div>

            <div className="scrolling-content">
                <span><img src="/images/company-supports-logo-1.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-2.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-3.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-4.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-1.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-2.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-3.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-4.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-1.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-2.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-3.svg" alt="" /></span>
                <span><img src="/images/company-supports-logo-4.svg" alt="" /></span>
            </div>
        </div>
        {/*  Scrolling Ticker End  */}
    </div>
    {/*  Scrolling Ticker Section End  */}

    {/*  Page Case Study Start  */}
    <div className="page-case-study">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/*  Case Study Item Start  */}
                    <div className="case-study-item wow fadeInUp">
                        {/*  Case Study Image Start  */}
                        <div className="case-study-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-image-1.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Case Study Image End  */}

                        {/*  Case Study Item Button Start  */}
                        <div className="case-study-item-btn">
                            <Link href="/case-study-single">
                                <img src="/images/arrow-white.svg" alt="" />
                            </Link>
                        </div>
                        {/*  Case Study Item Button End  */}

                        {/*  Case Study Iten Content Start  */}
                        <div className="case-study-item-content">
                            <h3><Link href="/case-study-single">E-Commerce Fraud Preventin</Link></h3>
                            <ul>
                                <li><a href="#">Fraud</a></li>
                                <li><a href="#">E-Commerce</a></li>
                            </ul>
                        </div>
                        {/*  Case Study Item Content End  */}
                    </div>
                    {/*  Case Study Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Case Study Item Start  */}
                    <div className="case-study-item wow fadeInUp" data-wow-delay="0.2s">
                        {/*  Case Study Image Start  */}
                        <div className="case-study-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-image-2.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Case Study Image End  */}

                        {/*  Case Study Item Button Start  */}
                        <div className="case-study-item-btn">
                            <Link href="/case-study-single">
                                <img src="/images/arrow-white.svg" alt="" />
                            </Link>
                        </div>
                        {/*  Case Study Item Button End  */}

                        {/*  Case Study Iten Content Start  */}
                        <div className="case-study-item-content">
                            <h3><Link href="/case-study-single">Banking Fraud Defense</Link></h3>
                            <ul>
                                <li><a href="#">Banking</a></li>
                                <li><a href="#">Defense</a></li>
                            </ul>
                        </div>
                        {/*  Case Study Item Content End  */}
                    </div>
                    {/*  Case Study Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Case Study Item Start  */}
                    <div className="case-study-item wow fadeInUp" data-wow-delay="0.4s">
                        {/*  Case Study Image Start  */}
                        <div className="case-study-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-image-3.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Case Study Image End  */}

                        {/*  Case Study Item Button Start  */}
                        <div className="case-study-item-btn">
                            <Link href="/case-study-single">
                                <img src="/images/arrow-white.svg" alt="" />
                            </Link>
                        </div>
                        {/*  Case Study Item Button End  */}

                        {/*  Case Study Iten Content Start  */}
                        <div className="case-study-item-content">
                            <h3><Link href="/case-study-single">Government Cyber Defense</Link></h3>
                            <ul>
                                <li><a href="#">Defense</a></li>
                                <li><a href="#">Cyber</a></li>
                            </ul>
                        </div>
                        {/*  Case Study Item Content End  */}
                    </div>
                    {/*  Case Study Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Case Study Item Start  */}
                    <div className="case-study-item wow fadeInUp" data-wow-delay="0.6s">
                        {/*  Case Study Image Start  */}
                        <div className="case-study-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-image-4.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Case Study Image End  */}

                        {/*  Case Study Item Button Start  */}
                        <div className="case-study-item-btn">
                            <Link href="/case-study-single">
                                <img src="/images/arrow-white.svg" alt="" />
                            </Link>
                        </div>
                        {/*  Case Study Item Button End  */}

                        {/*  Case Study Iten Content Start  */}
                        <div className="case-study-item-content">
                            <h3><Link href="/case-study-single">Remote Work Security</Link></h3>
                            <ul>
                                <li><a href="#">Remote</a></li>
                                <li><a href="#">Security</a></li>
                            </ul>
                        </div>
                        {/*  Case Study Item Content End  */}
                    </div>
                    {/*  Case Study Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Case Study Item Start  */}
                    <div className="case-study-item wow fadeInUp" data-wow-delay="0.8s">
                        {/*  Case Study Image Start  */}
                        <div className="case-study-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-image-5.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Case Study Image End  */}

                        {/*  Case Study Item Button Start  */}
                        <div className="case-study-item-btn">
                            <Link href="/case-study-single">
                                <img src="/images/arrow-white.svg" alt="" />
                            </Link>
                        </div>
                        {/*  Case Study Item Button End  */}

                        {/*  Case Study Iten Content Start  */}
                        <div className="case-study-item-content">
                            <h3><Link href="/case-study-single">Finance Data Security</Link></h3>
                            <ul>
                                <li><a href="#">Finance</a></li>
                                <li><a href="#">DataSecurity</a></li>
                            </ul>
                        </div>
                        {/*  Case Study Item Content End  */}
                    </div>
                    {/*  Case Study Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Case Study Item Start  */}
                    <div className="case-study-item wow fadeInUp" data-wow-delay="1s">
                        {/*  Case Study Image Start  */}
                        <div className="case-study-image">
                            <Link href="/case-study-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/case-study-image-6.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Case Study Image End  */}

                        {/*  Case Study Item Button Start  */}
                        <div className="case-study-item-btn">
                            <Link href="/case-study-single">
                                <img src="/images/arrow-white.svg" alt="" />
                            </Link>
                        </div>
                        {/*  Case Study Item Button End  */}

                        {/*  Case Study Iten Content Start  */}
                        <div className="case-study-item-content">
                            <h3><Link href="/case-study-single">Supply Chain Security</Link></h3>
                            <ul>
                                <li><a href="#">Chain</a></li>
                                <li><a href="#">Data Privacy</a></li>
                            </ul>
                        </div>
                        {/*  Case Study Item Content End  */}
                    </div>
                    {/*  Case Study Item End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Case Study End  */}
    </>
  );
}
