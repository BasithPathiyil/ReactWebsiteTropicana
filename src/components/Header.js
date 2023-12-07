import React, { useEffect, useState } from "react";
import { Grid, Hidden, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoSection from "./LogoSection";
import HeaderRoutes from "./HeaderRoutes";
import IconSection from "./IconSection";

const Header = ({ type }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
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
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor:
          type === "shop" ? "rgba(255, 255, 255, 0.85)" : "#ECECEC",
        borderRadius: isMobile ? "1px" : "50px",
        height: "94px",
      }}
    >
      <Grid
        item
        xs={3}
        sm={3}
        display={"flex"}
        justifyContent={isMobile ? "" : "center"}
        alignItems={"center"}
      >
        <LogoSection type={type} />
      </Grid>
      <Hidden mdUp>
        <Grid
          item
          xs={9}
          sm={9}
          display={"flex"}
          justifyContent={"right"}
          alignItems={"center"}
        >
          <IconButton onClick={handleMenuToggle}>
            <MenuIcon />
          </IconButton>
        </Grid>
      </Hidden>
      <Hidden mdDown>
        <Grid
          item
          xs={6}
          sm={6}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{ padding: "0px 25px" }}
        >
          <HeaderRoutes />
        </Grid>
      </Hidden>
      <Hidden mdDown>
        <Grid
          item
          xs={3}
          sm={3}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <IconSection />
        </Grid>
      </Hidden>
      <Drawer anchor="right" open={isMenuOpen} onClose={handleMenuToggle}>
        {/* Content for the mobile menu */}
        <HeaderRoutes />
        <IconSection />
      </Drawer>
    </Grid>
  );
};

export default Header;
