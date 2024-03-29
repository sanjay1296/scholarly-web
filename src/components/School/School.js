import React from "react";

import { Routes, Route } from "react-router-dom";

import List from "./List";
import Register from "./Register";

function School() {
  return (
    <Routes>
      <Route index element={<List />} />
      <Route path="register" element={<Register />} />
      {/* <Route path="view/schoolId" element={<View />} /> */}
    </Routes>
  );
}

export default School;
