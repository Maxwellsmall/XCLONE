"use client"

import { ArrowLeft, Settings } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='w-full flex flex-col'>
      <div className="flex justify-between items-center w-full my-3 px-3">
        <div className='flex gap-8 items-center'>
          <ArrowLeft/>
        <h1 className='font-bold text-[22px]'>Follow</h1>
        </div>
        <Settings/>
      </div>
      <div className='flex justify-between items-center mx-3 my-4'>
        <div className='flex justify-center items-center w-[50%] my-3' onClick={() => setIsActive(true)}>

        <h1 className={`text-gray-400 cursor-pointer 
          ${isActive === true ? "border-b-4 border-blue-500 pb-3" : "border-0"}
          `}>Who to follow</h1>
        </div>
        <div className='flex justify-center items-center w-[50%] my-3'>

        <h1 className={`text-gray-400 cursor-pointer ${!isActive === false ? "border-b-4 border-blue-500 pb-3" : "border-0"}`}>Creators to follow</h1>
        </div>
      </div>
      <div className="border-t-2 border-gray-900 w-full"/>
    </div>
  )
}

export default page