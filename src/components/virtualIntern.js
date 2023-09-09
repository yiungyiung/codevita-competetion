import * as React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import programImage from "../images/work.png";
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
    </div>
  );
}

export default Program;
