import { Button } from "@mui/material";
import React from "react";

export const StyledBasicButton = ({
  children,
  backgroundColor,
  ...otherProps
}) => {
  return (
    <Button
      variant="contained"
      style={{
        padding: "12px 100px",
        textTransform: "none",
        borderRadius: "50px",
        backgroundColor: backgroundColor || "#5B9B3E",
        backdropFilter: "blur(10.5px)",
        marginTop: "16px", // Adjust the spacing as needed
      }}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
