import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LoginIcon from "@mui/icons-material/Login";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/system";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ name: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      name: '',
      password: '',
    });
  };
  return (
    <Container component="main" maxWidth='md'
    sx={{ marginTop: 20,}}>
      <Paper
        elevation={24}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#04043B",
          paddingTop: 60,
          paddingBottom: 60,
          borderRadius: 25,
          border: 1,
          borderColor: "#3EB489",
        }}
      >
        <Avatar sx={{ marginBottom: 2, bgcolor: "#11153A" }}>
          <LoginIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontFamily: "eczar",
            fontWeight: "bold",
            letterSpacing: 0.8,
          }}
        >
          Well, look who it is.
        </Typography>
        {/* Box originally had the function below, waiting till we get that function set up */}
        {/* onSubmit={handleSubmit} */}
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
        <Box component="form" noValidate sx={{ mt: 1, maxWidth: "45vw" }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "#F2A2E8", mb: 2.5, mr: 1 }} />
            <TextField
              variant="filled"
              color="secondary"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={formState.name}
              onChange={handleChange}
              autoFocus
              sx={{
                fontFamily: "eczar",
                fontWeight: "bold",
                letterSpacing: 0.8,
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LockOutlinedIcon sx={{ color: "#F2A2E8", mb: 2.5, mr: 1 }} />
            <TextField
              variant="filled"
              color="secondary"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formState.password}
              onChange={handleChange}
              sx={{
                fontFamily: "eczar",
                fontWeight: "bold",
                letterSpacing: 0.8,
              }}
            />
          </Box>
          <Button
            type="submit"
            fullWidth={true}
            variant="outlined"
            sx={{
              mt: 5,
              mb: 2,
              height: 50,
              fontFamily: "eczar",
              fontWeight: "bold",
              letterSpacing: 0.8,
            }}
          >
            LOGIN
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              component={Link}
              to="/Signup"
              sx={{
                color: "#111111",
                textDecoration: "none",
              }}
            >
              Dont have an account? Sign up here.
            </Link>
          </Box>
        </Box>
            )}
      </Paper>
    </Container>
  );
}

export default Login;

