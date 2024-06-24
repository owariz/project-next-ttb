"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import Report from "./Report";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [showLogin, setShowLogin] = useState(false);

    const report = () => {
        setShowLogin(true);
      };
    
      const reportClose = () => {
        setShowLogin(false);
      };

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeMenu()
            }
        }

        const handleScroll = () => {
            const scrollTotal = document.documentElement.scrollTop;
            const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll: any = `${(scrollTotal / heightWin) * 100}%`;
            setScrollProgress(scroll);
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <>
            <nav className={`fixed w-full top-0 left-0 z-50 h-[70px] flex justify-center bg-black/10 backdrop-blur-md`}>
                <div className="px-6 2xl:px-0 w-full xl:w-[1480px] h-full flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <a href={'/'} className="flex space-x-2 items-center transition duration-500 ease-out hover:scale-110">
                            <h1 className={`font-eng font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-400`}>FullTech</h1>
                        </a>
                    </div>

                    <div className="font-eng hidden md:flex items-center font-medium space-x-8 text-gray-400">
                        <Link href={'#product'} className="transition-colors duration-500 ease-out hover:text-gray-300">Product</Link>
                        <Link href={'#developer'} className="transition-colors duration-500 ease-out hover:text-gray-300">Developer</Link>
                        <button onClick={report} className="transition-colors duration-500 ease-out hover:text-gray-300">Report</button>
                    </div>

                    <div className="block md:hidden relative text-gray-400 w-[25px] h-[25px] mr-5">
                        <button onClick={report} className="transition-colors duration-500 ease-out hover:text-gray-300">Report</button>
                    </div>
                </div>
            </nav>

            <div className="fixed top-[70px] left-0 w-full h-1 bg-gradient-to-r from-green-300 to-green-500 z-50" style={{ width: scrollProgress }}></div>

            {showLogin && <Report onClose={reportClose} />}
        </>
    )
}