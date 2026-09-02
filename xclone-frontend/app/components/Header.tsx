import { Plus } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className=" flex bg-black/90 w-full border-b-2 border-b-gray-900 sticky top-0">
      <div className="flex items-center w-[25%] py-4 justify-center hover:bg-gray-500 cursor-pointer">
        <button>For You</button>
      </div>
      <div className="flex items-center w-[25%] py-4 justify-center hover:bg-gray-500 cursor-pointer">
        <button className='text-gray-500'>Following</button>
      </div>
      <div className="flex items-center w-[25%] py-4 justify-center hover:bg-gray-500 cursor-pointer">
        <button className='text-gray-500'>Mentorable</button>
      </div>
      <div className="flex items-center w-[25%] py-4 justify-center hover:bg-gray-500 cursor-pointer">
        <button className='text-gray-500'>printworldorder</button>
      </div>
      <div className='flex justify-center items-center w-[60px] py-5 hover:bg-gray-500 cursor-pointer'>
        <Plus className='h-4 w-4 text-gray-500'/>
      </div>
    </div>
  )
}

export default Header