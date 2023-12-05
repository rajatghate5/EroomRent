import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyBooking = () => {
  return (
    <Wrapper>
      <section className="bg-lightest-grey py-3">
        <div
          className="row justify-content-center align-items-center"
          style={{ marginTop: 10, height: "20%" }}
        >
          <div className="col-sm-8 p-0 mt-5">
            <ul className="breadcrumb" style={{ backgroundColor: "#803c6d" }}>
              <li className="breadcrumb-item pl-2">
                <Link to="/admin" className="text-light font-weight-normal">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-light font-weight-bold">
                My Bookings
              </li>
            </ul>
            <div className="card text-center justify-content-center align-items-center mt-4 p-0 bor-radius-10">
              {/* Title */}
              <div className="card-header text-center pb-0 w-100">
                <ul
                  className="nav nav-tabs flex-nowrap align-items-stretch mx-0 my-0"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item border-0" role="presentation">
                    <button
                      className="nav-link active text-secondary font-weight-bold pb-4"
                      id="home-tab"
                      data-toggle="tab"
                      data-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Ongoing Booking
                    </button>
                  </li>
                  <li className="nav-item border-0" role="presentation">
                    <button
                      className="nav-link text-secondary font-weight-bold pb-4"
                      id="profile-tab"
                      data-toggle="tab"
                      data-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Quotations
                    </button>
                  </li>
                  <li className="nav-item border-0" role="presentation">
                    <button
                      className="nav-link text-secondary font-weight-bold pb-4"
                      id="messages-tab"
                      data-toggle="tab"
                      data-target="#messages"
                      type="button"
                      role="tab"
                      aria-controls="messages"
                      aria-selected="false"
                    >
                      Booking History
                    </button>
                  </li>
                </ul>
              </div>
              {/* Content */}
              <div
                className="card-body p-0 w-100 d-sm-flex justify-content-center align-items-center"
                style={{ height: "80vh" }}
              >
                <div className="tab-content">
                  <div
                    className="tab-pane active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <img src="/images/booking.png" alt="Booking" className="img-fluid" />
                    <h5 className="font-weight-bold">No Booking found</h5>
                    <p className="text-secondary fos-14 mx-auto w-75">
                      Looks like you don't have any bookings here but you can
                      request for ar service now
                    </p>
                    <Link
                      to="/admin"
                      className="bg-green border-0 text-light font-weight-bold mt-2 px-3 py-2 rounded"
                    >
                      Book Now
                    </Link>
                  </div>
                  <div
                    className="tab-pane"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <img src="/images/booking.png" alt="Booking" className="img-fluid" />
                    <h5 className="font-weight-bold">No Booking found</h5>
                    <p className="text-secondary fos-14 mx-auto w-75">
                      Looks like you don't have any bookings here but you can
                      request for ar service now
                    </p>
                    <Link
                      to="/admin"
                      className="bg-green border-0 text-light font-weight-bold mt-2 px-3 py-2 rounded"
                    >
                      Book Now
                    </Link>
                  </div>
                  <div
                    className="tab-pane"
                    id="messages"
                    role="tabpanel"
                    aria-labelledby="messages-tab"
                  >
                    <img src="/images/booking.png" alt="Booking" className="img-fluid" />
                    <h5 className="font-weight-bold">No Booking found</h5>
                    <p className="text-secondary fos-14 mx-auto w-75">
                      Looks like you don't have any bookings here but you can
                      request for ar service now
                    </p>
                    <Link
                      to="/admin"
                      className="bg-green border-0 text-light font-weight-bold mt-2 px-3 py-2 rounded"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default MyBooking;

const Wrapper = styled.section`
  .breadcrumb-item + .breadcrumb-item::before {
    float: left;
    padding-right: 0.5rem;
    color: #fff;
    content: "ᐳ";
    font-weight: bolder;
  }
`;
