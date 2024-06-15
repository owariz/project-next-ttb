import Link from "next/link"

export default function Footer() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
        <footer className='font-eng px-6 2xl:px-0 text-center py-6 text-gray-400'>
            <div className="container mx-auto">
                <span>&copy; { currentYear } <Link href={'/'} className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 font-semibold">TTByte</Link> | made ❤️ by team 
                    <span className="hidden md:inline-flex">&nbsp;techtitanbyte(variz.h264)&nbsp;</span>
                    <span className="inline-flex md:hidden">&nbsp;ttbyte(variz.h264)&nbsp;</span>
                </span>
                <span className="block md:inline-flex">[CORE V1.0.0NEXT] | all rights reserved.</span>
                <br className="inline-flex md:hidden" />
                <span className="hidden lg:inline-flex">&nbsp;&nbsp;•&nbsp;&nbsp;Trust in the power of code; it will guide us to our destiny. ✨</span>
            </div>
        </footer>
    )
}