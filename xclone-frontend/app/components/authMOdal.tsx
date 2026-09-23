"use client"

import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { useState, useRef } from 'react';


interface ModalPRops {
  onClose: () => void
}

const authMOdal = ({onClose}: ModalPRops) => {
const [code, setCode] = useState(["", "", "", "", "", ""])
const inputRefs = useRef<(HTMLInputElement | null)[]>([])


const handleChange = (value: string, index: number) => {

  if(!/^\d?$/.test(value)) return

const newCode = [...code]
newCode[index] = value;
setCode(newCode)

if(value && index < 5) {
  inputRefs.current[index + 1]?.focus()
}
}

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>,
  index: number
) => {
  if(e.key === "Backspace" && !code[index] && index > 0) {
    inputRefs.current[index - 1]?.focus()
  }
}

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black/50'>
        <div className='w-full max-w-[700px] rounded-[15px] bg-[#1A1A1A] h-[620px]'>
          <div className='flex px-6 my-5 justify-between items-center w-full'>
            <ArrowLeft onClick={onClose} className='bg-black rounded-full py-2 px-2 cursor-pointer w-9 h-9'/>
            <p className='font-semibold cursor-pointer'>Use Password</p>
          </div>
          <div className='flex justify-center items-center mt-[-40px] flex flex-col'>
              <FaXTwitter className="h-[50px] w-[50px] font-bold text-white" />
            <div className='flex flex-col gap-2 my-4'>
            <h1 className='font-bold text-[30px]'>Check your email</h1>
            <p className='text-[#717171] text-[20px]'>The code was sent to bellabianca303@gmail.com</p>
            <div className='flex gap-3'>
              {code.map((digit, index) => (
                  <input
                  key={index} 
                  ref={(element) => {
                    inputRefs.current[index] = element
                  }}
                  type="text"
                  inputMode='numeric'
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className='w-[55px] h-[55px] rounded-[6px] bg-black border-2  border-[#45454D] text-white text-center text-xl outline-none focus:border-white '
                   />
              ))

              }
            </div>
            {/* <p className='text-gray-300'>Didn't receive a code? <span className='font-bold'> Send again</span></p> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default authMOdal