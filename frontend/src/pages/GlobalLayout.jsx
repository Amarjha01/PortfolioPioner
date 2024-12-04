import React from "react";
import { Helmet } from "react-helmet";
import StarsCanvas from "../components/StarBackground.jsx";
import Navbar from "../components/NavBar";
// import "./globals.css"; // Global CSS file

const GlobalLayout = ({ children }) => {
  return (
   
      <>
      <StarsCanvas />
      <Navbar />
      <main>{children}</main>
      </>
    
  );
};

export default GlobalLayout;
