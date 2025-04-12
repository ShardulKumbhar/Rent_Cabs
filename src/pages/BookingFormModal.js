import React, { useState, useEffect } from "react";
import "./BookingFormModal.css";
import { FaTimes, FaCar } from "react-icons/fa";

const BookingFormModal = ({ vehicleName = "", onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: "",
  });

  const [daysBooked, setDaysBooked] = useState(0); // New state for number of days

  useEffect(() => {
    if (formData.pickupDate && formData.dropoffDate) {
      const pickup = new Date(formData.pickupDate);
      const dropoff = new Date(formData.dropoffDate);

      const timeDifference = dropoff - pickup;
      const dayDifference = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
      setDaysBooked(dayDifference);
    }
  }, [formData.pickupDate, formData.dropoffDate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      fullName,
      phone,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      pickupTime,
      dropoffDate,
      dropoffTime,
    } = formData;

    const message = `
*Booking Enquiry* 🚗
Name: ${fullName}
Phone: ${phone}
Vehicle: ${vehicleName}
Pick-up Location: ${pickupLocation}
Drop-off Location: ${dropoffLocation}
Pick-up: ${pickupDate} at ${pickupTime}
Drop-off: ${dropoffDate} at ${dropoffTime}
Number of Days: ${daysBooked} day(s)
`;

    const whatsappNumber = "7709125030"; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Enquiry</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="vehicle-info">
            <FaCar />
            Vehicle Name: <strong>{vehicleName}</strong>
          </div>

          <div className="form-group">
            <label>Pick-up Location</label>
            <input
              type="text"
              name="pickupLocation"
              placeholder="e.g., Airport"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Drop-off Location</label>
            <input
              type="text"
              name="dropoffLocation"
              placeholder="e.g., Railway Station"
              value={formData.dropoffLocation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-col">
              <label>Pick-up Date</label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-col">
              <label>Pick-up Time</label>
              <input
                type="time"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label>Drop-off Date</label>
              <input
                type="date"
                name="dropoffDate"
                value={formData.dropoffDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-col">
              <label>Drop-off Time</label>
              <input
                type="time"
                name="dropoffTime"
                value={formData.dropoffTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Days Booked</label>
            <input
              type="text"
              value={daysBooked}
              readOnly
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingFormModal;
