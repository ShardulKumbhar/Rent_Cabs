import React, { useState } from 'react';
import './CarCard.css'; // Optional if you're using custom styles

const CarCard = ({ image, name,type, price, onEnquire }) => {
  return (
    <div className="car-card">
      <img src={image} alt={name} className="car-image" />
      <div className="car-info">
        <h3>{name}</h3>
        <p><span className="car-type">{type}</span></p>
        <p>Starting from ₹{price}/day</p>
        <button className="enquire-button" onClick={() => onEnquire(name)}>
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;