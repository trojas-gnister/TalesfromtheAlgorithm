import React from 'react';
import { Typography } from '@mui/material';
import Image from '../../assets/DALLE-background.png';
import { Container } from '@mui/system';

const Home = () => {
  return (
    <Container maxWidth={false} disableGutters>
          <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        minHeight: '230vh',
      }}
    >
      <Typography variant="h1">Home Page</Typography>
      <Typography variant="body1">
        This is the home page of your app!
      </Typography>
    </div>

    </Container>

  );
};

export default Home;
