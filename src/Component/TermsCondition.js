import React from "react";

const TermsCondition = () => {
  return (
    <>
      <section>
        {/* Main Content */}
        <div
          className="row justify-content-center align-items-center bg-lightest-grey pb-5"
          style={{ marginTop: 60 }}
        >
          <div className="col-sm-10 bg-white mt-3 p-3">
            <h2 className="text-dark">Terms &amp; Conditions</h2>
            <small className="text-secondary">
              Last Updated on 08 July, 2023
            </small>
            <ol className="ml-3 mt-3">
              <li className="fos-16">
                <h5 className="text-dark fos-20 ml-2">Creation Of Account</h5>
                <p className="fos-16 ml-2">
                  To create an account we need your verified email address or
                  Mobile number, which could then be used to login to
                  EroomRent.in. You have to accept the terms of service before
                  creating an account on EroomRent.in
                  <br />
                  <br />
                  EroomRent.in reserves the right to the creation of the account
                  on its website and can reject the creation based on content,
                  information, broker listing or any other reason it may find
                  appropriate without stating and is not liable to give a
                  clarification or reason for rejecting the account creation.
                  <br />
                  <br />
                  EroomRent.in reserves the right to charge or change the
                  charges for creation of the account or for allowing access to
                  contact details of landlord /tenant anytime that it deems
                  necessary.
                </p>
              </li>
              <li className="fos-16">
                <h5 className="text-dark fos-20 ml-2">
                  How to book room by tenant ?
                </h5>
                <p className="fos-16 ml-2">
                  If you are new user's then you can register by login/register
                  option then search room and book here we are providing
                  complete dashboard for you.
                </p>
              </li>
              <li className="fos-16">
                <h5 className="text-dark fos-20 ml-2">
                  What is confirmed booking and non-confirmed booking?
                </h5>
                <p className="fos-16 ml-2">
                  In confirmed booking we will hold your booking room till 48
                  hrs and we are taking 500 rs as a confirmation amount that
                  will be adjust in your rent after booking.if you will cancel
                  then this amount will not refunded so if you 100% sure then
                  you go for confirmed booking otherwise go for non-confirmed
                  but in non-confirmed booking we can not hold room it can be
                  booked by other.
                </p>
              </li>
              <li className="fos-16">
                <h5 className="text-dark fos-20 ml-2">
                  How to visit room physically or virtually?
                </h5>
                <p className="fos-16 ml-2">
                  We are providing both way to show room you can view room
                  virually by video caling and physically to direct contact with
                  us or room owner, we will provide complete details of owner as
                  per owner permission or our executive will show room to you
                  for confirmed booking customer.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsCondition;
