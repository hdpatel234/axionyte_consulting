import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Case Study Details - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function CaseStudySinglePage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">E-Commerce Fraud <span>Prevention</span>
                        </h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item"><Link href="/case-study">Case Studies</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">E-Commerce Fraud Prevention</li>
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

    {/*  Page Case Study Single Start  */}
    <div className="page-case-study-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/*  Page Single Sidebar Start  */}
                    <div className="page-single-sidebar">
                        {/*  Page Category List Start  */}
                        <div className="page-category-list case-study-category-list wow fadeInUp">
                            <h3>Case Study Information</h3>
                            <ul>
                                <li><span>Client:</span>Olivia Martinez</li>
                                <li><span>Category:</span> E-Commerce Fraud...</li>
                                <li><span>Location:</span>Germany</li>
                                <li><span>Duration:</span>6 Months</li>
                                <li><span>Date:</span>25 May, 2025</li>
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
                </div>

                <div className="col-lg-8">
                    {/*  Case Study Single Content Start  */}
                    <div className="case-study-single-content">
                        {/*  Page Single Image Start  */}
                        <div className="page-single-image">
                            <figure className="image-anime reveal">
                                <img src="/images/case-study-image-1.jpg" alt="" />
                            </figure>
                        </div>
                        {/*  Page Single Image End  */}

                        {/*  Case Study Entry Start  */}
                        <div className="case-study-entry">
                            <p className="wow fadeInUp">Darrell Steward is a cybersecurity veteran with over 15 years of
                                experience leading global security. He specializes in pro active defense strategies,
                                incident response frameworks, and enterprise-wide risk management systems. Darrell is a
                                cybersecurity veteran with over 15 years of experience leading global security.</p>

                            {/*  Case Study Overview Start  */}
                            <div className="case-study-overview">
                                <h2 className="text-anime-style-2">Project <span>Overview</span></h2>
                                <p className="wow fadeInUp">The main objective was to align their IT infrastructure with
                                    HIPAA regulations, implement stronger data protection measures, and create a secure
                                    environment that enables healthcare professionals to deliver services without fear
                                    of security risks.</p>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">This project was designed to help a
                                    leading healthcare provider overcome critical compliance challenges while
                                    safeguarding sensitive patient information.</p>

                                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                    <li>This project was designed to help a leading healthcare</li>
                                    <li>Designed to securely protect healthcare patient data</li>
                                    <li>Created to reliably protect retail digital networks</li>
                                    <li>Built to effectively defend insurance client records</li>
                                </ul>
                            </div>
                            {/*  Case Study Overview End  */}

                            {/*  Case Study Solutions Start  */}
                            <div className="case-study-solutions">
                                <h2 className="text-anime-style-2">Challenges & <span>Solutions</span></h2>
                                <p className="wow fadeInUp">A leading healthcare provider was struggling to keep up with
                                    HIPAA regulations while managing a growing amount of sensitive patient data. Their
                                    outdated systems left them vulnerable to data breaches, compliance violations, and
                                    high operational risks.</p>

                                {/*  Project Solution Item List Start  */}
                                <div className="project-solution-item-list">
                                    {/*  Project Solution Item Start  */}
                                    <div className="project-solution-item">
                                        {/*  Project Solution Header Start  */}
                                        <div className="project-solution-header wow fadeInUp">
                                            <h3>Project Challenges:</h3>
                                            <p>This project was designed to help a leading healthcare provider overcome
                                                critical compliance challenges while safeguarding sensitive patient
                                                information.</p>
                                        </div>
                                        {/*  Project Solution Header End  */}

                                        {/*  Project Solution Body Start  */}
                                        <div className="project-solution-body">
                                            {/*  Project Solution Body Item Start  */}
                                            <div className="project-solution-body-item wow fadeInUp" data-wow-delay="0.2s">
                                                <div className="icon-box">
                                                    <img src="/images/icon-project-solution-body-1.svg" alt="" />
                                                </div>
                                                <div className="project-solution-body-content">
                                                    <h3>Ensuring Regulatory Compliance</h3>
                                                    <p>We implemented advanced compliance frame works, automated
                                                        monitoring tools.</p>
                                                </div>
                                            </div>
                                            {/*  Project Solution Body Item End  */}

                                            {/*  Project Solution Body Item Start  */}
                                            <div className="project-solution-body-item wow fadeInUp" data-wow-delay="0.4s">
                                                <div className="icon-box">
                                                    <img src="/images/icon-project-solution-body-2.svg" alt="" />
                                                </div>
                                                <div className="project-solution-body-content">
                                                    <h3>Protecting Sensitive Patient Data</h3>
                                                    <p>We deployed end-to-end encryption, multi -layered security
                                                        controls.</p>
                                                </div>
                                            </div>
                                            {/*  Project Solution Body Item End  */}
                                        </div>
                                        {/*  Project Solution Body End  */}

                                        {/*  Project Solution Footer Start  */}
                                        <div className="project-solution-footer wow fadeInUp" data-wow-delay="0.6s">
                                            <p>This project was designed to help a leading healthcare provider overcome
                                                critical compliance challenges while safeguarding sensitive patient
                                                information. This project was designed to help a leading healthcare
                                                provider overcome critical compliance challenges while safeguarding
                                                sensitive patient information.</p>
                                        </div>
                                        {/*  Project Solution Footer End  */}
                                    </div>
                                    {/*  Project Solution Item End  */}

                                    {/*  Project Solution Item Start  */}
                                    <div className="project-solution-item">
                                        {/*  Project Solution Header Start  */}
                                        <div className="project-solution-header wow fadeInUp">
                                            <h3>Project Solutions:</h3>
                                            <p>This project was designed to help a leading healthcare provider overcome
                                                critical compliance challenges while sensitive patient information. This
                                                project was designed to help a leading healthcare provider overcome
                                                critical.</p>
                                        </div>
                                        {/*  Project Solution Header End  */}

                                        {/*  Project Solution Images Start  */}
                                        <div className="project-solution-images">
                                            {/*  Project Solution Image Start  */}
                                            <div className="project-solution-img">
                                                <figure className="image-anime reveal">
                                                    <img src="/images/project-solution-image-1.jpg" alt="" />
                                                </figure>
                                            </div>
                                            {/*  Project Solution Image End  */}

                                            {/*  Project Solution Image Start  */}
                                            <div className="project-solution-img">
                                                <figure className="image-anime reveal">
                                                    <img src="/images/project-solution-image-2.jpg" alt="" />
                                                </figure>
                                            </div>
                                            {/*  Project Solution Image End  */}
                                        </div>
                                        {/*  Project Solution Images End  */}

                                        {/*  Project Solution List Start  */}
                                        <div className="project-solution-list wow fadeInUp" data-wow-delay="0.2s">
                                            <ul>
                                                <li>This project was designed to help a leading healthcare</li>
                                                <li>Designed to securely protect healthcare patient data</li>
                                                <li>Created to reliably protect retail digital networks</li>
                                                <li>Built to effectively defend insurance client records</li>
                                            </ul>
                                        </div>
                                        {/*  Project Solution List End  */}
                                    </div>
                                    {/*  Project Solution Item End  */}
                                </div>
                                {/*  Project Solution Item List End  */}
                            </div>
                        </div>
                        {/*  Case Study Entry End  */}

                        {/*  Page Single FAQs Start  */}
                        <div className="page-single-faqs">
                            {/*  Section Title Start  */}
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Frequently asked questions</h2>
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
                    {/*  Case Study Single Content End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Case Study Single End  */}
    </>
  );
}
