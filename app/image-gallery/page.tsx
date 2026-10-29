import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Image Gallery - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function ImageGalleryPage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Image <span>Gallery</span></h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Image Gallery</li>
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

    {/*  Photo Gallery Start  */}
    <div className="page-gallery">
        <div className="container">
            {/*  gallery section start  */}
            <div className="row gallery-items page-gallery-box">
                <div className="col-lg-4 col-6">
                    {/*  Image Gallery start  */}
                    <div className="photo-gallery wow fadeInUp">
                        <Link href="/images/gallery-1.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-1.jpg" alt="" />
                            </figure>
                        </Link>
                    </div>
                    {/*  Image Gallery end  */}
                </div>

                <div className="col-lg-4 col-6">
                    {/*  Image Gallery start  */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="0.2s">
                        <Link href="/images/gallery-2.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-2.jpg" alt="" />
                            </figure>
                        </Link>
                    </div>
                    {/*  Image Gallery end  */}
                </div>

                <div className="col-lg-4 col-6">
                    {/*  Image Gallery start  */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="0.4s">
                        <Link href="/images/gallery-3.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-3.jpg" alt="" />
                            </figure>
                        </Link>
                    </div>
                    {/*  Image Gallery end  */}
                </div>

                <div className="col-lg-4 col-6">
                    {/*  Image Gallery start  */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="0.6s">
                        <Link href="/images/gallery-4.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-4.jpg" alt="" />
                            </figure>
                        </Link>
                    </div>
                    {/*  Image Gallery end  */}
                </div>

                <div className="col-lg-4 col-6">
                    {/*  Image Gallery start  */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="0.8s">
                        <Link href="/images/gallery-5.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-5.jpg" alt="" />
                            </figure>
                        </Link>
                    </div>
                    {/*  Image Gallery end  */}
                </div>

                <div className="col-lg-4 col-6">
                    {/*  Image Gallery start  */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="1s">
                        <Link href="/images/gallery-6.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-6.jpg" alt="" />
                            </figure>
                        </Link>
                    </div>
                    {/*  Image Gallery end  */}
                </div>

                <div className="col-lg-4 col-6">
                    {/*  Image Gallery start  */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="1.2s">
                        <Link href="/images/gallery-7.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-7.jpg" alt="" />
                            </figure>
                        </Link>
                    </div>
                    {/*  Image Gallery end  */}
                </div>

                <div className="col-lg-4 col-6">
                    {/*  Image Gallery start  */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="1.4s">
                        <Link href="/images/gallery-8.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-8.jpg" alt="" />
                            </figure>
                        </Link>
                    </div>
                    {/*  Image Gallery end  */}
                </div>

                <div className="col-lg-4 col-6">
                    {/*  Image Gallery start  */}
                    <div className="photo-gallery wow fadeInUp" data-wow-delay="1.6s">
                        <Link href="/images/gallery-9.jpg" data-cursor-text="View">
                            <figure className="image-anime">
                                <img src="/images/gallery-9.jpg" alt="" />
                            </figure>
                        </Link>
                    </div>
                    {/*  Image Gallery end  */}
                </div>
            </div>
            {/*  gallery section end  */}
        </div>
    </div>
    {/*  Photo Gallery End  */}
    </>
  );
}
