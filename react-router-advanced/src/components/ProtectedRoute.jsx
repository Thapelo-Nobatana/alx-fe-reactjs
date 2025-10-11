import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Replace with actual authentication logic

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
