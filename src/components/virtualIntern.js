import React, {useState} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import programImage from "../images/work.png";
import { Typography, Grid } from "@mui/material";
import {db} from "./firebase";


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
const [CurrSem,setCurrSem] = useState("");
const [Track,setTrack] = useState("");
const [VeriCode,setVeriCode] = useState("");
  return (
    <div>
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
      <div sx={{ display: "flex", justifyContent: "center",width:"100vw" }}>
        <Grid
          container
          sx={{
            backgroundColor: "#4F6AFF",
            width: "80vw",
            borderRadius: "2rem",
          }}
        >
          <Grid item sx={{margin:"1rem"}} >
            hello
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Program;
