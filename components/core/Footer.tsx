import Link from "next/link"

export default function Footer() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
    <>
    <div className="bg-green-900/75 p-8 text-white">
            <div className="mx-auto myContainer">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-around gap-6">
                    <div className="w-full flex lg:justify-center">
                        <div>
                            <img src="images/rdcww.png" className="h-10 mb-4" />
                            <p className="font-bold">
                                TechTitanByte
                            </p>
                            <p className="text-gray-300">
                                00/00 กรุงเทพมหานคร 10400
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex md:justify-center">
                        <div>
                            <h1 className="font-bold text-xl mb-2">ติดต่อ</h1>
                            <ul>
                                <li>โทรศัพท์ : <a className="font-bold" href="#" target="_blank">000-000-0000</a></li>
                                <li>อีเมล์ : <a className="font-bold" href="#" target="_blank">contact@techtitanbyte.co.th</a></li>
                                <li>เพจ Facebook : <a className="font-bold" href="#" target="_blank">TechTitanByte</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <footer className='font-eng px-6 2xl:px-0 text-center bg-black py-6 text-gray-400'>
            <div className="container mx-auto">
                <span>&copy; { currentYear } <Link href={'/'} className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 font-semibold">TTByte</Link> | made ❤️ by team 
                    <span className="hidden md:inline-flex">&nbsp;techtitanbyte(variz.h264)&nbsp;</span>
                    <span className="inline-flex md:hidden">&nbsp;ttbyte(variz.h264)&nbsp;</span>
                </span>
                <span className="block md:inline-flex">| all rights reserved.</span>
            </div>
        </footer>
    </>
    )
}