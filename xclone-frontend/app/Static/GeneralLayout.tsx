import React from 'react'
import Header from "../components/Header"
import Hero from "../components/Hero"
import Post from "../common/Posts"

const GeneralLayout = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
        <Header/>
        <Hero/>
        <Post/>
    </div>
  )
}

export default GeneralLayout