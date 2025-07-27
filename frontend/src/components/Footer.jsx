import { FaDiscord, FaGithub , FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div id="Contact" className="flex flex-col items-center text-white gap-8">
      <p className=" py-1 px-4 bg-purple-950 rounded-xl bg-opacity-60 border ">Get in touch</p>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/Amarjha01/"><FaGithub className=" text-3xl" /></a>
        <a href="https://www.linkedin.com/in/amarjha01/"><FaLinkedin className=" text-3xl" /></a>
        <a href="mailto:contact@amarjha.dev"><SiGmail className=" text-3xl" /></a>
        <a href="https://twitter.com/amarjha01"><FaXTwitter className=" text-3xl" /></a>
        <a href="https://www.instagram.com/amarjha.dev/"><FaInstagram className="text-3xl" /></a>
        <a href="https://discord.gg/2NCPy5uh"><FaDiscord className=" text-3xl" /></a>
      </div>
      <p className="text-center text-md text-gray-500 pb-5">© 2024 Amar Jha · All rights reserved</p>
    </div>
  )
}

export default Footer