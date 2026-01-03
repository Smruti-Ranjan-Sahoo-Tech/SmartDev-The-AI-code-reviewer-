import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useFirebaseAuthStore } from "../store/useFirebaseAuthStore";

const PublicRoute = () => {
  const { isLoggedIn } = useFirebaseAuthStore();
  const location = useLocation();

  const authPages = ["/login", "/register", "/forgot-password"];

  if (isLoggedIn && authPages.includes(location.pathname)) {
    return <Navigate to="/code-review" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
