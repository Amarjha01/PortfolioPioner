import React from 'react'
import GSsOC_logo from '../assets/GSsOC_logo.png'
import AL_logo from '../assets/AshokLeyland_logo.png'
import TataMotors_logo from '../assets/TataMotors_logo.png'
import { IoDocumentTextOutline } from 'react-icons/io5';

const Experience = () => {
  const experienceData = [
    { img: 'https://febtech.in/logo.png', companyName: "FebTech IT Solutions Pvt. Ltd.", role: "Full Stack Developer Intern", certificateLink: "/febtech_offerlater.jpg" },
    { img: GSsOC_logo, companyName: "GirlScript Foundation", role: "OpenSource Contributor", certificateLink: "https://rb.gy/t7azag" },
    { img: 'https://febtech.in/logo.png', companyName: "FebTech IT Solutions Pvt. Ltd.", role: "Full Stack Developer Intern", certificateLink: "/febtech_offerlater.jpg" },
    { img: GSsOC_logo, companyName: "GirlScript Foundation", role: "OpenSource Contributor", certificateLink: "https://rb.gy/t7azag" },
    { img: AL_logo, companyName: "Ashok Leyland", role: "Associate Trainee", certificateLink: "/ashol_layland_offer_later.jpg" },
    { img: TataMotors_logo, companyName: "Tata Motors", role: "Trainee", certificateLink: "https://rb.gy/r5ak67" },
  ];

  return (
    <div id='Experience' className='flex justify-center items-center py-14 w-100vw'>
      <div className='oval absolute blur-3xl'></div>
      <div className='h-auto grid grid-cols-2 grid-rows-2 gap-4 z-20 w-11/12 lg:w-3/5'>
      {experienceData.map((data, index) => {
      const isMobile = window.innerWidth < 768;

  const CardContent = (
    <div
      key={index}
      className='group flex gap-3 items-center p-3 lg:p-6 bg-[linear-gradient(315deg,_rgba(22,3,48,1)_63%,_rgba(106,80,143,1)_100%)] rounded-xl border-t-4 bg-black text-white border-[#6d28d9] shadow-lg shadow-purple-500/20 transition-all duration-300 scale-[1.02] backdrop-blur-sm'
    >
      <div className='w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 rounded-lg overflow-hidden border border-purple-400/30 group-border-purple-400/60 transition-all duration-300'>
        <img
          src={data.img}
          alt={`${data.companyName}-logo`}
          className='h-full w-full object-cover group-scale-110 transition-transform duration-300'
        />
      </div>
      <div className='flex-1 min-w-0'>
        <p className='anta-800 text-sm lg:text-base mb-1 group-text-purple-200 transition-colors duration-300 truncate'>
          {data.companyName}
        </p>
        <p className='gruppo-regular text-xs lg:text-sm text-purple-200 mb-2 opacity-90'>
          {data.role}
        </p>

        {/* View Certificate Button for desktop */}
        {data.certificateLink ? (
          <a
            href={data.certificateLink}
            target='_blank'
            rel='noopener noreferrer'
            className='hidden md:inline-block'
          >
            <button className='mt-1 px-3 py-1.5 text-xs bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg anta-regular transition-all duration-300 shadow-md shadow-purple-500/30 transform -translate-y-0.5'>
              View Certificate
            </button>
          </a>
        ) : (
          <button className='mt-1 px-3 py-1.5 text-xs bg-gray-600/70 rounded-lg cursor-not-allowed catamaran-400 opacity-60'>
            No Certificate
          </button>
        )}
      </div>

      {/* Subtle glow */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>

      {/* Accent dot */}
      <div className='absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse'></div>
    </div>
  );

  return isMobile ? (
    <a
      key={index}
      href={data.certificateLink}
      target='_blank'
      rel='noopener noreferrer'
    >
      {CardContent}
    </a>
  ) : (
    <div key={index}>{CardContent}</div>
  );
})}

      </div>
    </div>
  );
};

export default Experience;