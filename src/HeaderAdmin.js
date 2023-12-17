import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logOut } from "./actions";

const HeaderAdmin = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.detailReducer.id);
  const baseUrl1 = "http://127.0.0.1:5000/adminlogin/";

  useEffect(() => {
    axios(baseUrl1 + userID)
      .then((res) => {
        setData(res.data);        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userID]);

  const signOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    window.location.href = "/admin";
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow cusSticky py-0">
          <Link to="/admin/home" className="navbar-brand" data-abc="true">
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
            <ul className="navbar-nav ml-auto">
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
                    Welcome <i className="text-capitalize">{data.name}</i>
                  </a>
                </div>
                <ul
                  className="dropdown-menu text-left fos-14 px-2"
                  aria-labelledby="navbarDropdownMenuLink"
                >
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

export default HeaderAdmin;
