import {
  Paper,
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';

// icons
import BoltIcon from '@mui/icons-material/Bolt';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AnimateIn from '../components/AnimateIn'
export default function ThreeCards() {
  return (
    <Container maxWidth={false} disableGutters sx={{ display: 'flex', justifyContent: 'center' }}>
    <AnimateIn>
      <Grid
        container spacing={10}
        columns={{ xs: 3, sm: 6, md: 8, lg: 12 }}
        sx={{
          height: "30vh",
          marginRight: "auto",
          marginLeft: "auto",
          position: "relative",
          top: '10vh',
          justifyContent: 'center',
        }}>

        {/* Paper 1 -------------- */}

        <Grid item xs={4}>
          <Paper
            elevation={24}
            sx={{
                bgcolor: '#120043',
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 4,
                paddingRight: 4,
                width: 400,
                height: 425,
                borderRadius: 10,
                }}>
                  <AutoStoriesIcon sx={{ width: 50, height: 50, color: '#F2A2E8', mb: 2.5, mr: 1}} />   
                  <Typography variant='h4'
                  sx={{
                    marginBottom: 2,
                    marginTop: 0,
                    fontWeight: 'bold',
                    fontFamily: 'Eczar',
                    letterSpacing: 1.25,
                    color: '#F2A2E8',
                  }}>
                    Instant A.I. Story Generation
                  </Typography>
                  <Box
                  sx={{
                    bgcolor: '#F2A2E8',
                    width: 60,
                    height: 5,
                    marginBottom: 2,
                  }}></Box>
                  <Typography variant='h5' fontWeight='bold'>
                  Generate entire stories with ease. 
                  ust tell the AI what you want to write about.
                  Don't like what your reading? Go back and try again!
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
                width: 400,
                height: 425,
                borderRadius: 10,
                }}>
                  <BoltIcon sx={{ width: 50, height: 50, color: '#F2A2E8', mb: 2.5, mr: 1}} />   
                  <Typography variant='h4'
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
                  <Typography variant='h5' fontWeight='bold'>
                  Write a story about whatever you want.
                  Combine completely random story elements.
                  DreamAI can handle it.
                  </Typography>
          </Paper>
        </Grid>

        {/* Paper 3 -------------- */}

        <Grid item xs={4}>
          <Paper
            elevation={24}
            sx={{
              bgcolor: "#120043",
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 4,
              paddingRight: 4,
              width: 400,
              height: 425,
              borderRadius: 10,
              opacity: 0.9,
            }}
          >
            <WbIncandescentIcon sx={{ width: 50, height: 50, color: '#F2A2E8', mb: 2.5, mr: 1}} />   
            <Typography
              variant="h4"
              sx={{
                marginBottom: 2,
                marginTop: 0,
                fontWeight: "bold",
                fontFamily: "Eczar",
                letterSpacing: 1.25,
                color: '#F2A2E8'
              }}
            >
              Surprise yourself, every time.
            </Typography>
            <Box
              sx={{
                bgcolor: "#F2A2E8",
                width: 60,
                height: 5,
                marginBottom: 2,
              }}
            ></Box>
            <Typography variant="h5" fontWeight="bold">
              No two stories will be the same. Our future updates will
              include an interactive system to change the story at any point.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      </AnimateIn>
    </Container>
  );
}