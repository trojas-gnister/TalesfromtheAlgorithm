import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function DonateBtn() {
  return (
    <div align = 'center'> 
      <Button variant="outlined" component={Link} to="/donations"
      sx={{
        textTransform: 'none',
        marginTop: 20,
        width: 200,
        height: 60,
      }}
      >Donate!</Button>
    </div>
    
  );
}