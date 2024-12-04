import React from 'react'
import GSsOC_logo from '../assets/GSsOC_logo.png'
import AL_logo from '../assets/AshokLeyland_logo.png'
import TataMotors_logo from '../assets/TataMotors_logo.png'
import { CgUnavailable } from "react-icons/cg";
const Experience = () => {
  return (
    <div className=' flex justify-center items-center py-14 w-100vw'>
        <div className='oval absolute  blur-3xl'>
        </div>
        <div className='h-auto grid grid-cols-2 grid-rows-2 gap-3 z-20 w-11/12 lg:w-2/4 '>
  <div className='flex gap-2 items-center p-2 lg:p-6 bg-[linear-gradient(315deg,_rgba(22,3,48,1)_63%,_rgba(106,80,143,1)_100%)] rounded-lg border-t-4  border-[#4e228c]  bg-black text-white'>
    <div>
      <div className='w-10 h-10 '>
        <img src={GSsOC_logo} alt="GSsOC-logo" className='h-full w-full object-cover' />
        </div>
    </div>
    <div>
      <p>GSsOC'24 Extd</p>
      <p>Contributor</p>
      <button>view certificate</button>
    </div>
  </div>
  <div className='flex gap-2 items-center p-2 lg:p-6 bg-[radial-gradient(circle,_rgba(49,17,94,1)_0%,_rgba(27,9,51,1)_100%)]  rounded-lg border-t-4  border-[#4e228c]  bg-black text-white'>
    <div>
    <div className='w-10 h-10 '>
        <img src={AL_logo} alt="" className='h-full w-full object-cover' />
        </div>
    </div>
    <div>
      <p>Ashok Leyland</p>
      <p>Associate Traine</p>
      <button>view Certificate</button>
    </div>
  </div>
  <div className='flex gap-2 items-center p-2 lg:p-6 bg-gradient-to-l from-[#190633] via-[#190633] to-[#473560] rounded-lg border-t-4  border-[#4e228c]  bg-black text-white'>
    <div>
    <div className='w-10 h-10 '>
        <img src={TataMotors_logo} alt="" className='h-full w-full object-cover' />
        </div>
    </div>
    <div>
      <p>Tata Motors</p>
      <p>Traine</p>
      <button>View Certificate</button>
    </div>
  </div>
  <div className='flex gap-2 items-center p-2 lg:p-6 bg-gradient-to-r from-[#190633] via-[#190633] to-[#473560] rounded-lg border-t-4  border-[#4e228c]  bg-black text-white'>
    <div>
    <div className='w-10 h-10 '>
        <CgUnavailable className='h-full w-full object-cover'  />
        </div>
    </div>
    <div>
      <p>------</p>
      <p>-------</p>
      <button>-----------</button>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default Experience