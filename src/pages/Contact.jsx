// src/pages/Contact.js
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = () => {
    const { name, phone, message } = form;
    const fullMessage = `Hi, my name is ${name}. Contact: ${phone}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/7709125030?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-wrapper">
      {/* Left panel */}
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p>
          Feel free to reach out for booking or general inquiries. We're happy
          to help!
        </p>
        <div className="contact-info">
          <p>📧 ridenow@rentals.com</p>
          <p>📞 +91 77091 25030</p>
        </div>
        <iframe
          src="https://maps.google.com/maps?q=Akshay+Taxi+%26+Car+Bike+Rental+Service&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>

      {/* <div style="position: relative;"><div style="position: relative; padding-bottom: 75%; height: 0; overflow: hidden;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" loading="lazy" allowfullscreen src="https://maps.google.com/maps?q=Akshay+Taxi+%26+Car+Bike+Rental+Service&output=embed"></iframe></div><a href="http://aiyoutubetitlegenerator.com/" rel="noopener" target="_blank" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">aiyoutubetitlegenerator.com</a></div> */}

      {/* Right panel - Form */}
      <div className="contact-right">
        <h3>
          We'd love to hear from you!
          <br />
          Let’s get in touch
        </h3>
        <form
          className="styled-contact-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-row">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={handleWhatsAppRedirect}>
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
