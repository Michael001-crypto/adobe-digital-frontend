// src/components/auth/RequireAdmin.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "../../context/AuthContext";

const RequireAdmin = ({ children }) => {
  const { user } = useUser();

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAdmin;
