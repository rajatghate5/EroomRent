import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const OwnerPlans = () => {
  const proceedToPay = () => {
    alert("Proceed To Payment");
  };
  return (
    <Wrapper>
      <section style={{ marginTop: 80, height: "100vh" }}>
        <div
          className="row justify-content-center"
          id="bg-gradient"
          style={{ height: "80vh" }}
        >
          <div className="col-sm-11 py-2">
            {/* <!-- Heading --> */}
            <div className="d-sm-flex justify-content-between align-items-start">
              <div className="d-flex flex-column justify-content-start align-items-start text-left">
                <h3 className="text-dark font-weight-normal">
                  Get Tenants Quickly.
                  <span className="text-dark fow-600">Save Upto 50k</span> on
                  brokerage.
                </h3>
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fas fa-star" style={{ color: "#ffcd3c" }}></i>
                  <i className="fas fa-star" style={{ color: "#ffcd3c" }}></i>
                  <i className="fas fa-star" style={{ color: "#ffcd3c" }}></i>
                  <i className="fas fa-star" style={{ color: "#ffcd3c" }}></i>
                  <i className="fas fa-star" style={{ color: "#ffcd3c" }}></i>
                  <span className="ml-4 fos-18">
                    Trusted by <span className="fow-600">3 Lacs+</span>
                    People like you!
                  </span>
                </div>
              </div>              
            </div>
            {/* <!-- Plan Cards --> */}
            <div className="row my-5">
              <div className="col-sm-12 px-0">
                <div className="card border-0" id="bg-gradient">
                  <div className="card-header pb-0 border-0 px-0">
                    <ul
                      className="nav nav-tabs d-sm-flex justify-content-center align-items-center"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item " role="presentation">
                        <button
                          className="nav-link active font-weight-bold"
                          id="room-tab"
                          style={{ padding: "0.5rem" }}
                          data-toggle="tab"
                          data-target="#room"
                          type="button"
                          role="tab"
                          aria-controls="room"
                          aria-selected="true"
                        >
                          <div
                            className="card bg-white bor-radius-10 border-secondary align-items-stretch"
                            style={{
                              width: 260,
                              height: 180,
                              position: "relative",
                            }}
                          >
                            <span
                              className="bor-gold p-1 text-gold"
                              style={{
                                position: "absolute",
                                fontSize: 11,
                                right: 10,
                                top: "-7%",
                                backgroundColor: "#FFF7D4",
                                borderRadius: 10,
                              }}
                            >
                              ON CALL ASSISTANCE
                            </span>
                            <div className="card-body text-left">
                              <h6>Relax Plan</h6>
                              <h6>
                                ₹ 2,999 <small>+18% GST</small>
                              </h6>
                            </div>
                            <div className="card-footer bg-white border-0 my-1">
                              <button
                                onClick={proceedToPay}
                                className="btn btn-outline-secondary w-100 fow-600"
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link font-weight-bold"
                          id="flat-tab"
                          style={{ padding: "0.5rem" }}
                          data-toggle="tab"
                          data-target="#flat"
                          type="button"
                          role="tab"
                          aria-controls="flat"
                          aria-selected="false"
                        >
                          <div
                            className="card bg-white bor-radius-10 border-secondary align-items-stretch"
                            style={{
                              width: 260,
                              height: 180,
                              position: "relative",
                            }}
                          >
                            <span
                              className="bor-gold p-1 text-gold"
                              style={{
                                position: "absolute",
                                fontSize: 11,
                                right: 10,
                                top: "-7%",
                                backgroundColor: "#FFF7D4",
                                borderRadius: 10,
                              }}
                            >
                              HOME VISIT ASSISTANCE
                            </span>
                            <div className="card-body text-left">
                              <h6>SUPER Relax </h6>
                              <h6>
                                ₹ 5,499 <small>+18% GST</small>
                              </h6>
                            </div>
                            <div className="card-footer bg-white border-0 my-1">
                              <button
                                onClick={proceedToPay}
                                className="btn btn-outline-secondary w-100 fow-600"
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link font-weight-bold"
                          id="hostel-tab"
                          style={{ padding: "0.5rem" }}
                          data-toggle="tab"
                          data-target="#hostel"
                          type="button"
                          role="tab"
                          aria-controls="hostel"
                          aria-selected="false"
                        >
                          <div
                            className="card bg-white bor-radius-10 border-secondary align-items-stretch"
                            style={{
                              width: 260,
                              height: 180,
                              position: "relative",
                            }}
                          >
                            <span
                              className="bor-gold p-1 text-gold"
                              style={{
                                position: "absolute",
                                fontSize: 11,
                                right: 10,
                                top: "-7%",
                                backgroundColor: "#FFF7D4",
                                borderRadius: 10,
                              }}
                            >
                              100% GUARANTEE{" "}
                            </span>
                            <div className="card-body text-left">
                              <h6>Money Back</h6>
                              <h6>
                                ₹ 6,499 <small>+18% GST</small>
                              </h6>
                            </div>
                            <div className="card-footer bg-white border-0 my-1">
                              <button
                                onClick={proceedToPay}
                                className="btn btn-outline-secondary w-100 fow-600"
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link font-weight-bold"
                          id="pg-tab"
                          style={{ padding: "0.5rem" }}
                          data-toggle="tab"
                          data-target="#pg"
                          type="button"
                          role="tab"
                          aria-controls="pg"
                          aria-selected="false"
                        >
                          <div
                            className="card bg-white bor-radius-10 border-secondary align-items-stretch"
                            style={{
                              width: 260,
                              height: 180,
                              position: "relative",
                            }}
                          >
                            <span
                              className="bor-gold p-1 text-gold"
                              style={{
                                position: "absolute",
                                fontSize: 11,
                                right: 10,
                                top: "-7%",
                                backgroundColor: "#FFF7D4",
                                borderRadius: 10,
                              }}
                            >
                              FASTEST CLOSURE{" "}
                            </span>
                            <div className="card-body text-left">
                              <h6>Relax Plan</h6>
                              <h6>
                                ₹ 9,999 <small>+18% GST</small>
                              </h6>
                            </div>
                            <div className="card-footer bg-white border-0 my-1">
                              <button
                                onClick={proceedToPay}
                                className="btn btn-outline-secondary w-100 fow-600"
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="tab-content px-3" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="room"
                        role="tabpanel"
                        aria-labelledby="room-tab"
                      >
                        <div className="row justify-content-center align-items-center">
                          <div className="col-sm-11 border">
                            <div className="row my-4">
                              <div className="col-sm-4">
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-calendar-day fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    <b>45</b> Days <br /> Plan Validity
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-clipboard-list fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Top Slot Listing for <br />
                                    5x more visibility
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-headset fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Relationship Manager (RM)-
                                    <br />
                                    Super Fast Closure
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-file-contract fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Rental Agreement <br /> home delivered
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div
                                  className="d-flex justify-content-start align-items-center"
                                  style={{ opacity: 0.5 }}
                                >
                                  <i className="fas fa-money-bill fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Guaranteed tenants <br />
                                    or 100% Moneyback
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-bullhorn fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Property promotion on <br />
                                    website
                                  </p>
                                </div>
                                <div
                                  className="d-flex justify-content-start align-items-center"
                                  style={{ opacity: 0.5 }}
                                >
                                  <i className="fas fa-camera-retro fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Photoshoot of <br />
                                    your property
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-lock fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Privacy of your phone <br />
                                    number
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div
                                  className="d-flex justify-content-start align-items-center"
                                  style={{ opacity: 0.5 }}
                                >
                                  <i className="fas fa-user-tie fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Personal <br />
                                    Field Assistant
                                  </p>
                                </div>
                                <div
                                  className="d-flex justify-content-start align-items-center"
                                  style={{ opacity: 0.5 }}
                                >
                                  <i className="fas fa-laptop-house fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Showing property <br />
                                    on your behalf
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fab fa-facebook fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Facebook Marketing of <br />
                                    Your property
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="flat"
                        role="tabpanel"
                        aria-labelledby="flat-tab"
                      >
                        <div className="row justify-content-center align-items-center">
                          <div className="col-sm-11 border">
                            <div className="row my-4">
                              <div className="col-sm-4">
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-calendar-day fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    <b>45</b> Days <br /> Plan Validity
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-clipboard-list fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Top Slot Listing for <br />
                                    5x more visibility
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-headset fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Relationship Manager (RM)-
                                    <br />
                                    Super Fast Closure
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-file-contract fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Rental Agreement <br /> home delivered
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div
                                  className="d-flex justify-content-start align-items-center"
                                  style={{ opacity: 0.5 }}
                                >
                                  <i className="fas fa-money-bill fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Guaranteed tenants <br />
                                    or 100% Moneyback
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-bullhorn fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Property promotion on <br />
                                    website
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-camera-retro fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Photoshoot of <br />
                                    your property
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-lock fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Privacy of your phone <br />
                                    number
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-user-tie fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Personal <br />
                                    Field Assistant
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-laptop-house fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Showing property <br />
                                    on your behalf
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fab fa-facebook fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Facebook Marketing of <br />
                                    Your property
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="hostel"
                        role="tabpanel"
                        aria-labelledby="hostel-tab"
                      >
                        <div className="row justify-content-center align-items-center">
                          <div className="col-sm-11 border">
                            <div className="row my-4">
                              <div className="col-sm-4">
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-calendar-day fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    <b>60</b> Days <br /> Plan Validity
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-clipboard-list fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Top Slot Listing for <br />
                                    5x more visibility
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-headset fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Relationship Manager (RM)-
                                    <br />
                                    Super Fast Closure
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-file-contract fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Rental Agreement <br /> home delivered
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-money-bill fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Guaranteed tenants <br />
                                    or 100% Moneyback
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-bullhorn fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Property promotion on <br />
                                    website
                                  </p>
                                </div>
                                <div
                                  className="d-flex justify-content-start align-items-center"
                                  style={{ opacity: 0.5 }}
                                >
                                  <i className="fas fa-camera-retro fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Photoshoot of <br />
                                    your property
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-lock fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Privacy of your phone <br />
                                    number
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div
                                  className="d-flex justify-content-start align-items-center"
                                  style={{ opacity: 0.5 }}
                                >
                                  <i className="fas fa-user-tie fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Personal <br />
                                    Field Assistant
                                  </p>
                                </div>
                                <div
                                  className="d-flex justify-content-start align-items-center"
                                  style={{ opacity: 0.5 }}
                                >
                                  <i className="fas fa-laptop-house fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Showing property <br />
                                    on your behalf
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fab fa-facebook fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Facebook Marketing of <br />
                                    Your property
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pg"
                        role="tabpanel"
                        aria-labelledby="pg-tab"
                      >
                        <div className="row justify-content-center align-items-center">
                          <div className="col-sm-11 border">
                            <div className="row my-4">
                              <div className="col-sm-4">
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-calendar-day fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    <b>60</b> Days <br /> Plan Validity
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-clipboard-list fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Top Slot Listing for <br />
                                    5x more visibility
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-headset fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Relationship Manager (RM)-
                                    <br />
                                    Super Fast Closure
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-file-contract fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Rental Agreement <br /> home delivered
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-money-bill fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Guaranteed tenants <br />
                                    or 100% Moneyback
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-bullhorn fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Property promotion on <br />
                                    website
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-camera-retro fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Photoshoot of <br />
                                    your property
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-lock fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Privacy of your phone <br />
                                    number
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-user-tie fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Personal <br />
                                    Field Assistant
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fas fa-laptop-house fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    {" "}
                                    Showing property <br />
                                    on your behalf
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                  <i className="fab fa-facebook fos-25"></i>
                                  <p className="ml-3 fos-14">
                                    Facebook Marketing of <br />
                                    Your property
                                  </p>
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
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 300 }}>
        {/* <!-- Carousel --> */}
        <div className="row d-sm-flex justify-content-center align-items-center">
          <div className="col-sm-4">
            <div id="demo" className="carousel slide" data-ride="carousel">
              {/* <!-- Indicators --> */}
              <ul className="carousel-indicators" style={{ top: "90%" }}>
                <li
                  data-target="#demo"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              {/* <!-- The slideshow --> */}
              <div className="carousel-inner">
                <div
                  className="carousel-item active py-5 px-3"
                  id="bg-gradient"
                >
                  <div className="text-center">
                    <img src="/images/man.png" alt="Person" />
                    <p>
                      EroomRent customer service was impressively prompt and
                      friendly. Listing my flat on rent was a memorable
                      experience overall.
                    </p>
                    <p className="text-success">#ZeroBrokerage</p>
                  </div>
                </div>
                <div className="carousel-item py-5 px-3" id="bg-gradient">
                  <div className="text-center">
                    <img src="/images/man.png" alt="Person" />
                    <p>
                      EroomRent provided a memorable experience with prompt
                      customer service, making flat listing and tenant finding
                      seamless.
                    </p>
                    <p className="text-success">#ZeroBrokerage</p>
                  </div>
                </div>
                <div className="carousel-item py-5 px-3" id="bg-gradient">
                  <div className="text-center">
                    <img src="/images/man.png" alt="Person" />
                    <p>
                      EroomRent premium plan Helped me get the best deal For a
                      PG that too in a very short time!
                    </p>
                    <p className="text-success">#ZeroBrokerage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- FAQs --> */}
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-sm-10 py-5 d-flex flex-column justify-content-center align-items-center mt-5">
            <h2 className="my-3">Frequently Asked Questions</h2>
            <div id="accordion" className="accordion w-100">
              <div className="card mb-0 border-0">
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  <a className="card-title fos-15 text-dark font-weight-bold">
                    What will the Relationship Manager do?
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    The relationship manager will handle all enquiries on call
                    and will filter tenants meeting your requirements, so that
                    you can peacefully work &amp; enjoy quality time with
                    friends and family, while your relationship manager is out
                    there searching for an ideal tenant.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  <a className="card-title fos-15 text-dark font-weight-bold">
                    What will happen in case of Social Media Marketing?
                  </a>
                </div>
                <div
                  id="collapseTwo"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Our expert marketing team will design promotional ads for
                    your property and it will be posted through our EroomRent
                    Social media channels like Facebook, which have 250
                    thousand+ active followers.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  <a className="card-title fos-15 text-dark font-weight-bold">
                    How will my property get promoted?
                  </a>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    By subscribing to our subscription you will boost your
                    EroomRent rank and your property will be listed higher on
                    the property listing page.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                >
                  <a className="card-title fos-15 text-dark font-weight-bold">
                    Are there any hidden charges?
                  </a>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    There are no hidden charges. No extra amount will be charged
                    for the above mentioned services, and you save thousands on
                    brokerage.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFive"
                >
                  <a className="card-title fos-15 text-dark font-weight-bold">
                    What is the process of making rental agreement?
                  </a>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    You can make your rental agreement by following just 3 easy
                    steps. Enter rental information and an appointment for
                    biometric registration will be scheduled, as per your
                    convenience. Our team will visit your property and the hard
                    copy of your e-stamped rental agreement will be delivered to
                    your doorstep. To create your own rental agreement, click
                    here
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSix"
                >
                  <a className="card-title fos-15 text-dark font-weight-bold">
                    How will I get faster closures?
                  </a>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Your RM will find tenants for you from our 1 million+
                    monthly active users. He will shortlist tenants based on
                    your requirement and you just have to select your ideal
                    tenant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default OwnerPlans;

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

  #lts-none li {
    list-style-type: none;
    text-decoration: none;
    margin-left: 4rem;
    font-size: 14px;
  }

  #bg-gradient {
    background-image: linear-gradient(
      to bottom,
      #ffffff,
      #f9f9f9,
      #f3f3f3,
      #eeeeee,
      #e8e8e8
    );
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  #bg-gradient .nav-tabs .nav-link.active {
    background-color: white;
    color: black;
    border: none;
    box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
  }

  .nav-link {
    color: black;
    font-weight: 600;
  }

  .nav-link:hover {
    color: black;
  }
`;
