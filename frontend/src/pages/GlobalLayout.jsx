import React from "react";
import { Helmet } from "react-helmet";
import StarsCanvas from "../components/StarBackground.jsx";
// import "./globals.css"; // Global CSS file

const GlobalLayout = ({ children }) => {
  return (
   
      <>
      <StarsCanvas />
     
      <main>{children}</main>
      </>
    
  );
};

export default GlobalLayout;
