import * as React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import programImage from "../images/work.png";
const block = {
  backgroundColor: "#111829",
};

function Program() {
  return (
    <div>
      <h1
        className="text-4xl font-bold font-mono text-blue-600 underline"
        style={{ textAlign: "center", margin: "auto" }}
      >
        Virtual Internship Program
      </h1>
      <p
        className="text-1xl font-mono text-white py-2"
        style={{ marginLeft: "20px", marginRight: "20px" }}
      >
        Get ready to take your profile to the next level with thrilling hands-on
        projects! Upon finishing the program, you'll receive a prestigious
        internship certificate, invaluable work experience, and personalized
        mentoring. Choose from a variety of domains and supercharge your resume
        to stand out from the crowd!
      </p>
      <div className="text-white" style={block}>
        <grid>
          <grid>
            <ListGroup>
              <ListGroup.Item>Web Development</ListGroup.Item>
              <ListGroup.Item>Product Management</ListGroup.Item>
              <ListGroup.Item>Data Science</ListGroup.Item>
              <ListGroup.Item>Computer Vision</ListGroup.Item>
              <ListGroup.Item>Web Development</ListGroup.Item>
            </ListGroup>
          </grid>
          <grid>
            <img src={programImage} />
          </grid>
        </grid>
      </div>
    </div>
  );
}

export default Program;
