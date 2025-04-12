import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="logo"> SS</div> */}

      <div className="logo">
        {" "}
        Goa <span className="green">Car</span>
        <span className="blue"> Rentals </span>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cars">Cars</NavLink>
          </li>
          {/* <li><NavLink to="/bikes">Bikes</NavLink></li> */}
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
