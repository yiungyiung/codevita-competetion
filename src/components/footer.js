import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import footerimage from "../images/web-development 1.png";

const Footer = () => {
  const overlayImageStyle = {
    float: "right",
    width: "400px",
    height: "auto",
  };

  return (
    <footer id="CONTACT">
      <div style={{ backgroundColor: "#0066A1" }}>
        <div
          style={{
            //backgroundColor: "white",
            color: "white",
            position: "sticky",
            bottom: 0,
            left: 0,
            margin: 0,
            padding: "10px",
            width: "100%",
          }}
        >
          <div>
            <img
              src={footerimage}
              alt="Overlay Image"
              style={overlayImageStyle}
            />
          </div>
          <div>
            <h2>
              <b>Get In Touch</b>
            </h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
              }}
            >
              <LocationOnIcon
                fontSize="large"
                style={{ fill: "white", padding: "4px" }}
              />
              <h2 style={{ margin: "0", marginLeft: "8px" }}>
                Nyati Estate Road, Pune-60, Maharashtra, India
              </h2>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
              }}
            >
              <EmailIcon
                fontSize="large"
                style={{ fill: "white", padding: "4px" }}
              />
              <h2 style={{ margin: "0", marginLeft: "8px" }}>
                studentconnect@codevita.live
              </h2>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/codevitalive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                fontSize="large"
                sx={{ fill: "white", padding: "4px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/codevitalive/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                fontSize="large"
                sx={{ fill: "white", padding: "4px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/school/codevita-live/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                fontSize="large"
                sx={{ fill: "white", padding: "4px" }}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCi2AzaYuWFF5doDCoT2iWvA/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon
                fontSize="large"
                sx={{ fill: "white", padding: "4px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
