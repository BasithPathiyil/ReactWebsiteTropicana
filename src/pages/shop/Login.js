import { Button, Grid, TextField, Typography, styled } from "@mui/material";
import React from "react";
import { StyledBasicButton } from "../../components/StyledBasicButton";
import { Link } from "react-router-dom";

const StyledTypography = styled(Typography)(() => ({
  textDecoration: "none",
  cursor: "pointer",
}));

const Login = () => {
  return (
    <Grid container>
      <Grid item xs={2} md={2}></Grid>
      <Grid item xs={8} md={8} display={"flex"} flexDirection={"column"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              style={{
                color: "#000",
                fontFamily: "Ubuntu",
                fontSize: "55px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "70px", // Note: use string for non-px values
                textTransform: "capitalize",
              }}
            >
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ backgroundColor: "white" }}
              fullWidth
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              InputLabelProps={{ style: { color: "black" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ backgroundColor: "white" }}
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              InputLabelProps={{ style: { color: "black" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledBasicButton>Sign In</StyledBasicButton>
          </Grid>
          <Grid item xs={12} display={"flex"}>
            <Typography>Don't have an account ? </Typography>
            <StyledTypography
              component={Link}
              to={"/register"}
              style={{ color: "red", marginLeft: "2px" }}
            >
              Sign Up
            </StyledTypography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} md={2}></Grid>
    </Grid>
  );
};

export default Login;
