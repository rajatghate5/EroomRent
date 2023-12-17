import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Footer = () => {
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
    <footer style={{ marginTop: "3rem" }}>
      {/* <!-- Options --> */}
      <div className="row">
        <div className="col-sm-12 px-0">
          {/* <!-- Nav tabs --> */}
          <ul className="nav nav-tabs px-4" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#room-rent"
              >
                Room for Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#flat-rent">
                Flat for Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#hostel-rent">
                Hostel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#pg-rent">
                PG
              </a>
            </li>
          </ul>
          {/* <!-- Tab panes --> */}
          <div className="tab-content">
            <div id="room-rent" className="container tab-pane active mx-2 py-4">
              <div className="d-flex justify-content-start flex-wrap align-items-center">
                {suggestions.map((area, i) => (
                  <Link
                    className="text-dark px-2 border-right border-dark text-capitalize"
                    to="/searched"
                    state={{ customLocation: area, propertyData: "room" }}
                    key={i}
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>
            <div id="flat-rent" className="container tab-pane fade mx-2 py-4">
              <div className="d-flex justify-content-start flex-wrap align-items-center">
                {suggestions.map((area, i) => (
                  <Link
                    className="text-dark px-2 border-right border-dark text-capitalize"
                    to="/searched"
                    key={i}
                    state={{ customLocation: area, propertyData: "flat" }}
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>
            <div id="hostel-rent" className="container tab-pane fade mx-2 py-4">
              <div className="d-flex justify-content-start flex-wrap align-items-center">
                {suggestions.map((area, i) => (
                  <Link
                    className="text-dark px-2 border-right border-dark text-capitalize"
                    to="/searched"
                    state={{ customLocation: area, propertyData: "hostel" }}
                    key={i}
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>
            <div id="pg-rent" className="container tab-pane fade mx-2 py-4">
              <div className="d-flex justify-content-start flex-wrap align-items-center">
                {suggestions.map((area, i) => (
                  <Link
                    className="text-dark px-2 border-right border-dark text-capitalize"
                    to="/searched"
                    state={{ customLocation: area, propertyData: "pg" }}
                    key={i}
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Services --> */}
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12 p-5">
              <h4 className="text-dark">ERoomRent Services</h4>
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-12 pl-5 pb-5 d-sm-flex justify-content-start align-items-center"
              style={{ gap: "1rem" }}
            >
              <Link to="/rentalagreement" className="btn btn-secondary">
                Rental Agreement
              </Link>
              <Link to="/privacypolicy" className="btn btn-secondary">
                PG Services Question
              </Link>
              <Link to="/privacypolicy" className="btn btn-secondary">
                Hostel Services Question
              </Link>
              <Link to="/privacypolicy" className="btn btn-secondary">
                Rent Services Question
              </Link>
              <Link to="/" className="btn btn-secondary">
                Book Room
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Property --> */}
      <div className="row border-top border-bottom border-secondary py-5 bg-lightest-grey">
        <div className="col-sm-6 text-center border-right border-secondary">
          <h3 className="text-dark">Find Property</h3>
          <p className="text-secondary">Select from thousands of options.</p>
          <Link to="/" className="btn btn-dark">
            Find Now
          </Link>
        </div>
        <div className="col-sm-6 text-center">
          <h3 className="text-dark">List Your Property</h3>
          <p className="text-secondary">Easily Post Your Property</p>
          <Link to="/postyourproperty" className="btn btn-dark">
            Post Now
          </Link>
        </div>
      </div>

      {/* <!-- Pages --> */}
      <div className="row justify-content-center align-items-center py-3">
        <div className="col-sm-8 text-center">
          {/* <!-- Anchor Tags --> */}
          <div className="row ">
            <div className="col-sm-12 d-sm-flex justify-content-center align-items-center border-bottom py-4 px-0 mx-0 border-bottom border-secondary">
              <Link to="/about" className="px-0 mx-0 text-secondary fos-20">
                About Us
              </Link>
              <Link
                to="/termsandconditions"
                className="mx-3 text-secondary fos-20"
              >
                Terms & Conditions
              </Link>
              <Link to="/privacypolicy" className="mx-3 text-secondary fos-20">
                Privacy Policy
              </Link>
              <Link to="/testimonial" className="mx-3 text-secondary fos-20">
                Testimonials
              </Link>
              <Link to="/sitemap" className="mx-3 text-secondary fos-20">
                Sitemap
              </Link>
              <Link to="/faq" className="px-0 mx-0 text-secondary fos-20">
                FAQ
              </Link>
            </div>
          </div>

          {/* <!-- Download App --> */}
          <div className="row mt-5">
            <div className="col-sm-12">
              <img src="/images/playstore.png" alt="" />
            </div>
          </div>

          {/* <!-- Social links --> */}
          <div className="row mt-4 justify-content-center align-items-center">
            <div className="col-sm-1">
              <i className="fab fa-facebook fa-2x"></i>
            </div>
            <div className="col-sm-1">
              <i className="fab fa-twitter fa-2x"></i>
            </div>
            <div className="col-sm-1">
              <i className="fab fa-instagram-square fa-2x"></i>
            </div>
            <div className="col-sm-1">
              <i className="fab fa-linkedin fa-2x"></i>
            </div>
            <div className="col-sm-1">
              <i className="fab fa-youtube fa-2x"></i>
            </div>
          </div>

          {/* <!-- Copyrights --> */}
          <div className="row mt-3">
            <div className="col-sm-12 my-0 py-0">
              <p>
                © 2023 All rights reserved by EroomRent developed by Kangaroo
                Software PVT LTD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
