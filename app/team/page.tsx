import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Our Team - Netzon Cyber Security",
  description: "Netzon - Leading Cyber Security Services & Solutions",
};

export default function TeamPage() {
  return (
    <>
      {/*  Page Header Section Start  */}
    <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Page Header Box Start  */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Our <span>team</span></h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Our team</li>
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

    {/*  Page Team Start  */}
    <div className="page-team">
        <div className="container">
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

                <div className="col-xl-3 col-md-6">
                    {/*  Team Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.8s">
                        {/*  team Image Start  */}
                        <div className="team-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-5.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  team Image End  */}

                        {/*  Team Item Body Start  */}
                        <div className="team-item-body">
                            {/*  Team Content Start  */}
                            <div className="team-content">
                                <h3><Link href="/team-single">Bessie Cooper</Link></h3>
                                <p>Threat Intelligence Analyst</p>
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
                    <div className="team-item wow fadeInUp" data-wow-delay="1s">
                        {/*  team Image Start  */}
                        <div className="team-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-6.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  team Image End  */}

                        {/*  Team Item Body Start  */}
                        <div className="team-item-body">
                            {/*  Team Content Start  */}
                            <div className="team-content">
                                <h3><Link href="/team-single">Guy Hawkins</Link></h3>
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
                    <div className="team-item wow fadeInUp" data-wow-delay="1.2s">
                        {/*  team Image Start  */}
                        <div className="team-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-7.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  team Image End  */}

                        {/*  Team Item Body Start  */}
                        <div className="team-item-body">
                            {/*  Team Content Start  */}
                            <div className="team-content">
                                <h3><Link href="/team-single">Esther Howard</Link></h3>
                                <p>Ethical Hacker</p>
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
                    <div className="team-item wow fadeInUp" data-wow-delay="1.4s">
                        {/*  team Image Start  */}
                        <div className="team-image">
                            <Link href="/team-single" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-8.jpg" alt="" />
                                </figure>
                            </Link>
                        </div>
                        {/*  team Image End  */}

                        {/*  Team Item Body Start  */}
                        <div className="team-item-body">
                            {/*  Team Content Start  */}
                            <div className="team-content">
                                <h3><Link href="/team-single">Arlene McCoy</Link></h3>
                                <p>Security Engineer</p>
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
            </div>
        </div>
    </div>
    {/*  Page Team End  */}
    </>
  );
}
