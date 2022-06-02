import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalData } from '../GlobalDataProvider/GlobalDataProvider';
import './Navbar.css';

const Navbar = () => {
  const ContextData = useGlobalData();
  return (
    <nav className="nav-wrapper">
      <Link to={'/dashboard'} className="nav-link">
        Dashboard
      </Link>
      {ContextData.role === 'admin' && (
        <Link to={'/setting'} className="nav-link">
          Setting
        </Link>
      )}
      <Link
        to={'/sign-in'}
        className="nav-link nav-logout"
        onClick={() => {
          localStorage.removeItem('token');
          ContextData.clearUser();
        }}
      >
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
