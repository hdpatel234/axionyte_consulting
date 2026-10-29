import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/common/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function ContactPage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Contact <span>us</span></h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact us</li>
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

    {/*  Page Contact Us Start  */}
    <div className="page-contact-us">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Contact Info List Start  */}
                    <div className="contact-info-list">
                        {/*  Contact Info Item Start  */}
                        <div className="contact-info-item wow fadeInUp">
                            <div className="icon-box">
                                <img src="/images/icon-phone-white.svg" alt="" />
                            </div>
                            <div className="contact-info-content">
                                <h3>Contact us</h3>
                                <p><a href="tel:+123456789">+(123) 456-789</a></p>
                                <p><a href="tel:+798765878">+(798) 765-878</a></p>
                            </div>
                        </div>
                        {/*  Contact Info Item End  */}

                        {/*  Contact Info Item Start  */}
                        <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon-box">
                                <img src="/images/icon-location-white.svg" alt="" />
                            </div>
                            <div className="contact-info-content">
                                <h3>Address</h3>
                                <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                            </div>
                        </div>
                        {/*  Contact Info Item End  */}

                        {/*  Contact Info Item Start  */}
                        <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon-box">
                                <img src="/images/icon-mail-white.svg" alt="" />
                            </div>
                            <div className="contact-info-content">
                                <h3>Email us</h3>
                                <p><a href="mailto:info@domainname.com">info@domainname.com</a></p>
                                <p><a href="mailto:support@domainname.com">support@domainname.com</a></p>
                            </div>
                        </div>
                        {/*  Contact Info Item End  */}

                        {/*  Contact Info Item Start  */}
                        <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                            <div className="icon-box">
                                <img src="/images/icon-location-white.svg" alt="" />
                            </div>
                            <div className="contact-info-content">
                                <h3>Address</h3>
                                <p>Monday - Friday : 10AM - 5:00PM</p>
                                <p>Saturday : 11AM - 2:00PM</p>
                            </div>
                        </div>
                        {/*  Contact Info Item End  */}
                    </div>
                    {/*  Contact Info List End  */}
                </div>

                <div className="col-xl-5">
                    {/*  Contact Us Content Start  */}
                    <div className="contact-content-box">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Get In Touch</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Contact us <span>today!</span></h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Have questions or need expert cybersecurity
                                support? Our team is ready to guide you with tailored solutions.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Google Map IFrame Start  */}
                        <div className="google-map-iframe wow fadeInUp" data-wow-delay="0.4s">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        {/*  Google Map IFrame End  */}
                    </div>
                    {/*  Contact Us Content End  */}
                </div>

                <div className="col-xl-7">
                    {/*  Contact Us Form Start  */}
                    <div className="contact-us-form">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h2 className="text-anime-style-2">Fill up the <span>form</span></h2>
                            <p className="wow fadeInUp">Simply fill out the form below with your details and requirements,
                                and our team will get back to you promptly with the right solutions for your needs.</p>
                        </div>
                        {/*  Section Title End  */}

                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  Page Contact Us End  */}
    </>
  );
}
