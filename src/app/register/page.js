import { Box, Button, Checkbox, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const RegisterPage = () => {
  return (
    <>
      <Container style={{marginTop: "5rem", marginLeft: "30rem"}}>
        <Box pt={10}></Box>
        <Box>
          <Typography>Get Started!</Typography>
        </Box>
        <Box pt={2}></Box>
        <Box width={"600px"}>
          <TextField fullWidth variant='outlined' label="Email" type='email'></TextField>
        </Box>
        <Box pt={2}></Box>
        <Box>
          <TextField variant='outlined' label="password" type="password"></TextField>
        </Box>
        <Box pt={2}></Box>
        <Box>
          <Checkbox />I accept the terms of service and privacy policy
        </Box>
        <Box pt={4}></Box>
        <Box>
          <Button variant="contained">Sign Up</Button>
        </Box>
      </Container>
      
    </>
  )
}

export default RegisterPage