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
    <>
      <h1 id="contact" className="contact-head">Contact</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <textarea
            name="message"
            className="input"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <br />
          <button className="s-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
        {successMessage && <p style={{display: 'flex', justifyContent:'center', color:'green'}}>{successMessage}</p>}
    </>
  );
};

export default Contact;
