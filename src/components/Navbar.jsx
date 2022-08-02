import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import { deepOrange } from "@mui/material/colors";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              AM-Panel
            </Typography>

            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Home
            </Button>

          


            <Button
              component={NavLink}
              to="post/addpost"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Add Post
            </Button>

      

            <Button
              component={NavLink}
              to="/contact"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Contact
            </Button>

            <Button
              component={NavLink}
              to="/SignUp"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              SignUp
            </Button>
            <Button
              component={NavLink}
              to="/login"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Login
            </Button>

            {/* <Button component={NavLink} to='/loginreg' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button> */}

            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="./assets/images/avatar1.jpg" />
            </Stack>

            {/* <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor : isActive ? '6d1b7b' : ''} }} sx={{color:'white'}}>Home</Button>
            <Button component={NavLink} to='/Contact'  sx={{color:'white'}}>Contact</Button>
            <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
