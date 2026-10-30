import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import PartnersTicker from "@/components/common/PartnersTicker";
import { COMPANY, CORE_SERVICES } from "@/lib/company-data";

// Combined dictionary of all services & solutions
const ALL_SERVICE_DETAILS: Record<
  string,
  {
    title: string;
    subtitle: string;
    tagline: string;
    description: string;
    overview: string[];
    features: { title: string; desc: string }[];
    benefits: string[];
    image: string;
    icon: string;
  }
> = {
  "cybersecurity-consulting": {
    title: "Cybersecurity Consulting",
    subtitle: "Enterprise Defense Architecture",
    tagline: "Proactive Protection",
    description:
      "Strategic cybersecurity advisory services designed to fortify business architecture, safeguard digital assets, and align security posture with business objectives.",
    overview: [
      "In an era of relentless cyber threats, passive defense is no longer an option. Our Cybersecurity Consulting practice guides enterprise leadership in establishing continuous, intelligence-driven defense capabilities.",
      "We collaborate closely with executive teams, CISOs, and IT directors to design bespoke security blueprints that balance operational velocity with ironclad perimeter and cloud security.",
    ],
    features: [
      {
        title: "Architecture Hardening",
        desc: "End-to-end evaluation and structural hardening of network boundaries, identity perimeters, and multi-cloud environments.",
      },
      {
        title: "Threat Modeling & Intelligence",
        desc: "Active threat profiling against modern attack vectors, adversary emulation, and continuous telemetry monitoring.",
      },
      {
        title: "Incident Response Frameworks",
        desc: "Pre-breach playbooks, tabletop simulation exercises, and rapid containment protocols to minimize operational downtime.",
      },
    ],
    benefits: [
      "Substantial reduction in attack surface exposure",
      "Executive visibility into real-time threat posture",
      "Alignment with NIST, ISO 27001, and regional data protection mandates",
      "Rapid incident containment and accelerated disaster recovery",
    ],
    image: "/images/case-study-image-1.jpg",
    icon: "/images/icon-service-item-1.svg",
  },
  "cybersecurity": {
    title: "Cybersecurity Consulting",
    subtitle: "Enterprise Defense Architecture",
    tagline: "Proactive Protection",
    description:
      "Strategic cybersecurity advisory services designed to fortify business architecture, safeguard digital assets, and align security posture with business objectives.",
    overview: [
      "In an era of relentless cyber threats, passive defense is no longer an option. Our Cybersecurity Consulting practice guides enterprise leadership in establishing continuous, intelligence-driven defense capabilities.",
      "We collaborate closely with executive teams, CISOs, and IT directors to design bespoke security blueprints that balance operational velocity with ironclad perimeter and cloud security.",
    ],
    features: [
      {
        title: "Architecture Hardening",
        desc: "End-to-end evaluation and structural hardening of network boundaries, identity perimeters, and multi-cloud environments.",
      },
      {
        title: "Threat Modeling & Intelligence",
        desc: "Active threat profiling against modern attack vectors, adversary emulation, and continuous telemetry monitoring.",
      },
      {
        title: "Incident Response Frameworks",
        desc: "Pre-breach playbooks, tabletop simulation exercises, and rapid containment protocols to minimize operational downtime.",
      },
    ],
    benefits: [
      "Substantial reduction in attack surface exposure",
      "Executive visibility into real-time threat posture",
      "Alignment with NIST, ISO 27001, and regional data protection mandates",
      "Rapid incident containment and accelerated disaster recovery",
    ],
    image: "/images/case-study-image-1.jpg",
    icon: "/images/icon-service-item-1.svg",
  },
  "security-assessment": {
    title: "Security Assessment",
    subtitle: "Vulnerability Discovery & Remediation",
    tagline: "Vulnerability Discovery",
    description:
      "Comprehensive infrastructure, network, and application vulnerability assessments identifying vulnerabilities before adversaries can exploit them.",
    overview: [
      "A systematic evaluation of corporate technology stacks, endpoints, web applications, and APIs to uncover configuration drift and code flaws.",
      "Our offensive security methodologies simulate adversary tactics, delivering prioritized remediation roadmaps mapped to the MITRE ATT&CK framework.",
    ],
    features: [
      {
        title: "Penetration Testing (VAPT)",
        desc: "Black-box, grey-box, and white-box penetration testing for enterprise web applications, mobile apps, and internal network infrastructure.",
      },
      {
        title: "Cloud Security Configuration Audit",
        desc: "Rigorous posture reviews across AWS, Azure, and Google Cloud ensuring zero accidental exposure and strict IAM least privilege.",
      },
      {
        title: "Source Code Security Auditing",
        desc: "Static and dynamic analysis of proprietary software codebases to uncover injection vulnerabilities, logic flaws, and supply chain dependencies.",
      },
    ],
    benefits: [
      "Elimination of exploitable zero-day and configuration weaknesses",
      "Actionable engineering remediation steps categorized by severity",
      "Verification of compliance benchmarks (PCI-DSS, SOC 2, HIPAA)",
      "Strengthened vendor and partner cybersecurity trust",
    ],
    image: "/images/case-study-image-2.jpg",
    icon: "/images/icon-service-item-2.svg",
  },
  "risk-compliance-advisory": {
    title: "Risk & Compliance Advisory",
    subtitle: "Statutory Governance & Compliance",
    tagline: "Regulatory Confidence",
    description:
      "Guidance to navigate regulatory frameworks, establish robust governance programs, and mitigate operational, financial, and reputational risks.",
    overview: [
      "Modern compliance is no longer a check-the-box routine; it is the cornerstone of sustainable enterprise trust.",
      "AXIONYTE Consulting guides enterprises through the complex maze of global and regional standards, transforming compliance into a strategic market advantage.",
    ],
    features: [
      {
        title: "ISO 27001 & SOC 2 Readiness",
        desc: "Comprehensive readiness gap analysis, policy documentation, risk registers, and mock audit simulations.",
      },
      {
        title: "Data Privacy & GDPR Frameworks",
        desc: "Data mapping, privacy impact assessments (PIA), and governance controls for Indian DPDP, GDPR, and California CCPA.",
      },
      {
        title: "Third-Party Vendor Risk Auditing",
        desc: "Establishing rigorous vendor security screening protocols, supply chain assessments, and continuous assurance.",
      },
    ],
    benefits: [
      "Streamlined path to official certification with zero audit surprises",
      "Clear risk registers connecting technical debt to business outcomes",
      "Prevention of severe statutory penalties and reputation damage",
      "Confidence during enterprise client procurement evaluations",
    ],
    image: "/images/case-study-image-3.jpg",
    icon: "/images/icon-service-item-3.svg",
  },
  "ai-consulting": {
    title: "AI Consulting",
    subtitle: "Secure & Ethical Machine Intelligence",
    tagline: "Intelligent Enablement",
    description:
      "Advisory on ethical, secure, and impactful artificial intelligence adoption to transform enterprise workflows and drive competitive advantages.",
    overview: [
      "Artificial Intelligence offers extraordinary operational acceleration, but unprincipled adoption introduces critical IP leakage, bias, and security vulnerabilities.",
      "We provide strategic AI consulting that ensures your machine learning and LLM integrations are performant, privacy-preserving, and mathematically validated.",
    ],
    features: [
      {
        title: "AI Readiness & Strategy Roadmapping",
        desc: "Evaluating corporate data infrastructure, model feasibility, ROI projections, and change management requirements.",
      },
      {
        title: "Secure LLM & Model Deployment",
        desc: "Architecting private, self-hosted, or isolated enterprise AI deployments preventing proprietary data contamination.",
      },
      {
        title: "AI Red Teaming & Governance",
        desc: "Testing LLM implementations against prompt injection, jailbreaks, data exfiltration, and hallucinations.",
      },
    ],
    benefits: [
      "Validated business ROI on AI infrastructure investments",
      "Protection of confidential corporate data and trade secrets",
      "Compliant governance aligned with emerging global AI regulations",
      "Measurable acceleration in knowledge retrieval and decision support",
    ],
    image: "/images/case-study-image-4.jpg",
    icon: "/images/icon-service-item-4.svg",
  },
  "ai-automation-solutions": {
    title: "AI Automation Solutions",
    subtitle: "Intelligent Workflow Engineering",
    tagline: "Operational Acceleration",
    description:
      "Design and implementation of intelligent process automations that enhance operational velocity, eliminate bottlenecks, and ensure data integrity.",
    overview: [
      "Repetitive, manual business processes drain human potential and introduce operational delays. Our AI automation practice transforms complex multi-step workflows into resilient autonomous pipelines.",
      "From intelligent document processing to autonomous security triage, we engineer systems that operate continuously with precision.",
    ],
    features: [
      {
        title: "Autonomous Workflow Orchestration",
        desc: "Developing self-correcting automation pipelines linking ERPs, CRMs, document repositories, and communication hubs.",
      },
      {
        title: "Intelligent Data Extraction & Synthesis",
        desc: "Cognitive parsing of unstructured documents, contracts, invoices, and compliance filings with high fidelity.",
      },
      {
        title: "Automated Incident & Alert Triage",
        desc: "Machine-speed correlation of telemetry alerts, automated level-1 security investigation, and dynamic routing.",
      },
    ],
    benefits: [
      "Up to 80% reduction in workflow processing turnaround times",
      "Elimination of manual transcription and validation errors",
      "Scalable automation without proportional headcount expansion",
      "Full auditability and transparent logging of every execution",
    ],
    image: "/images/case-study-image-5.jpg",
    icon: "/images/icon-service-item-5.svg",
  },
  "digital-security-strategy": {
    title: "Digital Security Strategy",
    subtitle: "Cloud Transformation & Resilient Paradigms",
    tagline: "Resilient Architecture",
    description:
      "Roadmapping resilient security paradigms for cloud migrations, hybrid ecosystems, and next-generation enterprise digital transformations.",
    overview: [
      "Digital transformation without embedded cybersecurity creates brittle operations. We align strategic technology investments with long-term resilience.",
      "Our digital security advisory designs multi-year roadmaps that protect modern cloud, container, and hybrid environments while supporting aggressive business growth.",
    ],
    features: [
      {
        title: "Zero-Trust Architecture Migration",
        desc: "Transitioning legacy perimeter-based trusts into continuous identity-driven verification models.",
      },
      {
        title: "Cloud Security Posture Management",
        desc: "Continuous guardrails across AWS, Azure, GCP, and Kubernetes clusters enforcing policy-as-code.",
      },
      {
        title: "Executive & Board Cybersecurity Advisory",
        desc: "Translating technical risk into quantifiable financial metrics for executive boards and stakeholders.",
      },
    ],
    benefits: [
      "Unified security baseline across disparate cloud and legacy estates",
      "Future-proof foundation for SaaS and modern API architectures",
      "Optimized cyber insurance ratings and institutional credibility",
      "Predictable, prioritized security capital expenditures",
    ],
    image: "/images/case-study-image-6.jpg",
    icon: "/images/icon-service-item-6.svg",
  },
  "threat-defense": {
    title: "Adaptive Threat Defense",
    subtitle: "Proactive Protection & Monitoring",
    tagline: "Proactive Protection",
    description:
      "Multi-layered cybersecurity controls and continuous monitoring methodologies engineered to anticipate, detect, and neutralize emerging cyber threats.",
    overview: [
      "Contemporary threat actors employ automation and targeted campaigns. Adaptive Threat Defense establishes active telemetry, perimeter defense, and rapid threat neutralization.",
    ],
    features: [
      {
        title: "Perimeter & Endpoint Hardening",
        desc: "Hardening operating systems, browser policies, firewall configurations, and endpoint protection agents.",
      },
      {
        title: "Real-Time Threat Intelligence",
        desc: "Leveraging global intelligence feeds to identify adversary staging prior to initial compromise.",
      },
      {
        title: "Incident Response Preparedness",
        desc: "Standby escalation protocols, forensics capture, and rapid containment playbooks.",
      },
    ],
    benefits: [
      "Immediate mitigation of lateral movement attempts",
      "Maximized uptime and continuity for critical services",
      "Deep forensic visibility across enterprise telemetry",
    ],
    image: "/images/solution-threat-defense.jpg",
    icon: "/images/icon-service-item-1.svg",
  },
  "cloud-security": {
    title: "Cloud & Infrastructure Resilience",
    subtitle: "Secure Multi-Cloud Engineering",
    tagline: "Secure Transformation",
    description:
      "Hardening cloud infrastructures across AWS, Azure, and hybrid environments with zero-trust frameworks, least-privilege access, and automated guardrails.",
    overview: [
      "Cloud migrations demand security native to cloud-scale infrastructure. We implement zero-trust boundaries and automated configuration guardrails across distributed architectures.",
    ],
    features: [
      {
        title: "Zero-Trust Architecture Planning",
        desc: "Dynamic identity assertions, ephemeral credentials, and mutual TLS encryption.",
      },
      {
        title: "Cloud Configuration Auditing",
        desc: "Automated scans of storage buckets, security groups, IAM roles, and secret key lifecycles.",
      },
      {
        title: "Secure Workload Isolation",
        desc: "Container isolation, Kubernetes network policies, and egress traffic filtering.",
      },
    ],
    benefits: [
      "Zero accidental public exposures of cloud data stores",
      "Enforced compliance guardrails embedded directly into CI/CD pipelines",
      "Resilient, highly available disaster recovery topologies",
    ],
    image: "/images/solution-cloud-security.jpg",
    icon: "/images/icon-service-item-2.svg",
  },
  "ai-transformation": {
    title: "Enterprise AI Modernization",
    subtitle: "Safe, Compliant & Performant AI Integration",
    tagline: "Intelligent Enablement",
    description:
      "Enabling safe, compliant, and performant AI integration across enterprise operations, from model evaluation to secure data pipeline engineering.",
    overview: [
      "Artificial intelligence represents a transformational operational advantage, but enterprise adoption demands rigorous security boundaries, model governance, and resilient data engineering.",
      "AXIONYTE Consulting guides enterprises in safely deploying AI capabilities, mitigating algorithmic drift, securing proprietary IP, and automating mission-critical workflows.",
    ],
    features: [
      {
        title: "Secure AI Architecture Design",
        desc: "Designing sandboxed enterprise LLM architectures, zero-data-retention API endpoints, and private vector database pipelines.",
      },
      {
        title: "Workflow Automation Feasibility",
        desc: "Evaluating business workflows for autonomous AI agent orchestration, cost-benefit trade-offs, and reliability metrics.",
      },
      {
        title: "AI Risk Management & Governance",
        desc: "Establishing guardrails against prompt injection, data poisoning, model bias, and regulatory non-compliance.",
      },
    ],
    benefits: [
      "Accelerated adoption of generative and agentic AI without enterprise risk",
      "Protection of proprietary intellectual property and customer datasets",
      "Drastic reduction in manual overhead across complex operational workflows",
      "Full alignment with emerging EU AI Act, NIST AI RMF, and ISO 42001 standards",
    ],
    image: "/images/solution-ai-modernization.jpg",
    icon: "/images/icon-service-item-4.svg",
  },
  "grc-solutions": {
    title: "Governance, Risk & Compliance",
    subtitle: "Regulatory Confidence & Trust Frameworks",
    tagline: "Regulatory Confidence",
    description:
      "Bridging the gap between technological reality and statutory mandates, ensuring sustained alignment with ISO 27001, SOC 2, GDPR, and regional standards.",
    overview: [
      "Modern compliance requires continuous technical proof rather than annual check-box paperwork. AXIONYTE bridges executive governance and technical controls.",
      "We design automated compliance monitoring pipelines that continuously test configurations, audit vendor access, and remediate compliance drift in real time.",
    ],
    features: [
      {
        title: "Gap Analysis & Remediation",
        desc: "Rigorous technical audits against ISO 27001, SOC 2 Type II, HIPAA, PCI-DSS, and GDPR frameworks.",
      },
      {
        title: "Vendor Risk Management",
        desc: "Third-party vendor assessment protocols, API access scoping, and supply-chain risk scoring.",
      },
      {
        title: "Continuous Compliance Monitoring",
        desc: "Automated evidence collection, policy-as-code guardrails, and executive posture dashboards.",
      },
    ],
    benefits: [
      "Streamlined audit readiness reducing preparation cycles by up to 60%",
      "Institutional credibility with global enterprise clients and investors",
      "Immediate detection and auto-remediation of compliance drift",
      "Quantifiable risk reduction metrics for executive leadership and boards",
    ],
    image: "/images/solution-grc.jpg",
    icon: "/images/icon-service-item-3.svg",
  },
};

export async function generateStaticParams() {
  return Object.keys(ALL_SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = ALL_SERVICE_DETAILS[slug];
  if (!detail) {
    return {
      title: "Service Details | AXIONYTE Consulting",
    };
  }
  return {
    title: `${detail.title} | AXIONYTE Consulting`,
    description: detail.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = ALL_SERVICE_DETAILS[slug] || ALL_SERVICE_DETAILS["cybersecurity-consulting"];

  if (!detail) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title="Our"
        highlightedWord="Service"
        breadcrumbCurrent={detail.title}
      />

      <PartnersTicker />

      {/* Detail Content Section */}
      <div className="page-service-single" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row">
            {/* Sidebar with Navigation */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="page-single-sidebar">
                <div
                  className="page-category-list wow fadeInUp"
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    padding: "36px 30px",
                    border: "1.5px solid var(--divider-color)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                    marginBottom: "30px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      marginBottom: "20px",
                      color: "var(--primary-color, #1766A8)",
                    }}
                  >
                    Our Service Offerings
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {CORE_SERVICES.map((s) => {
                      const isCurrent = s.id === slug;
                      return (
                        <li
                          key={s.id}
                          style={{
                            marginBottom: "10px",
                            borderBottom: "1px solid rgba(0,0,0,0.05)",
                            paddingBottom: "10px",
                          }}
                        >
                          <Link
                            href={`/service/${s.id}`}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              color: isCurrent ? "var(--brand-blue, #438DD5)" : "var(--text-color, #252B36)",
                              fontWeight: isCurrent ? 700 : 500,
                              fontSize: "15px",
                              textDecoration: "none",
                            }}
                          >
                            <span>{s.title}</span>
                            <i
                              className="fa-solid fa-arrow-right"
                              style={{
                                fontSize: "12px",
                                color: isCurrent ? "var(--brand-blue, #438DD5)" : "#9ea4b5",
                              }}
                            ></i>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Consultation Sidebar Box */}
                <div
                  className="sidebar-cta-box wow fadeInUp"
                  data-wow-delay="0.25s"
                  style={{
                    background: "linear-gradient(145deg, #1766A8 0%, #064D3D 100%)",
                    borderRadius: "16px",
                    padding: "40px 30px",
                    color: "#ffffff",
                  }}
                >
                  <div className="sidebar-cta-content text-center">
                    <span
                      style={{
                        color: "#F2A326",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Connect Directly
                    </span>
                    <h3 style={{ color: "#ffffff", fontSize: "22px", margin: "14px 0" }}>
                      Speak with our Principal Consultant
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", lineHeight: "1.7" }}>
                      Direct advisory oversight for enterprise cybersecurity assessments and AI deployments.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="/contact"
                        className="btn-default"
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#1766A8",
                          fontWeight: 700,
                          padding: "12px 28px",
                          display: "inline-block",
                        }}
                      >
                        Talk with Our Expert
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-lg-8">
              <div className="service-single-content">
                {/* Hero Feature Image */}
                <div
                  className="service-feature-image mb-4 wow fadeInUp"
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <img
                    src={detail.image}
                    alt={detail.title}
                    style={{ width: "100%", height: "auto", maxHeight: "420px", objectFit: "cover" }}
                  />
                </div>

                <div className="service-entry-content">
                  <span
                    style={{
                      color: "var(--brand-blue, #438DD5)",
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {detail.tagline}
                  </span>
                  <h2
                    style={{
                      fontSize: "32px",
                      fontWeight: 700,
                      margin: "10px 0 20px",
                      color: "var(--primary-color, #1766A8)",
                    }}
                  >
                    {detail.title}
                  </h2>

                  {detail.overview.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.8",
                        color: "var(--text-color, #252B36)",
                        marginBottom: "16px",
                      }}
                    >
                      {para}
                    </p>
                  ))}

                  {/* Core Delivery Capabilities */}
                  <div className="service-features-grid mt-5">
                    <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "22px" }}>
                      Core Delivery Capabilities
                    </h3>
                    <div className="row g-4">
                      {detail.features.map((feat, fIdx) => (
                        <div className="col-md-12" key={fIdx}>
                          <div
                            style={{
                              background: "#ffffff",
                              borderRadius: "12px",
                              padding: "24px 28px",
                              border: "1.5px solid var(--divider-color)",
                              boxShadow: "0 6px 18px rgba(0,0,0,0.02)",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "var(--primary-color, #1766A8)",
                                marginBottom: "8px",
                              }}
                            >
                              <i
                                className="fa-solid fa-shield-halved me-2"
                                style={{ color: "var(--brand-green, #07865F)" }}
                              ></i>
                              {feat.title}
                            </h4>
                            <p style={{ margin: 0, color: "var(--text-secondary, #697386)", fontSize: "15px" }}>
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategic Business Benefits */}
                  <div className="service-benefits-box mt-5">
                    <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "20px" }}>
                      Strategic Business Benefits
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {detail.benefits.map((ben, bIdx) => (
                        <li
                          key={bIdx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            padding: "14px 18px",
                            background: "var(--secondary-color, #F5F8FC)",
                            borderRadius: "10px",
                            marginBottom: "10px",
                            fontSize: "15px",
                            fontWeight: 500,
                            color: "var(--text-color, #252B36)",
                          }}
                        >
                          <i
                            className="fa-solid fa-circle-check"
                            style={{ color: "var(--brand-green, #07865F)", fontSize: "18px" }}
                          ></i>
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Card */}
                  <div
                    className="service-cta-banner mt-5 p-4 p-md-5 text-center"
                    style={{
                      background: "linear-gradient(145deg, #f0f6fc 0%, #ffffff 100%)",
                      borderRadius: "16px",
                      border: "1.5px solid rgba(67, 141, 213, 0.3)",
                    }}
                  >
                    <h4 style={{ fontSize: "22px", fontWeight: 700, color: "#1766A8", marginBottom: "12px" }}>
                      Ready to Fortify Your Enterprise?
                    </h4>
                    <p style={{ color: "#697386", maxWidth: "540px", margin: "0 auto 24px" }}>
                      Schedule an introductory security consultation to discuss your operational context and roadmap.
                    </p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                      <Link href="/contact" className="btn-default">
                        Talk with Our Expert
                      </Link>
                      <a href={COMPANY.phoneLink} className="btn-default btn-highlighted" style={{ color: "#1766A8", borderColor: "#1766A8" }}>
                        Call {COMPANY.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
