import React from 'react'

interface SidebarProps {
    classname: string
    HeadText: string
    subText: string
    button: string
    classnames: string
}

const RightbarBoxesProps: React.FC<SidebarProps> = ({classname, classnames, HeadText, subText, button}) => {
  return (
    <>
    <div className={`w-full border-2 border-gray-900 rounded-[15px] ${classname}`}>
        <div className={`${classnames}`}>
            <h1 className='font-bold text-[20px] my-2'>{HeadText}</h1>
            <p className='text-[13px] font-semibold'>{subText}</p>
            
             <button className='my-2 py-2 px-5 bg-blue-500 cursor-pointer text-white font-bold rounded-full'>{button}</button>
        </div>
    </div>
    </>
  )
}

export default RightbarBoxesProps