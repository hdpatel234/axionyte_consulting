export const COMPANY = {
  name: "AXIONYTE Consulting",
  tagline: "Cybersecurity · AI Services",
  owner: "Jaydev Dudhia",
  role: "Owner",
  phone: "+91 75069 28838",
  phoneRaw: "+917506928838",
  phoneLink: "tel:+917506928838",
  email: "info@axionyte.com", // placeholder if needed, primary contact is phone & form
  address: {
    suite: "1011, Ratnanjali Solitair",
    street: "Prernatirth Derasar Road, S.A.C.",
    cityStateZip: "Ahmedabad, Gujarat – 380015",
    country: "India",
    full: "1011, Ratnanjali Solitair, Prernatirth Derasar Road, S.A.C., Ahmedabad, Gujarat – 380015, India",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Ratnanjali+Solitair+Prernatirth+Derasar+Road+Ahmedabad+Gujarat+380015&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=1011+Ratnanjali+Solitair+Prernatirth+Derasar+Road+Ahmedabad+Gujarat+380015",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export const INDUSTRIES_SERVED = [
  "Information Technology",
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail & E-commerce",
  "Professional Services",
  "Enterprise Organizations",
];

export const CORE_SERVICES = [
  {
    id: "cybersecurity-consulting",
    title: "Cybersecurity Consulting",
    description:
      "Strategic cybersecurity advisory services designed to fortify business architecture, safeguard digital assets, and align security posture with business objectives.",
    icon: "/images/icon-service-item-1.svg",
    bgIcon: "/images/icon-service-item-1-bg.svg",
    link: "/services",
  },
  {
    id: "security-assessment",
    title: "Security Assessment",
    description:
      "Comprehensive infrastructure, network, and application vulnerability assessments identifying vulnerabilities before adversaries can exploit them.",
    icon: "/images/icon-service-item-2.svg",
    bgIcon: "/images/icon-service-item-2-bg.svg",
    link: "/services",
  },
  {
    id: "risk-compliance-advisory",
    title: "Risk & Compliance Advisory",
    description:
      "Guidance to navigate regulatory frameworks, establish robust governance programs, and mitigate operational, financial, and reputational risks.",
    icon: "/images/icon-service-item-3.svg",
    bgIcon: "/images/icon-service-item-3-bg.svg",
    link: "/services",
  },
  {
    id: "ai-consulting",
    title: "AI Consulting",
    description:
      "Advisory on ethical, secure, and impactful artificial intelligence adoption to transform enterprise workflows and drive competitive advantages.",
    icon: "/images/icon-service-item-4.svg",
    bgIcon: "/images/icon-service-item-4-bg.svg",
    link: "/services",
  },
  {
    id: "ai-automation-solutions",
    title: "AI Automation Solutions",
    description:
      "Design and implementation of intelligent process automations that enhance operational velocity, eliminate bottlenecks, and ensure data integrity.",
    icon: "/images/icon-service-item-5.svg",
    bgIcon: "/images/icon-service-item-5-bg.svg",
    link: "/services",
  },
  {
    id: "digital-security-strategy",
    title: "Digital Security Strategy",
    description:
      "Roadmapping resilient security paradigms for cloud migrations, hybrid ecosystems, and next-generation enterprise digital transformations.",
    icon: "/images/icon-service-item-6.svg",
    bgIcon: "/images/icon-service-item-6-bg.svg",
    link: "/services",
  },
];

export const CORE_SOLUTIONS = [
  {
    id: "threat-defense",
    title: "Adaptive Threat Defense",
    tagline: "Proactive Protection",
    description:
      "Multi-layered cybersecurity controls and continuous monitoring methodologies engineered to anticipate, detect, and neutralize emerging cyber threats.",
    points: [
      "Perimeter & endpoint hardening",
      "Real-time threat intelligence",
      "Incident response preparedness",
    ],
  },
  {
    id: "cloud-security",
    title: "Cloud & Infrastructure Resilience",
    tagline: "Secure Transformation",
    description:
      "Hardening cloud infrastructures across AWS, Azure, and hybrid environments with zero-trust frameworks, least-privilege access, and automated guardrails.",
    points: [
      "Zero-trust architecture planning",
      "Cloud configuration auditing",
      "Secure workload isolation",
    ],
  },
  {
    id: "ai-transformation",
    title: "Enterprise AI Modernization",
    tagline: "Intelligent Enablement",
    description:
      "Enabling safe, compliant, and performant AI integration across enterprise operations, from model evaluation to secure data pipeline engineering.",
    points: [
      "Secure AI architecture design",
      "Workflow automation feasibility",
      "AI risk management & governance",
    ],
  },
  {
    id: "grc-solutions",
    title: "Governance, Risk & Compliance",
    tagline: "Regulatory Confidence",
    description:
      "Bridging the gap between technological reality and statutory mandates, ensuring sustained alignment with ISO 27001, SOC 2, GDPR, and regional standards.",
    points: [
      "Gap analysis & remediation",
      "Vendor risk management",
      "Continuous compliance monitoring",
    ],
  },
];

export const FAQS = [
  {
    id: "faq-1",
    question: "What is cybersecurity consulting?",
    answer:
      "Cybersecurity consulting involves expert assessment, strategic advisory, and technical guidance to help organizations protect their digital infrastructure, proprietary data, and customer information from cyber threats, breaches, and regulatory non-compliance.",
  },
  {
    id: "faq-2",
    question: "How can cybersecurity assessments benefit an organization?",
    answer:
      "Security assessments identify hidden vulnerabilities across networks, applications, and configurations before malicious actors can exploit them. They provide prioritized remediation roadmaps that strengthen overall security posture and optimize security investments.",
  },
  {
    id: "faq-3",
    question: "How can AI support business operations?",
    answer:
      "Artificial Intelligence can automate routine administrative workflows, analyze extensive datasets for predictive operational insights, enhance decision-making speed, and bolster security threat detection while freeing human teams to focus on strategic growth.",
  },
  {
    id: "faq-4",
    question: "How can I discuss my organization's requirements with AXIONYTE Consulting?",
    answer:
      "You can connect directly with our expert team by calling +91 75069 28838 or by submitting your requirements through our Contact form. We coordinate an introductory discussion to review your operational context and specific objectives.",
  },
  {
    id: "faq-5",
    question: "How do I request a consultation?",
    answer:
      "Simply navigate to our Contact Us page, provide your name, contact details, and a brief overview of your business needs, or dial +91 75069 28838 directly. Our leadership will follow up promptly.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Discovery & Scope",
    description:
      "Initial stakeholder consultation to understand operational architecture, compliance requirements, and specific cybersecurity or AI objectives.",
    icon: "/images/icon-how-it-work-1.svg",
  },
  {
    step: "02",
    title: "Security & Tech Assessment",
    description:
      "In-depth analysis of existing defenses, vulnerabilities, technological readiness, and operational workflows.",
    icon: "/images/icon-how-it-work-2.svg",
  },
  {
    step: "03",
    title: "Strategic Recommendations",
    description:
      "Delivering a pragmatic, prioritized action plan outlining actionable security improvements, mitigation tactics, or AI adoption milestones.",
    icon: "/images/icon-how-it-work-3.svg",
  },
  {
    step: "04",
    title: "Execution Planning",
    description:
      "Collaborative roadmap finalization, integration guidance, and ongoing alignment to ensure resilient and scalable business operations.",
    icon: "/images/icon-how-it-work-4.svg",
  },
];

export const BLOG_POSTS = [
  {
    slug: "integrating-ai-with-enterprise-cybersecurity",
    title: "Integrating AI with Enterprise Cybersecurity: Strategies for Resilient Defense",
    date: "October 2026",
    excerpt:
      "How forward-thinking enterprises are unifying machine intelligence and proactive defense mechanisms to outpace modern automated threats.",
    image: "/images/post-1.jpg",
    category: "Cybersecurity & AI",
    readTime: "5 min read",
    content: `
      In an era where cyber threats are becoming increasingly automated and sophisticated, traditional perimeter defenses are no longer sufficient on their own.

      Organizations are now turning toward intelligent systems to bridge defense gaps. Integrating machine intelligence with modern security operations allows security teams to detect anomalies at machine speed, correlate telemetry from disparate sources, and respond to potential breaches before lateral movement occurs.

      Key Pillars of AI-Enhanced Defense:
      1. Predictive Vulnerability Management: Utilizing predictive models to prioritize patch management based on threat exploitability.
      2. Automated Threat Hunting: Continuous scanning of system logs and network anomalies to identify suspicious behavior.
      3. Zero-Trust Access Verification: Evaluating access requests dynamically against contextual risk signals rather than static credentials.

      At AXIONYTE Consulting, we assist organizations in harmonizing cybersecurity fundamentals with intelligent technologies to establish resilient digital operations.
    `,
  },
  {
    slug: "essential-steps-for-cybersecurity-readiness-assessment",
    title: "Essential Steps for Conducting an Effective Cybersecurity Readiness Assessment",
    date: "October 2026",
    excerpt:
      "A systematic overview of how organizations can rigorously evaluate their technical and governance posture to mitigate operational risk.",
    image: "/images/post-2.jpg",
    category: "Security Assessment",
    readTime: "4 min read",
    content: `
      Regular cybersecurity assessments are the bedrock of operational resilience. Without an accurate understanding of vulnerabilities, organizations cannot effectively allocate security budgets or prioritize remediation.

      A comprehensive assessment should encompass:
      - Network & Perimeter Vulnerability Auditing
      - Application Security & API Testing
      - Configuration Review for Cloud & Hybrid Infrastructure
      - Access Management & Identity Governance Controls
      - Incident Response Plan Simulation

      By systematically assessing each layer, leadership gains clarity on actual risk exposure and can take decisive action to protect client trust and corporate assets.
    `,
  },
  {
    slug: "navigating-data-privacy-and-compliance-standards",
    title: "Navigating Data Privacy and Compliance Standards in Modern Business",
    date: "October 2026",
    excerpt:
      "Understanding the evolving landscape of data protection regulations and building a sustainable framework for enterprise governance.",
    image: "/images/post-3.jpg",
    category: "Risk & Compliance",
    readTime: "6 min read",
    content: `
      Data privacy and compliance mandates continue to expand globally. From industry standards to regional regulations, compliance is no longer a check-box exercise; it is an ongoing operational commitment.

      Building Sustainable Compliance:
      - Data Mapping & Classification: Identifying where sensitive and regulated data resides, who accesses it, and how it is transmitted.
      - Policy & Procedure Alignment: Establishing clear operational policies that reflect actual organizational workflows.
      - Continuous Monitoring: Implementing automated controls to detect compliance drift before audit cycles.

      AXIONYTE Consulting provides advisory guidance to align governance frameworks with operational realities, ensuring regulatory confidence without stifling innovation.
    `,
  },
];
