import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const useAuth = false; // Replace with actual authentication logic

  if (!useAuth) {
    return <Navigate to="/login" replace />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
