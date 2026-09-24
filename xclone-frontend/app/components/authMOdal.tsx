"use client"

import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { useState, useRef } from 'react';
import Link from 'next/link'; 


interface ModalPRops {
  onClose: () => void
}

const authMOdal = ({onClose}: ModalPRops) => {
const [code, setCode] = useState(["", "", "", "", "", ""])
const inputRefs = useRef<(HTMLInputElement | null)[]>([])
const [usePassword, setUsePassword] = useState(false)


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

const isCodeComplete = code.every((digit) => digit !== "")
const [form, setForm] = useState({
  email: "", 
  password: ""
})

const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm({...form,
      [e.target.name]: e.target.value
  })
}

const isFormComplete = form.email.trim() !== "" && form.password.trim() !== "" 


  return (
  <div className="fixed inset-0 flex justify-center items-center bg-black/50">

  <div className="w-full max-w-[700px] rounded-[15px] bg-[#1A1A1A] h-[620px]">

    {usePassword ? (

      <div>

        <div className="flex px-6 my-3 items-center">
          <ArrowLeft
            onClick={() => setUsePassword(false)}
            className="bg-black rounded-full p-2 cursor-pointer w-9 h-9"
          />
        </div>

        <div className="flex justify-center items-center w-full flex-col">

          <FaXTwitter className="h-[50px] w-[50px] text-white" />

          <div className="flex flex-col gap-2 my-4 mt-8">

            <h1 className="font-bold text-[35px] text-white">
              Login
            </h1>
        
              <div className="relative w-[400px]">

                <input
                  type="email"
                  placeholder=""
                  name='email'
                  value={form.email}
                  onChange={handleFormChange}
                  className="
                    peer
                    w-full
                    h-[55px]
                    mt-4
                    rounded-lg
                    bg-black
                    border-2
                    border-[#45454D]
                    px-4
                    pt-5
                    text-white
                    outline-none
                    focus-within:border-blue-500
                  "
                />

                <label
                  className="
                    absolute
                    left-4
                    top-[30px]
                    text-[#717171]
                    pointer-events-none
                    transition-all
                    duration-200

                    peer-focus:top-[23px]
                    peer-focus:text-[12px]
                    peer-focus:text-white

                    peer-not-placeholder-shown:top-[23px]
                    peer-not-placeholder-shown:text-[12px]
                  "
                >
                  Email
                </label>

              </div>
              
                   <div className="relative w-[400px]">

                <input
                  type="password"
                  placeholder=""
                  name='password'
                  value={form.password}
                  onChange={handleFormChange}
                  className="
                    peer
                    w-full
                    h-[55px]
                    mt-4
                    rounded-lg
                    bg-black
                    border-2
                    border-[#45454D]
                    px-4
                    pt-5
                    text-white
                    outline-none
                    focus-within:border-blue-500
                  "
                />

                <label
                  className="
                    absolute
                    left-4
                    top-[30px]
                    text-[#717171]
                    pointer-events-none
                    transition-all
                    duration-200

                    peer-focus:top-[23px]
                    peer-focus:text-[12px]
                    peer-focus:text-white

                    peer-not-placeholder-shown:top-[23px]
                    peer-not-placeholder-shown:text-[12px]
                  "
                >
                  Password
                </label>

              </div>
                <button className='text-white font-bold my-1'>Forgot Password?</button>
          </div>

             <div className="w-full flex justify-center items-center">

        <Link href="/home">
          <button
            disabled={!isFormComplete}
            className={`w-[400px] h-[50px] mt-25 rounded-full ${
              isFormComplete
                ? "bg-white text-black cursor-pointer"
                : "bg-[#2A2A2A] text-white cursor-not-allowed"
            }`}
          >
            Continue
          </button>

        </Link>
        </div>
                <p className="text-gray-500 text-[14px] text-center my-4">By continuing you agree to our <span className="text-white">Terms of Service Privacy Policy</span> and <br /> <span className="text-white">Cookie Use</span></p>

          

        </div>

      </div>

    ) : (

      <div>

        <div className="flex px-6 my-5 justify-between items-center w-full">

          <ArrowLeft
            onClick={onClose}
            className="bg-black rounded-full p-2 cursor-pointer w-9 h-9"
          />

          <button
            className="font-semibold cursor-pointer"
            onClick={() => setUsePassword(true)}
          >
            Use Password
          </button>

        </div>

        <div className="flex justify-center items-center w-full flex-col">

          <FaXTwitter className="h-[50px] w-[50px] mt-[-50px] text-white" />

          <div className="flex flex-col gap-2 my-4 mt-8">

            <h1 className="font-bold text-[30px] text-white">
              Check your email
            </h1>

            <p className="text-[#717171] text-[15px]">
              The code was sent to bellabianca303@gmail.com
            </p>

            <div className="flex gap-3 my-3">

              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) =>
                    handleChange(e.target.value, index)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, index)
                  }
                  className="w-[55px] h-[55px] rounded-[6px] bg-black border-2 border-[#45454D] text-white text-center text-xl outline-none focus:border-white"
                />
              ))}

            </div>

            <p className="text-[#717171]">
              Didn't receive a code?{" "}
              <span className="font-bold text-white cursor-pointer">
                Send again
              </span>
            </p>

          </div>

        </div>

        <div className="w-full flex justify-center items-center">
          <Link href="/home">

                    <button
                      disabled={isCodeComplete}
                      className={`w-[400px] h-[50px] mt-52 rounded-full ${
                        isCodeComplete
                          ? "bg-white text-black cursor-pointer"
                          : "bg-[#2A2A2A] text-white cursor-not-allowed"
                      }`}
                    >
                      Continue
                    </button>
          </Link>

        </div>

      </div>

    )}

  </div>

</div>
  )
}

export default authMOdal