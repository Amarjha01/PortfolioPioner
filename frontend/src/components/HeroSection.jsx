import React, { useEffect, useRef, useState } from 'react'
import MyImg from '../assets/MyImg.svg'
import popcornGif from '../assets/popcorn.gif'
import SplitType from "split-type";
import './CustomeComponents.css'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

import { IoClose } from "react-icons/io5";
import { TbHandFingerDown } from "react-icons/tb";
import { FaFilePdf } from "react-icons/fa";
import resumePdf from '../assets/resume/amarjha_resume_2MARCH.pdf'
import resumeJpg from '../assets/resume/amarjha_resume_2MARCH_page-0001.jpg'

const HeroSection = () => {
  
  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();

  const textRef = useRef(null);
  const words = ["MERN Stack", "Full Stack", "Software"];
  const [index, setIndex] = useState(0);

  // Typewriter effect state
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const typewriterWords = [
    "Passionate Software Developer",
    "Passionate Full Stack Developer", 
    "Passionate MERN Stack Developer"
  ];
  const fullText = typewriterWords[currentWordIndex];

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      if (!isDeleting) {
        if (typewriterIndex < fullText.length) {
          setTypewriterText(fullText.substring(0, typewriterIndex + 1));
          setTypewriterIndex(typewriterIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typewriterIndex > 0) {
          setTypewriterText(fullText.substring(0, typewriterIndex - 1));
          setTypewriterIndex(typewriterIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [typewriterIndex, isDeleting, fullText, currentWordIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // Existing rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.fromTo(textRef.current, 
        { opacity: 1 }, 
        {
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            gsap.set(textRef.current);
          }
        }
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  
  useGSAP(() => {
    const t1 = gsap.timeline();
  
    t1.from(textRef1.current, {
      opacity: 0,
      y: 70,
      duration: 1,
      delay: 0.3,
    });
  
    t1.from(textRef2.current, {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });
    t1.from(textRef3.current, {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const [showResume, setShowResume] = useState(false);

  const handleResume = () => {
    setShowResume(true);
  }
  const handleResumeClose = () => {
    setShowResume(false);
  }

  return (
    <div id="Home">
   
      <div className='h-[200px] flex justify-center items-center py-4 mt-32 md:mt-10'>
        <img src={MyImg} alt="" className='h-full w-auto hover:scale-110 transition-transform duration-300' />
      </div>
      
      <div className='animate-bounce text-white text-5xl md:text-6xl fornt-black py-4 text-center gruppo-900 uppercase'>Amar Jha</div>
      
      <div className="flex justify-center">
        <p className="text-2xl tracking-tighter uppercase font-black text-gray-300 max-w-[600px] overflow-hidden" ref={textRef1}>
          I do Code &{" "}
          <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r uppercase from-purple-500 to-orange-400">
            Chill
          </span>
        </p>
        <img className='popimg'
          src={popcornGif}
          height={50}
          width={50}
        />
      </div>
      
      <div className='flex flex-col justify-center items-center py-4 gruppo-900'>
        {/* Typewriter text */}
        <p ref={textRef2} className='text-xl md:text-xl lg:text-3xl w-11/12 text-purple-800 text-center overflow-hidden min-h-[2rem]'>
          <span className="inline-block">
            {typewriterText}
            <span className={`inline-block w-0.5 h-6 bg-purple-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
          </span>
        </p>
        
        <p ref={textRef3} className='text-sm md:text-xl lg:text-2xl w-11/12 font-black uppercase text-white text-center overflow-hidden mt-2'>
          Dedicated to crafting elegant and user-friendly web applications.
        </p>
      </div>

      <div className="flex justify-center py-4">
        <div className="w-28 h-14 flex justify-center relative items-center rounded-3xl bg-black text-white text-center cursor-pointer Resume gruppo-700 hover:bg-gray-900 transition-colors duration-300">
          <button className='' onClick={handleResume}> 
            Resume 
          </button>
         
          {showResume && 
            <div className='border border-white transition-all h-auto max-w-5xl w-[90vw] lg:w-[45vw] absolute z-30 bg-black rounded-xl cursor-default'>
              <div className='flex justify-end'>
                <IoClose className='text-4xl cursor-pointer relative right-3 top-3 hover:text-red-400 transition-colors duration-300' onClick={handleResumeClose} />
              </div>
              <div className='h-full w-full flex flex-col justify-center items-center'>
                <div className='w-full flex flex-col items-center'>
                  <button className=''>
                    <a href={resumePdf} download={resumePdf} className='px-4 py-1 border rounded-3xl h-full w-[80%] anta-800 text-lg md:text-2xl text-blue-400 hover:text-green-500 hover:bg-[#000000a0] transition-all duration-300'>
                      Download Resume 
                    </a>
                  </button>
                  
                  <span className='gruppo-regular'>Resume preview</span>
                  <TbHandFingerDown className='animate-bounce w-full text-2xl mt-1 text-purple-700' />
                </div>
                <img src={resumeJpg} alt="resume_preview" className='h-auto w-full rounded-xl' />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default HeroSection