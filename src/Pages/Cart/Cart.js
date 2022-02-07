import React from "react";
import "./Cart.css";
import CartComponent from "../../Components/CartComponent/CartComponent";
import { useCartContext } from "../../Contexts/CartContext";
import { Button, Typography } from "@mui/material";
import EmptyCart from "../../Images/empty_cart.svg";
import { useNavigate } from "react-router";
// import { authContext } from "../../Contexts/AuthContext";

const Cart = () => {
  const { addedItemsToCart } = useCartContext();
  // let cartItem = [...addedItemsToCart, ...addItems];
  // const [cartItems, setCartItems] = useState(addedItemsToCart);
  console.log(addedItemsToCart);
  const navigate = useNavigate();
  const handleShippingClick = () => {
    navigate("/shipping-page");
  };

  let totalPrice = 0;
  addedItemsToCart.forEach((element) => {
    // console.log(element.price);
    totalPrice += element.price * element.count;
  });
  return (
    <div className="main__division">
      <div className="total__amount">
        <div className="cart__page__name">
          <h1>My Shopping Cart</h1>
        </div>

        <div className="price__holder">
          <h1>Price: </h1>
          <h2>${totalPrice}</h2>
        </div>
      </div>
      {addedItemsToCart.length > 0 && (
        <div className="sticky__division">
          <div>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleShippingClick}
            >
              Buy Products
            </Button>
          </div>
        </div>
      )}
      {addedItemsToCart.length === 0 && (
        <div className="cart__empty">
          <img src={EmptyCart} alt="Empty__Cart" />
          <Typography color="primary" variant="h1">
            Cart is Empty !
          </Typography>
        </div>
      )}
      <div className="products__selected">
        {addedItemsToCart.map((itemObject) => (
          <CartComponent key={itemObject.id} imageObject={itemObject} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
