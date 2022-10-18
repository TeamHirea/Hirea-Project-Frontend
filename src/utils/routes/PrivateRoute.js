import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
