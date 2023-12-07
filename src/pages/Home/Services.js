import React, { useState } from "react";

import img1 from "../../assets/images/Top view gardening tools and plants.png";
import img2 from "../../assets/images/Rectangle 21.png";
import img3 from "../../assets/images/Rectangle 22.png";
import img4 from "../../assets/images/Rectangle 23.png";
import { Card, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Services = () => {
  let products = [
    {
      id: "1",
      imageUrl: img1,
      name: "Easy Plant Kits",
      description:
        "A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.",
    },
    {
      id: "2",
      imageUrl: img2,
      name: "Landscaping",
      description:
        "A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.",
    },
    {
      id: "3",
      imageUrl: img4,
      name: "Plant Gift",
      description:
        "A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.",
    },
    {
      id: "4",
      imageUrl: img4,
      name: "Balcony Gardens",
      description:
        "A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.",
    },
  ];
  const [cardIndex, setCardIndex] = useState(null);
  const handleMouseEnter = (id) => {
    setCardIndex(id);
  };
  const handleMouseLeave = () => {
    setCardIndex(null);
  };
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
        <Typography style={{ fontWeight: 500, fontSize: "35px" }}>
          Our Services
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <div
          style={{ display: "flex", marginLeft: "80px", overflowX: "scroll" }}
        >
          {products.map((product) => (
            <Grid
              key={product.id}
              style={{
                width: "450px",
              }}
            >
              <Card
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  marginRight: "41px",
                  position: "relative",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    height: "450px",
                    width: "100%",
                    background:
                      cardIndex === product.id
                        ? "linear-gradient(180deg, rgba(91, 155, 62, 0.80) 0%, rgba(21, 94, 30, 0.80) 100%)"
                        : "linear-gradient(to top, #5B9B3E, rgba(171, 211, 115, 0.10))",
                    position: "absolute",
                    // opacity: "0.7",
                    zIndex: 1,
                  }}
                >
                  <Typography
                    style={{
                      padding: "20px",
                      color: "#fff",
                      fontSize: "30px",
                      position: "absolute",
                      bottom: cardIndex === product.id ? null : 0,
                      fontWeight: 500,
                      zIndex: 2,
                    }}
                  >
                    {product.name}
                  </Typography>
                  {cardIndex === product.id && (
                    <>
                      <Typography
                        style={{
                          position: "absolute",
                          color: "white",
                          fontSize: "19px",
                          fontWeight: 400,
                          padding: "20px",
                          top: "100px",
                        }}
                      >
                        {product.description}
                      </Typography>
                      <Typography
                        component={Link}
                        style={{
                          position: "absolute",
                          color: "white",
                          fontSize: "18px",
                          fontWeight: 400,
                          padding: "20px",
                          bottom: "0px",
                          right: "0px",
                        }}
                      >
                        View More
                      </Typography>
                    </>
                  )}
                </div>
                <img
                  src={product.imageUrl}
                  style={{ height: "450px", objectFit: "cover" }}
                  alt="images"
                />
                {/* <div
                  style={{
                    height: "450px",
                    backgroundImage: `linear-gradient(1deg, #5B9B3E 43.62%, rgba(171, 211, 115, 0.10) 83.52%)), url(${product.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  
                </div> */}
              </Card>
            </Grid>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default Services;
