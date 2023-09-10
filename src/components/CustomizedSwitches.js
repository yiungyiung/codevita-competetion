import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import IpProgram from "./internshipProg";
import IProgram from "./intern+train";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 500,
  height: 140,
  padding: 7,
  border: "1px solid white",
  borderRadius: 30,
  backgroundColor: "transparent",
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(0px)",
    "&.Mui-checked": {
      transform: "translateX(120%)",
      "& .MuiSwitch-thumb:before": {
        content: '"Cybersecurity Evangelist Live"',
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        fontSize: "25px",
        background: "transparent",
        textAlign: "center",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? "transparent" : "transparent",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#0066a1" : "#0066a1",
    width: 225,
    height: 136,
    borderRadius: 10,
    "&:before": {
      content: '"Data Science FastTrack"',
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      color: "#fff",
      fontSize: "25px",
      background: "transparent",
      textAlign: "center",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark" ? "transparent" : "transparent",
    borderRadius: 20 / 2,
  },
}));

function CustomizedSwitches() {
  const [switchState, setSwitchState] = useState(true); // Initialize the switch state

  const handleSwitchChange = () => {
    setSwitchState(!switchState); // Toggle the switch state
  };

  return (
    <div id="PROG">
      <FormGroup>
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ m: "auto" }}
              checked={switchState}
              onChange={handleSwitchChange}
            />
          }
          label=""
        />
      </FormGroup>{" "}
      {/* Render your files here based on switchState */}{" "}
      <div>
        {" "}
        {switchState ? (
          <div>
            <IpProgram />
          </div>
        ) : (
          <div>
            <IProgram />
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
}

export default CustomizedSwitches;
