import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

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
                  <Button color="inherit" sx={{ fontSize: "15px" }}>
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
              <a target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="large" sx={{ padding: "4px" }} />
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="large" sx={{ padding: "4px" }} />
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="large" sx={{ padding: "4px" }} />
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <TwitterIcon fontSize="large" sx={{ padding: "4px" }} />
              </a>
              <a target="_blank" rel="noopener noreferrer">
                <EmailIcon fontSize="large" sx={{ padding: "4px" }} />
              </a>
            </Grid>
          </Grid>
        </AppBar>
      </Box>
    </Paper>
  );
}

export default Navbar;
