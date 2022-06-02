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
      <Link
        to={'/sign-in'}
        className="nav-link nav-logout"
        onClick={() => localStorage.removeItem('token')}
      >
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
