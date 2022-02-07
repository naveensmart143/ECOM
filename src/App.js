import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import Cart from "./Pages/Cart/Cart";
import FetchCartProducts from "./Components/CartComponent/FetchCart";
import LandingPage from "./Pages/Landing/Landing";
import CartContextProvider from "./Contexts/CartContext";
import Shipping from "./Pages/Shipping/Shipping";
import OrderFetch from "./Pages/Orders/OrderFetch";
import { authContext } from "./Contexts/AuthContext";
const App = () => {
  const { token } = useContext(authContext);

  console.log("render app");
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          {!token && <Route path="/" element={<LandingPage />} />}

          {token && <Route path="/home-page" element={<Home />} />}
          {/* {token && <Route path="/cart-page" element={<Cart />} />} */}
          {token && <Route path="/cart-page" element={<FetchCartProducts />} />}

          {token && <Route path="/shipping-page" element={<Shipping />} />}
          {token && <Route path="/orders-page" element={<OrderFetch />} />}
          {/* <Route path="/cart-page" element={<FetchCartProducts />} /> */}
          {/* <Route path="/home-page" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
