import React, {useState, useEffect}from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "./actions";
import axios from "axios";
const HeaderBroker = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const savedUserID = localStorage.getItem("id");
  const baseUrl1 = "http://127.0.0.1:5000/brokersignup/";

  useEffect(() => {
    axios(baseUrl1 + savedUserID)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [savedUserID]);
  
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow cusSticky py-0">
          <Link to="/broker" className="navbar-brand" data-abc="true">
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
              <li className="nav-item">
                <Link
                  className="dropdown-item py-2"
                  to="/broker/rentalagreement"
                >
                  Rent Agreement
                </Link>
              </li>
              <li className="nav-item">
                <Link className="dropdown-item py-2" to="/broker/rentreceipt">
                  Rent Receipts
                </Link>
              </li>
              <li className="nav-item dropdown py-2">
                <div className="d-sm-flex align-items-center">
                  <img
                    src="/images/person.svg"
                    alt="Person"
                    className="border rounded-circle"
                    width="30px"
                    height="30px"
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
                      to="/broker/profile"
                      className="dropdown-item border-bottom py-2"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/broker/chat"
                      className="dropdown-item border-bottom py-2"
                    >
                      My Chats
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/broker/brokerplans"
                      className="dropdown-item border-bottom py-2"
                    >
                      For Broker
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
                      to="/broker/contact"
                      className="dropdown-item border-bottom py-2"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="dropdown-item py-2"
                      onClick={() => {
                        dispatch(logOut());
                      }}
                    >
                      Sign Out
                    </Link>
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

export default HeaderBroker;
