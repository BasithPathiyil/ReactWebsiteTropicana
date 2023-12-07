import { Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { StyledBasicButton } from "../../components/StyledBasicButton";

const OTPForm = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (newValue) => {
    setOtp(newValue);
  };
  return (
    <Grid container>
      <Grid item xs={12} md={2}></Grid>
      <Grid item xs={12} md={8} display={"flex"} flexDirection={"column"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              style={{
                color: "#000",
                fontFamily: "Ubuntu",
                fontSize: "55px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "70px", // Note: use string for non-px values
                textTransform: "capitalize",
              }}
            >
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Enter the code we sent through your phone numbe
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <OtpInput
              onChange={handleOtpChange}
              value={otp}
              numInputs={4}
              shouldAutoFocus
              inputType="number"
              inputStyle={{
                width: "40px",
                height: "40px",
                fontSize: "24px",
                margin: "0 5px",
                borderRadius: "8px",
                border: "2px solid blue",
                backgroundColor: "#E0E0E0",
                color: "#333",
              }}
              containerStyle={{
                height: "55px",
                borderColor: "blue !Important",
              }}
              renderInput={(props) => <input {...props} />}
            />
          </Grid>
          <Grid item xs={12} display={"flex"}>
            <Typography>Didn’t Received the code</Typography>
            <Typography style={{ color: "blue", marginLeft: "4px" }}>
              Resent
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledBasicButton>Sign In</StyledBasicButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={2}></Grid>
    </Grid>
  );
};

export default OTPForm;
