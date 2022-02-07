import { useState, useContext, createContext } from "react";
import { authContext } from "./AuthContext";
// import FetchCartProducts from "../Components/CartComponent/FetchCart";
const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [addedItemsToCart, setAddedItemToCart] = useState([]);
  const { token } = useContext(authContext);
  const addTocart = async (productId) => {
    const requestBody = {
      query: `
                      mutation{
                          addToCart(productId:"${productId}"){
                              _id
                              user{
                                  email
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
    // console.log(productId);
    const responseData = await fetch("http://localhost:5000/root", {
      method: "POST",
      body: JSON.stringify(requestBody),
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
  const handleCartItems = (items) => {
    setAddedItemToCart(items);
  };
  // console.log(addedItemsToCart);
  const handleCartCountAdd = (object) => {
    let other = [...addedItemsToCart];
    let bool = false;
    for (let element of other) {
      if (element._id === object._id) {
        bool = true;
        break;
      }
    }
    if (!bool) {
      other.push(object);
      addTocart(object._id);
      // console.log(object._id);
    }
    other[other.length - 1].count++;

    setAddedItemToCart(other);
  };
  const handleCountIncrement = (object) => {
    let other = [...addedItemsToCart];
    for (let element of other) {
      if (element._id === object._id) {
        element.count++;
      }
    }
    setAddedItemToCart(other);
  };
  const handleCountDecrement = (object) => {
    let other = [...addedItemsToCart];
    for (let element of other) {
      if (element._id === object._id) {
        element.count--;
      }
    }
    if (object.count === 0) {
      other = addedItemsToCart.filter((item) => item.id !== object.id);
    }
    setAddedItemToCart(other);
  };
  const handleDeleteItem = (object) => {
    const other = addedItemsToCart.filter((item) => item._id !== object._id);
    console.log(other);
    setAddedItemToCart(other);
  };

  const value = {
    handleCartCountAdd,
    addedItemsToCart,
    handleCartItems,
    handleCountIncrement,
    handleCountDecrement,
    handleDeleteItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;

/*



*/
