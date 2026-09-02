import React from 'react'

interface Floatingprops{
    className?: string
    icon: React.ReactNode
}

const FloatingIcon: React.FC<Floatingprops> = ({className, icon}) => {
  return (
    <div className='py-3 px-2 bg-black rounded-[17px] flex justify-center items-center'>
        <div className={className}>
            <button className={className}>{icon}</button>
        </div>
    </div>
  )
}

export default FloatingIcon