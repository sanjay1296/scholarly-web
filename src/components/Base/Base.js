import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Register from "../Register";
import School from "../School";

function Base() {
  return (
    <Navigation>
      <Routes>
        <Route index element={<Navigate to="./dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="school/*" element={<School />} />
      </Routes>
    </Navigation>
  );
}

export default function BaseRenderer() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Base />} />
    </Routes>
  );
}
