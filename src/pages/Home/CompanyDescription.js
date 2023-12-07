import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import imageUrl from "../../assets/images/IMG_2961-04022021 1.png";

const CompanyDescription = ({ isMobile }) => {
  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        bgcolor: "rgba(248, 248, 248, 0.70)",
        padding: isMobile ? "40px 10px" : "50px 80px",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={4.5}
          sx={{ paddingRight: isMobile ? "2px" : "75px" }}
        >
          <Box>
            <Typography
              style={{
                color: "#06350C",
                fontFamily: "Ubuntu",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              The world's 1st subscription based Indoor Plant Company
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                marginTop: "20px",
                color: "#3A3A3A",
                textAlign: "justify",
                fontFamily: "Ubuntu",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "32px",
              }}
            >
              The world’s first subscription based Indoor Plant Company –
              Harvestay is revolutionising the way people buy and care for their
              plants. With this innovative model, customers can subscribe to a
              monthly delivery of a curated selection of healthy and vibrant
              plants that
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={7.5}>
          <Card sx={{ borderRadius: "10px", padding: "5px" }}>
            <img src={imageUrl} alt="image" style={{ borderRadius: "10px" }} />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CompanyDescription;
