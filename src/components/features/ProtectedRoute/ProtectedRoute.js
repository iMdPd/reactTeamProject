import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ user, redirectPath = '/login', children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  user: PropTypes.shape({ email: PropTypes.string, password: PropTypes.string }),
  redirectPath: PropTypes.func,
  children: PropTypes.node,
};
