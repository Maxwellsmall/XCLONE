
import Header from "@/app/components/ExploreHeader"
import MatchCard from "@/app/components/MatchCard"
import { ChevronRight, Ellipsis } from "lucide-react"

const Explore = () => {

  return (
    <>
    <div>
     <div className="">
       <Header/>
        <div className="flex gap-2 w-full my-4 px-3 py-2 border-t-1 border-gray-600 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>
          <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>
           <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>
            <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>
            <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>
            <MatchCard date="Sep 19" time="1:15 AM" team1="MAN U" team2="MAN CITY"/>

        </div>
        <div className="border-t-1 border-gray-600 my-3"/>
      <div className="w-full flex items-center justify-center">
          <div className="flex justify-between items-center w-[95%] px-3 py-2 bg-gray-500 rounded-md">
          <div>
            <img src="" alt="" />
            <h3 className="text-white text-lg font-semibold">NPL</h3>
            <p className="">Live Matches</p>
          </div>
          <div>
            <ChevronRight/>
          </div>
        </div>
      </div>
        <div className="border-b-1 border-gray-600 my-3"/>
            <div className="w-full flex items-center justify-center">
          <div className="flex flex-col justify-between items-start w-[95%] px-3 py-2">
          <h1 className="text-white text-[25px] font-bold">Today's News</h1>
       
           <div className="flex flex-col justify-between items-start w-full px-3 py-2 gap-1 ">
            <p className="text-white font-bold text-[18px]">Ex-OpenAI Researcher Launches Jev, AI for Fast Machine Decisions</p>
         <div className="flex gap-3 items-center ">
             <div className="flex -space-x-2 shrink-0">
              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-500 border border-black z-10" />
              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-400 border border-black z-20" />
              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-300 border border-black z-30" />
             </div>
             <p className="text-gray-500 text-[17px]">8 hours ago . Entertainment . 11K Posts</p>
         </div>

          </div>
          
            <div className="flex flex-col justify-between items-start w-full px-3 py-2 gap-1 ">
            <p className="text-white font-bold text-[18px]">Ex-OpenAI Researcher Launches Jev, AI for Fast Machine Decisions</p>
         <div className="flex gap-3 items-center ">
             <div className="flex -space-x-2 shrink-0">
              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-500 border border-black z-10" />
              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-400 border border-black z-20" />
              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-300 border border-black z-30" />
             </div>
             <p className="text-gray-500 text-[17px]">8 hours ago . Entertainment . 11K Posts</p>
         </div>

          </div>
            <div className="flex flex-col justify-between items-start w-full px-3 py-2 gap-1 ">
            <p className="text-white font-bold text-[18px]">Ex-OpenAI Researcher Launches Jev, AI for Fast Machine Decisions</p>
         <div className="flex gap-3 items-center ">
             <div className="flex -space-x-2 shrink-0">
              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-500 border border-black z-10" />
              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-400 border border-black z-20" />
              <img src="" alt="" className="w-8 h-8 rounded-full bg-gray-300 border border-black z-30" />
             </div>
             <p className="text-gray-500 text-[17px]">8 hours ago . Entertainment . 11K Posts</p>
         </div>

          </div>
          </div>
            </div>
            <div className="border-b-1 border-gray-600 my-3"/>
            <div className="w-full flex flex-col">
              <div className="flex justify-between items-center w-full px-3 py-3">
                <div className="">
                  <p className="text-gray-500 text-[13px]">Trending</p>
                   <h4 className="text-white font-bold text-[16px]">Higgfiggs</h4>
                </div>
                <Ellipsis className="h-6 w-6 text-white font-bold"/>


              </div>
               <div className="flex justify-between items-center w-full px-3 py-3">
                <div className="">
                  <p className="text-gray-500 text-[13px]">Trending</p>
                   <h4 className="text-white font-bold text-[16px]">Higgfiggs</h4>
                </div>
                <Ellipsis className="h-6 w-6 text-white font-bold"/>


              </div>

            </div>

     </div>
    </div>
    </>
  )
}

export default Explore