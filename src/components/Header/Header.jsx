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
            <NavLink to="/" end style={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cars" style={{ textDecoration: "none" }}>Cars</NavLink>
          </li>
          {/* <li><NavLink to="/bikes">Bikes</NavLink></li> */}
          <li>
            <NavLink to="/services" style={{ textDecoration: "none" }}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={{ textDecoration: "none" }}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
