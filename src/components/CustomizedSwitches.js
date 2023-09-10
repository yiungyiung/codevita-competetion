import React, { useState } from "react";
import Button from "@mui/material/Button";
import IpProgram from "./internshipProg";
import IProgram from "./intern+train";

function CustomizedSwitches() {
  const [switchState, setSwitchState] = useState(true); // Initialize the switch state

  const handleSwitchChange = () => {
    setSwitchState(!switchState); // Toggle the switch state
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "5rem", marginBottom: "40px" }}
    >
      <Button
        variant="contained"
        disabled={!switchState}
        onClick={() => setSwitchState(false)}
        size="large"
        sx={{
          borderRadius: "2rem 0 0 2rem",
          backgroundColor: !switchState ? "#0066A1" :"#757575" ,
        }} // Add this line
      >
        <p className=" text-4xl text-white">Data Science FastTrack</p>
      </Button>
      <Button
        variant="contained"
        disabled={switchState}
        onClick={() => setSwitchState(true)}
        size="large"
        sx={{
          borderRadius: "0 2rem 2rem 0",
          backgroundColor: switchState ? "#0066A1" : "#757575",
        }} // Add this line
      >
        <p className=" text-4xl text-white">Cybersecurity Evangelist Live</p>
      </Button>
      <div>
        {switchState ? (
          <div style={{ marginTop: "3rem" }}>
            <IProgram />
          </div>
        ) : (
          <div style={{ marginTop: "3rem" }}>
            <IpProgram />
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomizedSwitches;
