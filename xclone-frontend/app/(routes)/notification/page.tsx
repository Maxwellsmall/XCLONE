import React from 'react'
import { Settings } from 'lucide-react'
import Notification from "../../components/NotisProps"
import { Bell } from 'lucide-react';

const page = () => {
  return (
   <div className='w-full flex flex-col items-center justify-center '>
      <div className="w-full flex items-center justify-between my-2">
        <h1 className='font-bold text-[20px] ml-5'>Notifications</h1>
        <Settings className='mr-5'/>
      </div>
      <div className='w-full flex items-center justify-between mt-7 border-b-2 border-gray-900'>
        <div className='w-[50%] flex items-center justify-center cursor-pointer'>
          <h2>All</h2>
        </div>
         <div className='w-[50%] flex items-center justify-center cursor-pointer'>
          <h2>Mentions</h2>
        </div>
      </div>
      <div className=' w-full flex flex-col items-center justify-center'>
        <Notification Text='Hello world' paragraph='welcome to notification' Icon={<Bell className='text-blue-600'/>} Image=''/>
        <Notification Text='Hello world' paragraph='Hack Nasa' Icon={<Bell className='text-blue-600'/>} Image=''/>
        <Notification Text='$1k is the goal' paragraph='today is wednesday' Icon={<Bell className='text-blue-600'/>} Image=''/>
        <Notification Text='New york' paragraph='Elon Father' Icon={<Bell className='text-blue-600'/>} Image=''/>
        <Notification Text='$1M is the goal' paragraph='Lambo money' Icon={<Bell className='text-blue-600'/>} Image=''/>
        <Notification Text='Hello world' paragraph='welcome to notification' Icon={<Bell className='text-blue-600'/>} Image=''/>

        </div>
      </div>
  )
}

export default page