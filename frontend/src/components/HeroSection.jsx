import React ,{useState} from 'react'
import MyImg from '../assets/MyImg.svg'
import popcornGif from '../assets/popcorn.gif'
import { p } from 'maath/dist/misc-19a3ec46.esm';
import { IoClose } from "react-icons/io5";
const HeroSection = () => {
  const [showResume , setShowResume] = useState(false);

  const handleResume = ()=>{
    setShowResume(true);
  }
  const handleResumeClose = ()=>{
    setShowResume(false);
  }

  return (
    <div className=' '>
      
      <div className='h-[200px] flex justify-center items-center py-4'>
        <img src={MyImg} alt="" className='h-full w-auto' />
        </div>
      <div className='animate-bounce text-white font-bold text-7xl py-4 text-center '>Amar Jha!</div>
      <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            I do Code &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
          <img
            src={popcornGif}
            height={50}
            width={50}
           
          />
        </div>
      <div className='flex justify-center py-4'>
        <p className='  text-lg w-11/12 lg:w-2/4 text-white text-center'>
        Passionate Software Engineer with a focus on React Native development, dedicated to crafting elegant and user-friendly mobile applications.
        </p>
      </div>


      <div className="flex justify-center py-4">
    <div className="w-28 h-14 flex justify-center relative items-center rounded-3xl bg-black text-white text-center cursor-pointer Resume ">
     <button className=''onClick={handleResume}> 
      Resume 
      </button>
     
    {
    showResume && <div className='h-auto w-[400px] lg:w-[800px] absolute bg-black z-50 p-2 rounded-xl cursor-default '>
      <div className='flex justify-end'>
        <IoClose className='text-2xl cursor-pointer' onClick={handleResumeClose} />
      </div>
      <div className=' h-full w-full p-4 '>
       <div className='flex flex-col items-center'>
       <div className='h-12 w-72'>
       <button className='custome-downloadBtn h-full w-full'>Download full resume</button>
       </div>
        <span>Resume preview</span>
        <span>Amar Jha</span>
       </div>
        <p className='text-sm'>Muzaffarpur Bihar | <a href="tel:+91 9199569397" className='text-[#2f5596]'>9199569397</a>  <a href="mailto:amarjha880@gmail.com" className='text-[#2f5596]' ></a> | <a href="https://www.linkedin.com/in/amarjha01/" className='text-[#2f5596]'>Linkedin</a> | <a href="https://github.com/Amarjha01/ " className='text-[#2f5596]'>GitHub</a> </p>
        <div className='border'></div>
        <span className='text-start block text-2xl py-2 text-[#2f5596] font-bold'>SKILLS</span>
        <div className='text-start'>
        <p><span className='font-semibold'>BACKEND DEVELOPMENT -</span> Node.js, Express.js</p>
        <p><span className='font-semibold'>FRONT END DEVELOPMENT -</span> React.js, HTML, JavaScript,  CSS, Tailwind CSS , Redux toolkit</p>
        <p><span className='font-semibold'>DATABASE -</span> MongoDB</p>
        <p><span className='font-semibold'>MISCELLANEOUS -</span> Amazon AWS, Docker, GitHub Action</p>
        <p><span className='font-semibold'>VERSION CONTROL -</span> GitHub</p>
        <span className='text-start block text-2xl py-2 text-[#2f5596] font-bold'>EDUCATION</span>
        <p className=' font-semibold'>Phonics Group of Institutions Expected <span className='text-[#2f5596]'>June 2025</span></p>
        <p>Bachelor of technology (B.Tech) in Computer Science Engineering Roorkee, Uttarakhand</p>
        <p className='font-semibold'>Roorkee College of Engineering <span className='text-[#2f5596]'>July 2020</span></p>
        <p>Diploma in Mechanical Engineering Roorkee, Uttarakhand</p>
        <span className='text-start block text-2xl py-2 text-[#2f5596] font-bold'>WORK EXPERIENCE</span>
        <p className=' font-bold '>Contributor at GirlScript Summer Of Code October 1 – October 31</p>
        <p className='font-semibold'>1 month Open-Source program</p>
        <ul className=''>
          <li>● Coordinated with team members to troubleshoot bugs, refine functionality, and enhance user
            interactions.
            </li>
            <li>● Utilized MERN stack, Tailwind CSS, and Firebase to drive project outcomes.</li>
            <li>● Enhanced version control skills in Git and GitHub through consistent code integration, merging, and
            coordination with maintainers.</li>
        </ul>
        </div>
      </div>
    </div>
    }
     
    </div>
</div>



      
      </div>
  )
}

export default HeroSection