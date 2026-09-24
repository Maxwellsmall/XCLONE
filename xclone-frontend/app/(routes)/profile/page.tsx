import { Search } from 'lucide-react'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const page = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='flex w-full justify-between items-center my-2 px-5'>
       <div className='flex items-center gap-7'>
         <BiArrowBack className='w-[20px] h-[20px]'/>
        <div className='flex flex-col'>
          <h3 className='text-white font-semibold text-[19px]'>Christianiho</h3>
            <p className='text-gray-500 text-[15px]'>144 posts</p>
        </div>
       </div>
       <Search className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default page