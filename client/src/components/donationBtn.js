import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function DonateBtn() {
  return (
    <div align="center">
      <Button
        variant="text"
        component={Link}
        to="/donations"
        style={{
          textTransform: "none",
          color: "white",
          fontFamily: "Source Sans Pro",
          fontWeight: "bold",
          marginRight: 10,
          fontSize: 16,
        }}
      >
        Donate
      </Button>
    </div>
  );
}
