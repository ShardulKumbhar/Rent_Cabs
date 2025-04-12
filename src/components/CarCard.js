// src/components/CarCard.js
import React from 'react';

const CarCard = ({ image, name, price, onEnquire }) => {
  return (
    <div className="car-card">
      <img src={image} alt={name} className="car-image" />
      <div className="car-info">
        <h3>{name}</h3>
        <p>Starting from ₹{price}/day</p>
        <button className="enquire-button" onClick={() => onEnquire(name)}>
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
