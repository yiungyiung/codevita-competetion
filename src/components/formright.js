import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { db } from "./firebase";

export default function IT(props) {
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

  return (
    <div style={{ marginLeft: "auto", marginRight: "0" }}>
      <Grid item xs={6} sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          {/* Heading and Introductory Text */}
          <Typography variant="h4" gutterBottom style={{ color: "#2468ec" }}>
            Ready to get started?
          </Typography>
          <Typography variant="body1" paragraph style={{ color: "#2468ec" }}>
            Fill this form below and pay the enrollment fees to complete your
            enrollment!
          </Typography>

          {/* Name */}
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

          {/* College */}
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

          {/* Degree */}
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

          {/* Semester */}
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

          {/* Email */}
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

          {/* Phone Number */}
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

          {/* Date Picker */}
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

          {/* Submit Button */}
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
