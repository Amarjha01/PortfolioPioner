import React, { useRef } from "react";
import GlobalLayout from "./pages/GlobalLayout.jsx";
import LooperGroup from "./assets/LooperGroup2.png"
import './App.css'
import Home from './pages/Home.jsx'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { Helmet } from "react-helmet";

function App() {
  
  const pointer = useRef();
  const handleMouseMove = (event) => {
    // console.log(event)
   
  //  gsap.to(pointer.current, {
  //    x: event.clientX ,
  //    y: event.clientY ,
  //    duration: 0.5,
  //   //  ease: "back.out(1.7)"
  //  });
 };

  return (
    <GlobalLayout >
            <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ Google Site Verification */}
        <meta name="google-site-verification" content="TW4dOJkPKps4SmvsBVwrs0eWE25HL7QRccot7obOVTs" />

        {/* ✅ Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WX3KHLEQP5"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WX3KHLEQP5');
          `}
        </script>

        <title>Amar Jha - MERN Stack Developer</title>
        <meta name="description" content="Official portfolio of Amar Jha, MERN stack developer. Visit for projects, contact info, and social profiles." />
        <meta name="keywords" content="Amar Jha, amarjha.tech, amarjha01, full stack developer, MERN developer, LinkedIn Amar Jha, GitHub Amar Jha" />
        <meta name="author" content="Amar Jha" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&family=Gruppo&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Anta&display=swap" rel="stylesheet" />
      </Helmet>
      <main className="" onMouseMove={handleMouseMove}>
      {/* <span className='hidden lg:flex h-4 w-4 rounded-full bg-[#a9691b] fixed z-50' ref={pointer}  ></span> */}
        {/* <Navbar /> */}
        <Home />
      </main>
    </GlobalLayout>
  );
}

export default App;
