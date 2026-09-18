import React from 'react'


interface Props {
    
    image: string
    name: string
    username: string
    description: string
}

const SubscribeProps: React.FC<Props> = ({image, name, username, description}) => {
  return (
       <>
    <div className='flex flex-col w-full items-center justify-center'>
        <div className='flex w-full items-start justify-between gap-3 py-4'>
            <div className="flex items-center justify-center w-[50px] h-[50px]">
                <img src={image} alt="" className='bg-gray-500 rounded-full w-10 h-10' />
            </div>
            <div className='flex items-start flex-col w-full '>
                <h1 className="text-white/90 text-[16px] font-semibold">{name}</h1>
                <p className='text-gray-500'>{username}</p>
                <p className="text-white/90">{description}</p>
            </div>
            <div className='flex justify-center justify-center'>
            <button className='py-1 px-5 text-black bg-white rounded-full'>Subscribe</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default SubscribeProps