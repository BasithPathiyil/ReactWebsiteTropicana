import React from "react";
import bgImg1 from "../assets/images/Harvestay logo 2 (1).png";
import { Grid, IconButton, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookBlackIcon from "../assets/svgicons/FacebookBlackIcon";
import { TwitterBlackIcon } from "../assets/svgicons/TwitterBlackIcon";
import InstagramBlackIcon from "../assets/svgicons/InstagramBlackIcon";

const StyledTypography = styled(Typography)(() => ({
  textDecoration: "none",
  cursor: "pointer",
  color: "#000",
}));

const Footer = ({ type }) => {
  return (
    <Grid
      container
      display={"flex"}
      alignItems={"center"}
      style={{ height: "193px", background: "#E4E4E4" }}
    >
      <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
        {type === "shop" && <img src={bgImg1} alt="ss" />}
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        {type === "shop" && (
          <StyledTypography component={Link} to={"/#"}>
            Help
          </StyledTypography>
        )}
        {type !== "shop" && (
          <StyledTypography component={Link} to={"/#"}>
            Home
          </StyledTypography>
        )}

        <StyledTypography component={Link} to={"/#"}>
          Contact Us
        </StyledTypography>
        <StyledTypography component={Link} to={"/#"}>
          Privacy & Terms
        </StyledTypography>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <IconButton>
          <FacebookBlackIcon />
        </IconButton>
        <IconButton>
          <TwitterBlackIcon />
        </IconButton>
        <IconButton>
          <InstagramBlackIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Footer;
