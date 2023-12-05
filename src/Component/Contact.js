import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Wrapper>
      <section>
        {/* <!-- Main Content --> */}
        <div
          className="row justify-content-center align-items-center border-bottom"
          style={{ marginTop: 80 }}
        >
          <div className="col-sm-10">
            <div className="row">
              <div className="col-sm-3 border border-right-0 border-dark">
                <div
                  className="nav flex-column nav-pills py-4"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link text-left py-3"
                    id="v-pills-aboutus-tab"
                    data-toggle="pill"
                    data-target="#aboutus"
                    type="button"
                    role="tab"
                    aria-controls="aboutus"
                    aria-selected="true"
                  >
                    About Us
                  </button>
                  <button
                    className="nav-link text-left py-3"
                    id="v-pills-addservices-tab"
                    data-toggle="pill"
                    data-target="#addservices"
                    type="button"
                    role="tab"
                    aria-controls="addservices"
                    aria-selected="false"
                  >
                    Additional Services
                  </button>
                  <button
                    className="nav-link text-left py-3"
                    id="v-pills-owners-tab"
                    data-toggle="pill"
                    data-target="#owners"
                    type="button"
                    role="tab"
                    aria-controls="owners"
                    aria-selected="false"
                  >
                    Owners
                  </button>
                  <button
                    className="nav-link text-left py-3"
                    id="v-pills-tenants-tab"
                    data-toggle="pill"
                    data-target="#tenants"
                    type="button"
                    role="tab"
                    aria-controls="tenants"
                    aria-selected="false"
                  >
                    Tenants
                  </button>
                  <button
                    className="nav-link text-left py-3"
                    id="v-pills-faq-tab"
                    data-toggle="pill"
                    data-target="#faq"
                    type="button"
                    role="tab"
                    aria-controls="faq"
                    aria-selected="false"
                  >
                    FAQ
                  </button>
                  <button
                    className="nav-link active text-left py-3"
                    id="v-pills-contactus-tab"
                    data-toggle="pill"
                    data-target="#contactus"
                    type="button"
                    role="tab"
                    aria-controls="contactus"
                    aria-selected="false"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="col-sm-9 border border-dark">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade p-3"
                    id="aboutus"
                    role="tabpanel"
                    aria-labelledby="v-pills-aboutus-tab"
                  >
                    <h2 className="border-bottom pb-2">About Us</h2>
                    <p className="fos-16">
                      We are providing online rental services to find Room,
                      Hostel, PG, and Flat booking services online without any
                      effort, our objective is to provide hassel free service
                      and save your time. just register and provide your
                      preferences, we will suggest you room, according to your
                      choice, based on location, room type, etc.
                      <br />
                      <br />
                      We have provided confirm-booking and non-confirm booking
                      options to the tenant, first confirmed booking and second
                      temporary booking, after confirmed booking, we will hold
                      the property till 48 hrs and temporary booking property
                      can be booked by others. If you are 100% sure then click
                      on confirmed booking options because we are taking 500 RS
                      that is not refundable on cancellation of property
                      booking, if you finalize booking then this amount will be
                      adjusted into the room rent amount.
                      <br />
                      <br />
                      Property owners/Broker can post your room easily with us.
                      we will provide the genuine customer as a tenant for your
                      flat, hostel, PG, or room. We provide a complete dashboard
                      for you where you can easily view your room, booking, and
                      tenant information from dashboard page. You can also
                      import soft copies of agreement paper, tenant identity
                      documents in your dashboard with full security. During
                      covid-19 you can maintain safe distance to use our
                      services online.
                      <br />
                      <br />
                      We have verified each property listing and make sure that
                      these are genuine owners or brokers. all listed property
                      is secure, reliable, and contains the right information.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade p-3"
                    id="addservices"
                    role="tabpanel"
                    aria-labelledby="v-pills-addservices-tab"
                  >
                    <h2 className="border-bottom pb-2">Additional Services</h2>
                    <p className="fos-16">
                      ERoomRent provides you a one-stop shop for all paperwork
                      and documentation processing, relating to lease agreement
                      registration, bank franking, police verification and
                      society approvals.
                      <br />
                      We have a network of real-estate executives who will
                      assist you in completing a hassle-free transaction at the
                      cost of a small service fee. This service can be availed
                      both by the owners or the lessee by dropping us a note at:{" "}
                      <a href="#">eroomrentind@gmail.com</a>
                      <br />
                      We will do following on your behalf:
                      <ul className="ml-5">
                        <li className="fos-16">
                          Prepare draft of{" "}
                          <Link to="/rentalagreement">
                            Leave & License agreement
                          </Link>{" "}
                          between both the parties as per legal requirements
                        </li>
                        <li className="fos-16">
                          After approval from both parties, get the document
                          stamped
                        </li>
                        <li className="fos-16">
                          Execute the agreement between both parties
                        </li>
                        <li className="fos-16">
                          Enter the agreement details online for registration
                        </li>
                        <li className="fos-16">
                          Book an appointment on your behalf
                        </li>
                        <li className="fos-16">
                          Complete the process on registration day with you.
                        </li>
                      </ul>
                      <br />
                      Basically we will ensure that you get the rental agreement
                      registered without any hassle
                    </p>
                  </div>
                  <div
                    className="tab-pane fade p-3"
                    id="owners"
                    role="tabpanel"
                    aria-labelledby="v-pills-owners-tab"
                  >
                    <h2 className="border-bottom pb-2">Owners</h2>
                    <p className="fos-16">
                      Property owners/Broker can post your room easily with us.
                      we will provide the genuine customer as a tenant for your
                      flat, hostel, PG, or room. We provide a complete dashboard
                      for you where you can easily view your room, booking, and
                      tenant information from dashboard page. You can also
                      import soft copies of agreement paper, tenant identity
                      documents in your dashboard with full security. During
                      covid-19 you can maintain safe distance to use our
                      services online.
                      <br />
                      <br />
                      We have verified each property listing and make sure that
                      these are genuine owners or brokers. all listed property
                      is secure, reliable, and contains the right information.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade p-3"
                    id="tenants"
                    role="tabpanel"
                    aria-labelledby="v-pills-tenants-tab"
                  >
                    <h2 className="border-bottom pb-2">Tenants</h2>
                    <p className="fos-16">
                      We are providing online rental services to find Room,
                      Hostel, PG, and Flat booking services online without any
                      effort, our objective is to provide hassel free service
                      and save your time. just register and provide your
                      preferences, we will suggest you room, according to your
                      choice, based on location, room type, etc.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade p-3"
                    id="faq"
                    role="tabpanel"
                    aria-labelledby="v-pills-faq-tab"
                  >
                    <h2 className="border-bottom pb-2">FAQ</h2>
                    <div className="accordion" id="accordionExample">
                      {/* <!-- Card 1 --> */}
                      <div className="card mt-3 shadow p-1 mb-3 bg-white rounded">
                        <div
                          className="card-header bg-white border-0"
                          id="headingOne"
                        >
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left text-dark fos-20 font-weight-bold"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              How i can add my property?
                            </button>
                          </h2>
                        </div>

                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body mx-3">
                            You can go on Property Owner Regsistration Form and
                            add your property. We are providing complete
                            dashboard where you can add room, view room and view
                            booking.
                          </div>
                        </div>
                      </div>
                      {/* <!-- Card 2 --> */}
                      <div className="card mt-3 shadow p-1 mb-3 bg-white rounded">
                        <div
                          className="card-header bg-white border-0"
                          id="headingTwo"
                        >
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed text-dark font-weight-bold fos-20"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              How to book room by tenant ?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body mx-3">
                            If you are new user's then you can register by
                            login/register option then search room and book here
                            we are providing complete dashboard for you.
                          </div>
                        </div>
                      </div>
                      {/* <!-- Card 3 --> */}
                      <div className="card mt-3 shadow p-1 mb-3 bg-white rounded">
                        <div
                          className="card-header bg-white border-0"
                          id="headingThree"
                        >
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed text-dark fos-20 font-weight-bold"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              What is confirmed booking and non-confirmed
                              booking?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body mx-3">
                            In confirmed booking we will hold your booking room
                            till 48 hrs and we are taking 500 rs as a
                            confirmation amount that will be adjust in your rent
                            after booking.if you will cancel then this amount
                            will not refunded so if you 100% sure then you go
                            for confirmed booking otherwise go for non-confirmed
                            but in non-confiremed booking we can not hold room
                            it can be booked by other.
                          </div>
                        </div>
                      </div>
                      {/* <!-- Card 4 --> */}
                      <div className="card mt-3 shadow p-1 mb-3 bg-white rounded">
                        <div
                          className="card-header bg-white border-0"
                          id="headingFour"
                        >
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed text-dark fos-20 font-weight-bold"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              How to visit room physically or virtually?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body mx-3">
                            We are providing both way to show room you can view
                            room virtually by video caling and physically to
                            direct contact with us or room owner, we will
                            provide complete details of owner as per owner
                            permission or our executive will show room to you
                            for confirmed booking customer.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active p-3"
                    id="contactus"
                    role="tabpanel"
                    aria-labelledby="v-pills-contactus-tab"
                  >
                    <h2 className="border-bottom pb-2">Contact Us</h2>
                    <p className="fos-16">
                      In case you have any questions, suggestions or if you just
                      want to have a general talk with us. You can reach out to
                      us by any of the below means:
                    </p>
                    <div className="row mt-5">
                      <div className="col-sm-7 border-right border-dark">
                        <h5 className="text-dark">Traditional Way</h5>
                        <div className="row p-2">
                          <div className="col-sm-4">
                            <p className="my-0 py-0">Write to us</p>
                            <p className="my-0 py-0">Media Query</p>
                            <p className="my-0 py-0">Contact Us</p>
                          </div>
                          <div className="col-sm-7 pr-0 d-flex flex-column align-items-start">
                            <a href="#">eroomrentind@gmail.com</a>
                            <a href="#">shivaconceptsolution@gmail.com</a>
                            <a href="#">+919630623876</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <h5 className="text-dark">
                          Reach us on social network
                        </h5>
                        <i className="fab fa-facebook fa-2x m-2"></i>
                        <i className="fab fa-twitter fa-2x m-2"></i>
                        <i className="fab fa-instagram fa-2x m-2"></i>
                      </div>
                    </div>
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

export default Contact;

const Wrapper = styled.section`
  .nav-pills .nav-link.active {
    background-color: goldenrod;
    color: white;
  }
`;
