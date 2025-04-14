import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = (): boolean => {
    return !!localStorage.getItem("token");
};

const PrivateRoute: React.FC = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
