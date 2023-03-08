import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function StartButton() {
  return (
    <div align = 'center'> 
      <Button variant="outlined" component={Link} to="/Choices"
      sx={{
        textTransform: 'none',
        marginTop: 20,
        width: 200,
        height: 60,
      }}
      >Start Writing</Button>
    </div>
    
  );
}