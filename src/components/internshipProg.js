import * as React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import programImage from "../images/Group.png";
import { Grid } from "@mui/material";
import IT from "./I+T_form";
const block = {
  backgroundColor: "#111829",
};

const containerStyle = {
  display: "flex", // Use flexbox
  flexDirection: "row", // Arrange items horizontally
  alignItems: "center", // Center items vertically
  justifyContent: "space-between", // Space items evenly
  padding: "2vh",
};

const imageStyle = {
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

function IpProgram() {
  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <h1
            className="text-4xl font-bold font-sans text-blue-600 underline"
            style={titleStyle}
          >
            Internship Cum Training Program
          </h1>

          <p
            className="text-1xl font-sans text-white py-2"
            style={paragraphStyle}
          >
            Apply now for Codevita Live’s Data Science FastTrack programme
            before the cohort gets full. Take advantage of a 10-week curriculum
            that covers everything that you need to know to kickstart your dream
            career, from scratch and at your own pace. The internship function
            would be activated once sufficient progress has been achieved in the
            course and will be based on the following functions: EDA,
            Supervised/Unsupervised Machine Learning, Sentimental Analysis
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
              &bull; Capstone Project Intensive
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; 24/7 Doubt Support
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; Premium Career Services
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; Lifetime Access
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              &bull; Guaranteed Internship
            </ListGroup.Item>
          </ListGroup>
          <img src={programImage} alt="Program" style={imageStyle} />
        </div>
      </div>
      <IT formname="Data Science FastTrack" />
    </div>
  );
}

export default IpProgram;
