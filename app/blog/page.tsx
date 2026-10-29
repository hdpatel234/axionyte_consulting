import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Blog - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function BlogPage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Our <span>blog</span></h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Our blog</li>
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

    {/*  Page Blog Start  */}
    <div className="page-blog">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/*  Post Item Start  */}
                    <div className="post-item wow fadeInUp">
                        {/*  Post Featured Image Start */}
                        <div className="post-featured-image">
                            <Link href="/blog-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/post-1.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Post Featured Image End  */}

                        {/*  Post Item Body Start  */}
                        <div className="post-item-body">
                            {/*  Post Item Content Start  */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">Top 10 Cybersecurity Threats Every Business Must Watch
                                        Out for in 2025</Link></h2>
                            </div>
                            {/*  Post Item Content End  */}

                            {/*  Post Item Readmore Button Start */}
                            <div className="post-item-btn">
                                <Link href="/blog-single" className="readmore-btn">read more</Link>
                            </div>
                            {/*  Post Item Readmore Button End */}
                        </div>
                        {/*  Post Item Body End  */}
                    </div>
                    {/*  Post Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Post Item Start  */}
                    <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
                        {/*  Post Featured Image Start */}
                        <div className="post-featured-image">
                            <Link href="/blog-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/post-2.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Post Featured Image End  */}

                        {/*  Post Item Body Start  */}
                        <div className="post-item-body">
                            {/*  Post Item Content Start  */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">Ransomware Attack Explain Preventin Response & Recovery
                                        Strategies</Link></h2>
                            </div>
                            {/*  Post Item Content End  */}

                            {/*  Post Item Readmore Button Start */}
                            <div className="post-item-btn">
                                <Link href="/blog-single" className="readmore-btn">read more</Link>
                            </div>
                            {/*  Post Item Readmore Button End */}
                        </div>
                        {/*  Post Item Body End  */}
                    </div>
                    {/*  Post Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Post Item Start  */}
                    <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
                        {/*  Post Featured Image Start */}
                        <div className="post-featured-image">
                            <Link href="/blog-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/post-3.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Post Featured Image End  */}

                        {/*  Post Item Body Start  */}
                        <div className="post-item-body">
                            {/*  Post Item Content Start  */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">Essential Security Tips to Protect Your Remote Workforce
                                        and Data</Link></h2>
                            </div>
                            {/*  Post Item Content End  */}

                            {/*  Post Item Readmore Button Start */}
                            <div className="post-item-btn">
                                <Link href="/blog-single" className="readmore-btn">read more</Link>
                            </div>
                            {/*  Post Item Readmore Button End */}
                        </div>
                        {/*  Post Item Body End  */}
                    </div>
                    {/*  Post Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Post Item Start  */}
                    <div className="post-item wow fadeInUp" data-wow-delay="0.6s">
                        {/*  Post Featured Image Start */}
                        <div className="post-featured-image">
                            <Link href="/blog-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/post-4.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Post Featured Image End  */}

                        {/*  Post Item Body Start  */}
                        <div className="post-item-body">
                            {/*  Post Item Content Start  */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">The Future of Cyber Threats Key Risks and Trends to Watch
                                        in 2025</Link></h2>
                            </div>
                            {/*  Post Item Content End  */}

                            {/*  Post Item Readmore Button Start */}
                            <div className="post-item-btn">
                                <Link href="/blog-single" className="readmore-btn">read more</Link>
                            </div>
                            {/*  Post Item Readmore Button End */}
                        </div>
                        {/*  Post Item Body End  */}
                    </div>
                    {/*  Post Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Post Item Start  */}
                    <div className="post-item wow fadeInUp" data-wow-delay="0.8s">
                        {/*  Post Featured Image Start */}
                        <div className="post-featured-image">
                            <Link href="/blog-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/post-5.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Post Featured Image End  */}

                        {/*  Post Item Body Start  */}
                        <div className="post-item-body">
                            {/*  Post Item Content Start  */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">Why Employee Training Is the First Line of Defense
                                        Against Cyber Attack</Link></h2>
                            </div>
                            {/*  Post Item Content End  */}

                            {/*  Post Item Readmore Button Start */}
                            <div className="post-item-btn">
                                <Link href="/blog-single" className="readmore-btn">read more</Link>
                            </div>
                            {/*  Post Item Readmore Button End */}
                        </div>
                        {/*  Post Item Body End  */}
                    </div>
                    {/*  Post Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Post Item Start  */}
                    <div className="post-item wow fadeInUp" data-wow-delay="1s">
                        {/*  Post Featured Image Start */}
                        <div className="post-featured-image">
                            <Link href="/blog-single" data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/post-6.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  Post Featured Image End  */}

                        {/*  Post Item Body Start  */}
                        <div className="post-item-body">
                            {/*  Post Item Content Start  */}
                            <div className="post-item-content">
                                <h2><Link href="/blog-single">Cloud Security Best Practice Business Should Follow to
                                        Stay Protected</Link></h2>
                            </div>
                            {/*  Post Item Content End  */}

                            {/*  Post Item Readmore Button Start */}
                            <div className="post-item-btn">
                                <Link href="/blog-single" className="readmore-btn">read more</Link>
                            </div>
                            {/*  Post Item Readmore Button End */}
                        </div>
                        {/*  Post Item Body End  */}
                    </div>
                    {/*  Post Item End  */}
                </div>

                <div className="col-lg-12">
                    {/*  Page Pagination Start  */}
                    <div className="page-pagination wow fadeInUp" data-wow-delay="1s">
                        <ul className="pagination">
                            <li><a href="#"><i className="fa-solid fa-angle-left"></i></a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#"><i className="fa-solid fa-angle-right"></i></a></li>
                        </ul>
                    </div>
                    {/*  Page Pagination End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Blog End  */}
    </>
  );
}
