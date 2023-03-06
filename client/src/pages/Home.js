import React from 'react';
import Heading from '../components/Heading'
import Image from '../assets/DALLE-background.png';
import { Container } from '@mui/system';
import AppBar from '../components/AppBar'
import StartButton from '../components/StartButton'

const Home = () => {
  return (
    <Container maxWidth={false} disableGutters>
          <div
      style={{
        backgroundImage:`url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '99vw',
        minHeight: '230vh',
      }}
    >
      <AppBar />
      <Heading />
      <StartButton />
    </div>

    </Container>

  );
};

export default Home;