import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../kotex/HookContext";

export function AdminRoute({ children }) {
  const { role, user } = useAuth();

  return !user ? (
    <Navigate to="/login" />
  ) : role === "admin" ? (
    children
  ) : (
    <Navigate to="/" />
  );
}

export function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
}
