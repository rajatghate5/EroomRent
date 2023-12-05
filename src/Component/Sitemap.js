import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const Sitemap = () => {
  const [suggestions, setSuggestions] = useState([]);
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
  return (
    <>
      <section style={{ marginTop: 120 }}>
        {/* Heading */}
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="font-weight-light text-secondary">Site Map</h2>
          </div>
        </div>
        {/* Flats */}
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-sm-11 text-left py-4">
            <h3 className="font-weight-light text-secondary mx-2">
              Flats For Rent
            </h3>
            <div className="d-flex justify-content-start flex-wrap align-items-center">
              {
                suggestions.map((area, i) => (
                  <Link
                  className="text-dark px-2 border-right border-dark text-capitalize"
                  to="/searched"
                  key={i}
                >
                  {area}
                </Link>
                ))
              }               
              </div>
          </div>
        </div>
        
        {/* Rooms */}
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-sm-11 text-left py-4">
            <h3 className="font-weight-light text-secondary mx-2">
              Rooms For Rent
            </h3>
            <div className="d-flex justify-content-start flex-wrap align-items-center">
              {
                suggestions.map((area, i) => (
                  <Link
                  className="text-dark px-2 border-right border-dark text-capitalize"
                  to="/searched"
                  key={i}
                >
                  {area}
                </Link>
                ))
              }               
              </div>
          </div>
        </div>

        {/* Hostel/PGs */}
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-sm-11 text-left py-4">
            <h3 className="font-weight-light text-secondary mx-2">
              Hostel/PGs
            </h3>
            <div className="d-flex justify-content-start flex-wrap align-items-center">
              {
                suggestions.map((area, i) => (
                  <Link
                  className="text-dark px-2 border-right border-dark text-capitalize"
                  to="/searched"
                  key={i}
                >
                  {area}
                </Link>
                ))
              }               
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;
