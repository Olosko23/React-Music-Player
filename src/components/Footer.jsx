import React from 'react'
import { CgMusic } from 'react-icons/cg'
import {BsDiscord, BsInstagram, BsTwitter, BsWhatsapp} from 'react-icons/bs';
const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-[60px] flex justify-between py-4 px-5 bg-[#A8D1D1]">
      <div><CgMusic size={30}/></div>
      <div className="flex gap-4">
        <p className="font-medium">Get in Touch</p>
        <BsTwitter className="cursor-pointer hover:scale-105" size={25}/>
        <BsInstagram className="cursor-pointer hover:scale-105" size={25}/>
        <BsWhatsapp className="cursor-pointer hover:scale-105" size={25}/>
        <BsDiscord className="cursor-pointer hover:scale-105" size={25}/>
      </div>
      <div>Avodal Streaming &copy; 2023</div>
    </div>
  )
}

export default Footer
