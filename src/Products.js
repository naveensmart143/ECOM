import React from "react";
import Product from "./Components/Product/Product";
import Grid from "@mui/material/Grid";

export const imageObject = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1566502548870-875212fb031d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2Jvb2slMjBhaXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    type: "laptops apple macbook",
    count: 0,
    price: 100,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1571380401583-72ca84994796?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    type: "mobiles",
    count: 0,
    price: 200,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1589441117228-182421326689?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1vYmlsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    type: "mobiles",
    count: 0,
    price: 300,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1575975243243-5462a2054ed2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    type: "head phones ear phones",
    count: 0,
    price: 100,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1556196148-1fb724238998?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    type: "laptops apple macbook",
    count: 0,
    price: 200,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1548378329-437e1ef34263?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    type: "head phones ear phones",
    count: 0,
    price: 300,
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1588318312727-e210fcd11464?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsdWV0b290aCUyMGRldmljZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    type: "bluetooth",
    count: 0,
    price: 100,
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1617350142147-7403b8fb9889?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJsdWV0b290aCUyMGRldmljZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    type: "bluetooth",
    count: 0,
    price: 200,
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    type: "laptops apple macbook",
    count: 0,
    price: 300,
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    type: "computer desktop",
    count: 0,
    price: 100,
  },
];

const Products = (props) => {
  const renderObject = props.renderObject;
  // console.log(renderObject);
  return (
    <Grid
      container
      spacing={3}
      flexDirection="row"
      className="grid__container"
      rowSpacing={8}
    >
      {renderObject.map((image, index) => {
        return (
          <Grid key={index} item xs={12} md={6} lg={6} xl={4}>
            <Product object={image} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Products;
