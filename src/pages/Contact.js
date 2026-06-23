import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_82yatfk",
        "template_7qi608b",
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        },
        "-kzMlCj3vqPa9U559"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.text);
          setSuccessMessage("Message sent successfully!");
          setIsSending(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setSuccessMessage("Failed to send the message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="container py-5" id="contact">
      <div className="text-center mb-5">
        <h5 className="text-uppercase fw-bold mb-2" style={{ color: "var(--primary)", letterSpacing: "1px", fontSize: "0.85rem" }}>
          GET IN TOUCH
        </h5>
        <h1 className="fw-bold display-5 mb-3">Contact Me</h1>
        <p className="text-muted section-subtitle mx-auto">
          Feel free to reach out for collaborations, project inquiries, or just to say hi!
        </p>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8 col-lg-6">
          <div className="contact-card glass-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group-custom">
                <input
                  type="text"
                  name="name"
                  className="form-control-custom"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />
              </div>
              <div className="form-group-custom">
                <input
                  type="email"
                  name="email"
                  className="form-control-custom"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />
              </div>
              <div className="form-group-custom">
                <textarea
                  name="message"
                  className="form-control-custom"
                  placeholder="Your Message..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                ></textarea>
              </div>
              <button
                className="btn-primary-glow w-100 justify-content-center"
                type="submit"
                disabled={isSending}
                style={{ height: "50px" }}
              >
                {isSending ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ms-1">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
            {successMessage && (
              <div className={`text-center mt-3 p-2 rounded small ${successMessage.includes("Failed") ? "text-danger" : "text-success"}`} style={{ background: "rgba(255,255,255,0.03)" }}>
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
