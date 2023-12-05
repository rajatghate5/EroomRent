import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { propertyBook } from "../actions";

const WaitingConfirmation = () => {
  let [count, setCount] = useState(0);
  const [thankYou, setThankYou] = useState(false);
  const [alreadyBooked, setAlreadyBooked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tenantID = useSelector((state) => state.detailReducer.id);
  const propertyID = useSelector((state) => state.detailReducer.propertyId);

  const returnHome = (time) => {
    if (propertyID !== "" && tenantID !== "") {
      axios
        .post("http://127.0.0.1:5000/booking", {
          propertyId: propertyID,
          tenantId: tenantID,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "1") {
            setThankYou(true);
          } else if (res.data.status === "2") {
            setAlreadyBooked(true);
          } else {
            setThankYou(false);
          }
        })
        .catch((err) => console.log(err));
    }
    setTimeout(() => {
      dispatch(propertyBook(""));
      navigate("/tenant");
    }, time);
  };

  useEffect(() => {
    setCount(count++);
    if (count === 2) {
      setTimeout(() => {        
        returnHome(5000);
      }, 7000);
    }
  }, []);

  return (
    <Wrapper>
      {alreadyBooked ? (
        <div className="box2">
          <div className="row bg-img w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="col-sm-6 d-sm-flex justify-content-end align-items-end h-100">
              <div className="d-sm-flex w-100 justify-content-center align-items-center flex-column">
                <h3 className="kalam-font mt-4">
                  It is already booked{" "}
                  <i className="fas fa-exclamation fa-1x text-danger"></i>
                </h3>
                <span className="mb-2 h-100 py-1">
                  It Will Automatically redirect you to Home
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={thankYou ? "box1" : "box"}>
          {thankYou ? (
            <div className="thanks d-flex justify-content-center align-items-start flex-column">
              <h3 className="text-dark text-center text-capitalize kalam-font">
                thank you{" "}
                <i
                  className="fas fa-check-circle"
                  style={{ color: "#1bde7d" }}
                ></i>
              </h3>
              <h4 className="text-dark text-center text-capitalize kalam-font">
                owner will contact you soon!
              </h4>
              <span className="text-dark text-center text-capitalize kalam-font">
                you will automatically redirect to home
              </span>
            </div>
          ) : (
            <div className="loading">
              <h3 className="text-dark text-center text-capitalize kalam-font">
                waiting for confirmation
              </h3>
              <span>
                <i></i>
                <i></i>
                <i className="bg-danger"></i>
              </span>
            </div>
          )}
        </div>
      )}
    </Wrapper>
  );
};
export default WaitingConfirmation;

const Wrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=AR+One+Sans&family=Kalam&family=Montserrat:wght@400;500;600;700&family=Noto+Sans:wght@600&family=Open+Sans:wght@400;500;600&family=Poppins:wght@400;500;600;900&display=swap");
  .box {
    width: 100%;
    height: 85vh;
    position: relative;
    background: white
      url("https://static.vecteezy.com/system/resources/previews/005/468/633/non_2x/stickman-businessman-is-in-front-of-the-clock-with-his-hands-on-his-waist-and-very-angry-thinks-it-s-late-hand-drawn-cartoon-illustration-free-vector.jpg")
      no-repeat top;
    background-size: contain;
  }
  .box1 {
    width: 100%;
    height: 85vh;
    position: relative;
    background: white
      url("https://static.vecteezy.com/system/resources/previews/005/468/654/original/stickman-businessman-is-in-front-of-the-hourglass-very-happy-to-have-completed-the-task-before-the-deadline-hand-drawn-outline-cartoon-illustration-free-vector.jpg")
      no-repeat top;
    background-size: contain;
  }

  .box2 {
    width: 100%;
    height: 92vh;
  }
  .loading,
  .thanks {
    position: absolute;
    left: 15%;
    right: 0;
    top: 70%;
    width: 350px;
    color: #fff;
    margin: auto;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .bg-img {
    background: url("https://img.freepik.com/premium-vector/business-flat-drawing-back-view-happy-businessman-completed-task-triumphing-with-raised-hands-desk-workplace-successful-well-done-work-business-project-cartoon-design-vector-illustration_620206-205.jpg")
      no-repeat top;
    background-size: contain;
  }

  .thanks {
    left: 5%;
    top: 70%;
  }
  .loading span {
    position: absolute;
    height: 50px;
    width: 150px;
    top: 60px;
    left: 80px;
    overflow: hidden;
  }
  .loading span > i {
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    -webkit-animation: wait 4s infinite;
    -moz-animation: wait 4s infinite;
    -o-animation: wait 4s infinite;
    animation: wait 4s infinite;
  }
  .loading span > i:nth-of-type(1) {
    left: -28px;
    background: yellow;
  }
  .loading span > i:nth-of-type(2) {
    left: -21px;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    background: lightgreen;
  }

  .loading span > i:nth-of-type(3) {
    left: -14px;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  @-webkit-keyframes wait {
    0% {
      left: -7px;
    }
    30% {
      left: 52px;
    }
    60% {
      left: 22px;
    }
    100% {
      left: 100px;
    }
  }
  @-moz-keyframes wait {
    0% {
      left: -7px;
    }
    30% {
      left: 52px;
    }
    60% {
      left: 22px;
    }
    100% {
      left: 100px;
    }
  }
  @-o-keyframes wait {
    0% {
      left: -7px;
    }
    30% {
      left: 52px;
    }
    60% {
      left: 22px;
    }
    100% {
      left: 100px;
    }
  }
  @keyframes wait {
    0% {
      left: -7px;
    }
    30% {
      left: 52px;
    }
    60% {
      left: 22px;
    }
    100% {
      left: 100px;
    }
  }

  .kalam-font {
    font-family: "Kalam", cursive;
  }
`;
