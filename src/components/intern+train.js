import * as React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import programImage from "../images/landing-img.png";
import { Grid } from "@mui/material";
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

function IProgram() {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} md={8}>
          <h1
            className="text-4xl font-bold font-sans text-blue-600 underline"
            style={titleStyle}
          >
            Training + Internship Program
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <p
            className="text-1xl font-sans text-white py-2"
            style={paragraphStyle}
          >
            Apply now for Codevita Live’s Cybersecurity Evangelist Live
            programme before the cohort gets full. Take advantage of a 6-week
            curriculum that covers everything that you need to know to kickstart
            your dream career, from scratch and at your own pace. The internship
            function would be activated once sufficient progress has been
            achieved in the course.
            <br />
            <br />
          </p>
        </Grid>
      </Grid>
      <div className="text-white" style={block}>
        <div style={containerStyle}>
          <ListGroup>
            <ListGroup.Item style={listItemStyle}>
              &bull; Weekly Checkpoint Exams
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; Interview Preparation
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; 24/7 Doubt Support
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; Guaranteed Internship Opportunity
            </ListGroup.Item>

            <ListGroup.Item style={listItemStyle}>
              &bull; Lifetime Access
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; Zero to Hero in 6 Weeks
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
    </div>
  );
}

export default IProgram;
