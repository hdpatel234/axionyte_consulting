import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Video Gallery - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function VideoGalleryPage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Video <span>Gallery</span></h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Video Gallery</li>
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

    {/*  Page Video Gallery Start  */}
    <div className="page-video-gallery">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    {/*  Video Gallery start  */}
                    <div className="video-gallery-image wow fadeInUp">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"
                            data-cursor-text="Play">
                            <figure>
                                <img src="/images/gallery-3.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/*  Video Gallery end  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  Video Gallery start  */}
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.2s">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"
                            data-cursor-text="Play">
                            <figure>
                                <img src="/images/gallery-5.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/*  Video Gallery end  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  Video Gallery start  */}
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.4s">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"
                            data-cursor-text="Play">
                            <figure>
                                <img src="/images/gallery-2.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/*  Video Gallery end  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  Video Gallery start  */}
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.6s">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"
                            data-cursor-text="Play">
                            <figure>
                                <img src="/images/gallery-1.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/*  Video Gallery end  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  Video Gallery start  */}
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.8s">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"
                            data-cursor-text="Play">
                            <figure>
                                <img src="/images/gallery-4.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/*  Video Gallery end  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  Video Gallery start  */}
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1s">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"
                            data-cursor-text="Play">
                            <figure>
                                <img src="/images/gallery-9.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/*  Video Gallery end  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  Video Gallery start  */}
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.2s">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"
                            data-cursor-text="Play">
                            <figure>
                                <img src="/images/gallery-6.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/*  Video Gallery end  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  Video Gallery start  */}
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.4s">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"
                            data-cursor-text="Play">
                            <figure>
                                <img src="/images/gallery-8.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/*  Video Gallery end  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  Video Gallery start  */}
                    <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.6s">
                        <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"
                            data-cursor-text="Play">
                            <figure>
                                <img src="/images/gallery-7.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    {/*  Video Gallery end  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Video Gallery End  */}
    </>
  );
}
