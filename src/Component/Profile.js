import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState({});
  const [propertyData, setPropertyData] = useState([]);
  const navigate = useNavigate();
  const userID = useSelector((state) => state.detailReducer.id);
  const ownerLoggedIn = useSelector(
    (state) => state.detailReducer.ownerLoggedIn
  );
  let baseUrl = "";

  const updatedName = useRef();
  const updatedEmail = useRef();
  // const tpassword = useRef();
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

  const saveProfile = () => {
    axios
      .patch(baseUrl + userID, {
        name: updatedName.current.value,
        email: updatedEmail.current.value,
        password: data.password,
        mobno: updatedMobile.current.value,
        address: updatedAddress.current.value,
      })
      .then((res) => {
        alert("Profile Updated!")
        console.log("Profile updated successfully", res.data);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
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
                    className="tab-pane fade show active p-3"
                    id="basicprofile"
                    role="tabpanel"
                    aria-labelledby="v-pills-basicprofile-tab"
                  >
                    <p className="border-bottom border-muted pb-3 pt-2 fow-600 fos-14">
                      Edit Your Profile
                    </p>
                    <div className="d-flex flex-column">
                      <div className="row">
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
                            <div
                              className="d-flex my-5"
                              style={{ marginLeft: "3.5rem" }}
                            >
                              <span className="text-dark">
                                Get updates on{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="1.2em"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>{" "}
                                Whatsapp{" "}
                              </span>
                              <span className="custom-control custom-switch ml-2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customSwitch1"
                                  defaultChecked
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customSwitch1"
                                />
                              </span>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-gold text-light fow-600 w-100"
                            >
                              Save Profile
                            </button>
                          </form>
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
                                  <span className="text-capitalize fow-600">{data.propertyType}</span>
                                </p>
                                <p className="fos-14 my-1">
                                  Sub Category :{" "}
                                  <span className="text-uppercase fow-600">
                                    {data.subCategory}
                                  </span>
                                </p>
                                <p className="fos-14 my-1">
                                  Rent: <span className="fow-600">₹{data.rent}</span>
                                </p>
                                <p className="fos-14 my-1">
                                  Location :
                                  <span className="text-capitalize mx-2 fow-600">
                                    {data.location}
                                  </span>
                                </p>
                              </div>
                              <div style={{width : 150, height: 150, objectFit: 'contain'}}>                                
                                <img src={`/images/${data.imageUrls[0]}`} alt="" style={{width: '100%', height: '100%'}}/>
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
