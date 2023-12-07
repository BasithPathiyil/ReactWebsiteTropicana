import React from "react";
import MainContent from "./MainContent";
import { Grid } from "@mui/material";
import RecentProducts from "./RecentProducts";
import CompanyDescription from "./CompanyDescription";
import Services from "./Services";
import Footer from "../../components/Footer";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <MainContent />
      </Grid>
      <Grid item xs={12}>
        <RecentProducts />
      </Grid>
      <CompanyDescription />
      <Services />
      <Statistics />
      <Testimonials />
      <Footer />
    </Grid>
  );
};

export default HomePage;
