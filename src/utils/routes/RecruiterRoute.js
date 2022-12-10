import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();
  const role = localStorage.getItem("role");

  // if (isAuthenticated) {
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // }

  if (isAuthenticated && role !== "recruiter") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
