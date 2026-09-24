import { Search } from 'lucide-react'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

// const page = () => {
//   return (
//     <div className='w-full flex flex-col'>
//       <div className='flex w-full justify-between items-center my-2 px-5'>
//        <div className='flex items-center gap-7'>
//          <BiArrowBack className='w-[20px] h-[20px]'/>
//         <div className='flex flex-col'>
//           <h3 className='text-white font-semibold text-[19px]'>Christianiho</h3>
//             <p className='text-gray-500 text-[15px]'>144 posts</p>
//         </div>
//        </div>
//        <Search className='cursor-pointer'/>
//       </div>
//     </div>
//   )
// }


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
          <div className='w-full px-2 relative flex justify-between items-start my-3'>
            <div className='w-[120px] h-[120px] absolute -top-10 left-2 rounded-full bg-gray-600 border-3 border-black'>

            </div>
            <button className='py-2 px-5 bg-black rounded-full border-1 border-gray-500 font-semibold'>Edit Profile</button>
          </div>
        </div>

    </div>
  )
}
  export default page