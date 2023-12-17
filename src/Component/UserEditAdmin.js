import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserEditAdmin = () => {
  const [userdata, setUserData] = useState({});
  const { id, role } = useLocation().state;
  console.log(id, role);
  const navigate = useNavigate();
  const inputRefs = {
    nameRef: useRef(),
    emailRef: useRef(),
    passwordRef: useRef(),
    mobnoRef: useRef(),
    addressRef: useRef(),
  };
  useEffect(() => {
    switch (role) {
      case "owner":
        axios
          .get("http://127.0.0.1:5000/ownersignup/" + id)
          .then((res) => setUserData(res.data))
          .catch((err) => console.error(err));
        break;
      case "tenant":
        axios
          .get("http://127.0.0.1:5000/tenantsignup/" + id)
          .then((res) => setUserData(res.data))
          .catch((err) => console.error(err));
        break;
      case "broker":
        axios
          .get("http://127.0.0.1:5000/brokersignup/" + id)
          .then((res) => setUserData(res.data))
          .catch((err) => console.error(err));
        break;
      default:
        console.log("Data is not defined");
    }
  }, []);

  const submitData = (e) => {
    e.preventDefault();
    if (window.confirm("Are You Sure?")) {
      switch (role) {
        case "owner":
          axios
            .patch("http://127.0.0.1:5000/ownersignup/" + id, {
              name: inputRefs.nameRef.current.value,
              email: inputRefs.emailRef.current.value,
              password: inputRefs.passwordRef.current.value,
              mobno: inputRefs.mobnoRef.current.value,
              address: inputRefs.addressRef.current.value,
            })
            .then((res) => {
              if (res.data.modifiedCount === 1) {
                navigate("/admin/home");
              } else {
                alert("Data not updated");
              }
            })
            .catch((err) => console.error(err));
          break;
        case "broker":
          axios
            .patch("http://127.0.0.1:5000/brokersignup/" + id, {
              name: inputRefs.nameRef.current.value,
              email: inputRefs.emailRef.current.value,
              password: inputRefs.passwordRef.current.value,
              mobno: inputRefs.mobnoRef.current.value,
              address: inputRefs.addressRef.current.value,
            })
            .then((res) => {
              if (res.data.modifiedCount === 1) {
                navigate("/admin/home");
              } else {
                alert("Data not updated");
              }
            })
            .catch((err) => console.error(err));
          break;
        case "tenant":
          axios
            .patch("http://127.0.0.1:5000/tenantsignup/" + id, {
              name: inputRefs.nameRef.current.value,
              email: inputRefs.emailRef.current.value,
              password: inputRefs.passwordRef.current.value,
              mobno: inputRefs.mobnoRef.current.value,
              address: inputRefs.addressRef.current.value,
            })
            .then((res) => {
              if (res.data.modifiedCount === 1) {
                navigate("/admin/home");
              } else {
                alert("Data not updated");
              }
            })
            .catch((err) => console.error(err));
          break;
        default:
          console.log("Default clicked");
          break;
      }
    }
  };

  return (
    <>
      <div style={{ marginTop: 100 }}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header bg-gold">
                <h4
                  className="card-title pb-2 w-25 mx-auto text-light text-nowrap"
                  style={{ borderBottom: "3px solid white" }}
                >
                  User Edit
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={submitData}>
                  <div
                    className="form-group d-flex justify-content-center align-items-center"
                    style={{ gap: "1rem" }}
                  >
                    <label className="w-25">Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="form-control"
                      defaultValue={userdata.name}
                      ref={inputRefs.nameRef}
                    />
                  </div>
                  <div
                    className="form-group d-flex justify-content-center align-items-center"
                    style={{ gap: "1rem" }}
                  >
                    <label className="w-25">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="form-control"
                      defaultValue={userdata.email}
                      ref={inputRefs.emailRef}
                    />
                  </div>
                  <div
                    className="form-group d-flex justify-content-center align-items-center"
                    style={{ gap: "1rem" }}
                  >
                    <label className="w-25">Password</label>
                    <input
                      type="text"
                      placeholder="Enter Password"
                      className="form-control"
                      defaultValue={userdata.password}
                      ref={inputRefs.passwordRef}
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      title="Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character. Minimum length is 8 characters."
                    />
                  </div>
                  <div
                    className="form-group d-flex justify-content-center align-items-center"
                    style={{ gap: "1rem" }}
                  >
                    <label className="w-25">Mobile</label>
                    <input
                      type="text"
                      placeholder="Enter Mobile"
                      className="form-control"
                      defaultValue={userdata.mobno}
                      ref={inputRefs.mobnoRef}
                      pattern="^[6-9]\d{9}$"
                      title="Enter a valid phone number starting with a digit between 6 and 9, followed by 9 digits."
                    />
                  </div>
                  <div
                    className="form-group d-flex justify-content-center align-items-center"
                    style={{ gap: "1rem" }}
                  >
                    <label className="w-25">Address</label>
                    <input
                      type="text"
                      placeholder="Enter Address"
                      className="form-control"
                      defaultValue={userdata.address}
                      ref={inputRefs.addressRef}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-success w-100"
                  >
                    Edit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditAdmin;
