import { Container, TextField, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';


export default function LoginForm() {
    return (
        <Container component='main' maxWidth='xs'>
            <Box
                style={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                {/* Box originally had the function below, waiting till we get that function set up */}
                {/* onSubmit={handleSubmit} */}
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign in
                    </Button>
                </Box>
            </Box>
        </Container>


    )
  }