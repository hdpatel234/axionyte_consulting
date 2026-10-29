import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Testimonials - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function TestimonialsPage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Our <span>testimonials</span></h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Our testimonials</li>
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

    {/*  Page Testimonials Start  */}
    <div className="page-testimonials">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp">
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
                                <p>“Partnering with this cybersecurity team has completely transformed the way we
                                    protect our digital.”</p>
                            </div>
                            <div className="testimonial-author-content">
                                <h3>Sarah Johnson</h3>
                                <p>CEO, FinTech Innovations</p>
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
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
                                <p>"We faced constant compliance challenges in healthcare data. Their expertise helped
                                    us achieve.”</p>
                            </div>
                            <div className="testimonial-author-content">
                                <h3>Michael Lee</h3>
                                <p>IT Director, HealthSecure Systems</p>
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="0.4s">
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
                                <p>“The team helped us strengthen our cybersecurity infrastructure while ensuring
                                    compliance.”</p>
                            </div>
                            <div className="testimonial-author-content">
                                <h3>John Carter</h3>
                                <p>CTO, FinSecure Ltd.</p>
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="0.6s">
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
                                <p>"Cyber threats were a huge concern for our online store. With their tailored
                                    solutions.”</p>
                            </div>
                            <div className="testimonial-author-content">
                                <h3>Emily Davis</h3>
                                <p>Founder, E-Commerce Hub</p>
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="0.8s">
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
                                <p>"What sets them apart is not just the technology but the people behind it.”</p>
                            </div>
                            <div className="testimonial-author-content">
                                <h3>James Wilson</h3>
                                <p>COO, Global Logistics Corp</p>
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>

                <div className="col-xl-4 col-md-6">
                    {/*  Testimonial Item Start  */}
                    <div className="testimonial-item wow fadeInUp" data-wow-delay="1s">
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
                                <p>"We were struggling with data protection in the healthcare sector, but their tailored
                                    solutions.”</p>
                            </div>
                            <div className="testimonial-author-content">
                                <h3>Sarah Mitchell</h3>
                                <p>MD</p>
                            </div>
                        </div>
                    </div>
                    {/*  Testimonial Item End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Testimonials End  */}

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
