import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Team Details - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function TeamSinglePage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Darrell <span>Steward</span></h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item"><Link href="/team">Team</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Darrell Steward</li>
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

    {/*  Page Team Single Start  */}
    <div className="page-team-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/*  Page Single Sidebar Start  */}
                    <div className="page-single-sidebar">
                        {/*  Team Single Image Start  */}
                        <div className="team-single-image">
                            <figure className="image-anime reveal">
                                <img src="/images/team-1.jpg" alt="" />
                            </figure>
                        </div>
                        {/*  Team Single Image End  */}
                    </div>
                    {/*  Page Sidebar End  */}
                </div>

                <div className="col-lg-8">
                    {/*  Team Single Content Box Start  */}
                    <div className="team-single-content-box">
                        {/*  Team Single Content Start  */}
                        <div className="team-single-content">
                            {/*  Team Member About Start  */}
                            <div className="team-member-about">
                                {/*  Section Title Start  */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">About me</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">Darrell <span>Steward</span>
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">Darrell Steward is a cybersecurity
                                        veteran with over 15 years of experience leading global security. He specializes
                                        in hacking proactive defense strategies, incident response frameworks, and
                                        enterprise-wide risk management systems.</p>
                                </div>
                                {/*  Section Title End  */}

                                {/*  Team Contact List Start  */}
                                <div className="team-contact-list wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="team-contact-list-title">
                                        <h3>Contact Information:</h3>
                                    </div>

                                    {/*  Team Contact Item Start  */}
                                    <div className="team-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-position.svg" alt="" />
                                        </div>
                                        <div className="team-contact-item-content">
                                            <p>My Positions</p>
                                            <h3>Sr. Hacking Specialist</h3>
                                        </div>
                                    </div>
                                    {/*  Team Contact Item End  */}

                                    {/*  Team Contact Item Start  */}
                                    <div className="team-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-mail-white.svg" alt="" />
                                        </div>
                                        <div className="team-contact-item-content">
                                            <p>Email Address</p>
                                            <h3>info@domainname.com</h3>
                                        </div>
                                    </div>
                                    {/*  Team Contact Item End  */}

                                    {/*  Team Contact Item Start  */}
                                    <div className="team-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-phone-white.svg" alt="" />
                                        </div>
                                        <div className="team-contact-item-content">
                                            <p>Phone Number</p>
                                            <h3>+(123) 456 - 789</h3>
                                        </div>
                                    </div>
                                    {/*  Team Contact Item End  */}

                                    {/*  Team Contact Item Start  */}
                                    <div className="team-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-location-white.svg" alt="" />
                                        </div>
                                        <div className="team-contact-item-content">
                                            <p>Our Location</p>
                                            <h3>2464 Royal, new jersey 45463</h3>
                                        </div>
                                    </div>
                                    {/*  Team Contact Item End  */}
                                </div>
                                {/*  Team Contact List End  */}
                            </div>
                            {/*  Team Member About Start  */}

                            {/*  Team Member Achivement Start  */}
                            <div className="team-member-achivement">
                                {/*  Section Title Start  */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">About me</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">My <span>Achivements</span>
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">Over the years, I've had the privilege
                                        of leading transformative cybersecurity initiatives that not only strengthened
                                        digital defenses but also empowered businesses to grow with confidence.</p>
                                </div>
                                {/*  Section Title End  */}

                                {/*  Team Achivement List Start  */}
                                <div className="team-achivement-list">
                                    {/*  Skills Progress Bar Start  */}
                                    <div className="skills-progress-bar">
                                        {/*  Skill Item Start  */}
                                        <div className="skillbar" data-percent="75%">
                                            <div className="skill-data">
                                                <div className="skill-title">Threat Detection & Analysis</div>
                                                <div className="skill-no">75%</div>
                                            </div>
                                            <div className="skill-progress">
                                                <div className="count-bar"></div>
                                            </div>
                                        </div>
                                        {/*  Skill Item End  */}
                                    </div>
                                    {/*  Skills Progress Bar End  */}

                                    {/*  Skills Progress Bar Start  */}
                                    <div className="skills-progress-bar">
                                        {/*  Skill Item Start  */}
                                        <div className="skillbar" data-percent="85%">
                                            <div className="skill-data">
                                                <div className="skill-title">Cloud Security & Compliance</div>
                                                <div className="skill-no">85%</div>
                                            </div>
                                            <div className="skill-progress">
                                                <div className="count-bar"></div>
                                            </div>
                                        </div>
                                        {/*  Skill Item End  */}
                                    </div>
                                    {/*  Skills Progress Bar End  */}

                                    {/*  Skills Progress Bar Start  */}
                                    <div className="skills-progress-bar">
                                        {/*  Skill Item Start  */}
                                        <div className="skillbar" data-percent="95%">
                                            <div className="skill-data">
                                                <div className="skill-title">Incident Response & Crisis Management</div>
                                                <div className="skill-no">95%</div>
                                            </div>
                                            <div className="skill-progress">
                                                <div className="count-bar"></div>
                                            </div>
                                        </div>
                                        {/*  Skill Item End  */}
                                    </div>
                                    {/*  Skills Progress Bar End  */}
                                </div>
                                {/*  Team Achivement List End  */}
                            </div>
                            {/*  Team Member Achivement End  */}

                            {/*  Team Member Info Start  */}
                            <div className="team-member-info">
                                {/*  Section Title Start  */}
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">Personal
                                        <span>Information</span>
                                    </h2>
                                    <p className="wow fadeInUp">Darrell's expertise spans multiple domains, including
                                        proactive threat intelligence, security automation, cloud infrastructure
                                        security, and regulatory compliance frameworks.</p>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">He has successfully directed global
                                        teams responsible for defending enterprises against advanced persistent threats,
                                        ransomware, insider risks, and large-scale data breaches. His work involves not
                                        just mitigating risks but transforming security operations into a business
                                        enabler.</p>
                                </div>
                                {/*  Section Title End  */}

                                {/*  Member Info Body Start  */}
                                <div className="member-info-body">
                                    {/*  Member Info List Start  */}
                                    <div className="member-info-list wow fadeInUp" data-wow-delay="0.4s">
                                        <ul>
                                            <li>Specialized in threat intelligence, proactive solutions.</li>
                                            <li>Strong believer in combining innovation with security.</li>
                                            <li>Over a decade of hands-on experience in cybersecurity strategy.</li>
                                            <li>Continuously advancing skills with globally recognized certifications.
                                            </li>
                                        </ul>
                                    </div>
                                    {/*  Member Info List End  */}

                                    {/*  Contact Us Circle Start  */}
                                    <div className="contact-us-circle">
                                        <Link href="/contact">
                                            <img src="/images/contact-us-circle.svg" alt="" />
                                        </Link>
                                    </div>
                                    {/*  Contact Us Circle End  */}
                                </div>
                                {/*  Member Info Body End  */}
                            </div>
                            {/*  Team Member Info End  */}
                        </div>
                        {/*  Team Single Content End  */}

                        {/*  Contact Form Start  */}
                        <div className="contact-us-form team-contact-form">
                            {/*  Section Title Start  */}
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Connect <span>With Me</span></h2>
                                <p className="wow fadeInUp">I'm always open to meaningful conversations, collaborations, and
                                    opportunities to share knowledge in the ever-evolving field of cybersecurity,
                                    whether it's discussing new challenges.</p>
                            </div>
                            {/*  Section Title End  */}

                            <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp"
                                data-wow-delay="0.2s">
                                <div className="row">
                                    <div className="form-group col-md-6 mb-4">
                                        <label className="form-label">First Name *</label>
                                        <input type="text" name="fname" className="form-control" id="fname"
                                            placeholder="Your First Name" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <label className="form-label">Last Name *</label>
                                        <input type="text" name="lname" className="form-control" id="lname"
                                            placeholder="Your Last Name" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <label className="form-label">Email Address *</label>
                                        <input type="email" name="email" className="form-control" id="email"
                                            placeholder="Your Email Address" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <label className="form-label">Phone Number *</label>
                                        <input type="text" name="phone" className="form-control" id="phone"
                                            placeholder="Your Phone Number" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-12 mb-5">
                                        <label className="form-label">Message</label>
                                        <textarea name="message" className="form-control" id="message" rows={5}
                                            placeholder="Any Message..."></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="contact-form-btn">
                                            <button type="submit" className="btn-default"><span>Submit Form</span></button>
                                            <div id="msgSubmit" className="h3 hidden"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/*  Contact Form End  */}
                    </div>
                    {/*  Team Single Content Box End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Team Single End  */}
    </>
  );
}
