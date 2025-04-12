// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = () => {
    const { name, phone, message } = form;
    const fullMessage = `Hi, my name is ${name}. Contact: ${phone}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/7709125030?text=${encodedMessage}`; // Replace with your number
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Feel free to reach out for booking or general inquiries. We're happy to help!</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
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
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
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
  );
};

export default Contact;
