// src/pages/CarsPage.js
import React, { useState } from 'react';
import CarCard from '../components/Cards/CarCard';
import BookingFormModal from './BookingFormModal';
import './CarsPage.css';

const CarsPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    {
      name: 'BALENO',
      type: 'manual',
      price: 1299,
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80',
      category: 'Hatchback',
    },
    {
      name: 'ERTIGA',
      type: 'manual',
      price: 2999,
      image: 'https://imgd.aeplcdn.com/1056x594/n/c6es93a_1572125.jpg?q=80',
      category: 'SUV',
    },
    {
      name: 'SWIFT',
      type: 'manual',
      price: 999,
      image: 'https://5.imimg.com/data5/AI/DQ/AT/GLADMIN-5859621/solidredn-500x500-500x500.png',
      category: 'Hatchback',
    },
    {
      name: 'i20',
      type: 'manual',
      price: 1499,
      image: 'https://trident-group.s3.ap-south-1.amazonaws.com/hyundai/models/colors/1698928859.png',
      category: 'Hatchback',
    },
    {
      name: 'Innova Crysta',
      type: 'manual',
      price: 3000,
      image: 'https://i.pinimg.com/736x/d0/9d/04/d09d04451a96408e58b72bb111ff4c26.jpg',
      category: 'SUV',
    },
    {
      name: 'Innova Hycros',
      type: 'manual',
      price: 3500,
      image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80',
      category: 'SUV',
    },
    {
      name: 'Kia Carens',
      type: 'manual',
      price: 2500,
      image: 'https://vstcentral-kia.in/assert/images/carexteriorimages/930x620/Kia/Carens/8424/1639715612993/front-left-side-47.jpg',
      category: 'SUV',
    },
    {
      name: 'IGNIS',
      type: 'manual',
      price: 1099,
      image: 'https://5.imimg.com/data5/SW/SX/KZ/GLADMIN-80604161/img-1.png',
      category: 'Hatchback',
    },
  ];

  const hatchbacks = cars.filter((car) => car.category === 'Hatchback');
  const suvs = cars.filter((car) => car.category === 'SUV');

  return (
    <div className="cars-page">
      <p>
        Select from a wide range of well-maintained cars. We provide the best car rental
        services in Goa. Book from our website or we also accept bookings via WhatsApp.
      </p>

      <h2>Hatchbacks</h2>
      <div className="car-card-container">
        {hatchbacks.map((car, index) => (
          <CarCard
            key={index}
            name={car.name}
            type={car.type}
            price={car.price}
            image={car.image}
            onEnquire={() => setSelectedCar(car)}  // Pass the entire car object to selectedCar
          />
        ))}
      </div>

      <h2>SUVs</h2>
      <div className="car-card-container">
        {suvs.map((car, index) => (
          <CarCard
            key={index}
            name={car.name}
            type={car.type}
            price={car.price}
            image={car.image}
            onEnquire={() => setSelectedCar(car)}  // Pass the entire car object to selectedCar
          />
        ))}
      </div>

      {selectedCar && (
        <BookingFormModal
          vehicleName={selectedCar.name}  // Pass vehicle name
          vehiclePrice={selectedCar.price}  // Pass vehicle price
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
};

export default CarsPage;
