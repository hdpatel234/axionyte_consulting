import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "About Us - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function AboutPage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">About <span>us</span></h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">about us</li>
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
                                <Link href="/contact"><img src="/images/contact-us-circle.svg" alt="" /></Link>
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

    {/*  Our Value Section Start  */}
    <div className="our-value">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    {/*  Our Value Image Box Start  */}
                    <div className="our-value-image-box wow fadeInUp" data-wow-delay="0.2s">
                        {/*  Our Value Image 1 Start  */}
                        <div className="our-value-img-1">
                            <figure className="image-anime">
                                <img src="/images/our-value-image-1.jpg" alt="" />
                            </figure>
                        </div>
                        {/*  Our Value Image 1 End  */}

                        {/*  Our Value Image 2 Start  */}
                        <div className="our-value-img-2">
                            <figure className="image-anime">
                                <img src="/images/our-value-image-2.jpg" alt="" />
                            </figure>

                            {/*  Contact Us Circle Start  */}
                            <div className="contact-us-circle">
                                <Link href="/contact">
                                    <img src="/images/contact-us-circle.svg" alt="" />
                                </Link>
                            </div>
                            {/*  Contact Us Circle End  */}
                        </div>
                        {/*  Our Value Image 1 End  */}
                    </div>
                    {/*  Our Value Image Box End  */}
                </div>

                <div className="col-xl-6">
                    {/*  Our Value Content Start  */}
                    <div className="our-value-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Our Values</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">The core principles that guide our
                                mission <span>in cybersecurity</span></h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">At the heart of our work lies a set of
                                unwavering principles that shape every solution we deliver. We believe that true
                                cybersecurity goes beyond technology - it is built on trust, integrity, and a commitment
                                to protecting what matters most.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Our Value List Start  */}
                        <div className="our-value-list">
                            {/*  Our Value Item Start */}
                            <div className="our-value-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src="/images/icon-our-value-1.svg" alt="" />
                                </div>
                                <div className="our-value-item-content">
                                    <h3>Our Mission</h3>
                                    <p>We are dedicated to staying ahead of evolving threats, providing tailored.</p>
                                </div>
                            </div>
                            {/*  Our Value Item End */}

                            {/*  Our Value Item Start */}
                            <div className="our-value-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-box">
                                    <img src="/images/icon-our-value-2.svg" alt="" />
                                </div>
                                <div className="our-value-item-content">
                                    <h3>Our Vision</h3>
                                    <p>We aim to be the trusted that not only protects against today's cyber threats.
                                    </p>
                                </div>
                            </div>
                            {/*  Our Value Item End */}
                        </div>
                        {/*  Our Value List End  */}
                    </div>
                    {/*  Our Value Content End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Value Section End  */}

    {/*  Our Awards Section Start  */}
    <div className="our-awards">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    {/*  Award Info Start  */}
                    <div className="awards-info">
                        {/*  Section Sub Title Start  */}
                        <div className="section-sub-title">
                            <h3 className="wow fadeInUp">Our Awards</h3>
                        </div>
                        {/*  Section Sub Title End  */}

                        {/*  Award Image Start  */}
                        <div className="award-image wow fadeInUp" data-wow-delay="0.2s">
                            <img src="/images/our-awards-image.png" alt="" />
                        </div>
                        {/*  Award Image End  */}
                    </div>
                    {/*  Award Info End  */}
                </div>

                <div className="col-lg-9">
                    {/*  Award Content Start  */}
                    <div className="our-award-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Celebrating our journey of innovation,
                                trust & excellence <span>in cyber security</span></h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Over the years, our dedication to safeguarding
                                businesses and driving innovation has been recognized by industry leaders and global
                                organizations. These awards are not just milestones but a reflection of the trust we've
                                earned.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Award Item List Start  */}
                        <div className="award-item-list">
                            {/*  Award Item Start  */}
                            <div className="award-item wow fadeInUp">
                                <div className="award-item-info">
                                    <div className="award-year">
                                        <p>2021 - 2022</p>
                                    </div>
                                    <div className="award-item-body">
                                        <div className="award-item-title">
                                            <h3>Excellence in Compliance & Risk Management</h3>
                                        </div>
                                        <div className="award-item-content">
                                            <p>Best Agency</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="award-item-button">
                                    <Link href="/contact"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Award Item End  */}

                            {/*  Award Item Start  */}
                            <div className="award-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="award-item-info">
                                    <div className="award-year">
                                        <p>2022 - 2023</p>
                                    </div>
                                    <div className="award-item-body">
                                        <div className="award-item-title">
                                            <h3>Excellence in Customer Trust and Data Protection</h3>
                                        </div>
                                        <div className="award-item-content">
                                            <p>Digital Safety</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="award-item-button">
                                    <Link href="/contact"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Award Item End  */}

                            {/*  Award Item Start  */}
                            <div className="award-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="award-item-info">
                                    <div className="award-year">
                                        <p>2023 - 2024</p>
                                    </div>
                                    <div className="award-item-body">
                                        <div className="award-item-title">
                                            <h3>Best International Award for Innovation in Threat</h3>
                                        </div>
                                        <div className="award-item-content">
                                            <p>Partner Award</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="award-item-button">
                                    <Link href="/contact"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Award Item End  */}

                            {/*  Award Item Start  */}
                            <div className="award-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="award-item-info">
                                    <div className="award-year">
                                        <p>2024 - 2025</p>
                                    </div>
                                    <div className="award-item-body">
                                        <div className="award-item-title">
                                            <h3>Cybersecurity Innovator for Advanced Cloud</h3>
                                        </div>
                                        <div className="award-item-content">
                                            <p>Cloud Security</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="award-item-button">
                                    <Link href="/contact"><img src="/images/arrow-primary.svg" alt="" /></Link>
                                </div>
                            </div>
                            {/*  Award Item End  */}
                        </div>
                        {/*  Award Item List End  */}
                    </div>
                    {/*  Award Content End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Awards Section End  */}

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

    {/*  Our Team Section Start  */}
    <div className="our-team">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">Our Expert Team</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">The minds, innovators, and problem-solvers
                            driving our mission <span>to create safer</span></h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp">
                        {/*  team Image Start  */}
                        <div className="team-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-1.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  team Image End  */}

                        {/*  Team Item Body Start  */}
                        <div className="team-item-body">
                            {/*  Team Content Start  */}
                            <div className="team-content">
                                <h3><Link href="/team-single">Darrell Steward</Link></h3>
                                <p>Hacking Specialist</p>
                            </div>
                            {/*  Team Content End  */}

                            {/*  Team Social List Start  */}
                            <div className="team-social-list">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                            {/*  Team Social List End  */}
                        </div>
                        {/*  Team Item Body End  */}
                    </div>
                    {/*  Team Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                        {/*  team Image Start  */}
                        <div className="team-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-2.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  team Image End  */}

                        {/*  Team Item Body Start  */}
                        <div className="team-item-body">
                            {/*  Team Content Start  */}
                            <div className="team-content">
                                <h3><Link href="/team-single">Albert Flores</Link></h3>
                                <p>Attack Specialist</p>
                            </div>
                            {/*  Team Content End  */}

                            {/*  Team Social List Start  */}
                            <div className="team-social-list">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                            {/*  Team Social List End  */}
                        </div>
                        {/*  Team Item Body End  */}
                    </div>
                    {/*  Team Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                        {/*  team Image Start  */}
                        <div className="team-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-3.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  team Image End  */}

                        {/*  Team Item Body Start  */}
                        <div className="team-item-body">
                            {/*  Team Content Start  */}
                            <div className="team-content">
                                <h3><Link href="/team-single">Jacob Jones</Link></h3>
                                <p>Operation Manager</p>
                            </div>
                            {/*  Team Content End  */}

                            {/*  Team Social List Start  */}
                            <div className="team-social-list">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                            {/*  Team Social List End  */}
                        </div>
                        {/*  Team Item Body End  */}
                    </div>
                    {/*  Team Item End  */}
                </div>

                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
                        {/*  team Image Start  */}
                        <div className="team-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-4.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  team Image End  */}

                        {/*  Team Item Body Start  */}
                        <div className="team-item-body">
                            {/*  Team Content Start  */}
                            <div className="team-content">
                                <h3><Link href="/team-single">Ronald Richards</Link></h3>
                                <p>Hacking Specialist</p>
                            </div>
                            {/*  Team Content End  */}

                            {/*  Team Social List Start  */}
                            <div className="team-social-list">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                            {/*  Team Social List End  */}
                        </div>
                        {/*  Team Item Body End  */}
                    </div>
                    {/*  Team Item End  */}
                </div>

                <div className="col-lg-12">
                    {/*  Section Footer Text Start  */}
                    <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                        <p><span>Free</span> Let's Create Something Better Together - <Link href="/contact">Contact Us
                                Today!</Link></p>
                    </div>
                    {/*  Section Footer Text End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Team Section End  */}

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
