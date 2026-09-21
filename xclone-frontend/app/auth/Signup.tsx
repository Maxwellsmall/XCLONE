// app/page.tsx
// import Image from "@/public/vercel.svg"

import { X } from "lucide-react";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white w-full">
     <div className="flex justify-between items-center w-full h-screen">
        <div className="flex flex-col items-center justify-start w-[50%]">
          <h1 className="font-bold text-[50px] max-w-[300px]">Happening <span className="">now.</span>  </h1>
        </div>

        
        <div className="flex flex-col items-center justify-center w-[50%]">
          <X className="text-white w-[500px] h-[500px]"/>
        </div>
     </div>
    </main>
  );
}