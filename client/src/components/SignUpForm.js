import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

export default function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { username, password },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
    

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
                    border: 1,
                    borderColor: '#3EB489',

                }}
            >
            <Avatar sx={{ marginBottom: 2, bgcolor: '#11153A'}}>
            <EmojiPeopleRoundedIcon />
            </Avatar>
                <Typography component='h1' variant='h5'
                sx={{
                    fontFamily: 'eczar',
                    fontWeight: 'bold',
                    letterSpacing: 0.8,
                }}>
                    Create your account.
                </Typography>
                {/* Box originally had the function below, waiting till we get that function set up */}
                {/* onSubmit={handleSubmit} */}
                <Box component="form" noValidate sx={{ mt: 1, maxWidth: '45vw' }}>
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        sx={{
                            fontFamily: 'eczar',
                            fontWeight: 'bold',
                            letterSpacing: 0.8,
                        }}/>
                    </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LockOutlinedIcon sx={{ color: '#F2A2E8', mb: 2.5, mr: 1,}} />   
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        SIGN UP
                    </Button>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 1
                        }}>
                        <Link component={Link} to="/Login"
                        sx={{
                            color: '#fff',
                            textDecoration: 'none',
                        }}>
                        Already have an account? Login here.
                    </Link>
                    </Box>
                </Box>
            </Paper>
        </Container>


    )
  }
