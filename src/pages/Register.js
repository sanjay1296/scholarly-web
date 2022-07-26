import React, { useCallback, useEffect, useState } from "react";
import Register from "../components/Register";
export default function addUser() {
  return (
    <div>
      <Register addUser={addUser} />
    </div>
  );
}
