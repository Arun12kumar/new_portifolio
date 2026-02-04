import React from 'react'
import ButtonV1 from './ButtonV1'

const Navbar = () => {
  return (
    <div className='flex w-full h-[12vh] font-semibold items-center justify-between px-20 py-2'>
        <div>
            <img src="./icons/LOGO.png" alt="logo" />
        </div>
        <ul className='flex flex-row gap-10 text-textSecondary text-lg'>
            <li>Home</li> 
            <li>Services</li> 
            <li>About</li> 
            <li>Projects</li> 
            <li>Testimonials</li> 
        </ul>
        <ButtonV1 title="Contact me" bgcolor="bg-primary" textColour="text-white"/>
    </div>
  )
}

export default Navbar