import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Home Image - Cyber Security Services",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function IndexImagePage() {
  return (
    <>
      {/*  Hero Section Start  */}
    <div className="hero hero-bg-image dark-section parallaxie">
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-10">
                    {/*  Hero Box Start  */}
                    <div className="hero-box">
                        {/*  Hero Content Start  */}
                        <div className="hero-content">
                            {/*  Section Title Start  */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp"><span>New!</span> Guardians of Your Digital World</h3>
                                <h1 className="text-anime-style-2" data-cursor="-opaque">Powerful, scalable & intelligent
                                    security solutions that adapt <span>to new threats</span></h1>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">Our experts combine advanced technology
                                    with years of experience to deliver end-to-end protection, ensuring your business
                                    runs securely and without interruption.</p>
                            </div>
                            {/*  Section Title End  */}

                            <div className="hero-body wow fadeInUp" data-wow-delay="0.4s">
                                {/*  Hero Button Start  */}
                                <div className="hero-btn">
                                    <Link href="/contact" className="btn-default btn-highlighted">Get Started Now</Link>
                                </div>
                                {/*  Hero Button End  */}

                                {/*  Video Play Button Start  */}
                                <div className="video-play-button">
                                    <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"
                                        data-cursor-text="Play">
                                        <i className="fa-solid fa-play"></i>
                                    </a>
                                    <p>Watch Our Video</p>
                                </div>
                                {/*  Video Play Button End  */}
                            </div>
                        </div>
                        {/*  Hero Content End  */}
                    </div>
                    {/*  Hero Box End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Hero Section End  */}

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

    {/*  About Us Section Start  */}
    <div className="about-us">
        <div className="container">
            <div className="row">
                <div className="col-xl-4">
                    {/*  About Image Box Start  */}
                    <div className="about-image-box">
                        {/*  Section Sub Title Start  */}
                        <div className="section-sub-title">
                            <h3 className="wow fadeInUp">About Our Company</h3>
                        </div>
                        {/*  Section Sub Title End  */}

                        {/*  About Image Start  */}
                        <div className="about-us-image">
                            <figure className="image-anime reveal">
                                <img src="/images/about-us-image.jpg" alt="" />
                            </figure>
                        </div>
                        {/*  About Image End  */}
                    </div>
                    {/*  About Image Box End  */}
                </div>

                <div className="col-xl-8">
                    {/*  About Content Start  */}
                    <div className="about-us-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h2 className="text-effect" data-cursor="-opaque">Delivering end to end cybersecurity that not
                                only protect against today's threats but also prepare businesses for the challenges of
                                tomorrow</h2>
                            <p className="wow fadeInUp">We go beyond traditional protection by offering proactive, adaptive,
                                and scalable cybersecurity solutions. Our mission is to shield your organization from
                                today's cyber risks while building the resilience needed to face tomorrow's challenges.
                            </p>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">With expert guidance, advanced technology, and
                                24/7 monitoring, we ensure your business operates with confidence in an ever-changing
                                digital world. We combine proactive defense, strategic planning, and real-time
                                monitoring to ensure that your digital assets remain secure today and ready for the
                                future.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  About Review Box Start  */}
                        <div className="about-us-body wow fadeInUp" data-wow-delay="0.4s">
                            {/*  About Review Box Start  */}
                            <div className="about-review-box">
                                <div className="about-client-box">
                                    {/*  Satisfy Client Images Start  */}
                                    <div className="satisfy-client-images">
                                        <div className="satisfy-client-image">
                                            <figure className="image-anime">
                                                <img src="/images/author-1.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div className="satisfy-client-image">
                                            <figure className="image-anime">
                                                <img src="/images/author-2.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div className="satisfy-client-image">
                                            <figure className="image-anime">
                                                <img src="/images/author-3.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div className="satisfy-client-image">
                                            <figure className="image-anime">
                                                <img src="/images/author-4.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div className="satisfy-client-image">
                                            <figure className="image-anime">
                                                <img src="/images/author-5.jpg" alt="" />
                                            </figure>
                                        </div>
                                    </div>
                                    {/*  Satisfy Client Images End  */}

                                    {/*  About Client Content Start  */}
                                    <div className="about-client-content">
                                        <p>Our experts combine advanced technology with years</p>
                                    </div>
                                    {/*  About Client Content End  */}
                                </div>

                                {/*  About Google Review Box Start  */}
                                <div className="about-google-review-box">
                                    {/*  About Google Review Start  */}
                                    <div className="about-google-review">
                                        <div className="about-google-review-header">
                                            <div className="icon-box">
                                                <img src="/images/icon-google.svg" alt="" />
                                            </div>
                                            <div className="about-google-review-content">
                                                <p>Google Reviews</p>
                                            </div>
                                        </div>
                                        <div className="google-review-content">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <p>(<span className="counter">4.9</span>)</p>
                                        </div>
                                    </div>
                                    {/*  About Google Review End  */}

                                    {/*  About Author Content Start  */}
                                    <div className="about-author-content">
                                        <h3>Ronald Richards</h3>
                                        <p>CEO & Founder</p>
                                    </div>
                                    {/*  About Author Content End  */}
                                </div>
                                {/*  About Google Review Box End  */}
                            </div>
                            {/*  About Review Box End  */}

                            {/*  About Circle Start  */}
                            <div className="about-us-circle">
                                <Link href="/about"><img src="/images/about-us-circle.svg" alt="" /></Link>
                            </div>
                            {/*  About Circle End  */}
                        </div>
                        {/*  About Review Box End  */}
                    </div>
                    {/*  About Content End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  About Us Section End  */}

    {/*  Our Services Section Start  */}
    <div className="our-services">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-xl-7">
                    {/*  Section Title Start  */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">Our services</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Protecting businesses with tailored cyber
                            security <span>services that fit</span></h2>
                    </div>
                    {/*  Section Title End  */}
                </div>

                <div className="col-xl-5">
                    {/*  Section Content Btn Start  */}
                    <div className="section-content-btn">
                        {/*  Section Title Content Start  */}
                        <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                            <p className="wow fadeInUp" data-wow-delay="0.2s">We provide customized cybersecurity services
                                designed to match your business needs, whether you're a startup or an enterprise.</p>
                        </div>
                        {/*  Section Title Content End  */}

                        {/*  Section Btn Start  */}
                        <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                            <Link href="/services" className="btn-default">View All Services</Link>
                        </div>
                        {/*  Section Btn End  */}
                    </div>
                    {/*  Section Content Btn End  */}
                </div>
            </div>

            <div className="row service-list">
                <div className="col-xl-3 col-md-6">
                    {/*  Service Item Start  */}
                    <div className="service-item wow fadeInUp">
                        {/*  Service Item Body Start  */}
                        <div className="service-item-body">
                            {/*  Service Item Header Start  */}
                            <div className="service-item-header">
                                <div className="service-item-title">
                                    <h3><Link href="/service-single">Identity & Access Management</Link></h3>
                                </div>
                                <div className="service-item-btn">
                                    <Link href="/service-single"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Service Item Header End  */}

                            {/*  Service Item Content Start  */}
                            <div className="service-item-content">
                                <p>Control who has access to your systems with secure authentication & authorization.
                                </p>
                            </div>
                            {/*  Service Item Content End  */}
                        </div>
                        {/*  Service Item Body End  */}

                        {/*  Icon Box Start  */}
                        <div className="icon-box">
                            <img src="/images/icon-service-item-1.svg" alt="" />
                        </div>
                        {/*  Icon Box End  */}

                        {/*  Service Bg Icon Start  */}
                        <div className="service-bg-icon">
                            <img src="/images/icon-service-item-1-bg.svg" alt="" />
                        </div>
                        {/*  Service Bg Icon End  */}
                    </div>
                    {/*  Service Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/*  Service Item Start  */}
                    <div className="service-item active wow fadeInUp" data-wow-delay="0.2s">
                        {/*  Service Item Body Start  */}
                        <div className="service-item-body">
                            {/*  Service Item Header Start  */}
                            <div className="service-item-header">
                                <div className="service-item-title">
                                    <h3><Link href="/service-single">Cloud Security and Solutions</Link></h3>
                                </div>
                                <div className="service-item-btn">
                                    <Link href="/service-single"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Service Item Header End  */}

                            {/*  Service Item Content Start  */}
                            <div className="service-item-content">
                                <p>Secure your cloud environments and ensure safe migration with compliance-ready
                                    solutions.</p>
                            </div>
                            {/*  Service Item Content End  */}
                        </div>
                        {/*  Service Item Body End  */}

                        {/*  Icon Box Start  */}
                        <div className="icon-box">
                            <img src="/images/icon-service-item-2.svg" alt="" />
                        </div>
                        {/*  Icon Box End  */}

                        {/*  Service Bg Icon Start  */}
                        <div className="service-bg-icon">
                            <img src="/images/icon-service-item-2-bg.svg" alt="" />
                        </div>
                        {/*  Service Bg Icon End  */}
                    </div>
                    {/*  Service Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/*  Service Item Start  */}
                    <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                        {/*  Service Item Body Start  */}
                        <div className="service-item-body">
                            {/*  Service Item Header Start  */}
                            <div className="service-item-header">
                                <div className="service-item-title">
                                    <h3><Link href="/service-single">Data Protection & Encryption</Link></h3>
                                </div>
                                <div className="service-item-btn">
                                    <Link href="/service-single"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Service Item Header End  */}

                            {/*  Service Item Content Start  */}
                            <div className="service-item-content">
                                <p>Keep sensitive information safe with advanced encryption and secure storage
                                    solutions.</p>
                            </div>
                            {/*  Service Item Content End  */}
                        </div>
                        {/*  Service Item Body End  */}

                        {/*  Icon Box Start  */}
                        <div className="icon-box">
                            <img src="/images/icon-service-item-3.svg" alt="" />
                        </div>
                        {/*  Icon Box End  */}

                        {/*  Service Bg Icon Start  */}
                        <div className="service-bg-icon">
                            <img src="/images/icon-service-item-3-bg.svg" alt="" />
                        </div>
                        {/*  Service Bg Icon End  */}
                    </div>
                    {/*  Service Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/*  Service Item Start  */}
                    <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                        {/*  Service Item Body Start  */}
                        <div className="service-item-body">
                            {/*  Service Item Header Start  */}
                            <div className="service-item-header">
                                <div className="service-item-title">
                                    <h3><Link href="/service-single">Endpoint Security Management</Link></h3>
                                </div>
                                <div className="service-item-btn">
                                    <Link href="/service-single"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Service Item Header End  */}

                            {/*  Service Item Content Start  */}
                            <div className="service-item-content">
                                <p>Protect laptops, mobiles, and IoT devices with advanced endpoint defense solutions.
                                </p>
                            </div>
                            {/*  Service Item Content End  */}
                        </div>
                        {/*  Service Item Body End  */}

                        {/*  Icon Box Start  */}
                        <div className="icon-box">
                            <img src="/images/icon-service-item-4.svg" alt="" />
                        </div>
                        {/*  Icon Box End  */}

                        {/*  Service Bg Icon Start  */}
                        <div className="service-bg-icon">
                            <img src="/images/icon-service-item-4-bg.svg" alt="" />
                        </div>
                        {/*  Service Bg Icon End  */}
                    </div>
                    {/*  Service Item End  */}
                </div>

                <div className="col-lg-12">
                    {/*  Section Footer Text Start  */}
                    <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                        <p><span>Free</span> Protecting what matters most - <Link href="/contact">See how our services
                                keep you safe!</Link></p>
                    </div>
                    {/*  Section Footer Text End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Services Section End  */}

    {/*  Why Choose Us Section Start  */}
    <div className="why-choose-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    {/*  Why Choose Content Start  */}
                    <div className="why-choose-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Why Choose Us</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Future ready cybersecurity that
                                <span>goes beyond defense</span>
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">We don't just stop attacks—we prepare your
                                business to withstand them. By combining proactive defense, real-time intelligence, and
                                long-term strategies.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Why Choose Body Start  */}
                        <div className="why-choose-body wow fadeInUp" data-wow-delay="0.4s">
                            {/*  Why Choose Counter Content Start  */}
                            <div className="why-choose-counter-content">
                                {/*  Why Choose Counter Start  */}
                                <div className="why-choose-counter">
                                    <div className="circle" data-value="0.95">
                                        <div className="progress_value"><span className="pro_data"></span><span>%</span></div>
                                    </div>
                                </div>
                                {/*  Why Choose Counter End  */}

                                {/*  Why Choose Counter Info Start  */}
                                <div className="why-choose-counter-info">
                                    <p>“Cybersecurity is not just about protecting systems, it's about protecting
                                        trust.”</p>
                                </div>
                                {/*  Why Choose Counter Info End  */}
                            </div>
                            {/*  Why Choose Counter Content End  */}

                            {/*  Why Choose Counter List Start  */}
                            <div className="why-choose-counter-list">
                                <ul>
                                    <li>Future-Ready Security</li>
                                    <li>24/7 Support</li>
                                    <li>Advance data protection</li>
                                </ul>
                            </div>
                            {/*  Why Choose Counter List End  */}
                        </div>
                        {/*  Why Choose Body End  */}

                        {/*  Why Choose Item List Start  */}
                        <div className="why-choose-item-list wow fadeInUp" data-wow-delay="0.6s">
                            {/*  Why Choose Item Start  */}
                            <div className="why-choose-item">
                                <div className="icon-box">
                                    <img src="/images/icon-why-choose-1.svg" alt="" />
                                </div>
                                <div className="why-choose-item-content">
                                    <h3>Proactive Threat Detection</h3>
                                    <p>We don't just wait for threats to strike - our advanced monitoring tools
                                        identify.</p>
                                </div>
                            </div>
                            {/*  Why Choose Item End  */}

                            {/*  Why Choose Item Start  */}
                            <div className="why-choose-item">
                                <div className="icon-box">
                                    <img src="/images/icon-why-choose-2.svg" alt="" />
                                </div>
                                <div className="why-choose-item-content">
                                    <h3>Tailored Security Solutions</h3>
                                    <p>We design customized cybersecurity strategy that align with your industry.</p>
                                </div>
                            </div>
                            {/*  Why Choose Item End  */}
                        </div>
                        {/*  Why Choose Item List End  */}

                        {/*  Why Choose Button Start  */}
                        <div className="why-choose-btn wow fadeInUp" data-wow-delay="0.8s">
                            <Link href="/contact" className="btn-default">Learn more</Link>
                        </div>
                        {/*  Why Choose Button End  */}
                    </div>
                    {/*  Why Choose Content End  */}
                </div>

                <div className="col-xl-6">
                    {/*  Why Choose Image Box Start  */}
                    <div className="why-choose-image-box wow fadeInUp" data-wow-delay="0.2s">
                        {/*  Why Choose Image Box 1 Start  */}
                        <div className="why-choose-img-box-1">
                            {/*  Why Choose Image Start  */}
                            <div className="why-choose-image image-1">
                                <figure className="image-anime reveal">
                                    <img src="/images/why-choose-image-1.jpg" alt="" />
                                </figure>
                            </div>
                            {/*  Why Choose Image End  */}

                            {/*  Year Experience Box Start  */}
                            <div className="year-experience-box">
                                <h2><span className="counter">25</span>+</h2>
                                <p>Years Of Experience</p>
                            </div>
                            {/*  Year Experience Box End  */}
                        </div>
                        {/*  Why Choose Image Box 1 End  */}

                        {/*  Why Choose Image Box 2 Start  */}
                        <div className="why-choose-img-box-2">
                            {/*  Why Choose Image Start  */}
                            <div className="why-choose-image image-2">
                                <figure className="image-anime reveal">
                                    <img src="/images/why-choose-image-2.jpg" alt="" />
                                </figure>
                            </div>
                            {/*  Why Choose Image End  */}

                            {/*  Why Choose Image Start  */}
                            <div className="why-choose-image image-3">
                                <figure className="image-anime reveal">
                                    <img src="/images/why-choose-image-3.jpg" alt="" />
                                </figure>
                            </div>
                            {/*  Why Choose Image End  */}
                        </div>
                        {/*  Why Choose Image Box 1 End  */}
                    </div>
                    {/*  Why Choose Image Box End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Why Choose Us Section End  */}

    {/*  How It Work Section Start  */}
    <div className="how-it-work">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/*  Section Title Start  */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">How It Works</h3>
                        <h2 className="text-effect" data-cursor="-opaque">Smart cybersecurity strategies designed to defend,
                            <span className="work-title-images"><img src="/images/author-1.jpg" alt="" /><img
                                    src="/images/author-2.jpg" alt="" /><img src="/images/author-3.jpg" alt="" /><img
                                    src="/images/author-4.jpg" alt="" /></span> respond, <span>and evolve</span>
                        </h2>
                    </div>
                    {/*  Section Title End  */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6">
                    {/*  How Work Item Start  */}
                    <div className="how-work-item wow fadeInUp">
                        {/*  How Work Item Header Start  */}
                        <div className="how-work-item-header">
                            <div className="icon-box">
                                <img src="/images/icon-how-it-work-1.svg" alt="" />
                            </div>
                            <div className="how-work-item-no">
                                <h3>01</h3>
                            </div>
                        </div>
                        {/*  How Work Item Header End  */}

                        {/*  How Work Item Body Start  */}
                        <div className="how-work-item-body">
                            <div className="how-work-item-content">
                                <h3>Risk Assessment</h3>
                                <p>We start with a full evaluation of your IT infrastructure.</p>
                            </div>
                            <div className="how-work-btn">
                                <Link href="/contact" className="readmore-btn">Read More</Link>
                            </div>
                        </div>
                        {/*  How Work Item Body End  */}
                    </div>
                    {/*  How Work Item End  */}
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                    {/*  How Work Item Start  */}
                    <div className="how-work-item wow fadeInUp" data-wow-delay="0.2s">
                        {/*  How Work Item Header Start  */}
                        <div className="how-work-item-header">
                            <div className="icon-box">
                                <img src="/images/icon-how-it-work-2.svg" alt="" />
                            </div>
                            <div className="how-work-item-no">
                                <h3>02</h3>
                            </div>
                        </div>
                        {/*  How Work Item Header End  */}

                        {/*  How Work Item Body Start  */}
                        <div className="how-work-item-body">
                            <div className="how-work-item-content">
                                <h3>Threat Detection</h3>
                                <p>Self-learning algorithms for continuous improvement</p>
                            </div>
                            <div className="how-work-btn">
                                <Link href="/contact" className="readmore-btn">Read More</Link>
                            </div>
                        </div>
                        {/*  How Work Item Body End  */}
                    </div>
                    {/*  How Work Item End  */}
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                    {/*  How Work Item Start  */}
                    <div className="how-work-item wow fadeInUp" data-wow-delay="0.4s">
                        {/*  How Work Item Header Start  */}
                        <div className="how-work-item-header">
                            <div className="icon-box">
                                <img src="/images/icon-how-it-work-3.svg" alt="" />
                            </div>
                            <div className="how-work-item-no">
                                <h3>03</h3>
                            </div>
                        </div>
                        {/*  How Work Item Header End  */}

                        {/*  How Work Item Body Start  */}
                        <div className="how-work-item-body">
                            <div className="how-work-item-content">
                                <h3>Protection Deployment</h3>
                                <p>We implement advanced defense measures-firewalls, encryption.</p>
                            </div>
                            <div className="how-work-btn">
                                <Link href="/contact" className="readmore-btn">Read More</Link>
                            </div>
                        </div>
                        {/*  How Work Item Body End  */}
                    </div>
                    {/*  How Work Item End  */}
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                    {/*  How Work Item Start  */}
                    <div className="how-work-item wow fadeInUp" data-wow-delay="0.6s">
                        {/*  How Work Item Header Start  */}
                        <div className="how-work-item-header">
                            <div className="icon-box">
                                <img src="/images/icon-how-it-work-4.svg" alt="" />
                            </div>
                            <div className="how-work-item-no">
                                <h3>04</h3>
                            </div>
                        </div>
                        {/*  How Work Item Header End  */}

                        {/*  How Work Item Body Start  */}
                        <div className="how-work-item-body">
                            <div className="how-work-item-content">
                                <h3>Security Evolution</h3>
                                <p>We continually refine, update & strengthen your defenses.</p>
                            </div>
                            <div className="how-work-btn">
                                <Link href="/contact" className="readmore-btn">Read More</Link>
                            </div>
                        </div>
                        {/*  How Work Item Body End  */}
                    </div>
                    {/*  How Work Item End  */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {/*  Section Footer Text Start  */}
                    <div className="section-footer-text section-footer-contact wow fadeInUp" data-wow-delay="0.8s">
                        <p><span><img src="/images/icon-phone-white.svg" alt="" /></span> Building resilience step by step
                            - <Link href="/contact">Explore how our process protects you!</Link></p>
                        <ul>
                            <li>4.9/5</li>
                            <li><i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </li>
                            <li>Over 5000 Reviews</li>
                        </ul>
                    </div>
                    {/*  Section Footer Text End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  How It Work Section Start  */}

    {/*  Our Case Studies Section Start  */}
    <div className="our-case-study">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-xl-7">
                    {/*  Section Title Start  */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">Our Case Studies</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Real world examples of cybersecurity that
                            builds <span>trust and resilience</span></h2>
                    </div>
                    {/*  Section Title End  */}
                </div>

                <div className="col-xl-5">
                    {/*  Section Content Btn Start  */}
                    <div className="section-content-btn">
                        {/*  Section Title Content Start  */}
                        <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                            <p>See how our tailored approach to cybersecurity transforms challenges into opportunities,
                                helping businesses protect what matters most.</p>
                        </div>
                        {/*  Section Title Content End  */}

                        {/*  Section Button Start  */}
                        <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                            <Link href="/case-study" className="btn-default">View All Studies</Link>
                        </div>
                        {/*  Section Button End  */}
                    </div>
                    {/*  Section Content Btn End  */}
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6">
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
                            <h3><Link href="/case-study-single">E-Commerce Fraud</Link></h3>
                            <ul>
                                <li><a href="#">Finance</a></li>
                                <li><a href="#">DataSecurity</a></li>
                            </ul>
                        </div>
                        {/*  Case Study Item Content End  */}
                    </div>
                    {/*  Case Study Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
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
                            <h3><Link href="/case-study-single">Banking Security</Link></h3>
                            <ul>
                                <li><a href="#">Firewall</a></li>
                                <li><a href="#">ECommerce</a></li>
                            </ul>
                        </div>
                        {/*  Case Study Item Content End  */}
                    </div>
                    {/*  Case Study Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
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
                            <h3><Link href="/case-study-single">Healthcare Compliance</Link></h3>
                            <ul>
                                <li><a href="#">Health</a></li>
                                <li><a href="#">DataPrivacy</a></li>
                            </ul>
                        </div>
                        {/*  Case Study Item Content End  */}
                    </div>
                    {/*  Case Study Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
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
                            <h3><Link href="/case-study-single">Startup Protection</Link></h3>
                            <ul>
                                <li><a href="#">Startup</a></li>
                                <li><a href="#">Security</a></li>
                            </ul>
                        </div>
                        {/*  Case Study Item Content End  */}
                    </div>
                    {/*  Case Study Item End  */}
                </div>
            </div>

            <div className="row">
                {/*  Section Footer Text Start  */}
                <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                    <p><span>Free</span>Protecting what matters most - <Link href="/contact">See how our services keep
                            you safe!</Link></p>
                </div>
                {/*  Section Footer Text End  */}
            </div>
        </div>
    </div>
    {/*  Our Case Studies Section End  */}

    {/*  Intro Video Section Start  */}
    <div className="intro-video dark-section parallaxie">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Intro Video Box Start  */}
                    <div className="intro-video-box">
                        {/*  Our Video Circle Start  */}
                        <div className="our-video-circle">
                            <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video"
                                data-cursor-text="Play">
                                <img src="/images/our-video-circle.svg" alt="" />
                            </a>
                        </div>
                        {/*  Our Video Circle End  */}

                        {/*  Section Title Start  */}
                        <div className="section-title section-title-center">
                            <h2 className="text-anime-style-2" data-cursor="-opaque">A journey built on trust, innovation,
                                and <span>unwavering security</span></h2>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Intro Video List Start  */}
                        <div className="intro-video-list wow fadeInUp" data-wow-delay="0.2s">
                            <ul>
                                <li>From a Bold Vision to a Trusted Reality</li>
                                <li>Evolving With the Digital Landscape</li>
                                <li>Built on Trust, Innovation and Partnership</li>
                            </ul>
                        </div>
                        {/*  Intro Video List End  */}
                    </div>
                    {/*  Intro Video Box End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Intro Video Section End  */}

    {/*  Our Features Section Start  */}
    <div className="our-features">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/*  Section Title Start  */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">Our features</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Smart, scalable, and reliable cybersecurity
                            tools designed <span>for modern businesses</span></h2>
                    </div>
                    {/*  Section Title End  */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {/*  Feature Item Box Start  */}
                    <div className="feature-item-box">
                        {/*  Feature Item Start  */}
                        <div className="feature-item box-1 wow fadeInUp">
                            <div className="feature-image">
                                <figure>
                                    <img src="/images/feature-image-1.png" alt="" />
                                </figure>
                            </div>
                            <div className="feature-item-content">
                                <h3>Advanced Threat Detection</h3>
                                <p>Secure your cloud environments and ensure safe migration with compliance ready.
                                    Secure your cloud environments.</p>
                            </div>
                        </div>
                        {/*  Feature Item End  */}

                        {/*  Feature Item Start  */}
                        <div className="feature-item box-2 wow fadeInUp" data-wow-delay="0.2s">
                            {/*  Scrolling Ticker Box Start  */}
                            <div className="scrolling-ticker feature-scrolling-ticker">
                                <div className="scrolling-ticker-box">
                                    <div className="scrolling-content">
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Risk Management</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Next-Gen Security</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Network Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Data Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cyber Defense</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Risk Management</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Next-Gen Security</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Network Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Data Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cyber Defense</span>
                                    </div>

                                    <div className="scrolling-content">
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Risk Management</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Next-Gen Security</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Network Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Data Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cyber Defense</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Risk Management</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Next-Gen Security</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Network Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Data Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cyber Defense</span>
                                    </div>
                                </div>

                                <div className="scrolling-ticker-box scroll-reverse">
                                    <div className="scrolling-content">
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Risk Management</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Next-Gen Security</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Network Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Data Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cyber Defense</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Risk Management</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Next-Gen Security</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Network Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Data Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cyber Defense</span>
                                    </div>

                                    <div className="scrolling-content">
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Risk Management</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Next-Gen Security</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Network Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Data Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cyber Defense</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Risk Management</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Next-Gen Security</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Network Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Data Protection</span>
                                        <span><img src="/images/icon-feature-ticker.svg" alt="" />Cyber Defense</span>
                                    </div>
                                </div>
                            </div>
                            {/*  Scrolling Ticker Box End  */}

                            <div className="feature-item-content">
                                <h3>Multi-Layer Firewall Protection</h3>
                                <p>Secure your cloud environments and ensure safe migration with compliance-ready.
                                    Secure your cloud environments and ensure safe migration.</p>
                            </div>
                        </div>
                        {/*  Feature Item End  */}

                        {/*  Feature Item Start  */}
                        <div className="feature-item box-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="feature-image">
                                <figure>
                                    <img src="/images/feature-image-2.png" alt="" />
                                </figure>
                            </div>
                            <div className="feature-item-content">
                                <h3>Data Encryption & Privacy</h3>
                                <p>Secure your cloud environments and ensure safe migration with compliance-ready.</p>
                            </div>
                        </div>
                        {/*  Feature Item End  */}

                        {/*  Feature Item Start  */}
                        <div className="feature-item box-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="feature-image">
                                <figure>
                                    <img src="/images/feature-image-3.png" alt="" />
                                </figure>
                            </div>
                            <div className="feature-item-content">
                                <h3>Incident Response & Recovery</h3>
                                <p>Secure your cloud environments and ensure safe migration with compliance-ready.</p>
                            </div>
                        </div>
                        {/*  Feature Item End  */}

                        {/*  Feature Item Start  */}
                        <div className="feature-item box-5 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="feature-image">
                                <figure>
                                    <img src="/images/feature-image-4.png" alt="" />
                                </figure>
                            </div>
                            <div className="feature-item-content">
                                <h3>24/7 Network Monitoring</h3>
                                <p>Secure your cloud environments and ensure safe migration with compliance-ready.</p>
                            </div>
                        </div>
                        {/*  Feature Item End  */}
                    </div>
                    {/*  Feature Item Box End  */}
                </div>

                <div className="col-lg-12">
                    {/*  Section Footer Text Start  */}
                    <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                        <p><span>Free</span>Protecting what matters most - <Link href="/contact">See how our services
                                keep you safe!</Link></p>
                    </div>
                    {/*  Section Footer Text End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Features Section End  */}

    {/*  Our Pricing Section Start  */}
    <div className="our-pricing dark-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/*  Section Title Start  */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">our pricing plans</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Affordable, scalable cybersecurity services
                            for businesses <span>of all sizes</span></h2>
                    </div>
                    {/*  Section Title End  */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {/*  Our Pricing Box Start  */}
                    <div className="our-pricing-box" data-wow-delay="0.2s">
                        <div className="our-pricing-swich form-check form-switch">
                            <label className="form-check-label" htmlFor="planToggle" id="toggleLabelMonthly">Monthly</label>
                            <span><input className="form-check-input" type="checkbox" id="planToggle" /></span>
                            <label className="form-check-label" htmlFor="planToggle" id="toggleLabelAnnually">Annually</label>
                        </div>

                        {/*  Pricing Tab Item Start  */}
                        <div className="pricing-tab-item" id="monthly">
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    {/*  Pricing Item Start  */}
                                    <div className="pricing-item">
                                        {/*  Pricing Header Start  */}
                                        <div className="pricing-header">
                                            <h3>Basic Plan</h3>
                                            <p>Discover how our trusted have empowered businesses.</p>
                                            <h2>$49.00<sub>/Monthly</sub></h2>
                                        </div>
                                        {/*  Pricing Header End  */}

                                        {/*  Pricing body Start  */}
                                        <div className="pricing-body">
                                            <h3>What's Included:</h3>
                                            <ul>
                                                <li>Basic firewall protection</li>
                                                <li>Monthly security reports</li>
                                                <li>Real-time threat monitoring</li>
                                            </ul>
                                        </div>
                                        {/*  Pricing body End  */}

                                        {/*  Pricing Button Start  */}
                                        <div className="pricing-btn">
                                            <Link href="/contact" className="btn-default btn-highlighted">get started</Link>
                                        </div>
                                        {/*  Pricing Button End  */}
                                    </div>
                                    {/*  Pricing Item End  */}
                                </div>

                                <div className="col-xl-3 col-md-6">
                                    {/*  Pricing Item Start  */}
                                    <div className="pricing-item highlighted-box">
                                        {/*  Pricing Header Start  */}
                                        <div className="pricing-header">
                                            <h3>Standard Plan</h3>
                                            <p>Discover how our truste have empowered businesses.</p>
                                            <h2>$149.00<sub>/Monthly</sub></h2>
                                        </div>
                                        {/*  Pricing Header End  */}

                                        {/*  Pricing body Start  */}
                                        <div className="pricing-body">
                                            <h3>What's Included:</h3>
                                            <ul>
                                                <li>Basic firewall protection</li>
                                                <li>Monthly security reports</li>
                                                <li>Real-time threat monitoring</li>
                                            </ul>
                                        </div>
                                        {/*  Pricing body End  */}

                                        {/*  Pricing Button Start  */}
                                        <div className="pricing-btn">
                                            <Link href="/contact" className="btn-default btn-highlighted">get started</Link>
                                        </div>
                                        {/*  Pricing Button End  */}
                                    </div>
                                    {/*  Pricing Item End  */}
                                </div>

                                <div className="col-xl-3 col-md-6">
                                    {/*  Pricing Item Start  */}
                                    <div className="pricing-item">
                                        {/*  Pricing Header Start  */}
                                        <div className="pricing-header">
                                            <h3>Premium Plan</h3>
                                            <p>Discover how our trusted have empowered businesses.</p>
                                            <h2>$249.00<sub>/Monthly</sub></h2>
                                        </div>
                                        {/*  Pricing Header End  */}

                                        {/*  Pricing body Start  */}
                                        <div className="pricing-body">
                                            <h3>What's Included:</h3>
                                            <ul>
                                                <li>Basic firewall protection</li>
                                                <li>Monthly security reports</li>
                                                <li>Real-time threat monitoring</li>
                                            </ul>
                                        </div>
                                        {/*  Pricing body End  */}

                                        {/*  Pricing Button Start  */}
                                        <div className="pricing-btn">
                                            <Link href="/contact" className="btn-default btn-highlighted">get started</Link>
                                        </div>
                                        {/*  Pricing Button End  */}
                                    </div>
                                    {/*  Pricing Item End  */}
                                </div>

                                <div className="col-xl-3 col-md-6">
                                    {/*  Pricing Item Start  */}
                                    <div className="pricing-item">
                                        {/*  Pricing Header Start  */}
                                        <div className="pricing-header">
                                            <h3>Enterprise Plan</h3>
                                            <p>Discover how our trusted have empowered businesses.</p>
                                            <h2>$349.00<sub>/Monthly</sub></h2>
                                        </div>
                                        {/*  Pricing Header End  */}

                                        {/*  Pricing body Start  */}
                                        <div className="pricing-body">
                                            <h3>What's Included:</h3>
                                            <ul>
                                                <li>Basic firewall protection</li>
                                                <li>Monthly security reports</li>
                                                <li>Real-time threat monitoring</li>
                                            </ul>
                                        </div>
                                        {/*  Pricing body End  */}

                                        {/*  Pricing Button Start  */}
                                        <div className="pricing-btn">
                                            <Link href="/contact" className="btn-default btn-highlighted">get started</Link>
                                        </div>
                                        {/*  Pricing Button End  */}
                                    </div>
                                    {/*  Pricing Item End  */}
                                </div>
                            </div>
                        </div>
                        {/*  Pricing Tab Item End  */}

                        {/*  Pricing Tab Item Start  */}
                        <div className="pricing-tab-item d-none" id="annually">
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    {/*  PricingItemStart  */}
                                    <div className="pricing-item">
                                        {/*  Pricing Header Start  */}
                                        <div className="pricing-header">
                                            <h3>Basic Plan</h3>
                                            <p>Discover how our trusted have empowered businesses.</p>
                                            <h2>$99.00<sub>/Yearly</sub></h2>
                                        </div>
                                        {/*  Pricing Header End  */}

                                        {/*  Pricing body Start  */}
                                        <div className="pricing-body">
                                            <h3>What's Included:</h3>
                                            <ul>
                                                <li>Basic firewall protection</li>
                                                <li>Yearly security reports</li>
                                                <li>Real-time threat monitoring</li>
                                            </ul>
                                        </div>
                                        {/*  Pricing body End  */}

                                        {/*  Pricing Button Start  */}
                                        <div className="pricing-btn">
                                            <Link href="/contact" className="btn-default btn-highlighted">get started</Link>
                                        </div>
                                        {/*  Pricing Button End  */}
                                    </div>
                                    {/*  Pricing Item End  */}
                                </div>

                                <div className="col-xl-3 col-md-6">
                                    {/*  PricingItemStart  */}
                                    <div className="pricing-item highlighted-box">
                                        {/*  Pricing Header Start  */}
                                        <div className="pricing-header">
                                            <h3>Standard Plan</h3>
                                            <p>Discover how our truste have empowered businesses.</p>
                                            <h2>$249.00<sub>/Yearly</sub></h2>
                                        </div>
                                        {/*  Pricing Header End  */}

                                        {/*  Pricing body Start  */}
                                        <div className="pricing-body">
                                            <h3>What's Included:</h3>
                                            <ul>
                                                <li>Basic firewall protection</li>
                                                <li>Yearly security reports</li>
                                                <li>Real-time threat monitoring</li>
                                            </ul>
                                        </div>
                                        {/*  Pricing body End  */}

                                        {/*  Pricing Button Start  */}
                                        <div className="pricing-btn">
                                            <Link href="/contact" className="btn-default btn-highlighted">get started</Link>
                                        </div>
                                        {/*  Pricing Button End  */}
                                    </div>
                                    {/*  Pricing Item End  */}
                                </div>

                                <div className="col-xl-3 col-md-6">
                                    {/*  PricingItemStart  */}
                                    <div className="pricing-item">
                                        {/*  Pricing Header Start  */}
                                        <div className="pricing-header">
                                            <h3>Premium Plan</h3>
                                            <p>Discover how our trusted have empowered businesses.</p>
                                            <h2>$349.00<sub>/Yearly</sub></h2>
                                        </div>
                                        {/*  Pricing Header End  */}

                                        {/*  Pricing body Start  */}
                                        <div className="pricing-body">
                                            <h3>What's Included:</h3>
                                            <ul>
                                                <li>Basic firewall protection</li>
                                                <li>Yearly security reports</li>
                                                <li>Real-time threat monitoring</li>
                                            </ul>
                                        </div>
                                        {/*  Pricing body End  */}

                                        {/*  Pricing Button Start  */}
                                        <div className="pricing-btn">
                                            <Link href="/contact" className="btn-default btn-highlighted">get started</Link>
                                        </div>
                                        {/*  Pricing Button End  */}
                                    </div>
                                    {/*  Pricing Item End  */}
                                </div>

                                <div className="col-xl-3 col-md-6">
                                    {/*  PricingItemStart  */}
                                    <div className="pricing-item">
                                        {/*  Pricing Header Start  */}
                                        <div className="pricing-header">
                                            <h3>Enterprise Plan</h3>
                                            <p>Discover how our trusted have empowered businesses.</p>
                                            <h2>$449.00<sub>/Yearly</sub></h2>
                                        </div>
                                        {/*  Pricing Header End  */}

                                        {/*  Pricing body Start  */}
                                        <div className="pricing-body">
                                            <h3>What's Included:</h3>
                                            <ul>
                                                <li>Basic firewall protection</li>
                                                <li>Yearly security reports</li>
                                                <li>Real-time threat monitoring</li>
                                            </ul>
                                        </div>
                                        {/*  Pricing body End  */}

                                        {/*  Pricing Button Start  */}
                                        <div className="pricing-btn">
                                            <Link href="/contact" className="btn-default btn-highlighted">get started</Link>
                                        </div>
                                        {/*  Pricing Button End  */}
                                    </div>
                                    {/*  Pricing Item End  */}
                                </div>
                            </div>
                        </div>
                        {/*  Pricing Tab Item End  */}
                    </div>
                    {/*  Our Pricing Box End  */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {/*  Pricing Benifit List Start  */}
                    <div className="pricing-benefit-list" data-wow-delay="0.4s">
                        <ul>
                            <li><img src="/images/icon-pricing-benefit-1.svg" alt="" />Get 30 day free trial</li>
                            <li><img src="/images/icon-pricing-benefit-2.svg" alt="" />No any hidden fee pay</li>
                            <li><img src="/images/icon-pricing-benefit-3.svg" alt="" />You can cancel anytime </li>
                        </ul>
                    </div>
                    {/*  Pricing Benifit List End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Pricing Section End  */}

    {/*  Our Faqs Section Start  */}
    <div className="our-faqs">
        <div className="container">
            <div className="row">
                <div className="col-xl-5">
                    {/*  Our Faqs Content Start  */}
                    <div className="our-faqs-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Frequently Asked Questions</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Everything you want to <span>know
                                    cybersecurity</span></h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">From service details to protection strategies,
                                we provide clear explanations to help you make informed decisions.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Faq Button Start  */}
                        <div className="faq-btn wow fadeInUp" data-wow-delay="0.4s">
                            <Link href="/faqs" className="btn-default">View all FAQs</Link>
                        </div>
                        {/*  Faq Button End  */}
                    </div>
                    {/*  Our Faqs Content End  */}
                </div>

                <div className="col-xl-7">
                    {/*  FAQ Accordion Start  */}
                    <div className="faq-accordion" id="accordion">
                        {/*  FAQ Item Start  */}
                        <div className="accordion-item wow fadeInUp">
                            <h2 className="accordion-header" id="heading1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    Q1: Why is cybersecurity important for my business?
                                </button>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1"
                                data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>We work with business across various industr including finance, healthcare,
                                        e-commerce, and technology, tailoring solutions to meet each sector's unique
                                        security needs.</p>
                                </div>
                            </div>
                        </div>
                        {/*  FAQ Item End  */}

                        {/*  FAQ Item Start  */}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                            <h2 className="accordion-header" id="heading2">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                    Q2: What industries do you provide cybersecurity services for?
                                </button>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2"
                                data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>We work with business across various industr including finance, healthcare,
                                        e-commerce, and technology, tailoring solutions to meet each sector's unique
                                        security needs.</p>
                                </div>
                            </div>
                        </div>
                        {/*  FAQ Item End  */}

                        {/*  FAQ Item Start  */}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                            <h2 className="accordion-header" id="heading3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    Q3: Do small businesses really need cybersecurity?
                                </button>
                            </h2>
                            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>We work with business across various industr including finance, healthcare,
                                        e-commerce, and technology, tailoring solutions to meet each sector's unique
                                        security needs.</p>
                                </div>
                            </div>
                        </div>
                        {/*  FAQ Item End  */}

                        {/*  FAQ Item Start  */}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                            <h2 className="accordion-header" id="heading4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    Q4: How quickly can you respond to a cyber threat?
                                </button>
                            </h2>
                            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                                data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>We work with business across various industr including finance, healthcare,
                                        e-commerce, and technology, tailoring solutions to meet each sector's unique
                                        security needs.</p>
                                </div>
                            </div>
                        </div>
                        {/*  FAQ Item End  */}

                        {/*  FAQ Item Start  */}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                            <h2 className="accordion-header" id="heading5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                    Q5: Is your solution customizable for my industry?
                                </button>
                            </h2>
                            <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                                data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>We work with business across various industr including finance, healthcare,
                                        e-commerce, and technology, tailoring solutions to meet each sector's unique
                                        security needs.</p>
                                </div>
                            </div>
                        </div>
                        {/*  FAQ Item End  */}
                    </div>
                    {/*  FAQ Accordion End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Faqs Section End  */}

    {/*  Our Testimonial Section Start  */}
    <div className="our-testimonials dark-section parallaxie">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6">
                    {/*  Testimonial Content Start  */}
                    <div className="our-testimonial-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Our Testimonials</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">What our clients say about staying
                                <span>secure with us</span>
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Discover how our trusted cybersecurity
                                solutions have empowered businesses to operate with confidence.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Testimonial Button Start  */}
                        <div className="testimonial-btn wow fadeInUp" data-wow-delay="0.4s">
                            <Link href="/testimonials" className="btn-default btn-highlighted">View All Reviews</Link>
                        </div>
                        {/*  Testimonial Button End  */}

                        {/*  Testimonial Google Review Start  */}
                        <div className="testimonial-google-review wow fadeInUp" data-wow-delay="0.6s">
                            {/*  About Google Review Header Start  */}
                            <div className="about-google-review-header">
                                <div className="icon-box">
                                    <img src="/images/icon-google.svg" alt="" />
                                </div>
                                <div className="about-google-review-content">
                                    <p>Google Reviews</p>
                                </div>
                            </div>
                            {/*  About Google Review Header End  */}

                            {/*  Google Rating Content Start  */}
                            <div className="google-review-content">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <p>(<span className="counter">4.9</span>)</p>
                            </div>
                            {/*  Google Rating Content End  */}
                        </div>
                        {/*  Testimonial Google Review End  */}
                    </div>
                    {/*  Testimonial Content End  */}
                </div>

                <div className="col-xl-7 col-lg-6">
                    {/*  Testimonial Slider Start  */}
                    <div className="testimonial-slider">
                        <div className="swiper">
                            <div className="swiper-wrapper" data-cursor-text="Drag">
                                {/*  Testimonial Slide Start  */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="testimonial-header">
                                            <div className="testimonial-logo">
                                                <img src="/images/testimonial-company-logo-1.svg" alt="" />
                                            </div>
                                            <div className="testimonial-quote">
                                                <img src="/images/testimonial-quote.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <div className="testimonial-content">
                                                <p>“Partnering with this cybersecurity team has completely transformed
                                                    the way we protect our digital assets. Their proactive monitoring,
                                                    advanced threat detection, and immediate response to incidents have
                                                    given our entire organization a level of confidence we never had
                                                    before. We now operate without fear of breaches.”</p>
                                            </div>
                                            <div className="testimonial-author-content">
                                                <h3>Darlene Robertson</h3>
                                                <p>CEO & Founder</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  Testimonial Slide End  */}

                                {/*  Testimonial Slide Start  */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="testimonial-header">
                                            <div className="testimonial-logo">
                                                <img src="/images/testimonial-company-logo-2.svg" alt="" />
                                            </div>
                                            <div className="testimonial-quote">
                                                <img src="/images/testimonial-quote.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="testimonial-body">
                                            <div className="testimonial-content">
                                                <p>“Partnering with this cybersecurity team has completely transformed
                                                    the way we protect our digital assets. Their proactive monitoring,
                                                    advanced threat detection, and immediate response to incidents have
                                                    given our entire organization a level of confidence we never had
                                                    before. We now operate without fear of breaches.”</p>
                                            </div>
                                            <div className="testimonial-author-content">
                                                <h3>John Carter</h3>
                                                <p>CTO, FinSecure Ltd.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  Testimonial Slide End  */}
                            </div>

                            {/*  Testimonial Slider Button Start  */}
                            <div className="testimonial-slider-btn">
                                <div className="testimonial-button-prev"></div>
                                <div className="testimonial-button-next"></div>
                            </div>
                            {/*  Testimonial Slider Button End  */}
                        </div>
                    </div>
                    {/*  Testimonial Slider End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Testimonial Section End  */}

    {/*  Our Blog Section Start  */}
    <div className="our-blog">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-xl-7">
                    {/*  Section Title Start  */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">latest Blogs</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Stay updated with the latest trends, tips,
                            and <span>cybersecurity insights</span></h2>
                    </div>
                    {/*  Section Title End  */}
                </div>

                <div className="col-xl-5">
                    {/*  Section Content Btn Start  */}
                    <div className="section-content-btn">
                        {/*  Section Title Content Start  */}
                        <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                            <p>Our blog delivers actionable advice, expert opinions, and in-depth analysis to help your
                                business stay protected and informed.</p>
                        </div>
                        {/*  Section Title Content End  */}

                        {/*  Section Btn Start  */}
                        <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                            <Link href="/blog" className="btn-default">View All Blogs</Link>
                        </div>
                        {/*  Section Btn End  */}
                    </div>
                    {/*  Section Content Btn End  */}
                </div>
            </div>

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
            </div>
        </div>
    </div>
    {/*  Our Blog Section End  */}
    </>
  );
}
