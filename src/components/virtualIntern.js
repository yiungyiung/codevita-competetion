import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import programImage from "../images/work.png";
import { Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { db } from "./firebase";

const block = {
  backgroundColor: "#111829",
};

const containerStyle = {
  position: "relative",
  padding: "2vh",
};

const imageStyle = {
  position: "absolute",
  top: -90,
  right: 0,
  maxWidth: "30vw",
};

const paragraphStyle = {
  marginLeft: "2vw",
  marginRight: "2vw",
  marginBottom: "4vh",
  fontSize: "1.5rem",
};

const titleStyle = {
  fontSize: "3rem",
  textAlign: "center",
  margin: "auto",
};

const listItemStyle = {
  fontSize: "1.5rem",
  marginLeft: "20px",
};

function Program() {
  const [Name, setName] = useState("");
  const [Deg, setDeg] = useState("");
  const [College, setCollege] = useState("");
  const [CurrSem, setCurrSem] = useState("");
  const [Track, setTrack] = useState("");
  const [VeriCode, setVeriCode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Name, Deg, CurrSem, Track, VeriCode, College);
    db.collection("But")
      .add({
        Name: Name,
        Degree: Deg,
        College: College,
        CurrentSem: CurrSem,
        Track: Track,
        Verificationcode: VeriCode,
      })
      .then(() => {
        alert("Success!");
      })
      .catch((err) => {
        alert(err.message);
      });
    setName("");
    setDeg("");
    setCollege("");
    setCurrSem("");
    setTrack("");
    setVeriCode("");
  };
  return (
    <div id="VI">
      <h1
        className="text-4xl font-bold font-sans text-blue-600 underline"
        style={titleStyle}
      >
        Virtual Internship Program
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <p className="text-1xl font-sans text-white py-2" style={paragraphStyle}>
        Get ready to take your profile to the next level with thrilling hands-on
        projects! Upon finishing the program, you'll receive a prestigious
        internship certificate, invaluable work experience, and personalized
        mentoring. Choose from a variety of domains and supercharge your resume
        to stand out from the crowd!
        <br />
        <br />
      </p>
      <div className="text-white" style={block}>
        <div style={containerStyle}>
          <ListGroup>
            <ListGroup.Item style={listItemStyle}>
              &bull; Web Development
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; Product Management
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; Data Science
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; Computer Vision
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; Web Development
            </ListGroup.Item>
          </ListGroup>
          <img src={programImage} alt="Program" style={imageStyle} />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div
        onClick={() => {
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSdf17YI0sj5Eu1zHnbAKvOkJzO4hd4bWuU-AiAHZFwRou32Gw/viewform",
            "_blank"
          );
        }}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "5vw",
        }}
      >
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#0066A1",
            borderRadius: "2rem",
          }}
        >
          <b style={{ margin: "1rem" }} className="text-white">
            <h3>Fill the Verification Form.</h3>
          </b>
        </button>
      </div>
      <div style={{ margin: "1rem", marginTop: "3rem" }} className="text-white">
        <Typography variant="h2">Ready to get started?</Typography>
        <Typography
          variant="h5"
          style={{ marginTop: "1rem" }}
          className="text-white"
        >
          Fill this form below after filling the verification form above. You
          shall get the verification code after filling the Google Form. New
          Cohorts Start On 15th Of Every Month.
        </Typography>
      </div>
      <div sx={{ display: "flex", justifyContent: "center", width: "100vw" }}>
        <Grid
          container
          sx={{
            backgroundColor: "#4F6AFF",
            width: "80vw",
            borderRadius: "2rem",
          }}
        >
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", margin: "1rem" }}
          >
            <h2>Name:</h2>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Input
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", margin: "1rem" }}
          >
            <h2>Degree:</h2>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Input
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={Deg}
                onChange={(e) => setDeg(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", margin: "1rem" }}
          >
            <h2>College:</h2>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Input
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={College}
                onChange={(e) => setCollege(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", margin: "1rem" }}
          >
            <h2>Current Semester:</h2>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Input
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={CurrSem}
                onChange={(e) => setCurrSem(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", margin: "1rem" }}
          >
            <h2>Track:</h2>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Input
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={Track}
                onChange={(e) => setTrack(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", margin: "1rem" }}
          >
            <h2>Verification Code:</h2>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Input
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={VeriCode}
                onChange={(e) => setVeriCode(e.target.value)}
              />
            </Box>
            <Grid
              item
              sx={{ display: "flex", alignItems: "center", margin: "1rem" }}
            >
              <button onClick={handleSubmit} style={{ backgroundColor: "red" }}>
                <Typography variant="h4">submit</Typography>
              </button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Program;
