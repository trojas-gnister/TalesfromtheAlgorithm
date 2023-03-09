import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Heading() {
  return (
    <div>
      {/* Title Container */}
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          marginTop: "30vh",
          alignItems: "center",
        }}
      >
        {/* Title Slogan 1 */}
        <Typography
          align="center"
          color="#fff"
          sx={{
            fontWeight: 600,
            letterSpacing: 1,
            fontFamily: "Eczar",
            fontSize: 63,
          }}
        >
          Enchant your Imagination.
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
