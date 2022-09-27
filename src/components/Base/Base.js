import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Profile from "../Users/Profile";
import Register from "../Register";
import School from "../School";

function Base() {
  return (
    <Navigation>
      <Routes>
        <Route index element={<Navigate to="./dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard/school/*" element={<School />} />
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
