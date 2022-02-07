import React, { useState, useRef } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import InputAdornment from "@mui/material/InputAdornment";
import Products from "../../Products";
import ProfileDialog from "./ProfileDialog";
import { useCartContext } from "../../Contexts/CartContext";

function FetchData({ objectData }) {
  const { addedItemsToCart } = useCartContext();
  const navigate = useNavigate();
  const imageRef = useRef(objectData);
  let [renderObject, setRenderObject] = useState(objectData);

  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer anchor="left" open={openDrawer} onClick={handleOpenDrawer}>
        <Box sx={{ width: 250, mt: "50px" }} role="presentation">
          <List>
            {[
              "Laptop",
              "Mobile",
              "Head phones",
              "Bluetooth",
              "macbook",
              "desktop",
            ].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  let renderSelect = imageRef.current.filter((item) => {
                    return item.category
                      .toLowerCase()
                      .includes(text.toLowerCase());
                  });
                  setRenderObject(renderSelect);
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <AppBar
        position="sticky"
        sx={{ marginBlockEnd: "40px" }}
        className="app__bar"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            My Shopping Shop
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <TextField
              style={{ borderBottom: "none" }}
              placeholder="Search..."
              color="primary"
              variant="filled"
              className="search__text__field"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className="input__adornment">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => {
                const renderSelect = imageRef.current.filter((item) => {
                  return item.category
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
                });

                setRenderObject(renderSelect);
              }}
            />
          </Box>
          <Box sx={{ m: 2 }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleClickOpen}
            >
              <AccountCircle />
            </IconButton>
            <ProfileDialog
              open={open}
              setOpen={setOpen}
              handleClose={handleClose}
            />
          </Box>
          <Box sx={{ m: 2 }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={() => {
                navigate("/cart-page");
              }}
            >
              <Badge badgeContent={addedItemsToCart.length} max={10}>
                <ShoppingBasket />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Products renderObject={renderObject} />
    </div>
  );
}

export default FetchData;
