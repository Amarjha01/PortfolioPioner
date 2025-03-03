import React from 'react'
import GSsOC_logo from '../assets/GSsOC_logo.png'
import AL_logo from '../assets/AshokLeyland_logo.png'
import TataMotors_logo from '../assets/TataMotors_logo.png'

const Experience = () => {

  const experienceData = [
    { img: 'https://febtech.in/logo.png', companyName: "FebTech IT Solutions Pvt. Ltd.", role: "Full Stack Developer Intern", certificateLink: "" },
    { img: GSsOC_logo, companyName: "GirlScript Foundation", role: "OpenSource Contributor", certificateLink: "https://rb.gy/r5ak67" },
    { img: AL_logo, companyName: "Ashok Leyland", role: "Associate Trainee", certificateLink: "" },
    { img: TataMotors_logo, companyName: "Tata Motors", role: "Trainee", certificateLink: "https://rb.gy/t7azag" },
  ];

  return (
    <div id='Experience' className='flex justify-center items-center py-14 w-100vw'>
      <div className='oval absolute blur-3xl'></div>
      <div className='h-auto grid grid-cols-2 grid-rows-2 gap-3 z-20 w-11/12 lg:w-3/5'>

        {experienceData.map((data, index) => (
          <div key={index} className='flex gap-2 items-center p-2 lg:p-6 bg-[linear-gradient(315deg,_rgba(22,3,48,1)_63%,_rgba(106,80,143,1)_100%)] rounded-lg border-t-4 border-[#4e228c] bg-black text-white'>
            <div className='w-10 h-10'>
              <img src={data.img} alt={`${data.companyName}-logo`} className='h-full w-full object-cover' />
            </div>
            <div>
              <p className='anta-800'>{data.companyName}</p>
              <p className='gruppo-regular'>{data.role}</p>
              {data.certificateLink ? (
                <a href={data.certificateLink} target="_blank" rel="noopener noreferrer">
                  <button className='mt-2 px-2 py-1 text-xs bg-purple-600 rounded-lg anta-regular'>View Certificate</button>
                </a>
              ) : (
                <button className='mt-2 px-2 py-1 text-xs bg-gray-600 rounded-lg cursor-not-allowed catamaran-400'>No Certificate</button>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Experience;
