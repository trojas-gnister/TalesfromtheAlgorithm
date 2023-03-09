import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeopleRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/system";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={24}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#04043B",
          padding: 30,
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
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <Box
            component="form"
            onSubmit={handleFormSubmit}
            noValidate
            sx={{ mt: 1, maxWidth: "45vw" }}
          >
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
                autoFocus
                value={formState.nam}
                onChange={handleChange}
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
                }}
              >
                Already have an account? Login here.
              </Link>
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Signup;
