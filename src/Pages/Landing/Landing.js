import React, { useState } from "react";
import "./Landing.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Landing = () => {
  const [buttonName, setButtonName] = useState("login");
  const handleButtonChange = () => {
    buttonName === "login" ? setButtonName("signup") : setButtonName("login");
  };
  return (
    <React.Fragment>
      <div className="header__section">
        <div className="cart__name">
          <h1>My Shopping Cart</h1>
        </div>
        <div className="dynamicButton">
          <button onClick={handleButtonChange} className="btn">
            {buttonName.toUpperCase()}
          </button>
        </div>
      </div>
      <div className="image__form__box">
        {buttonName === "signup" ? <SignIn /> : <SignUp />}
      </div>
      <div className="footer">
        <h1>All Rights Reserved !</h1>
      </div>
    </React.Fragment>
  );
};

export default Landing;
