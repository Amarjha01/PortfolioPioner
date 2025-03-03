import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";


const About = () => {
const [isOpen,setIsOpen] = useState(false);
  const downIcon1 = useRef(null);
  const downIcon2 = useRef(null);

  const animation1 = useRef(null);
  const animation2 = useRef(null);

  // Initialize animations once using useEffect
  useEffect(() => {
    if (downIcon1.current) {
      animation1.current = gsap.to(downIcon1.current, {
        rotation: 180,
        y: "55 %",
        color:"yellow",
        // backgroundColor:"blue",
        duration: 0.5,
        ease: "power2.out",
        paused: true, // ✅ Pause initially
        onComplete:()=>{
          setIsOpen(true)
        }
      });
    }
    if (downIcon2.current) {
      animation2.current = gsap.to(downIcon2.current, {
        rotation: 180,
        color:"yellow",
        y: "55 %",
        duration: 0.5,
        ease: "power2.out",
        paused: true,
        onComplete:()=>{
          setIsOpen(true)
        }
      });
    }
  }, []);

  const handleHover = () => animation1.current?.play();
  const handleMouseLeave = () => {
    animation1.current?.reverse();
    setIsOpen(false);
  };

  const handleHover2 = () => animation2.current?.play();
  const handleMouseLeave2 = () => {
    animation2.current?.reverse();
    setIsOpen(false);
  };
  return (
    <div id="About" className=" w-full h-auto flex flex-col items-center   my-6 text-white ">
      <div className="w-[80%] text-6xl font-medium mx-28 ">
        <p className="text-white ">WHAT</p>
        <p className="text-white">
          I <span className="text-purple-700 ">DO</span>{" "}
        </p>
      </div>

      <div className=" cursor-pointer w-[80%] h-auto flex flex-col items-center md:flex-row md:space-x-5 md:items-start justify-center  my-6 text-white">

<div className="w-full md:w-[55%] h-auto flex justify-center items-center bg-black style " onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} >
<div class="corner-bottom-left"></div>
<div class="corner-bottom-right"></div>
<svg width="100%" className="hover:h-[450px] sm:hover:h-80 md:hover:h-96 lg:hover:h-80  h-64 md:h-48 lg:h-44 transition-all"  xmlns="http://www.w3.org/2000/svg">
  {/* <!-- Top Line --> */}
  <line x1="0" y1="0" x2="100%" y2="0" stroke="gray" strokeWidth="2" strokeDasharray="6,6" />
  
  {/* <!-- Left Line --> */}
  <line x1="0" y1="0" x2="0" y2="100%" stroke="gray" strokeWidth="2" strokeDasharray="6,6" />
  
  {/* <!-- Right Line --> */}
  <line x1="100%" y1="0" x2="100%" y2="100%" stroke="gray" strokeWidth="2" strokeDasharray="6,6" />

  {/* <!-- Bottom Line --> */}
<line x1="0" y1="100%" x2="100%" y2="100%" stroke="gray" strokeWidth="2" strokeDasharray="6,6" className=" hidden md:block" />

  <foreignObject x="5%" y="5%" width="90%" height="90%">
    <div xmlns="http://www.w3.org/1999/xhtml" className="p-4">
      <h2 className="text-4xl font-bold text-white">DEVELOP</h2>
      <p className="gruppo-regular text-white">Description</p>
      <p className="anta-regular text-white text-sm">
        Started building websites with Html, Css and JavaScript, now I craft scalable web apps with React, Node.js, Express, MongoDB, Gsap, AWS, Docker, and a touch of innovation!
      </p>
      {/* <span className="h-full absolute right-0  text-4xl "ref={downIcon1} >
      <IoIosArrowDown  className=" border relative -top-3 sm:-top-9 md:-top-14 lg:-top-10 " />
      </span> */}
      <span ref={downIcon1} onClick={isOpen ? handleMouseLeave : handleHover}  className=" h-36 md:h-7  absolute right-0  text-4xl inline-block" >
  <IoIosArrowDown className="border relative -top-3 sm:-top-9 md:-top-14 lg:-top-10" />
</span>

      <div className=" mt-16 md:mt-5">
        <p className="text-sm text-white">Skillset & tools</p>
        <ul className="flex text-[#fff2af] gap-2 flex-wrap gruppo-regular mt-2 text-sm">
          <li>Html</li>
          <li>Css</li>
          <li>JavaScript</li>
          <li>Gsap</li>
          <li>TailwindCss</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDb</li>
        </ul>
      </div>
    </div>
  </foreignObject>
</svg>

</div>

<div className="w-full md:w-[55%] h-auto flex justify-center items-center bg-black style " onMouseEnter={handleHover2} onMouseLeave={handleMouseLeave2} >
<div class="corner-bottom-left"></div>
<div class="corner-bottom-right"></div>
<svg width="100%" className="hover:h-[460px] sm:hover:h-80 md:hover:h-96 lg:hover:h-80  h-64 md:h-48 lg:h-44 transition-all"  xmlns="http://www.w3.org/2000/svg">
  {/* <!-- Top Line --> */}
  <line x1="0" y1="0" x2="100%" y2="0" stroke="gray" strokeWidth="2" strokeDasharray="6,6" />
  
  {/* <!-- Left Line --> */}
  <line x1="0" y1="0" x2="0" y2="100%" stroke="gray" strokeWidth="2" strokeDasharray="6,6" />
  
  {/* <!-- Right Line --> */}
  <line x1="100%" y1="0" x2="100%" y2="100%" stroke="gray" strokeWidth="2" strokeDasharray="6,6" />

  {/* <!-- Bottom Line --> */}
<line x1="0" y1="100%" x2="100%" y2="100%" stroke="gray" strokeWidth="2" strokeDasharray="6,6" className="" />

  <foreignObject x="5%" y="5%" width="90%" height="90%">
    <div xmlns="http://www.w3.org/1999/xhtml" className="p-4">
      <h2 className="text-4xl font-bold text-white uppercase">Deployment</h2>
      <p className="gruppo-regular text-white">Description</p>
      <p className="anta-regular text-white text-sm">
      Started with basic hosting, now I ensure seamless and scalable deployments using AWS, Docker, CI/CD pipelines, and cloud architecture—delivering high-performance web apps with reliability and efficiency.
      </p>
      <span ref={downIcon2} onClick={isOpen ? handleMouseLeave2 : handleHover2}  className=" h-36 md:h-7 absolute right-0  text-4xl inline-block" >
  <IoIosArrowDown className="border relative -top-3 sm:-top-9 md:-top-14 lg:-top-10" />
</span>

      <div className=" mt-16 md:mt-5">
        <p className="text-sm text-white">Skillset & tools</p>
        <ul className="flex text-[#fff2af] gap-2 flex-wrap gruppo-regular mt-2 text-sm">
          <li>GitHub Action</li>
          <li>Gh-Pages</li>
          <li>Docker</li>
          <li>AWS-EC2</li>
          <li>AWS-S3</li>
          <li>AWS-IAM</li>
          <li>AWS-Route 53</li>
          <li>Linux</li>
          <li>DigitalOcean</li>

        </ul>
      </div>
    </div>
  </foreignObject>
</svg>

</div>
      
      </div>
    </div>
  );
};

export default About;
