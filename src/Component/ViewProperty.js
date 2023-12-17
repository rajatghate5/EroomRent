import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { propertyBook } from "../actions";
import LoadingAnimation from "./LoadingAnimation";

const ViewProperty = () => {
  const dispatch = useDispatch();
  let data = useLocation().state;
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const tenantLoggedIn = useSelector(
    (state) => state.detailReducer.tenantLoggedIn
  );

  useEffect(() => {
    console.log(data);
    axios
      .get("http://127.0.0.1:5000/property/" + data)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [data]);

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
              src="https://images.template.net/84921/free-something-went-wrong-illustration-ujbiu.jpg"
              alt="Page Not Found"
              className="img-fluid"
              width={650}
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
  const passingData = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      dispatch(propertyBook(data));
      if (tenantLoggedIn) {
        navigate("/tenant/waiting");
      } else {
        navigate("/login", { state: true });
      }
    }
  };

  return (
    <Wrapper>
      <div style={{ marginTop: 80 }}>
        <section>
          {/* Sub Header Start */}
          <div className="row d-sm-flex justify-content-center align-items-center my-5">
            <div className="col-sm-1 text-center border border-muted py-2">
              <img src="/images/house.png" alt="house rent" />
            </div>
            <div className="col-sm-6 border border-muted text-center">
              <h5 className="p-4">
                <span className="text-uppercase">{details.subCategory}</span>{" "}
                <span className="text-capitalize">{details.propertyType}</span>{" "}
                for in{" "}
                <span className="text-capitalize">{details.location}</span>
              </h5>
            </div>
            <div className="col-sm-2 text-center border border-muted py-3">
              <p className="mb-0 fow-600 pb-0">₹ {details.rent} </p>
              <small>Rent</small>
            </div>
            <div className="col-sm-1 text-center border border-muted py-3">
              <p className="mb-0 fow-600 pb-0"> {details.area} sqft </p>
              <small>BuiltUp</small>
            </div>
            <div className="col-sm-1 text-center border border-muted py-3">
              <p className="mb-0 fow-600 pb-0">₹ {details.deposit} </p>
              <small>Deposit</small>
            </div>
          </div>
          {/* Sub Header End */}

          {/* Main Content Start */}
          <div
            className="row d-sm-flex justify-content-center align-items-center pb-4"
            style={{ gap: "7rem" }}
          >
            {/* Carousel Start */}
            <div className="col-sm-6 justify-content-center align-items-center">
              <div id="demo" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  {details &&
                    details.imageUrls &&
                    details.imageUrls.map((url, i) => (
                      <div
                        key={i}
                        className={`carousel-item ${i === 0 ? "active" : ""}`}
                      >
                        <img
                          src={`/images/property-img/${url}`}
                          alt={`Flat Img-${i + 1}`}
                          width="100%"
                          height={500}
                        />
                      </div>
                    ))}
                </div>
                {/* Left and right controls */}
                <a
                  className="carousel-control-prev"
                  href="#demo"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" />
                </a>
                <a
                  className="carousel-control-next"
                  href="#demo"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" />
                </a>
              </div>
            </div>
            {/* Carousel End */}

            {/* Detail Blocks Start*/}
            <div className="col-sm-4 border border-muted p-4">
              <div className="d-flex flex-wrap border border-muted">
                <div className="d-flex justify-content-around align-items-center py-3 border border-muted w-50">
                  <i className="fas fa-bed fos-20" />
                  <div className="text-left w-50">
                    <p className="mb-0 fow-600 text-muted text-uppercase">
                      {details.subCategory}
                    </p>
                    <small className="font-weight-light">No. of Bedroom</small>
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center py-3 border border-muted w-50">
                  <i className="fas fa-building fos-25" />
                  <div className="text-left w-50">
                    <p className="mb-0 fow-600 text-muted text-capitalize">
                      {details.propertyType}
                    </p>
                    <small className="font-weight-light">PropertyType</small>
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center py-3 border border-muted w-50">
                  <i className="fas fa-user fos-25" />
                  <div className="text-left w-50">
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
                  <div className="text-left w-50">
                    <p className="mb-0 fow-600 text-muted">
                      {details.availableDate}
                    </p>
                    <small className="font-weight-light">Available From</small>
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center py-3 border border-muted w-50">
                  <i className="fas fa-parking fos-25" />
                  <div className="text-left w-50">
                    <p className="mb-0 fow-600 text-muted text-capitalize">
                      {details.parking}
                    </p>
                    <small className="font-weight-light">Parking</small>
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center py-3 border border-muted w-50">
                  <i className="fas fa-birthday-cake fos-25" />
                  <div className="text-left w-50">
                    <p className="mb-0 fow-600 text-muted">
                      {details.buildingAge}
                    </p>
                    <small className="font-weight-light">Age of Building</small>
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center py-3 border border-muted w-50">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADfUlEQVR4nO2XS0iVQRTHT2lRWC1qY0UJRQjVouemx8YeFBFmIGRkDyTTCCLNjQRZpNcIWxim1rJECArM0EXZA0KoKLdlUKtrVPTQVZE4ceA/l+Pc83HnKzSvfX/4QH8zc+aceZw5lyi8zDh9Y65JF8hE6f/HigLxlIl2JKSio+UpEx2tkIqOlqdM9LKHVFSieMpEWSukoqzlKRMdrZCKjpanTHS0JsvRmk5EF4logIjiRBQD+1eOmRT9A/2tV8qOunF0LGz/+iB/4/hnAxFtxN/MJqriQf7aBobppk0ykNg4VrRj9dURLkoMl8ek2TeAIEYlp6VofOds3zfwbMGugpULth3sscflfQK2TbDjYE2CzQf76ox/D75EO2870XhfsNlgP4hoiuB3wfMF2wvW6RHIPbACwfaAdQg2lYh+gs8RvAeMFy9JlWhsEWw1WL/T9yX4esEOgLV7BNIOxmOs2JaBbam34KsEawU7pQXSicZDgh0Eu+30/QTOW29VDtbqEcg1sDLBFoB9dPreAS8W7AgYn4xRyiSiQTTmCH4J7KxgM4hohIiGiShD8NPo2+ARSAMYj7FiW8OwzXNY1aAv+2KVAzYI3xPaHHCEHih3YVnAo3kOvMYjEOscj5GKg/McVvlg7ItUPzi/JQldAGwUjC/3F/BFgm8Fe+4Yvgxe4RFIZcDuvQDfIthikblkwrkCfl4aeATImSNV6itWsos896UegZSC8RipDuU+EHxw72QB2EPZ8QPgcsHWgvU5Rk+CNwdkoiKPQIoCMlwzOM8h1QfOPlmtEI9iQjZXZynvSrdjtBqcq1CpW+CFHoEUgvEYrbKtdng3+A7BssDY94SGlK1bF5DXy8BvOPw6+NG/OFo3wY85/JWyIzZdf9ceuDzB5oENOWl2N3ivM5lN1VUegVQpKZXVC85zWGWIhZ4reJ620HVKncN6o6xELhjfK6kz4LUegdSC8RjtruYqd/W107cRnH8tJjnH6Xam4C1KSp1GRL/wcM0S/ETAYmiBNIHxGCu2NQLbPIdVhVI68YP5GXylY5ueoqFEsH1gXORpO7VGqbXaPAJpU2ottmVgWysw2RerErBnpOgwGrmytMrGKg05pYDN9/sF2wXW5RFIFxiPsWJb7vuUiblHnJ8RPcqiJ2WBdPoWaoHI1UuXL1ApO0wQmf8uEJMmH026QH4DXEI23fqHTN8AAAAASUVORK5CYII="
                    width={30}
                    height={30}
                  />
                  <div className="text-left w-50">
                    <p className="mb-0 fow-600 text-muted">{details.balcony}</p>
                    <small className="font-weight-light">Balcony</small>
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center py-3 border border-muted w-50">
                  <i
                    className="fa fa-calendar"
                    aria-hidden="true"
                    style={{ fontSize: 30 }}
                  />
                  <div className="text-left w-50">
                    <p className="mb-0 fow-600 text-muted">
                      {details.postedDate}
                    </p>
                    <small className="font-weight-light">Posted On</small>
                  </div>
                </div>
              </div>
              <div className="row mt-5 border border-muted bg-lightest-grey py-4">
                <div className="col-12">
                  {tenantLoggedIn ? (
                    <button
                      className="btn btn btn-gold w-100 text-light py-2 fow-600"
                      onClick={passingData}
                    >
                      Contact Owner
                    </button>
                  ) : (
                    <button
                      className="btn btn btn-gold w-100 text-light py-2 fow-600"
                      onClick={passingData}
                    >
                      Contact Owner
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* Detail Blocks End*/}
          </div>

          {/* Main Content End */}
          {/* Overview Description Start */}
          <div className="row bg-lightest-grey">
            <div className="col-sm-12 p-0">
              <div
                className="row pt-5 justify-content-center align-items-stretch"
                style={{ gap: "1rem" }}
              >
                {/* Overview Start */}
                <div className="col-sm-11 bg-white">
                  <div className="card border-0">
                    <div className="card-header border-0 bg-white pt-4">
                      <h5
                        className="d-inline-block pb-2"
                        style={{ borderBottom: "2px solid goldenrod" }}
                      >
                        Overview
                      </h5>
                    </div>
                    <div className="card-body p-0">
                      <div
                        className="list-group list-group-flush d-flex flex-wrap flex-row justify-content-start align-items-center w-100 py-2 my-2"
                        style={{ gap: "1rem" }}
                      >
                        <div className="list-group-item mx-2 py-1 w-45 w--100">
                          <div className="d-flex justify-content-around align-items-center">
                            <i className="fas fa-couch fos-20"></i>
                            <span className="d-inline-block w-50 ml-2 fos-14">
                              Furnishing
                            </span>
                            <p
                              className="mb-0 fow-600 text-muted text-capitalize"
                              style={{ width: "50%" }}
                            >
                              {details.furnishing}
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item mx-2 py-1 w-45 w--100">
                          <div className="d-flex justify-content-around align-items-center">
                            <i className="fas fa-tint fos-20" />
                            <span className="d-inline-block w-50 ml-2 fos-14">
                              Water Supply
                            </span>
                            <p
                              className="mb-0 fow-600 text-muted text-capitalize"
                              style={{ width: "50%" }}
                            >
                              {details.water}
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item mx-2 py-1 w-45 w--100">
                          <div className="d-flex justify-content-around align-items-center">
                            <i className="fas fa-shower fos-20" />
                            <span className="d-inline-block w-50 ml-2 fos-14">
                              Bathroom
                            </span>
                            <p
                              className="mb-0 fow-600 text-muted"
                              style={{ width: "50%" }}
                            >
                              {details.bathroom}
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item mx-1 py-1 w-45 w--100">
                          <div className="d-flex justify-content-around align-items-center">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACEUlEQVR4nO2WO0tcURSFP0cNI6h1jIWPTlREAk6r00kQFSJ26XwhiWiR4B/wXaaOnWgVExvzC4JdSFQkoigkpRISMSSKVzasgcNBx3vv3AkpXLCYM2fWXnufM+cF94iOFDAA7AGBeAgMA2X/OnHgsSiFpO4YcdFmJBXROPFCvjpG1n4GlIaIK5XWj4+MQBxyEjcC48A6sAP8FK39Vr81OIUMOT6RsavAJaAP+ABc5VmAOZpmE+gFFtVnXpGRAS4987/AO2AEaAWqRWuPAu+lcWMu5RULc47RPPAwRIxpFry42EgDn2T0BWgOEdMsbaBY8ygIj5zRXACrwFOgDqgQ69W3Jk1OX0NCCMQ/IRahq0kMpzKs01azVf4d+C1+U9+4ZsO0J0kWsCXTzhDarLQfkyxgUqZ2AN2FDWknkiygGjiW8as8umlpjhSTKDLALyWwA6cLqBSzzshN00GR0A6c5dkBZ9IUBU+A/RDb0G6+7iQTl3hH674W5WMdNHb0tqlvx7mQZhRbMJa8EfY7a2JXzNxwdxhnC03e55xuy2r/AF57N6W13+jT+FIxNhM9cZM/0HayBGOazjUv6bzoFmOzYHjuPMvK4xQwKIPPeu+hLbftTbv/d6SdF9G2POyiioxVBb/w+mtvuWLTznMshyl5rMQp4FDBTfrubzcfN/3eovZBnALOFVxZQAFVapvXPf5PXAMcLPQm2n0jbwAAAABJRU5ErkJggg=="
                              width={25}
                              height={25}
                            />
                            <span className="d-inline-block w-50 ml-2 fos-14">
                              Gated Security
                            </span>
                            <p
                              className="mb-0 fow-600 text-muted text-capitalize"
                              style={{ width: "50%" }}
                            >
                              {details.security}
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item mx-2 py-1 w-45 w--100">
                          <div className="d-flex justify-content-around align-items-center">
                            <i className="far fa-compass fos-20" />
                            <span className="d-inline-block w-50 ml-2 fos-14">
                              Facing
                            </span>
                            <p
                              className="mb-0 fow-600 text-muted text-capitalize"
                              style={{ width: "50%" }}
                            >
                              {details.facing}
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item mx-2 py-1 w-45 w--100">
                          <div className="d-flex justify-content-around align-items-center">
                            <i className="far fa-building fos-20" />
                            <span className="d-inline-block w-50 ml-2 fos-14">
                              Floor
                            </span>
                            <p
                              className="mb-0 fow-600 text-muted"
                              style={{ width: "50%" }}
                            >
                              {details.floor}
                            </p>
                          </div>
                        </div>
                        <div className="list-group-item mx-2 py-1 w-45 w--100">
                          <div className="d-flex justify-content-around align-items-center">
                            <i className="fas fa-utensils fos-20"></i>
                            <span className="d-inline-block w-50 ml-2 fos-14">
                              Non-Veg Allowed
                            </span>
                            <p
                              className="mb-0 fow-600 text-muted text-capitalize"
                              style={{ width: "50%" }}
                            >
                              {details.nonVegAllowed}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Overview End */}
              </div>

              {/* Description Start */}
              <div className="row py-5 justify-content-center align-items-center">
                <div className="col-sm-12">
                  <div className="card border-0 p-3">
                    <div className="card-header border-0 bg-white pt-4">
                      <h5
                        className="d-inline-block pb-2"
                        style={{ borderBottom: "2px solid goldenrod" }}
                      >
                        Description
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{details.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Description End */}
            </div>
          </div>
          {/* Overview, Description End */}
        </section>
      </div>
    </Wrapper>
  );
};

export default ViewProperty;

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

  /* Range Bar CSS Start*/
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
