import { Container, Typography } from "@mui/material";

export default function PowerHeading() {
  return (
    <div>
      {/* Header - Powered by magic runes ...  */}
      <Container
        maxWidth={false}
        sx={{
          alignItems: "center",
          marginBottom: 30,
          position: "relative",
          top: "25vh",
        }}
      >
        <Typography
          align="center"
          variant="h3"
          sx={{
            color: "#F2A2E8",
            marginBottom: 1,
            fontWeight: "bold",
            fontFamily: "Eczar",
            letterSpacing: 0.8,
            fontSize: 40,
          }}
        >
          Powered by magic runes, ancient spells
        </Typography>
        <Typography
          align="center"
          variant="h3"
          sx={{
            fontFamily: "Eczar",
            fontWeight: "bold",
            letterSpacing: 0.8,
            fontSize: 40,
          }}
        >
          . . . and React.js
        </Typography>
      </Container>
    </div>
  );
}
