import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RentReceipt = () => {
  function genReceipt() {
    alert("Receipt will be send to your email");
  }
  return (
    <Wrapper>
      <section id="mb-sm-65" style={{ paddingTop: 100, height: "100%" }}>
        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-sm-10 py-2">
            <div className="d-sm-flex flex-column justify-content-center align-items-center">
              <h3 className="text-dark font-weight-normal">
                Create Rent Receipts
              </h3>
              <span className="ml-4 fos-14">
                Looking for rent receipts for tax saving? Do it in a click by
                filling the form below, take the print of the generated pdf and
                you are done. Easy 😊
              </span>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="row">
          <div className="col-sm-12">
            <div className="row justify-content-center">
              <div className="col-sm-3 py-2 d-flex flex-column">
                <label htmlFor="Tenant's Name" className="fow-600">
                  Tenant Name
                </label>
                <input
                  type="text"
                  placeholder="Tenant's Name"
                  className="text-muted rounded border border-muted"
                  style={{ height: 40, paddingLeft: 10 }}
                />
              </div>
              <div className="col-sm-3 py-2 d-flex flex-column">
                <label htmlFor="Owner's Name" className="fow-600">
                  Owner Name
                </label>
                <input
                  type="text"
                  placeholder="Owner's Name"
                  className="text-muted rounded border border-muted"
                  style={{ height: 40, paddingLeft: 10 }}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-3 py-2 d-flex flex-column">
                <label htmlFor="Tenant's Phone" className="fow-600">
                  Tenant Phone
                </label>
                <small>+91</small>
                <input
                  type="text"
                  placeholder="Tenant's Phone"
                  className="text-muted rounded border border-muted"
                  style={{ height: 40, paddingLeft: 10 }}
                />
              </div>
              <div className="col-sm-3 py-2 d-flex flex-column">
                <label htmlFor="Owner's Phone" className="fow-600">
                  Owner Phone
                </label>
                <small>+91</small>
                <input
                  type="text"
                  placeholder="Owner's Phone"
                  className="text-muted rounded border border-muted"
                  style={{ height: 40, paddingLeft: 10 }}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-3 py-2 d-flex flex-column">
                <label htmlFor="Rent" className="fow-600">
                  Rent
                </label>
                <input
                  type="text"
                  placeholder="Rent"
                  className="text-muted rounded border border-muted"
                  style={{ height: 40, paddingLeft: 10 }}
                />
              </div>
              <div className="col-sm-3 py-2 d-flex flex-column">
                <label htmlFor="Owner's PAN" className="fow-600">
                  Owner PAN
                </label>
                <input
                  type="text"
                  placeholder="Owner's PAN"
                  className="text-muted rounded border border-muted"
                  style={{ height: 40, paddingLeft: 10 }}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-3 py-2 d-flex flex-column">
                <label htmlFor="Rented Address Property" className="fow-600">
                  Rented Address Property
                </label>
                <textarea
                  name="Rented Address Property"
                  placeholder="Rented Address Property"
                  cols={30}
                  rows={3}
                  className="text-muted border border-muted fos-14"
                  style={{ paddingLeft: 10 }}
                  defaultValue={""}
                />
              </div>
              <div className="col-sm-3 py-2 d-flex flex-column">
                <label htmlFor="Owner's Address" className="fow-600">
                  Owner Address
                </label>
                <textarea
                  name="Owner's Address"
                  placeholder="Current address of the owner as required in rental receipts"
                  className="text-muted border border-muted fos-14"
                  cols={30}
                  rows={3}
                  style={{ paddingLeft: 10 }}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-3 d-flex flex-column py-2">
                <label htmlFor="Receipt Start Date" className="fow-600">
                  Receipt Start Date
                </label>
                <input
                  type="date"
                  name="Receipt Start Date"
                  className="text-muted rounded border border-muted"
                  style={{ height: 40, paddingLeft: 10 }}
                />
              </div>
              <div className="col-sm-3 d-flex flex-column">
                <label htmlFor="Receipt End Date" className="fow-600">
                  Receipt End Date
                </label>
                <input
                  type="date"
                  name="Receipt End Date"
                  className="text-muted rounded border border-muted"
                  style={{ height: 40, paddingLeft: 10 }}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-sm-3 d-flex flex-column py-2"
                style={{ marginRight: "19.5rem" }}
              >
                <label htmlFor="Email" className="fow-600">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email to receive PDF link"
                  className="text-muted rounded border border-muted"
                  style={{ height: 40, paddingLeft: 10 }}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-3 py-2">
                <button
                  className="btn btn-success w-100 fow-600"
                  onClick={genReceipt}
                  id="gen-reciept"
                >
                  Generate Rent Receipt Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Templates */}
        <div className="row justify-content-center mt-5">
          <div className="col-sm-4">
            <div className="d-sm-flex justify-content-between p-3 border border-muted rounded">
              <div>
                <h5>Create Rental Agreement</h5>
                <small>
                  Get you rental Agreement delivered to your doorstep
                </small>
                <div className="d-flex justify-content-between my-2">
                  <span className="badge p-2 bor-radius-10">
                    Same day delivery
                  </span>
                  <span className="badge p-2 bor-radius-10">30% Off</span>
                  <span className="badge p-2 bor-radius-10">Live Tracking</span>
                </div>
                <Link
                  to="/rentalagreement"
                  className="btn btn-success fow-600 rounded"
                >
                  Explore Now
                </Link>
              </div>
              <div className="p-2">
                <i
                  className="fas fa-file-alt fa-5x"
                  style={{ color: "goldenrod" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="d-sm-flex justify-content-between p-3 border border-muted rounded">
              <div>
                <h5>Hassle Free Tenant Verification</h5>
                <small>
                  Ensure safety | Get Rent on Time | Avoid fraudsters
                </small>
                <div className="d-flex justify-content-between my-2">
                  <span className="badge p-2 bor-radius-10">
                    Get Reports Instantly
                  </span>
                  <span className="badge p-2 bor-radius-10">
                    Civil/Criminal Check
                  </span>
                </div>
                <Link
                  to="/admin"
                  className="btn btn-success fow-600 rounded"
                >
                  Explore Now
                </Link>
              </div>
              <div className="p-2">
                <i
                  className="fas fa-user-check"
                  style={{ color: "goldenrod", fontSize: 50 }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        {/* FAQs */}
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-sm-10 py-5 d-flex flex-column justify-content-center align-items-center mt-5">
            <h2 className="my-3">Frequently Asked Questions</h2>
            <div id="accordion" className="accordion w-100">
              <div className="card mb-0 border-0">
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    What is HRA?
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    HRA stands for House Rent Allowance. This makes up a
                    component of salary that is provided by an employer. This is
                    meant for employees to pay for their rented accommodations.
                    This is meant for those who live in rented accommodations
                    only. This is also a method to save tax.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    How is HRA calculated?
                  </a>
                </div>
                <div
                  id="collapseTwo"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    HRA is calculated based on ? - Gross Salary - HRA Percentage
                    of Salary - House Rent minus 10% of basic salary - 50% HRA
                    if the employee is staying in a metro city and 40% HRA for
                    non-metro cities.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    What proof is required to claim HRA?
                  </a>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    To collect your HRA all you need to do is show proof that
                    you are paying rent, this is done by submitting your Rent
                    Receipt. This is submitted to your employer and they will
                    give you an exemption on your HRA based on these receipts.
                    Your tax will be calculated based on theis and you will not
                    need to pay tax on the HRA amount.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    What is a Rent Receipt?
                  </a>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Just like a receipt from a shop is proof of a purchase, a
                    Rent Receipt is proof of rent paid from a tenant to a
                    landlord. If you are still paying rent in cash, a receipt
                    signed by the landlord is the only proof you will have of
                    this transaction taking place. If you use cheques, credit
                    cards or other online methods of payment there will be some
                    proof of the transaction, but it is still advised to collect
                    a rent receipt from your landlord.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFive"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    Are rent receipts needed for every month?
                  </a>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    This requirement changes from company to company. Some ask
                    for only 3-6 months whereas a few companies require all 12
                    months to be submitted. It?s best to check with the HR or
                    accounts department of your organization.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSix"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    Is the landlord's PAN number required in a Rent Receipt?
                  </a>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    The landlord?s PAN is required only if you pay more than
                    Rs.1,00,000 annually on rent. Without this PAN you will not
                    be able to claim HRA. IF your landlord does not have a PAN
                    account, then you need to get a declaration from him stating
                    the same.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  href="#collapseSeven"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    What happens when I stay in a rented home for only a few
                    months?
                  </a>
                </div>
                <div
                  id="collapseSeven"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    The good news is, you can claim HRA for the moths that you
                    were paying rent and have a rent receipt for. So, if you
                    have stayed for 3 months or 6, you can still claim HRA.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseEight"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    What happens when my landlord refuses to provide rent
                    receipts?
                  </a>
                </div>
                <div
                  id="collapseEight"
                  className="card-body collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Most landlords will not and should not deny you a rent
                    receipt, but before moving into a home you need to inform
                    the landlord that you require a receipt every month. It?s
                    best to have this discussion before you sign the rental
                    agreement so as to avoid any possible issues.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseNine"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    Can I claim HRA on my own?
                  </a>
                </div>
                <div
                  id="collapseNine"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Yes, you can, this will be done when you are doing your tax
                    returns.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTen"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    Does the rent receipt need to be on paper or is a soft copy
                    enough?
                  </a>
                </div>
                <div
                  id="collapseTen"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    This varies from organization to organization, it is best to
                    check with your company or employer as to what they require
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseEleven"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    If I change jobs, will the new company need my old Rent
                    Receipts?
                  </a>
                </div>
                <div
                  id="collapseEleven"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    As soon as you shift jobs, your new employer will inform you
                    of all the documents that you need to submit. As part of
                    these documents, your rent receipts should also be
                    mentioned. In the case where your current employer is
                    allowing you HRA exemptions from previous one, you will need
                    to submit the old rent receipts as well as the new ones.
                  </p>
                </div>
                <div
                  className="card-header collapsed bg-white fos-14 border-bottom"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwelve"
                >
                  <a className="card-title fos-16 text-dark font-weight-bold">
                    Does HRA exemption apply to me if I pay rent to my family?
                  </a>
                </div>
                <div
                  id="collapseTwelve"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <p className="fos-14 p-4">
                    Yes, you can. The only catch is the place that you are
                    claiming rent for can't be owned by you. If you are living
                    with your parents and the house is in their name, and you
                    pay them rent, you can still claim HRA. This does not mean
                    you can simply claim that you are paying them money for
                    rent, you need to have authentic rent receipts and also bank
                    records that show monthly transactions for the same amount.
                    If the tax department does not think that the claim is
                    authentic, you could get into trouble.
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

export default RentReceipt;

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

  label {
    font-size: 14px;
  }

  .badge {
    background-color: #e8e8e8;
  }
`;
