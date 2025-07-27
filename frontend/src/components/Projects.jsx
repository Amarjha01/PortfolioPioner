import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Electramart from '../assets/Electramart(project).png';
import InfentCareCompass from '../assets/project/InfentCareCompass.png';
import PortfolioPioner2 from '../assets/PortfolioPioner2(project).png';
import WonderWhizCollege from '../assets/WonderWhizCollege(project).png';
import nifaOverseas from '../assets/project/nifaOverseas.png';
import viewOnGithub from '../assets/viewongithub.svg'
import udemyGo from '../assets/project/udemyGo.png'
import radical_unlearning from '../assets/project/radical_unlearning.png'
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample project data with placeholder images
  
  const ProjectData = [
        {
      img: InfentCareCompass, 
      projectTitle: "InfentCare Compass", 
      description: "A MERN stack web application designed to assist new parents and caregivers with infant health tracking and guidance.", 
      techUsed: ["MongoDB", "Express", "React.js", "Node.js", "Tailwind CSS", "Zego Cloud"], 
      liveLink: 'https://infantcarecompass.live/', 
      githubView: 'https://github.com/Amarjha01/InfantCareCompass'
    },
    {
      img: radical_unlearning, 
      projectTitle: "Radical Unlearning", 
      description: "An educational platform designed to support unschooling parents, homeschoolers, and self-directed learners. It offers access to a network of trained coaches, learning resources, and community collaboration tools.", 
      techUsed: ["React.js", "Tailwind CSS", "GSAP", "Node.js", "Express.js", "Redux Toolkit", "MongoDB", "DigitalOcean", "Nginx", "Stripe"], 
      liveLink: 'https://dev.radical-unlearning.com/', 
      githubView: 'https://github.com/Amarjha01/radicalunlearning'
    },
    {
      img: udemyGo, 
      projectTitle: "UdemyGo", 
      description: "An education platform website that showcases university-accredited online degree and diploma programs, offering easy navigation, EMI options, and mentorship support for learners.", 
      techUsed: ["React.js", "Tailwind CSS", "Vercel"], 
      liveLink: 'https://udemygo.com/', 
      githubView: 'https://github.com/Amarjha01/udemygo'
    },
    {
      img: Electramart, 
      projectTitle: "Electramart", 
      description: "A full-stack e-commerce web application built using the MERN stack. It features user authentication with JWT tokens, allowing secure login and protected routes with cart management.", 
      techUsed: ["MongoDB", "Express", "React.js", "Node.js", "Tailwind CSS", "AWS"], 
      liveLink: '', 
      githubView: 'https://github.com/Amarjha01/E-commerce'
    },
    {
      img: nifaOverseas, 
      projectTitle: "Nifa Overseas", 
      description: "A corporate website developed using React.js and Tailwind CSS. It presents company details, services, and contact information in a clean, responsive layout.", 
      techUsed: ["React.js", "GSAP", "Tailwind CSS", "Hostinger"], 
      liveLink: 'https://nifaoverseas.com/', 
      githubView: 'https://github.com/Amarjha01/NIfaOverseas-new'
    },
    {
      img: PortfolioPioner2, 
      projectTitle: "PortfolioPioneer", 
      description: "A personal portfolio website developed using React.js and Tailwind CSS. Features a clean, responsive single-page layout showcasing projects and skills.", 
      techUsed: ["React.js", "Tailwind CSS", "GSAP", "gh-pages"], 
      liveLink: 'https://amarjha.tech/', 
      githubView: 'https://github.com/Amarjha01/PortfolioPioner'
    },

  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % ProjectData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + ProjectData.length) % ProjectData.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id='Projects' className='py-16 px-4  overflow-hidden min-h-screen '>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl anta-800 text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Featured <span className=' text-purple-600'>Projects</span>
          </h2>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto gruppo-900'>
            <span className=' text-purple-600'>Explore</span> my latest <span className=' text-purple-00'>work</span> and side <span className=' text-purple-30'>projects</span>
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className='hidden lg:grid lg:grid-cols-3 gap-8'>
          {ProjectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className='lg:hidden relative '>
          <div className=''>
            <div 
              className='flex transition-transform duration-300 ease-in-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {ProjectData.map((project, index) => (
                <div key={index} className='w-full flex-shrink-0 px-4'>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevProject}
            className='absolute -left-3 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors z-10'
            aria-label="Previous project"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={nextProject}
            className='absolute -right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors z-10'
            aria-label="Next project"
          >
            <FaChevronRight />
          </button>

          {/* Dots Indicator */}
          <div className='flex justify-center mt-6 space-x-2'>
            {ProjectData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-500' : 'bg-gray-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tablet Horizontal Scroll */}
        <div className='hidden md:flex lg:hidden overflow-x-auto space-x-6 pb-4 scrollbar-hide'>
          {ProjectData.map((project, index) => (
            <div key={index} className='flex-shrink-0 w-80'>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className= ' overflow-hidden backdrop-blur-sm rounded-xl border  shadow-2xl shadow-purple-500/20 transition-all duration-300 hover:scale-105 border-purple-500/50 flex flex-col h-full'>
      {/* Image Container */}
      <div className='relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-1'>
        <div className='aspect-video rounded-lg  bg-gray-700/30'>
          {project.liveLink ? (
            <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
              <img 
                src={project.img} 
                alt={project.projectTitle} 
                className='w-full h-full object-cover hover:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100 rounded-md' 
              />
            </a>
          ) : (
            <img 
              src={project.img} 
              alt={project.projectTitle} 
              className='w-full h-full object-cover opacity-90 rounded-md' 
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className='p-6 flex flex-col flex-grow'>
        {/* Title and Description */}
        <div className='mb-4'>
          <h3 className='text-xl anta-800 text-white mb-2 hover:text-purple-300 transition-colors'>
            {project.projectTitle}
          </h3>
          <p className='text-gray-300 leading-relaxed text-sm gruppo-900'>
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className='mb-6 flex-grow'>
          <div className='flex flex-wrap gap-2'>
            {project.techUsed.map((tech, i) => (
              <span 
                key={i} 
                className=' text-purple-200 px-3 py-1 rounded-full text-xs gruppo-regular border  bg-purple-600/20 border-purple-500/50 transition-colors'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex justify-between items-center pt-4 border-t border-gray-700/50'>
          {project.liveLink ? (
            <a 
              href={project.liveLink} 
              target='_blank' 
              rel='noopener noreferrer' 
              className='flex items-center space-x-2 text-purple-300 hover:text-purple-200 gruppo-regular transition-colors group'
            >
              <span>Live Demo</span>
              <FaExternalLinkAlt className='text-sm group-hover:translate-x-1 transition-transform' />
            </a>
          ) : (
            <span className='text-gray-500 gruppo-regular'>Coming Soon</span>
          )}
          
          <a 
            href={project.githubView} 
            target='_blank' 
            rel='noopener noreferrer'
            className='flex items-center space-x-2 '
          >
            <div className='w-[190px] h-[40px] bg-purple-700 rounded-xl  flex justify-center items-center'>
              <div className='w-[185px] h-[35px] bg-white rounded-xl flex justify-between items-center relative'>
                <div className=' translate-x-1 text-2xl'>
                  <FaGithub />
                </div>
                <div className=' gruppo-700 text-lg text-shadow-lg'>
                  <span>View On</span>
                </div>
                <div className=' bg-black w-[80px] h-[35px] rounded-r-xl font-extrabold text-purple-800 flex justify-center items-center'>
                  <span>
                    GitHub
                  </span>
                </div>
              </div>
            </div>
            {/* <span className='text-sm gruppo-regular'>Code</span> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;