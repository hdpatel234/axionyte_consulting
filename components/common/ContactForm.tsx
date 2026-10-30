"use client";

import { useState } from "react";
import { CORE_SERVICES } from "@/lib/company-data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceInterested: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill in your name, email, and phone number.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        serviceInterested: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 7000);
    }, 800);
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.2s">
      <div className="row">
        <div className="form-group col-md-6 mb-4">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-md-6 mb-4">
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-md-6 mb-4">
          <label className="form-label">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="+91 00000 00000"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-md-6 mb-4">
          <label className="form-label">Company Name (Optional)</label>
          <input
            type="text"
            name="companyName"
            className="form-control"
            placeholder="Your Organization"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group col-md-12 mb-4">
          <label className="form-label">Service Interested In (Optional)</label>
          <select
            name="serviceInterested"
            className="form-control"
            value={formData.serviceInterested}
            onChange={handleChange}
            style={{ backgroundColor: "#050914", color: "#9ea4b5", border: "1px solid #1f2937" }}
          >
            <option value="">Select a Service or Topic</option>
            {CORE_SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="General Inquiry">General Consultation Inquiry</option>
          </select>
        </div>

        <div className="form-group col-md-12 mb-5">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows={5}
            placeholder="Briefly describe your requirements or inquiry..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-lg-12">
          <div className="contact-form-btn">
            <button
              type="submit"
              className="btn-default"
              disabled={status === "submitting"}
            >
              <span>
                {status === "submitting" ? "Sending Request..." : "Submit Consultation Request"}
              </span>
            </button>
            {status === "success" && (
              <div
                className="h4 mt-3"
                style={{
                  color: "#07865F",
                  fontSize: "16px",
                  lineHeight: "1.5",
                  fontWeight: 600,
                }}
              >
                Thank you! Your inquiry has been received. Our team will contact you shortly.
              </div>
            )}
            {status === "error" && (
              <div
                className="h4 mt-3"
                style={{
                  color: "#ff4d4f",
                  fontSize: "15px",
                }}
              >
                {errorMsg}
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
