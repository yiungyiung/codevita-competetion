import React from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import abtimage from "../images/image-removebg-preview (45) 1.png";

const About = () => {
  return (
    <div style={{ position: "relative" }}>
      <Grid container justifyContent="space-evenly">
        <Grid item xs={12} md={6}>
          <div>
            <img src={abtimage} alt="Overlay Image" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <h1 className="text-4xl font-bold font-mono text-blue-600 underline">
              About Us
            </h1>

            <p className="text-1xl font-mono text-white py-2">
              Skill Brewery is an internship initiative that facilitates the
              acquisition of essential skills for students and recent graduates
              to excel in their professional pursuits.
            </p>
            <p className="text-1xl font-mono text-white py-2">
              Our programs are structured to provide hands-on and immersive
              experiences, enabling participants to work on meaningful projects.
            </p>
            <p className="text-1xl font-mono text-white py-2">
              We also offer a supportive community where you can connect with
              other interns and mentors.
            </p>
            <p className="text-1xl font-mono text-white py-2">
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
