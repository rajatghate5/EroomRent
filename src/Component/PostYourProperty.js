import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const PostYourProperty = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState({});
  const [files, setFiles] = useState([]);
  const [propertyData, setPropertyData] = useState("");
  const [subPropertyData, setSubPropertyData] = useState("");

  const inputRefs = {
    nameRef: useRef(data.name),
    emailRef: useRef(data.email),
    mobileRef: useRef(data.mobno),
    imageRef: useRef(null),
    depositRef: useRef(null),
    rentRef: useRef(null),
    areaRef: useRef(null),
    parkingRef: useRef(null),
    buildingAgeRef: useRef(null),
    balconyRef: useRef(null),
    furnishingRef: useRef(null),
    bathroomRef: useRef(null),
    facingRef: useRef(null),
    nonVegAllowedRef: useRef(null),
    waterRef: useRef(null),
    securityRef: useRef(null),
    floorRef: useRef(null),
    addressRef: useRef(null),
    pincodeRef: useRef(null),
    locationRef: useRef(null),
    tenantTypeRef: useRef(null),
    availableDateRef: useRef(null),
    propertyTypeRef: useRef(null),
    subCategoryRefs: useRef(null),
    descriptionRef: useRef(null),
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

  const userID = useSelector((state) => state.detailReducer.id);
  const ownerLoggedIn = useSelector(
    (state) => state.detailReducer.ownerLoggedIn
  );
  const brokerLoggedIn = useSelector(
    (state) => state.detailReducer.brokerLoggedIn
  );
  let baseUrl = "";

  if (ownerLoggedIn === true) {
    baseUrl = "http://127.0.0.1:5000/ownersignup/";
  } else {
    baseUrl = "http://127.0.0.1:5000/brokersignup/";
  }

  // Rendering Locations
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

  // Rendering User Data
  useEffect(() => {
    axios(baseUrl + userID)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userID]);

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

  const submitData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(files);
    formData.append("name", inputRefs.nameRef.current.value);
    formData.append("email", inputRefs.emailRef.current.value);
    formData.append("mobile", inputRefs.mobileRef.current.value);
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.append("deposit", inputRefs.depositRef.current.value);
    formData.append("rent", inputRefs.rentRef.current.value);
    formData.append("area", inputRefs.areaRef.current.value);
    formData.append("parking", inputRefs.parkingRef.current.value);
    formData.append("buildingAge", inputRefs.buildingAgeRef.current.value);
    formData.append("balcony", inputRefs.balconyRef.current.value);
    formData.append("furnishing", inputRefs.furnishingRef.current.value);
    formData.append("bathroom", inputRefs.bathroomRef.current.value);
    formData.append("facing", inputRefs.facingRef.current.value);
    formData.append("nonVegAllowed", inputRefs.nonVegAllowedRef.current.value);
    formData.append("water", inputRefs.waterRef.current.value);
    formData.append("security", inputRefs.securityRef.current.value);
    formData.append("floor", inputRefs.floorRef.current.value);
    formData.append("address", inputRefs.addressRef.current.value);
    formData.append("pincode", inputRefs.pincodeRef.current.value);
    formData.append("location", inputRefs.locationRef.current.value);
    formData.append("tenantType", inputRefs.tenantTypeRef.current.value);
    formData.append("availableDate", inputRefs.availableDateRef.current.value);
    formData.append("propertyType", propertyData);
    formData.append("subCategory", subPropertyData);
    formData.append("description", inputRefs.descriptionRef.current.value);
    console.log("Form Data:", formData);
    axios
      .post("http://127.0.0.1:5000/property", formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "1") {
          if (ownerLoggedIn === true) {
            alert("Your Property is posted");
            window.location.href = "/owner/profile";
          } else {
            window.location.href = "/broker/profile";
          }
          console.log(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <section style={{ marginTop: 80 }}>
        {/* Heading */}
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-10 d-sm-flex justify-content-between align-items-center px-0 mb-3">
              <h3 className="text-dark">Rent Your Property</h3>
              <p className="bg-light my-auto p-2 font-weight-normal">
                Looking for a property? <Link to="/login">Click here</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Select Options */}
        <div className="row justify-content-center mb-5">
          <div className="col-sm-10 border">
            <div className="row">
              <div className="col-sm-4 bg-lightest-grey p-5 pb-5 d-sm-flex flex-column justify-content-center">
                <h5 className="text-dark">Why Post Through us?</h5>
                <div className="my-2">
                  <i className="fab fa-creative-commons-nc fa-2x"></i>
                  <span className="font-weight-light ml-2 fos-14">
                    Zero Brokerage
                  </span>
                </div>
                <div className="my-2">
                  <i className="fas fa-running fa-2x"></i>
                  <span className="font-weight-light ml-3 fos-14">
                    Faster Tenants
                  </span>
                </div>
                <div className="my-2">
                  <i className="fas fa-users fos-25"></i>
                  <span className="font-weight-light ml-2 fos-14">
                    10 lac tenants/buyers connections
                  </span>
                </div>
                <h6 className="text-dark mt-5">30 Lac+ Home Owners Trust Us</h6>
                <div id="demo" className="carousel slide" data-ride="carousel">
                  {/* Indicators */}
                  <ul className="carousel-indicators">
                    <li
                      data-target="#demo"
                      data-slide-to={0}
                      className="active"
                    />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                  </ul>
                  {/* The slideshow */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <p className="text-secondary fos-16">
                        EroomRent is a free property ad posting site that i have
                        tried before. I found that. I found that it aids me well
                        and gets the right tenants for my properties. This is
                        the second i am trying them and my expectation was
                        higher.
                      </p>
                      <span className="text-dark font-weight-bold fos-14 pr-2 border-right border-dark">
                        Natrajan
                      </span>
                      <span className="fos-14 ml-2">Pune</span>
                    </div>
                    <div className="carousel-item">
                      <p className="text-secondary fos-16">
                        EroomRent is a free property ad posting site that i have
                        tried before. I found that. I found that it aids me well
                        and gets the right tenants for my properties. This is
                        the second i am trying them and my expectation was
                        higher.
                      </p>
                      <span className="text-dark font-weight-bold fos-14 pr-2 border-right border-dark">
                        Natrajan
                      </span>
                      <span className="fos-14 ml-2">Pune</span>
                    </div>
                    <div className="carousel-item">
                      <p className="text-secondary fos-16">
                        EroomRent is a free property ad posting site that i have
                        tried before. I found that. I found that it aids me well
                        and gets the right tenants for my properties. This is
                        the second i am trying them and my expectation was
                        higher.
                      </p>
                      <span className="text-dark font-weight-bold fos-14 pr-2 border-right border-dark">
                        Natrajan
                      </span>
                      <span className="fos-14 ml-2">Pune</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-8"
                style={{
                  overflowY: "scroll",
                  overflowX: "hidden",
                  height: "100vh",
                }}
              >
                <h4 className="m-2 text-center">Add Property</h4>
                <form
                  className="w-100 d-sm-flex flex-row flex-wrap justify-content-start align-items-start py-3"
                  onSubmit={submitData}
                  encType="mutlipart/form-data"
                >
                  <input
                    type="text"
                    className="form-control w-45 w--100 m-2"
                    id="name"
                    placeholder="Enter Name"
                    defaultValue={data.name}
                    ref={inputRefs.nameRef}
                    required={ownerLoggedIn || brokerLoggedIn}
                  />
                  <input
                    type="email"
                    className="form-control w-45 w--100 m-2"
                    id="email"
                    placeholder="Enter Email"
                    defaultValue={data.email}
                    ref={inputRefs.emailRef}
                    required={ownerLoggedIn || brokerLoggedIn}
                  />
                  <div className="input-group w-45 w--100 m-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text">+91</span>
                    </div>
                    <input
                      type="text"
                      className="form-control border-muted"
                      placeholder="Enter Mobile Number"
                      aria-label="Text input with dropdown button"
                      defaultValue={data.mobno}
                      ref={inputRefs.mobileRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    />
                  </div>
                  <input
                    type="file"
                    className="form-control-file border w-45 w--100 m-2"
                    ref={inputRefs.imageRef}
                    onChange={(e) => setFiles(e.target.files)}
                    multiple
                    required={ownerLoggedIn || brokerLoggedIn}
                  />
                  <div className="input-group w-45 w--100 m-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text">₹</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Deposit"
                      ref={inputRefs.depositRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    />
                  </div>
                  <div className="input-group w-45 w--100 m-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text">₹</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Rent"
                      ref={inputRefs.rentRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control w-45 w--100 m-2"
                    id="builtup"
                    placeholder="Enter Builtup Area(sqft)"
                    ref={inputRefs.areaRef}
                    required={ownerLoggedIn || brokerLoggedIn}
                  />
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      name="parking"
                      id="parking"
                      className="form-control"
                      ref={inputRefs.parkingRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    >
                      <option disabled selected>
                        Parking
                      </option>
                      <option value="bike">Bike</option>
                      <option value="car">Car</option>
                      <option value="bike & car">Bike &amp; Car</option>
                    </select>
                  </div>
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      name="building-age"
                      id="building-age"
                      className="form-control"
                      ref={inputRefs.buildingAgeRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    >
                      <option disabled selected>
                        Age Of Building
                      </option>
                      <option value="0-2 years">0-2 Years</option>
                      <option value="2-4 years">2-4 Years</option>
                      <option value="4-6 years">4-6 Years</option>
                      <option value="6-8 years">6-8 Years</option>
                      <option value="more than 8">More than 8 Years</option>
                    </select>
                  </div>
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      name="balcony"
                      id="balcony"
                      className="form-control"
                      ref={inputRefs.balconyRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    >
                      <option disabled selected>
                        No. of Balcony
                      </option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3+">3+</option>
                    </select>
                  </div>
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      name="furnishing"
                      id="furnishing"
                      className="form-control"
                      ref={inputRefs.furnishingRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    >
                      <option disabled selected>
                        Furnishing
                      </option>
                      <option value="fully furnished ">Fully Furnished</option>
                      <option value="semi furnished">Semi Furnished</option>
                      <option value="unfurnished">Unfurnished</option>
                    </select>
                  </div>
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      name="bathroom"
                      id="bathroom"
                      className="form-control"
                      ref={inputRefs.bathroomRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    >
                      <option disabled selected>
                        No. of Bathroom
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3+">3+</option>
                    </select>
                  </div>
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      name="facing"
                      id="facing"
                      className="form-control"
                      ref={inputRefs.facingRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    >
                      <option disabled selected>
                        Facing
                      </option>
                      <option value="north">North</option>
                      <option value="south">South</option>
                      <option value="east">East</option>
                      <option value="west">West</option>
                    </select>
                  </div>
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      name="non-veg"
                      id="non-veg"
                      className="form-control"
                      ref={inputRefs.nonVegAllowedRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    >
                      <option disabled selected>
                        Non Veg Allowed
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      name="water"
                      id="water"
                      className="form-control"
                      ref={inputRefs.waterRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    >
                      <option disabled selected>
                        Water Supply
                      </option>
                      <option value="corporation">Corporation</option>
                      <option value="borwell">Borewell</option>
                    </select>
                  </div>
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      name="security"
                      id="security"
                      className="form-control"
                      ref={inputRefs.securityRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    >
                      <option disabled selected>
                        Gated Security
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="form-group w-45 w--100 m-2">
                    <input
                      type="number"
                      className="form-control"
                      id="floor"
                      placeholder="Enter No. of Floor"
                      min={0}
                      max={10}
                      ref={inputRefs.floorRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control w-45 w--100 m-2"
                    id="address"
                    placeholder="Enter Address"
                    ref={inputRefs.addressRef}
                    required={ownerLoggedIn || brokerLoggedIn}
                  />
                  <input
                    type="number"
                    className="form-control w-45 w--100 m-2"
                    id="pincode"
                    placeholder="Enter Pincode"
                    ref={inputRefs.pincodeRef}
                    required={ownerLoggedIn || brokerLoggedIn}
                  />
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      ref={inputRefs.locationRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    >
                      <option value selected disabled>
                        Select Location
                      </option>
                      {suggestions.map((area, i) => (
                        <option
                          value={area}
                          className="text-capitalize"
                          key={i}
                        >
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      name="p-tenants"
                      id="p-tenants"
                      className="form-control"
                      ref={inputRefs.tenantTypeRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    >
                      <option disabled selected>
                        Preferred Tenants
                      </option>
                      <option value="all">All</option>
                      <option value="boys">Boys</option>
                      <option value="girls">Girls</option>
                      <option value="family">Family</option>
                    </select>
                  </div>
                  <div className="w--100 w-45 d-flex justify-content-start align-items-center m-2">
                    <span className="w-100 ml-2">Available From</span>
                    <input
                      type="date"
                      className="form-control w-100"
                      id="availability"
                      ref={inputRefs.availableDateRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    />
                  </div>
                  <p className="text-dark font-weight-bold w-100 text-left my-4 pl-2">
                    Property Type
                  </p>
                  {/* Property Type */}
                  <div className="w-45 w--100 m-2">
                    {/* Nav pills */}
                    <ul className="nav nav-pills w-100" role="tablist">
                      <li className="nav-item border w-50 border-muted">
                        <a
                          className="nav-link active text-dark"
                          data-toggle="pill"
                          href="#rent"
                        >
                          Rent
                        </a>
                      </li>
                      <li className="nav-item border w-50 border-muted">
                        <a
                          className="nav-link text-dark"
                          data-toggle="pill"
                          href="#commercial"
                        >
                          Commercial
                        </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content border border-muted h-100">
                      <div id="rent" className="container tab-pane active py-3">
                        <div
                          className="d-flex flex-wrap justify-content-around align-items-center"
                          onInput={(e) => radioCheck(e)}
                        >
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="room"
                              name="property-rent-category"
                              value="room"
                              required={ownerLoggedIn || brokerLoggedIn}
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
                              value="flat"
                              required={ownerLoggedIn || brokerLoggedIn}
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
                              value="pg"
                              required={ownerLoggedIn || brokerLoggedIn}
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
                              value="hostel"
                              required={ownerLoggedIn || brokerLoggedIn}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="hostel"
                            >
                              Hostel
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        id="commercial"
                        className="container tab-pane fade py-3"
                      >
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
                              value="office"
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
                              value="rest&cafe"
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
                              value="shop"
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
                              value="showroom"
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
                              value="industrial"
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
                              value="god/var"
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
                              value="other"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="other"
                            >
                              Other Buss.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub Category */}
                  <div className="w-45 w--100 m-2">
                    <div className="form-group">
                      <div className="card">
                        <div
                          className="card-header bg-white"
                          style={{ padding: "0.35rem" }}
                        >
                          <label
                            htmlFor="exampleFormControlSelect1"
                            className="text-center w-100"
                          >
                            Select Sub Category
                          </label>
                        </div>
                        <div
                          className="card-body"
                          style={{ padding: "0.57rem" }}
                        >
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
                                required={
                                  ownerLoggedIn
                                    ? true
                                    : brokerLoggedIn
                                    ? true
                                    : false
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
                  {/* Description */}
                  <div className="form-group w-75 m-2">
                    <label htmlFor="description">Description:</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      id="description"
                      ref={inputRefs.descriptionRef}
                      required={ownerLoggedIn || brokerLoggedIn}
                    />
                  </div>
                  {/* WhatsApp */}
                  <div className="d-sm-flex w-100 justify-content-start align-items-center m-2">
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
                  {/* Button */}
                  <div className="card-footer border-0 bg-white w-75 m-2 px-0">
                    {ownerLoggedIn ? (
                      <button
                        className="btn btn-gold text-light btn-lg btn-block"
                        type="submit"
                      >
                        Start Posting Your Ad
                      </button>
                    ) : brokerLoggedIn ? (
                      <button
                        className="btn btn-gold text-light btn-lg btn-block"
                        type="submit"
                      >
                        Start Posting Your Ad
                      </button>
                    ) : (
                      <Link
                        className="btn btn-gold text-light btn-lg btn-block"
                        to="/login"
                      >
                        Start Posting Your Ad For Free
                      </Link>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Missed Call */}
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-sm-10">
            <div className="bg-gold text-center text-light py-2 w-100">
              <span>
                <i className="fas fa-phone-volume"></i> Give a missed call to
                +919630623876 to get help with your property listing
              </span>
            </div>
          </div>
        </div>

        {/* Icons */}
        <div className="row">
          <div className="col-sm-12 py-5">
            <div className="card-deck">
              <div className="card bg-white border-0">
                <div className="card-body text-center">
                  <i className="fas fa-phone-slash fa-5x m-2"></i>
                  <h5 className="card-title">No Call From Broker</h5>
                  <p className="card-text fos-14">
                    Your information is kept confidential and you no longer have
                    to worry about call from brokers.
                  </p>
                </div>
              </div>
              <div className="card bg-white border-0">
                <div className="card-body text-center">
                  <i className="fas fa-user-check fa-5x m-2 ml-4"></i>
                  <h5 className="card-title">Verified Tenants</h5>
                  <p className="card-text fos-14">
                    Thanks to our technology, only verified and genuine tenants
                    can call you.
                  </p>
                </div>
              </div>
              <div className="card bg-white border-0">
                <div className="card-body text-center">
                  <i className="fas fa-piggy-bank fa-5x m-2"></i>
                  <h5 className="card-title">Save Brokerage</h5>
                  <p className="card-text fos-14">
                    EroomRent means No Brokerage! Buy yourself a gift
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-11 bg-lightest-grey text-center p-3">
            <h4 className="text-dark">How it Works</h4>
            <div className="card text-left w-75 p-5 mx-auto bg-lightest-grey border-0">
              <div className="card-body d-sm-flex justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center">
                  <div className="col-sm-6">
                    <h5 className="card-title">Simple Listing Process</h5>
                    <p className="card-text">
                      As an owner you can list your property in a few minutes.
                      Just fill out our super simple form. Your property will go
                      live after verification.
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="/images/search.jpg"
                      className="img-fluid"
                      alt="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card text-left w-75 p-5 mx-auto bg-lightest-grey border-0">
              <div className="card-body d-sm-flex justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center">
                  <div className="col-sm-6">
                    <img
                      src="/images/phonecall.jpg"
                      className="img-fluid"
                      alt="Phone-Call"
                    />
                  </div>
                  <div className="col-sm-6">
                    <h5 className="card-title">
                      Tenant Selects Property and Schedules an Appointment
                    </h5>
                    <p className="card-text">
                      If a tenant likes your property they will request for your
                      contact details. Both parties will receive contact
                      information and then arrange for a visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card text-left w-75 p-5 mx-auto bg-lightest-grey border-0">
              <div className="card-body d-sm-flex justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center">
                  <div className="col-sm-6">
                    <h5 className="card-title">Deal Closure</h5>
                    <p className="card-text">
                      Owner and tenant meet to close the deal directly.
                      EroomRent can help create a rental agreement and deliver
                      it to your doorstep.
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="/images/deal.jpg"
                      className="img-fluid"
                      alt="Deals"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post your Property Ad */}
        <div className="row justify-content-center mt-5">
          <div className="col-sm-11 d-sm-flex flex-column justify-content-start align-items-start px-0 mb-3">
            <h4 className="text-dark">Post your Property Ad for Rent</h4>
            <p className="fos-14">
              If you are looking to rent your individual house, flat, or
              commercial property the first thing you need to do is decide how
              to find a tenant. Now, you can’t always depend on your immediate
              contacts to help you get the job done, you need to cast a wider
              net, to get more options and to get better offers.
            </p>
            <p className="fos-14">
              Here are a few frequently asked questions and answers about house
              rent, commercial property rent. This should give you an idea as to
              how simple the process is, and what you need to be aware of.
            </p>
            <div id="accordion" className="accordion w-100">
              <div className="card mb-0 border-0">
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  <a className="card-title text-gold">
                    How do I post my house for rent?
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14">
                    When you decide you want to rent your flat or find a tenant,
                    you need to start by creating a property ad. The ad should
                    have key information like –
                  </p>
                  <ol id="lts-none">
                    <li>
                      <u>About the house </u>
                      <ul>
                        <li>Apartment Type (flat/independent house/villa)</li>
                        <li>House or Apartment Name</li>
                        <li>BHK type (1BHK, 2BHK etc.)</li>
                        <li>Floor (2nd Floor, 3rd Floor)</li>
                        <li>Age of the house</li>
                        <li>Area /size of the house</li>
                      </ul>
                    </li>
                    <li>
                      <u>About the locality</u>
                      <ul>
                        <li>Mention the City</li>
                        <li>Mention the Locality</li>
                        <li>Mention the Street</li>
                      </ul>
                    </li>
                    <li>
                      <u>About the cost</u>
                      <ul>
                        <li>What is the rent amount you’re expecting?</li>
                        <li>What is the deposit amount you’re expecting?</li>
                        <li>Is maintenance included in the rent amount?</li>
                        <li>Is furniture included?</li>
                        <li>Is there Parking?</li>
                      </ul>
                    </li>
                    <li>
                      <u>Other details</u>
                      <ul>
                        <li>Mention when your house is available from</li>
                        <li>
                          Are you looking for families or bachelors? Or anyone?
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  <a className="card-title text-gold">
                    Why should I post my property for rent or sale online?
                  </a>
                </div>
                <div
                  id="collapseTwo"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14">
                    Making a rental advertisement of a flat is very important.
                    With the right ad, you can let anywhere from 100s, to 1000s
                    of people know that you are ready to rent your house. The ad
                    will give them the key information they need and capture
                    their interest.
                    <br />
                    The potential to find a tenant of your liking is larger.
                    Instead of settling for a tenant from 2-3 choices, you can
                    choose the best from a lot more. If you’re looking for a
                    young family, students, IT working professionals, or any
                    other type of tenant, you can find them with the right flat
                    advertisement.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  <a className="card-title text-gold">
                    Is it possible to rent homes without an agent?
                  </a>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Most people think all house renting websites have brokers,
                    and you will lose money when you use them. Most home selling
                    sites, and listing sites even charge money just for listing
                    your home for rent or sale. But, on a website or property
                    app like EroomRent, the whole process of listing your home
                    and finding a tenant is FREE. There are no agents involved.
                    You will talk directly with interested tenants and you
                    control the whole process.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                >
                  <a className="card-title text-gold">
                    How do I rent out a house myself?
                  </a>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Many people wonder, if you don’t use an agent to rent your
                    house, how can you do it on your own? The answer is simple.
                    Just visit any of the free listing sites, especially
                    EroomRent, then create an account, as soon as your account
                    is verified, you can add the important details about your
                    house. You can access this free ad posting site from your
                    desktop or use the mobile app, it is one of the best
                    property apps India, it is also very easy to use.
                    <br />
                    If you still find this process difficult or confusing, you
                    can share your house details on WhatsApp! Just send a text
                    to +91 9630623876
                    <br />
                    You can even give us a call on 9630623876 the experts at
                    EroomRent will note down your details and make a free
                    advertisement for a house for rent. This free ad post will
                    be done in minutes, and from the comfort of your home.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFive"
                >
                  <a className="card-title text-gold">
                    Where can I list a commercial property for rent for free?
                  </a>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 px-4">
                    If you are the owner of commercial property, don’t worry you
                    can post your commercial property for rent for FREE. The
                    EroomRent website and property app will let you post a FREE
                    ad. You need to provide a few details of your commercial
                    property such as –
                  </p>
                  <ol id="lts-none">
                    <li>
                      <u>Property type</u>
                      <ul>
                        <li>Office</li>
                        <li>Co-working space</li>
                        <li>Shop</li>
                        <li>Showroom</li>
                        <li>Godown/warehouse</li>
                        <li>Industrial Building</li>
                        <li>Industrial Shed</li>
                        <li>Floor information (2nd out of 5 floors)</li>
                        <li>Area (sq. ft.)</li>
                        <li>Furniture availability</li>
                        <li>And location (main road, corner property)</li>
                      </ul>
                    </li>
                    <li>
                      <u>About the locality</u>
                      <ul>
                        <li>Mention the Locality</li>
                        <li>Mention the Street</li>
                        <li>
                          Give the exact address and mark the location on a map
                        </li>
                      </ul>
                    </li>
                    <li>
                      <u>About the cost</u>
                      <ul>
                        <li>What is the rent amount you’re expecting?</li>
                        <li>What is the deposit amount you’re expecting?</li>
                        <li>Is maintenance included in the rent amount?</li>
                        <li>Is furniture included?</li>
                        <li>Are these rates negotiable?</li>
                        <li>When is the property available from?</li>
                        <li>
                          What type of business is the property ideal for? E.g.
                          showroom, shop, ATM etc.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <u>Amenities</u>
                      <ul>
                        <li>Does your property have power back up?</li>
                        <li>Does it have a lift?</li>
                        <li>Does it have parking?</li>
                      </ul>
                    </li>
                  </ol>
                  <p className="fos-14 px-4">
                    Talk about where the property is located, is it in a
                    residential area, or shopping mall? And so on. You can even
                    write a small description of your property to give it more
                    character, you can describe all the special features of the
                    property and what makes it stand out.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSix"
                >
                  <a className="card-title text-gold">
                    What is the benefit of posting property ads on EroomRent?
                  </a>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    When you post a property for post an ad for rent of a house
                    on EroomRent, you’ll be connecting to lakhs of potential
                    renters! Apart from this, the whole process of registering
                    and posting an ad for house rent/ house for rent ad/
                    commercial property rental ad is FREE.
                    <br />
                    The other benefit is that you will have experts who can
                    guide you through the process, you have the freedom to
                    decide if you want to do this on your own, or have an expert
                    take over and post the property ad on your behalf.
                    <br />
                    You will be sharing pictures of your house or commercial
                    property; these pictures will help you get up to 10x better
                    responses. In a newspaper or magazine ad, you will not be
                    able to share more than 1-2 pictures, on EroomRent you can
                    upload many pictures and you won’t have to pay anything to
                    attach it to your property ad.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSeven"
                >
                  <a className="card-title text-gold">
                    Can I get additional support from EroomRent?
                  </a>
                </div>
                <div
                  id="collapseSeven"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    If you feel that hiring an agent or broker to rent your
                    house/commercial property is a good idea, because they offer
                    additional services, you’re not wrong. But, EroomRent has
                    the ability and experience to offer you more benefits and
                    services from a team of experienced and knowledgeable
                    people.
                    <br />
                    From assistance with taking pictures, to showing your house
                    on your behalf, to helping you find the right price to rent
                    your property, our team can do it all. You can even boost
                    your property listing, EroomRent can make sure that more
                    people see it and make it a trending listing!
                    <br />
                    The whole process becomes so simple, fast and efficient. You
                    don’t have to do things the old-fashioned way when there is
                    a better way to rent houses faster, the same goes for
                    commercial property.
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
export default PostYourProperty;

const Wrapper = styled.section`
  svg {
    fill: #25d366;
  }

  #d-none {
    display: none;
  }

  #lts-none li {
    list-style-type: none;
    text-decoration: none;
    margin-left: 4rem;
    font-size: 14px;
  }

  .card-header:hover {
    cursor: pointer;
  }

  .nav-pills .nav-link.active {
    border-bottom: 3px solid goldenrod;
  }
`;
