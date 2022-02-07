import React, { useState } from "react";
import CardComponentOrders from "../../Components/OrderComponent/OrderItem";
import EmptyCart from "../../Images/empty_cart.svg";
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";
import "./myorder.css";

function MyOrders({ fetchedData }) {
  const NavLink = useNavigate();
  const [orderedItems, setOrderedItems] = useState(fetchedData);
  const handleHome = () => {
    NavLink("/home-page");
  };
  return (
    <div>
      <div className="header__section">
        <div className="inner__division">
          <p>MY Orders</p>
        </div>
      </div>
      {orderedItems.length === 0 && (
        <div className="cart__empty">
          <img src={EmptyCart} alt="Empty__Cart" />
          <Typography color="primary" variant="h4" gutterBottom>
            You haven't ordered anything yet!!
          </Typography>
        </div>
      )}
      <div className="display__products">
        {orderedItems.map((object, index) => (
          <CardComponentOrders key={index} orderdata={object} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="btn" onClick={handleHome}>
          Home
        </button>
      </div>
    </div>
  );
}

export default MyOrders;
