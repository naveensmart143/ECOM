import React, { useContext } from "react";
import SignUpImage from "../../Images/sign-up.svg";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router";
// import { CircularProgress } from "@mui/material";
// import { Backdrop } from "@mui/material";
import { authContext } from "../../Contexts/AuthContext";
const SignUp = () => {
  // const [open, setOpen] = useState(false);
  const { login } = useContext(authContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    // setOpen(true);
    const full__name = document.querySelector("#full__name").value;
    const email__id = document.querySelector("#email__id").value;
    const password = document.querySelector("#password").value;
    console.log(full__name);
    console.log(email__id);
    console.log(password);

    const requestBody = {
      query: `mutation{
          signUp(UserInput:{fullname:"${full__name}",email:"${email__id}",password:"${password}"}){
            userId
            token
          }
        }`,
    };

    fetch("http://localhost:5000/root", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Page not Found");
        }
        return res.json();
      })
      .then((resdata) => {
        if (resdata.data.signUp.token) {
          login(resdata.data.signUp.token, resdata.data.signUp.userId);
          localStorage.setItem("token", resdata.data.signUp.token);
          localStorage.setItem("userId", resdata.data.signUp.userId);

          navigate("/home-page");
        }
      })
      .catch((err) => {
        throw err;
      });

    // let profile = {};
    // profile["full_name"] = full__name.value;
    // profile["email_id"] = email__id.value;
    // profile["password"] = password.value;
    // window.localStorage.setItem("profileObject", JSON.stringify(profile));
    // setTimeout(() => {
    //   setOpen(false);
    //   navigate("/home-page");
    // }, 3000);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <div className="form__division">
          <div className="login__image">
            <img src={SignUpImage} alt="Login" />
          </div>
          <div className="text__fields__signup">
            <TextField
              id="full__name"
              placeholder="Full Name"
              type="text"
              variant="standard"
              color="primary"
              fullWidth
            />
            <TextField
              id="email__id"
              placeholder="Email"
              type="text"
              variant="standard"
              color="primary"
              fullWidth
            />
            <TextField
              id="password"
              placeholder="Password"
              type="password"
              variant="standard"
              color="primary"
              fullWidth
            />
          </div>
          <div className="sign__button">
            <button className="btn" type="submit">
              SignUp
            </button>
            {/* <span>Already have an account ?</span>
            <a href="https://www.google.com" onClick={onHandleButtonChnage}>
              Login
            </a> */}
          </div>
          {/* <Backdrop open={open}>
            <CircularProgress />
          </Backdrop> */}
        </div>
      </form>
    </>
  );
};

export default SignUp;
