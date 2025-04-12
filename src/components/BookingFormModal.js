// src/components/BookingFormModal.js
import React, { useState } from 'react';
import './BookingFormModal.css';

const BookingFormModal = ({ carName, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', { ...formData, carName });
    alert(`Booking submitted for ${carName}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Booking Enquiry for {carName}</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" required onChange={handleChange} />
          <input name="contact" placeholder="Contact Number" required onChange={handleChange} />
          <input name="date" type="date" required onChange={handleChange} />
          <button type="submit">Submit</button>
          <button type="button" className="close-btn" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default BookingFormModal;
