// app/page.tsx
// import Image from "@/public/vercel.svg"

import { PhoneCall, X } from "lucide-react";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-black text-white w-full">
     <div className="flex justify-between items-center w-full h-screen">
        <div className="flex flex-col items-start px-9 justify-center w-[50%]">
          <div className="flex flex-col justify-start my-3">
            <h1 className="font-bold text-[70px]">Happening</h1>
          <span className="font-bold text-[70px] mt-[-30px]">now.</span>
          </div>

        <div className="flex flex-col gap-5">
            <div className="flex rounded-full bg-white gap-2 px-28 py-3">
                <PhoneCall className="flex text-black"/>
                <button className="text-black border-0">Continue with phone</button>
          </div>
            <div className="flex rounded-full bg-white gap-2 px-28 py-3">
                <PhoneCall className="flex text-black"/>
                <button className="text-black border-0">Continue with Google</button>
          </div>
            <div className="flex rounded-full bg-white gap-2 px-28 py-3">
                <PhoneCall className="flex text-black"/>
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
        className="w-full bg-transparent text-white placeholder:text-gray-500 outline-none text-left"
      />
    </div>
    <Link href="/home">
    <div className="rounded-full bg-red-400 my-3 flex justify-center items-center py-3 cursor-pointer px-44">
      <button className="disabled text-white">Continue</button>
    </div>
    </Link>
        <p className="text-gray-500 text-[14px] text-center my-2">By continuing you agree to our <span className="text-white">Terms of Service Privacy Policy</span> and <br /> <span className="text-white">Cookie Use</span></p>
        </div>


        <div className="flex flex-col items-center justify-center w-[50%]">
          <X className="text-white w-[500px] h-[500px]"/>
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
    </main>
  );
}





