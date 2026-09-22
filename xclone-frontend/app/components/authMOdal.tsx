import React from 'react'


interface ModalPRops {
  onClose: () => void
}

const authMOdal = ({onClose}: ModalPRops) => {
  return (
    <div className='w-full justify-center items-center '>
        <div className='max-w-[700px] rounded-[10px] bg-gray-600 h-[540px]'>

        </div>
    </div>
  )
}

export default authMOdal