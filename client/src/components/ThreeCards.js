import { Paper, Container } from '@mui/material'

export default function ThreeCards() {
  return (
    <Container maxWidth={false} disableGutters
    sx={{ alignItems: 'center'}}
    >
    <Paper elevation={24}
            sx={{
                bgcolor: '#11153A',
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 10,
                width: '50%',
                marginTop: 5,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 10,
                }}></Paper>

    </Container>

  )
}
