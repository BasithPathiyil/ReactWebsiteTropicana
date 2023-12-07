import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/images/mainbgImg2.png";
import RightArrowIcon from "../../assets/svgicons/RightArrowIcon";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();
  const handleClickShopNow = () => {
    navigate("/login");
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Grid
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        height: isMobile ? "500px" : "700px",
      }}
      container
    >
      <Grid xs={12} md={12} style={{ padding: isMobile ? "1px" : "24px 60px" }}>
        <Header />
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          style={{ fontSize: "35px", fontWeight: 400, padding: "0px 20px" }}
        >
          Now, anyone can farm
        </Typography>
        <Typography
          style={{ fontSize: "40px", fontWeight: 700, padding: "0px 20px" }}
        >
          Easy Plant Kits for everyone
        </Typography>
        <Button
          onClick={handleClickShopNow}
          variant="contained"
          style={{
            borderRadius: "50px",
            backgroundColor: "#155E1E",

            backdropFilter: "blur(10.5px)",
          }}
          endIcon={
            <RightArrowIcon
              style={{ backgroundColor: "#5B9B3E", borderRadius: "50px" }}
            />
          }
        >
          Shop Now
        </Button>
      </Grid>
    </Grid>
  );
};

export default MainContent;
