import React from 'react'
import { Home, Search, Bell, Mail, User, Bookmark, Ellipsis, MessageCircle } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link"

const LeftSidebar = () => {
  return (
    <div className='w-full bg-black flex flex-col items-start justify-start h-full'>
  <div className='ml-7 mt-2'>
       <div className="my-3">
    <FaXTwitter className="h-8 w-8 font-bold text-white" />
     </div>
      <nav>
          <Link href="/Routes/home" className='flex items-center gap-3 my-5'>
            <Home className="h-6 w-6 text-white font-bold" />
             <span className="text-[20px] font-bold">Home</span>
          </Link>
          <Link href="/Routes/explore" className='flex items-center gap-3 my-5'>
            <Search className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">Explore</span>
          </Link>
          <Link href="/Routes/notification" className='flex items-center gap-3 my-5'>
            <Bell className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">Notifications</span>
          </Link>
          <Link href="/Routes/chat" className='flex items-center gap-3 my-5'>
            <MessageCircle className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">Chat</span>
          </Link>
          <Link href="/Routes/grok" className='flex items-center gap-3 my-5'>
            <Mail className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">Grok</span>
          </Link>
           <Link href="/Routes/history" className='flex items-center gap-3 my-5'>
            <Bookmark className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">History</span>
          </Link>
           <Link href="/Routes/profile" className='flex items-center gap-3 my-5'>
            <User className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">Profile</span>
          </Link>
           <Link href="/more" className='flex items-center gap-3 my-5'>
            <Ellipsis className="h-6 w-6 text-white font-bold"/>
            <span className="text-[20px] font-bold">More</span>
          </Link>
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