import React from 'react'
import { Ellipsis } from 'lucide-react'

interface Props{
    Image: string
    Text: string
    Icon?: React.ReactNode
    paragraph?: string
}

const NotisProps: React.FC<Props> = ({Image,Text, Icon, paragraph}) => {
  return (
    <div className='w-full flex flex-col items-center justify-between border-b-2 border-gray-900'>
      <div className='w-full flex flex-col px-3 items-center'>
         <div className='w-full flex items-center justify-between py-2'>
       <div className='w-full flex items-center py-2'>
          <div className='w-[40px] h-[40px] flex items-center justify-center'>
            <button>{Icon}</button>
        </div>
         <div className='w-[40px] h-[40px] flex items-center justify-center bg-gray-500 rounded-full'>
            <img src={Image} alt=""/>
        </div>
       </div>
        <div>
             <button>
                <Ellipsis className='text-gray-500'/>
             </button>
        </div>
       </div>
            <div className='w-full px-9 py-2 flex flex-col items-start justify-center'>
                <h1>{Text}</h1>
                <p className='text-gray-500'>{paragraph}</p>
            </div>
      </div>
    </div>
  )
}

export default NotisProps