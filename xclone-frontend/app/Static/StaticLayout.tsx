import React from 'react';
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";


interface StaticLayoutProps{
  children: React.ReactNode
}

const StaticLayout = ({children}: StaticLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <aside className="w-74 fixed top-0 left-0 h-screen z-10 overflow-y-auto border-r-2 border-r-gray-900">
        <LeftSidebar />
      </aside>

      <main className="flex-1 p-6 mx-74">
        {children}
      </main>

      
      <aside className="w-64 shrink-0">
        <RightSidebar />
      </aside> 
      
    </div>
  );
};

export default StaticLayout;