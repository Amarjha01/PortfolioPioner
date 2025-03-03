import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import Electramart from '../assets/Electramart(project).png';
import PortfolioPioner1 from '../assets/PortfolioPioner1(project).png';
import InfentCareCompass from '../assets/project/InfentCareCompass.png';
import PortfolioPioner2 from '../assets/PortfolioPioner2(project).png';
import WonderWhizCollege from '../assets/WonderWhizCollege(project).png';
import nifaOverseas from '../assets/project/nifaOverseas.png';
import viewOnGithub from '../assets/viewongithub.svg'
// import viewOnGithub from '../assets/cloudinary/viewongithub.svg'
const Projects = () => {

const ProjectData = [

    {img:Electramart, projectTitle:"Electramart", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nisi distinctio quo a saepe dolores est provident.", techUsed:["mongoDb","express","react.js","node.js","tailwind CSS","aws"], liveLink:'https://www.electramart.ninja/' , githubView:'https://github.com/Amarjha01/E-commerce'},

    {img:nifaOverseas, projectTitle:"Nifa Overseas", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nisi distinctio quo a saepe dolores est provident.", techUsed:["react.js","gsap","tailwind CSS","hostinger"], liveLink:'https://nifaoverseas.com/' , githubView:''},

    {img:PortfolioPioner2, projectTitle:"PortfolioPioneer", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nisi distinctio quo a saepe dolores est provident.", techUsed:["react.js","tailwind CSS","gsap","gh-pages"], liveLink:'https://amarjha.tech/' , githubView:'https://github.com/Amarjha01/PortfolioPioner'},

   {img:PortfolioPioner1, projectTitle:"My Portfolio", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nisi distinctio quo a saepe dolores est provident.", techUsed:["react.js","tailwind CSS"], liveLink:'' , githubView:''},

    {img:WonderWhizCollege, projectTitle:"College Portal", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nisi distinctio quo a saepe dolores est provident.", techUsed:["html","css","javaScreapt","node.js","express.js"], liveLink:'' , githubView:''},

    {img:InfentCareCompass, projectTitle:"InfentCare Compass", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nisi distinctio quo a saepe dolores est provident.", techUsed:["mongoDb","express","react.js","node.js","tailwind CSS","zego clowd"], liveLink:'' , githubView:''},
    
   
]

  return (
    <div id='Projects' className=' h-auto my-28 flex justify-center   '>
<div className='h-auto flex  overflow-x-scroll no-scrollbar space-x-6 px-4  '>

{ProjectData.map((project, index) => (
                <div key={index} className='h-auto lg:min-w-96 min-w-80 rounded-lg border border-purple-400 flex flex-col   '>
                    {/* img */}
                    <div className=' min-w-full bg-[#774cb045] rounded-lg p-2'>
                        <img src={project.img} alt={project.projectTitle} className='h-full w-full p-1 rounded-xl hover:transition-transform cursor-pointer opacity-90' />
                    </div>
                    {/* title & des */}
                   <div className='h-80  flex flex-col bg-black rounded-b-lg '>
                   <div className='min-w-full  rounded-b-xl'>
                        <p className='text-white px-3 text-2xl anta-800 '>{project.projectTitle}</p>
                        <p className='text-slate-600 px-3 text-md md:text-lg gruppo-900'>{project.description}</p>
                    </div>
                    {/* tech used */}
                    <div className='p-3 flex flex-wrap gap-1  gruppo-regular'>
                            {project.techUsed.map((tech, i) => (
                                <p key={i} className='bg-[#4b5563] text-[#fff2af] border inline px-3 py-1 rounded-2xl'>{tech}</p>
                            ))}
                            
                    </div>
                    {/* links */}
                   <div className='px-3 h-8  grow flex justify-around items-end  '>
                   <div className='  pb-5  '>
                            <a href={project.liveLink} target='_blank' rel='noopener noreferrer' className='text-purple-300 text-lg font-semibold flex items-center gap-1'>
                                Live Preview <FaExternalLinkAlt className='text-blue-400' />
                            </a>
                    </div>
                    <div className='  pb-5'>
                    <a href={project.githubView} target='_blank' rel='noopener noreferrer'>
                                <img src={viewOnGithub} alt='GitHub' className=' h-6 md:h-7 w-auto' />
                            </a>
                    </div>
                   </div>
                   </div>
                </div>
            ))}
</div>
    </div>
  )
}

export default Projects