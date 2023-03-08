import React from "react";
import { Container } from "@mui/material";
import Background from "../assets/darkest-background.png";
import SimpleAppBar from "../components/SimpleAppBar";
import StoryBox from "../components/StoryBox"

export default function Story() {
  return (
    <Container maxWidth={true} disableGutters>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "99vw",
          minHeight: "100vh",
        }}
      >
        <SimpleAppBar />
        <StoryBox />
      </div>
    </Container>
  );
}
