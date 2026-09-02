import React from 'react';
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import FloatingIcon from "../components/FloatingIcon"
import { Mail, MessageCircle } from 'lucide-react';

interface StaticLayoutProps{
  children: React.ReactNode
}

const StaticLayout = ({children}: StaticLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <aside className="w-74 fixed top-0 left-0 h-screen z-10 overflow-y-auto border-r-2 border-r-gray-900">
        <LeftSidebar />
      </aside>

      {/* <main className="flex w-full items-start ml-74 border-b-2 border-gray-900 border-r-2 border-gray-500">
        {children}
      </main> */}
  <main className="ml-74 w-full min-h-screen border-r border-zinc-800">
        {children}
      </main>

      
      <aside className="w-94 shrink-0">
        <RightSidebar />
      </aside> 
      <div className="fixed bottom-0 right-3 flex flex-col  z-50">
  <FloatingIcon 
    className="bg-black border border-zinc-700/80 p-3 rounded-full flex justify-center items-center shadow-[0_0_12px_rgba(255,255,255,0.2)] hover:bg-zinc-900 transition-all cursor-pointer" 
    icon={<Mail className="h-6 w-6 text-white" />}
  /> 
  <FloatingIcon 
    className="bg-black border border-zinc-700/80 p-3 rounded-full flex justify-center items-center shadow-[0_0_12px_rgba(255,255,255,0.2)] hover:bg-zinc-900 transition-all cursor-pointer" 
    icon={<MessageCircle className="h-6 w-6 text-white" />}
  /> 
</div>
    </div>
  );
};

export default StaticLayout;