"use client"

// app/page.tsx
// import Image from "@/public/vercel.svg"

import { PhoneCall, PhoneIncoming, X } from "lucide-react";
import { FaGoogle, FaApple, } from "react-icons/fa";
import Link from "next/link"
import Modal from "@/app/components/authMOdal"
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({email: ""})


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setForm({
  ...form,
  [e.target.name]: e.target.value
})
}

  const isFormComplete = form.email.trim()

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-black text-white w-full"
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect()

      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      const xx = ((e.clientX - rect.right) / rect.width) * 100
      const yy = ((e.clientY - rect.bottom) / rect.height) * 100

      e.currentTarget.style.setProperty("--mouse-x", `${x}%`)
      e.currentTarget.style.setProperty("--mouse-y", `${y}%`)
      // e.currentTarget.style.setProperty("--mouse-xx", `${xx}%`)
      // e.currentTarget.style.setProperty("--mouse-yy", `${yy}%`)
    }}
    >
     <div className="flex justify-between items-center w-full h-screen">
        <div className="flex flex-col items-start px-9 justify-center w-[50%]">
          <div className="flex flex-col justify-start my-3">
            <h1 className="font-bold text-[70px]">Happening</h1>
          <span className="font-bold text-[70px] mt-[-30px]">now.</span>
          </div>

        <div className="flex flex-col gap-5">
            <div className="flex rounded-full bg-white gap-2 px-28 py-3">
                <PhoneIncoming className="flex text-black"/>
                <button className="text-black border-0">Continue with phone</button>
          </div>
            <div className="flex rounded-full bg-white gap-2 px-28 py-3">
                <FaGoogle className="flex text-black"/>
                <button className="text-black border-0">Continue with Google</button>
          </div>
            <div className="flex rounded-full bg-white gap-2 px-28 py-3">
                <FaApple className="flex text-black"/>
                <button className="text-black border-0">Continue with Apple</button>
          </div>
        </div>
        <div className="w-full flex items-center justify-start text-gray-500 my-3">
          _____________________ or ______________________
        </div>

    <div className="w-[68%] my-3 border border-gray-600 rounded-[8px] px-4 py-4 focus-within:border-blue-600">
      <input 
        type="text" 
        placeholder="Email or Username"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="w-full bg-transparent text-white placeholder:text-gray-500 outline-none text-left"
      />
    </div>
    <div className="mt-3">
    
      <button className={`w-[400px] h-[50px] rounded-full ${isFormComplete ? "bg-white text-black cursor-pointer" : "bg-[#2A2A2A] text-white cursor-not-allowed"}`} onClick={() => setModal(true)} disabled={!isFormComplete} >Continue</button>
    </div>
        <p className="text-gray-500 text-[14px] text-center my-2">By continuing you agree to our <span className="text-white">Terms of Service Privacy Policy</span> and <br /> <span className="text-white">Cookie Use</span></p>
        </div>


        <div className="flex flex-col items-center justify-center w-[50%]">
          

<div className="w-full h-full relative flex items-center justify-center">

  <div
    className="absolute right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px]"
  >

    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
    >

      <defs>

        <linearGradient
          id="xBase"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#292929" />
          <stop offset="100%" stopColor="#292929" />
        </linearGradient>

        <radialGradient
          id="cursorGlow"
          cx="var(--mouse-x, 50%)"
          cy="var(--mouse-y, 50%)"
          r="65%"
        >
          <stop
            offset="0%"
            stopColor="#8a8a8a"
            stopOpacity="1"
          />

          <stop
            offset="50%"
            stopColor="#555555"
            stopOpacity="1"
          />

          <stop
            offset="100%"
            stopColor="#292929"
            stopOpacity="0"
          />
        </radialGradient>

      </defs>


      <path
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.804-7.584-6.636 7.584H.472l8.6-9.83L0 1.153h7.594l5.246 6.932L18.901 1.153Z"
        fill="none"
        stroke="url(#xBase)"
        strokeWidth="0.45"
      />

      {/* Cursor-following highlight */}
      <path
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.804-7.584-6.636 7.584H.472l8.6-9.83L0 1.153h7.594l5.246 6.932L18.901 1.153Z"
        fill="none"
        stroke="url(#cursorGlow)"
        strokeWidth="0.7"
      />

    </svg>

  </div>

</div>
        </div>
        
     </div>
     <div className="w-full flex justify-center items-center">
          <ul className="flex gap-3 my-5">
            <li className="text-gray-600 text-[12px]">About</li>
            <li className="text-gray-600 text-[12px]">Get App</li>
            <li className="text-gray-600 text-[12px]">Grok</li>
            <li className="text-gray-600 text-[12px]">Help</li>
            <li className="text-gray-600 text-[12px]">Terms</li>
            <li className="text-gray-600 text-[12px]">Privacy</li>
            <li className="text-gray-600 text-[12px]">Cookies</li>
            <li className="text-gray-600 text-[12px]">Career </li>
            <li className="text-gray-600 text-[12px]">Ads & Business</li>
            <li className="text-gray-600 text-[12px]">Developer</li>
            <li className="text-gray-600 text-[12px]">News</li>
            <li className="text-gray-600 text-[12px]">Accessibility</li>
            <li className="text-gray-600 text-[12px]">2026 X corp</li>
          </ul>
        </div>
       <div className="w-full flex justify-center items-center ">
         { modal && (
          
          <Modal onClose={() => setModal(false)}/>
        )

        }
       </div>
    </main>
  );
}





