import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import { Grid } from "@mui/material";
import RecentProducts from "./RecentProducts";
import CompanyDescription from "./CompanyDescription";
import Services from "./Services";
import Footer from "../../components/Footer";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";
import Categories from "./Categories";

const HomePage = () => {
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
    <Grid container>
      <Grid item xs={12}>
        <MainContent />
      </Grid>
      <Grid item xs={12}>
        <RecentProducts isMobile={isMobile} />
      </Grid>
      <CompanyDescription isMobile={isMobile} />
      <Services isMobile={isMobile} />
      <Statistics isMobile={isMobile} />
      <Testimonials isMobile={isMobile} />
      <Categories isMobile={isMobile} />
      <Footer />
    </Grid>
  );
};

export default HomePage;
