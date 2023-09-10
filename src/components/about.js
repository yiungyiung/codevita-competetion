import React from "react";
import { Grid } from "@mui/material";
import abtimage from "../images/image-removebg-preview (45) 1.png";

const overlayImageStyle = {
  width: "40vw",
  height: "auto",
  marginTop: "-1vh",
};

const contentStyle = {
  fontFamily: "Helvetica, Arial, sans-serif", // Apply Helvetica font to the entire page
  padding: "2vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "left",
};

const textContainerStyle = {
  flex: 1,
  padding: "2vw",
  maxWidth: "50vw",
};

const textBoxStyle = {
  backgroundColor: "transparent",
  padding: "2vw",
  boxShadow: "0 0.5vw 1vw rgba(0, 0, 0, 0.2)",
  borderRadius: "1vw",
};

const About = () => {
  return (
    <div id="ABOUT" style={{ position: "relative" }}>
      <Grid container justifyContent="space-evenly" style={contentStyle}>
        <div>
          <img src={abtimage} alt="Overlay Image" style={overlayImageStyle} />
        </div>
        <div style={textContainerStyle}>
          <h1
            className="text-5xl font-bold font-sans text-blue-600"
            style={{ textDecoration: "underline" }}
          >
            About Us
          </h1>
          <div style={textBoxStyle}>
            <p className="text-2xl font-sans text-white py-2">
              Skill Brewery is an internship initiative that facilitates the
              acquisition of essential skills for students and recent graduates
              to excel in their professional pursuits.
            </p>
            <p className="text-2xl font-sans text-white py-2">
              Our programs are structured to provide hands-on and immersive
              experiences, enabling participants to work on meaningful projects.
            </p>
            <p className="text-2xl font-sans text-white py-2">
              We also offer a supportive community where you can connect with
              other interns and mentors.
            </p>
            <p className="text-2xl font-sans text-white py-2">
              Our team is committed to the success of our interns, providing
              resources and guidance for their full potential.
            </p>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default About;
