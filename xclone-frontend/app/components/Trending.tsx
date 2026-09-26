import React from 'react'

const Trending = () => {
  return (

<>
<div className='flex flex-col w-full px-3'>
    <div className='w-full relative h-[150px] px-1 border-3 border-gray-800 overflow-hidden rounded-xl bg-cover bg-center'
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
</>
)
}

export default Trending