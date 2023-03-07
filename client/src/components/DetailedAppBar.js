import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function DetailedAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
        <Icon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            >
                <img src={Logo} height={25} width={25} alt='Dream AI logo'/>
            </Icon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#fff">
            DreamAI
          </Typography>
          <Button component={Link} to="/login"
          style={{
            textTransform: 'none',
            color: 'white',
          }}
          >Login</Button>
          <Button component={Link} to="/signup"
          style={{
            textTransform: 'none',
            color: 'white',
          }}
          >Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}