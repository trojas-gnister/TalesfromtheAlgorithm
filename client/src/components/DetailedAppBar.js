import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { Link } from 'react-router-dom';
import Logo from '../assets/pink-logo.png';

export default function DetailedAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', paddingTop: 5,}}>
        <Toolbar>

          {/* Logo */}
        <Icon
            sx={{ display: { xs: 'flex', md: 'flex'}}}
            >
                <img src={Logo} height={20} width={20} alt='Dream AI logo'/> m
            </Icon>
          <Typography variant="h5" component="div"
          sx={{
            flexGrow: 1, 
            color: "#fff",
            fontFamily: 'Eczar',
            fontWeight: 'bold'}}>
            DreamAI
          </Typography>

          {/* Buttons */}
          <Button variant='text' component={Link} to="/login"
          style={{
            textTransform: 'none',
            color: 'white',
            fontFamily: 'Source Sans Pro',
            marginRight: 10,
            fontSize: 18,
          }}
          >Login</Button>
          <Button variant='text' component={Link} to="/signup"
          style={{
            textTransform: 'none',
            color: 'white',
            fontFamily: 'Source Sans Pro',
            fontSize: 18,
          }}
          >Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}