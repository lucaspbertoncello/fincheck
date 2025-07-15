import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate?: boolean;
}

export function AuthGuard({ isPrivate = true }: AuthGuardProps) {
  const isAuthenticated = false; // replace with auth logic

  if (!isAuthenticated && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
