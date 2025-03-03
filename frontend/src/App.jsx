import React, { useRef } from "react";
import GlobalLayout from "./pages/GlobalLayout.jsx";
import LooperGroup from "./assets/LooperGroup2.png"
import './App.css'
import Home from './pages/Home.jsx'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';


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
      <main className="" onMouseMove={handleMouseMove}>
      {/* <span className='hidden lg:flex h-4 w-4 rounded-full bg-[#a9691b] fixed z-50' ref={pointer}  ></span> */}
        {/* <Navbar /> */}
        <Home />
      </main>
    </GlobalLayout>
  );
}

export default App;
