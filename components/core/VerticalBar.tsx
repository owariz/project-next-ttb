'use client'
import React from 'react'

function VerticalBar() {
  return (
    <div data-aos="fade-right" className="vt-container flex">
        <div className="bar min-h-screen bg-[#27ff52] w-[20%] opacity-20 transition-all hover:opacity-[1] hover:scale-50 flex justify-center">
            <h2 className='text-[#fff] [writing-mode:vertical-lr] text-8xl text-center'>"Code is poetry."</h2>
        </div>
        <div className="bar min-h-screen bg-[#27ff52] w-[20%] opacity-20 transition-all hover:opacity-[1] hover:scale-50 flex justify-center">
            <h2 className='text-[#fff] [writing-mode:vertical-lr] text-8xl text-center'>"Innovate or evaporate."</h2>
        </div>
        <div className="bar min-h-screen bg-[#27ff52] w-[20%] opacity-20 transition-all hover:opacity-[1] hover:scale-50 flex justify-center">
            <h2 className='text-[#fff] [writing-mode:vertical-lr] text-8xl text-center'>"Think outside the binary."</h2>
        </div>
        <div className="bar min-h-screen bg-[#27ff52] w-[20%] opacity-20 transition-all hover:opacity-[1] hover:scale-50 flex justify-center">
            <h2 className='text-[#fff] [writing-mode:vertical-lr] text-8xl text-center'>"Disrupt the status quo."</h2>
        </div>
        <div className="bar min-h-screen bg-[#27ff52] w-[20%] opacity-20 transition-all hover:opacity-[1] hover:scale-50 flex justify-center">
            <h2 className='text-[#fff] [writing-mode:vertical-lr] text-8xl text-center'>"Technology is the new literacy."</h2>
        </div>
    </div>
  )
}

export default VerticalBar
