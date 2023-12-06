import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState({});
  const [propertyData, setPropertyData] = useState([]);
  const [retypePass, setRetypePass] = useState("");
  const navigate = useNavigate();
  const userID = useSelector((state) => state.detailReducer.id);
  const ownerLoggedIn = useSelector(
    (state) => state.detailReducer.ownerLoggedIn
  );
  let baseUrl = "";

  const updatedName = useRef();
  const updatedEmail = useRef();
  const updatedPassword = useRef();
  const updatedMobile = useRef();
  const updatedAddress = useRef();
  if (ownerLoggedIn === true) {
    baseUrl = "http://127.0.0.1:5000/ownersignup/";
  } else {
    baseUrl = "http://127.0.0.1:5000/brokersignup/";
  }

  useEffect(() => {
    axios(baseUrl + userID)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        navigate("/login");
      });

    axios("http://127.0.0.1:5000/postedproperty/" + userID)
      .then((res) => {
        console.log("Property Data", res.data);
        setPropertyData(res.data);
      })
      .catch((err) => {
        console.error("Error Fetching Data : ", err);
      });
  }, [userID]);

  const saveProfile = (e) => {
    e.preventDefault();
    axios
      .patch(baseUrl + userID, {
        name: updatedName.current.value,
        email: updatedEmail.current.value,
        password: data.password,
        mobno: updatedMobile.current.value,
        address: updatedAddress.current.value,
      })
      .then((res) => {
        alert("Profile Updated!");
        console.log("Profile updated successfully", res.data);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const savePassword = (e) => {
    e.preventDefault();
    if (
      updatedPassword.current.value === retypePass &&
      updatedPassword.current.value !== "" &&
      retypePass !== ""
    ) {
      axios
        .patch(baseUrl + userID, {
          name: updatedName.current.value,
          email: updatedEmail.current.value,
          password: updatedPassword.current.value,
          mobno: updatedMobile.current.value,
          address: updatedAddress.current.value,
        })
        .then((res) => {
          alert("Password Updated!");
          console.log("Password updated successfully");
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    } else {
      alert("Retype Password and New Password does not matched");
    }
  };

  return (
    <Wrapper>
      <section style={{ padding: "0px 20px" }}>
        {/* Main Content */}
        <div
          className="row justify-content-center align-items-center"
          style={{ marginTop: 80 }}
        >
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-3 border border-muted">
                <div
                  className="nav flex-column nav-pills py-4 fos-14"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <p className="border-bottom border-muted pb-3 fow-600 fos-14">
                    Manage Your Account
                  </p>
                  <button
                    className="nav-link active text-left py-3"
                    id="v-pills-basicprofile-tab"
                    data-toggle="pill"
                    data-target="#basicprofile"
                    type="button"
                    role="tab"
                    aria-controls="basicprofile"
                    aria-selected="true"
                  >
                    Basic Profile
                  </button>
                  <button
                    className="nav-link text-left py-3"
                    id="v-pills-payment-tab"
                    data-toggle="pill"
                    data-target="#payment"
                    type="button"
                    role="tab"
                    aria-controls="payment"
                    aria-selected="false"
                  >
                    Your Payment
                  </button>
                  <button
                    className="nav-link text-left py-3"
                    id="v-pills-properties-tab"
                    data-toggle="pill"
                    data-target="#properties"
                    type="button"
                    role="tab"
                    aria-controls="faq"
                    aria-selected="false"
                  >
                    Your Properties
                  </button>
                  <button
                    className="nav-link text-left py-3"
                    id="v-pills-interested-tab"
                    data-toggle="pill"
                    data-target="#interested"
                    type="button"
                    role="tab"
                    aria-controls="intrested"
                    aria-selected="false"
                  >
                    Interested in your properties
                  </button>
                </div>
              </div>
              <div className="col-sm-9 border border-muted">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active p-2"
                    id="basicprofile"
                    role="tabpanel"
                    aria-labelledby="v-pills-basicprofile-tab"
                  >
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item w-50" role="presentation">
                        <button
                          className="nav-link active d-flex justify-content-center align-items-center h-100 w-100 py-3"
                          id="personal-tab"
                          data-toggle="tab"
                          data-target="#personal"
                          type="button"
                          role="tab"
                          aria-controls="personal"
                          aria-selected="true"
                        >
                          <span className="ml-2 fos-14">Personal Info</span>
                        </button>
                      </li>
                      <li className="nav-item w-50" role="presentation">
                        <button
                          className="nav-link d-flex justify-content-center align-items-center h-100 w-100 py-3"
                          id="security-tab"
                          data-toggle="tab"
                          data-target="#security"
                          type="button"
                          role="tab"
                          aria-controls="security"
                          aria-selected="false"
                        >
                          <span className="ml-2 fos-14">Security</span>
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-content px-3 py-5 h-100"
                      id="myTabContent"
                    >
                      <div
                        className="tab-pane fade show active h-100"
                        id="personal"
                        role="tabpanel"
                        aria-labelledby="personal-tab"
                      >
                        <div className="d-flex flex-column">
                          <div className="row w-100 justify-content-center align-items-center">
                            <div className="col-sm-6">
                              <form onSubmit={saveProfile}>
                                <div className="d-flex justify-content-between align-items-center">
                                  <label
                                    htmlFor="fname"
                                    className="fos-14 fow-600 my-auto"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    name="fname"
                                    defaultValue={data.name}
                                    className="border border-muted pl-2 w-75 fos-14"
                                    style={{ height: 35 }}
                                    ref={updatedName}
                                  />
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                  <label
                                    htmlFor="emailid"
                                    className="fos-14 fow-600 my-auto w-25"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    name="emailid"
                                    defaultValue={data.email}
                                    className="border border-muted pl-2 w-75 fos-14"
                                    style={{ height: 35, marginLeft: 11 }}
                                    ref={updatedEmail}
                                  />
                                  <div
                                    className="bg-lightest-grey border border-muted"
                                    style={{ height: 35 }}
                                  >
                                    <i className="fas fa-exclamation-triangle text-danger fos-20 m-2"></i>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                  <label
                                    htmlFor="phone"
                                    className="fos-14 fow-600 my-auto w-25"
                                  >
                                    Mobile
                                  </label>
                                  <input
                                    type="number"
                                    name="phone"
                                    defaultValue={data.mobno}
                                    className="border border-muted pl-2 w-75 fos-14"
                                    style={{ height: 35, marginLeft: 11 }}
                                    ref={updatedMobile}
                                  />
                                  <div
                                    className="py-1 pl-1"
                                    style={{ height: 35, width: 40 }}
                                  >
                                    <i
                                      className="fas fa-check-circle fos-18"
                                      style={{ color: " #25ab1c" }}
                                    ></i>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                  <label
                                    htmlFor="phone"
                                    className="fos-14 fow-600 my-auto w-25"
                                  >
                                    Address
                                  </label>
                                  <input
                                    type="text"
                                    name="address"
                                    defaultValue={data.address}
                                    className="border border-muted pl-2 w-75 fos-14"
                                    style={{ height: 35, marginLeft: 11 }}
                                    ref={updatedAddress}
                                  />
                                  <div
                                    className="py-1 pl-1"
                                    style={{ height: 35, width: 40 }}
                                  >
                                    <i
                                      className="fas fa-check-circle fos-18"
                                      style={{ color: " #25ab1c" }}
                                    ></i>
                                  </div>
                                </div>

                                <button
                                  type="submit"
                                  className="btn btn-gold text-light fow-600 w-100 my-5"
                                >
                                  Save Profile
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade h-100"
                        id="security"
                        role="tabpanel"
                        aria-labelledby="security-tab"
                      >
                        <div className="d-flex flex-column my-5">
                          <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-sm-6">
                              <form onSubmit={savePassword}>
                                <div className="d-flex justify-content-between align-items-center">
                                  <label
                                    htmlFor="cpassword"
                                    className="fos-14 fow-600 my-auto"
                                  >
                                    Current Password
                                  </label>
                                  <input
                                    type="password"
                                    name="cpassword"
                                    defaultValue={data.password}
                                    className="border border-muted pl-2 w-50 fos-14"
                                    style={{ height: 35 }}
                                    disabled
                                  />
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                  <label
                                    htmlFor="newpassword"
                                    className="fos-14 fow-600 my-auto"
                                  >
                                    New Password
                                  </label>
                                  <input
                                    type="password"
                                    name="newpassword"
                                    ref={updatedPassword}
                                    className="border border-muted pl-2 w-50 fos-14"
                                    style={{ height: 35, marginLeft: 11 }}
                                  />
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                  <label
                                    htmlFor="retypepassword"
                                    className="fos-14 fow-600 my-auto"
                                  >
                                    Retype Password
                                  </label>
                                  <input
                                    type="password"
                                    name="retypepassword"
                                    onChange={(e) =>
                                      setRetypePass(e.target.value)
                                    }
                                    className="border border-muted pl-2 w-50 fos-14"
                                    style={{ height: 35, marginLeft: 11 }}
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-gold text-light fow-600 w-100 my-5"
                                >
                                  Save Password
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade p-3"
                    id="payment"
                    role="tabpanel"
                    aria-labelledby="v-pills-payment-tab"
                  >
                    <p className="border-bottom border-muted pb-3 pt-2 fow-600 fos-14">
                      Your Payments
                    </p>
                    <p className="fos-14">No Payments yet!</p>
                  </div>
                  <div
                    className="tab-pane fade p-3"
                    id="properties"
                    role="tabpanel"
                    aria-labelledby="v-pills-properties-tab"
                  >
                    <div className="d-flex justify-content-between align-items-center pb-3">
                      <p className="fow-600 fos-14 pt-3">
                        You have already posted {propertyData.length} Property
                        in EroomRent
                      </p>
                    </div>
                    <div className="d-sm-flex justify-content-start align-items-center flex-wrap">
                      {propertyData.map((data, i) => (
                        <div
                          className="card position-relative m-2"
                          style={{ width: "23rem" }}
                          key={i}
                        >
                          <div className="card-body">
                            <span
                              className="badge badge-secondary position-absolute rounded-0 font-weight-normal"
                              style={{ top: "5%", left: "0%" }}
                            >
                              Edit Your Property
                            </span>
                            <div className="d-flex justify-content-between align-items-start my-2">
                              <div className="my-auto">
                                <p className="fos-14 my-1">
                                  Property Type :{" "}
                                  <span className="text-capitalize fow-600">
                                    {data.propertyType}
                                  </span>
                                </p>
                                <p className="fos-14 my-1">
                                  Sub Category :{" "}
                                  <span className="text-uppercase fow-600">
                                    {data.subCategory}
                                  </span>
                                </p>
                                <p className="fos-14 my-1">
                                  Rent:{" "}
                                  <span className="fow-600">₹{data.rent}</span>
                                </p>
                                <p className="fos-14 my-1">
                                  Location :
                                  <span className="text-capitalize mx-2 fow-600">
                                    {data.location}
                                  </span>
                                </p>
                              </div>
                              <div
                                style={{
                                  width: 150,
                                  height: 150,
                                  objectFit: "contain",
                                }}
                              >
                                <img
                                  src={`/images/property-img/${data.imageUrls[0]}`}
                                  alt=""
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer py-0 border-0 bg-white my-2">
                            <Link
                              to={
                                ownerLoggedIn
                                  ? "/owner/editproperty"
                                  : "/broker/editproperty"
                              }
                              state={data._id}
                              className="btn btn-outline-secondary fos-14 px-2 py-0 w-100 py-2 fos-16 fow-600"
                            >
                              Edit
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade p-3"
                    id="interested"
                    role="tabpanel"
                    aria-labelledby="v-pills-interested-tab"
                  >
                    <p className="border-bottom border-muted pb-3 pt-2 fow-600 fos-14">
                      Tenants who viewed your contact
                    </p>
                    <p className="fos-14">
                      No user has shown interest in your property yet!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.section`
  .nav-pills .nav-link.active {
    background-color: goldenrod;
    color: white;
  }
`;
