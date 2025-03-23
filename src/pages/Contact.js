import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ln0xj3o",
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
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setSuccessMessage("");
          }, 2000);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setSuccessMessage("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="container py-5" id="contact">
      <h1 className="text-center mb-4">Contact</h1>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="p-4 rounded shadow">
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                className="form-control"
                placeholder="Message..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Submit
            </button>
          </form>
          {successMessage && <p className="text-center text-success mt-3">{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
