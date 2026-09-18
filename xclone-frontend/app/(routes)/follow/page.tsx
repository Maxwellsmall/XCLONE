"use client"

import { ArrowLeft, Settings } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import Follow from "@/app/components/followprops"



const page = () => {
  const [isActive, setIsActive] = useState(false)

  const followdata = [
    {
      id: 1,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fukkstack web developer and also a web3 enthusiast building so big that in the coming year alot of peop,e will know itttttttt and it wqill be so popular that alot of people want to use",
      image: "/vercel.svg"
  },
  {
    id: 2,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fukkstack web developer and also a web3 enthusiast building so big that in the coming year alot of peop,e will know itttttttt and it wqill be so popular that alot of people want to use",
      image: "/vercel.svg"
  },
  {
    id: 3,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
      description: "i am a fukkstack web developer and also a web3 enthusiast building so big that in the coming year alot of peop,e will know itttttttt and it wqill be so popular that alot of people want to use",
      image: "/vercel.svg"
  },

  {
    id: 4,
      name: "Maxwell Edunfunke",
      username: "@web3Threat",
description: "i am a fukkstack web developer and also a web3 enthusiast building so big that in the coming year alot of peop,e will know itttttttt and it wqill be so popular that alot of people want to use",
      image: "/vercel.svg"
  },
  ]

  return (
    <div className='w-full flex flex-col'>
      <div className="flex justify-between items-center w-full my-3 px-3">
        <div className='flex gap-8 items-center'>
          <ArrowLeft/>
        <h1 className='font-bold text-[22px]'>Follow</h1>
        </div>
        <Settings/>
      </div>
      <div className='flex justify-between items-center mx-3 my-2'>
        <div className='flex justify-center items-center w-[50%] my-3' onClick={() => setIsActive(false)}>

        <h1 className={`text-gray-400 cursor-pointer 
          ${!isActive ? "border-b-4 border-blue-500 pb-3" : "border-0"}
          `}>Who to follow</h1>
        </div>
        <div className='flex justify-center items-center w-[50%] my-3' onClick={() => setIsActive(true)}>

        <h1 className={`text-gray-400 cursor-pointer ${isActive ? "border-b-4 border-blue-500 pb-3" : "border-0"}`}>Creators to follow</h1>
        </div>
      </div>
      <div className="border-t-2 border-gray-900 w-full"/>
      <div className="flex w-full items-start flex-col bg-red-500">
          <div className='flex w-full items-start flex-col mx-5 py-2'>
              <h1 className="font-semibold text-[25px] text-white">Suggested for you</h1>
                <div className='w-flex-col gap-4'>
                  {followdata.map((items, id) => (
                      <div key={items.id} className='mb-4'>
                        <Follow
                        name={items.name}
                        username={items.username}
                        image={items.image}
                        description={items.description}
                        />
                      </div>
                  ))

                  }
                </div>
          </div>
      </div>
    </div>
  )
}

export default page