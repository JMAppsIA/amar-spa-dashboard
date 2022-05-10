import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
function PrivateRouter() {
  const token = window.localStorage.getItem("userInfo");
  return token ? <Dashboard /> : <Navigate to={`/login`} />;
}

export default PrivateRouter;
