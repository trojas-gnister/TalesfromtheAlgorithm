import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '75vw' },
      }}
      noValidate
      autoComplete="off"
      textAlign={'center'}
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Story Generates Here"
          multiline
        />
      </div>
      <Button variant="outlined" component={Link} to="/Choices"
      sx={{
        textTransform: 'none',
        marginTop: 20,
        width: 200,
        height: 60,
      }}
      >Choose Different Story Parameters</Button>
    </Box>
  )}