import React from 'react';

// MUI Components
import { Container } from '@mui/system';

// Background Images
import topBackground from '../assets/DARK-top-background.png';
import bottomBackground from '../assets/DARK-bottom-background.png'

// Custom Components
import Heading from '../components/Heading'
import DetailedAppBar from '../components/DetailedAppBar'
import StartButton from '../components/StartButton'
import ThreeCards from '../components/ThreeCards';
import DonateBtn from '../components/donationBtn';
import PowerHeader from '../components/PowerHeader';


export default function Home() {
  return (
  <div
  sx={{ colorScheme: 'dark'}}>
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
        <PowerHeader />
        <ThreeCards />

      </div>
    </Container>

  </div>



  );
};

