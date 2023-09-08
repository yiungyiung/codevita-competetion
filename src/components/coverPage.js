import React from "react";
import backgroundImage from "../images/backgrnd.png"; // Background image path
import overlayImage from "../images/Search.png"; // Overlay image path

const coverStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const overlayImageStyle = {
  position: "absolute",
  top: "70px",
  left: "15px",
  width: "60px",
  height: "60px",
};

function Cover() {
  return (
    <div style={coverStyle}>
      <div className="absolute top-20 left-20">
        <h1 className="text-5xl font-bold font-serif text-white">
          SKILL BREWERY
        </h1>
      </div>
      <img src={overlayImage} alt="Overlay Image" style={overlayImageStyle} />
    </div>
  );
}

export default Cover;
