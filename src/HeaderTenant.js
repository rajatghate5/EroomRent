import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "./actions";

const HeaderTenant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});  
  const userID = useSelector((state) => state.detailReducer.id);
  console.log(userID);
  useEffect(() => {
    axios("http://127.0.0.1:5000/tenantsignup/" + userID)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userID]);

  const signOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow cusSticky py-0">
          <Link to="/tenant" className="navbar-brand" data-abc="true">
            <img src="/images/EroomRent.png" alt="" className="img-fluid" />
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
                <Link
                  to="/tenant/booking"
                  className="nav-link btn btn-outline-dark hover"
                  data-abc="true"
                >
                  <i className="far fa-file-alt"></i>
                  <small className="fos-14"> My Bookings</small>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="dropdown-item py-2"
                  to="/tenant/rentalagreement"
                >
                  Rent Agreement
                </Link>
              </li>
              <li className="nav-item">
                <Link className="dropdown-item py-2" to="/tenant/rentreceipt">
                  Rent Receipts
                </Link>
              </li>
              <li className="nav-item dropdown py-2">
                <div className="d-sm-flex align-items-center">
                  <img
                    src="/images/person.svg"
                    alt="Person"
                    className="border rounded-circle"
                    width={30}
                    height={30}
                  />
                  <a
                    className="nav-link dropdown-toggle py-0 px-2"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {data.name}
                  </a>
                </div>
                <ul
                  className="dropdown-menu text-left fos-14 px-2"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link
                      to="/tenant/dashboard"
                      className="dropdown-item border-bottom py-2"
                    >
                      My Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tenant/chat"
                      className="dropdown-item border-bottom py-2"
                    >
                      My Chats
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tenant/tenantplans"
                      className="dropdown-item border-bottom py-2"
                    >
                      For Tenants
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item border-bottom py-2"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tenant/contact"
                      className="dropdown-item border-bottom py-2"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item py-2" onClick={signOut}>
                      Sign Out
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderTenant;
