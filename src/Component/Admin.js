import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Admin = () => {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState("");
  const [locationMsg, setLocationMsg] = useState("");
  const [tenantsData, setTenantsData] = useState([]);
  const [ownersData, setOwnersData] = useState([]);
  const [brokersData, setBrokersData] = useState([]);
  const [propertiesData, setPropertiesData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [data, setData] = useState({});
  const [files, setFiles] = useState([]);
  const [propertyData, setPropertyData] = useState("");
  const [subPropertyData, setSubPropertyData] = useState("");
  const userID = useSelector((state) => state.detailReducer.id);

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
          alert(res.data.msg);
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios("http://127.0.0.1:5000/adminlogin/" + userID)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get("http://127.0.0.1:5000/tenantsignup")
      .then((res) => {
        // console.log(res.data);
        setTenantsData(res.data);
      })
      .catch((err) => console.error(err));

    axios
      .get("http://127.0.0.1:5000/ownersignup")
      .then((res) => {
        // console.log(res.data);
        setOwnersData(res.data);
      })
      .catch((err) => console.error(err));

    axios
      .get("http://127.0.0.1:5000/brokersignup")
      .then((res) => {
        // console.log(res.data);
        setBrokersData(res.data);
      })
      .catch((err) => console.error(err));

    axios
      .get("http://127.0.0.1:5000/property")
      .then((res) => {
        // console.log(res.data);
        setPropertiesData(res.data);
      })
      .catch((err) => console.error(err));

    axios
      .get("http://127.0.0.1:5000/booking")
      .then((res) => {
        console.log(res.data);
        setBookingData(res.data);
      })
      .catch((error) => console.error(error));

    axios
      .get("http://127.0.0.1:5000/locations")
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          setLocations(res.data.suggestions);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const newLocationAdd = (e) => {
    e.preventDefault();
    const newData = newLocation.toLocaleLowerCase();
    axios.patch("http://127.0.0.1:5000/locations", { newData }).then((res) => {
      if (res.data.status === "1") {
        window.location.reload();
      } else {
        setLocationMsg(res.data.msg);
      }
    });
  };

  const deleteUser = (e, id, role) => {
    e.preventDefault();
    e.preventDefault();
    if (window.confirm("Are You Sure you want delete?")) {
      switch (role) {
        case "owner":
          axios
            .delete("http://127.0.0.1:5000/ownersignup/" + id)
            .then((res) => {
              if (res.data.status === "1") {
                alert("Owner Deleted");
                window.location.reload();
              } else {
                alert("Data not updated");
              }
            })
            .catch((err) => console.error(err));
          break;
        case "broker":
          axios
            .delete("http://127.0.0.1:5000/brokersignup/" + id)
            .then((res) => {
              if (res.data.status === "1") {
                alert("Broker Deleted");
                window.location.reload();
              } else {
                alert("Data not updated");
              }
            })
            .catch((err) => console.error(err));
          break;
        case "tenant":
          axios
            .delete("http://127.0.0.1:5000/tenantsignup/" + id)
            .then((res) => {
              if (res.data.status === "1") {
                alert("Tenant Deleted");
                window.location.reload();
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

  const deleteProperty = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want delete property?")) {
      axios
        .delete("http://127.0.0.1:5000/property/" + id)
        .then((res) => {
          if (res.data.status === "1") {
            alert("Property Successfully Deleted");
          } else {
            alert("Property Not Deleted");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const bookProperty = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to book property?")) {
      if (id !== "" && userID !== "") {
        axios
          .post("http://127.0.0.1:5000/booking", {
            propertyID: id,
            tenantID: userID,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.status === "1") {
              alert("Property Booked");
              window.location.reload();
            } else if (res.data.status === "2") {
              alert("Property Already Booked");
            } else {
              alert("Property Not Booked");
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const deleteBooking = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to remove booking?")) {
      axios
        .delete("http://127.0.0.1:5000/booking/" + id)
        .then((res) => {
          if (res.data.status === "1") {
            alert("Booking Removed");
            window.location.reload();
          } else {
            alert("Booking not removed");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <Wrapper>
      <div className="container-fluid" style={{ marginTop: 80 }}>
        <div className="row">
          <div className="col-sm-3 border border-muted">
            <div
              className="nav flex-column nav-pills py-4 fos-14"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <p className="border-bottom border-muted pb-3 fow-600 fos-18">
                Welcome To Dashboard
              </p>
              <button
                className="nav-link active text-left py-3"
                id="v-pills-location-tab"
                data-toggle="pill"
                data-target="#location"
                type="button"
                role="tab"
                aria-controls="location"
                aria-selected="true"
              >
                View Location
              </button>
              <button
                className="nav-link text-left py-3"
                id="v-pills-owner-tab"
                data-toggle="pill"
                data-target="#owner"
                type="button"
                role="tab"
                aria-controls="owner"
                aria-selected="false"
              >
                Owners
              </button>
              <button
                className="nav-link text-left py-3"
                id="v-pills-broker-tab"
                data-toggle="pill"
                data-target="#broker"
                type="button"
                role="tab"
                aria-controls="broker"
                aria-selected="false"
              >
                Brokers
              </button>
              <button
                className="nav-link text-left py-3"
                id="v-pills-tenants-tab"
                data-toggle="pill"
                data-target="#tenants"
                type="button"
                role="tab"
                aria-controls="faq"
                aria-selected="false"
              >
                Tenants
              </button>
              <button
                className="nav-link text-left py-3"
                id="v-pills-properties-tab"
                data-toggle="pill"
                data-target="#properties"
                type="button"
                role="tab"
                aria-controls="properties"
                aria-selected="false"
              >
                View Properties
              </button>
              <button
                className="nav-link text-left py-3"
                id="v-pills-add_properties-tab"
                data-toggle="pill"
                data-target="#add_properties"
                type="button"
                role="tab"
                aria-controls="add_properties"
                aria-selected="false"
              >
                Add Properties
              </button>
              <button
                className="nav-link text-left py-3"
                id="v-pills-booking-tab"
                data-toggle="pill"
                data-target="#booking"
                type="button"
                role="tab"
                aria-controls="booking"
                aria-selected="false"
              >
                View Bookings
              </button>
            </div>
          </div>
          <div className="col-sm-9 border border-muted">
            <div className="tab-content h-100" id="v-pills-tabContent">
              {/* Add Location Start */}
              <div
                className="tab-pane fade show active p-2"
                id="location"
                role="tabpanel"
                aria-labelledby="v-pills-location-tab"
                style={{ maxHeight: 500, overflow: "auto" }}
              >
                <p
                  className="bg-gold px-4 py-2 fos-16 text-light fow-600 w-100"
                  style={{ letterSpacing: 2 }}
                >
                  Locations
                </p>
                <div
                  className="d-flex justify-content-center align-items-center flex-column"
                  style={{ gap: "2rem" }}
                >
                  <span className="text-danger">{locationMsg}</span>
                  <form className="d-flex" onSubmit={newLocationAdd}>
                    <input
                      type="text"
                      placeholder="Add Location"
                      className="form-control"
                      onChange={(e) => setNewLocation(e.target.value)}
                    />
                    <button type="submit" className="btn btn-outline-success">
                      Submit
                    </button>
                  </form>                  
                  <div className="card w-100">
                    <div className="card-header bg-gold p-1">
                      <h5
                        className="card-title pb-1 w-25 text-center mx-auto text-light text-nowrap"
                        style={{ borderBottom: "2px solid white" }}
                      >
                        Current Locations
                      </h5>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-start align-items-center flex-wrap">
                        {locations.map((location, i) => (
                          <span
                            className="badge badge-light shadow p-2 text-dark m-2 fos-14 text-capitalize"
                            key={{ i }}
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Location End */}

              {/* Owners List Start */}
              <div
                className="tab-pane fade p-3"
                id="owner"
                role="tabpanel"
                aria-labelledby="v-pills-owner-tab"
                style={{ height: 500, overflow: "auto" }}
              >
                <p
                  className="bg-gold px-4 py-2 fos-16 text-light fow-600 w-100"
                  style={{ letterSpacing: 2 }}
                >
                  Owners List
                </p>
                <table border={3} width={"100%"}>
                  <tr>
                    <th className="p-2 text-nowrap text-center">Name</th>
                    <th className="p-2 text-nowrap text-center">Email</th>
                    <th className="p-2 text-nowrap text-center">Password</th>
                    <th className="p-2 text-nowrap text-center">
                      Mobile Number
                    </th>
                    <th className="p-2 text-nowrap text-center">Address</th>
                    <th className="p-2 text-nowrap text-center" colSpan={2}>
                      Operation
                    </th>
                  </tr>
                  {ownersData.map((details, i) => (
                    <tr key={i}>
                      <td className="p-2 text-center">{details.name}</td>
                      <td className="p-2 text-center">{details.email}</td>
                      <td className="p-2 text-center">{details.password}</td>
                      <td className="p-2 text-center">{details.mobno}</td>
                      <td className="p-2 text-center">{details.address}</td>
                      <td className="p-2 text-center">
                        <Link
                          to="/admin/home/useredit"
                          className="btn btn-outline-primary"
                          state={{ id: details._id, role: "owner" }}
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="p-2 text-center">
                        <button
                          className="btn btn-outline-danger"
                          onClick={(e) => deleteUser(e, details._id, "owner")}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              {/* Owners List End */}

              {/* Brokers List Start */}
              <div
                className="tab-pane fade p-3"
                id="broker"
                role="tabpanel"
                aria-labelledby="v-pills-broker-tab"
                style={{ height: 500, overflow: "auto" }}
              >
                <p
                  className="bg-gold px-4 py-2 fos-16 text-light fow-600 w-100"
                  style={{ letterSpacing: 2 }}
                >
                  Brokers List
                </p>
                <table border={3} width={"100%"}>
                  <tr>
                    <th className="p-2 text-nowrap text-center">Name</th>
                    <th className="p-2 text-nowrap text-center">Email</th>
                    <th className="p-2 text-nowrap text-center">Password</th>
                    <th className="p-2 text-nowrap text-center">
                      Mobile Number
                    </th>
                    <th className="p-2 text-nowrap text-center">Address</th>
                    <th className="p-2 text-nowrap text-center" colSpan={2}>
                      Operation
                    </th>
                  </tr>
                  {brokersData.map((details, i) => (
                    <tr key={i}>
                      <td className="p-2 text-center">{details.name}</td>
                      <td className="p-2 text-center">{details.email}</td>
                      <td className="p-2 text-center">{details.password}</td>
                      <td className="p-2 text-center">{details.mobno}</td>
                      <td className="p-2 text-center">{details.address}</td>
                      <td className="p-2 text-center">
                        <Link
                          to="/admin/home/useredit"
                          className="btn btn-outline-primary"
                          state={{ id: details._id, role: "broker" }}
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="p-2 text-center">
                        <button
                          className="btn btn-outline-danger"
                          onClick={(e) => deleteUser(e, details._id, "broker")}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              {/* Brokers List End */}

              {/* Tenants List Start */}
              <div
                className="tab-pane fade p-3"
                id="tenants"
                role="tabpanel"
                aria-labelledby="v-pills-tenants-tab"
                style={{ height: 500, overflow: "auto" }}
              >
                <p
                  className="bg-gold px-4 py-2 fos-16 text-light fow-600 w-100"
                  style={{ letterSpacing: 2 }}
                >
                  Tenants List
                </p>
                <table border={3} width={"100%"}>
                  <tr>
                    <th className="p-2 text-nowrap text-center">Name</th>
                    <th className="p-2 text-nowrap text-center">Email</th>
                    <th className="p-2 text-nowrap text-center">Password</th>
                    <th className="p-2 text-nowrap text-center">
                      Mobile Number
                    </th>
                    <th className="p-2 text-nowrap text-center">Address</th>
                    <th className="p-2 text-nowrap text-center" colSpan={2}>
                      Operation
                    </th>
                  </tr>
                  {tenantsData.map((details, i) => (
                    <tr key={i}>
                      <td className="p-2 text-center">{details.name}</td>
                      <td className="p-2 text-center">{details.email}</td>
                      <td className="p-2 text-center">{details.password}</td>
                      <td className="p-2 text-center">{details.mobno}</td>
                      <td className="p-2 text-center">{details.address}</td>
                      <td className="p-2 text-center">
                        <Link
                          to="/admin/home/useredit"
                          className="btn btn-outline-primary"
                          state={{ id: details._id, role: "tenant" }}
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="p-2 text-center">
                        <button
                          className="btn btn-outline-danger"
                          onClick={(e) => deleteUser(e, details._id, "tenant")}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              {/* Tenants List End */}

              {/* View Properties List Start */}
              <div
                className="tab-pane fade p-3"
                id="properties"
                role="tabpanel"
                aria-labelledby="v-pills-properties-tab"
                style={{ height: 500, overflow: "auto" }}
              >
                <p
                  className="bg-gold px-4 py-2 fos-16 text-light fow-600 w-100"
                  style={{ letterSpacing: 2 }}
                >
                  Properties List
                </p>
                <table border={3} width={"100%"}>
                  <tr>
                    <th className="p-2 text-center w-100 text-nowrap">Owner</th>
                    <th className="p-2 text-center w-100 text-nowrap">Email</th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Mobile
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Deposit
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">Rent</th>
                    <th className="p-2 text-center w-100 text-nowrap">Area</th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Parking
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Building Age
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Balcony
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Furnishing
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Bathroom
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Facing
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Non Veg Allowed
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">Water</th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Security
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">Floor</th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Address
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Pincode
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Location
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Tenant Type
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Available Date
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Property Type
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Sub Category
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Description
                    </th>
                    <th className="p-2 text-center w-100 text-nowrap">
                      Posted Date
                    </th>
                    <th
                      className="p-2 text-center w-100 text-nowrap"
                      colSpan={3}
                    >
                      Operation
                    </th>
                  </tr>
                  {propertiesData.map((details, i) => (
                    <tr key={i}>
                      <td className="p-2 text-center w-100 text-nowrap text-nowrap">
                        {details.name}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.email}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.mobile}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.deposit}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.rent}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.area}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.parking}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.buildingAge}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.balcony}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.furnishing}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.bathroom}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.facing}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.nonVegAllowed}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.water}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.security}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.floor}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.address}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.pincode}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.location}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.tenantType}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.availableDate}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.propertyType}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.subCategory}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.description}
                      </td>
                      <td className="p-2 text-center w-100 text-nowrap">
                        {details.postedDate}
                      </td>
                      <td className="p-2 text-center w-100">
                        <Link
                          to="/admin/home/propertyedit"
                          className="btn btn-outline-primary"
                          state={details._id}
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="p-2 text-center w-100">
                        {" "}
                        <button
                          className="btn btn-outline-success"
                          onClick={(e) => bookProperty(e, details._id)}
                        >
                          Book
                        </button>
                      </td>
                      <td className="p-2 text-center w-100">
                        {" "}
                        <button
                          className="btn btn-outline-danger"
                          onClick={(e) => deleteProperty(e, details._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              {/* View Properties List End */}

              {/* Add Properties Start */}
              <div
                className="tab-pane fade p-3"
                id="add_properties"
                role="tabpanel"
                aria-labelledby="v-pills-add_properties-tab"
                style={{ overflowY: "auto", maxHeight: 500 }}
              >
                <p
                  className="bg-gold px-4 py-2 fos-16 text-light fow-600 w-100"
                  style={{ letterSpacing: 2 }}
                >
                  Add Properties
                </p>
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
                    required
                  />
                  <input
                    type="email"
                    className="form-control w-45 w--100 m-2"
                    id="email"
                    placeholder="Enter Email"
                    defaultValue={data.email}
                    ref={inputRefs.emailRef}
                    required
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
                      required
                    />
                  </div>
                  <input
                    type="file"
                    className="form-control-file border w-45 w--100 m-2"
                    ref={inputRefs.imageRef}
                    onChange={(e) => setFiles(e.target.files)}
                    multiple
                    required
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
                      required
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
                      required
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control w-45 w--100 m-2"
                    id="builtup"
                    placeholder="Enter Builtup Area(sqft)"
                    ref={inputRefs.areaRef}
                    required
                  />
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      name="parking"
                      id="parking"
                      className="form-control"
                      ref={inputRefs.parkingRef}
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control w-45 w--100 m-2"
                    id="address"
                    placeholder="Enter Address"
                    ref={inputRefs.addressRef}
                    required
                  />
                  <input
                    type="number"
                    className="form-control w-45 w--100 m-2"
                    id="pincode"
                    placeholder="Enter Pincode"
                    ref={inputRefs.pincodeRef}
                    required
                  />
                  <div className="form-group w-45 w--100 m-2">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      ref={inputRefs.locationRef}
                      required
                    >
                      <option value selected disabled>
                        Select Location
                      </option>
                      {locations.map((area, i) => (
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
                      required
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
                      required
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
                          className="nav-link active text-dark fow-600"
                          data-toggle="pill"
                          href="#rent"
                        >
                          Rent
                        </a>
                      </li>
                      <li className="nav-item border w-50 border-muted">
                        <a
                          className="nav-link text-dark fow-600"
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
                              required
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
                              required
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
                              required
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
                              required
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
                                required
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
                      required
                    />
                  </div>
                  {/* Button */}
                  <div className="card-footer border-0 bg-white w-75 m-2 px-0">
                    <button
                      className="btn btn-gold text-light btn-lg btn-block"
                      type="submit"
                    >
                      Add Property
                    </button>
                  </div>
                </form>
              </div>
              {/* Add Properties End */}

              {/* Bookings List Start */}
              <div
                className="tab-pane fade p-3"
                id="booking"
                role="tabpanel"
                aria-labelledby="v-pills-booking-tab"
                style={{ height: 500, overflow: "auto" }}
              >
                <p
                  className="bg-gold px-4 py-2 fos-16 text-light fow-600 w-100"
                  style={{ letterSpacing: 2 }}
                >
                  Booking List
                </p>

                <table border={3} width={"100%"}>
                  <tr>
                    <th className="p-2 text-nowrap text-center">Booking Id</th>
                    <th className="p-2 text-nowrap text-center">Property Id</th>
                    <th className="p-2 text-nowrap text-center">
                      Property Owner
                    </th>
                    <th className="p-2 text-nowrap text-center">Owner Email</th>
                    <th className="p-2 text-nowrap text-center">
                      Owner Mobile
                    </th>
                    <th className="p-2 text-nowrap text-center">
                      Property Type
                    </th>
                    <th className="p-2 text-nowrap text-center">
                      Property SubType
                    </th>
                    <th className="p-2 text-nowrap text-center">
                      Property Address
                    </th>
                    <th className="p-2 text-nowrap text-center">
                      Property Location
                    </th>
                    <th className="p-2 text-nowrap text-center">
                      Property Posted Date
                    </th>
                    <th className="p-2 text-nowrap text-center">Booker Id</th>
                    <th className="p-2 text-nowrap text-center">Booker Name</th>
                    <th className="p-2 text-nowrap text-center">
                      Booker Email
                    </th>
                    <th className="p-2 text-nowrap text-center">
                      Booker Mobile
                    </th>
                    <th className="p-2 text-nowrap text-center">
                      Booker Address
                    </th>
                    <th className="p-2 text-nowrap text-center">Operation</th>
                  </tr>
                  {bookingData.map((data, i) => (
                    <tr key={i}>
                      <td className="p-2 text-center">{data._id}</td>
                      <td className="p-2 text-center">
                        {data.propertyData._id}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        {data.propertyData.name}
                      </td>
                      <td className="p-2 text-center">
                        {data.propertyData.email}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        {data.propertyData.mobile}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        {data.propertyData.propertyType}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        {data.propertyData.subCategory}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        {data.propertyData.address}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        {data.propertyData.location}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        {data.propertyData.postedDate}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        {data.bookerData._id}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        {data.bookerData.name}
                      </td>
                      <td className="p-2 text-center">
                        {data.bookerData.email}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        {data.bookerData.mobno}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        {data.bookerData.address}
                      </td>
                      <td className="p-2 text-center text-capitalize">
                        <button
                          className="btn btn-outline-danger"
                          onClick={(e) => deleteBooking(e, data._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              {/* Bookings List End */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Admin;

const Wrapper = styled.section`
  .nav-pills .nav-link.active {
    background-color: goldenrod;
    color: white;
  }

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
