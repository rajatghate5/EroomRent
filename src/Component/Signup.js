import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [baseurl, setBaseurl] = useState("");
  const [opt, setOpt] = useState("");
  const [reg, setReg] = useState({
    name: "",
    email: "",
    password: "",
    mobno: "",
    address: "",
  });

  const [flag, setFlag] = useState(false);
  const [msg1, setMsg1] = useState("");

  const setData = (e) => {
    e.preventDefault();
    console.log(opt);
    if (opt === "broker") {
      setBaseurl("http://127.0.0.1:5000/brokersignup");
    } else if (opt === "owner") {
      setBaseurl("http://127.0.0.1:5000/ownersignup");
    } else if (opt === "tenant") {
      setBaseurl("http://127.0.0.1:5000/tenantsignup");
    } else {
      setFlag(true);
      setMsg1("SignUp Failed");
      return;
    }
    axios
      .post(baseurl, {
        name: reg.name,
        email: reg.email,
        password: reg.password,
        mobno: reg.mobno,
        address: reg.address,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "1") {
          window.location.href = "/login";
          console.log(res.data.msg);
        } else {
          setFlag(true);
          setMsg1("SignUp Failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row h-100 py-2 d-sm-flex justify-content-center align-items-stretch">
        <div className="col-sm-6 d-sm-flex justify-content-center align-items-center flex-column bg-lightest-grey p-2">
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
        <div className="col-sm-6 py-4 text-center d-flex justify-content-center align-items-center flex-column">
          <h3 className="my-1">Sign Up</h3>
          <select
            className="form-control my-4 w-75"
            id="rollselect"
            onChange={(e) => setOpt(e.target.value)}
          >
            <option selected disabled defaultValue="roll">
              Select Roll--
            </option>
            <option value="owner">Owner</option>
            <option value="broker">Broker</option>
            <option value="tenant">Tenant</option>
          </select>
          {flag ? (
            <small className="w-75 fos-14 my-1 text-danger text-left">
              {msg1}
            </small>
          ) : (
            ""
          )}
          <form
            onSubmit={setData}
            className="d-flex w-75 justify-content-center align-items-center flex-column"
          >
            <div className="form-group row w-100">
              <div className="col-sm-12 px-0">
                <input
                  type="name"
                  className="form-control"
                  id="inputName"
                  placeholder="Enter Full Name"
                  onChange={(e) => setReg({ ...reg, name: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group row w-100">
              <div className="col-sm-12 px-0">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter Email"
                  onChange={(e) => setReg({ ...reg, email: e.target.value })}
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
                  onChange={(e) => setReg({ ...reg, password: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group row w-100">
              <div className="col-sm-12 px-0">
                <input
                  type="text"
                  className="form-control"
                  id="inputNumber"
                  placeholder="Enter Mobile Number"
                  onChange={(e) => setReg({ ...reg, mobno: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group row w-100">
              <div className="col-sm-12 px-0">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Enter Address"
                  onChange={(e) => setReg({ ...reg, address: e.target.value })}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-gold text-light font-weight-bold w-100"
            >
              Submit
            </button>
            <p className="my-3">
              Already a User? <Link to="/login">Click Here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
