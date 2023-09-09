import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 335,
  height: 75,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(0px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(178px)",
      "& .MuiSwitch-thumb:before": {
        content: '"1"', // Change content to "1"
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        color: "#fff",
        fontSize: "24px", // Adjust font size as needed
        background: "transparent",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 150,
    height: 70,
    borderRadius: 10,
    "&:before": {
      content: '"2"', // Change content to "2"
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      color: "#fff",
      fontSize: "24px", // Adjust font size as needed
      background: "transparent",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
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
