import React from "react";
import "./CartComponent.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartContext } from "../../Contexts/CartContext";
import { Typography } from "@mui/material";
const CartComponent = ({ imageObject }) => {
  const { handleCountIncrement, handleCountDecrement, handleDeleteItem } =
    useCartContext();

  return (
    <React.Fragment>
      <div className="cart__box">
        <div className="image__box">
          <img src={imageObject.image} alt="ImageSection" />
        </div>
        <div className="desc__btns">
          <div className="desc">
            <h1>{imageObject.type}</h1>
          </div>
          <div className="btns">
            <Typography gutterBottom color="primary" variant="h5">
              Quantity : {imageObject.count}
            </Typography>
            <div>
              <button
                className="btn"
                onClick={() => handleCountIncrement(imageObject)}
              >
                <AddIcon />
              </button>
              <button
                className="btn"
                onClick={() => handleDeleteItem(imageObject)}
              >
                <DeleteIcon />
              </button>
              <button
                className="btn"
                onClick={() => handleCountDecrement(imageObject)}
              >
                <RemoveIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartComponent;
