"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import { useSettings } from "@/context/SettingsProvider";
import Report from "./Report";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [showLogin, setShowLogin] = useState(false);

    const settings: any = useSettings();
    const setting = settings.data

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
                        <Link href={'/'} className="flex space-x-2 items-center transition duration-500 ease-out hover:scale-110">
                            <h1 className={`font-eng font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-400`}>{setting.website.title}</h1>
                        </Link>
                    </div>

                    <div className="font-eng hidden md:flex items-center font-medium space-x-8 text-gray-400">
                        <Link href={'/product'} className="transition-colors duration-500 ease-out hover:text-gray-300">Product</Link>
                        <Link href={'/developer'} className="transition-colors duration-500 ease-out hover:text-gray-300">Developer</Link>
                        <button onClick={report} className="transition-colors duration-500 ease-out hover:text-gray-300">Report</button>
                    </div>

                    <button onClick={toggleMenu} type="button" className="block md:hidden relative text-gray-400 w-[25px] h-[25px]">
                        <span className={`absolute top-0 left-0 text-2xl transition-transform duration-500 transform ${isOpen ? 'scale-75 rotate-45 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}>
                            <i className="fal fa-bars"></i>
                        </span>
                        <span className={`absolute top-0 left-0 text-2xl transition-transform duration-500 transform ${isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-45 opacity-0'}`}>
                            <i className="fal fa-times"></i>
                        </span>
                    </button>
                </div>
            </nav>

            <div className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] z-50 p-8 flex flex-col gap-2 text-2xl text-gray-400 bg-white transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <Link href={'/product'}>Product</Link>
                <Link href={'/developer'}>Developer</Link>
                <Link href={'/report'}>Report</Link>
            </div>

            <div className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-500 z-10 ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
            <div className="fixed top-[70px] left-0 w-full h-1 bg-gradient-to-r from-green-300 to-green-500 z-50" style={{ width: scrollProgress }}></div>

            {showLogin && <Report onClose={reportClose} />}
        </>
    )
}