import React, { useEffect, useState } from "react";
import MyOrders from "./MyOrders";

function OrderFetch() {
  const [orderedItems, setOrderedItems] = useState([]);
  const [isLoading, setLOading] = useState(true);

  const fetchorders = () => {
    const requestQuery = {
      query: `
                          query{
                              Orders{
                                  _id
                                 user{
                                     fullname
                                 }
                                  orderItems{description
                                  price
                                  image
                                  category
                                  count
                                  }
                                  shippingDetails{
                                      houseNo
                                      phone
                                      address
                                  }
                              }
                          }
                      `,
    };
    fetch("http://localhost:5000/root", {
      method: "POST",
      body: JSON.stringify(requestQuery),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token,
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("page not found");
        }
        return res.json();
      })
      .then((resData) => {
        let updated = resData.data.Orders;
        // this.setState({ orderedItems: updated });
        setOrderedItems(updated);
        setLOading(false);
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    let mount = true;
    if (mount) {
      fetchorders();
    }
    return () => {
      mount = false;
    };
  });
  return (
    <div>
      {isLoading && <div>Loading</div>}
      {!isLoading && <MyOrders fetchedData={orderedItems} />}
    </div>
  );
}

export default OrderFetch;
