import React from "react";
import { Grid } from "@mui/material";
import abtimage from "../images/image-removebg-preview (45) 1.png";

const overlayImageStyle = {
  position: "absolute",
  top: "10px",
  left: "70px",
  width: "400px",
  height: "300px",
};

const About = () => {
  return (
    <div style={{ position: "relative" }}>
      <Grid container justifyContent="space-evenly">
        <Grid item xs={12} md={6}>
          <div>
            <img src={abtimage} alt="Overlay Image" style={overlayImageStyle} />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <h1
              className="text-4xl font-bold font-mono text-blue-600 underline"
              style={{ textAlign: "center", margin: "auto" }}
            >
              About Us
            </h1>

            <p
              className="text-1.6xl font-mono text-white py-2"
              style={{ marginRight: "25px" }}
            >
              Skill Brewery is an internship initiative that facilitates the
              acquisition of essential skills for students and recent graduates
              to excel in their professional pursuits.
            </p>
            <p
              className="text-1.6xl font-mono text-white py-2"
              style={{ marginRight: "25px" }}
            >
              Our programs are structured to provide hands-on and immersive
              experiences, enabling participants to work on meaningful projects.
            </p>
            <p
              className="text-1.6xl font-mono text-white py-2"
              style={{ marginRight: "25px" }}
            >
              We also offer a supportive community where you can connect with
              other interns and mentors.
            </p>
            <p
              className="text-1.6xl font-mono text-white py-2"
              style={{ marginRight: "25px" }}
            >
              Our team is committed to the success of our interns, providing
              resources and guidance for their full potential.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
