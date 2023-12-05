import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderAdmin = () => {
  const userName = useSelector((state) => state.detailReducer.name);
  localStorage.setItem("username", userName);
  const savedUserName = localStorage.getItem("userName");
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow cusSticky py-0">
        <Link to="/admin" className="navbar-brand" data-abc="true">
          <img src="/images/EroomRent.png" className="img-fluid" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse mx-auto" id="navbarColor02">
          <ul className="navbar-nav mx-auto d-sm-flex align-items-center">
            <li className="nav-item mx-3">
              <Link
                to="/admin/booking"
                className="nav-link btn btn-outline-dark hover"
                data-abc="true"
              >
                <i className="far fa-file-alt"></i>
                <small className="fos-14"> My Bookings</small>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                to="/admin/postyourproperty"
                className="btn bg-green text-light"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Owners! Click here if you wish to list your apartment for rent"
              >
                For Property Owners
              </Link>
            </li>
            <li className="nav-item dropdown mx-2">
              <div className="d-sm-flex align-items-center">
                <img
                  src="/images/person.svg"
                  alt="Person"
                  className="border rounded-circle"
                  width="30px"
                  height="30px"
                />
                <a
                  className="nav-link dropdown-toggle py-0 px-2 border-right"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {savedUserName}
                </a>
              </div>
              <ul
                className="dropdown-menu text-left fos-14 px-3"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    to="/admin/profile"
                    className="dropdown-item border-bottom py-2"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/chat"
                    className="dropdown-item border-bottom py-2"
                  >
                    My Chats
                  </Link>
                </li>
                <li className="dropdown-submenu border-bottom py-2">
                  <a className="dropdown-item dropdown-toggle" href="#">
                    My Residential Plans
                  </a>
                  <ul className="dropdown-menu fos-14">
                    <li>
                      <Link
                        to="/admin/tenantplans"
                        className="dropdown-item py-2"
                      >
                        For Tenants
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/ownerplans"
                        className="dropdown-item py-2"
                      >
                        For Owners
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="dropdown-item border-bottom py-2"
                    to="/admin/dashboard"
                  >
                    My Dashboard
                  </Link>
                </li>
                <li className="dropdown-submenu border-bottom py-2">
                  <a className="dropdown-item dropdown-toggle" href="#">
                    My Listings
                  </a>
                  <ul className="dropdown-menu fos-14">
                    <li>
                      <Link to="admin/listing" className="dropdown-item py-2">
                        My Properties
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/interestshown"
                        className="dropdown-item py-2"
                      >
                        Interest Shown
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/admin/rentalagreeement"
                    className="dropdown-item border-bottom py-2"
                  >
                    My Rental Agreements
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="dropdown-item py-2"
                    onClick={() => {
                      localStorage.removeItem("username");
                      localStorage.removeItem("email");
                    }}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item border-right" style={{ cursor: "pointer" }}>
              <span className="pr-2 py-0 my-0">
                <i className="far fa-bell fos-18"></i>
              </span>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                <i className="fas fa-bars"></i>
                <small className="text-dark fos-14 ml-1">Menu</small>
              </a>
              <div className="dropdown-menu p-3" id="h-100">
                <Link
                  to="/admin/postyourproperty"
                  className="dropdown-item border-bottom border-secondary py-2"
                >
                  Post Your Property
                </Link>
                <Link
                  to="/admin/rentalagreement"
                  className="dropdown-item border-bottom border-secondary py-2"
                >
                  Rent Agreement
                </Link>
                <Link
                  to="/admin"
                  className="dropdown-item border-bottom border-secondary py-2"
                >
                  Packers &amp; Movers
                </Link>
                <Link
                  to="/admin"
                  className="dropdown-item border-bottom border-secondary py-2"
                >
                  Painting &amp; Cleaning
                </Link>
                <Link
                  to="/admin"
                  className="dropdown-item border-bottom border-secondary py-2"
                >
                  Refer &amp; Earn
                </Link>
                <Link
                  to="/admin/rentreceipt"
                  className="dropdown-item border-bottom border-secondary py-2"
                >
                  Rent Receipts
                </Link>
                <Link
                  to="/admin/tenanplans"
                  className="dropdown-item border-bottom border-secondary py-2"
                >
                  Tenant Plans
                </Link>
                <Link
                  to="/blog"
                  className="dropdown-item border-bottom border-secondary py-2"
                >
                  Blog
                </Link>
                <Link
                  to="/admin/contact"
                  className="dropdown-item border-secondary pt-2"
                >
                  Contact Us
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
