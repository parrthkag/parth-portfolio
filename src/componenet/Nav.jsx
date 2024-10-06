import React from 'react'
import logo from '../assets/logo1.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'


export const Nav = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-40 text-cyan-50' src={logo} alt="logo" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4  text-2xl'>
    <a href='https://www.linkedin.com/in/parth-kag1594' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href='https://github.com/parrthkag' target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href='https://x.com/parth_1594' target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
        <a href='https://instagram.com' target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
        {/* <FaSquareXTwitter/>
        <FaInstagram/> */}
    </div>
  </nav>
}
