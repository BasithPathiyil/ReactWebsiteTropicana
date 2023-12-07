import { Grid, Typography } from "@mui/material";
import React from "react";
import img2 from "../../assets/images/Portrait of blonde woman holding a plant.png";

const Statistics = ({ isMobile }) => {
  return (
    <Grid item xs={12} md={12} marginTop={"30px"}>
      <Grid container>
        <Grid item xs={1} md={2}></Grid>
        <Grid item xs={10} md={8}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={3}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Typography
                style={{ color: "#155E1E", fontSize: "50px", fontWeight: 500 }}
              >
                400+
              </Typography>
              <Typography
                style={{ color: "#000", fontSize: "22px", fontWeight: 400 }}
              >
                PRODUCTS
              </Typography>
              <Typography
                style={{ color: "#155E1E", fontSize: "50px", fontWeight: 500 }}
              >
                1100+
              </Typography>
              <Typography
                style={{ color: "#000", fontSize: "22px", fontWeight: 400 }}
              >
                ORDERS
              </Typography>
              <Typography
                style={{ color: "#155E1E", fontSize: "50px", fontWeight: 500 }}
              >
                1250+
              </Typography>
              <Typography
                style={{ color: "#000", fontSize: "22px", fontWeight: 400 }}
              >
                PLANT TYPES
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display={"flex"}
              justifyContent={"center"}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  background: "#5B9B3E",
                  position: "absolute",
                  top: "100px",
                  height: isMobile ? "300px" : "470px",
                  width: isMobile ? "300px" : "470px",
                  borderRadius: "50%",
                  opacity: ".8",
                }}
              />
              <img
                style={{
                  zIndex: 1,
                  height: isMobile ? "300px" : "470px",
                  width: isMobile ? "300px" : "470px",
                }}
                src={img2}
                alt="images"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Typography
                style={{ color: "#155E1E", fontSize: "50px", fontWeight: 500 }}
              >
                350+
              </Typography>
              <Typography
                style={{ color: "#000", fontSize: "22px", fontWeight: 400 }}
              >
                PROJECTS DONE
              </Typography>
              <Typography
                style={{ color: "#155E1E", fontSize: "50px", fontWeight: 500 }}
              >
                400 +
              </Typography>
              <Typography
                style={{ color: "#000", fontSize: "22px", fontWeight: 400 }}
              >
                HAPPY CLIENTS
              </Typography>
              <Typography
                style={{ color: "#155E1E", fontSize: "50px", fontWeight: 500 }}
              >
                1250+
              </Typography>
              <Typography
                style={{ color: "#000", fontSize: "22px", fontWeight: 400 }}
              >
                PLANT TYPES
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} md={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default Statistics;
