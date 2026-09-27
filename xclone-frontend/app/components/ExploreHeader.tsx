"use client"

import { ArrowLeftIcon, SearchIcon, SettingsIcon } from 'lucide-react'
import { useState } from "react"
import MatchCard from "@/app/components/MatchCard"
import { ChevronRight, Ellipsis } from "lucide-react"
import Follow from "@/app/components/Followprops"
import Trending from "../components/Trending"
import Post from "@/app/common/Posts"



const ExploreHeader = () => {
  const [isActive, setIsActive] = useState(false)
  const [activeTab, setIsActiveTab] = useState("Explore")

  const tabs = ["Explore", "Trending", "News", "Sports", "Entertainment"]

    const followdata = [
    {
      id: 1,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
    {
      id: 2,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 3,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 4,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 5,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
    
  ]

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
          {
            activeTab === "Trending" ? (
              <div>
                <Trending/>
              </div>
            ) : activeTab === "News" ? (
              <div>
                News
              </div>
            ) : activeTab === "Sports" ? (
                <div>Sports</div>
            ) : activeTab ===    "Entertainment" ? (
                <div>
                  Entertainments
                </div>
            ) :(
              <div>
                 <div className="flex gap-2 w-full my-4 px-3 py-2 border-t-1 border-gray-600 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                          <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>
                          <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>
                           <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>
                            <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>
                            <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>
                            <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>
                
                        </div>
                        <div className="border-t-1 border-gray-600 my-3"/>
                      <div className="w-full flex items-center justify-center">
                          <div className="flex justify-between items-center w-[95%] px-3 py-2 bg-gray-500 rounded-md">
                          <div>
                            <img src="" alt="" />
                            <h3 className="text-white text-lg font-semibold">NPL</h3>
                            <p className="">Live Matches</p>
                          </div>
                          <div>
                            <ChevronRight/>
                          </div>
                        </div>
                      </div>
                        <div className="border-b-1 border-gray-600 my-3"/>
                            <div className="w-full flex items-center justify-center">
                          <div className="flex flex-col justify-between items-start w-[95%] px-3 py-2">
                          <h1 className="text-white text-[25px] font-bold">Today's News</h1>
                       
                           <div className="flex flex-col justify-between items-start w-full px-3 py-2 gap-1 ">
                            <p className="text-white font-bold text-[18px]">Ex-OpenAI Researcher Launches Jev, AI for Fast Machine Decisions</p>
                         <div className="flex gap-3 items-center ">
                             <div className="flex -space-x-2 shrink-0">
                              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-500 border border-black z-10" />
                              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-400 border border-black z-20" />
                              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-300 border border-black z-30" />
                             </div>
                             <p className="text-gray-500 text-[17px]">8 hours ago . Entertainment . 11K Posts</p>
                         </div>
                
                          </div>
                          
                            <div className="flex flex-col justify-between items-start w-full px-3 py-2 gap-1 ">
                            <p className="text-white font-bold text-[18px]">Ex-OpenAI Researcher Launches Jev, AI for Fast Machine Decisions</p>
                         <div className="flex gap-3 items-center ">
                             <div className="flex -space-x-2 shrink-0">
                              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-500 border border-black z-10" />
                              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-400 border border-black z-20" />
                              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-300 border border-black z-30" />
                             </div>
                             <p className="text-gray-500 text-[17px]">8 hours ago . Entertainment . 11K Posts</p>
                         </div>
                
                          </div>
                            <div className="flex flex-col justify-between items-start w-full px-3 py-2 gap-1 ">
                            <p className="text-white font-bold text-[18px]">Ex-OpenAI Researcher Launches Jev, AI for Fast Machine Decisions</p>
                         <div className="flex gap-3 items-center ">
                             <div className="flex -space-x-2 shrink-0">
                              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-500 border border-black z-10" />
                              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-400 border border-black z-20" />
                              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-300 border border-black z-30" />
                             </div>
                             <p className="text-gray-500 text-[17px]">8 hours ago . Entertainment . 11K Posts</p>
                         </div>
                
                          </div>
                          </div>
                            </div>
                            <div className="border-b-1 border-gray-600 my-3"/>
                            <div className="w-full flex flex-col">
                              <div className="flex justify-between items-center w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Higgfiggs</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 text-white font-bold"/>
                
                
                              </div>
                               <div className="flex justify-between items-center w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Higgfiggs</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 text-white font-bold"/>
                
                
                              </div>
                
                            </div>
                                    <div className="border-t-1 border-gray-600 my-3"/>
                
                         <div className="flex flex-col gap-4 px-4">
                                    <h1 className="font-semibold text-[22px] text-white">Who to follow </h1>
                                    <div className='flex flex-col gap-3'>
                                      {followdata.map((item) => (
                                        <Follow
                                          key={item.id}
                                          name={item.name}
                                          username={item.username}
                                          image={item.image}
                                          description={item.description}
                                        />
                                      ))}
                                    </div>
                            </div>
                              <div className="border-t-1 border-gray-600 my-3"/>
                                <div className="px-4">
                   <h1 className="font-semibold text-[22px] text-white">Posts for you </h1>
                    <Post/>
              </div>  
                
              </div>
            )
          }
       </div>
      </div>
    </>
  )
}

export default ExploreHeader