import React ,{useRef, useState} from 'react'
import MyImg from '../assets/MyImg.svg'
import popcornGif from '../assets/popcorn.gif'
import SplitType from "split-type";
import './CustomeComponents.css'
// import { p } from 'maath/dist/misc-19a3ec46.esm';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

import { IoClose } from "react-icons/io5";


const HeroSection = () => {
  
  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();


 
  

  
  useGSAP(() => {
    // const text = new SplitType(textRef2.current, { type: "words" });
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
    } );
  }, []);
  



  const [showResume , setShowResume] = useState(false);

  const handleResume = ()=>{
    setShowResume(true);
  }
  const handleResumeClose = ()=>{
    setShowResume(false);
  }

  return (
    <div  className=' '>
   
      <div className='h-[200px] flex justify-center items-center py-4 mt-32 md:mt-0  '>
        <img src={MyImg} alt="" className='h-full w-auto hover:scale-110 ' />
        </div>
      <div className='animate-bounce text-white text-5xl  md:text-6xl  fornt-black py-4 text-center  gruppo-900 uppercase ' >Amar Jha!</div>
      <div className="flex justify-center" >
          <p className="text-2xl tracking-tighter uppercase font-black text-gray-300 max-w-[600px] overflow-hidden" ref={textRef1} >
            I do Code &{" "}
            <span className="text-transparent font-semibold   bg-clip-text bg-gradient-to-r uppercase from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
          <img className='popimg'
            src={popcornGif}
            height={50}
            width={50}
           
          />
        </div>
      <div className='flex flex-col justify-center items-center py-4 gruppo-regular'>
        <p ref={textRef2} className='text-xs md:text-xl lg:text-2xl w-11/12   text-white text-center overflow-hidden'>
        Passionate  Software Engineer with a focus on Mern stack development,
        </p>
        <p ref={textRef3} className='text-xs md:text-xl lg:text-2xl w-11/12    font-black  uppercase  text-white text-center overflow-hidden'>
         dedicated to crafting elegant and user-friendly web applications.
        </p>
      </div>


      <div className="flex justify-center py-4 ">
    <div className="w-28 h-14 flex justify-center relative items-center rounded-3xl bg-black text-white text-center cursor-pointer  Resume gruppo-700 hover:text-xl transition-all">
     <button className=''onClick={handleResume} > 
      Resume 
      </button>
     
    {
    showResume && <div className='h-auto w-[400px] lg:w-[800px] absolute bg-black z-50 p-2 rounded-xl cursor-default '>
      <div className='flex justify-end'>
        <IoClose className='text-2xl cursor-pointer' onClick={handleResumeClose} />
      </div>
      <div className=' h-full w-full p-4 '>
       <div className='flex flex-col items-center'>
       <div className='h-12 w-72'>
       <button className='custome-downloadBtn h-full w-full '>Download full resume</button>
       </div>
        <span>Resume preview</span>
        <span>Amar Jha</span>
       </div>
        <p className='text-sm'>Muzaffarpur Bihar | <a href="tel:+91 9199569397" className='text-[#2f5596]'>9199569397</a>  <a href="mailto:amarjha880@gmail.com" className='text-[#2f5596]' ></a> | <a href="https://www.linkedin.com/in/amarjha01/" className='text-[#2f5596]'>Linkedin</a> | <a href="https://github.com/Amarjha01/ " className='text-[#2f5596]'>GitHub</a> </p>
        <div className='border'></div>
        <span className='text-start block text-2xl py-2 text-[#2f5596] anta-800'>SKILLS</span>
        <div className='text-start'>
        <p><span className='gruppo-900'>BACKEND DEVELOPMENT -</span> Node.js, Express.js</p>
        <p><span className='gruppo-900'>FRONT END DEVELOPMENT -</span> React.js, HTML, JavaScript,  CSS, Tailwind CSS , Redux toolkit</p>
        <p><span className='gruppo-900'>DATABASE -</span> MongoDB</p>
        <p><span className='gruppo-900'>MISCELLANEOUS -</span> Amazon AWS, Docker, GitHub Action</p>
        <p><span className='gruppo-900'>VERSION CONTROL -</span> GitHub</p>
        <span className='text-start block text-2xl py-2 text-[#2f5596] anta-800'>EDUCATION</span>
        <p className=' gruppo-900'>Phonics Group of Institutions Expected <span className='text-[#2f5596]'>June 2025</span></p>
        <p>Bachelor of technology (B.Tech) in Computer Science Engineering Roorkee, Uttarakhand</p>
        <p className='gruppo-900'>Roorkee College of Engineering <span className='text-[#2f5596]'>July 2020</span></p>
        <p>Diploma in Mechanical Engineering Roorkee, Uttarakhand</p>
        <span className='text-start block text-2xl py-2 text-[#2f5596] anta-800'>WORK EXPERIENCE</span>
        <p className=' anta-800'>Contributor at GirlScript Summer Of Code October 1 – October 31</p>
        <p className='gruppo-900'>1 month Open-Source program</p>
        <ul className=''>
          <li>● Coordinated with team members to troubleshoot bugs, refine functionality, and enhance user
            interactions.
            </li>
            <li>● Utilized MERN stack, Tailwind CSS, and Firebase to drive project outcomes.</li>
            <li>● Enhanced version control skills in Git and GitHub through consistent code integration, merging, and
            coordination with maintainers.</li>
        </ul>
        </div>
      </div>
    </div>
    }
     
    </div>
</div>



      
      </div>
  )
}

export default HeroSection