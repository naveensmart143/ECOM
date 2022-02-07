import React from "react";
// import "../Pages/myorder.css";
import "../../Pages/Orders/myorder.css";
import { Card, CardContent } from "@mui/material";

const CardComponentOrders = ({ orderdata }) => {
  console.log(orderdata);
  console.log(orderdata.shippingDetails);
  return (
    <React.Fragment>
      <Card style={{ height: "50vh" }}>
        <CardContent>
          <div className="inner_div">
            <div>Id: </div>
            <div className="product__id">{orderdata._id}</div>
          </div>
          <div className="inner_div">
            <div>Product Name: </div>
            <div className="desc">
              {orderdata.orderItems.map((item) => (
                <li>{item.description}</li>
              ))}
            </div>
          </div>
          <div className="inner_div">
            <div>Address: </div>
            <div className="count">
              <li>{orderdata.shippingDetails.houseNo}</li>
              <li>{orderdata.shippingDetails.phone}</li>
              <li>{orderdata.shippingDetails.address}</li>
            </div>
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default CardComponentOrders;
