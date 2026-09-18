"use client"

import { ArrowLeft, Settings } from 'lucide-react'
import React, { useState } from 'react'
import Follow from "@/app/components/Followprops"
import Subcribe from "@/app/components/SubscribeProps"

const Page = () => {
  const [isActive, setIsActive] = useState(false)

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
      {
      id: 6,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 7,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 8,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 9,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 10,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 11,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 12,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 13,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 13,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 15,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
  ]
  const subscribedata = [
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
      {
      id: 6,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 7,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 8,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 9,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 10,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 11,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 12,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 13,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 13,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
      {
      id: 15,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fullstack web developer and also a web3 enthusiast building so big that in the coming year alot of people will know it",
      image: "/vercel.svg"
    },
  ]

  return (
    <div className='w-full flex flex-col min-h-screen bg-black text-white'>
      <div className="flex justify-between items-center w-full bg-black/80 py-2 px-3 sticky top-0 z-10 backdrop-blur-md">
        <div className='flex gap-5 items-center'>
          <ArrowLeft className="cursor-pointer" />
          <h1 className='font-bold text-[22px]'>Follow</h1>
        </div>
        <Settings className="cursor-pointer" />
      </div>

      <div className='flex justify-between items-center border-b border-gray-800'>
        <div 
          className='flex justify-center items-center w-1/2 py-3 cursor-pointer hover:bg-zinc-900 transition'
          onClick={() => setIsActive(false)}
        >
          <h1 className={`font-semibold ${!isActive ? "text-white border-b-4 border-blue-500 pb-2" : "text-gray-400"}`}>
            Who to follow
          </h1>
        </div>

        <div 
          className='flex justify-center items-center w-1/2 py-3 cursor-pointer hover:bg-zinc-900 transition'
          onClick={() => setIsActive(true)}
        >
          <h1 className={`font-semibold ${isActive ? "text-white border-b-4 border-blue-500 pb-2" : "text-gray-400"}`}>
            Creators to follow
          </h1>
        </div>
      </div>

      <div className="flex flex-col w-full px-4 py-3 max-w-[600px]">
        {!isActive ? (
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-[22px] text-white">Suggested for you</h1>
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
        ) : (
         <div className="flex flex-col gap-4">
            <div className='flex flex-col gap-3'>
              {subscribedata.map((item) => (
                <Subcribe
                  key={item.id}
                  name={item.name}
                  username={item.username}
                  image={item.image}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page