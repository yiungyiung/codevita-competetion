import React from "react";
import { Box, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { Typography, Grid } from "@mui/material";
const currencies = [
  {
    value: 'Web Dev',
    label: 'Web Dev',
  },
  {
    value: 'App Dev',
    label: 'App Dev',
  },
  {
    value: 'Product Management',
    label: 'Product Management',
  },
  {
    value: 'Computer Vision',
    label: 'Computer Vision',
  },
  {
    value: 'Data Science',
    label: 'Data Science',
  },
  {
    value: 'DBMS',
    label: 'DBMS',
  },
  {
    value: 'Cyber Security',
    label: 'Cyber Security',
  },
];

export default function ComposedTextField() {
  return (
<Box
  component="form"
  sx={{
    "& > :not(style)": {
      m: 1,
    },
    display: "inline-block",
    border: "3px solid #2468ec",
    borderRadius:"10px",
    width: "500px", 
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
            width: "90%",
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
        label="College+Degree"
        sx={{
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
            width: "90%",
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
        select
        label="Track"
        defaultValue="Track"
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
          "& .MuiSelect-icon": {
            color: "white",
          },
          width: '250%',
        }}
        InputLabelProps={{ shrink: true, sx: { color: "#fff" } }}
        InputProps={{
          style: { color: "white" },
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        label="Verification Code"
        sx={{
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
            width: "45%",
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
      <Grid
             container
             justifyContent="center" 
             sx={{ margin: "10rem" }}
            >
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
            </Grid>
    </Box>
  );
}
