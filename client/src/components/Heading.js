import { Box, Typography } from "@mui/material"
import { Container } from "@mui/system"

export default function Heading() {
  return (
    <div>
      {/* Title Container */}
      <Container maxWidth={false} disableGutters
      sx={{
        marginTop: 31,
        marginBottom: 1.5,
        alignItems: 'center'
      }}>

        {/* Title Slogan 1 */}
        <Typography align="center" color='#F2A2E8'
        sx={{
          fontWeight: 600,
          letterSpacing: 1,
          fontFamily: 'Eczar',
          fontSize: 55,
        }}
        >
          Enchant your imagination.
        </Typography>
      </Container>
      
        {/* Line Seperator */}
        {/* <Container
        sx={{
          width: 515,
          alignItems: 'center',
        }}> */}
          {/* <Box sx={{ bgcolor: '#7DF9FF', width: 470, height: 4}}></Box> */}
        {/* </Container> */}

      {/* Subtitle Container */}
      <Container
      sx={{
        marginTop: 2,
        width: 600,
        alignItems: 'center'
      }}>
        <Typography align="center" variant="body1"
        sx={{
          fontSize: 16,
          fontWeight: 'bold',
          letterSpacing: 0.75,

        }}
        >
        An AI writing partner to help you create the world you've always dreamed about ... or just mess around. Create an account to start today!

        </Typography>
      </Container>
    </div>


  )
}
