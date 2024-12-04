import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import Electramart from '../assets/Electramart(project).png';
import PortfolioPioner1 from '../assets/PortfolioPioner1(project).png';
import InfentCareCompass from '../assets/InfentCareCompass(project).png';
import PortfolioPioner2 from '../assets/PortfolioPioner2(project).png';
import WonderWhizCollege from '../assets/WonderWhizCollege(project).png';
// import viewOnGithub from '../assets/viewongithub.svg'
import viewOnGithub from '../assets/cloudinary/viewongithub.svg'
const Projects = () => {
  return (
    <div className=' h-auto my-28 flex justify-center   '>
<div className='flex  overflow-x-scroll no-scrollbar space-x-6 px-4 '>
<div className=' h-[550px]  lg:min-w-96 min-w-80 rounded-lg border border-purple-400 '>
    <div className='h-[42%] min-w-full bg-[#774cb045] rounded-t-xl p-2'>
    <img src={Electramart} alt="" className='h-full w-full p-1 rounded-xl hover:transition-transform cursor-pointer opacity-90 ' />
    </div>
    <div className='h-[58%] min-w-full bg-[#160330e9] rounded-b-xl'>
    <p className=" text-white px-3 text-2xl">Electramart</p>
    <p className=' text-slate-600 p-3 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nisi distinctio quo a saepe dolores est provident.</p>
    <div className=' p-3 flex flex-wrap  gap-1'>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>mongoDB</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>express</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>React.js</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>node.js</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>tailwind CSS</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>aws</p>
    </div>
    <div className='px-3 flex justify-between h-auto relative top-16 items-center '>
        <p className='text-purple-300 text-lg font-semibold'>Live preview</p>
        <FaExternalLinkAlt className=' text-blue-400 relative right-2 lg:right-9' />
        <img src={viewOnGithub} alt="" className='h-7 w-auto' />
    </div>
    </div>
</div>

<div className=' h-[550px]  lg:min-w-96 min-w-80 rounded-lg border'>
    <div className='h-[42%] min-w-full bg-[#774cb045] rounded-t-xl p-2'>
    <img src={PortfolioPioner2} alt="" className='h-full w-full p-1 rounded-xl hover:transition-transform cursor-pointer opacity-90' />
    </div>
    <div className='h-[58%] min-w-full bg-[#160330e9] rounded-b-xl'>
    <p className=" text-white px-3 text-2xl">Portfolio Pioner</p>
    <p className=' text-slate-600 p-3 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nisi distinctio quo a saepe dolores est provident.</p>
    <div className=' p-3 flex flex-wrap  gap-1'>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>mongoDB</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>express</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>React.js</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>node.js</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>tailwind CSS</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>aws</p>
    </div>
    <div className='px-3 flex justify-between h-auto relative top-16 items-center '>
        <p className='text-purple-300 text-lg font-semibold'>Live preview</p>
        <FaExternalLinkAlt className=' text-blue-400 relative right-2 lg:right-9' />
        <img src={viewOnGithub} alt="" className='h-7 w-auto' />
    </div>
    </div>
</div>

<div className=' h-[550px]  lg:min-w-96 min-w-80 rounded-lg border border-purple-400'>
    <div className='h-[42%] min-w-full bg-[#774cb045] rounded-t-xl p-2'>
    <img src={PortfolioPioner1} alt="" className='h-full w-full p-1 rounded-xl hover:transition-transform cursor-pointer opacity-90' />
    </div>
    <div className='h-[58%] min-w-full bg-[#160330e9] rounded-b-xl'>
    <p className=" text-white px-3 text-2xl">My portfolio</p>
    <p className=' text-slate-600 p-3 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nisi distinctio quo a saepe dolores est provident.</p>
    <div className=' p-3 flex flex-wrap  gap-1'>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>mongoDB</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>express</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>React.js</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>node.js</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>tailwind CSS</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>aws</p>
    </div>
    <div className='px-3 flex justify-between h-auto relative top-16 items-center '>
        <p className='text-purple-300 text-lg font-semibold'>Live preview</p>
        <FaExternalLinkAlt className=' text-blue-400 relative right-2 lg:right-9' />
        <img src={viewOnGithub} alt="" className='h-7 w-auto' />
    </div>
    </div>
</div>

<div className='h-[550px]  lg:min-w-96 min-w-80 rounded-lg border'>
    <div className='h-[42%] min-w-full bg-[#774cb045] rounded-t-xl p-2'>
    <img src={WonderWhizCollege} alt="" className='h-full w-full p-1 rounded-xl hover:transition-transform cursor-pointer opacity-90' />
    </div>
    <div className='h-[58%] min-w-full bg-[#160330e9] rounded-b-xl'>
    <p className=" text-white px-3 text-2xl">College Portle</p>
    <p className=' text-slate-600 p-3 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nisi distinctio quo a saepe dolores est provident.</p>
    <div className=' p-3 flex flex-wrap  gap-1'>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>mongoDB</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>express</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>React.js</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>node.js</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>tailwind CSS</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>aws</p>
    </div>
    <div className='px-3 flex justify-between h-auto relative top-16 items-center '>
        <p className='text-purple-300 text-lg font-semibold'>Live preview</p>
        <FaExternalLinkAlt className=' text-blue-400 relative right-2 lg:right-9' />
        <img src={viewOnGithub} alt="" className='h-7 w-auto' />
    </div>
    </div>
</div>

<div className=' h-[550px]  lg:min-w-96 min-w-80 rounded-lg border border-purple-400'>
    <div className='h-[42%] min-w-full bg-[#774cb045] rounded-t-xl p-2'>
    <img src={InfentCareCompass} alt="" className='h-full w-full p-1 rounded-xl hover:transition-transform cursor-pointer opacity-90' />
    </div>
    <div className='h-[58%] min-w-full bg-[#160330e9] rounded-b-xl'>
    <p className=" text-white px-3 text-2xl">InfentCare Compass</p>
    <p className=' text-slate-600 p-3 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit nisi distinctio quo a saepe dolores est provident.</p>
    <div className=' p-3 flex flex-wrap  gap-1'>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>mongoDB</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>express</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>React.js</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>node.js</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>tailwind CSS</p>
<p className=' bg-slate-600 inline px-3 py-1 rounded-2xl'>aws</p>
    </div>
    <div className='px-3 flex justify-between h-auto relative top-16 items-center '>
        <p className='text-purple-300 text-lg font-semibold'>Live preview</p>
        <FaExternalLinkAlt className=' text-blue-400 relative right-2 lg:right-9' />
        <img src={viewOnGithub} alt="" className='h-7 w-auto' />
    </div>
    </div>
</div>

</div>
    </div>
  )
}

export default Projects