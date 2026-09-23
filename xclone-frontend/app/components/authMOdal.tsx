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

const isCodeComplete = code.every((digit) => digit !== "")
const [usePassword, setUsePassword] = useState(false)

  return (
  <div className="fixed inset-0 flex justify-center items-center bg-black/50">

  <div className="w-full max-w-[700px] rounded-[15px] bg-[#1A1A1A] h-[620px]">

    {usePassword ? (

      <div>

        <div className="flex px-6 my-5 items-center">
          <ArrowLeft
            onClick={() => setUsePassword(false)}
            className="bg-black rounded-full p-2 cursor-pointer w-9 h-9"
          />
        </div>

        <div className="flex justify-center items-center w-full flex-col">

          <FaXTwitter className="h-[50px] w-[50px] text-white" />

          <div className="flex flex-col gap-2 my-4 mt-8">

            <h1 className="font-bold text-[30px] text-white">
              Enter your password
            </h1>

            <p className="text-[#717171] text-[15px]">
              Enter your password to continue
            </p>

            <input
              type="password"
              placeholder="Password"
              className="w-[400px] h-[55px] mt-4 rounded-lg bg-black border-2 border-[#45454D] px-4 text-white outline-none focus:border-white"
            />

          </div>

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

        </div>

      </div>

    )}

  </div>

</div>
  )
}

export default authMOdal