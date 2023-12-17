import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import "./style.css";

const LayoutAdmin = () => {
  return (
    <div id="container">
      <HeaderAdmin />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
