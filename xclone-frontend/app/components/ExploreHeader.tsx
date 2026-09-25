"use client"

import { ArrowLeftIcon, SearchIcon, SettingsIcon } from 'lucide-react'
import { useState } from "react"

const ExploreHeader = () => {
  const [isActive, setIsActive] = useState(false)
  const [activeTab, setIsActiveTab] = useState("Explore")

  const tabs = ["Explore", "Trending", "News", "Sports", "Entertainment"]

  return (
    <>
      <div className="sticky top-0 bg-black">
       <div className="flex flex-col w-full sticky top-0 bg-black">
        <div className='flex items-center justify-between mx-5 my-3'>
          {isActive && (
            <ArrowLeftIcon className='text-white w-6 h-6 cursor-pointer' onClick={() => setIsActive(false)}/>
          )}
          <div className={`flex items-center gap-2 px-3 py-2 w-[88%] rounded-full
            ${isActive ? "outline-2 outline-blue-500 mx-7" : "outline-2 outline-gray-900"}
            `}>
            <SearchIcon className="text-gray-500 w-5 h-5"/>
          <input 
          type="text"
           placeholder='search'
          className='rounded-full outline-0' 
          onBlur={() => setIsActive(false)}
          onFocus={() => setIsActive(true)} 
          />
          </div>
          <SettingsIcon className='text-white w-5 h-5'/>
          
        </div>
          <nav className='flex items-center justify-center mx-5 my-2'>
            <ul className="flex justify-between w-full gap-2 my-4 text-gray-500">
                      {tabs.map((tab) => (
                        <li key={tab}
                          onClick={() => setIsActiveTab(tab)}
                           className={`cursor-pointer ${activeTab === tab ? "text-white font-bold border-b-4 border-blue-500 pb-3" : "text-gray-500"}`}>{tab}</li>
                      ))}
                
            </ul>
          </nav>
          <div className='w-full border-t-1 border-gray-900'/>
       </div>
      </div>
    </>
  )
}

export default ExploreHeader