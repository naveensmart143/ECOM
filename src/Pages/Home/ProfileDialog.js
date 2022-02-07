import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";

let profile = JSON.parse(window.localStorage.getItem("profileObject")) || {
  full_name: "",
  email: "",
};

export default function ProfileDialog({ open, setOpen, handleClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (profile.name === "") {
      profile = JSON.parse(window.localStorage.getItem("profileObject"));
      setOpen(true);
    }
  });

  const handleLogOut = () => {
    window.localStorage.removeItem("profileObject");
    navigate("/");
  };

  const handleMyOrders = () => {
    navigate("/shipping-page");
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"User Info"}</DialogTitle>
        <DialogContent className="dailog__content">
          <Typography gutterBottom>Name: {profile.full_name}</Typography>
          <Typography gutterBottom>Email: {profile.email_id}</Typography>
          <Button
            className="childs"
            fullWidth
            color="default"
            variant="default"
            onClick={handleMyOrders}
          >
            My Orders
          </Button>
          <Button
            className="childs"
            fullWidth
            color="default"
            variant="default"
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
