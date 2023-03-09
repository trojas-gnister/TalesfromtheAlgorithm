import React from 'react';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext.js';
import { useForm} from "../utils/hooks";
import { useMutation } from "@apollo/client";

import { gql } from "graphql-tag"
import { useNavigate } from 'react-router-dom';

// MUI
import { Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';

const REGISTER_USER = gql`
        mutation Mutation(
          $registerInput: RegisterInput!
        ) {
          registerUser(registerInput: $registerInput) {
            email
            username
            token
        }
      }
`

function Register(props) {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  function registerUserCallback() {
    console.log("registerUserCallback");
  }

  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [ registerUser, { loading } ] = useMutation(REGISTER_USER, {
    update(proxy, { data: { registerUser: userData } }) {
      context.login(userData);
      navigate('/');
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { registerInput: values }
  });
}


export default function SignUp() {
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
          <EmojiPeopleRoundedIcon />
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
          Create your account.
        </Typography>
        {/* Box originally had the function below, waiting till we get that function set up */}
        {/* onSubmit={handleSubmit} */}
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
              onChange={onChange} 
              autoComplete="username"
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
              name="email"
              label="Email"
              type="email"
              id="email"
              onChange={onChange}
              autoComplete="current-password"
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
              onChange={onChange}
              autoComplete="current-password"
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
              name="confirmPassword"
              label="Confirm password"
              type="confirmPassword"
              id="confirmPassword"
              onChange={onChange}
              autoComplete="current-password"
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
            SIGN UP
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 1,
            }}
          >
            <Link
              component={Link}
              to="/Login"
              sx={{
                color: "#fff",
                textDecoration: "none",
              }}>
              Already have an account? Login here.
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

