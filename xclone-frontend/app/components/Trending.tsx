import React from 'react'
import { ChevronRight, Ellipsis } from "lucide-react"



const Trending = () => {
  return (

<>
<div className='flex flex-col w-full px-3'>
    <div className='w-full relative h-[150px] px-1 border-3 my-5 border-gray-800 overflow-hidden rounded-xl bg-cover bg-center'
    style={{backgroundImage: "url('/images/global-trending.png')"}}
    >
      <div className="absolute inset-0 bg-black/40" />

       <div className="relative z-10 p-4">
    <h2 className="text-xl font-bold text-white font-sans">
      Global Trending
    </h2>

    <p className="text-white text-[20px] font-semibold">
      The most popular posts
    </p>

    <button className="mt-4 rounded-full border-2 border-white px-5 py-2 font-semibold text-white">
      Explore
    </button>
  </div>

    </div>

</div>
<div className="w-full border-t-2 border-gray-900 mt-2" />
    <div className="w-full flex flex-col mb-5">
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">1 - Trending in Nigeria</p>
                                   <h4 className="text-white font-bold text-[16px]">#SHUFFLE</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 text-gray-500 font-bold"/>
                
                
                              </div>
                               <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">2 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Manchester City</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">3 - Trending in Nigeria</p>
                                   <h4 className="text-white font-bold text-[16px]">#Kenedeyforyou</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 text-gray-500 font-bold"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">4 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Spain</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">5 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Man City</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">6 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Madagascar</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">7 - Politics-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">isreal</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">8 - Trending in Nigeria</p>
                                   <h4 className="text-white font-bold text-[16px]">Settings</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">9 - Music-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">#oasis</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">10 - Trending in Nigeria </p>
                                   <h4 className="text-white font-bold text-[16px]">Fela</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                              </div>

                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">11 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Super Eagles</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">12 - Entertainment-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Mr Macaroni</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">13 - Trending in Nigeria</p>
                                   <h4 className="text-white font-bold text-[16px]">#HelloMrRightSeason4</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">14 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Championship</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">15 - Trending in Nigeria</p>
                                   <h4 className="text-white font-bold text-[16px]">$JUMP</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">16 -Only on X - Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">#YouManiacSeriesEp5</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">17 - Trending in Nigeria</p>
                                   <h4 className="text-white font-bold text-[16px]">Blessing CEO</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-bet cursor-pointer hover:bg-gray-900ween items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">18 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Brazil</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">19 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Moses Uzor</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">20 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Pep Guardiola</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">21 - Trending in Nigeria</p>
                                   <h4 className="text-white font-bold text-[16px]">Palestine</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">22 - DramaTv-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Breaking Dad</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                                 <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">23 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Haaland</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                                 <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">24 - Trending in Nigeria</p>
                                   <h4 className="text-white font-bold text-[16px]">InteLink Live</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                                 <div className="flex justify-between items- cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">25 - Politics-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Alex Otti</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                                 <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">26 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Ronaldo</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                                 <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">27 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">Ethiad Stadium</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                                 <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">28 - Trending in Nigeria</p>
                                   <h4 className="text-white font-bold text-[16px]">Vado</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                                 <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">29 - Sports-Trending</p>
                                   <h4 className="text-white font-bold text-[16px]">League 2</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                                 <div className="flex justify-between items-center cursor-pointer hover:bg-gray-900 w-full px-3 py-3">
                                <div className="">
                                  <p className="text-gray-500 text-[13px]">30 - Trending in Nigeria</p>
                                   <h4 className="text-white font-bold text-[16px]">Iceland</h4>
                                </div>
                                <Ellipsis className="h-6 w-6 font-bold text-gray-500"/>
                
                
                              </div>
                              

                
       </div>

</>
)
}

export default Trending