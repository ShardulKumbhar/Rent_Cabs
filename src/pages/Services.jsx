// src/components/OurServices.js
import React from 'react';
import './OurServices.css';

const services = [
  {
    title: 'Daily & Hourly Car Rentals',
    description: 'Flexible rental options with competitive pricing for daily or hourly usage — ideal for city rides, errands, or business meetings.',
  },
  {
    title: 'Outstation Rentals',
    description: 'Comfortable and well-maintained cars for long-distance travel and weekend getaways with transparent pricing and zero hidden charges.',
  },
  {
    title: 'Airport Pickup & Drop',
    description: 'On-time, hassle-free airport transfers with professional drivers ensuring smooth and safe journeys.',
  },
  {
    title: 'Self-Drive Cars',
    description: 'Enjoy the freedom of driving on your own with our wide selection of sanitized, self-drive cars available on flexible plans.',
  },
  {
    title: 'Wedding & Event Rentals',
    description: 'Premium cars for weddings, corporate events, or special occasions — chauffeur-driven and immaculately maintained.',
  },
  {
    title: 'Corporate Car Leasing',
    description: 'Custom plans for businesses looking for employee transportation, executive travel, and long-term leasing solutions.',
  },
];

const OurServices = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <p className="intro-text">
        We provide reliable, comfortable, and affordable car rental services for every occasion and need.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
