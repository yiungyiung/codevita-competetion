import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

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

export default function CustomizedSwitches() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: "auto" }} defaultChecked />}
        label=""
      />
    </FormGroup>
  );
}
