import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Service Details - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function ServiceSinglePage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Identity & Access <span>Management</span>
                        </h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item"><Link href="/services">services</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Identity & Access Management</li>
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

    {/*  Page Service Single Start  */}
    <div className="page-service-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/*  Page Single Sidebar Start  */}
                    <div className="page-single-sidebar">
                        {/*  Page Category List Start  */}
                        <div className="page-category-list wow fadeInUp">
                            <h3>Our Premium Services</h3>
                            <ul>
                                <li><a href="#">Cloud Security Solutions</a></li>
                                <li><a href="#">Data Protection & Encryption</a></li>
                                <li><a href="#">Managed Security Services</a></li>
                                <li><a href="#">Incident Response & Recovery</a></li>
                                <li><a href="#">Compliance Risk Management</a></li>
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
                    {/*  Service Single Content Start  */}
                    <div className="service-single-content">
                        {/*  Page Single Image Start  */}
                        <div className="page-single-image">
                            <figure className="image-anime reveal">
                                <img src="/images/service-single-image.jpg" alt="" />
                            </figure>
                        </div>
                        {/*  Page Single Image End  */}

                        {/*  Service Entry Start  */}
                        <div className="service-entry">
                            <p className="wow fadeInUp">Darrell Steward is a cybersecurity veteran with over 15 years of
                                experience leading global security. He specializes in pro active defense strategies,
                                incident response frameworks, and enterprise-wide risk management systems. Darrell is a
                                cybersecurity veteran with over 15 years of experience leading global security. He
                                specializes in pro active defense strategies, incident response frameworks, and
                                enterprise-wide risk management systems.</p>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Darrell Steward is a cybersecurity veteran
                                with over 15 years of experience leading global security. He specializes in pro active
                                defense strategies, incident response frameworks, and enterprise-wide risk management
                                systems.</p>

                            {/*  Service Benefits Box Start  */}
                            <div className="service-benefits-box">
                                <h2 className="text-anime-style-2">Built In Benefits for <span>Better Protection</span></h2>
                                <p className="wow fadeInUp">Every cybersecurity solution we deliver is built with more than
                                    just defense in mind. Our services come equipped with integrated benefits that not
                                    only strengthen your security posture but also simplify operations, improve
                                    efficiency, and ensure your business is prepared to face future challenges with
                                    confidence.</p>

                                {/*  Service Benefits List Start  */}
                                <div className="service-benefit-list">
                                    {/*  Service Benefits Item Start  */}
                                    <div className="service-benefit-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon-box">
                                            <img src="/images/icon-service-benefit-1.svg" alt="" />
                                        </div>
                                        <div className="service-benefit-item-content">
                                            <h3>Continuous Monitoring & Alerts</h3>
                                            <p>Our solution provide 24/7 monitor instant alerting your team to suspiciou
                                                activities.</p>
                                            <ul>
                                                <li>Reduced Risk of Violations.</li>
                                                <li>Simplified Compliance Management.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*  Service Benefits Item End  */}

                                    {/*  Service Benefits Item Start  */}
                                    <div className="service-benefit-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="icon-box">
                                            <img src="/images/icon-service-benefit-2.svg" alt="" />
                                        </div>
                                        <div className="service-benefit-item-content">
                                            <h3>Regulatory Compliance Support</h3>
                                            <p>Integrated compliance features help your business meet industry
                                                standards.</p>
                                            <ul>
                                                <li>Minimize Compliance Risks.</li>
                                                <li>Ensure Legal & Industry Compliance.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*  Service Benefits Item End  */}
                                </div>
                                {/*  Service Benefits List End  */}
                            </div>
                            {/*  Service Benefits Box End  */}

                            {/*  Service Security Box Start  */}
                            <div className="service-security-box">
                                <h2 className="text-anime-style-2">A Clear Path to <span>Stronger Security</span></h2>
                                <p className="wow fadeInUp">Cybersecurity is often seen as overwhelming, filled with complex
                                    tools and ever-changing threats. Our mission is to simplify this journey by offering
                                    you a clear and structured path to stronger protection.</p>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">We begin with a thorough assessment to
                                    uncover hidden vulnerabilities, followed by the design and implementation of
                                    solutions that fit your business needs. But our work doesn't stop there - we
                                    continuously monitor, update, and adapt our strategies as new threats emerge.</p>

                                {/*  Service Security Steps Start  */}
                                <div className="service-security-steps">
                                    {/*  Security Step Item Start  */}
                                    <div className="security-step-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="security-step-header">
                                            <div className="icon-box">
                                                <img src="/images/icon-security-step-1.svg" alt="" />
                                            </div>
                                            <div className="security-step-no">
                                                <h3>01</h3>
                                            </div>
                                        </div>
                                        <div className="security-step-body">
                                            <div className="security-step-content">
                                                <h3>Assess Risks</h3>
                                                <p>We begin with a deep scan of your systems.</p>
                                            </div>
                                            <div className="security-step-btn">
                                                <Link href="/contact" className="readmore-btn">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  Security Step Item End  */}

                                    {/*  Security Step Item Start  */}
                                    <div className="security-step-item wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="security-step-header">
                                            <div className="icon-box">
                                                <img src="/images/icon-security-step-2.svg" alt="" />
                                            </div>
                                            <div className="security-step-no">
                                                <h3>02</h3>
                                            </div>
                                        </div>
                                        <div className="security-step-body">
                                            <div className="security-step-content">
                                                <h3>Apply Protection</h3>
                                                <p>Custom security measures are put in place to guard.</p>
                                            </div>
                                            <div className="security-step-btn">
                                                <Link href="/contact" className="readmore-btn">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  Security Step Item End  */}

                                    {/*  Security Step Item Start  */}
                                    <div className="security-step-item wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="security-step-header">
                                            <div className="icon-box">
                                                <img src="/images/icon-security-step-3.svg" alt="" />
                                            </div>
                                            <div className="security-step-no">
                                                <h3>03</h3>
                                            </div>
                                        </div>
                                        <div className="security-step-body">
                                            <div className="security-step-content">
                                                <h3>Monitor & Respond</h3>
                                                <p>Ongoing monitoring ensures fast responses.</p>
                                            </div>
                                            <div className="security-step-btn">
                                                <Link href="/contact" className="readmore-btn">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  Security Step Item End  */}
                                </div>
                                {/*  Service Security Steps End  */}

                                {/*  Section Footer Text Start  */}
                                <div className="section-footer-text section-footer-contact wow fadeInUp"
                                    data-wow-delay="1s">
                                    <p><span><img src="/images/icon-phone-white.svg" alt="" /></span> Building resilience
                                        step by step - <Link href="/contact">Explore how our process protects you!</Link>
                                    </p>
                                </div>
                                {/*  Section Footer Text End  */}
                            </div>
                            {/*  Service Security Box End  */}
                        </div>
                        {/*  Service Entry End  */}

                        {/*  Page Single FAQs Start  */}
                        <div className="page-single-faqs">
                            {/*  Section Title Start  */}
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Frequently <span>asked
                                        questions</span></h2>
                            </div>
                            {/*  Section Title End  */}

                            {/*  FAQ Accordion Start  */}
                            <div className="faq-accordion" id="faqaccordion">
                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true"
                                            aria-controls="collapse1">
                                            Q1. What safety measures are in place at the campsites?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1"
                                        data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Your safety is our top priority. All of our glamping sites are located in
                                                secure, low-risk natural areas and are regularly inspected for hazards.
                                                Each unit includes emergency contact details, basic first-aid supplies
                                                and safety instructions.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button " type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Q2. Are your glamping sites family-friendly?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse show"
                                        aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Your safety is our top priority. All of our glamping sites are located in
                                                secure, low-risk natural areas and are regularly inspected for hazards.
                                                Each unit includes emergency contact details, basic first-aid supplies
                                                and safety instructions.</p>
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
                                            Q3. Are there bathrooms and showers on-site?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3"
                                        data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Your safety is our top priority. All of our glamping sites are located in
                                                secure, low-risk natural areas and are regularly inspected for hazards.
                                                Each unit includes emergency contact details, basic first-aid supplies
                                                and safety instructions.</p>
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
                                            Q4. Can I bring my own food or cook at the campsite?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                                        data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Your safety is our top priority. All of our glamping sites are located in
                                                secure, low-risk natural areas and are regularly inspected for hazards.
                                                Each unit includes emergency contact details, basic first-aid supplies
                                                and safety instructions.</p>
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
                                            Q5. What types of adventure activities are available?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                                        data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Your safety is our top priority. All of our glamping sites are located in
                                                secure, low-risk natural areas and are regularly inspected for hazards.
                                                Each unit includes emergency contact details, basic first-aid supplies
                                                and safety instructions.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}
                            </div>
                            {/*  FAQ Accordion End  */}
                        </div>
                        {/*  Page Single FAQs End  */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Page Service Single End  */}
    </>
  );
}
