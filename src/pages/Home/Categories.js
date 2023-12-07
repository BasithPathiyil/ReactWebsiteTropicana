import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

import img1 from "../../assets/images/categories/Monstera deliciosa plant in a pot.png";
import img2 from "../../assets/images/categories/Empty terracotta clay plant pot.png";
import img3 from "../../assets/images/categories/Potted house plant isolated in white background.png";
import img4 from "../../assets/images/categories/AGLAONEMA PINK 1 (1).png";

import img5 from "../../assets/images/categories/ZZ plants 1.png";
import img6 from "../../assets/images/categories/Sansevieria Fernwood Mikado 2.png";

const Categories = ({ isMobile }) => {
  return (
    <Grid item xs={12} md={12} marginTop={"10px"}>
      <Grid container>
        <Grid item xs={12} md={12} display={"flex"} justifyContent={"right"}>
          <Grid container>
            <Grid item xs={10}>
              <Grid
                container
                sx={{
                  padding: isMobile ? "0px" : "40px 40px 40px 125px",
                  position: "relative",
                  height: "400px",
                }}
              >
                <Grid item xs={12} md={12}>
                  <Typography style={{ fontSize: "34px", fontWeight: 500 }}>
                    Categories
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "137px",
                      cursor: "pointer",
                      width: "300px",
                      position: "absolute",
                      bottom: "10px",
                      textAlign: "center",
                      overflow: "visible",
                      boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.10)",
                      borderRadius: "30px",
                      ":hover": {
                        height: "264px",
                        background: "rgba(152, 195, 71, 0.20)",
                      },
                    }}
                  >
                    <img
                      src={img1}
                      alt="s"
                      style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "21px",
                      }}
                    />
                    <Typography
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "27px",
                        fontWeight: 600,
                      }}
                    >
                      Plants
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "137px",
                      cursor: "pointer",
                      width: "300px",
                      position: "absolute",
                      bottom: "10px",
                      textAlign: "center",
                      overflow: "visible",
                      boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.10)",
                      borderRadius: "30px",
                      ":hover": {
                        height: "264px",
                        background: "rgba(152, 195, 71, 0.20)",
                      },
                    }}
                  >
                    <img
                      src={img2}
                      alt="s"
                      style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "84px",
                      }}
                    />
                    <Typography
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "27px",
                        fontWeight: 600,
                      }}
                    >
                      Pots
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "137px",
                      cursor: "pointer",
                      width: "300px",
                      position: "absolute",
                      bottom: "10px",
                      textAlign: "center",
                      overflow: "visible",
                      boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.10)",
                      borderRadius: "30px",
                      ":hover": {
                        height: "264px",
                        background: "rgba(152, 195, 71, 0.20)",
                      },
                    }}
                  >
                    <img
                      src={img3}
                      alt="s"
                      style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "-18px",
                      }}
                    />
                    <Typography
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "27px",
                        fontWeight: 600,
                      }}
                    >
                      Combos
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} sx={{ position: "relative" }}>
              <Button sx={{ position: "absolute", bottom: "10px" }}>
                See all
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}></Grid>
      </Grid>
    </Grid>
  );
};

export default Categories;
