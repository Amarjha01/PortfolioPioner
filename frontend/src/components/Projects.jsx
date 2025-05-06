import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import Electramart from '../assets/Electramart(project).png';
import InfentCareCompass from '../assets/project/InfentCareCompass.png';
import PortfolioPioner2 from '../assets/PortfolioPioner2(project).png';
import WonderWhizCollege from '../assets/WonderWhizCollege(project).png';
import nifaOverseas from '../assets/project/nifaOverseas.png';
import viewOnGithub from '../assets/viewongithub.svg'
import udemyGo from '../assets/project/udemyGo.png'
import radical_unlearning from '../assets/project/radical_unlearning.png'
// import viewOnGithub from '../assets/cloudinary/viewongithub.svg'
const Projects = () => {

const ProjectData = [

    {img:radical_unlearning, projectTitle:"Radical Unlearning", description:"is an educational platform designed to support unschooling parents, homeschoolers, and self-directed learners. It offers access to a network of trained coaches, learning resources, and community collaboration tools, all centered around a unique framework that promotes open, enjoyable, and effective learning.", techUsed:["react.js","tailwind CSS","gsap", 'node.js' , 'express.js' ,  'redux toolkit', 'mongoDb','digitalOcean', 'nginx' , 'stripe'], liveLink:'https://dev.radical-unlearning.com/' , githubView:'https://github.com/Amarjha01/radicalunlearning'},
    
    {img:udemyGo, projectTitle:"UdemyGo", description:"is an education platform website that showcases university-accredited online degree and diploma programs, offering easy navigation, EMI options, and mentorship support for learners.", techUsed:["react.js","tailwind CSS","vercel"], liveLink:'https://udemygo.com/' , githubView:'https://github.com/Amarjha01/udemygo'},

    {img:Electramart, projectTitle:"Electramart", description:"is a full-stack e-commerce web application built using the MERN stack. It features user authentication with JWT tokens, allowing secure login and protected routes. The platform supports product browsing, cart management, and admin controls, offering a smooth shopping experience.", techUsed:["mongoDb","express","react.js","node.js","tailwind CSS","aws"], liveLink:'https://www.electramart.ninja/' , githubView:'https://github.com/Amarjha01/E-commerce'},

    {img:nifaOverseas, projectTitle:"Nifa Overseas", description:"is a corporate website developed using React.js and Tailwind CSS. It presents company details, services, and contact information in a clean, responsive single-page layout designed for a professional online presence.", techUsed:["react.js","gsap","tailwind CSS","hostinger"], liveLink:'https://nifaoverseas.com/' , githubView:'https://github.com/Amarjha01/NIfaOverseas-new'},

    {img:PortfolioPioner2, projectTitle:"PortfolioPioneer", description:"is a personal portfolio website developed using React.js and Tailwind CSS. It features a clean, responsive single-page layout that showcases projects, skills, and contact information, providing a professional online presence.", techUsed:["react.js","tailwind CSS","gsap","gh-pages"], liveLink:'https://amarjha.tech/' , githubView:'https://github.com/Amarjha01/PortfolioPioner'},

    {img:InfentCareCompass, projectTitle:"InfentCare Compass", description:" is a MERN stack web application designed to assist new parents and caregivers with infant health tracking and guidance.", techUsed:["mongoDb","express","react.js","node.js","tailwind CSS","zego clowd"], liveLink:'' , githubView:'https://github.com/Amarjha01/InfantCareCompass'},
    
   
]

  return (
    <div id='Projects' className=' my-28 flex justify-cente '>
<div className='min-h-fit flex  overflow-x-scroll overflow-y-hidden  space-x-6 px-4 '>

{ProjectData.map((project, index) => (
  <div key={index} className='relative flex flex-col justify-between h-full lg:min-w-96 min-w-80 rounded-lg border border-purple-400'>
  {/* Image */}
  <div className='min-w-full bg-[#774cb045] rounded-lg p-2'>
    <a href={project.liveLink} target='_blank'>
    <img src={project.img} alt={project.projectTitle} className='h-full w-full p-1 rounded-xl hover:transition-transform cursor-pointer opacity-90' />
    </a>
  </div>

  {/* Text & tech used */}
  <div className='flex flex-col grow'>
    <div className='min-h-2 min-w-full'>
      <p className='text-white px-3 text-2xl anta-800'>{project.projectTitle}</p>
      <p className='text-slate-600 px-3 text-md md:text-lg gruppo-900'>{project.description}</p>
    </div>
    <div className='p-3 flex flex-wrap gap-1 gruppo-regular'>
      {project.techUsed.map((tech, i) => (
        <p key={i} className='bg-[#4b5563] text-[#fff2af] border inline px-3 py-1 rounded-2xl'>{tech}</p>
      ))}
    </div>
  </div>

  {/* Links */}
  <div className='px-3 py-4  flex justify-around items-end'>
    <a href={project.liveLink} target='_blank' rel='noopener noreferrer' className='text-purple-300 text-lg font-semibold flex items-center gap-1'>
      Live Preview <FaExternalLinkAlt className='text-blue-400' />
    </a>
    <a href={project.githubView} target='_blank' rel='noopener noreferrer'>
      <img src={viewOnGithub} alt='GitHub' className='h-6 md:h-7 w-auto' />
    </a>
  </div>
</div>

            ))}
</div>
    </div>
  )
}

export default Projects