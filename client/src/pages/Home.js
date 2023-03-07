import React from 'react';
import Heading from '../components/Heading'
import Background from '../assets/darkest-background.png';
import { Container } from '@mui/system';
import AppBar from '../components/AppBar'
import StartButton from '../components/StartButton'
import ThreeCards from '../components/ThreeCards';

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <div
        style={
          {
            backgroundImage:`url(${Background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '99vw',
            minHeight: '230vh',
          }
        }
      >
        <AppBar />
        <Heading />
        <StartButton />
        <ThreeCards />
      </div>
    </Container>

  );
};

