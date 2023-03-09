import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Logo from '../assets/pink-logo.png';

export default function SimpleAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', paddingTop: 5}}>
        <Toolbar>

          {/* Logo */}
          <Icon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            >
                <img src={Logo} height={25} width={25} alt='Dream AI logo'/>
            </Icon>
            <Typography variant="h5" component="div"
          sx={{
            flexGrow: 1, 
            color: "#fff",
            fontFamily: 'Eczar',
            fontWeight: 'bold'
            }}>
            DreamAI
          </Typography>


        </Toolbar>
      </AppBar>
    </Box>
  );
}