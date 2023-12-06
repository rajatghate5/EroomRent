import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import LoadingAnimation from "./LoadingAnimation";

const Searched = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500000);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchData = useLocation().state;
  const { customLocation, propertyData, subPropertyData } = searchData;
  const tenantLoggedIn = useSelector(
    (state) => state.detailReducer.tenantLoggedIn
  );
  const calcLeftPosition = (value) => ((value - 0) / (500000 - 0)) * 100;

  const handleMinChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue > max) return;
    setMin(newValue);
  };

  const handleMaxChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue < min) return;
    setMax(newValue);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/property")
      .then((res) => {
        const filteredData = res.data.filter((item) => {
          const matchLocation = item.location === customLocation;
          const matchPropertyType = item.propertyType === propertyData;
          const matchSubCategory = item.subCategory === subPropertyData;

          return matchLocation && matchPropertyType && matchSubCategory;
        });
        setData(filteredData);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [customLocation, propertyData, subPropertyData]);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return (
      <div className="container-fluid">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "85vh" }}
        >
          <div className="col-sm-12 d-flex justify-content-center align-items-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-3702359-3119148.png"
              alt="Page Not Found"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="container-fluid">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "85vh" }}
        >
          <div className="col-sm-6 d-flex justify-content-center align-items-center">
            <img
              src="https://michassi.com/assets/web//images/no_data_found.png"
              alt="No Data Found"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Wrapper>
      <section className="bg-lightest-grey">
        <div
          className="row py-2 d-sm-flex justify-content-around align-items-start"
          style={{ marginTop: 65, gap: "0.5rem" }}
        >
          {/* Filters Start */}
          <div
            className="col-sm-3 bg-white px-0"
            style={{ position: "sticky", top: "12%", left: "4%" }}
          >
            <div className="card shadow">
              <div
                className="card-header bg-white pb-0 py-2 px-0 d-flex justify-content-center align-items-center"
                style={{ borderBottom: "2px solid goldenrod" }}
              >
                <h4>Filters</h4>
              </div>
              <div className="card-body" style={{ height: "80vh" }}>
                <span
                  className="position-absolute cur-pointer"
                  style={{ top: "12%", right: "10%" }}
                >
                  <i className="fa fa-refresh" aria-hidden="true" />
                  Reset
                </span>
                <div className="row h-100">
                  <div className="col-sm-12 d-flex flex-column px-1">
                    <div className="px-2 py-1">
                      <p className="fow-600 fos-14">BHK Type</p>
                      <div
                        className="d-flex flex-wrap"
                        style={{ gap: "0.5rem" }}
                      >
                        <span className="badge badge-light p-2 cur-pointer">
                          1RK
                        </span>
                        <span className="badge badge-light p-2 cur-pointer">
                          1BHK
                        </span>
                        <span className="badge badge-light p-2 cur-pointer">
                          2BHK
                        </span>
                        <span className="badge badge-light p-2 cur-pointer">
                          3BHK
                        </span>
                        <span className="badge badge-light p-2 cur-pointer">
                          4BHK
                        </span>
                        <span className="badge badge-light p-2 cur-pointer">
                          4+BHK
                        </span>
                      </div>
                    </div>
                    <div className="px-2 py-2">
                      <p className="fow-600 fos-14">
                        Rent Range: ₹ {min} to ₹ {max}
                      </p>
                      <div className="range-slide">
                        <input
                          type="range"
                          id="rangeMin"
                          value={min}
                          min={0}
                          max={500000}
                          onChange={handleMinChange}
                        />
                        <div
                          id="thumbMin"
                          className="thumb"
                          style={{
                            left: `${calcLeftPosition(min)}%`,
                            cursor: "pointer",
                          }}
                        ></div>
                        <div
                          id="line"
                          className="line"
                          style={{
                            width: `${
                              calcLeftPosition(max) - calcLeftPosition(min)
                            }%`,
                            left: `${calcLeftPosition(min)}%`,
                          }}
                        ></div>
                        <input
                          type="range"
                          id="rangeMax"
                          value={max}
                          min={0}
                          max={500000}
                          onChange={handleMaxChange}
                        />
                        <div
                          id="thumbMax"
                          className="thumb"
                          style={{
                            left: `${calcLeftPosition(max)}%`,
                            cursor: "pointer",
                          }}
                        ></div>
                      </div>
                    </div>
                    {/* <div className="px-2 py-1">
                      <p className="fow-600 fos-14">Availability</p>
                      <div className="d-sm-flex flex-wrap">
                        <div
                          className="custom-control custom-radio custom-control-inline"
                          style={{ marginRight: "2.25rem" }}
                        >
                          <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="customRadioInline1"
                          >
                            Immediate{" "}
                          </label>
                        </div>
                        <div
                          className="custom-control custom-radio custom-control-inline"
                          style={{ marginRight: 0 }}
                        >
                          <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="customRadioInline2"
                          >
                            Within 15 Days
                          </label>
                        </div>
                        <div
                          className="custom-control custom-radio custom-control-inline"
                          style={{ marginRight: "0.6rem" }}
                        >
                          <input
                            type="radio"
                            id="customRadioInline3"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="customRadioInline1"
                          >
                            Within 30 Days{" "}
                          </label>
                        </div>
                        <div
                          className="custom-control custom-radio custom-control-inline"
                          style={{ marginRight: 0 }}
                        >
                          <input
                            type="radio"
                            id="customRadioInline4"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="customRadioInline2"
                          >
                            After 30 Days
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className="px-2 py-1">
                      <p className="fow-600 fos-14">Preferred Tenants</p>
                      <div className="d-sm-flex flex-wrap">
                        <div
                          className="custom-control custom-checkbox"
                          style={{ marginRight: "0.9rem" }}
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="tenantsCheck1"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="tenantsCheck1"
                          >
                            Family
                          </label>
                        </div>
                        <div
                          className="custom-control custom-checkbox"
                          style={{ marginRight: "0.9rem" }}
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="tenantsCheck2"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="tenantsCheck2"
                          >
                            All
                          </label>
                        </div>
                        <div
                          className="custom-control custom-checkbox"
                          style={{ marginRight: "0.9rem" }}
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="tenantsCheck3"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="tenantsCheck3"
                          >
                            Boys
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="tenantsCheck4"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="tenantsCheck4"
                          >
                            Girls
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <div className="px-2 py-1">
                      <p className="fow-600 fos-14">Property Type</p>
                      <div className="d-sm-flex flex-column">
                        <div
                          className="custom-control custom-checkbox"
                          style={{ marginRight: "3.95rem" }}
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="typeCheck1"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="typeCheck1"
                          >
                            Apartment
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="typeCheck2"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="typeCheck2"
                          >
                            Independent
                          </label>
                        </div>
                        <div
                          className="custom-control custom-checkbox"
                          style={{ marginRight: "0.9rem" }}
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="typeCheck3"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="typeCheck3"
                          >
                            Gated Community
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className="px-2 py-1">
                      <p className="fow-600 fos-14">Furnishing</p>
                      <div
                        className="d-sm-flex flex-wrap"
                        style={{ gap: "2rem" }}
                      >
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="furnishingCheck1"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="furnishingCheck1"
                          >
                            Full
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="furnishingCheck2"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="furnishingCheck2"
                          >
                            Semi
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="furnishingCheck3"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="furnishingCheck3"
                          >
                            Unfurnished
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-1">
                      <p className="fow-600 fos-14">Parking</p>
                      <div
                        className="d-sm-flex flex-wrap"
                        style={{ gap: "3rem" }}
                      >
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="parkingCheck1"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="parkingCheck1"
                          >
                            Bike
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="parkingCheck2"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="parkingCheck2"
                          >
                            Car
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="parkingCheck3"
                          />
                          <label
                            className="custom-control-label fos-14"
                            htmlFor="parkingCheck3"
                          >
                            Bike & Car
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters End */}
          {/* Room Options Cards Start */}
          <div className="col-sm-8 bg-lightest-grey">
            <div className="card border-0">
              <div className="card-header p-0 border-0 shadow bg-white d-sm-flex justify-content-between align-items-center px-5">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb my-0 py-3 bg-white">
                    <li className="breadcrumb-item">
                      <Link to="/" className="text-dark fos-18">
                        Home
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                      style={{ marginTop: "0.1rem" }}
                    >
                      <span className="text-capitalize">{customLocation}</span>
                    </li>
                  </ol>
                </nav>
                <div className="d-flex justify-content-center align-items-center py-3">
                  <small className="w-25">Sort By:</small>
                  <select className="custom-select">
                    <option selected value="new-first">
                      Posted On (Newest First)
                    </option>
                    <option value="old-first">Posted On (Oldest First)</option>
                    <option value="low-high">Rent (Low to High)</option>
                    <option value="high-low">Rent (High to Low)</option>
                    <option value="avail-earliest">
                      Available From (Earliest First)
                    </option>
                    <option value="avail-oldest">
                      Available From (Oldest First)
                    </option>
                  </select>
                </div>
              </div>
              <div
                className="card-body shadow d-flex flex-column p-0 bg-lightest-grey border-0"
                style={{ gap: "0.8rem", marginTop: "0.8rem" }}
              >
                {data.map((details, i) => (
                  <div className="card" key={i}>
                    <div className="card-header bg-white p-0">
                      <h5 className="card-title bg-white p-4 border-bottom border-muted">
                        <span className="text-uppercase">
                          {details.subCategory}
                        </span>{" "}
                        <span className="text-capitalize">
                          {details.propertyType}
                        </span>{" "}
                        for Rent in{" "}
                        <span className="text-capitalize">
                          {" "}
                          {details.location}
                        </span>
                      </h5>
                      <div className="row border-muted py-2">
                        <div className="col-sm-4 text-center">
                          <p className="mb-0 fow-600 pb-0">₹ {details.rent} </p>
                          <small>Rent</small>
                        </div>
                        <div className="col-sm-4 text-center border-left border-right border-muted">
                          <p className="mb-0 fow-600 pb-0">
                            ₹ {details.deposit}{" "}
                          </p>
                          <small>Deposit</small>
                        </div>
                        <div className="col-sm-4 text-center">
                          <p className="mb-0 fow-600 pb-0">
                            {" "}
                            {details.area} sqft{" "}
                          </p>
                          <small>BuiltUp</small>
                        </div>
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <div className="row d-sm-flex justify-content-around align-items-center flex-wrap">
                        <div className="col-sm-4">
                          <div
                            id={`demo${i}`}
                            className="carousel slide"
                            data-ride="carousel"
                          >
                            {/* The slideshow */}
                            <div className="carousel-inner bg-dark">
                              {details &&
                                details.imageUrls &&
                                details.imageUrls.map((url, i) => (
                                  <div
                                    key={i}
                                    className={`carousel-item ${
                                      i === 0 ? "active" : ""
                                    }`}
                                  >
                                    <img
                                      src={`/images/property-img/${url}`}
                                      alt={`Flat Img-${i + 1}`}
                                      width={150}
                                      height={234}
                                    />
                                  </div>
                                ))}
                            </div>
                            {/* Left and right controls */}
                            <a
                              className="carousel-control-prev"
                              href={`#demo${i}`}
                              data-slide="prev"
                            >
                              <span className="carousel-control-prev-icon" />
                            </a>
                            <a
                              className="carousel-control-next"
                              href={`#demo${i}`}
                              data-slide="next"
                            >
                              <span className="carousel-control-next-icon" />
                            </a>
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <div
                            className="d-flex flex-wrap"
                            style={{ border: "3px double #999999" }}
                          >
                            <div className="d-flex justify-content-around align-items-center py-3 border border-muted w-50">
                              <i className="fas fa-bed fos-20" />
                              <div className="text-left w-75">
                                <p className="mb-0 fow-600 text-muted text-capitalize">
                                  {details.furnishing}
                                </p>
                                <small className="font-weight-light">
                                  Furnishing
                                </small>
                              </div>
                            </div>
                            <div className="d-flex justify-content-around align-items-center py-3 border border-muted w-50">
                              <i className="fas fa-building fos-25" />
                              <div className="text-left w-75">
                                <p className="mb-0 fow-600 text-muted text-uppercase">
                                  {details.subCategory}
                                </p>
                                <small className="font-weight-light">
                                  Apartment Type
                                </small>
                              </div>
                            </div>
                            <div className="d-flex justify-content-around align-items-center py-3 border border-muted w-50">
                              <i className="fas fa-user fos-25" />
                              <div className="text-left w-75">
                                <p className="mb-0 fow-600 text-muted text-capitalize">
                                  {details.tenantType}
                                </p>
                                <small className="font-weight-light">
                                  Preferred Tenants
                                </small>
                              </div>
                            </div>
                            <div className="d-flex justify-content-around align-items-center py-3 border border-muted w-50">
                              <i className="fas fa-key fos-25" />
                              <div className="text-left w-75">
                                <p className="mb-0 fow-600 text-muted">
                                  {details.availableDate}
                                </p>
                                <small className="font-weight-light">
                                  Available From
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="my-2 d-flex justify-content-between align-items-center">
                            <Link
                              to={
                                tenantLoggedIn
                                  ? "/tenant/viewproperty"
                                  : "/viewproperty"
                              }
                              state={details._id}
                              className="btn btn-gold text-white py-2 w-100 text-decoration-none"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Room Options Cards End */}
        </div>
      </section>
    </Wrapper>
  );
};

export default Searched;

const Wrapper = styled.section`
  .navbar-nav li:hover ul.dropdown-menu {
    display: block;
  }

  .dropdown-submenu {
    position: relative;
  }

  .dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
  }

  /* rotate caret on hover */
  .dropdown-menu li a:hover:after {
    text-decoration: underline;
    transform: rotate(-90deg);
  }

  .nav-pills .nav-link.active {
    background-color: #fff;
    color: black;
  }

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
    font-size: 14px;
  }

  #lts-none li a {
    color: white;
  }

  .box-shadow {
    -webkit-box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
  }

  .nav-tabs .nav-link.active {
    border-bottom-color: goldenrod;
    border-width: 3px;
    color: black;
  }

  .range-slide {
    position: relative;
    margin: 0px;
    height: 4px;
    width: 100%;
  }

  .slide-1 {
    position: absolute;
    top: 0;
    height: 4px;
    background: #ccc;
    left: 9px;
    right: 9px;
  }

  .line {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 4px;
    background-color: goldenrod;
  }

  .thumb {
    position: absolute;
    z-index: 2;
    text-align: left;
    border: 1px solid goldenrod;
    background-color: goldenrod;
    border-radius: 50%;
    outline: none;
    top: -7px;
    height: 18px;
    width: 18px;
    margin-left: -9px;
  }

  .range-slide input {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    pointer-events: none;
    z-index: 3;
    height: 3px;
    top: 0;
    width: 100%;
    opacity: 0;
    margin: 0;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    pointer-events: all;
    border-radius: 50%;
    cursor: pointer;
    width: 18px;
    height: 18px;
  }

  .cur-pointer {
    cursor: pointer;
  }

  /* Range Bar CSS End*/
`;
