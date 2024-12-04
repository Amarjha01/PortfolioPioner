import React from 'react'
import './CustomeComponents.css'
import Logo from '../assets/Logo.svg'
const NavBar = () => {
  return (
    
        <div className=' h-14 w-full top-0 sticky  CustomeNavbarbgColor border-b border-transparent flex justify-around items-center z-50'>
            <div className='h-full p-3'>
                <img src={Logo} alt="" className='h-full' />
            </div>
            <div className=''>
            <ul className='w-96 text-white flex justify-around cursor-pointer '>
                <li className='cursor-pointer'>About</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
            </div>
        </div>
    
  )
}

export default NavBar