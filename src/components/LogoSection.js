import React from "react";
import MainLogo from "../assets/images/mainlogo.png";
import shopLogo from "../assets/images/Harvestay logo 2 (1).png";

const LogoSection = ({ type }) => {
  return <img src={type === "shop" ? shopLogo : MainLogo} alt="troipicana" />;
};

export default LogoSection;
