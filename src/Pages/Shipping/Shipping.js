import React from "react";
import "./Shipping.css";
import ShippingImage from "../../Images/shipping.svg";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const Shipping = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted...");
    navigate("orders-page");
  };
  return (
    <div className="ship__main__div">
      <div className="ship__header">
        <p>Shipping Page</p>
      </div>
      <div className="form__box">
        <div className="image__box">
          <img src={ShippingImage} alt="ShippingImage" />
        </div>
        <div className="form__main__box">
          <form onSubmit={handleSubmit}>
            <div className="form__inner__div">
              <label htmlFor="name__field">Name : </label>
              <TextField
                type="text"
                variant="standard"
                color="primary"
                id="name__field"
              />
              <div>
                <label htmlFor="houseNumber__field">House No : </label>
                <TextField
                  type="text"
                  variant="standard"
                  color="primary"
                  id="houseNumber__field"
                />
              </div>
              <div>
                <label htmlFor="mobileNumber__field">Mobile No : </label>
                <TextField
                  type="tel"
                  variant="standard"
                  color="primary"
                  id="mobileNumber__field"
                />
              </div>
              <div>
                <label htmlFor="address__field">Address : </label>
                <TextField
                  type="text"
                  variant="outlined"
                  color="primary"
                  id="address__field"
                  multiline
                />
              </div>
            </div>
            <div>
              <Button type="submit" color="secondary" variant="contained">
                Buy Products
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
