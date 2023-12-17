import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgottenPassword = () => {
  const [retype, setRetype] = useState("");
  const [display, setDisplay] = useState(true);
  const [userData, setUserData] = useState({});
  const [opt, setOpt] = useState("");
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [flag1, setFlag1] = useState(false);
  const [msg2, setMsg2] = useState("");

  function navigateWithData() {
    navigate("/login");
  }

  const logData = (e) => {
    e.preventDefault();
    switch (opt) {
      case "broker":
        axios
          .post("http://127.0.0.1:5000/brokerforgotten", {
            email: login.email,
          })
          .then((res) => {
            if (res.data.status === "1") {
              setDisplay(false);
              setUserData(res.data.info);
            } else {
              setFlag1(true);
              setMsg2("User Not Found");
            }
          })
          .catch((err) => {
            console.error("Network Error", err);
          });
        break;
      case "owner":
        axios
          .post("http://127.0.0.1:5000/ownerforgotten", {
            email: login.email,
          })
          .then((res) => {
            if (res.data.status === "1") {
              setDisplay(false);
              setUserData(res.data.info);
            } else {
              setFlag1(true);
              setMsg2("User Not Found");
            }
          })
          .catch((err) => {
            console.error("Network Error", err);
          });
        break;
      case "tenant":
        axios
          .post("http://127.0.0.1:5000/tenantforgotten", {
            email: login.email,
          })
          .then((res) => {
            if (res.data.status === "1") {
              setDisplay(false);
              setUserData(res.data.info);
            } else {
              setFlag1(true);
              setMsg2("User Not Found");
            }
          })
          .catch((err) => {
            console.error("Network Error", err);
          });
        break;
      default:
        setFlag1(true);
        setMsg2("SignUp Failed");
        return;
    }
  };

  const setPassword = (e) => {
    e.preventDefault();
    if (login.password === retype) {
      switch (opt) {
        case "broker":
          axios
            .put("http://127.0.0.1:5000/setbrokerpassword", {
              email: userData.email,
              password: login.password,
            })
            .then((res) => {
              if (res.data.status === "1") {
                navigateWithData("/login");
              } else {
                setFlag1(true);
                setMsg2("Password not changed");
              }
            })
            .catch((err) => {
              console.error("Network Error", err);
            });
          break;
        case "owner":
          axios
            .put("http://127.0.0.1:5000/setownerpassword", {
              email: userData.email,
              password: login.password,
            })
            .then((res) => {
              if (res.data.status === "1") {
                navigateWithData();
              } else {
                setFlag1(true);
                setMsg2("Password not changed");
              }
            })
            .catch((err) => {
              console.error("Network Error", err);
            });
          break;
        case "tenant":
          axios
            .put("http://127.0.0.1:5000/settenantpassword", {
              email: userData.email,
              password: login.password,
            })
            .then((res) => {
              if (res.data.status === "1") {
                navigateWithData("/login");
              } else {
                setFlag1(true);
                setMsg2("Password not changed");
              }
            })
            .catch((err) => {
              console.error("Network Error", err);
            });
          break;
        default:
          setFlag1(true);
          setMsg2("SignUp Failed");
          return;
      }
    } else {
      alert("Password Not Matched");
    }
  };

  return (
    <>
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
        {display ? (
          <div className="col-sm-6 d-flex justify-content-center align-items-center flex-column py-4 text-center">
            <h3 className="my-5">Forgotten Password</h3>
            {flag1 ? (
              <small
                style={{ color: "red" }}
                className="mt-5 mb-2 text-left w-75"
              >
                {msg2}
              </small>
            ) : (
              ""
            )}
            <select
              className="form-control w-75 mb-4"
              id="roll-select"
              onChange={(e) => setOpt(e.target.value)}
            >
              <option defaultValue="roll" disabled selected>
                Select Roll--
              </option>
              <option value="owner">Owner</option>
              <option value="broker">Broker</option>
              <option value="tenant">Tenant</option>
            </select>
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
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-gold text-light font-weight-bold w-100"
                onClick={logData}
              >
                Send
              </button>
            </form>
          </div>
        ) : (
          <div className="col-sm-6 d-flex justify-content-center align-items-center flex-column py-4 text-center">
            <h3 className="my-5">Set New Password</h3>
            <form
              onSubmit={setPassword}
              className="d-flex w-75 p-0 justify-content-around align-items-center flex-column"
            >
              <div className="form-group row w-100">
                <div className="col-sm-12 px-0">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="New Password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    title="Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character. Minimum length is 8 characters."
                    onChange={(e) =>
                      setLogin({ ...login, password: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group row w-100">
                <div className="col-sm-12 px-0">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Retype Password"
                    onChange={(e) => setRetype(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-gold text-light font-weight-bold w-100"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ForgottenPassword;
