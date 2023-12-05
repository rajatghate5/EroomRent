import React from "react";
import HeaderOwner from "./HeaderOwner";
import { Outlet } from "react-router-dom";
import FooterOwner from "./FooterOwner";

const LayoutOwner = () => {
  return (
    <div id="container">
      <HeaderOwner />
      <div className="container-fluid mt-5 p-0">
        <Outlet />
        <FooterOwner />
      </div>
    </div>
  );
};

export default LayoutOwner;
