import { Fab } from "@mui/material";
import React from "react";
import { WhatsApp as WA } from "@mui/icons-material";

function WhatsApp() {
  return (
    <Fab
      color="success"
      style={{
        position: "sticky",
        bottom: 40,
        left: 10,
        zIndex: 100
      }}
    >
      <WA />
    </Fab>
  );
}

export default WhatsApp;
