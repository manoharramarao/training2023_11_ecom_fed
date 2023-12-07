import { Box, Button, Checkbox, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                <TextField fullWidth variant="outlined" label="Email" type="email"></TextField>
              </Grid>
              <Box pb={1}></Box>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField fullWidth variant="outlined" label="Password" type="password"></TextField>
              </Grid>
              <Box pb={2}></Box>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Checkbox />I agree to the terms and conditions!
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Button variant="contained" disableElevation fullWidth size="large">
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
