import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";
import { CssBaseline } from "@mui/material";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
