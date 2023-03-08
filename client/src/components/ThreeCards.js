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
      <Grid container spacing={0.5}
      sx={{ height: '30vh', marginTop: 40}}
      >
        <Paper elevation={24}
            sx={{
                bgcolor: '#11153A',
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 10,
                width: '23%',
                marginTop: 5,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 10,
                border: 1,
                borderColor: '#7DF9FF',
                }}>
                  <Typography variant='h5'
                  sx={{
                    marginBottom: 2,
                  }}>
                    Weiner
                  </Typography>
                  <Box
                  sx={{
                    position: 'left',
                    width: 100,
                    height: 5,
                    bgcolor: '#7DF9FF',
                  }}>

                  </Box>



                  <Typography variant='body1'>
                    Body text
                  </Typography>


                </Paper>
      <Paper elevation={24}
            sx={{
                bgcolor: '#11153A',
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 10,
                width: '23%',
                marginTop: 5,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 10,
                border: 1,
                borderColor: '#7DF9FF'
                }}></Paper>
      <Paper elevation={24}
            sx={{
                bgcolor: '#11153A',
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 10,
                width: '23%',
                marginTop: 5,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 10,
                border: 1,
                borderColor: '#7DF9FF'
                }}></Paper>

      </Grid>
    </Container>

  )
}
