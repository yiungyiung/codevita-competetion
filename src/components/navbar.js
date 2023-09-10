import React from "react";
import { useRef } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Stack,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Navbar() {
  return (
    <Paper elevation={3} sx={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          variant="outlined"
          sx={{ backgroundColor: "#0066A1" }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
              <Toolbar>
                <Stack direction="row" spacing={1}>
                  <Button
                    href="#HOME"
                    color="inherit"
                    sx={{ fontSize: "15px" }}
                  >
                    HOME
                  </Button>
                  <Button color="inherit" sx={{ fontSize: "15px" }}>
                    ABOUT US
                  </Button>
                  <Button color="inherit" sx={{ fontSize: "15px" }}>
                    PROGRAM
                  </Button>
                  <Button color="inherit" sx={{ fontSize: "15px" }}>
                    CONTACT
                  </Button>
                </Stack>
              </Toolbar>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
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
            </Grid>
          </Grid>
        </AppBar>
      </Box>
    </Paper>
  );
}

export default Navbar;
