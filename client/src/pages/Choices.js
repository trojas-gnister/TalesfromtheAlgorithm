import React from "react";
import {
  Container,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Paper,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import Background from "../assets/darkest-background.png";
import DetailedAppBar from "../components/DetailedAppBar";

export default function Choices() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "230vh",
        justifyContent: "center",
      }}
    >
      <DetailedAppBar />

      {/* At some point, we should probably makes these components -- T */}

      {/* 1. Character Name */}
      <Paper
        elevation={24}
        sx={{
          bgcolor: "#11153A",
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 10,
          width: "50%",
          marginTop: 5,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 10,
        }}
      >
        <FormControl>
          <FormLabel
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
                }}></FormLabel>
                    <FormLabel
                    sx={{
                        fontSize: 18,
                        color: '#fff',
                        paddingLeft: 2,
                        marginBottom: 1,
                        borderLeft: 1,
                        borderColor: '#7DF9FF'}}>
                       What is your main character's name?
                    </FormLabel>
                    <TextField
                        variant='filled'
                        color='primary'
                        margin="normal"
                        fullWidth
                        id="character_name"
                        name="character_name"
                        autoFocus={true}
                        placeholder='ex. Aragorn'
                        required={true}
                    />
                </FormControl>
            </Paper>

      {/* 2. Genre */}
      <Paper
        elevation={24}
        sx={{
          bgcolor: "#11153A",
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 10,
          width: "50%",
          marginTop: 5,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 10,
        }}
      >
        <FormControl>
          <FormLabel
            sx={{
              fontSize: 18,
              color: "#fff",
              marginBottom: 1,
              paddingLeft: 2,
              borderLeft: 1,
              borderColor: "#7DF9FF",
            }}
          >
            What kind of story would you like to tell?
          </FormLabel>
          <RadioGroup
            aria-labelledby="genre-group-choices"
            name="genre-choices"
          >
            <FormControlLabel
              value="Fantasy"
              control={<Radio />}
              label="Fantasy"
            />
            <FormControlLabel
              value="Mystery"
              control={<Radio />}
              label="Mystery"
            />
            <FormControlLabel
              value="Horror"
              control={<Radio />}
              label="Horror"
            />
            <FormControlLabel
              value="Romance"
              control={<Radio />}
              label="Romance"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
      <Box textAlign="center">
        <Button
          variant="outlined"
          component={Link}
          to="/Story"
          sx={{
            textTransform: "none",
            marginTop: 20,
            width: 200,
            height: 60,
          }}
        >
          Generate
        </Button>
      </Box>

      {/* end */}
    </Container>
  );
}
