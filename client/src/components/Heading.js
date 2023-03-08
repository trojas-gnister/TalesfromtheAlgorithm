import { Box, Typography } from "@mui/material"
import { Container } from "@mui/system"

export default function Heading() {
  return (
    <div>
      {/* Title Container */}
      <Container maxWidth={false} disableGutters
      sx={{
        marginTop: 10,
        marginBottom: 1.5,
        alignItems: 'center'
      }}>
        <Typography align="center" variant="h2" color='#F2A2E8'
        sx={{
          fontWeight: 'bold',
        }}
        >
          Upgrade your Imagination.
        </Typography>
      </Container>

        {/* Line Seperator */}
        <Container
        sx={{
          width: 515,
          alignItems: 'center',
        }}>
          <Box sx={{ bgcolor: '#7DF9FF', width: 470, height: 4}}></Box>
        </Container>

      {/* Subtitle Container */}
      <Container
      sx={{
        marginTop: 2,
        width: 500,
        alignItems: 'center'
      }}>
        <Typography align="center" variant="body1">
        Revolutionize storytelling with the power of 
        artificial intelligence. Create your own unique narratives, thrilling adventures, heartwarming romances, 
        or thought-provoking mysteries.
        </Typography>
      </Container>
    </div>


  )
}
