import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";

export default function IT() {
  return (
    <Grid item xs={6} sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          label="Name"
          id="name"
          sx={{
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "white" },
              width: "60%", // Set width to 60%
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
          fullWidth
          label="College"
          sx={{
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "white" },
              width: "60%", // Set width to 60%
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
          fullWidth
          label="Degree"
          sx={{
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "white" },
              width: "60%", // Set width to 60%
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
          fullWidth
          label=" Current Semester"
          sx={{
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "white" },
              width: "10%", // Set width to 60%
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
          fullWidth
          label="Email ID"
          sx={{
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "white" },
              width: "60%", // Set width to 100%
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
          fullWidth
          label="Phone Number"
          sx={{
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "white" },
              width: "60%", // Set width to 100%
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
              label="Basic date picker"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <button
          style={{
            backgroundColor: "red",
            borderRadius: "50px",
            border: "2px solid white",
            color: "white",
            fontSize: "12px",
            padding: "10px 20px",
          }}
        >
          <Typography variant="h5">submit</Typography>
        </button>
      </Box>
    </Grid>
  );
}
