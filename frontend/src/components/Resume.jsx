import resume from '../assets/resume/amarjha_resume_2MARCH.pdf'
import { TiDocumentText } from "react-icons/ti";
const Resume = () => {
  return (
    <div className=' uppercase gruppo-regular  z-40  fixed bottom-14 right-1 [writing-mode:vertical-rl] rounded-lg text-white flex items-center justify-center h-24 text-sm w-8 bg-yellow-600 border hover:text-green-500'>
         <a href={resume} download={resume} className='  flex items-center space-y-1 '>
            <p >Resume</p> 
            <TiDocumentText className=' rotate-90 '/>
            </a>
    </div>
  )
}

export default Resume