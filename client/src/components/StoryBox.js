import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function StoryBox({ generatedText }) {
  console.log(generatedText);
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "75vw" },
      }}
      noValidate
      autoComplete="off"
      textAlign={"center"}
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Story Generates Here"
          multiline
          value={generatedText}
          inputProps={{ style: { fontSize: "25px" } }}
        />
      </div>
    </Box>
  );
}
