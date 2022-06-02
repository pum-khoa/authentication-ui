import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <Link to={'/dashboard'} className="nav-link">
        Dashboard
      </Link>
      <Link to={'/setting'} className="nav-link">
        Setting
      </Link>
      <Link to={''} className="nav-link nav-logout">
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
