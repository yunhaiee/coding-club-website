import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">CodingClub</span>
          <span className="logo-accent">.dev</span>
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <div className="navbar-dropdown">
            <span className={`navbar-link dropdown-toggle ${isActive('/activities-2024-2025') || isActive('/activities-2025-2026') ? 'active' : ''}`}>
              Activities
            </span>
            <div className="dropdown-menu">
              <Link 
                to="/activities-2024-2025" 
                className="dropdown-item"
                onClick={closeMenu}
              >
                2024-2025
              </Link>
              <Link 
                to="/activities-2025-2026" 
                className="dropdown-item"
                onClick={closeMenu}
              >
                2025-2026
              </Link>
            </div>
          </div>
          <Link 
            to="/members" 
            className={`navbar-link ${isActive('/members') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Members
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
