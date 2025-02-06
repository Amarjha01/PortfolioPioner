import { FaDiscord, FaGithub , FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div className="flex flex-col items-center text-white gap-8">
      <p className=" py-1 px-4 bg-purple-950 rounded-xl bg-opacity-60 border ">Get in touch</p>
      <div className="flex justify-center gap-4 pb-10">
        <a href="https://github.com/Amarjha01/"><FaGithub className=" text-3xl" /></a>
        <a href="https://www.linkedin.com/in/amarjha01/"><FaLinkedin className=" text-3xl" /></a>
        <a href="mailto:amarjha880@gmail.com"><SiGmail className=" text-3xl" /></a>
        {/* <a href="mailto:example@example.com?subject=Job%20Application&body=Hello,%0D%0A%0D%0AI%20am%20interested%20in%20applying%20for%20the%20position.%0D%0A%0D%0AThank%20you!&cc=cc@example.com&bcc=bcc@example.com"><SiGmail className=" text-3xl" /></a> */}
        <a href="https://twitter.com/amarjha01"><FaXTwitter className=" text-3xl" /></a>
        <a href="https://www.instagram.com/amarjha.tech/"><FaInstagram className="text-3xl" /></a>
        <a href="https://discord.gg/2NCPy5uh"><FaDiscord className=" text-3xl" /></a>
      </div>
    </div>
  )
}

export default Footer