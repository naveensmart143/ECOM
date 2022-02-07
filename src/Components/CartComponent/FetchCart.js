import React, { useContext, useState, useEffect } from "react";
import { authContext } from "../../Contexts/AuthContext";
import { useCartContext } from "../../Contexts/CartContext";
import Cart from "../../Pages/Cart/Cart";
const FetchCartProducts = () => {
  const { token, userId } = useContext(authContext);
  let [isLoading, setLoading] = useState(true);
  // const [cartItems, setCartItems] = useState([]);
  const { handleCartItems } = useCartContext();
  const fetchData = async () => {
    const requestQuery = {
      query: `
                        query{
                            Orders{
                                _id
                                user{
                                    _id
                                }
                                orderItems{
                                _id
                                name
                                description
                                price
                                image
                                category
                                count
                                }
                            }
                        }
                    `,
    };
    console.log(token);
    const responseData = await fetch("http://localhost:5000/root", {
      method: "POST",
      body: JSON.stringify(requestQuery),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (responseData.status !== 200 && responseData.status !== 201) {
      throw new Error("page not found");
    }
    return responseData.json();
  };
  useEffect(() => {
    let mount = true;
    fetchData().then((resData) => {
      if (mount) {
        let updated = [...resData.data.Orders];
        // console.log(updated);
        let orders = updated.filter((item) => item.user._id === userId);
        // console.log(orders);
        // console.log(userId);

        let updatedOrder;
        if (orders.length !== 0) {
          updatedOrder = orders[0].orderItems;
        } else {
          updatedOrder = [];
        }
        // console.log();
        // console.log(updatedOrder);
        handleCartItems(updatedOrder);
        // setCartItems(updatedOrder);
        // console.log(updatedOrder);
        // console.log(updated);
        setLoading(false);
      }
    });
    return () => {
      mount = false;
    };
  }, []);

  return (
    <div>
      {isLoading && <div>Loading</div>}
      {!isLoading && <Cart />}
    </div>
  );
};
export default FetchCartProducts;
