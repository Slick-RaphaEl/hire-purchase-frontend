import React from 'react'
import Link from "next/link"
import {FaInstagram} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaPhoneSquare} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/Ai"
function Footer() {
  return (
    <div className=' mt-20 bg-gray-400 h-1/2 w-full flex md:flex-row flex col justify-around items-start p-0'>
     <div className='p-5'>
      
      <p className='text-black-800 font-bold text-3*1 pb-6 p-3 text-lg '>Contact us:</p>

<div className='grid grid-cols-2 gap-y-3 gap-10 pb-5 '>

      <a className='flex cursor-pointer text-black-800 gap-1'><FaInstagram size={30} className=' text-2*1 '></FaInstagram> Instagram</a>
      <a className='flex cursor-pointer text-black-800 gap-1'><FaWhatsapp size={30} className=' text-2*1'></FaWhatsapp> Whatsapp</a>
      <a className='flex cursor-pointer text-black-800 gap-1'><FaFacebook size={30} className=' text-2*1'></FaFacebook> Facebook</a>
      <a className='flex cursor-pointer text-black-800 gap-1'><FaPhoneSquare size={30} className=' text-2*1'></FaPhoneSquare> tele-phone</a>
      <a className='flex cursor-pointer text-black-800 gap-1'><AiOutlineMail  size={30} className=' text-2*1'></AiOutlineMail>Mail</a>
    </div>
    
    </div>
    </div>
  )
}

export default Footer
