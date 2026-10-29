import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Pricing Plans - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function PricingPage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Our Pricing <span>Plans</span></h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Our Pricing Plans</li>
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

    {/*  Page Pricing Start  */}
    <div className="page-pricing">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Our Pricing Box Start  */}
                    <div className="our-pricing-box wow fadeInUp" data-wow-delay="0.2s">
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
                                            <Link href="/contact" className="btn-default">get started</Link>
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
                                            <Link href="/contact" className="btn-default">get started</Link>
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
                                            <Link href="/contact" className="btn-default">get started</Link>
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
                                            <Link href="/contact" className="btn-default">get started</Link>
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
                                            <Link href="/contact" className="btn-default">get started</Link>
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
                                            <Link href="/contact" className="btn-default">get started</Link>
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
                                            <Link href="/contact" className="btn-default">get started</Link>
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
                                            <Link href="/contact" className="btn-default">get started</Link>
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
    {/*  Page Pricing End  */}

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
