import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import SouthIcon from '@mui/icons-material/South';
import CreateIcon from '@mui/icons-material/Create';


export default function StartButton() {
  return (
    <Container maxWidth={false} align = 'center'
    sx={{ marginTop: 5, }}>
          <Button variant="outlined" href='#about' endIcon={<SouthIcon />}            
            sx={{
              textTransform: 'none',
              width: 250,
              height: 75,
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 0.8,
              marginRight: 2,
              }}>
              LEARN MORE
          </Button>
          <Button variant="contained" component={Link} to="/Choices" endIcon={<CreateIcon />}
            sx={{
              textTransform: 'none',
              width: 275,
              height: 75,
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 0.8,
              marginRight: 2,
              color: '#04043B',
              bgColor: '#F2A2E8',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
              START YOUR STORY
          </Button>
    </Container>
    
  );
}