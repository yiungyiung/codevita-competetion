import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 330,
  height: 73,
  padding: 7,
  border: "1px solid white",
  borderRadius: 30,
  backgroundColor: "transparent",
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(0px)",
    "&.Mui-checked": {
      transform: "translateX(178px)",
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
        fontSize: "18px",
        background: "transparent",
        textAlign: "center", // Center-align text
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
    width: 150,
    height: 70,
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
      fontSize: "18px",
      background: "transparent",
      textAlign: "center", // Center-align text
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
