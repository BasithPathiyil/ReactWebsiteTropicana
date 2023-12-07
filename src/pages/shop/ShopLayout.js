import React from "react";
import bgImg1 from "../../assets/images/shoplayoutbgImg.png";
import { Button, Grid, Typography } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Login from "./Login";
import Register from "./Register";
import OTPForm from "./OTPForm";

const ShopLayout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Grid
          style={{
            backgroundImage: `url(${bgImg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            height: "780px",
          }}
          container
        >
          <Grid item xs={12} md={12} style={{ padding: "24px 60px" }}>
            <Header type={"shop"} />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {children}
              </Grid>
              <Grid item xs={12} md={6}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          height: "236px",
          background:
            "linear-gradient(180deg, #EDEDED 0%, rgba(217, 217, 217, 0.00) 100%);",
        }}
      ></Grid>
      <Grid item xs={12} md={12}>
        <Footer type={"shop"} />
      </Grid>
    </Grid>
  );
};

export default ShopLayout;
