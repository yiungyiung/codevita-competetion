import React, { useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";
import { db } from "./firebase";
import purp from "../images/Rectangle 26 (1).png";

export default function EnrollmentForm(props) {
  const [Name, setName] = useState("");
  const [Deg, setDeg] = useState("");
  const [Col, setCol] = useState("");
  const [CurrSem, setCurrSem] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Datee, setDatee] = useState(null);

  const isFormValid = () => {
    return (
      Name !== "" &&
      Email !== "" &&
      Phone !== "" &&
      Deg !== "" &&
      Col !== "" &&
      CurrSem !== "" &&
      Datee !== null
    );
  };

  const overlayImageStyle = {
    position: "absolute",
    top: 0,
    right: -70,
    width: "auto",
    height: "100%",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Name, Deg, CurrSem, Col, Email, Phone, Datee);
    db.collection(props.formname)
      .add({
        Name: Name,
        Degree: Deg,
        College: Col,
        CurrentSem: CurrSem,
        Phone: Phone,
        Email: Email,
        SDate: Datee.toString(),
      })
      .then(() => {
        alert("Success!");
      })
      .catch((err) => {
        alert(err.message);
      });
    setName("");
    setDeg("");
    setCol("");
    setCurrSem("");
    setEmail("");
    setPhone("");
    setDatee(null);
  };

  const textStyle = {
    color: "white",
    textAlign: "left",
    fontSize: "24px", // Adjust the font size as needed
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={textStyle}>
        <h5><b>Are you prepared to begin the enrollment process?</b></h5>
        <p>Please complete the following form and submit the required   </p><p> enrollment
        fees to finalize your enrollment.</p>
      </div>

    <img src={purp} alt="Overlay Image" style={overlayImageStyle} />


      <Grid item xs={6} sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={Name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            label="Name"
            id="name"
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
                width: "60%",
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#2468ec",
                },
              },
            }}
            InputLabelProps={{ shrink: true, sx: { color: "#fff" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />

          <TextField
            value={Col}
            onChange={(e) => setCol(e.target.value)}
            fullWidth
            label="College"
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
                width: "60%",
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#2468ec",
                },
              },
            }}
            InputLabelProps={{ shrink: true, sx: { color: "#fff" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            value={Deg}
            onChange={(e) => setDeg(e.target.value)}
            fullWidth
            label="Degree"
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
                width: "60%",
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#2468ec",
                },
              },
            }}
            InputLabelProps={{ shrink: true, sx: { color: "#fff" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            value={CurrSem}
            onChange={(e) => setCurrSem(e.target.value)}
            fullWidth
            label="Semester"
            type="number"
            inputProps={{
              min: 1,
              max: 10,
            }}
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
                width: "30%",
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#2468ec",
                },
              },
            }}
            InputLabelProps={{ shrink: true, sx: { color: "#fff" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />

          <TextField
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            label="Email ID"
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
                width: "60%",
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#2468ec",
                },
              },
            }}
            InputLabelProps={{ shrink: true, sx: { color: "#fff" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            label="Phone Number"
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
                width: "60%",
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#2468ec",
                },
              },
            }}
            InputLabelProps={{ shrink: true, sx: { color: "#fff" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                value={Datee}
                onChange={(date) => setDatee(date)}
                color="white"
                label="Basic date picker"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "white",
                  },
                  "& .MuiInputLabel-outlined.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <button
            disabled={!isFormValid()}
            onClick={handleSubmit}
            style={{
              backgroundColor: !isFormValid() ? "#EBEBE4" : "red",
              borderRadius: "50px",
              border: "2px solid white",
              color: "white",
              fontSize: "12px",
              padding: "10px 20px",
            }}
          >
            <Typography variant="h5">Submit</Typography>
          </button>
        </Box>
      </Grid>
    </div>
  );
}
