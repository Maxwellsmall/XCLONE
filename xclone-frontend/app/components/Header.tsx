import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full bg-green-500">
      <div className="flex items-center w-[50%] py-4 justify-center bg-red-500">
        <h1>For You</h1>
      </div>
      <div className="flex items-center w-[50%] py-4 justify-center bg-blue-500">
        <h1>Following</h1>
      </div>
    </div>
  )
}

export default Header