import React from "react";
import styled from "styled-components";

const Chat = () => {
  return (
    <Wrapper>
      <section>
        {/* Main Content */}
        <div
          className="row justify-content-center align-items-center"
          style={{ marginTop: 80 }}
        >
          <div className="col-sm-12" style={{ height: "85vh" }}>
            <div className="row d-flex justify-content-center align-items-center">
              <div
                className="col-sm-4 border border-muted bg-lightest-grey px-0"
                style={{ height: "85vh" }}
              >
                <div
                  className="nav flex-column nav-pills py-4 fos-14"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <p className="border-bottom border-muted pb-3 fow-600 fos-18 ml-3">
                    EroomRent{" "}
                    <span className="fos-20 font-weight-bold">Inbox</span>
                  </p>
                  <button
                    className="nav-link active text-left px-2 py-3"
                    id="v-pills-chat-1-tab"
                    data-toggle="pill"
                    data-target="#chat-1"
                    type="button"
                    role="tab"
                    aria-controls="chat-1"
                    aria-selected="true"
                  >
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="d-flex" style={{ gap: "1rem" }}>
                        <div>
                          <img src="/images/packers.png" alt="Packers" />
                        </div>
                        <div>
                          <p className="fos-18 mb-0">Packers &amp; Movers</p>
                          <small className="fos-14">
                            You : Bot_Initialized
                          </small>
                        </div>
                      </div>
                      <small className="text-muted">10th Aug</small>
                    </div>
                  </button>
                </div>
              </div>
              <div className="col-sm-7 border border-muted p-0">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active p-0"
                    id="chat-1"
                    role="tabpanel"
                    aria-labelledby="v-pills-chat-1-tab"
                  >
                    <div className="card" style={{ height: "85vh" }}>
                      <div className="card-header bg-white py-2">
                        <p className="font-weight-bold fos-16 mb-0">
                          Packers &amp; Movers
                        </p>
                      </div>
                      <div className="card-body px-0 position-relative text-center">
                        <span className="badge bg-lightest-grey text-muted px-2">
                          10th August 2023
                        </span>
                        <br />
                        <span className="badge bg-lightest-grey text-muted mt-3 px-2">
                          Rajat Ghate joined the chat
                        </span>
                        {/* Messages */}
                        <div>
                          <div className="media border-0 p-3 text-left">
                            <img
                              src="/images/logo1.png"
                              alt="John Doe"
                              className="mr-3 rounded-0"
                            />
                            <div className="media-body bg-white pl-3 text-left position-relative">
                              <small className="text-gold">EroomRent</small>
                              <p>Hey Rajat Ghate! How can I help you?</p>
                              <small
                                style={{
                                  position: "absolute",
                                  right: "1%",
                                  bottom: "5%",
                                }}
                              >
                                1:23 PM
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around align-items-center ml-5 mr-2">
                          <button
                            className="btn btn-outline-success p-0 py-1"
                            style={{ width: "15rem", fontSize: 13 }}
                          >
                            Check Prices for Shifting within city{" "}
                          </button>
                          <button
                            className="btn btn-outline-success p-0 py-1"
                            style={{ width: "16rem", fontSize: 13 }}
                          >
                            Check Prices for Shifting to another city{" "}
                          </button>
                          <button
                            className="btn btn-outline-success p-0 py-1"
                            style={{ width: "15rem", fontSize: 13 }}
                          >
                            Check Prices for only tempo/truck{" "}
                          </button>
                        </div>
                      </div>
                      <div className="card-footer bg-white d-flex justify-content-around align-items-center">
                        <div className="d-flex" style={{ gap: "1rem" }}>
                          <i
                            className="far fa-smile fos-25"
                            style={{ cursor: "pointer" }}
                          ></i>
                          <i
                            className="fas fa-paperclip fos-25"
                            style={{ cursor: "pointer" }}
                          ></i>
                        </div>
                        <input
                          type="text"
                          placeholder="Type your message here"
                          style={{
                            width: "35rem",
                            height: 40,
                            paddingLeft: 10,
                            borderRadius: 8,
                          }}
                          className="border border-muted"
                        />
                        <div>
                          <i
                            class="fas fa-microphone fos-20"
                            style={{ color: "#daa520", cursor: "pointer" }}
                          ></i>
                        </div>
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

export default Chat;

const Wrapper = styled.section`
  .navbar-nav li:hover ul.dropdown-menu {
    display: block;
  }

  .dropdown-submenu {
    position: relative;
  }

  .dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
  }

  /* rotate caret on hover */
  .dropdown-menu li a:hover:after {
    text-decoration: underline;
    transform: rotate(-90deg);
  }

  .nav-pills .nav-link.active {
    background-color: #fff;
    color: black;
  }

  .card-body {
    background-image: url("/images/chat-image.jpg");
  }
`;
