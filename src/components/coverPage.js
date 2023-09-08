import React from "react";
import backgroundImage from "../images/backgrnd.png"; // Background image path
import overlayImage from "../images/white-search-icon-transparent-background-1.png"; // Overlay image path

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
  opacity: 0.5,
};

const overlayImageStyle = {
  position: "absolute",
  top: "150px",
  left: "15px",
  width: "60px",
  height: "60px",
};

function Cover() {
  return (
    <div>
      <div style={coverStyle}></div>
      <div>
        <img src={overlayImage} alt="Overlay Image" style={overlayImageStyle} />
      </div>
      <div className="absolute top-40 left-20">
        <h1 className="text-5xl font-bold font-mono text-white">
          SKILL BREWERY
        </h1>
      </div>
    </div>
  );
}

export default Cover;
