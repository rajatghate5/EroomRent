import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Blog = () => {
  return (
    <Wrapper>
      <div id="container">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-white shadow cusSticky py-0">
            <Link to="/" className="navbar-brand" data-abc="true">
              <img
                src="/images/EroomRent.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse mx-auto"
              id="navbarColor02"
            >
              <ul className="navbar-nav mx-auto d-sm-flex align-items-center">
                <li className="nav-item dropdown mx-2">
                  <div className="d-sm-flex align-items-center">
                    <a
                      className="nav-link dropdown-toggle py-0 px-2 border-right text-dark fow-600"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                  </div>
                  <ul
                    className="dropdown-menu text-left fos-14 bg-dark fow-600"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link to="/about" className="dropdown-item py-2">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item py-2">
                        Search Property
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <div className="d-sm-flex align-items-center">
                    <a
                      className="nav-link dropdown-toggle py-0 px-2 border-right text-dark fow-600"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Property
                    </a>
                  </div>
                  <ul
                    className="dropdown-menu text-left fos-14 bg-dark fow-600"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link to="/tenantplans" className="dropdown-item py-2">
                        Renting
                      </Link>
                    </li>
                    <li>
                      <Link to="/tenantplans" className="dropdown-item py-2">
                        Paying Guest
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <div className="d-sm-flex align-items-center">
                    <a
                      className="nav-link dropdown-toggle py-0 px-2 border-right text-dark fow-600"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      News & Trends
                    </a>
                  </div>
                  <ul
                    className="dropdown-menu text-left fos-14 bg-dark fow-600"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link to="/" className="dropdown-item py-2">
                        EroomRent News
                      </Link>
                    </li>
                    <li>
                      <Link to="/testimonial" className="dropdown-item py-2">
                        EroomRent Reviews
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item py-2">
                        Android App
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className="nav-item border-right"
                  style={{ cursor: "pointer" }}
                >
                  <span className="pr-2 py-0 my-0 fow-600">Legal</span>
                </li>
                <li className="nav-item dropdown mx-2">
                  <div className="d-sm-flex align-items-center">
                    <a
                      className="nav-link dropdown-toggle py-0 px-2 border-right text-dark fow-600"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home Services
                    </a>
                  </div>
                  <ul
                    className="dropdown-menu text-left fos-14 bg-dark fow-600"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link
                        to="/rentalagreement"
                        className="dropdown-item py-2"
                      >
                        Rent Agreement
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item py-2">
                        Packers & Movers
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item py-2">
                        Painting & Cleaning
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <div className="d-sm-flex align-items-center">
                    <a
                      className="nav-link dropdown-toggle py-0 px-2 border-right text-dark fow-600"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Languages
                    </a>
                  </div>
                  <ul
                    className="dropdown-menu text-left fos-14 bg-dark fow-600"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item py-2" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item py-2" href="#">
                        हिंदी
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item py-2" href="#">
                        मराठी
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item py-2" href="#">
                        తెలుగు
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item py-2" href="#">
                        தமிழ்
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item py-2" href="#">
                        ಕನ್ನಡ
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="container-fluid bg-lightest-grey">
          <section style={{ paddingTop: 80 }}>
            {/* <!-- Top Details --> */}
            <div
              className="row d-sm-flex justify-content-center align-items-stretch"
              style={{ gap: "1rem" }}
            >
              {/* <!-- Trending Block --> */}
              <div className="col-sm-2 bg-white p-0">
                <h3 className="border-bottom border-muted mt-0 pt-0">
                  <span
                    className="badge badge-success rounded-0 fos-14"
                    style={{ textTransform: "capitalize" }}
                  >
                    Trending
                  </span>
                </h3>
                <ul id="lts-none">
                  <li className="d-sm-flex justify-content-around align-items-center m-3">
                    <img
                      src="/images/blog-images/img1.jpg"
                      alt="Blog Images"
                      className="img-fluid w-50 p-3"
                    />
                    <h6>Inside Superstars Mammootty and Dulquer</h6>
                  </li>
                  <li className="d-sm-flex justify-content-around align-items-center m-3">
                    <img
                      src="/images/blog-images/img2.jpg"
                      alt="Blog Images"
                      className="img-fluid w-50 p-3"
                    />
                    <h6>Conveyance Deed : Meaning, Importance,</h6>
                  </li>
                  <li className="d-sm-flex justify-content-around align-items-center m-3">
                    <img
                      src="/images/blog-images/img3.jpeg"
                      alt="Blog Images"
                      className="img-fluid w-50 p-3"
                    />
                    <h6>Know Your Renting Rights with the Model</h6>
                  </li>
                  <li className="d-sm-flex justify-content-around align-items-center m-3">
                    <img
                      src="/images/blog-images/img4.jpg"
                      alt="Blog Images"
                      className="img-fluid w-50 p-3"
                    />
                    <h6>Pooja Room Designs for Indian Homes in 2023</h6>
                  </li>
                  <li
                    className="d-sm-flex justify-content-around align-items-center m-3"
                    style={{ borderBottom: "none" }}
                  >
                    <img
                      src="/images/blog-images/img5.jpg"
                      alt="Blog Images"
                      className="img-fluid w-50 p-3"
                    />
                    <h6>Home Office Ideas: Maximize</h6>
                  </li>
                </ul>
              </div>
              <div
                className="col-sm-5 d-flex flex-column"
                style={{ gap: "0rem" }}
              >
                <div id="demo" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                        Interiors Design
                      </span>
                      <img
                        src="/images/blog-images/img1.jpg"
                        alt="Interior Design"
                        width="1100"
                        height="300"
                      />
                      <div className="carousel-caption w-100">
                        <h2 className="w-100 text-left text-info">
                          Inside Superstars Mammootty
                          <br /> and Dulquer Salmaan’s House
                        </h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                        Legal
                      </span>
                      <img
                        src="/images/blog-images/img2.jpg"
                        alt="Rent Agreement"
                        width="1100"
                        height="400"
                      />
                      <div className="carousel-caption w-100">
                        <h2 className="w-100 text-left text-info">
                          Conveyance Deed: Meaning, <br /> Importance, Formal &
                          More
                        </h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                        Renting
                      </span>
                      <img
                        src="/images/blog-images/img3.jpeg"
                        alt="Interior Design"
                        width="1100"
                        height="300"
                      />
                      <div className="carousel-caption w-100">
                        <h2 className="w-100 text-left text-info">
                          Know Your Renting Rights with <br />
                          the Model Tenancy Act
                        </h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                        Interior Design
                      </span>
                      <img
                        src="/images/blog-images/img4.jpg"
                        alt="Interior Design"
                        width="1100"
                        height="300"
                      />
                      <div className="carousel-caption w-100">
                        <h2 className="w-100 text-left text-info">
                          Pooja Room Designs for Indian Homes in 2023
                        </h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                        Interior Design
                      </span>
                      <img
                        src="/images/blog-images/img5.jpg"
                        alt="Interior Design"
                        width="1100"
                        height="300"
                      />
                      <div className="carousel-caption w-100">
                        <h2 className="w-100 text-left text-info">
                          Home Office Ideas: Maximize <br /> Comfort and
                          Efficiency
                        </h2>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
                <div className="card-group d-sm-flex" style={{ gap: "1rem" }}>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-1 p-1 font-weight-normal">
                      Interiors Design
                    </span>
                    <img
                      className="card-img-top h-6rem"
                      src="/images/blog-images/img1.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-footer">
                      <h6 className="text-dark">
                        Inside Superstars Mammootty and Dulquer Salmaan’s House
                      </h6>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-1 p-1 font-weight-normal">
                      Legal
                    </span>
                    <img
                      className="card-img-top h-6rem"
                      src="/images/blog-images/img2.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-footer">
                      <h6 className="text-dark">
                        Conveyance Deed: Meaning, Importance, Format & More
                      </h6>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-2 p-1 font-weight-normal">
                      Renting
                    </span>
                    <img
                      className="card-img-top h-6rem"
                      src="/images/blog-images/img3.jpeg"
                      alt="Card image cap"
                    />
                    <div className="card-footer h-100">
                      <h6 className="text-dark">
                        Know Your Renting Rights with the Model
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="card-deck flex-column"
                  style={{ gap: "5.5rem" }}
                >
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Interiors Design
                    </span>
                    <img
                      className="card-img-top"
                      src="/images/blog-images/img1.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-footer bg-white border-0">
                      <h6 className="text-dark">
                        Inside Superstars Mammootty and Dulquer Salmaan’s House
                      </h6>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Legal
                    </span>
                    <img
                      className="card-img-top"
                      src="/images/blog-images/img2.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-footer bg-white border-0">
                      <h6 className="text-dark">
                        Conveyance Deed: Meaning, Importance, Format & More
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Multiple Cards --> */}
            <div className="row d-sm-flex justify-content-center align-items-center">
              <div className="col-sm-11">
                {/* <!-- Row - 1 --> */}
                <div className="card-deck mt-5">
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Interiors Design
                    </span>
                    <div className="card-img-top">
                      <img
                        src="/images/blog-images/img1.jpg"
                        alt="Blog Images"
                        className="img-fluid"
                        style={{ height: "20rem" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        Inside Superstars Mammootty and Dulquer Salmaan’s House
                      </h4>
                      <p className="card-text text-left px-2">
                        Muhammad Kutty Panaparambil Ismail, better known by his
                        stage name Mammootty, is a Padma Shri awardee and one of
                        the biggest stars in Mollywood in Kerala.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Legal
                    </span>
                    <img
                      src="images/blog-images/img2.jpg"
                      alt="Blog Images"
                      className="img-fluid"
                      style={{ height: "20rem" }}
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        Conveyance Deed: Meaning, Importance, Format & More
                      </h4>
                      <p className="card-text text-left px-2">
                        Conveyance simply means transferring or transporting
                        something from one place to another. In law terms,
                        conveyance means the process of transferring property,
                        assets, title, rights, ownership, etc.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Renting
                    </span>
                    <div className="card-img-top">
                      <img
                        src="images/blog-images/img3.jpeg"
                        alt="Blog Images"
                        className="img-fluid"
                        style={{ height: "20rem" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        Know Your Renting Rights with the Model
                      </h4>
                      <p className="card-text text-left px-2">
                        2020 left us in a whirlwind, some of us made it through
                        with so many ups and downs, but still made it, but what
                        about everyone else? During COVID-19, jobs were lost,
                        the economy came crashing down, and we basically made
                        history every month.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Row - 2 --> */}
                <div className="card-deck mt-5">
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Interiors Design
                    </span>
                    <div className="card-img-top">
                      <img
                        src="/images/blog-images/img4.jpg"
                        alt="Blog Images"
                        className="img-fluid"
                        style={{ height: "20rem" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        Pooja Room Designs for Indian Homes in 2023
                      </h4>
                      <p className="card-text text-left px-2">
                        More than half of the population in India are Hindus. In
                        our country, spirituality and religion are taken very
                        seriously. Therefore, irrespective of rich or poor,
                        every Indian has a designated space in their home where
                        they can offer their prayers in peace and solitude.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Interiors design
                    </span>
                    <img
                      src="images/blog-images/img5.jpg"
                      alt="Blog Images"
                      className="img-fluid"
                      style={{ height: "20rem" }}
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        Home Office Ideas: Maximize Comfort & Efficiency
                      </h4>
                      <p className="card-text text-left px-2">
                        Conveyance simply means transferring or transporting
                        something from one place to another. In law terms,
                        conveyance means the process of transferring property,
                        assets, title, rights, ownership, etc.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Interiors Design
                    </span>
                    <div className="card-img-top">
                      <img
                        src="images/blog-images/img6.jpg"
                        alt="Blog Images"
                        className="img-fluid"
                        style={{ height: "20rem" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        Top 15 Biophilic Design: Design Your Space with Nature
                      </h4>
                      <p className="card-text text-left px-2">
                        Biophilic design isn’t just about aesthetics; it’s a
                        holistic approach that merges nature with architecture
                        for well-being. By incorporating natural…
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- Row - 3 --> */}
                <div className="card-deck mt-5">
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      FLAT VASTU / HOME VASTU
                    </span>
                    <div className="card-img-top">
                      <img
                        src="/images/blog-images/img7.jpg"
                        alt="Blog Images"
                        className="img-fluid"
                        style={{ height: "20rem" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        East Facing House Vastu: Creating Balance and Well-Being
                      </h4>
                      <p className="card-text text-left px-2">
                        Our biggest dream and achievement in life would be to
                        buy our own house. We save a fortune for this…{" "}
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Interiors design
                    </span>
                    <img
                      src="/images/blog-images/img8.jpg"
                      alt="Blog Images"
                      className="img-fluid"
                      style={{ height: "20rem" }}
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        Best Wall Texture Designs for Bedroom to Transform Your
                        Space
                      </h4>
                      <p className="card-text text-left px-2">
                        Walls make a home secure. They not only support floors,
                        roofs and ceilings but also keep us safe from harsh…
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      CELEBRITY HOMES
                    </span>
                    <div className="card-img-top">
                      <img
                        src="/images/blog-images/img9.jpg"
                        alt="Blog Images"
                        className="img-fluid"
                        style={{ height: "20rem" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        A Dive into Virat Kohli’s House!
                      </h4>
                      <p className="card-text text-left px-2">
                        Virat Kohli, well, this is a name which, for sure, needs
                        no introduction. He has carved out a niche for…
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- Row - 4 --> */}
                <div className="card-deck mt-5">
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Renting / Selling
                    </span>
                    <div className="card-img-top">
                      <img
                        src="/images/blog-images/img10.jpg"
                        alt="Blog Images"
                        className="img-fluid"
                        style={{ height: "20rem" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        EroomRent ProTips – How to Get a Tenant or Buyer Fast!
                      </h4>
                      <p className="card-text text-left px-2">
                        When a tenant leaves or you decide it’s time to sell or
                        rent out your home, what can you do…
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Renting
                    </span>
                    <img
                      src="/images/blog-images/img11.jpg"
                      alt="Blog Images"
                      className="img-fluid"
                      style={{ height: "20rem" }}
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        Co-operative Housing Society: Features, Types and
                        Registration Process
                      </h4>
                      <p className="card-text text-left px-2">
                        A cooperative housing society meaning includes
                        cooperation and consent between numbers of people.
                        Cooperative group housing society proves to be…
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Interior Design
                    </span>
                    <div className="card-img-top">
                      <img
                        src="/images/blog-images/img12.jpg"
                        alt="Blog Images"
                        className="img-fluid"
                        style={{ height: "20rem" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        Home Automation: A Step in the Present Never Looked This
                        Futuristic!
                      </h4>
                      <p className="card-text text-left px-2">
                        Today, home automation or bright home design ideas have
                        peaked, with easy and efficient ways to secure your
                        home. These…
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- Row - 5 --> */}
                <div className="card-deck mt-5">
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Legal
                    </span>
                    <div className="card-img-top">
                      <img
                        src="/images/blog-images/img13.jpg"
                        alt="Blog Images"
                        className="img-fluid"
                        style={{ height: "20rem" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        The Importance of Tenant Police Verification / Tenant
                        Verification and Why You Need to Do It
                      </h4>
                      <p className="card-text text-left px-2">
                        With an ever-increasing population and the lack of
                        housing, it is natural that most people are opting to
                        rent a…
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Cleaning
                    </span>
                    <img
                      src="/images/blog-images/img14.jpg"
                      alt="Blog Images"
                      className="img-fluid"
                      style={{ height: "20rem" }}
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        9 Kitchen Cleaning Tips and Hacks, To Spruce Up Your
                        Space!
                      </h4>
                      <p className="card-text text-left px-2">
                        How to maintain a clean kitchen, you ask? Between
                        cleaning up after cooking, clearing up the inevitable
                        mess, doing the…
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <span className="badge badge-danger position-absolute m-3 p-2 font-weight-normal">
                      Interior Design
                    </span>
                    <div className="card-img-top">
                      <img
                        src="/images/blog-images/img15.jpg"
                        alt="Blog Images"
                        className="img-fluid"
                        style={{ height: "20rem" }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h4 className="card-title">
                        Studio Apartment: Meaning, Price Range and Features
                      </h4>
                      <p className="card-text text-left px-2">
                        Searching for an efficient, luxurious, and convenient
                        living space with plenty of privacy that is also
                        economically feasible? We’ve got…
                      </p>
                    </div>
                  </div>
                </div>
                {/* Pagination */}
                <nav aria-label="Page navigation example" className="mt-5">
                  <ul className="pagination justify-content-center pagination">
                    <li className="page-item active">
                      <a className="page-link " href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        &gt;
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        </div>

        <footer>
          <div className="row justify-content-center align-items-center mt-5">
            <div className="col-sm-10">
              <div className="shadow p-3 mb-5 bg-white rounded">
                <h5>
                  To Rent a Property{" "}
                  <Link to="/" className="text-dark">
                    Click Here
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Blog;

const Wrapper = styled.section`
  .navbar-nav li:hover > ul.dropdown-menu {
    display: block;
  }

  .dropdown-submenu {
    position: relative;
  }

  .dropdown-submenu > .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
  }

  .dropdown-item {
    color: white;
  }

  .dropdown-item:hover {
    background-color: white;
    color: goldenrod;
  }

  /* rotate caret on hover */
  .dropdown-menu > li > a:hover:after {
    text-decoration: underline;
    transform: rotate(-90deg);
  }

  #lts-none li {
    list-style-type: none;
    text-decoration: none;
    font-size: 14px;
    border-bottom: 2px dashed black;
  }

  .carousel-inner img {
    width: 100%;
    height: 100%;
  }

  .carousel-item {
    height: 330px;
  }

  .carousel-caption {
    left: 10%;
  }

  .card .badge,
  .carousel .badge {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 600;
  }

  .h-6rem {
    height: 8rem;
  }

  .page-item.active .page-link {
    background-color: goldenrod;
    border-color: goldenrod;
  }

  .page-link {
    color: goldenrod;
  }

  .page-link:hover {
    z-index: 2;
    color: #fff;
    text-decoration: none;
    background-color: goldenrod;
    border-color: #dee2e6;
  }
`;
