import { Navigate } from "react-router-dom"; // Import Navigate
import { Children } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => { // Accept children as a prop
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children; // Render the passed children
};

export default ProtectedRoute;
