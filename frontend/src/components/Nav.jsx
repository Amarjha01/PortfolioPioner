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
      { x: 15, opacity: 1, duration: 0.3, stagger: 0.2, 
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

  return (
    <div className="h-16 w-full md:sticky fixed  backdrop-blur-xl  top-0 z-40 gruppo-regular  ">
      <nav className=" text-white  p-4 shadow-md fixed w-full h-16  flex justify-center font-extrabold">
        <div className="max-w-auto w-[95%] h-full mx-auto px-3 flex justify-end md:justify-center items-center">
          {/* Logo */}
       

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6  text-[#FFF2AF]   text-xl items-center uppercase">
          <a className="hover:text-zinc-200" href="#About">About</a>
          <a className="hover:text-zinc-200" href="#Stats">Stats</a>
          <a className="hover:text-zinc-200" href="#Experience">Experience</a>
          <a href="#" className=" flex items-center  ">
            <img src={Logo} alt="" className=" w-8 "  />
          </a>
          <a className="hover:text-zinc-200" href="#Tech">Tech</a>
          <a className="hover:text-zinc-200" href="#Projects">Projects</a>
          <a className="hover:text-zinc-200" href="#Contct">Contact</a>
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
  className="md:hidden absolute top-16 right-0 w-5/12 sm:w-4/12  h-auto bg-[#E2DFD0] text-start flex flex-col text-purple-950 uppercase rounded-lg"
>
  <a ref={(el) => (linksRef.current[0] = el)} href="#About" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]">About</a>
  <a ref={(el) => (linksRef.current[1] = el)} href="#Stats" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]">Stats</a>
  <a ref={(el) => (linksRef.current[2] = el)} href="#Experience" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]">Experience</a>
  <a ref={(el) => (linksRef.current[3] = el)} href="#Tech" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]">Tech</a>
  <a ref={(el) => (linksRef.current[4] = el)} href="#Projects" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]">Projects</a>
  <a ref={(el) => (linksRef.current[5] = el)} href="#Contact" className="block p-2 text-lg sm:text-base xs:text-sm hover:text-[#a9691b]">Contact</a>
</div>

      </nav>
    </div>
  );
};

export default Navbar;
