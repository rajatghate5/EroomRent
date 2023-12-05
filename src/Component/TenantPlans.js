import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TenantPlans = () => {
  const proceedToPay = () => {
    alert("Proceed To Payment");
  };
  return (
    <Wrapper>
      <section style={{ marginTop: 80 }}>
        {/* Heading */}
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="text-dark font-weight-normal">
              Choose a plan and{" "}
              <span className="text-gold">SAVE THOUSANDS</span> on brokerage.
            </h2>
            <h3 className="text-dark font-weight-normal">
              For assistance call us at:{" "}
              <span className="text-gold">+09630623876</span>
            </h3>
          </div>
        </div>
        {/* Renew Plan */}
        <div className="row px-2 my-3">
          <div
            className="col-sm-12 py-2 text-center"
            style={{ backgroundColor: "#999" }}
          >
            <i className="fas fa-info-circle"></i>
            <span className="text-light">
              {" "}
              The validity of your Basic Plan has expired. Please renew/upgrade
              your plan to resume this service.
            </span>
          </div>
        </div>
        {/* Cards */}
        <div className="row px-4 mt-4">
          <div className="col-sm-12 p-0">
            <div className="card-deck">
              <div className="card border-success">
                <div className="card-title bg-success d-sm-flex justify-content-between p-2 align-items-center">
                  <p className="text-light font-weight-bold fos-20">
                    Freedom Plan
                  </p>
                  <div className="text-right">
                    <s
                      className="font-weight-bold fos-20"
                      style={{ color: "gainsboro" }}
                    >
                      ₹ 1,999
                    </s>
                    <span className="font-weight-bold text-light fos-20">
                      ₹ 1,499
                    </span>
                    <br />
                    <div className="dropdown" style={{ float: "right" }}>
                      <button
                        className="dropbtn border-0 text-light"
                        style={{ backgroundColor: "#28a745" }}
                      >
                        <small style={{ borderBottom: "1px dotted white" }}>
                          +18% GST
                        </small>
                      </button>
                      <div
                        className="dropdown-content px-3 pt-2"
                        style={{ width: 300 }}
                      >
                        <div className="d-flex justify-content-between">
                          <p className="fos-14 text-dark">Plan Price</p>
                          <p className="fos-14 text-dark">₹ 1,499.00</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fos-14 text-dark">GST @ 18%</p>
                          <p className="fos-14 text-dark">₹ 269.82</p>
                        </div>
                        <div className="dropdown-divider py-0" />
                        <div className="d-flex justify-content-between font-weight-bold">
                          <p className="fos-14 text-dark">Amount Payable</p>
                          <p className="fos-14 text-dark">₹ 1768.82</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center p-0 px-2">
                  <h6 className="text-success text-left">
                    Get genuine house owner contacts matching your requirements
                  </h6>
                  <div className="media">
                    <img
                      className="align-self-center mr-3 rounded-circle"
                      src="images/customer-service.png"
                      alt="Customer Service"
                    />
                    <div className="media-body">
                      <p className="fos-14 text-dark font-weight-bold">
                        Complete Relocation Assistance on Call
                      </p>
                      <ul className="text-left ml-5 pl-2">
                        <li className="fos-14">
                          Free Customized Packer and Mover Quote
                        </li>
                        <li className="fos-14">
                          Free Rental Agreement consultation with expert
                        </li>
                        <li className="fos-14">On-Demand Support</li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Premium Filters</span>
                    <i
                      className="fas fa-check-circle fos-18"
                      style={{ color: " #25ab1c" }}
                    ></i>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Number of Contacts</span>
                    <span>upto 25</span>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Instant Property Alerts on SMS</span>
                    <i
                      className="fas fa-check-circle fos-18"
                      style={{ color: " #25ab1c" }}
                    ></i>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span className="text-muted">Locality Experts</span>
                    <i className="fas fa-times fos-18 mr-1" style={{opacity: 0.5}}></i>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span className="text-muted">Rent Negotiation</span>
                    <i className="fas fa-times fos-18 mr-1" style={{opacity: 0.5}}></i>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                  <button
                    className="bg-success px-4 py-2 border-0 text-light fow-600"
                    onClick={proceedToPay}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="card bor-blue">
                <div className="card-title bg-blue d-sm-flex justify-content-between p-2 align-items-center">
                  <p className="text-light font-weight-bold fos-20">
                    Relax Plan
                  </p>
                  <div className="text-right">
                    <s
                      className="font-weight-bold fos-20"
                      style={{ color: "gainsboro" }}
                    >
                      ₹ 3,999
                    </s>
                    <span className="font-weight-bold text-light fos-20">
                      ₹ 3,499
                    </span>
                    <br />
                    <div className="dropdown" style={{ float: "right" }}>
                      <button className="dropbtn border-0 bg-blue text-light">
                        <small style={{ borderBottom: "1px dotted white" }}>
                          +18% GST
                        </small>
                      </button>
                      <div
                        className="dropdown-content px-3 pt-2"
                        style={{ width: 300 }}
                      >
                        <div className="d-flex justify-content-between">
                          <p className="fos-14 text-dark">Plan Price</p>
                          <p className="fos-14 text-dark">₹ 3,499.00</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fos-14 text-dark">GST @ 18%</p>
                          <p className="fos-14 text-dark">₹ 692.82</p>
                        </div>
                        <div className="dropdown-divider py-0" />
                        <div className="d-flex justify-content-between font-weight-bold">
                          <p className="fos-14 text-dark">Amount Payable</p>
                          <p className="fos-14 text-dark">₹ 4128.82</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center p-0 px-2">
                  <h6 className="text-blue text-left">
                    Get Relationship Manager to help you SAVE time and money
                  </h6>
                  <div className="media">
                    <img
                      className="align-self-center mr-3 rounded-circle"
                      src="images/customer-service.png"
                      alt="Customer Service"
                    />
                    <div className="media-body">
                      <p className="fos-14 text-dark font-weight-bold mr-5">
                        Relationship Manager
                      </p>
                      <ul className="text-left ml-5 pl-4">
                        <li className="fos-14">
                          Contacts owners and fixes meetings
                        </li>
                        <li className="fos-14">
                          Negotiates rent on your behalf
                        </li>
                        <li className="fos-14">
                          Provides locality level expertise
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Premium Filters</span>
                    <i
                      className="fas fa-check-circle fos-18"
                      style={{ color: " #25ab1c" }}
                    ></i>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Number of Contacts</span>
                    <span>upto 50</span>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Instant Property Alerts on SMS</span>
                    <i
                      className="fas fa-check-circle fos-18"
                      style={{ color: " #25ab1c" }}
                    ></i>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Locality Experts</span>
                    <i
                      className="fas fa-check-circle fos-18"
                      style={{ color: " #25ab1c" }}
                    ></i>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Rent Negotiation</span>
                    <i
                      className="fas fa-check-circle fos-18"
                      style={{ color: " #25ab1c" }}
                    ></i>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                  <button
                    className="bg-blue px-4 py-2 border-0 text-light fow-600"
                    onClick={proceedToPay}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="card border-danger">
                <div className="card-title bg-danger d-sm-flex justify-content-between p-2 align-items-center">
                  <p className="text-light font-weight-bold fos-20">
                    MoneyBack Plan
                  </p>
                  <div className="text-right">
                    <s
                      className="font-weight-bold fos-20"
                      style={{ color: "gainsboro" }}
                    >
                      ₹ 6,499
                    </s>
                    <span className="font-weight-bold text-light fos-20">
                      ₹ 5,999
                    </span>
                    <br />
                    <div className="dropdown" style={{ float: "right" }}>
                      <button
                        className="dropbtn border-0 text-light"
                        style={{ backgroundColor: "#dc3545" }}
                      >
                        <small style={{ borderBottom: "1px dotted white" }}>
                          +18% GST
                        </small>
                      </button>
                      <div
                        className="dropdown-content px-3 pt-2"
                        style={{ width: 300 }}
                      >
                        <div className="d-flex justify-content-between">
                          <p className="fos-14 text-dark">Plan Price</p>
                          <p className="fos-14 text-dark">₹ 5,999.00</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fos-14 text-dark">GST @ 18%</p>
                          <p className="fos-14 text-dark">₹ 1079.82</p>
                        </div>
                        <div className="dropdown-divider py-0" />
                        <div className="d-flex justify-content-between font-weight-bold">
                          <p className="fos-14 text-dark">Amount Payable</p>
                          <p className="fos-14 text-dark">₹ 7078.82</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center p-0 px-2">
                  <h6 className="text-danger text-left">
                    Get Guaranteed home or 100% Refund
                  </h6>
                  <div className="media">
                    <img
                      className="align-self-center mr-3 rounded-circle"
                      src="images/customer-service.png"
                      alt="Customer Service"
                    />
                    <div className="media-body">
                      <p className="fos-14 text-dark font-weight-bold mr-5 mt-3">
                        Relationship Manager
                      </p>
                      <ul className="text-left ml-5 pl-4">
                        <li className="fos-14">
                          Contacts owners and fixes meetings
                        </li>
                        <li className="fos-14">
                          Negotiates rent on your behalf
                        </li>
                        <li className="fos-14">
                          Provides locality level expertise
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Premium Filters</span>
                    <i
                      className="fas fa-check-circle fos-18"
                      style={{ color: " #25ab1c" }}
                    ></i>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Number of Contacts</span>
                    <span>upto 50</span>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Instant Property Alerts on SMS</span>
                    <i
                      className="fas fa-check-circle fos-18"
                      style={{ color: " #25ab1c" }}
                    ></i>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Locality Experts</span>
                    <i
                      className="fas fa-check-circle fos-18"
                      style={{ color: " #25ab1c" }}
                    ></i>
                  </div>
                  <div className="d-flex justify-content-between m-2 fow-600 fos-14">
                    <span>Rent Negotiation</span>
                    <i
                      className="fas fa-check-circle fos-18"
                      style={{ color: " #25ab1c" }}
                    ></i>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                  <button
                    className="bg-danger px-4 py-2 border-0 text-light fow-600"
                    onClick={proceedToPay}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* For Owners  */}
        <div className="row mt-5">
          <div className="col-sm-12 text-center">
            <p className="fos-14">
              Plan Validity: MoneyBack &amp; Relax (45 Days), Freedom &amp;
              Basic (90 days){" "}
              <button
                type="button"
                className="btn text-danger px-0"
                data-toggle="modal"
                data-target="#myModal"
              >
                T&amp;C apply.
              </button>
            </p>
            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header">
                    <h5 className="modal-title font-weight-normal">
                      Terms &amp; Conditions
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      ×
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className="modal-body text-left">
                    <h5>Freedom Plan</h5>
                    <ul className="ml-3">
                      <li className="fos-14">Valid for 3 months.</li>
                    </ul>
                    <h5>Relax Plan</h5>
                    <ul className="ml-3">
                      <li className="fos-14">Valid for 45 days.</li>
                    </ul>
                    <h5 />
                    <h5>MoneyBack Plan</h5>
                    <ul className="ml-3">
                      <li className="fos-14 mt-3">Valid for 45 days.</li>
                      <li className="fos-14 mt-3">
                        100% refund has to be claimed within a week of plan
                        expiry. The refund will be processed once you shift to
                        your new property which is not available on EroomRent
                        website.
                      </li>
                      <li className="fos-14 mt-3">
                        For claiming the refund, you just need to submit a valid
                        copy of your rental agreement. The rental agreement
                        should match the requirement given to EroomRent.
                        EroomRent will verify the claim, this may include
                        physical visit of the property premises.
                      </li>
                      <li className="fos-14 mt-3">
                        The rent and deposit amount in the registered rental
                        agreement should be equal or lower than the one given to
                        EroomRent relationship manager at the time of plan
                        subscription.
                      </li>
                    </ul>
                    <h5 />
                  </div>
                </div>
              </div>
            </div>
            <Link hto="/ownerplans" className="text-muted fos-20">
              Click here for Owner Plans
            </Link>
          </div>
        </div>
        {/* Assisted */}
        <div className="row mt-5 justify-content-center align-items-center">
          <div className="col-sm-10 text-center p-5 justify-content-center align-items-center">
            <h4>HOW ASSISTED PLANS WORKS</h4>
            <div className="d-flex justify-content-around align-items-center px-5">
              <img src="images/HIWTenant(1).png" alt="Looking for House" />
              <div className="text-left">
                <h4 className="text-danger">LOOKING FOR A HOUSE?</h4>
                <p className="text-muted">
                  Just get one of our Assisted Plans and make your lives
                  simpler.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center px-5">
              <div className="text-right">
                <p className="text-muted">Say HELLO to your</p>
                <h4 className="text-info">HOUSE-HUNT ASSISTANT</h4>
              </div>
              <img src="images/HIWTenant(2).png" alt="House-hunt assistant" />
            </div>
            <div className="d-flex justify-content-around align-items-center px-5">
              <img src="images/HIWTenant(3).png" alt="City level expertise" />
              <div className="text-left">
                <p className="text-muted">
                  Who gather all your requirements and provides you with
                </p>
                <h4 className="text-danger">CITY LEVEL EXPERTISE</h4>
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center px-5">
              <div className="text-left w-25">
                <p className="text-danger fos-16">
                  Contact Owners, Schedule property visits{" "}
                  <span className="text-dark">and </span>Negotiates Rent{" "}
                  <sup>*</sup>
                </p>
              </div>
              <img src="images/HIWTenant(4).png" alt="Contacts" />
            </div>
            <div className="d-flex justify-content-around align-items-center px-5">
              <img src="images/HIWTenant(5).png" alt="Looking for Find Best" />
              <div className="text-left">
                <p className="text-muted">Helping you find best</p>
                <h4 className="text-info">HOUSE FOR YOUR NEEDS</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Customer Loves US */}
        <div className="row mt-5 justify-content-center align-items-center">
          <div className="col-sm-11 border-bottom pb-3 px-0">
            <h4 className="text-center my-4">Our Customers Loved US:</h4>
            <div className="card-deck">
              <div className="card bg-lightest-grey">
                <div className="card-header d-sm-flex justify-content-start align-items-center">
                  <img src="images/review.png" alt="Person" />
                  <div className="font-weight-bold ml-3">
                    <span>Tiasha</span>
                    <br />                    
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                  </div>
                </div>
                <div className="card-body">
                  "The service was great and very professional. I went with the
                  Relax plan. My RM Sayantandera Gupta is really efficient. He
                  noted my requirements quite well and suggested me a list of
                  options. I shortlisted one from them and in just one visit, I
                  was able to finalize the house of my choice."
                </div>
              </div>
              <div className="card bg-lightest-grey">
                <div className="card-header d-sm-flex justify-content-start align-items-center">
                  <img src="images/review.png" alt="Person" />
                  <div className="font-weight-bold ml-3">
                    <span>Anoop Nair</span>
                    <br />
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                  </div>
                </div>
                <div className="card-body">
                  "Excellent service and an equally involved team. I opted for
                  the Relax plan and got a good deal on my property. Highly
                  recommended app"
                </div>
              </div>
              <div className="card bg-lightest-grey">
                <div className="card-header d-sm-flex justify-content-start align-items-center">
                  <img src="images/review.png" alt="Person" />
                  <div className="font-weight-bold ml-3">
                    <span>Shubham Raibhandar</span>
                    <br />
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                    <i class="fas fa-star fos-14" style={{color: "#3a69bb"}}></i>
                  </div>
                </div>
                <div className="card-body">
                  "The site really helps us to find good properties in the least
                  amount of time without any headache of brokerage. I was so
                  scared in Pune due to the issues of high deposit as well as
                  brokerage. I was new and had no time. But then I found
                  EroomRent. It is simply an excellent platform to find your
                  home as soon as possible."
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQs */}
        <div className="row mt-5 justify-content-center align-items-center">
          <div className="col-sm-10">
            <h4 className="text-center">Frequently Asked Questions</h4>
            <div id="accordion" className="accordion w-100">
              <div className="card mb-0 border-0">
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    How do I make Payment to subscribe one of the paid plans for
                    property search?
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    To make a payment please Sign-In/Sign- Up to
                    www.EroomRent.com and then navigate top right over your user
                    name &gt; my plan &gt; pay/upgrade 5499 or 2999 or 999. You
                    may choose any of the online payment option like Debit card,
                    credit card, online banking, Wallet payment etc.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    How does Assure / Relax / Freedom Plan compares?
                  </a>
                </div>
                <div
                  id="collapseTwo"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Relax plan and Assure plan subscriber gets personalized
                    services from dedicated relationship manager for up-to 50
                    qualified owner contacts, while Freedom plan subscriber can
                    take up-to 25 owner contacts which you can contact on your
                    own. Adding to these, we help you create Rental Agreement.
                    Assure Plan customer has money back guarantee if you find
                    house via someone else in the validity period.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    What services do you provide after I subscribe relax plan?
                  </a>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    For any relax plan subscriber, we give the following
                    services: Personalized Dedicated relationship manager
                    assistance. Upto 50 owner contacts. New property alerts as
                    per your property requirement.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    What If I do not find a property after subscribing to relax
                    plan?
                  </a>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    We provide the services to help you find a property as per
                    your legitimate requirement and help you upto 50 different
                    owner properties. Usually, you would not need up-to these
                    many contacts as these are all qualified leads for property
                    searching. However, in case you are not able to find a
                    property; it will be unfortunate and you could modify your
                    requirement for property hunt to avoid the same.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFive"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    How soon can I get the property after I subscribe to the
                    Relax or MoneyBack plan?
                  </a>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Usually the timeline to get a property depends on how
                    specific the requirement is, we do try to get you the
                    property asap in case you are a relax plan subscriber; while
                    it can not be guaranteed how soon will you be able to get
                    the property. However; we have seen that usually property
                    hunt is completed within 3 weeks of date of subscription of
                    the plan.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSix"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    Will you be coming to show the property to me if I am a
                    relax plan customer?
                  </a>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    We help our relax plan customer in searching out the
                    properties and speaking with owners to set the appointment
                    for you. However, we do not visit on site to accompany you
                    for the property visit
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSeven"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    Will you help me in negotiating the rent?
                  </a>
                </div>
                <div
                  id="collapseSeven"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Rent and deposit amount are on the sole discretion of the
                    owners. However, we do try to negotiate rent for our relax
                    customers in case there are inconsistencies in rent amount
                    in the specific locality.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseEight"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    Can you get me the property in some specific area?
                  </a>
                </div>
                <div
                  id="collapseEight"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    We always have sufficient number of properties at each
                    location of the operating city, but finding a property in
                    specific area will depend on the inventory we have at that
                    point of time
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseNine"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    How do I give my requirements for the type of property I am
                    looking for?
                  </a>
                </div>
                <div
                  id="collapseNine"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Once you subscribe to the Relax or MoneyBack plan, assigned
                    dedicated relationship manager will call you and take your
                    requirement over phone and will begin working on the same
                    day itself.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTen"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    Are there any hidden charges in the subscription plans?
                  </a>
                </div>
                <div
                  id="collapseTen"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    The charges to subscribe the plans mentioned are inclusive
                    of all kind of charges and there is no extra cost for the
                    same
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseEleven"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    Is It possible that I can pay for relax plan once I find the
                    property?
                  </a>
                </div>
                <div
                  id="collapseEleven"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Unfortunately we have not started that kind of service yet
                    and neither plan for the same. To enjoy the property hunting
                    assistance with the help of personalized relationship
                    manager, you need to subscribe to the plan first.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwelve"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    Do you have any extra services for Assure Plan customer?
                  </a>
                </div>
                <div
                  id="collapseTwelve"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    This is the moment all your worries of property hunting are
                    transferred to your dedicated relationship manager. Apart
                    from helping you find a property, we also support with
                    move-in facilities with packers and movers.
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

export default TenantPlans;

const Wrapper = styled.section`
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
    margin-left: 4rem;
    font-size: 14px;
  }

  #bg-gradient {
    background-image: linear-gradient(
      to bottom,
      #ffffff,
      #f9f9f9,
      #f3f3f3,
      #eeeeee,
      #e8e8e8
    );
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  #bg-gradient .nav-tabs .nav-link.active {
    background-color: white;
    color: black;
    border: none;
    box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.75);
  }

  .nav-link {
    color: black;
    font-weight: 600;
  }

  .nav-link:hover {
    color: black;
  }
`;
