import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow cusSticky py-0">
        <Link to="/" className="navbar-brand" data-abc="true">
          <img src="./images/EroomRent.png" alt="" className="img-fluid" />
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-3">
              <Link to="/login"
                className="nav-link btn btn-outline-dark hover d-flex align-items-center justify-content-center"                
                style={{ height: 38, gap: "0.4rem" }}
              >
                <i className="far fa-file-alt"></i>
                <small className="fos-14"> My Bookings</small>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                to="/postyourproperty"
                className="btn bg-green text-light"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Owners! Click here if you wish to list your apartment for rent"
              >
                For Property Owners
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link
                to="/signup"
                className="text-dark border-right border-muted pr-2"
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/login" className="text-dark">
                Login
              </Link>
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
                  className="dropdown-item border-bottom border-secondary py-2"
                  to="/postyourproperty"
                >
                  Post Your Property
                </Link>
                <Link
                  className="dropdown-item border-bottom border-secondary py-2"
                  to="/rentalagreement"
                >
                  Rent Agreement
                </Link>
                <Link
                  className="dropdown-item border-bottom border-secondary py-2"
                  to="/"
                >
                  Packers & Movers
                </Link>
                <Link
                  className="dropdown-item border-bottom border-secondary py-2"
                  to="/"
                >
                  Painting & Cleaning
                </Link>
                <Link
                  className="dropdown-item border-bottom border-secondary py-2"
                  to="/"
                >
                  Refer & Earn
                </Link>
                <Link
                  className="dropdown-item border-bottom border-secondary py-2"
                  to="/rentreceipt"
                >
                  Rent Receipts
                </Link>
                <Link
                  className="dropdown-item border-bottom border-secondary py-2"
                  to="/ownerplans"
                >
                  Owner Plans
                </Link>
                <Link
                  className="dropdown-item border-bottom border-secondary py-2"
                  to="/tenantplans"
                >
                  Tenant Plans
                </Link>
                <Link
                  className="dropdown-item border-bottom border-secondary py-2"
                  to="/blog"
                >
                  Blog
                </Link>
                <Link to="/contact" className="dropdown-item pt-2">
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

export default Header;
