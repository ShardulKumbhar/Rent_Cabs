// src/pages/CarsPage.js
import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import BookingFormModal from '../pages/BookingFormModal';
import './CarsPage.css';

const CarsPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    {
        name: 'BALENO',
        price: 1299,
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80', // Replace with actual image links
      },
      {
        name: 'ERTIGA',
        price: 2999,
        image: 'https://imgd.aeplcdn.com/1056x594/n/c6es93a_1572125.jpg?q=80',
      },
      {
        name: 'SWIFT',
        price: 999,
        image: 'https://5.imimg.com/data5/AI/DQ/AT/GLADMIN-5859621/solidredn-500x500-500x500.png',
      },
  ];

  return (
    <div className="cars-page">
      <h2>Best Rental Cars in Goa</h2>
      <p>
        Select from wide ranges of well maintained cars. We provide best car rental
        services in entire Goa. Book from our website or we also accept booking from WhatsApp.
      </p>
      <div className="car-card-container">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            name={car.name}
            price={car.price}
            image={car.image}
            onEnquire={(carName) => setSelectedCar(carName)}
          />
        ))}
      </div>

      {selectedCar && (
        <BookingFormModal
          carName={selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
};

export default CarsPage;
