import React from 'react'
import SkillsImg from '../assets/Tech.svg'
const Skills = () => {
  return (
    <div id='Tech' className='w-full flex flex-col  items-center'>
      <p className='text-white mb-10 text-2xl anta-800 md:w-[40%] text-center '>I'm currently looking for a <span className='text-purple-600'>MERN stack</span> developer 
      full time job or <span className='text-purple-600'>freelancing</span> project</p>
<div className='w-11/12  h-auto flex justify-center items-center'>

     <img src={SkillsImg} alt="" />
</div>
    </div>
  )
}

export default Skills