import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

function Navigation({ children }) {
  return (
    <div>
      <TopNav />
      {/* <SideNav /> */}
      <div>{children}</div>
    </div>
  );
}

export default Navigation;
