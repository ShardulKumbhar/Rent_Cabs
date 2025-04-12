// src/pages/Home.js
import React from "react";
import "./Home.css"; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">
          Rent Your Dream Car <br /> Anytime, Anywhere
        </h1>
        <p className="hero-description">
          Choose from a wide range of well-maintained cars at unbeatable prices.
          Hassle-free booking. 24x7 support. Trusted by thousands.
        </p>
        <button className="book-now-button">
          Book Now <span className="arrow-icon">→</span>
        </button>
      </div>

      {/* Feature Highlights */}
      <div className="feature-highlights">
        <div className="feature-card">
          <h3 className="feature-title">Wide Car Selection</h3>
          <p className="feature-description">
            From hatchbacks to luxury sedans and SUVs – we have it all.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Affordable Pricing</h3>
          <p className="feature-description">
            No hidden fees. Transparent pricing for daily, hourly, or long
            trips.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">24x7 Support</h3>
          <p className="feature-description">
            Round-the-clock assistance so you're never stuck on the road.
          </p>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="promo-banner">
        <h2 className="promo-title">Get 10% Off on First Booking!</h2>
        <p className="promo-description">
          Use code <strong>RIDE10</strong> at checkout
        </p>
        <button className="start-booking-button">Start Booking</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} RideNow Rentals. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
