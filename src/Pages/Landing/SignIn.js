import React, { useContext } from "react";
import SignInImage from "../../Images/login.svg";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { authContext } from "../../Contexts/AuthContext";

// import { useNavigate } from "react-router-dom";

const SignIn = () => {
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const { login } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email__id = document.querySelector("#email__text__field").value;
    const password = document.querySelector("#password__text__field").value;
    let requestBody = {
      query: `
      mutation{
        login(email:"${email__id}",password:"${password}"){
          token
          userId
        }
      }
      `,
    };
    fetch("http://localhost:5000/root", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resData) => {
        if (resData.status !== 200 && resData.status !== 201) {
          throw new Error("Page Not Found");
        }
        return resData.json();
      })
      .then((res) => {
        if (res.data.login.token) {
          login(res.data.login.token, res.data.login.userId);
          localStorage.setItem("token", res.data.login.token);
          localStorage.setItem("userId", res.data.login.userId);

          navigate("/home-page");
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form__division">
          <div className="login__image">
            <img src={SignInImage} alt="Login" />
          </div>
          <div className="text__fields">
            <TextField
              placeholder="Enter Email Id"
              type="text"
              variant="standard"
              color="primary"
              fullWidth
              id="email__text__field"
            />
            <TextField
              placeholder="Password"
              type="password"
              variant="standard"
              color="primary"
              fullWidth
              id="password__text__field"
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
