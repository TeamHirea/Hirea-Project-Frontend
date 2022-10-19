import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isAuthenticated = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  if (isAuthenticated && role !== "jobseeker") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
