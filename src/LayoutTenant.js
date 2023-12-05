import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderTenant from './HeaderTenant'
import FooterTenant from './FooterTenant'

const LayoutTenant = () => {
  return (
    <div id="container">
      <HeaderTenant />
      <div className="container-fluid mt-5 p-0">
        <Outlet />
        <FooterTenant />
      </div>
    </div>
  )
}


export default LayoutTenant
