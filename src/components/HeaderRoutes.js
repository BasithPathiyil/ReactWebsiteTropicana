import { Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledTypography = styled(Typography)(() => ({
  textDecoration: "none",
  cursor: "pointer",
  color: "#000",
}));

const HeaderRoutes = () => {
  return (
    <>
      <StyledTypography component={Link} to={"/"}>
        Home
      </StyledTypography>
      <StyledTypography component={Link} to={"/#"}>
        About Us
      </StyledTypography>
      <StyledTypography>Services</StyledTypography>
      <StyledTypography>Shop</StyledTypography>
      <StyledTypography>Contact Us</StyledTypography>
    </>
  );
};

export default HeaderRoutes;
