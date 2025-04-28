import React from 'react';
import '../styles/Header.css';
import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa';

const Header = () => (
  <div className="header">
    <h1> Dashboard</h1>
    
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Serch inventory..." />
    </div>

    <div className="header-icons">
      <FaBell className="notification-icon" />
      <FaUserCircle className="user-icon" />
    </div>
  </div>
);

export default Header;
