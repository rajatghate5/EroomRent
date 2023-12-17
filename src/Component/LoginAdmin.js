import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminLogin, getDetails } from "../actions";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [flag1, setFlag1] = useState(false);
  const [msg2, setMsg2] = useState("");

  function navigateWithData(path) {
    navigate(path);
  }

  const logData = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/adminlogin", {
        email: login.email,
        password: login.password,
      })
      .then((res) => {
        if (res.data.status === "1") {
          dispatch(getDetails(res.data.id));
          dispatch(adminLogin());
          navigateWithData("/admin/home");
        } else {
          setFlag1(true);
          setMsg2("Login Not Success");
        }
      })
      .catch((err) => {
        console.error("Network Error", err);
      });
  };

  return (
    <div id="container">
      <div
        className="row py-2 d-sm-flex justify-content-center align-items-stretch"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-6 d-sm-flex justify-content-center align-items-center flex-column bg-lightest-grey p-0">
          <div className="w-100 d-flex justify-content-center align-items-center flex-column">
            <img src="/images/home-rent.svg" alt="" width={200} height={200} />
            <h5 className="mt-3">Login/SignUp</h5>
            <ul className="lts-none">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>{" "}
                <small className="text-secondary">Zero Brokerage.</small>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>{" "}
                <small className="text-secondary">New listing daily</small>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>{" "}
                <small className="text-secondary">Save Brokerage</small>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 d-flex justify-content-center align-items-center flex-column py-4 text-center">
          <h3 className="my-3">Login Admin</h3>
          <form
            onSubmit={logData}
            className="d-flex w-75 p-0 justify-content-around align-items-center flex-column"
          >
            <div className="form-group row w-100">
              <div className="col-sm-12 px-0">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter Email"
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-group row w-100">
              <div className="col-sm-12 px-0">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter Password"
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-gold text-light font-weight-bold w-100"
            >
              Submit
            </button>
            {flag1 ? <small style={{ color: "red" }}>{msg2}</small> : ""}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
