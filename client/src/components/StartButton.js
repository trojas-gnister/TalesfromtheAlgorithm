import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import SouthIcon from "@mui/icons-material/South";
import CreateIcon from "@mui/icons-material/Create";
import { useRef, useEffect, useState } from 'react';

export default function StartButton() {

  // Code for transition on page load ;)))
  const [onScreen, setOnScreen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setOnScreen(true);
  }, []);
  return (
    <Container maxWidth={false} align="center" sx={{ marginTop: 6 }}>
      <Button
        variant="outlined"
        href="#about"
        endIcon={<SouthIcon />}
        sx={{
          opacity: onScreen ? 1 : 0,
          transform: onScreen ? 'none' : 'translate(0, 2rem)',
          transition: '1000ms ease-in-out',
          textTransform: "none",
          width: 250,
          height: 75,
          fontSize: 16,
          fontWeight: "bold",
          letterSpacing: 0.8,
          marginRight: 2,
          color: "#fff",
          bgColor: "#fff",
        }}
      >
        LEARN MORE
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="/Choices"
        endIcon={<CreateIcon />}
        sx={{
          opacity: onScreen ? 1 : 0,
          transform: onScreen ? 'none' : 'translate(0, 2rem)',
          transition: '1000ms ease-in-out',
          textTransform: "none",
          width: 275,
          height: 75,
          fontSize: 16,
          fontWeight: "bold",
          letterSpacing: 0.8,
          marginRight: 2,
          color: "#04043B",
          bgColor: "#F2A2E8",
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        START YOUR STORY
      </Button>
    </Container>
  );
}
