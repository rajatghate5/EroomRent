import React from 'react'
import HeaderBroker from './HeaderBroker'
import FooterBroker from './FooterBroker'
import { Outlet } from 'react-router-dom'

const LayoutBroker = () => {
  return (
    <div id="container">
      <HeaderBroker/>
      <div className="container-fluid mt-5 p-0">
        <Outlet />
        <FooterBroker />
      </div>
    </div>
  )
}

export default LayoutBroker
