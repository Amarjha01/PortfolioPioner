import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react"; // Icons for menu

import Logo from "../assets/Logo.svg";
import logo3 from '../assets/logo3.svg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]); // Store all anchor tags
  const tl = useRef(null);

  useEffect(() => {
    // Initialize GSAP timeline only once
    tl.current = gsap.timeline({ paused: true });

    // 1️⃣ Navbar animation (comes from right to 0)
    tl.current.fromTo(
      menuRef.current,
      { x: 200, opacity: 0 },
      { x: -50, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    // 2️⃣ Stagger animation for links (after navbar animation finishes)
    tl.current.fromTo(
      linksRef.current, // Target all <a> elements
      { x: 50, opacity: 0 }, // Start off-screen to the left
      { x: 15, opacity: 1, duration: 0.3, stagger: 0.1, 
        // onComplete: () => {
        //     linksRef.current.forEach(link => {
        //       link.style.textDecorationLine = "underline"; 
        //     });
        //   }
       }, 
      // Staggered effect
      "-=0.3" // Overlap slightly with navbar animation for a smoother transition
    );

  }, []); // Runs only once when mounted

  useEffect(() => {
    if (tl.current) {
      isOpen ? tl.current.play() : tl.current.reverse();
    }
  }, [isOpen]); // Runs whenever isOpen changes

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    
    if (target) {
      const offset = 100; // Offset 100px above the section
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile after clicking
    }
  };
  return (
    <div  className="h-20 w-full flex justify-center items-center rounded-full md:sticky fixed   top-0 z-50 gruppo-regular scroll-smooth translate-y-3 ">
      <nav  className=" text-white backdrop-blur-xl bg-white/10  fixed w-[90%] lg:w-[75%] h-[60px]  flex justify-center items-center font-extrabold rounded-full">
        <div className="max-w-auto w-[95%] lg:w-[98%] h-[80%] mx-auto pr-2 flex justify-end md:justify-center items-center bg-[#1c0b34]/60    rounded-full">
          {/* Logo */}
       

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6  text-[#fff2af]   text-xl items-center uppercase">
          <a className="hover:text-zinc-200" href="#Home" onClick={(e) => handleSmoothScroll(e, "#Home")}>Home</a>
          <a className="hover:text-zinc-200" href="#About" onClick={(e) => handleSmoothScroll(e, "#About")}>About</a>
          {/* <a className="hover:text-zinc-200" href="#Stats" onClick={(e) => handleSmoothScroll(e, "#Stats")}>Stats</a> */}
          <a className="hover:text-zinc-200" href="#Experience" onClick={(e) => handleSmoothScroll(e, "#Experience")}>Experience</a>
          <a href="#" className=" flex items-center  ">
            <img src={Logo} alt="" className=" w-8 "  />
          </a>
          <a className="hover:text-zinc-200" href="#Tech" onClick={(e) => handleSmoothScroll(e, "#Tech")}>Tech</a>
          <a className="hover:text-zinc-200" href="#Projects" onClick={(e) => handleSmoothScroll(e, "#Projects")}>Projects</a>
          <a className="hover:text-zinc-200" href="#Contct" onClick={(e) => handleSmoothScroll(e, "#Contact")}>Contact</a>
          </div>

          {/* Mobile Menu Button */}
          
          <div className=" md:hidden flex justify-between items-center w-full scroll-smooth">
            <a href="#">
            <img src={logo3} alt=""  className=" w-32 opacity-85 cursor-pointer"/>
            </a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none cursor-pointer text-[#a9691b]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
  ref={menuRef}
  className="md:hidden absolute top-16 right-0 w-5/12 sm:w-4/12  h-auto bg-[#E2DFD0] text-start flex flex-col  text-purple-950 uppercase rounded-lg"
>
<a ref={(el) => (linksRef.current[1] = el)} href="#Home" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]" onClick={(e) => handleSmoothScroll(e, "#Home")}>Home</a>
  <a ref={(el) => (linksRef.current[0] = el)} href="#About" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]" onClick={(e) => handleSmoothScroll(e, "#About")}>About</a>
  {/* <a ref={(el) => (linksRef.current[1] = el)} href="#Stats" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]" onClick={(e) => handleSmoothScroll(e, "#Stats")}>Stats</a> */}
  <a ref={(el) => (linksRef.current[2] = el)} href="#Experience" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]" onClick={(e) => handleSmoothScroll(e, "#Experience")}>Experience</a>
  <a ref={(el) => (linksRef.current[3] = el)} href="#Tech" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]" onClick={(e) => handleSmoothScroll(e, "#Tech")}>Tech</a>
  <a ref={(el) => (linksRef.current[4] = el)} href="#Projects" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]" onClick={(e) => handleSmoothScroll(e, "#Projects")}> Projects</a>
  <a ref={(el) => (linksRef.current[5] = el)} href="#Contact" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]" onClick={(e) => handleSmoothScroll(e, "#Contact")}>Contact</a>
</div>

      </nav>
    </div>
  );
};

export default Navbar;
