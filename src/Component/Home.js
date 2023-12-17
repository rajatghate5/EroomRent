import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [propertyData, setPropertyData] = useState("");
  const [subPropertyData, setSubPropertyData] = useState("");
  const location = useRef();
  const tenantLoggedIn = useSelector(
    (state) => state.detailReducer.tenantLoggedIn
  );

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/locations")
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          setSuggestions(res.data.suggestions);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
    if (input) {
      const filtered = suggestions.filter((data) =>
        data.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (selectedValue) => {
    setUserInput(selectedValue);
    setShowSuggestions(false);
  };

  const [display, setDisplay] = useState({
    disRoom: "block",
    disFlat: "none",
    disPg: "none",
    disHostel: "none",
  });

  const categoryMap = {
    room: "disRoom",
    flat: "disFlat",
    pg: "disPg",
    hostel: "disHostel",
  };

  const radioCheck = (e) => {
    const category = e.target.defaultValue;
    setPropertyData(e.target.defaultValue);
    const newState = Object.fromEntries(
      Object.entries(display).map(([key, value]) => [
        key,
        key === categoryMap[category] ? "block" : "none",
      ])
    );
    setDisplay(newState);
  };

  return (
    <Wrapper>
      <section>
        {/* <!-- Main Content --> */}
        <div
          className="row justify-content-center"
          style={{ height: "80vh", marginTop: "80" }}
        >
          <div className="col-sm-6 p-2">
            <div className="card text-center border-0">
              <h2 className="card-title text-secondary my-5">
                Find Room|Flats|Hostel|PG in easiest way
              </h2>
              <div className="card-body p-0">
                <div className="card text-center justify-content-center align-items-center border-0 p-0">
                  {/* <!-- Title --> */}
                  <div className="card-header text-center bg-white border-0 pb-0">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item border" role="presentation">
                        <button
                          className="nav-link active font-weight-bold"
                          id="pills-home-tab"
                          data-toggle="pill"
                          data-target="#rent"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Rent
                        </button>
                      </li>
                      <li className="nav-item border" role="presentation">
                        <button
                          className="nav-link font-weight-bold"
                          id="pills-profile-tab"
                          data-toggle="pill"
                          data-target="#commercial"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Commercial
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body p-0 w-100">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="rent"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        {/* <!-- Search Bars --> */}
                        <div className="card-body mx-0 px-0 py-0">
                          {/* <!-- Search Bar --> */}
                          <div className="row mx-0">
                            <div className="col-sm-12 w-100 mx-0 px-0">
                              <div
                                className="input-group"
                                style={{ height: 45 }}
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search Area In Indore"
                                  aria-label="Text input with dropdown button"
                                  style={{
                                    height: 45,
                                    paddingLeft: "1.2rem",
                                  }}
                                  value={userInput}
                                  onChange={handleInputChange}
                                  ref={location}
                                />
                                <div className="input-group-append">
                                  <Link
                                    to={
                                      tenantLoggedIn
                                        ? "/tenant/searched"
                                        : "/searched"
                                    }
                                    className="btn btn-gold text-light font-weight-bold d-flex justify-content-center align-items-center"
                                    type="button"
                                    id="button-addon2"
                                    state={{
                                      customLocation: location.current?.value,
                                      propertyData,
                                      subPropertyData,
                                    }}
                                  >
                                    <i
                                      className="fas fa-search px-1"
                                      aria-hidden="true"
                                    ></i>
                                    Search
                                  </Link>
                                </div>
                              </div>
                              {showSuggestions && (
                                <ul className="list-group border border-muted">
                                  {filteredSuggestions.map(
                                    (suggestion, index) => (
                                      <li
                                        key={index}
                                        className="list-group-item text-left suggestion-item text-capitalize"
                                        onClick={() =>
                                          selectSuggestion(suggestion)
                                        }
                                      >
                                        {suggestion}
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </div>
                          </div>

                          {/* <!-- Radio Buttons & Dropdown Rent --> */}
                          <div className="d-flex justify-content-start align-items-center border py-3 px-2">
                            <div
                              className="d-flex flex-wrap justify-content-center align-items-center px-2 w-75"                              
                              onInput={(e) => radioCheck(e)}                              
                              style={{gap: '1.2rem'}}
                            >
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  id="room"
                                  name="property-rent-category"
                                  defaultValue="room"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="room"
                                >
                                  Room
                                </label>
                              </div>
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  id="flat"
                                  name="property-rent-category"
                                  defaultValue="flat"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="flat"
                                >
                                  Flat
                                </label>
                              </div>
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  id="pg"
                                  name="property-rent-category"
                                  defaultValue="pg"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="pg"
                                >
                                  PG
                                </label>
                              </div>
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  id="hostel"
                                  name="property-rent-category"
                                  defaultValue="hostel"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="hostel"
                                >
                                  Hostel
                                </label>
                              </div>
                            </div>
                            <div className="w-25">
                              {["room", "flat", "pg", "hostel"].map(
                                (category, index) => (
                                  <select
                                    key={index}
                                    className="form-control"
                                    id={`exampleFormControlSelect${index + 1}`}
                                    style={{
                                      display: display[categoryMap[category]],
                                    }}
                                    onChange={(e) =>
                                      setSubPropertyData(e.target.value)
                                    }
                                  >
                                    {category === "room" && (
                                      <>
                                        <option value="type" disabled selected>
                                          Room Type
                                        </option>
                                        <option value="1rk">1 RK</option>
                                        <option value="1bhk">1 BHK</option>
                                        <option value="2bhk">2 BHK</option>
                                        <option value="3bhk">3 BHK</option>
                                        <option value="4bhk">4 BHK</option>
                                        <option value="4+bhk">4+ BHK</option>
                                      </>
                                    )}

                                    {category === "flat" && (
                                      <>
                                        <option value="type" disabled selected>
                                          Flat Type
                                        </option>
                                        <option value="1rk">1 RK</option>
                                        <option value="1bhk">1 BHK</option>
                                        <option value="2bhk">2 BHK</option>
                                        <option value="3bhk">3 BHK</option>
                                        <option value="4bhk">4 BHK</option>
                                        <option value="4+bhk">4+ BHK</option>
                                      </>
                                    )}
                                    {category === "pg" && (
                                      <>
                                        <option value="type" disabled selected>
                                          PG Type
                                        </option>
                                        <option value="single bed">
                                          Single Bed
                                        </option>
                                        <option value="double sharing">
                                          Double Sharing
                                        </option>
                                        <option value="triple sharing">
                                          Triple Sharing
                                        </option>
                                        <option value="four sharing">
                                          Four Sharing
                                        </option>
                                      </>
                                    )}
                                    {category === "hostel" && (
                                      <>
                                        <option value="type" disabled selected>
                                          Hostel Type
                                        </option>
                                        <option value="single bed">
                                          Single Bed
                                        </option>
                                        <option value="double sharing">
                                          Double Sharing
                                        </option>
                                        <option value="triple sharing">
                                          Triple Sharing
                                        </option>
                                        <option value="four sharing">
                                          Four Sharing
                                        </option>
                                      </>
                                    )}
                                  </select>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="commercial"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div className="card-body mx-0 px-0 py-0">
                          {/* <!-- Search Bar --> */}
                          <div className="row mx-0">
                            <div className="col-sm-12 w-100 mx-0 px-0">
                              <div
                                className="input-group"
                                style={{ height: 45 }}
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search Area In Indore"
                                  aria-label="Text input with dropdown button"
                                  style={{
                                    height: 45,
                                    paddingLeft: "1.2rem",
                                  }}
                                  value={userInput}
                                  onChange={handleInputChange}
                                />
                                <div className="input-group-append">
                                  <button
                                    className="btn btn-gold text-light font-weight-bold"
                                    type="button"
                                    id="button-addon2"
                                  >
                                    <i
                                      className="fas fa-search px-1"
                                      aria-hidden="true"
                                    ></i>
                                    Search
                                  </button>
                                </div>
                              </div>
                              {showSuggestions && (
                                <ul className="list-group border border-muted">
                                  {filteredSuggestions.map(
                                    (suggestion, index) => (
                                      <li
                                        key={index}
                                        className="list-group-item text-left suggestion-item"
                                        onClick={() =>
                                          selectSuggestion(suggestion)
                                        }
                                      >
                                        {suggestion}
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </div>
                          </div>

                          {/* <!-- Radio Buttons & Dropdown Commercial --> */}
                          <div className="row border mx-0 border">
                            <div className="col-sm-12">
                              <form className="py-3 text-left d-sm-flex justify-content-start align-items-center">
                                {/* <!-- Radio Button --> */}

                                {/* <!-- Property type Commercial --> */}
                                <div
                                  className="d-flex flex-wrap justify-content-start align-items-center"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <div className="custom-control d-inline custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="office"
                                      name="property-commercial-category"
                                      defaultValue="office"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="office"
                                    >
                                      Office
                                    </label>
                                  </div>
                                  <div className="custom-control d-inline custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="rest&cafe"
                                      name="property-commercial-category"
                                      defaultValue="rest&cafe"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="rest&cafe"
                                    >
                                      Restaurant and Cafe
                                    </label>
                                  </div>
                                  <div className="custom-control d-inline custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="shop"
                                      name="property-commercial-category"
                                      defaultValue="shop"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="shop"
                                    >
                                      Shop
                                    </label>
                                  </div>
                                  <div className="custom-control d-inline custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="showroom"
                                      name="property-commercial-category"
                                      defaultValue="showroom"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="showroom"
                                    >
                                      Showroom
                                    </label>
                                  </div>
                                  <div className="custom-control d-inline custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="industrial"
                                      name="property-commercial-category"
                                      defaultValue="industrial"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="industrial"
                                    >
                                      Industrial
                                    </label>
                                  </div>
                                  <div className="custom-control d-inline custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="god/var"
                                      name="property-commercial-category"
                                      defaultValue="god/var"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="god/var"
                                    >
                                      Godown &amp; Warehouse
                                    </label>
                                  </div>
                                  <div className="custom-control d-inline custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="other"
                                      name="property-commercial-category"
                                      defaultValue="other"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="other"
                                    >
                                      Other Buss.
                                    </label>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Property Owner --> */}
              <div className="card-footer border-0 bg-white">
                <div className="row justify-content-center">
                  <div className="col-sm-6">
                    <div className="d-flex flex-column mt-5 mb-0">
                      <span className="text-secondary">
                        Are you a Property Owner?
                      </span>
                      <Link
                        to="/postyourproperty"
                        className="btn btn-success mt-3"
                      >
                        Post your add here
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Cards --> */}
        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col-sm-4">
            <div className="card border-0 mx-auto" style={{ width: "18rem" }}>
              <img
                className="card-img-top img-fluid w-50 mx-auto my-2"
                src="/images/person.svg"
                alt="Person"
              />
              <div className="card-body">
                <h4 className="card-title">Create Your Account</h4>
                <p className="card-text">
                  Sign up as a property owner or tenant .
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card border-0 mx-auto" style={{ width: "18rem" }}>
              <img
                className="card-img-top img-fluid w-50 mx-auto my-2"
                src="/images/location.svg"
                alt="Location"
              />
              <div className="card-body">
                <h4 className="card-title">Search Your Choice</h4>
                <p className="card-text">
                  Search your requirements from find room options
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card border-0 mx-auto" style={{ width: "18rem" }}>
              <img
                className="card-img-top img-fluid w-50 mx-auto my-2"
                src="/images/booking.svg"
                alt="Booking"
              />
              <div className="card-body">
                <h4 className="card-title">Manage Booking</h4>
                <p className="card-text">
                  You can book property free and get all details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Why Choose Us --> */}
        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col-sm-12">
            {/* <!-- Heading --> */}
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2>Why Choose Us</h2>
              </div>
            </div>
            {/* <!-- Icons --> */}
            <div className="row">
              <div className="col-sm-12 py-5">
                <div className="card-deck">
                  <div className="card bg-white border-0">
                    <div className="card-body text-center">
                      <img
                        className="card-img-top img-fluid w-25 mx-auto my-2"
                        src="/images/businessman.png"
                        alt="Buisnessman"
                      />
                      <h6 className="card-title">We are Professional</h6>
                    </div>
                  </div>
                  <div className="card bg-white border-0">
                    <div className="card-body text-center">
                      <img
                        className="card-img-top img-fluid w-25 mx-auto my-2"
                        src="/images/support.png"
                        alt="Support"
                      />
                      <h6 className="card-title">Best Service Guarantee</h6>
                    </div>
                  </div>
                  <div className="card bg-white border-0">
                    <div className="card-body text-center">
                      <img
                        className="card-img-top img-fluid w-25 mx-auto my-2"
                        src="/images/security.png"
                        alt="Security"
                      />
                      <h6 className="card-title">We are Trusted & Secured</h6>
                    </div>
                  </div>
                  <div className="card bg-white border-0">
                    <div className="card-body text-center">
                      <img
                        className="card-img-top img-fluid w-25 mx-auto my-2"
                        src="/images/24-7.png"
                        alt="24-7"
                      />
                      <h6 className="card-title">Online Support 24/7</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Difference --> */}
        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col-sm-12">
            {/* <!-- Heading --> */}
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2>We Make A Difference</h2>
              </div>
            </div>
            {/* <!-- Icons --> */}
            <div className="row">
              <div className="col-sm-12 py-5">
                <div className="card-deck">
                  <div className="card bg-white border-0">
                    <div className="card-body text-center">
                      <div
                        className="bor-gold d-flex justify-content-center align-items-center mx-auto"
                        style={{ width: 200, height: 200, borderRadius: "50%" }}
                      >
                        <h1 className="card-title text-gold">
                          <i className="fas fa-rupee-sign"></i>
                          130cr+
                        </h1>
                      </div>
                      <h5 className="card-text mt-3">Less Brokrage</h5>
                    </div>
                  </div>
                  <div className="card bg-white border-0">
                    <div className="card-body text-center">
                      <div
                        className="bor-gold d-flex justify-content-center align-items-center mx-auto"
                        style={{ width: 200, height: 200, borderRadius: "50%" }}
                      >
                        <h1 className="card-title text-gold">30Lakh+</h1>
                      </div>
                      <h5 className="card-text mt-3">
                        Costumers Connected Monthly
                      </h5>
                    </div>
                  </div>
                  <div className="card bg-white border-0">
                    <div className="card-body text-center">
                      <div
                        className="bor-gold d-flex justify-content-center align-items-center mx-auto"
                        style={{ width: 200, height: 200, borderRadius: "50%" }}
                      >
                        <h1 className="card-title text-gold">2Lakh+</h1>
                      </div>
                      <h5 className="card-text mt-3">New Listings Monthly</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Feedback --> */}
        <div className="row px-0" style={{ backgroundColor: "#384d6c" }}>
          <div className="col-sm-12">
            {/* <!-- Title --> */}
            <div className="row justify-content-center align-items-center my-5">
              <div className="col-sm-6 text-center">
                <h2 className="text-light">Our Costumers Loves Us</h2>
              </div>
            </div>

            {/* <!-- IFrame YouTube Video --> */}
            <div className="row justify-content-center align-items-center">
              <div className="col-sm-5" style={{ height: 300 }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/0ChlgxhXVws"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* <!-- Carousel --> */}
            <div className="row justify-content-center align-items-center mt-5 p-0">
              <div className="col-sm-12 px-5">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      {/* <!-- Cards --> */}
                      <div className="card-deck my-5">
                        {/* <!-- Card 1--> */}
                        <div className="card bg-light">
                          <div className="card-header d-sm-flex border-0 bg-light">
                            <i className="fas fa-user fa-2x mr-2"></i>
                            <span>
                              <p className="text-dark my-0">
                                Balasubramnayam K.c.
                              </p>
                              <div className="d-sm-flex flex-row">
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </span>
                          </div>
                          <div className="card-body text-center">
                            <h5 className="card-text font-weight-bold">
                              Appreciate Positive and quick
                            </h5>
                            <p className="card-text">
                              "RMs fro ERoomRent team, I really would like to
                              appreciate positive and quick responses from you
                              guys. Thank you for excellent service through paid
                              plans of ERoomRent.com"
                            </p>
                          </div>
                        </div>
                        {/* <!-- Card 2--> */}
                        <div className="card bg-light">
                          <div className="card-header d-sm-flex border-0 bg-light">
                            <i className="fas fa-user fa-2x mr-2"></i>
                            <span>
                              <p className="text-dark my-0">Tiasha</p>
                              <div className="d-sm-flex flex-row">
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </span>
                          </div>
                          <div className="card-body text-center">
                            <h5 className="card-text font-weight-bold">
                              Best Option
                            </h5>
                            <p className="card-text">
                              "The service was great and very professional. I
                              went with the Relax plan. My RM Sayantan Gupta is
                              really efficient. He noted my requirements quite
                              well and suggested me a list of options. I
                              shortlisted one from them and and in just one
                              visit, I was able to finalize..."
                            </p>
                          </div>
                        </div>
                        {/* <!-- Card 3--> */}
                        <div className="card bg-light">
                          <div className="card-header d-sm-flex border-0 bg-light">
                            <i className="fas fa-user fa-2x mr-2"></i>
                            <span>
                              <p className="text-dark my-0">Anoop Nair</p>
                              <div className="d-sm-flex flex-row">
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </span>
                          </div>
                          <div className="card-body text-center">
                            <h5 className="card-text font-weight-bold">
                              Excellent Service
                            </h5>
                            <p className="card-text">
                              "Excellent service and an equally involved team. I
                              opted for the Relax plan and got a good deal.
                              Highly recommended"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      {/* <!-- Cards --> */}
                      <div className="card-deck my-5">
                        {/* <!-- Card 1--> */}
                        <div className="card bg-light">
                          <div className="card-header d-sm-flex border-0 bg-light">
                            <i className="fas fa-user fa-2x mr-2"></i>
                            <span>
                              <p className="text-dark my-0">
                                Shubham Raibhandar
                              </p>
                              <div className="d-sm-flex flex-row">
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </span>
                          </div>
                          <div className="card-body text-center">
                            <h5 className="card-text font-weight-bold">
                              Helps us to find good PG
                            </h5>
                            <p className="card-text">
                              "The site really helps us to find good PG in the
                              least amount of time without any headache of
                              brokerage. I was so scared in indore due to the
                              issues of high deposit as well as brokerage. I was
                              new and had no time."
                            </p>
                          </div>
                        </div>
                        {/* <!-- Card 2--> */}
                        <div className="card bg-light">
                          <div className="card-header d-sm-flex border-0 bg-light">
                            <i className="fas fa-user fa-2x mr-2"></i>
                            <span>
                              <p className="text-dark my-0">Lisa Das</p>
                              <div className="d-sm-flex flex-row">
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </span>
                          </div>
                          <div className="card-body text-center">
                            <h5 className="card-text font-weight-bold">
                              It's a nice experience
                            </h5>
                            <p className="card-text">
                              "It was a nice experience with ERoomRent. They
                              helped me to find a new home to stay as it was
                              difficult for me, as an individual , to find a
                              home with friendly roommates. Thankfully ERoomRent
                              helped me to get one with all kind of facilities"
                            </p>
                          </div>
                        </div>
                        {/* <!-- Card 3--> */}
                        <div className="card bg-light">
                          <div className="card-header d-sm-flex border-0 bg-light">
                            <i className="fas fa-user fa-2x mr-2"></i>
                            <span>
                              <p className="text-dark my-0">Kishore</p>
                              <div className="d-sm-flex flex-row">
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star fos-14"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </span>
                          </div>
                          <div className="card-body text-center">
                            <h5 className="card-text font-weight-bold">
                              Found Great Place to Stay via ERoomRent
                            </h5>
                            <p className="card-text">
                              "Excellent service and an equally involved team. I
                              opted for the Relax plan and got a good deal.
                              Highly recommended"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      {/* <!-- Cards --> */}
                      <div className="card-deck my-5">
                        {/* <!-- Card 1--> */}
                        <div className="card bg-light">
                          <div className="card-header d-sm-flex border-0 bg-light">
                            <i className="fas fa-user fa-2x mr-2"></i>
                            <span>
                              <p className="text-dark my-0">Mohammed Kouse</p>
                              <div className="d-sm-flex flex-row">
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </span>
                          </div>
                          <div className="card-body text-center">
                            <h5 className="card-text font-weight-bold">
                              Good Website
                            </h5>
                            <p className="card-text">
                              "RMs fro ERoomRent team, I really would like to
                              appreciate positive and quick responses from you
                              guys. Thank you for excellent service through paid
                              plans of ERoomRent.com"
                            </p>
                          </div>
                        </div>
                        {/* <!-- Card 2--> */}
                        <div className="card bg-light">
                          <div className="card-header d-sm-flex border-0 bg-light">
                            <i className="fas fa-user fa-2x mr-2"></i>
                            <span>
                              <p className="text-dark my-0">Ayan</p>
                              <div className="d-sm-flex flex-row">
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </span>
                          </div>
                          <div className="card-body text-center">
                            <h5 className="card-text font-weight-bold">
                              Get Genuine and very quick Response
                            </h5>
                            <p className="card-text">
                              "The service was great and very professional. I
                              went with the Relax plan. My RM Sayantan Gupta is
                              really efficient. He noted my requirements quite
                              well and suggested me a list of options. I
                              shortlisted one from them and and in just one
                              visit, I was able to finalize..."
                            </p>
                          </div>
                        </div>
                        {/* <!-- Card 3--> */}
                        <div className="card bg-light">
                          <div className="card-header d-sm-flex border-0 bg-light">
                            <i className="fas fa-user fa-2x mr-2"></i>
                            <span>
                              <p className="text-dark my-0">Prabhu Dev</p>
                              <div className="d-sm-flex flex-row">
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </span>
                          </div>
                          <div className="card-body text-center">
                            <h5 className="card-text font-weight-bold">
                              Good Website to Find PG and Rooms
                            </h5>
                            <p className="card-text">
                              "Excellent service and an equally involved team. I
                              opted for the Relax plan and got a good deal.
                              Highly recommended"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                    style={{ left: -50 }}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                    style={{ right: -50 }}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Testimonials --> */}
            <div className="row justify-content-center align-items-center">
              <div className="col-sm-12 text-center pb-3">
                <Link to="/testimonial" className="text-light">
                  More Testimonials
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Download --> */}
        <div className="row">
          <div className="col-sm-12 text-center mt-5 d-sm-flex flex-column align-items-center">
            <div className="text-left my-4">
              <h3 className="text-gold">Find A New Room On The Go</h3>
              <h4 className="text-dark mt-4">Download our app</h4>
              <h5 className="class text-dark font-weight-normal">
                Where convenience is at your fingertip
              </h5>
              <img
                src="/images/playstore.png"
                className="mt-5"
                alt="PlayStore"
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  .nav-pills .nav-link.active {
    background-color: goldenrod;
    color: white;
  }
  .list-group-item {
    border: none;
    padding: 0.5rem 1.25rem;
  }
`;
