import { Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Aglaonema from "../../assets/images/AGLAONEMA PINK 1.png";
import GoldenKingMarble from "../../assets/images/GOLDEN KING MARBLE 1.png";
import RadishMicroGreen from "../../assets/images/Radish microgreen seeds 1.png";
import SanserviaFernwood from "../../assets/images/Sansevieria Fernwood Mikado 1.png";

let products = [
  { id: "1", imageUrl: Aglaonema, name: "Aglaonema", price: "250" },
  {
    id: "2",
    imageUrl: GoldenKingMarble,
    name: "Golden King Marble",
    price: "340",
  },
  {
    id: "3",
    imageUrl: RadishMicroGreen,
    name: "Radish Micro Green",
    price: "250",
  },
  {
    id: "4",
    imageUrl: SanserviaFernwood,
    name: "Sanservia Fernwood",
    price: "250",
  },
];

const RecentProducts = ({ isMobile }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <Grid container>
      <Grid item xs={12} md={12} display={"flex"} justifyContent={"center"}>
        <Typography
          style={{
            color: "#000",
            fontFamily: "Ubuntu",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            padding: "40px 0px",
          }}
        >
          Our Recent Products
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{ padding: isMobile ? "0px 10px" : "0px 80px" }}
      >
        <Grid container spacing={5}>
          {products?.map((product) => (
            <Grid item xs={12} md={3} key={product.id}>
              <Card
                sx={{
                  p: "20px",
                  background:
                    hoveredCard === product.id
                      ? "rgba(152, 195, 71, 0.20)"
                      : "#F0F0F0",
                  borderRadius: "15px",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={product.imageUrl}
                  style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  alt="images"
                />

                {hoveredCard === product.id && (
                  <div
                    style={{
                      padding: "10px 16px",
                      //   position: "absolute",
                      //   bottom: 0,
                      width: "100%",
                    }}
                  >
                    <Typography style={{ fontSize: "21px", fontWeight: "500" }}>
                      {product.name}
                    </Typography>
                    <Typography>${product.price}</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        marginTop: "10px",
                        textTransform: "none",
                        background: "#5B9B3E",
                        borderRadius: "30px",
                        // backdropFilter: "blur(21px)",
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                )}
              </Card>
              <div
                style={{
                  padding: "10px 16px",
                  display: hoveredCard === product.id ? "none" : "block",
                }}
              >
                <Typography style={{ fontSize: "18px", fontWeight: "400" }}>
                  {product.name}
                </Typography>
                <Typography style={{ fontSize: "18px", fontWeight: "400" }}>
                  ${product.price}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecentProducts;
