import * as React from 'react';
import Button from '@mui/material/Button';

export default function StartButton() {
  return (
    <div align = 'center'> 
      <Button variant="outlined"
      sx={{
        textTransform: 'none',
        marginTop: 20,
        width: 200,
        height: 60,
      }}
      >Start</Button>
    </div>
    
  );
}