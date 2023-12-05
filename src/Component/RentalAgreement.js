import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RentalAgreement = () => {
  return (
    <Wrapper>
      <section className="bg-lightest-grey" style={{ paddingTop: 50 }}>
        {/* Online Agreement */}
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-11 bg-gold">
            <div className="row justify-content-start align-items-start m-auto py-5">
              <div className="col-sm-7 justify-content-center align-items-center">
                <h3 className="text-light">
                  Online Rent Agreement, Lease Agreement
                </h3>
                <h5 className="text-light font-weight-normal mt-3">
                  Best Online agreement service in Indore
                </h5>
                <div className="cards d-sm-flex flex-column flex-gap">
                  <div className="card p-0 w-75 mt-3">
                    <div className="card-body d-sm-flex justify-content-between align-items-center px-4 py-2">
                      <div className="d-sm-flex flex-column justify-content-start align-items-start mr-3">
                        <p className="font-weight-bold mb-0">
                          Doorstep Biometric KYC
                        </p>
                        <span className="fos-14">
                          100% safe and sanitised execution. No need to step out
                          of home.
                        </span>
                      </div>
                      <div>
                        <img src="/images/biometric.png" alt="Biometric" />
                      </div>
                    </div>
                  </div>
                  <div className="card p-0 w-75 mt-3">
                    <div className="card-body d-sm-flex justify-content-between align-items-center px-4 py-2">
                      <div className="d-sm-flex flex-column justify-content-between mr-3 ">
                        <p className="font-weight-bold mb-0">Hassle-Free</p>
                        <span className="fos-14">
                          No Visit to the Government office is required.
                        </span>
                      </div>
                      <div>
                        <img src="/images/hassle-free.png" alt="Hassle-Free" />
                      </div>
                    </div>
                  </div>
                  <div className="card p-0 w-75 mt-3">
                    <div className="card-body d-sm-flex justify-content-between align-items-center px-4 py-2">
                      <div className="d-sm-flex flex-column justify-content-between mr-3 ">
                        <p className="font-weight-bold mb-0">
                          Dedicated Relationship Manager
                        </p>
                        <span className="fos-14">
                          Your single point of contact for any assistance you
                          require.
                        </span>
                      </div>
                      <div>
                        <img src="/images/manager.png" alt="Manager" />
                      </div>
                    </div>
                  </div>
                  <div className="card p-0 w-75 mt-3 bg-tran">
                    <div className="card-body d-sm-flex justify-content-between align-items-stretch p-2">
                      <div className="d-sm-flex justify-content-center align-items-center border-right border-light p-0 w-100">
                      <i className="fas fa-people-arrows fa-2x"></i>
                        <span className="text-light fos-14 p-0 w-75 my-auto ml-2">
                          10Lakh+ Happy customers served
                        </span>
                      </div>
                      <div className="d-sm-flex justify-content-center align-items-center w-100">
                        <img
                          src="/images/rating.png"
                          alt="Ratings"
                          className="img-fluid"
                        />
                        <p className="text-light fos-14 my-auto ml-2">
                          4.9 Rating 12450 Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* How it works */}
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-sm-6 bg-white py-5">
            <h4 className="text-dark ml-3">How it works</h4>
            <ul
              className="lts-none mt-3 d-flex flex-column p-3"
              style={{ gap: "2rem" }}
            >
              <li className="d-sm-flex justify-content-around align-items-center">
                <i className="fas fa-tablet-alt fa-2x"></i>
                <div>
                  <p className="font-weight-bold mb-0">Fill Details Online</p>
                  <span className="fos-14">
                    Customize our Template agreement as per your requirement and
                    submit the draft
                  </span>
                </div>
              </li>
              <li className="d-sm-flex justify-content-between align-items-center ml-2">
                <i className="fas fa-fingerprint fa-2x"></i>
                <div style={{ width: "91.5%" }}>
                  <p className="font-weight-bold mb-0">
                    Scheduled Biometric Appointment
                  </p>
                  <span className="fos-14">
                    Schedule Biometric Appointment We visit you at your
                    convenience to capture biometrics and execute the agreement
                    as per government process
                  </span>
                </div>
              </li>
              <li className="d-sm-flex justify-content-around align-items-center">
                <i className="fas fa-file-contract fa-2x"></i>
                <div style={{ width: "88%" }}>
                  <p className="font-weight-bold mb-0">
                    Agreement is Registered!
                  </p>
                  <span className="fos-14">
                    We get your agreement registered and send a soft copy to you
                    within 3-4 days
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* EroomRent Promise */}
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-sm-6 bg-white py-5">
            <h4 className="text-dark ml-3">EroomRent Promise</h4>
            <ul className="lts-none mt-3">
              <li className="d-sm-flex justify-content-between align-items-center py-2">
                <img
                  src="/images/shield.png"
                  alt="Online Details"
                  className="ml-3"
                />
                <div style={{ marginRight: "10rem" }}>
                  <p className="font-weight-bold mb-0">Lowest Prices</p>
                  <span className="fos-14">
                    Best-in-class legal documentation at attractive prices.
                  </span>
                </div>
              </li>
              <li className="d-sm-flex justify-content-between align-items-center mt-4 py-2">
                <img
                  src="/images/shield.png"
                  alt="Scheduled Biometric"
                  className="ml-3"
                />
                <div style={{ marginRight: "6rem" }}>
                  <p className="font-weight-bold mb-0">Legally Valid</p>
                  <span className="fos-14">
                    Make genuine documents which are legally valid in court of
                    law
                  </span>
                </div>
              </li>
              <li className="d-sm-flex justify-content-between align-items-center mt-4 py-2">
                <img src="/images/shield.png" alt="Agreement" className="ml-3" />
                <div>
                  <p className="font-weight-bold mb-0">
                    100% Convenience. 0% Stress.
                  </p>
                  <span className="fos-14">
                    Get delighted with super fast documentation at the
                    convenience of your home.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Customer Stories */}
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-sm-6 bg-white py-5">
            <h4 className="text-dark ml-3">Customer Stories</h4>
            <div id="demo" className="carousel slide mt-3" data-ride="carousel">
              {/* Indicators */}
              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
              </ul>
              {/* The slideshow */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card-deck">
                    <div className="card bg-white">
                      <div className="card-header bg-white d-sm-flex justify-content-start align-items-center">
                        <img src="/images/review.png" alt="Person" />
                        <span className="font-weight-bold">
                          Chandan Agrawal
                        </span>
                      </div>
                      <div className="card-body">
                        " I used them for rental agreement services recently. My
                        experience was very good. I spoke to Kavya as my
                        relationship manager and she was very responsive."
                      </div>
                    </div>
                    <div className="card bg-white">
                      <div className="card-header bg-white d-sm-flex justify-content-start align-items-center">
                        <img src="/images/review.png" alt="Person" />
                        <span className="font-weight-bold">Mithlesh kumar</span>
                      </div>
                      <div className="card-body">
                        "Good customer service and interaction. I got my rental
                        agreement done at a lower price compared to what we pay
                        to any agent or broker. "
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card-deck">
                    <div className="card bg-white">
                      <div className="card-header bg-white d-sm-flex justify-content-start align-items-center">
                        <img src="/images/review.png" alt="Person" />
                        <span className="font-weight-bold">Sumit Chinche</span>
                      </div>
                      <div className="card-body">
                        "I just used EroomRent's rental agreement services and
                        its very easy, reliable and totally worth. If you are
                        looking for registered rent agreement services go on."
                      </div>
                    </div>
                    <div className="card bg-white">
                      <div className="card-header bg-white d-sm-flex justify-content-start align-items-center">
                        <img src="/images/review.png" alt="Person" />
                        <span className="font-weight-bold">Sharad Pise</span>
                      </div>
                      <div className="card-body">
                        "Just availed Rental agreement service by Nobroker.
                        After succesful payment, they assigned a Relationship
                        Manager."
                      </div>
                    </div>
                  </div>
                </div>
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
        </div>
        {/* Top Question */}
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-sm-6 bg-white d-sm-flex flex-column justify-content-start align-items-start px-0 py-5 mb-3">
            <h4 className="text-dark ml-4 pl-3">Top Questions</h4>
            <div id="accordion" className="accordion w-100 mt-3 pl-5">
              <div className="card mb-0 border-0">
                <div
                  className="card-header collapsed bg-white fos-14"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  <a className="card-title text-gold">
                    Do I need to visit any government office?
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14">
                    Not even once. We will conduct the whole process for you
                    online / at your home.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  <a className="card-title text-gold">How much will it cost?</a>
                </div>
                <div
                  id="collapseTwo"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14">
                    Please click <a href="#">here</a> to know the charges. Apart
                    from our convenience fee, the charges typically include
                    stamp duty, registration charges, etc.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  <a className="card-title text-gold">
                    Landlord and tenant are in different locations?
                  </a>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    You can use the Aadhar eSign based digital signature
                    service.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                >
                  <a className="card-title text-gold">
                    Is Aadhar e-sign valid?
                  </a>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Yes, Aadhaar eSign based digital signatures are a legally
                    accepted and secure manner of electronically signing
                    documents, under effect of{" "}
                    <a
                      rel="nofollow"
                      href="http://http://cca.gov.in/sites/files/pdf/ACT/GSR61-62.pdf"
                      className="text-dark"
                    >
                      Gazette Notification No. 2015 Jan -GSR 61(E) Electronic
                      Signature or Electronic Authentication Technique and
                      Procedure Rules, 2015.
                    </a>
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFive"
                >
                  <a className="card-title text-gold">
                    Which documents are required?
                  </a>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Our form will help with the process step-by-step. Please
                    login and create your agreement.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSix"
                >
                  <a className="card-title text-gold">
                    Will i receive a hard copy?
                  </a>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Yes, a hard copy of the agreement will be delivered to your
                    address.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQs */}
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-sm-6 bg-white d-sm-flex flex-column justify-content-start align-items-start px-0 py-5 mb-3">
            <h4 className="text-dark ml-4 pl-3">
              FAQs on the Creation of Rental Agreement
            </h4>
            <p className="fos-14 mx-4 px-3 mb-0 mt-3">
              Otherwise known for its traffic, Indore is home to many startups
              and IT companies. As a result, the demand for commercial and
              residential space is high. Seeking job opportunities, a number of
              people travel to Indore and become a part of it. Though finding a
              job is relatively easy, the tough part is to get through the
              rental processing, especially the rental agreement.
            </p>
            <p className="fos-14 mx-4 px-3">
              Just when you put the term ‘rental agreement’ across, individuals
              see it as a task of great hassle. However, it is necessary for you
              to get proper information about the rental agreement and its
              processing in Indore. Below we address some of the frequently
              asked questions that will make it easier for you to get through
              the process in Indore.
            </p>
            <div id="accordion" className="accordion w-100 mt-3 pl-5">
              <div className="card mb-0 border-0">
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  <a className="card-title text-gold">
                    What are the Different Types of Rental Agreements in Indore?
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <span className="fos-14 pb-0 mb-0">
                    A number of landlords make the processing of the rental
                    agreement a complicated process for the tenants so that they
                    do not have to create a rental document and avoid paying
                    tax. However, there are many benefits that a rental
                    agreement brings with it for the tenant. So, you should
                    always insist on the creation of one.
                    <br />
                    Basically, there are two types of rental agreements:
                    <br />
                  </span>
                  <ul className="lts-none fos-14 my-0 py-0 ml-3">
                    <li>Rental Agreement</li>
                    <li>Lease Agreement</li>
                  </ul>
                  <br />
                  <span className="fos-14">
                    A rental agreement offers the right to tenancy to the tenant
                    for a short period of time (typically 11 months). Once the
                    duration ends, the period can be automatically renewed. The
                    cycle continues until the landlord or the tenant wishes to
                    end it with mutual consent.
                    <br />
                    The tenant has to pay monthly rent and a one-time deposit.
                    In most cases the deposit is refundable.
                    <br />
                    As opposed to the rental agreement, a lease agreement is for
                    a longer time period of 12 months or more. When any rental
                    property exceeds the timeframe of 1 year, a number of laws
                    apply to it. As a result, the legal documents for the same
                    have to be framed very carefully.
                    <br />
                    <br />
                    As the time duration of the tenancy is longer, the deposit
                    is high, which is paid when the tenant vacates the property.
                    Unlike the rental agreement, the lease agreement is
                    terminated after the lease expires. This means that the
                    contract does not renew on its own. Both the tenant and the
                    owner needs to go through the entire process to renew the
                    agreement.
                    <br />
                    Till the new lease agreement is made, the tenant has to pay
                    the rent on the daily or weekly basis.
                  </span>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  <a className="card-title text-gold">
                    How Much Security Deposit Can be Charged by a Landlord?
                  </a>
                </div>
                <div
                  id="collapseTwo"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14">
                    The government of India allows the landlord to collect a
                    security deposit from the tenant before he moves in. The
                    security deposit should not be more than a total of two or
                    three month’s rent.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  <a className="card-title text-gold">
                    What are some of the Pointers to Discuss with your Landlord
                    before the Creation of Rental Agreement in Indore?
                  </a>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 ml-3 pl-1 pb-0 mb-0">
                    Having the critical issues resolved before moving in and
                    taking the same in writing helps keep away the potential
                    conflicts in the future. Below are some of the aspects you
                    need to iron out:
                  </p>
                  <br />
                  <ul className="fos-14 px-5 lts-none">
                    <li>
                      Length of the Tenancy: You might have a bond signed at
                      your office for 2 years and you require to stay at this
                      place for the same period. In such a case, it is important
                      that you put forward your request before the owner. If the
                      owner has any concern regarding the length of the period,
                      he will mention it to you. This way, you can come to a
                      mutual ground and decide the length of the tenancy.
                    </li>
                    <li>
                      Rent Amount and Security Deposit: In most cases, the rent
                      amount and security deposit are non-negotiable. However,
                      you can try to get it reduced as much as possible before
                      you move in. Also, the owner can’t ask for a security
                      deposit that exceeds the rent amount of more than three
                      months. Hence, you can discuss the same and come to a
                      conclusion.
                      <br />
                      At this point, you should also discuss the scenario when
                      the rental agreement expires and the tenant continues to
                      stay till he finds a new place.
                    </li>
                    <li>
                      Number of People: Usually, there is no limit on the number
                      of people, when the tenant brings his family to the
                      property. However, in case you are a bachelor, the owner
                      may restrict the number of tenants. In some cases, he may
                      even levy restrictions on the opposite gender to enter the
                      property.
                    </li>
                    <li>
                      Access of the Landlord to the Property: This clause
                      applies when the landlord is living in the same
                      apartment/building as that of the tenant. Usually, there
                      is a separate door in buildings to give the tenants the
                      privacy they require. However, in the apartments, the
                      access to doors and some utilities may be common for
                      tenants as well as the owner. In such a case, the tenant
                      should ask and understand the access of the landlord to
                      the property.
                    </li>
                    <li>
                      Repair. Maintenance or Damage Cost: Your rental property
                      may need a plaster or paint and your agreement is about to
                      expire in two months. You would not want to spend
                      maintenance on the property you are anyways vacating. This
                      calls for a healthy discussion with the landlord before
                      moving in. Make a list of the utilities and decide who
                      pays for what.
                      <br />
                      Also, if you think the building needs any repair prior to
                      the lock-in period, you can get it sorted by the owner.
                    </li>
                  </ul>
                  <p className="fos-14 ml-3 pl-1 pb-0 mb-0">
                    {" "}
                    There are some other clauses with regards to food habits,
                    late coming, drinking, smoking, pet ownership, etc., which
                    you can discuss if at all it applies to you.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                >
                  <a className="card-title text-gold">
                    What is the Stamp Duty and Registration Charges in Indore
                    for Tenancy Agreement?
                  </a>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 ml-3 pl-1 pb-0 mb-0">
                    Madhya Pradesh is the first state to replace the
                    conventional stamping with stamping completely. You need to
                    notarize your rental agreement even though it is for a
                    period of 11 months as a fraud-deterrent measure.
                    <br />
                    As per the law in Madhya Pradesh, the maximum stamp duty
                    that can be collected is not more than Rs. 500 for the
                    processing of a rental agreement. However, it is calculated
                    as follows:
                  </p>
                  <ul className="fos-14 px-5 lts-none">
                    <li>
                      Tenancy period equal to 10 years or less: 1% of the annual
                      rent + deposit
                    </li>
                    <li>
                      Tenancy period of more than 10 years: 2% of annual rent +
                      deposit
                    </li>
                  </ul>
                  <p className="fos-14 ml-3 pb-0 pl-1 mb-0">
                    Besides the stamp duty, the registration of the rental
                    agreement is 1 % of the annual agreement + deposit. A number
                    of people do not take the stamp duty and registration
                    seriously. However, a legal rental agreement enables
                    numerous rights for the tenants and landlords and can save
                    them from any type of fraud from the other party.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-0"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFive"
                >
                  <a className="card-title text-gold">
                    What are the Legal Requirements for the Creation of a Rental
                    Agreement?
                  </a>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div>
                    <p className="fos-14 ml-3 pb-0 pl-1 mb-0">
                      Every state in India has its personal laws when it comes
                      to legal requirements. In the state of Madhya Pradesh,
                      following are the legal requisites for the creation of a
                      rental agreement:
                    </p>
                    <ul className="fos-14 px-5 lts-none">
                      <li>
                        The rental property should be either used for
                        residential or commercial purpose. The purpose of use
                        has to be specified in the rental document.
                      </li>
                      <li>
                        Every aspect has to be written in the rental agreement,
                        no matter how unimportant it may sound.
                      </li>
                      <li>
                        The rental agreement has to be created as a draft first
                        to check for any edits and then printed on the stamp
                        paper of minimum Rs. 100.
                      </li>
                      <li>
                        The tenant and the owner must decide who is paying for
                        the stamp duty and registration of the rental agreement.
                        They have to pay 1% of the yearly rent and deposit or
                        Rs. 500 (whichever is lower in value).
                      </li>
                      <li>
                        The owner should take care of the rental property before
                        handing it over on rent to the tenant. If the property
                        needs painting or any type of repair work, the owner
                        must undertake it.
                      </li>
                      <li>
                        The tenant must bring to the light if there is any type
                        of damage to appliances or the property before vacating
                        the rental property.
                      </li>
                      <li>
                        All the documents presented during the creation of the
                        rental property should be original. The biometric
                        verification should be done.
                      </li>
                      <li>
                        The registration process also needs two witnesses, their
                        original identity proofs and their biometric impression.
                      </li>
                      <li>
                        The owner must give the tenant a copy of the rental
                        agreement to present it as a legal address proof during
                        the lock-in period.
                      </li>
                      <li>
                        If the tenant moves out of the property during the
                        lock-in period, the owner may decide whether or not to
                        release the security deposit paid by the tenant.
                      </li>
                    </ul>
                    <p className="fos-14 ml-3 pb-0 pl-1 mb-0">
                      These were some of the important aspects to consider
                      before renting a property. If you wish to get through the
                      rental agreement process with utmost ease, you can simply
                      log in to EroomRent and get a doorstep delivery of your
                      copy.
                    </p>
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

export default RentalAgreement;

const Wrapper = styled.section`
  .card-header:hover {
    cursor: pointer;
  }
`;
