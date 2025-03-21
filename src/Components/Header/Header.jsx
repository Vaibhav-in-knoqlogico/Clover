import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <img src="../../src/assets/cloverlogocolor.png" alt="Logo" />
        </NavLink>
        <nav
          className={`nav-open ${isNavOpen ? "nav-open-active" : "nav-open-hidden"}`}
        >
          <div className="navbar-close-btn" onClick={toggleNav}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <NavLink
            to="/whoweare"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <i className="fa-solid fa-people-group"></i>
            <span className="inner-text">Who We Are</span>
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <i className="fa-solid fa-hands-holding-circle"></i>
            <span className="inner-text">Resources</span>
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <i className="fa-solid fa-briefcase"></i>
            <span className="inner-text">Careers</span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <i className="fa-solid fa-phone"></i>
            <span className="inner-text">Connect</span>
          </NavLink>
        </nav>
        <div className="elipses-for-mobile" onClick={toggleNav}>
          <div className="elipse"></div>
          <div className="elipse"></div>
          <div className="elipse"></div>
          <div className="elipse"></div>
          <div className="elipse"></div>
          <div className="elipse"></div>
          <div className="elipse"></div>
          <div className="elipse"></div>
          <div className="elipse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
