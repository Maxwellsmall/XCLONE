import { Calendar, ChevronRight, Search } from 'lucide-react'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'



const page = () => {
  return (
    <div className="w-full flex flex-col">

      <div className="sticky top-0 z-50 w-full bg-black flex justify-between items-center px-5 py-2">

        <div className="flex items-center gap-7">
          <BiArrowBack className="w-[20px] h-[20px] text-white" />

          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-[19px]">
              Christianiho
            </h3>

            <p className="text-gray-500 text-[15px]">
              144 posts
            </p>
          </div>
        </div>

        <Search className="w-5 h-5 text-white cursor-pointer" />

      </div>

        <div className='flex flex-col justify-center items-center'>
          <div className="w-full h-[200px] bg-gray-500">

          </div>
         <div className="w-full px-2 relative flex justify-end items-start h-[150px]">
  
  <div className="w-[120px] h-[120px] absolute -top-16 left-4 rounded-full bg-gray-600 border-[3px] border-black">
  </div>

  <div className="flex flex-col absolute left-4 top-[70px]">
    <h3 className="text-white font-bold text-[22px]">
      Christianiho
    </h3>

    <p className="text-gray-500 text-[15px]">
      @Christianiho88
    </p>
  </div>

  <button className="py-2 px-5 bg-black rounded-full border border-gray-500 font-semibold">
    Edit Profile
  </button>

</div>
        </div>
        <div className="w-full px-3 flex flex-col">
          <p>Fullstack developer || Web3 || upcoming crypto & forex trader || mobile and web developer || crypto enthusiast</p>
          <div className='flex items-center gap-2 my-2 cursor-pointer'>
            <Calendar className="text-gray-500 text-[15px]"/>
            <p className='text-gray-500'>Join November 2022</p>
            <ChevronRight className='text-gray-500'/>
          </div>
          <div className='flex items-center gap-4 my-2'>
           <div className='flex gap-1 items-center'>
             <p className='font-bold text-[18px]'>500</p>
            <p className='text-gray-500'>Following</p>
           </div>

              <div className='flex gap-1 items-center'>
             <p className='font-bold text-[18px]'>500</p>
            <p className='text-gray-500'>Followers</p>
           </div>
          </div>
        </div>

        <div className='flex w-full item-center justify-center'>
          <div className='flex flex-col w-full bg-green-900 px-3  h-[170px] mx-5 rounded-[12px]'>
            <h1 className='font-bold text-[24px]'>You aren't verified yet</h1>
        </div>
        </div>

    </div>
  )
}
  export default page