import * as React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import programImage from "../images/landing-img.png";
const block = {
  backgroundColor: "#111829",
};

const containerStyle = {
  position: "relative",
  padding: "2vh",
  display: "flex",
  flexDirection: "row", // Change to "row"
  justifyContent: "center", 
  alignItems: "center",
};

const imageStyle = {
  position: "absolute",
  top: -90,
  left: 0,
  maxWidth: "30vw",
};

const paragraphStyle = {
  marginLeft: "20vw",
  marginRight: "2vw",
  marginBottom: "4vh",
  fontSize: "1.5rem",
  textAlign: "right", // Align text to the right
};

const titleStyle = {
  fontSize: "3rem",
  textAlign: "center",
  marginLeft: "20vw",
};

const listItemStyle = {
  fontSize: "1.5rem",
};

function IProgram() {
  return (
    <div>
      <h1
        className="text-4xl font-bold font-sans text-blue-600 underline"
        style={titleStyle}
      >
        Training + Internship Program
      </h1>
      <br></br>
      <p className="text-1xl font-sans text-white py-2" style={paragraphStyle}>
        Apply now for Codevita Live’s Cybersecurity Evangelist Live programme
        before the cohort gets full. Take advantage of a 6-week curriculum that
        covers everything that you need to know to kickstart your dream career,
        from scratch and at your own pace. The internship function would be
        activated once sufficient progress has been achieved in the course.
        <br />
        <br />
      </p>
      <div className="text-white" style={block}>
        <div style={containerStyle}>
          <img src={programImage} alt="Program" style={imageStyle} />
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
