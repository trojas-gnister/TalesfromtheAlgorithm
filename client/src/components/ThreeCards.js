import { Grid, Paper, Typography, Container } from '@mui/material'

export default function ThreeCards() {
  return (
    <Container maxWidth={false} disableGutters
    sx={{ alignItems: 'center'}}
    >
        <Grid container spacing={3}>

            {/* First */}
        <Grid item xs={2}>
            <Paper elevation={24} sx={{ padding: 2, backgroundColor: '#11153A'}}>
                <Typography variant='h4'>
                    Title Text
                </Typography>
                <Typography variant='body1'>
                    Body text blah blah blah blah blah blah blah blah
                </Typography>
            </Paper>
        </Grid>

        {/* Second */}
        <Grid item xs={2}>
            <Paper elevation={24}>
                <Typography variant='h4'>
                    Title Text
                </Typography>
                <Typography variant='body1'>
                    Body text blah blah blah blah blah blah blah blah
                </Typography>
            </Paper>
        </Grid>

        {/* Third */}
        <Grid item xs={2}>
            <Paper elevation={24}>
                <Typography variant='h4'>
                    Title Text
                </Typography>
                <Typography variant='body1'>
                    Body text blah blah blah blah blah blah blah blah
                </Typography>
            </Paper>
        </Grid>
    </Grid>
    </Container>

  )
}
