import { Navigate, Outlet } from "react-router-dom";
import { useFirebaseAuthStore } from "../store/useFirebaseAuthStore";

const ProtectedRoute = () => {
  const { isLoggedIn } = useFirebaseAuthStore();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
