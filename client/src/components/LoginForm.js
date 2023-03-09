import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LoginIcon from '@mui/icons-material/Login';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';




export default function LoginForm() {

    return (
        <Container component='main' maxWidth='xs'>
            <Paper
            elevation={24}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#04043B',
                    padding: 30,
                    borderRadius: 25,
                    border: 11,
                    borderColor: '#3EB489'

                }}
            >
            <Avatar sx={{ marginBottom: 2, bgcolor: '#11153A'}}>
            <LoginIcon />
          </Avatar>
                <Typography component='h1' variant='h5'
                sx={{
                    fontFamily: 'eczar',
                    fontWeight: 'bold',
                    letterSpacing: 0.8,
                }}>
                    Well, look who it is.
                </Typography>
                {/* Box originally had the function below, waiting till we get that function set up */}
                {/* onSubmit={handleSubmit} */}
                <Box component="form" noValidate sx={{ mt: 1, width: '45vw' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: '#F2A2E8', mb: 2.5, mr: 1}} />   
                        <TextField
                        variant='filled'
                        color='secondary'
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        sx={{
                            fontFamily: 'eczar',
                            fontWeight: 'bold',
                            letterSpacing: 0.8,
                        }}/>
                    </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LockOutlinedIcon sx={{ color: '#F2A2E8', mb: 2.5, mr: 1}} />   
                    <TextField
                        variant='filled'
                        color='secondary'
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        sx={{
                            fontFamily: 'eczar',
                            fontWeight: 'bold',
                            letterSpacing: 0.8,
                        }}/>
                    </Box>
                    <Button
                        type="submit"
                        fullWidth={true}
                        variant="outlined"
                        sx={{
                            mt: 5,
                            mb: 2, 
                            height: 50,
                            fontFamily: 'eczar',
                            fontWeight: 'bold',
                            letterSpacing: 0.8,
                        }}>
                        LOGIN
                    </Button>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Link component={Link} to="/Signup"
                        sx={{
                            color: '#111111',
                            textDecoration: 'none',
                        }}>
                        Dont have an account? Sign up here.
                        </Link>
                    </Box>
                </Box>
            </Paper>
        </Container>


    )
  }