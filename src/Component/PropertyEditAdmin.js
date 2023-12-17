import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const PropertyEditAdmin = () => {
  const propertyID = useLocation().state;
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState({});
  const [files, setFiles] = useState([]);
  const [subCategory, setSubCategory] = useState("");
  const inputRefs = {
    nameRef: useRef(),
    emailRef: useRef(),
    mobileRef: useRef(),
    imageRef: useRef(),
    depositRef: useRef(),
    rentRef: useRef(),
    areaRef: useRef(),
    parkingRef: useRef(),
    buildingAgeRef: useRef(),
    balconyRef: useRef(),
    furnishingRef: useRef(),
    bathroomRef: useRef(),
    facingRef: useRef(),
    nonVegAllowedRef: useRef(),
    waterRef: useRef(),
    securityRef: useRef(),
    floorRef: useRef(),
    addressRef: useRef(),
    pincodeRef: useRef(),
    locationRef: useRef(),
    tenantTypeRef: useRef(),
    availableDateRef: useRef(),
    propertyTypeRef: useRef(),
    subCategoryRef: useRef(),
    descriptionRef: useRef(),
  };

  const [display, setDisplay] = useState({
    disRoom: "none",
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

  const handleCategoryChange = (Category, tabId) => {
    const updatedDisplay = { ...display };
    Object.keys(updatedDisplay).forEach((key) => {
      updatedDisplay[key] = key === categoryMap[Category] ? "block" : "none";
    });

    setDisplay(updatedDisplay);

    console.log(` category: ${Category}, Tab ID: ${tabId}`);
  };

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

  // Rendering Property Details
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/property/" + propertyID)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function submitData(e) {
    e.preventDefault();
    console.log("Sub Category", subCategory);
    const formData = new FormData();
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
    formData.append("propertyType", inputRefs.propertyTypeRef.current.value);
    formData.append(
      "subCategory",
      subCategory === "" ? data.subCategory : subCategory
    );
    formData.append("description", inputRefs.descriptionRef.current.value);
    console.log("Form Data:", formData);
    if (window.confirm("Are you sure?")) {
      axios
        .put("http://127.0.0.1:5000/property/" + propertyID, formData)
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "1") {
            alert("Property is updated");
            window.location.href = "/admin/home";
          } else {
            alert("Property is not updated");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <Wrapper>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ marginTop: 100 }}
      >
        <div className="col-sm-7">
          <div className="card">
            <div className="card-header bg-gold">
              <h4
                className="card-title pb-2 w-25 text-center mx-auto text-light text-nowrap"
                style={{ borderBottom: "3px solid white" }}
              >
                Edit Property
              </h4>
            </div>
            <div className="card-body">
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
                />
                <input
                  type="email"
                  className="form-control w-45 w--100 m-2"
                  id="email"
                  placeholder="Enter Email"
                  defaultValue={data.email}
                  ref={inputRefs.emailRef}
                />
                <div className="input-group w-45 w--100 m-2">
                  <div className="input-group-prepend">
                    <span className="input-group-text">+91</span>
                  </div>
                  <input
                    type="text"
                    className="form-control border-muted w-75"
                    placeholder="Enter Mobile Number"
                    aria-label="Text input with dropdown button"
                    defaultValue={data.mobile}
                    ref={inputRefs.mobileRef}
                  />
                </div>
                <input
                  type="file"
                  className="form-control-file border w-45 w--100 m-2"
                  ref={inputRefs.imageRef}
                  defaultValue={data.imgUrls}
                  onChange={(e) => setFiles(e.target.files)}
                  multiple
                />
                <div className="d-flex flex-wrap w-100 justify-content-start align-items-center">
                  {data?.imageUrls?.map((path, i) => (
                    <div
                      className="mx-4 my-2"
                      key={i}
                      style={{
                        width: "10rem",
                        height: "10rem",
                        objectFit: "fill",
                      }}
                    >
                      <img
                        src={`/images/property-img/${path}`}
                        alt={`Flat Img-${i + 1}`}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="input-group w-45 w--100 m-2">
                  <div className="input-group-prepend">
                    <span className="input-group-text">₹</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Deposit"
                    defaultValue={data.deposit}
                    ref={inputRefs.depositRef}
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
                    defaultValue={data.rent}
                    ref={inputRefs.rentRef}
                  />
                </div>
                <input
                  type="text"
                  className="form-control w-45 w--100 m-2"
                  id="builtup"
                  placeholder="Enter Builtup Area(sqft)"
                  defaultValue={data.area}
                  ref={inputRefs.areaRef}
                />
                <div className="form-group w-45 w--100 m-2">
                  <select
                    name="parking"
                    id="parking"
                    className="form-control"
                    defaultValue={data.parking}
                    ref={inputRefs.parkingRef}
                  >
                    <option disabled selected>
                      Parking
                    </option>
                    <option value="bike" selected={data.parking == "bike"}>
                      Bike
                    </option>
                    <option value="car" selected={data.parking == "car"}>
                      Car
                    </option>
                    <option
                      value="bike & car"
                      selected={data.parking == "bike & car"}
                    >
                      Bike &amp; Car
                    </option>
                  </select>
                </div>
                <div className="form-group w-45 w--100 m-2">
                  <select
                    name="building-age"
                    id="building-age"
                    className="form-control"
                    ref={inputRefs.buildingAgeRef}
                    defaultValue={data.buildingAge}
                  >
                    <option disabled selected>
                      Age Of Building
                    </option>
                    <option
                      value="0-2 years"
                      selected={data.buildingAge === "0-2 years"}
                    >
                      0-2 Years
                    </option>
                    <option
                      value="2-4 years"
                      selected={data.buildingAge === "2-4 years"}
                    >
                      2-4 Years
                    </option>
                    <option
                      value="4-6 years"
                      selected={data.buildingAge === "4-6 years"}
                    >
                      4-6 Years
                    </option>
                    <option
                      value="6-8 years"
                      selected={data.buildingAge === "6-8 years"}
                    >
                      6-8 Years
                    </option>
                    <option
                      value="more than 8"
                      selected={data.buildingAge === "more than 8"}
                    >
                      More than 8 Years
                    </option>
                  </select>
                </div>
                <div className="form-group w-45 w--100 m-2">
                  <select
                    name="balcony"
                    id="balcony"
                    className="form-control"
                    ref={inputRefs.balconyRef}
                    defaultValue={data.balcony}
                  >
                    <option disabled selected>
                      No. of Balcony
                    </option>
                    <option value="0" selected={data.balcony === "0"}>
                      0
                    </option>
                    <option value="1" selected={data.balcony === "1"}>
                      1
                    </option>
                    <option value="2" selected={data.balcony === "2"}>
                      2
                    </option>
                    <option value="3" selected={data.balcony === "3"}>
                      3
                    </option>
                    <option value="3+" selected={data.balcony === "3+"}>
                      3+
                    </option>
                  </select>
                </div>
                <div className="form-group w-45 w--100 m-2">
                  <select
                    name="furnishing"
                    id="furnishing"
                    className="form-control"
                    ref={inputRefs.furnishingRef}
                    defaultValue={data.furnishing}
                  >
                    <option disabled selected>
                      Furnishing
                    </option>
                    <option
                      value="fully furnished"
                      selected={data.furnishing === "fully furnished"}
                    >
                      Fully Furnished
                    </option>
                    <option
                      value="semi furnished"
                      selected={data.furnishing === "semi furnished"}
                    >
                      Semi Furnished
                    </option>
                    <option
                      value="unfurnished"
                      selected={data.furnishing === "unfurnished"}
                    >
                      Unfurnished
                    </option>
                  </select>
                </div>
                <div className="form-group w-45 w--100 m-2">
                  <select
                    name="bathroom"
                    id="bathroom"
                    className="form-control"
                    ref={inputRefs.bathroomRef}
                    defaultValue={data.bathroom}
                  >
                    <option disabled selected>
                      No. of Bathroom
                    </option>
                    <option value="1" selected={data.bathroom === "1"}>
                      1
                    </option>
                    <option value="2" selected={data.bathroom === "2"}>
                      2
                    </option>
                    <option value="3" selected={data.bathroom === "3"}>
                      3
                    </option>
                    <option value="3+" selected={data.bathroom === "3+"}>
                      3+
                    </option>
                  </select>
                </div>
                <div className="form-group w-45 w--100 m-2">
                  <select
                    name="facing"
                    id="facing"
                    className="form-control"
                    ref={inputRefs.facingRef}
                    defaultValue={data.facing}
                  >
                    <option disabled selected>
                      Facing
                    </option>
                    <option value="north" selected={data.facing === "north"}>
                      North
                    </option>
                    <option value="south" selected={data.facing === "south"}>
                      South
                    </option>
                    <option value="east" selected={data.facing === "east"}>
                      East
                    </option>
                    <option value="west" selected={data.facing === "west"}>
                      West
                    </option>
                  </select>
                </div>
                <div className="form-group w-45 w--100 m-2">
                  <select
                    name="non-veg"
                    id="non-veg"
                    className="form-control"
                    defaultValue={data.nonVegAllowed}
                    ref={inputRefs.nonVegAllowedRef}
                  >
                    <option disabled selected>
                      Non Veg Allowed
                    </option>
                    <option value="yes" selected={data.nonVegAllowed === "yes"}>
                      Yes
                    </option>
                    <option value="no" selected={data.nonVegAllowed === "no"}>
                      No
                    </option>
                  </select>
                </div>
                <div className="form-group w-45 w--100 m-2">
                  <select
                    name="water"
                    id="water"
                    className="form-control"
                    ref={inputRefs.waterRef}
                    defaultValue={data.water}
                  >
                    <option disabled selected>
                      Water Supply
                    </option>
                    <option
                      value="corporation"
                      selected={data.water === "corporation"}
                    >
                      Corporation
                    </option>
                    <option
                      value="borwell"
                      selected={data.water === "borewell"}
                    >
                      Borewell
                    </option>
                  </select>
                </div>
                <div className="form-group w-45 w--100 m-2">
                  <select
                    name="security"
                    id="security"
                    className="form-control"
                    defaultValue={data.security}
                    ref={inputRefs.securityRef}
                  >
                    <option disabled selected>
                      Gated Security
                    </option>
                    <option value="yes" selected={data.security === "yes"}>
                      Yes
                    </option>
                    <option value="no" selected={data.security === "no"}>
                      No
                    </option>
                  </select>
                </div>
                <div className="form-group w-45 w--100 m-2">
                  <input
                    type="number"
                    className="form-control"
                    id="floor"
                    placeholder="Enter No. of Floor"
                    defaultValue={data.floor}
                    min={0}
                    max={10}
                    ref={inputRefs.floorRef}
                  />
                </div>
                <input
                  type="text"
                  className="form-control w-45 w--100 m-2"
                  id="address"
                  placeholder="Enter Address"
                  ref={inputRefs.addressRef}
                  defaultValue={data.address}
                />
                <input
                  type="number"
                  className="form-control w-45 w--100 m-2"
                  id="pincode"
                  placeholder="Enter Pincode"
                  ref={inputRefs.pincodeRef}
                  defaultValue={data.pincode}
                />
                <div className="form-group w-45 w--100 m-2">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    ref={inputRefs.locationRef}
                    defaultValue={data.location}
                  >
                    <option disabled selected>
                      Select Location
                    </option>
                    {suggestions.map((area, i) => (
                      <option
                        value={area}
                        key={i}
                        selected={data.location === area}
                        className="text-capitalize"
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
                    defaultValue={data.tenantType}
                    ref={inputRefs.tenantTypeRef}
                  >
                    <option disabled selected>
                      Preferred Tenants
                    </option>
                    <option value="all" selected={data.tenantType === "all"}>
                      All
                    </option>
                    <option value="boys" selected={data.tenantType === "boys"}>
                      Boys
                    </option>
                    <option
                      value="girls"
                      selected={data.tenantType === "girls"}
                    >
                      Girls
                    </option>
                    <option
                      value="family"
                      selected={data.tenantType === "family"}
                    >
                      Family
                    </option>
                  </select>
                </div>

                {/* <div className="w--100 w-45 d-flex justify-content-start align-items-center m-2">
    <select
      name="available"
      id="available"
      className="form-control"
      defaultValue={data.availableDate}
      ref={inputRefs.availableDateRef}
    >
      <option disabled selected>
        Available in
      </option>
      <option value="immediate">Immediate</option>
      <option value="within 15 days">Within 15 Days</option>
      <option value="within 30 days">Within 30 Days</option>
      <option value="after 30 days">After 30 Days</option>
    </select>
  </div> */}
                <div className="w--100 w-45 d-flex justify-content-start align-items-center m-2">
                  <span className="w-100 ml-2">Available From</span>
                  <input
                    type="date"
                    className="form-control w-100"
                    id="availability"
                    defaultValue={data.availableDate}
                    ref={inputRefs.availableDateRef}
                  />
                </div>
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
                  <div className="tab-content border border-muted h-100">
                    <div id="rent" className="container tab-pane active py-3">
                      <select
                        className="form-control"
                        defaultValue={data.propertyType}
                        ref={inputRefs.propertyTypeRef}
                        onChange={(e) =>
                          handleCategoryChange(e.target.value, "rent")
                        }
                      >
                        <option disabled selected>
                          Property Type
                        </option>
                        <option
                          value="room"
                          selected={data.propertyType === "room"}
                        >
                          Room
                        </option>
                        <option
                          value="flat"
                          selected={data.propertyType === "flat"}
                        >
                          Flat
                        </option>
                        <option
                          value="pg"
                          selected={data.propertyType === "pg"}
                        >
                          PG
                        </option>
                        <option
                          value="hostel"
                          selected={data.propertyType === "hostel"}
                        >
                          Hostel
                        </option>
                      </select>
                    </div>
                    <div
                      id="commercial"
                      className="container tab-pane fade py-3"
                    >
                      <select
                        className="form-control"
                        defaultValue={data.propertyType}
                        onChange={(e) =>
                          handleCategoryChange(e.target.value, "commercial")
                        }
                      >
                        <option disabled selected>
                          Property Type
                        </option>
                        <option
                          value="office"
                          selected={data.propertyType === "office"}
                        >
                          Office
                        </option>
                        <option
                          value="rest&cafe"
                          selected={data.propertyType === "rest&cafe"}
                        >
                          Restaurant and Cafe
                        </option>
                        <option
                          value="shop"
                          selected={data.propertyType === "shop"}
                        >
                          Shop
                        </option>
                        <option
                          value="showroom"
                          selected={data.propertyType === "showroom"}
                        >
                          Showroom
                        </option>
                        <option
                          value="industrial"
                          selected={data.propertyType === "industrial"}
                        >
                          Industrial
                        </option>
                        <option
                          value="god/var"
                          selected={data.propertyType === "god/var"}
                        >
                          Godown & Warehouse
                        </option>
                        <option
                          value="other"
                          selected={data.propertyType === "other"}
                        >
                          Other Business
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Sub Category */}
                <div className="w-45 w--100 m-2">
                  <div className="form-group">
                    <div className="card">
                      <div className="card-header p-2 bg-white">
                        <label
                          htmlFor="exampleFormControlSelect1"
                          className="text-center w-100"
                        >
                          Select Sub Category
                        </label>
                      </div>
                      <div className="card-body py-3">
                        {["room", "flat", "pg", "hostel"].map(
                          (category, index) => (
                            <select
                              key={index}
                              className="form-control"
                              id={`exampleFormControlSelect${index + 1}`}
                              defaultValue={data.subCategory}
                              style={{
                                display: display[categoryMap[category]],
                              }}
                              onChange={(e) => setSubCategory(e.target.value)}
                            >
                              {category === "room" && (
                                <>
                                  <option value="type" disabled selected>
                                    Room Type
                                  </option>
                                  <option
                                    value="1rk"
                                    selected={data.subCategory === "1rk"}
                                  >
                                    1 RK
                                  </option>
                                  <option
                                    value="1bhk"
                                    selected={data.subCategory === "1bhk"}
                                  >
                                    1 BHK
                                  </option>
                                  <option
                                    value="2bhk"
                                    selected={data.subCategory === "2bhk"}
                                  >
                                    2 BHK
                                  </option>
                                  <option
                                    value="3bhk"
                                    selected={data.subCategory === "3bhk"}
                                  >
                                    3 BHK
                                  </option>
                                  <option
                                    value="4bhk"
                                    selected={data.subCategory === "4bhk"}
                                  >
                                    4 BHK
                                  </option>
                                  <option
                                    value="4+bhk"
                                    selected={data.subCategory === "4+bhk"}
                                  >
                                    4+ BHK
                                  </option>
                                </>
                              )}
                              {category === "flat" && (
                                <>
                                  <option value="type" disabled selected>
                                    Flat Type
                                  </option>
                                  <option
                                    value="1rk"
                                    selected={data.subCategory === "1rk"}
                                  >
                                    1 RK
                                  </option>
                                  <option
                                    value="1bhk"
                                    selected={data.subCategory === "1bhk"}
                                  >
                                    1 BHK
                                  </option>
                                  <option
                                    value="2bhk"
                                    selected={data.subCategory === "2bhk"}
                                  >
                                    2 BHK
                                  </option>
                                  <option
                                    value="3bhk"
                                    selected={data.subCategory === "3bhk"}
                                  >
                                    3 BHK
                                  </option>
                                  <option
                                    value="4bhk"
                                    selected={data.subCategory === "4bhk"}
                                  >
                                    4 BHK
                                  </option>
                                  <option
                                    value="4+bhk"
                                    selected={data.subCategory === "4+bhk"}
                                  >
                                    4+ BHK
                                  </option>
                                </>
                              )}
                              {category === "pg" && (
                                <>
                                  <option value="type" disabled selected>
                                    PG Type
                                  </option>
                                  <option
                                    value="single bed"
                                    selected={data.subCategory === "single bed"}
                                  >
                                    Single Bed
                                  </option>
                                  <option
                                    value="double sharing"
                                    selected={
                                      data.subCategory === "double sharing"
                                    }
                                  >
                                    Double Sharing
                                  </option>
                                  <option
                                    value="triple sharing"
                                    selected={
                                      data.subCategory === "triple sharing"
                                    }
                                  >
                                    Triple Sharing
                                  </option>
                                  <option
                                    value="four sharing"
                                    selected={
                                      data.subCategory === "four sharing"
                                    }
                                  >
                                    Four Sharing
                                  </option>
                                </>
                              )}
                              {category === "hostel" && (
                                <>
                                  <option value="type" disabled selected>
                                    Hostel Type
                                  </option>
                                  <option
                                    value="single bed"
                                    selected={data.subCategory === "single bed"}
                                  >
                                    Single Bed
                                  </option>
                                  <option
                                    value="double sharing"
                                    selected={
                                      data.subCategory === "double sharing"
                                    }
                                  >
                                    Double Sharing
                                  </option>
                                  <option
                                    value="triple sharing"
                                    selected={
                                      data.subCategory === "triple sharing"
                                    }
                                  >
                                    Triple Sharing
                                  </option>
                                  <option
                                    value="four sharing"
                                    selected={
                                      data.subCategory === "four sharing"
                                    }
                                  >
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

                <div className="form-group w-75 m-2">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    className="form-control"
                    rows={5}
                    id="description"
                    defaultValue={data.description}
                    ref={inputRefs.descriptionRef}
                  />
                </div>
                {/* Button */}
                <div
                  className="card-footer border-0 bg-white m-2 px-0"
                  style={{ width: "90%" }}
                >
                  <div
                    className="d-flex justify-content-around align-items-center"
                    style={{ gap: "1rem" }}
                  >
                    <button
                      className="btn btn-gold text-light w-100 btn-lg btn-block"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PropertyEditAdmin;

const Wrapper = styled.section`
  .nav-pills .nav-link.active {
    border-bottom: 3px solid goldenrod;
  }
`;
