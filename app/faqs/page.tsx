import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "FAQs - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function FaqsPage() {
  return (
    <>
      {/*  Page Header Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Frequently Asked <span>Questions</span>
                        </h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">FAQ's</li>
                            </ol>
                        </nav>
                    </div>
                    {/*  Page Header Box End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Header End  */}

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

    {/*  Page Faqs Start  */}
    <div className="page-faqs">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/*  Page Single Sidebar Start  */}
                    <div className="page-single-sidebar">
                        {/*  Page Category List Start  */}
                        <div className="page-category-list wow fadeInUp">
                            <ul>
                                <li><a href="#faq_1">General Questions</a></li>
                                <li><a href="#faq_2">Threat Detection</a></li>
                                <li><a href="#faq_3">Security Services</a></li>
                                <li><a href="#faq_4">Data Protection</a></li>
                            </ul>
                        </div>
                        {/*  Page Category List End  */}

                        {/*  Sidebar CTA Box Start  */}
                        <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                            <div className="sidebar-cta-content">
                                <h3>Get In Touch</h3>
                                <h2>Get in Touch With Our Cyber security Experts</h2>
                                <p>Reach out to us today and ensure your business stays protected.</p>
                            </div>
                            <div className="sidebar-cta-btn">
                                <Link href="/contact" className="btn-default btn-highlighted">Let's Talk</Link>
                            </div>
                        </div>
                        {/*  Sidebar CTA Box End  */}
                    </div>
                    {/*  Page Single Sidebar End  */}
                </div>

                <div className="col-lg-8">
                    {/*  Page FAQs Catagery Start  */}
                    <div className="page-faqs-catagery">
                        {/*  FAQs section start  */}
                        <div className="page-single-faqs" id="faq_1">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">General <span>Questions</span></h2>
                            </div>

                            {/*  FAQ Accordion Start  */}
                            <div className="faq-accordion our-faq-accordion" id="accordion">
                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false"
                                            aria-controls="collapse1">
                                            Q1: Why is cybersecurity important for my business?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1"
                                        data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
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
                                    <div id="collapse2" className="accordion-collapse collapse show"
                                        aria-labelledby="heading2" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false"
                                            aria-controls="collapse3">
                                            Q3: Do small businesses really need cybersecurity?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                        data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false"
                                            aria-controls="collapse4">
                                            Q4: How quickly can you respond to a cyber threat?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                                        data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false"
                                            aria-controls="collapse5">
                                            Q5: Is your solution customizable for my industry?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                                        data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}
                            </div>
                            {/*  FAQ Accordion End  */}
                        </div>
                        {/*  FAQs section End  */}

                        {/*  FAQs section start  */}
                        <div className="page-single-faqs" id="faq_2">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Threat <span>Detection</span></h2>
                            </div>

                            {/*  FAQ Accordion Start  */}
                            <div className="faq-accordion our-faq-accordion" id="accordion1">
                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading6">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false"
                                            aria-controls="collapse6">
                                            Q1: Why is cybersecurity important for my business?
                                        </button>
                                    </h2>
                                    <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6"
                                        data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading7">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                            Q2: What industries do you provide cybersecurity services for?
                                        </button>
                                    </h2>
                                    <div id="collapse7" className="accordion-collapse collapse show"
                                        aria-labelledby="heading7" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading8">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false"
                                            aria-controls="collapse8">
                                            Q3: Do small businesses really need cybersecurity?
                                        </button>
                                    </h2>
                                    <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8"
                                        data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading9">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false"
                                            aria-controls="collapse9">
                                            Q4: How quickly can you respond to a cyber threat?
                                        </button>
                                    </h2>
                                    <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9"
                                        data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading10">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false"
                                            aria-controls="collapse10">
                                            Q5: Is your solution customizable for my industry?
                                        </button>
                                    </h2>
                                    <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10"
                                        data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}
                            </div>
                            {/*  FAQ Accordion End  */}
                        </div>
                        {/*  FAQs section End  */}

                        {/*  FAQs section start  */}
                        <div className="page-single-faqs" id="faq_3">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Security <span>Services</span></h2>
                            </div>

                            {/*  FAQ Accordion Start  */}
                            <div className="faq-accordion our-faq-accordion" id="accordion2">
                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading11">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false"
                                            aria-controls="collapse11">
                                            Q1: Why is cybersecurity important for my business?
                                        </button>
                                    </h2>
                                    <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11"
                                        data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading12">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse12" aria-expanded="true"
                                            aria-controls="collapse12">
                                            Q2: What industries do you provide cybersecurity services for?
                                        </button>
                                    </h2>
                                    <div id="collapse12" className="accordion-collapse collapse show"
                                        aria-labelledby="heading12" data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading13">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false"
                                            aria-controls="collapse13">
                                            Q3: Do small businesses really need cybersecurity?
                                        </button>
                                    </h2>
                                    <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13"
                                        data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading14">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false"
                                            aria-controls="collapse14">
                                            Q4: How quickly can you respond to a cyber threat?
                                        </button>
                                    </h2>
                                    <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14"
                                        data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading15">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false"
                                            aria-controls="collapse15">
                                            Q5: Is your solution customizable for my industry?
                                        </button>
                                    </h2>
                                    <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15"
                                        data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}
                            </div>
                            {/*  FAQ Accordion End  */}
                        </div>
                        {/*  FAQs section End  */}

                        {/*  FAQs section start  */}
                        <div className="page-single-faqs" id="faq_4">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Data <span>Protection</span></h2>
                            </div>

                            {/*  FAQ Accordion Start  */}
                            <div className="faq-accordion our-faq-accordion" id="accordion3">
                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading16">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse16" aria-expanded="false"
                                            aria-controls="collapse16">
                                            Q1: Why is cybersecurity important for my business?
                                        </button>
                                    </h2>
                                    <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16"
                                        data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading17">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="true"
                                            aria-controls="collapse17">
                                            Q2: What industries do you provide cybersecurity services for?
                                        </button>
                                    </h2>
                                    <div id="collapse17" className="accordion-collapse show" aria-labelledby="heading17"
                                        data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading18">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false"
                                            aria-controls="collapse18">
                                            Q3: Do small businesses really need cybersecurity?
                                        </button>
                                    </h2>
                                    <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18"
                                        data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading19">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false"
                                            aria-controls="collapse19">
                                            Q4: How quickly can you respond to a cyber threat?
                                        </button>
                                    </h2>
                                    <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19"
                                        data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading20">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false"
                                            aria-controls="collapse20">
                                            Q5: Is your solution customizable for my industry?
                                        </button>
                                    </h2>
                                    <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20"
                                        data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>We work with businesses across various industries including finance,
                                                healthcare, e-commerce, and technology, tailoring solutions to meet each
                                                sector's unique security needs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}
                            </div>
                            {/*  FAQ Accordion End  */}
                        </div>
                        {/*  FAQs section End  */}
                    </div>
                    {/*  Page FAQs Catagery End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Faqs End  */}
    </>
  );
}
