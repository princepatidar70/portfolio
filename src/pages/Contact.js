import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-Up Data:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <h1  id="contact" className="contact-head">Contact</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="name"
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
            type="message"
            name="message"
            className="input"
            placeholder="message.."
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
    </>
  );
};

export default Contact;
