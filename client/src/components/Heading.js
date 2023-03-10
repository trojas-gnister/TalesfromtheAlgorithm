import { Typography } from "@mui/material";
import { Container } from "@mui/system";

import React, { useRef, useEffect, useState } from 'react';


export default function Heading() {

  // Code for transition on page load ;)))
  const [onScreen, setOnScreen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setOnScreen(true);
  }, []);

  return (
    <div>
      {/* Title Container */}
      <Container
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        transform: onScreen ? 'none' : 'translate(0, 2rem)',
        transition: '600ms ease-in-out',
      }}

        maxWidth={false}
        disableGutters
        sx={{
          marginTop: "30vh",
          alignItems: "center",
        }}
      >
        {/* Title Slogan 1 */}
        <Typography
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                transform: onScreen ? 'none' : 'translate(0, 1rem)',
                transition: '600ms ease-in-out',
              }}
          align="center"
          color="#fff"
          sx={{
            fontWeight: 600,
            letterSpacing: 1,
            fontFamily: "Eczar",
            fontSize: 63,
          }}
        >
          Enhance your Imagination.
        </Typography>
      </Container>

      {/* Subtitle Container */}
      <Container
        sx={{
          width: 600,
          alignItems: "center",
        }}
      >
        <Typography
              ref={ref}
              style={{
                opacity: onScreen ? 1 : 0,
                transform: onScreen ? 'none' : 'translate(0, 1rem)',
                transition: '600ms ease-in-out',
              }}
          align="center"
          variant="body1"
          color="#F2A2E8"
          sx={{
            fontSize: 16,
            fontWeight: "bold",
            letterSpacing: 0.75,
          }}
        >
          An AI writing partner to help you create the world you've always
          dreamed about . . . or just to have fun. Create an account to start
          today!
        </Typography>
      </Container>
    </div>
  );
}
