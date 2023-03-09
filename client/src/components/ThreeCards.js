import {
  Paper,
  Container,
  Grid,
  Typography,
  Box
} from '@mui/material';

// icons
import BoltIcon from '@mui/icons-material/Bolt';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function ThreeCards() {
  return (
    <Container maxWidth={false} disableGutters
    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}
    >
      <Grid container spacing={{ xs: 2, md: 3, }} columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        height: '30vh',
        position: 'relative',
        top: '12vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }}>

        {/* Paper 1 -------------- */}

        <Grid item xs={4}>
        <Paper elevation={24}
            sx={{
                bgcolor: '#120043',
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 4,
                paddingRight: 4,
                width: 300,
                height: 325,
                borderRadius: 10,
                }}>
                  <AutoStoriesIcon sx={{ color: '#F2A2E8', mb: 2.5, mr: 1}} />   
                  <Typography variant='h5'
                  sx={{
                    marginBottom: 2,
                    marginTop: 0,
                    fontWeight: 'bold',
                    fontFamily: 'Eczar',
                    letterSpacing: 1.25,
                    color: '#F2A2E8',
                  }}>
                    AI Story Generation
                  </Typography>
                  <Box
                  sx={{
                    bgcolor: '#F2A2E8',
                    width: 60,
                    height: 5,
                    marginBottom: 2,
                  }}></Box>
                  <Typography variant='h6' fontWeight='bold'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
                  </Typography>
                </Paper>
        </Grid>

      {/* Paper 2 -------------- */}

      <Grid item xs={4}>
        <Paper elevation={24}
            sx={{
                bgcolor: '#120043',
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 4,
                paddingRight: 4,
                width: 300,
                height: 325,
                borderRadius: 10,
                
                }}>

                  <BoltIcon sx={{ color: '#F2A2E8', mb: 2.5, mr: 1}} />   
                  <Typography variant='h5'
                    sx={{
                      marginBottom: 2,
                      marginTop: 0,
                      fontWeight: 'bold',
                      fontFamily: 'Eczar',
                      letterSpacing: 1.25,
                      color: '#F2A2E8',
                    }}>
                      Unleash your creativity.
                  </Typography>
                  <Box
                  sx={{
                    bgcolor: '#F2A2E8',
                    width: 60,
                    height: 5,
                    marginBottom: 2,
                  }}></Box>
                  <Typography variant='h6' fontWeight='bold'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
                  </Typography>
          </Paper>
        </Grid>

      {/* Paper 3 -------------- */}

      <Grid item xs={4}>
        <Paper elevation={24}
            sx={{
                bgcolor: '#120043',
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 4,
                paddingRight: 4,
                width: 300,
                height: 325,
                borderRadius: 10,
                }}>
                  <WbIncandescentIcon sx={{ color: '#F2A2E8', mb: 2.5, mr: 1}} />   
                  <Typography variant='h5'
                    sx={{
                      marginBottom: 2,
                      marginTop: 0,
                      fontWeight: 'bold',
                      fontFamily: 'Eczar',
                      letterSpacing: 1.25,
                      color: '#F2A2E8',
                    }}>
                      Other things and stuff.
                  </Typography>
                  <Box
                  sx={{
                    bgcolor: '#F2A2E8',
                    width: 60,
                    height: 5,
                    marginBottom: 2,
                  }}></Box>
                  <Typography variant='h6' fontWeight='bold'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
                  </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Container>

  )
}
