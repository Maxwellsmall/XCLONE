"use client"
import { Search, Settings } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='w-full lex items-center justify-center'>
      <div className="w-full flex items-center justify-between my-3 px-3 ">
        <div className={`${isActive ? "outline-2 outline-blue-500" : "outline-2 outline-gray-500"}
        flex items-center justify-start rounded-full px-2 gap-1 mx-5 w-full py-2 outline-2 outline-gray-500` 
        }>
        <Search className='w-[20px] h-[20px] text-gray-500'/>
        <input type="text" className='outline-0' placeholder='search' />
        </div>
        <Settings/>
      </div>
      </div>
  )
}

export default page