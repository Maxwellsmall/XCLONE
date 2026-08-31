import React from 'react'
import { Home, Search, Bell, Mail, User, Bookmark, Ellipsis } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

const LeftSidebar = () => {
  return (
    <div className='w-full bg-black flex flex-col items-start justify-start h-full'>
  <div className='ml-7 mt-2'>
       <div className="my-3">
    <FaXTwitter className="h-8 w-8 font-bold text-white" />
     </div>
      <nav>
          <a href="" className='flex items-center gap-3 my-5'>
            <Home className="h-6 w-6 text-white font-bold" />
             <span className="text-[20px] font-bold">Home</span>
          </a>
          <a href="" className='flex items-center gap-3 my-5'>
            <Search className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">Explore</span>
          </a>
          <a href="" className='flex items-center gap-3 my-5'>
            <Bell className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">Notifications</span>
          </a>
          <a href="" className='flex items-center gap-3 my-5'>
            <Mail className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">Chat</span>
          </a>
          <a href="" className='flex items-center gap-3 my-5'>
            <Mail className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">Grok</span>
          </a>
           <a href="" className='flex items-center gap-3 my-5'>
            <Bookmark className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">History</span>
          </a>
           <a href="" className='flex items-center gap-3 my-5'>
            <User className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">Profile</span>
          </a>
           <a href="" className='flex items-center gap-3 my-5'>
            <Ellipsis className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">More</span>
          </a>
      </nav>
      <div>
        <button className="px-22 py-3 bg-white rounded-full text-black font-bold">Post</button>
      </div>
           <div className="flex gap-3 items-center mt-14">
        <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center">
          {/* <img src="" alt="" /> */}
        </div>
          <div>
            <h1 className="font-bold text-[14px]">Maxwell Edunfunke</h1>
              <p className="text-gray-500 text-[12px]">@Web3Threat</p>
          </div>
          <a href="" className='flex items-center gap-3 my-5'>
            <Ellipsis className="h-6 w-6 text-white font-bold"/>
          </a>
      </div>
  </div>

 
    </div>
  )
}

export default LeftSidebar