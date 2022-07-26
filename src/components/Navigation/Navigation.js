import React from "react";
import TopNav from "./TopNav";

function Navigation({ children }) {
  return (
    <div>
      <TopNav />

      <div>{children}</div>
    </div>
  );
}

export default Navigation;
