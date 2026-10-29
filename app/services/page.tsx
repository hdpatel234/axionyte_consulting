import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Services - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function ServicesPage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Our <span>services</span></h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Our services</li>
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

    {/*  Page Services Start  */}
    <div className="page-services">
        <div className="container">
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
                                <p>Control who has access to your systems with secure authentication and authorization.
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
                                    <h3><Link href="/service-single">Cloud Security Solutions</Link></h3>
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
                                <p>Protect laptops, mobiles, and IoT devices with powerful advanced endpoint defense
                                    solutions</p>
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

                <div className="col-xl-3 col-md-6">
                    {/*  Service Item Start  */}
                    <div className="service-item wow fadeInUp" data-wow-delay="0.8s">
                        {/*  Service Item Body Start  */}
                        <div className="service-item-body">
                            {/*  Service Item Header Start  */}
                            <div className="service-item-header">
                                <div className="service-item-title">
                                    <h3><Link href="/service-single">Incidet Response & Recovery</Link></h3>
                                </div>
                                <div className="service-item-btn">
                                    <Link href="/service-single"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Service Item Header End  */}

                            {/*  Service Item Content Start  */}
                            <div className="service-item-content">
                                <p>Minimize downtime and restore business continuity quickly with our rapid response.
                                </p>
                            </div>
                            {/*  Service Item Content End  */}
                        </div>
                        {/*  Service Item Body End  */}

                        {/*  Icon Box Start  */}
                        <div className="icon-box">
                            <img src="/images/icon-service-item-5.svg" alt="" />
                        </div>
                        {/*  Icon Box End  */}

                        {/*  Service Bg Icon Start  */}
                        <div className="service-bg-icon">
                            <img src="/images/icon-service-item-5-bg.svg" alt="" />
                        </div>
                        {/*  Service Bg Icon End  */}
                    </div>
                    {/*  Service Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/*  Service Item Start  */}
                    <div className="service-item wow fadeInUp" data-wow-delay="1s">
                        {/*  Service Item Body Start  */}
                        <div className="service-item-body">
                            {/*  Service Item Header Start  */}
                            <div className="service-item-header">
                                <div className="service-item-title">
                                    <h3><Link href="/service-single">Compliance & Risk Management</Link></h3>
                                </div>
                                <div className="service-item-btn">
                                    <Link href="/service-single"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Service Item Header End  */}

                            {/*  Service Item Content Start  */}
                            <div className="service-item-content">
                                <p>Achieve industry compliance (GDPR, etc.) with tailored security frameworks that
                                    reduce risks.</p>
                            </div>
                            {/*  Service Item Content End  */}
                        </div>
                        {/*  Service Item Body End  */}

                        {/*  Icon Box Start  */}
                        <div className="icon-box">
                            <img src="/images/icon-service-item-6.svg" alt="" />
                        </div>
                        {/*  Icon Box End  */}

                        {/*  Service Bg Icon Start  */}
                        <div className="service-bg-icon">
                            <img src="/images/icon-service-item-6-bg.svg" alt="" />
                        </div>
                        {/*  Service Bg Icon End  */}
                    </div>
                    {/*  Service Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/*  Service Item Start  */}
                    <div className="service-item wow fadeInUp" data-wow-delay="1.2s">
                        {/*  Service Item Body Start  */}
                        <div className="service-item-body">
                            {/*  Service Item Header Start  */}
                            <div className="service-item-header">
                                <div className="service-item-title">
                                    <h3><Link href="/service-single">Managed Security Services</Link></h3>
                                </div>
                                <div className="service-item-btn">
                                    <Link href="/service-single"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Service Item Header End  */}

                            {/*  Service Item Content Start  */}
                            <div className="service-item-content">
                                <p>Leave the complexity to us — our team provides continuous monitoring and proactive
                                    patching.</p>
                            </div>
                            {/*  Service Item Content End  */}
                        </div>
                        {/*  Service Item Body End  */}

                        {/*  Icon Box Start  */}
                        <div className="icon-box">
                            <img src="/images/icon-service-item-7.svg" alt="" />
                        </div>
                        {/*  Icon Box End  */}

                        {/*  Service Bg Icon Start  */}
                        <div className="service-bg-icon">
                            <img src="/images/icon-service-item-7-bg.svg" alt="" />
                        </div>
                        {/*  Service Bg Icon End  */}
                    </div>
                    {/*  Service Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/*  Service Item Start  */}
                    <div className="service-item wow fadeInUp" data-wow-delay="1.4s">
                        {/*  Service Item Body Start  */}
                        <div className="service-item-body">
                            {/*  Service Item Header Start  */}
                            <div className="service-item-header">
                                <div className="service-item-title">
                                    <h3><Link href="/service-single">Backup & Disaster Recovery</Link></h3>
                                </div>
                                <div className="service-item-btn">
                                    <Link href="/service-single"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Service Item Header End  */}

                            {/*  Service Item Content Start  */}
                            <div className="service-item-content">
                                <p>Ensure business continuity with reliable data backup and fast disaster recovery
                                    solutions.</p>
                            </div>
                            {/*  Service Item Content End  */}
                        </div>
                        {/*  Service Item Body End  */}

                        {/*  Icon Box Start  */}
                        <div className="icon-box">
                            <img src="/images/icon-service-item-8.svg" alt="" />
                        </div>
                        {/*  Icon Box End  */}

                        {/*  Service Bg Icon Start  */}
                        <div className="service-bg-icon">
                            <img src="/images/icon-service-item-8-bg.svg" alt="" />
                        </div>
                        {/*  Service Bg Icon End  */}
                    </div>
                    {/*  Service Item End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Services End  */}

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
    </>
  );
}
