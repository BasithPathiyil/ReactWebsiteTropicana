import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import FiveStarIcon from "../../assets/svgicons/FiveStarIcon";

import img1 from "../../assets/images/Young and beautiful woman in pink warm sweater, natural look, smiling, portrait on , isolated, long hair.png";
import img2 from "../../assets/images/167 1.png";
import img3 from "../../assets/images/b49b7ccf-a4e6-4bdc-999e-63b093a3ffa5 1.png";
const Testimonials = () => {
  return (
    <Grid item xs={12} md={12} marginTop={"20px"}>
      <Grid container>
        <div style={{ position: "relative" }}>
          <img
            src={img3}
            alt="sdss"
            style={{ position: "absolute", bottom: -70 }}
          />
        </div>
        <Grid item xs={12} md={12}>
          <Grid
            container
            padding={"10px 350px"}
            style={{ textAlign: "center" }}
          >
            <Grid item xs={12} md={12}>
              <Typography style={{ fontSize: "35px", fontWeight: 500 }}>
                Testimonials
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography style={{ fontSize: "18px" }}>
                A testimonial is an honest endorsement of your product or
                service that usually comes from a customer, colleague, or peer
                who has benefited from or experienced success as a result of the
                work you did for them.
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <FiveStarIcon />
            </Grid>
            <Grid item xs={12} md={12}>
              <img src={img1} alt="ss" style={{ borderRadius: "50px" }} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography>Luis lara</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={7}
              style={{ background: "#155E1E", padding: "60px 120px" }}
            >
              <Typography
                style={{ fontSize: "30px", fontWeight: 400, color: "white" }}
              >
                Discover the convenience of online shopping & the opportunity of{" "}
                <b>franchise ownership</b>.
              </Typography>
              <Button
                variant="contained"
                style={{
                  fontSize: "25px",
                  fontWeight: 500,
                  padding: "10px 75px",
                  textTransform: "none",
                  borderRadius: "50px",
                  color: "#155E1E",
                  backgroundColor: "rgba(255, 255, 255, 0.88)",
                  backdropFilter: "blur(10.5px)",
                  marginTop: "16px", // Adjust the spacing as needed
                }}
              >
                Enquire Now
              </Button>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={img2} alt="as" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Testimonials;
