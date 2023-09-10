import React from "react";

const VideoLinks = () => {
  const youtubeVideoLink1 = "https://youtu.be/h4X8rKDSpjo";
  const youtubeVideoLink2 = "https://youtu.be/J09qee7fYfk";

  const videoContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  };

  const pageTitleStyle = {
    color: "#2468ec",
    textAlign: "center",
    fontSize: "45px",
    marginBottom: "20px",
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <h1 style={pageTitleStyle}>Checkout What Our Ex Interns Have To Say</h1>
      <div style={videoContainerStyle}>
        <iframe
          width="560"
          height="315"
          src={youtubeVideoLink1.replace("youtu.be/", "www.youtube.com/embed/")}
          title="Embedded YouTube Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src={youtubeVideoLink2.replace("youtu.be/", "www.youtube.com/embed/")}
          title="Embedded YouTube Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <br />
    </div>
  );
};

export default VideoLinks;
