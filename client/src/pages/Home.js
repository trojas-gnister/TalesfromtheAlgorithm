import React from 'react';
import Heading from '../components/Heading'
import topBackground from '../assets/DARK-top-background.png';
import bottomBackground from '../assets/DARK-bottom-background.png'
import { Container } from '@mui/system';
import DetailedAppBar from '../components/DetailedAppBar'
import StartButton from '../components/StartButton'
import ThreeCards from '../components/ThreeCards';
import DonateBtn from '../components/donationBtn';

export default function Home() {
  return (
  <div>
        <Container maxWidth={false} disableGutters>
      <div
        style={
          {
            backgroundImage:`url(${topBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '99vw',
            height: '95vh',
          }
        }
      >
        <DetailedAppBar />
        <Heading />
        <StartButton />
        <DonateBtn />
      </div>
    </Container>

    <Container maxWidth={false} disableGutters>
      <div
        style={
          {
            backgroundColor: '#04043B',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '99vw',
            height: '95vh',
          }
        }
      >

      </div>
    </Container>

    <Container maxWidth={false} disableGutters>
      <div
        style={
          {
            backgroundImage:`url(${bottomBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '99vw',
            height: '95vh',
          }
        }
      >
        <ThreeCards />

      </div>
    </Container>

  </div>



  );
};

