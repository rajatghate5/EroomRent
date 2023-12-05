import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div id="container">
      <Header />
      <div className="container-fluid mt-5 p-0">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
