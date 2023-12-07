import Image from 'next/image'
// import styles from './page.module.css'
import * as React from 'react';
import { Box, Button } from '@mui/material';

export default function Home() {
  return (
  
    <>
      <Box p={2}>
        <h1>
          This is our first nextJS application
        </h1>
        <Button variant="outlined">Try me!</Button>
      </Box>
    </>
  )
}
