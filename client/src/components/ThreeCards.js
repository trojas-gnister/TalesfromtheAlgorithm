import {
  Paper,
  Container,
  Grid,
  Typography,
  Box
} from '@mui/material'

export default function ThreeCards() {
  return (
    <Container maxWidth={false} disableGutters
    sx={{ alignItems: 'center'}}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ height: '30vh', marginRight: 'auto', marginLeft: 'auto'}}
      >

        {/* Paper 1 -------------- */}

        <Grid item xs={4}>
        <Paper elevation={24}
            sx={{
                bgcolor: '#120043',
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 4,
                width: 300,
                height: 325,
                borderRadius: 10,
                opacity: 0.8,
                }}>
                  <Typography variant='h4'
                  sx={{
                    marginBottom: 2,
                    marginTop: 0,
                    fontWeight: 'bold'
                  }}>
                    AI Story Generation
                  </Typography>
                  <Box
                  sx={{
                    bgcolor: '#3EB489',
                    width: 100,
                    height: 5,
                    marginBottom: 2,
                  }}></Box>
                  <Typography variant='body1'>
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
                width: 300,
                height: 325,
                borderRadius: 10,
                opacity: 0.8,
                }}>
                  <Typography variant='h4'
                    sx={{
                      marginBottom: 2,
                      marginTop: 0,
                      fontWeight: 'bold'
                    }}>
                      Unleash your creativity.
                  </Typography>
                  <Box
                  sx={{
                    bgcolor: '#3EB489',
                    width: 100,
                    height: 5,
                    marginBottom: 2,
                  }}></Box>
                  <Typography variant='body1'>
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
                width: 300,
                height: 325,
                borderRadius: 10,
                opacity: 0.8,
                }}>
                  <Typography variant='h4'
                    sx={{
                      marginBottom: 2,
                      marginTop: 0,
                      fontWeight: 'bold'
                    }}>
                      Other things and stuff.
                  </Typography>
                  <Box
                  sx={{
                    bgcolor: '#3EB489',
                    width: 100,
                    height: 5,
                    marginBottom: 2,
                  }}></Box>
                  <Typography variant='body1'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
                  </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Container>

  )
}
