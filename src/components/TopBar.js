import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Wifi from "@mui/icons-material/Wifi";

function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "1rem" }}>
      <AppBar position="static" style={{ background: "#3e50cc" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Wifi />
          </IconButton>
          <Typography
            variant="h6"
            align="center"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#ffffff" }}
          >
            Wifi DashBoard
          </Typography>
          <Button style={{ color: "#ffffff" }}>Refresh</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
