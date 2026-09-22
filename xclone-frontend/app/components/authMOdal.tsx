import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";


interface ModalPRops {
  onClose: () => void
}

const authMOdal = ({onClose}: ModalPRops) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black/50' onClick={onClose}>
        <div className='w-full max-w-[700px] rounded-[15px] bg-gray-600 h-[620px]'>
          <div className='flex px-6 my-5 justify-between items-center w-full'>
            <ArrowLeft className='bg-black rounded-full py-2 px-2 cursor-pointer w-9 h-9'/>
            <p className='font-semibold cursor-pointer'>Use Password</p>
          </div>
          <div className='flex justify-center items-center mt-[-40px] flex flex-col'>
              <FaXTwitter className="h-[50px] w-[50px] font-bold text-white" />
            <div className='flex flex-col gap-2 my-4'>
            <h1 className='font-bold text-[30px]'>Check your email</h1>
            <p className='text-gray-700 text-[20px]'>The code was sent to bellabianca303@gmail.com</p>
            {/* <p className='text-gray-300'>Didn't receive a code? <span className='font-bold'> Send again</span></p> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default authMOdal