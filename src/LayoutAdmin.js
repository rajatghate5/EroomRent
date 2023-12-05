import { Outlet } from "react-router-dom"
import HeaderAdmin from './HeaderAdmin';
import FooterAdmin from './FooterAdmin';
import './style.css'

const LayoutAdmin = () => {  
  return (
    <div id="container">
      <HeaderAdmin />
      <div className="container-fluid mt-5 p-0">
        <Outlet />
        <FooterAdmin />
      </div>
    </div>
  )
}

export default LayoutAdmin
