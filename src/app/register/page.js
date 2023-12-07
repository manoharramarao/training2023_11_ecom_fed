'use client'

import { Box, Button, Checkbox, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";

const RegisterPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errPass, setErrPass] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if (password === null || password === undefined || password === "") {
      setErrPass("Password is required");
    } else {
      setErrPass("");
    }
  },[password])

  function register() {
    console.log(`Need to call backend API to register with values ${email} and ${password}`);
  }

  return (
    <>
      <Container style={{ marginTop: "5rem" }}>
        <Box p={2} sx={{ borderRadius: 2 }}>
          <Grid container spacing={2} display={"flex"} flexDirection={"column"} alignContent={"center"}>
            <Grid sx={{ background: "#E5EEFF", borderRadius: 2 }} p={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="h3">Get Started!</Typography>
              </Grid>
              <Box pb={4}></Box>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField fullWidth variant="outlined" label="Email" type="email" onChange={handleEmailChange}></TextField>
              </Grid>
              <Box pb={1}></Box>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField fullWidth variant="outlined" label="Password" type="password" onChange={handlePasswordChange}
                helperText={errPass}></TextField>
              </Grid>
              <Box pb={2}></Box>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Checkbox />I agree to the terms and conditions!
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Button variant="contained" disableElevation fullWidth size="large" onClick={register}>
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default RegisterPage;
