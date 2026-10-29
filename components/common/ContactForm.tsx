"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fname || !formData.email || !formData.phone) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 6000);
    }, 1000);
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.2s">
      <div className="row">
        <div className="form-group col-md-6 mb-4">
          <label className="form-label">First Name *</label>
          <input
            type="text"
            name="fname"
            className="form-control"
            id="fname"
            placeholder="Your First Name"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-md-6 mb-4">
          <label className="form-label">Last Name *</label>
          <input
            type="text"
            name="lname"
            className="form-control"
            id="lname"
            placeholder="Your Last Name"
            value={formData.lname}
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
            id="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-md-6 mb-4">
          <label className="form-label">Phone Number *</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            id="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-md-12 mb-5">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            rows={5}
            placeholder="Any Message..."
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
                {status === "submitting" ? "Sending..." : "Submit Form"}
              </span>
            </button>
            {status === "success" && (
              <div
                className="h3"
                style={{
                  color: "#00f0ff",
                  marginTop: "16px",
                  fontSize: "18px",
                }}
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === "error" && (
              <div
                className="h3"
                style={{
                  color: "#ff4d4f",
                  marginTop: "16px",
                  fontSize: "18px",
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
