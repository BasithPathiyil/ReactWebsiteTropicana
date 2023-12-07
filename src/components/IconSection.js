import { IconButton } from "@mui/material";
import React from "react";
import CartIcon from "../assets/svgicons/CartIcon";
import ProfileIcon from "../assets/svgicons/ProfileIcon";
import SearchIcon from "../assets/svgicons/SearchIcon";

const IconSection = () => {
  return (
    <>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton>
        <ProfileIcon />
      </IconButton>
      <IconButton>
        <CartIcon />
      </IconButton>
    </>
  );
};

export default IconSection;
