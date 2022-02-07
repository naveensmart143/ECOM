import React from "react";
import "./Product.css";
import { Button, CardActions, Paper, Typography } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import { useCartContext } from "../../Contexts/CartContext";

const Product = ({ object }) => {
  const { handleCartCountAdd } = useCartContext();
  return (
    <React.Fragment>
      <Paper elevation={0} sx={{ width: "480px" }}>
        <Card>
          <CardMedia
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              pointerEvents: "none",
            }}
            component="img"
            height="320"
            src={object.image}
          />
          <CardContent>
            <Typography variant="h5">Apple MacBook</Typography>
            <Typography variant="body1">Price : ${object.price}</Typography>
          </CardContent>
          <CardActions className="card__actions">
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleCartCountAdd(object)}
              disableElevation
            >
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </React.Fragment>
  );
};

export default Product;
