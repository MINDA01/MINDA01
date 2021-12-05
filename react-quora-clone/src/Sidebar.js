import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
    </div>
  );
}

export default Sidebar;
