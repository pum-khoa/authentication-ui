import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  if (token !== 'chungtalaluquyotanrungsauotannuicao') {
    return <Navigate to={'/sign-in'} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
