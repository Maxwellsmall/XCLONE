import React from 'react'
import { FaHome } from 'react-icons/fa'
import {ListOrdered, Smile, Image,CalendarClock,MapPin,Flag} from "lucide-react"

const Hero = () => {
  return (
    <>
        <div className='flex flex-col items-start justify-center w-full border-b-2 border-b-gray-900'>
           <div className='flex items-center my-3'>
             <div className='h-12 w-12 ml-3 rounded-full bg-gray-500'>
            {/* <img src="" alt="" /> */}
            </div>
        <input type="text" className='py-4 px-5 outline-0' placeholder="What's happening?"/>
           </div>
        <div className='flex items-center justify-between w-[95%] mb-3'>
            <div className='flex gap-3 items-center ml-15'>
                <Image className='h-5 w-5 text-gray-500'/>
                <FaHome className='h-5 w-5 text-gray-500'/>
                <FaHome className='h-5 w-5 text-gray-500'/>
                <ListOrdered className='h-5 w-5 text-gray-500'/>
                <Smile className='h-5 w-5 text-gray-500'/>
                <CalendarClock className='h-5 w-5 text-gray-500'/>
                <MapPin className='h-5 w-5 text-gray-500'/>
                <Flag className='h-5 w-5 text-gray-500'/>
            </div>
            <button className='py-2 px-5 rounded-full cursor-pointer bg-gray-500 text-black'>Post</button>
        </div>
        </div>
    </>
  )
}

export default Hero