import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Dashboard = () => {
  const [data, setData] = useState({});
  const userID = localStorage.getItem("id");
  const [retypePass, setRetypePass] = useState("");
  const updatedName = useRef();
  const updatedEmail = useRef();
  const updatedPassword = useRef();
  const updatedMobile = useRef();
  const updatedAddress = useRef();
  const baseUrl1 = "http://127.0.0.1:5000/tenantsignup/";

  useEffect(() => {
    axios(baseUrl1 + userID)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userID]);

  const proceedToPay = () => {
    alert("Proceed To Payment");
  };

  const saveProfile = (e) => {
    e.preventDefault();
    axios
      .patch(baseUrl1 + userID, {
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
        .patch(baseUrl1 + userID, {
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
      <section>
        {/* Sub header */}
        <div
          className="row border-top border-muted bg-white shadow"
          style={{ marginTop: 65 }}
        >
          <div className="col-sm-6 d-flex p-2 pl-5">
            <img
              src="/images/person.svg"
              alt
              className="img-fluid"
              style={{ width: 50 }}
            />
            <div className="d-flex flex-column text-left ml-5">
              <p className="font-weight-normal m-0">{data.name}</p>
              <small className="text-muted">{data.mobno}</small>
              <small className="text-muted">{data.email}</small>
            </div>
          </div>
          <div className="col-sm-1 border-right border-muted my-2 p-0 text-center">
            <Link
              to="/tenant"
              className="text-muted mb-0"
              style={{ textDecoration: "none" }}
            >
              <i className="fas fa-search ml-2 mt-2 fos-25"></i>
              <br />
              <span className="ml-2">Search</span>
            </Link>
          </div>
          <div
            className="col-sm-1 border-right border-muted my-2 px-0"
            style={{ display: "grid", placeItems: "center" }}
          >
            {/* Button to Open the Modal First */}
            <button
              type="button"
              className="btn text-muted mx-auto"
              data-toggle="modal"
              data-target="#myModal1"
            >
              <i class="fas fa-wallet fos-25" style={{ opacity: 0.5 }}></i>
              <br />
              <span className="ml-2">Basic Plan</span>
            </button>
            {/* The Modal First*/}
            <div className="modal p-3" id="myModal1">
              <div className="modal-dialog m-0">
                <div className="modal-content" style={{ width: "98vw" }}>
                  {/* Modal Header */}
                  <div className="modal-header position-relative">
                    <div className="row w-100 m-0 p-0">
                      <div className="col-sm-12 text-center p-0">
                        <h4 className="text-dark font-weight-normal">
                          Choose a plan and{" "}
                          <span className="text-gold">SAVE THOUSANDS</span> on
                          brokerage.
                        </h4>
                        <h5 className="text-dark font-weight-normal w-100 bg-lightest-grey fos-14 py-3">
                          <i className="fas fa-info-circle"></i> The validity of
                          your Free Plan has expired. Please renew/upgrade your
                          plan to resume this service
                        </h5>
                        <button
                          type="button"
                          className="close position-absolute"
                          data-dismiss="modal"
                          style={{ right: 5, top: 3 }}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                    <br />
                  </div>
                  {/* Modal body */}
                  <div
                    className="modal-body text-center"
                    style={{ height: "74vh", overflowY: "scroll" }}
                  >
                    <div className="card-deck">
                      <div className="card">
                        <div className="card-title bg-success d-sm-flex justify-content-between p-2 align-items-center mb-0">
                          <p className="text-light font-weight-bold fos-20">
                            Freedom Plan
                          </p>
                          <div className="text-right">
                            <s
                              className="font-weight-bold fos-20"
                              style={{ color: "gainsboro" }}
                            >
                              ₹ 1,999
                            </s>
                            <span className="font-weight-bold text-light fos-20">
                              ₹ 1,499
                            </span>
                            <br />
                            <div
                              className="dropdown"
                              style={{ float: "right" }}
                            >
                              <button
                                className="dropbtn border-0 text-light"
                                style={{ backgroundColor: "#28a745" }}
                              >
                                <small
                                  style={{ borderBottom: "1px dotted white" }}
                                >
                                  +18% GST
                                </small>
                              </button>
                              <div
                                className="dropdown-content px-3 pt-2"
                                style={{ width: 300 }}
                              >
                                <div className="d-flex justify-content-between">
                                  <p className="fos-14 text-dark">Plan Price</p>
                                  <p className="fos-14 text-dark">₹ 1,499.00</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p className="fos-14 text-dark">GST @ 18%</p>
                                  <p className="fos-14 text-dark">₹ 269.82</p>
                                </div>
                                <div className="dropdown-divider py-0" />
                                <div className="d-flex justify-content-between font-weight-bold">
                                  <p className="fos-14 text-dark">
                                    Amount Payable
                                  </p>
                                  <p className="fos-14 text-dark">₹ 1768.82</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body text-center p-0 px-2">
                          <h6 className="text-success text-left">
                            Get genuine house owner contacts matching your
                            requirements
                          </h6>
                          <div className="media">
                            <img
                              className="align-self-center mr-3 rounded-circle"
                              src="/images/customer-service.png"
                              alt="Customer Service"
                            />
                            <div className="media-body">
                              <p className="fos-14 text-dark font-weight-bold">
                                Complete Relocation Assistance on Call
                              </p>
                              <ul className="text-left ml-5 pl-2">
                                <li className="fos-14">
                                  Free Customized Packer and Mover Quote
                                </li>
                                <li className="fos-14">
                                  Free Rental Agreement consultation with expert
                                </li>
                                <li className="fos-14">On-Demand Support</li>
                              </ul>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Premium Filters</span>
                            <i
                              className="fas fa-check-circle fos-18"
                              style={{ color: " #25ab1c" }}
                            ></i>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Number of Contacts</span>
                            <span>upto 25</span>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Instant Property Alerts on SMS</span>
                            <i
                              className="fas fa-check-circle fos-18"
                              style={{ color: " #25ab1c" }}
                            ></i>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span className="text-muted">Locality Experts</span>
                            <i
                              className="fas fa-times fos-18 mr-1"
                              style={{ opacity: 0.5 }}
                            ></i>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span className="text-muted">Rent Negotiation</span>
                            <i
                              className="fas fa-times fos-18 mr-1"
                              style={{ opacity: 0.5 }}
                            ></i>
                          </div>
                        </div>
                        <div className="card-footer bg-white border-0 text-center">
                          <button
                            onClick={proceedToPay}
                            className="bg-success px-4 py-2 border-0 text-light fow-600"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                      <div className="card bor-blue">
                        <div className="card-title bg-blue d-sm-flex justify-content-between p-2 align-items-center mb-0">
                          <p className="text-light font-weight-bold fos-20">
                            Relax Plan
                          </p>
                          <div className="text-right">
                            <s
                              className="font-weight-bold fos-20"
                              style={{ color: "gainsboro" }}
                            >
                              ₹ 3,999
                            </s>
                            <span className="font-weight-bold text-light fos-20">
                              ₹ 3,499
                            </span>
                            <br />
                            <div
                              className="dropdown"
                              style={{ float: "right" }}
                            >
                              <button className="dropbtn border-0 bg-blue text-light">
                                <small
                                  style={{ borderBottom: "1px dotted white" }}
                                >
                                  +18% GST
                                </small>
                              </button>
                              <div
                                className="dropdown-content px-3 pt-2"
                                style={{ width: 300 }}
                              >
                                <div className="d-flex justify-content-between">
                                  <p className="fos-14 text-dark">Plan Price</p>
                                  <p className="fos-14 text-dark">₹ 3,499.00</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p className="fos-14 text-dark">GST @ 18%</p>
                                  <p className="fos-14 text-dark">₹ 692.82</p>
                                </div>
                                <div className="dropdown-divider py-0" />
                                <div className="d-flex justify-content-between font-weight-bold">
                                  <p className="fos-14 text-dark">
                                    Amount Payable
                                  </p>
                                  <p className="fos-14 text-dark">₹ 4128.82</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body text-center p-0 px-2">
                          <h6 className="text-blue text-left">
                            Get Relationship Manager to help you SAVE time and
                            money
                          </h6>
                          <div className="media">
                            <img
                              className="align-self-center mr-3 rounded-circle"
                              src="/images/customer-service.png"
                              alt="Customer Service"
                            />
                            <div className="media-body">
                              <p className="fos-14 text-dark font-weight-bold mr-5">
                                Relationship Manager
                              </p>
                              <ul className="text-left ml-5 pl-4">
                                <li className="fos-14">
                                  Contacts owners and fixes meetings
                                </li>
                                <li className="fos-14">
                                  Negotiates rent on your behalf
                                </li>
                                <li className="fos-14">
                                  Provides locality level expertise
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Premium Filters</span>
                            <i
                              className="fas fa-check-circle fos-18"
                              style={{ color: " #25ab1c" }}
                            ></i>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Number of Contacts</span>
                            <span>upto 50</span>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Instant Property Alerts on SMS</span>
                            <i
                              className="fas fa-check-circle fos-18"
                              style={{ color: " #25ab1c" }}
                            ></i>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Locality Experts</span>
                            <i
                              className="fas fa-check-circle fos-18"
                              style={{ color: " #25ab1c" }}
                            ></i>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Rent Negotiation</span>
                            <i
                              className="fas fa-check-circle fos-18"
                              style={{ color: " #25ab1c" }}
                            ></i>
                          </div>
                        </div>
                        <div className="card-footer bg-white border-0 text-center">
                          <button
                            onClick={proceedToPay}
                            className="bg-blue px-4 py-2 border-0 text-light fow-600"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                      <div className="card border-danger">
                        <div className="card-title bg-danger d-sm-flex justify-content-between p-2 align-items-center mb-0">
                          <p className="text-light font-weight-bold fos-20">
                            MoneyBack Plan
                          </p>
                          <div className="text-right">
                            <s
                              className="font-weight-bold fos-20"
                              style={{ color: "gainsboro" }}
                            >
                              ₹ 6,499
                            </s>
                            <span className="font-weight-bold text-light fos-20">
                              ₹ 5,999
                            </span>
                            <br />
                            <div
                              className="dropdown"
                              style={{ float: "right" }}
                            >
                              <button
                                className="dropbtn border-0 text-light"
                                style={{ backgroundColor: "#dc3545" }}
                              >
                                <small
                                  style={{ borderBottom: "1px dotted white" }}
                                >
                                  +18% GST
                                </small>
                              </button>
                              <div
                                className="dropdown-content px-3 pt-2"
                                style={{ width: 300 }}
                              >
                                <div className="d-flex justify-content-between">
                                  <p className="fos-14 text-dark">Plan Price</p>
                                  <p className="fos-14 text-dark">₹ 5,999.00</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p className="fos-14 text-dark">GST @ 18%</p>
                                  <p className="fos-14 text-dark">₹ 1079.82</p>
                                </div>
                                <div className="dropdown-divider py-0" />
                                <div className="d-flex justify-content-between font-weight-bold">
                                  <p className="fos-14 text-dark">
                                    Amount Payable
                                  </p>
                                  <p className="fos-14 text-dark">₹ 7078.82</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body text-center p-0 px-2">
                          <h6 className="text-danger text-left">
                            Get Guaranteed home or 100% Refund
                          </h6>
                          <div className="media">
                            <img
                              className="align-self-center mr-3 rounded-circle"
                              src="/images/customer-service.png"
                              alt="Customer Service"
                            />
                            <div className="media-body">
                              <p className="fos-14 text-dark font-weight-bold mr-5 mt-3">
                                Relationship Manager
                              </p>
                              <ul className="text-left ml-5 pl-4">
                                <li className="fos-14">
                                  Contacts owners and fixes meetings
                                </li>
                                <li className="fos-14">
                                  Negotiates rent on your behalf
                                </li>
                                <li className="fos-14">
                                  Provides locality level expertise
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Premium Filters</span>
                            <i
                              className="fas fa-check-circle fos-18"
                              style={{ color: " #25ab1c" }}
                            ></i>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Number of Contacts</span>
                            <span>upto 50</span>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Instant Property Alerts on SMS</span>
                            <i
                              className="fas fa-check-circle fos-18"
                              style={{ color: " #25ab1c" }}
                            ></i>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Locality Experts</span>
                            <i
                              className="fas fa-check-circle fos-18"
                              style={{ color: " #25ab1c" }}
                            ></i>
                          </div>
                          <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                            <span>Rent Negotiation</span>
                            <i
                              className="fas fa-check-circle fos-18"
                              style={{ color: " #25ab1c" }}
                            ></i>
                          </div>
                        </div>
                        <div className="card-footer bg-white border-0 text-center">
                          <button
                            onClick={proceedToPay}
                            className="bg-danger px-4 py-2 border-0 text-light fow-600"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted mb-0">
                      For assistance call us at :{" "}
                      <span className="text-gold">+09630623876</span>
                    </p>
                    <small>
                      Plan Validity : MoneyBack &amp; Relax ( 45 Days ) ,
                      Freedom &amp; Basic ( 90 days ) .{" "}
                      <Link to="/termsandconditions" className="text-gold">
                        T&amp;C
                      </Link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2 border-right border-muted my-2 px-0 justify-content-center align-items-center">
            {/* Button to Open the Modal First */}
            <button
              type="button"
              className="btn text-muted w-100"
              data-toggle="modal"
              data-target="#myModal2"
            >
              <i className="far fa-edit fos-25"></i>
              <br />
              <span className="ml-2">Write a Testimonial</span>
            </button>
            {/* The Modal First*/}
            <div className="modal" id="myModal2">
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header position-relative">
                    <h4 className="modal-title font-weight-light">
                      Write a Testimonial
                    </h4>
                    <button
                      type="button"
                      className="close position-absolute"
                      data-dismiss="modal"
                      style={{ right: 20, top: 10 }}
                    >
                      ×
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className="modal-body">
                    <label
                      htmlFor="testimonial"
                      className="fos-14 font-weight-bold"
                    >
                      Write a Testimonial or Feedback
                    </label>
                    <textarea
                      name="testimonial"
                      cols={60}
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  {/* Modal footer */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-light"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-gold">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2 my-3 px-0 text-center">
            <Link to="/rentalagreement" className="text-muted">
              <i class="fas fa-file-contract fos-25"></i>
              <br />
              <span>Create Agreement</span>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div
          className="row justify-content-center align-items-stretch pt-4"
          style={{ gap: "1rem" }}
        >
          {/* Edit Profile */}
          <div className="col-sm-4 bg-white mx-0 px-0 position-relative box-shadow">
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
            <div className="tab-content px-3  h-100" id="myTabContent">
              <div
                className="tab-pane fade show active h-100"
                id="personal"
                role="tabpanel"
                aria-labelledby="personal-tab"
              >
                <div className="d-flex flex-column my-5">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-11">
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
                            type="text"
                            name="phone"
                            defaultValue={data.mobno}
                            pattern="^[6-9]\d{9}$"
                            title="Enter a valid phone number starting with a digit between 6 and 9, followed by 9 digits."
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
                    <div className="col-sm-11">
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
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            title="Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character. Minimum length is 8 characters."
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
                            onChange={(e) => setRetypePass(e.target.value)}
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

          {/* Options */}
          <div className="col-sm-7 bg-white mx-0 box-shadow">
            <div className="row">
              <div className="col-sm-12 px-0">
                <div className="card">
                  <div className="card-header bg-white pb-0 py-0 px-0">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item w-25" role="presentation">
                        <button
                          className="nav-link active d-flex justify-content-center align-items-center h-100 w-100 py-3"
                          id="contacted-tab"
                          data-toggle="tab"
                          data-target="#contacted"
                          type="button"
                          role="tab"
                          aria-controls="contacted"
                          aria-selected="true"
                        >
                          <i className="fas fa-phone-volume fos-18"></i>
                          <span className="ml-2 fos-14">Contacted (0)</span>
                        </button>
                      </li>
                      <li className="nav-item w-25" role="presentation">
                        <button
                          className="nav-link d-flex justify-content-center align-items-center h-100 w-100 py-3"
                          id="shortlisted-tab"
                          data-toggle="tab"
                          data-target="#shortlisted"
                          type="button"
                          role="tab"
                          aria-controls="shortlisted"
                          aria-selected="false"
                        >
                          <i className="fas fa-heart fos-18"></i>
                          <span className="ml-2 fos-14">Shortlisted (0)</span>
                        </button>
                      </li>
                      <li className="nav-item w-25" role="presentation">
                        <button
                          className="nav-link d-flex justify-content-center align-items-center h-100 w-100 py-3"
                          id="subscribed-tab"
                          data-toggle="tab"
                          data-target="#subscribed"
                          type="button"
                          role="tab"
                          aria-controls="subscribed"
                          aria-selected="false"
                        >
                          <i class="fas fa-rss fos-18"></i>
                          <span className="ml-2 fos-14">Subscribed (0)</span>
                        </button>
                      </li>
                      <li className="nav-item w-25" role="presentation">
                        <button
                          className="nav-link d-flex justify-content-center align-items-center h-100 w-100 py-3"
                          id="appointments-tab"
                          data-toggle="tab"
                          data-target="#appointments"
                          type="button"
                          role="tab"
                          aria-controls="appointments"
                          aria-selected="false"
                        >
                          <i class="fas fa-calendar-day fos-18"></i>
                          <span className="ml-2 fos-14">Appointments (0)</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body" style={{ height: "101vh" }}>
                    <div className="tab-content px-3 h-100" id="myTabContent">
                      <div
                        className="tab-pane fade show active h-100"
                        id="contacted"
                        role="tabpanel"
                        aria-labelledby="contacted-tab"
                      >
                        <div className="row h-100">
                          <div className="col-sm-12 d-flex justify-content-center align-items-center">
                            <h5 className="text-muted">No Data Found.</h5>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade h-100"
                        id="shortlisted"
                        role="tabpanel"
                        aria-labelledby="shortlisted-tab"
                      >
                        <div className="row h-100">
                          <div className="col-sm-12 d-flex justify-content-center align-items-center">
                            <h5 className="text-muted">No Data Found.</h5>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade d-flex justify-content-center align-items-center"
                        id="subscribed"
                        role="tabpanel"
                        aria-labelledby="subscribed-tab"
                      >
                        <div className="row h-100">
                          <div className="col-sm-12 d-flex justify-content-center align-items-center">
                            <h5 className="text-muted">
                              No Property Subscribed Yet
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade h-100"
                        id="appointments"
                        role="tabpanel"
                        aria-labelledby="appointments-tab"
                      >
                        <div className="row h-100">
                          <div className="col-sm-12 d-flex justify-content-center align-items-center">
                            <h5 className="text-muted">
                              No Appointments Booked till now
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booked Property */}
        <div className="row mt-3 px-5 py-2">
          <div className="col-sm-12 bg-white box-shadow h-100">
            <h5 className="text-gold mt-3">Recently Viewed</h5>
            <p>No Property Seen Yet!</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.section`
  .card-header:hover {
    cursor: pointer;
  }

  .dropbtn {
    color: white;
    padding: 0px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .box-shadow {
    -webkit-box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
  }

  .nav-tabs .nav-link.active {
    background-color: goldenrod;
    color: white;
  }
`;
