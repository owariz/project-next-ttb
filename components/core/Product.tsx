import Image from "next/image"

export default function Product() {
    return (
        <>
            <div className="text-center mb-16">
                <h1 className="font-eng w-fit mx-auto pt-2 text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold">Products</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-0 mb-12 md:mb-16">
                <div className="w-full md:w-[520px] px-0 md:px-[60px] md:border-r md:border-gray-200">
                    <div className="py-3 px-5 border border-green-400 rounded-lg transition duration-500 hover:bg-green-400/20">
                        <a href="https://ttshort.vercel.app/" rel="noopener noreferrer" target="_blank">
                            <Image src={'/ttshort.png'} className=" rounded-lg mb-3" width={1000} height={1000} alt="ttshort" />
                        </a>

                        <h4 className="font-eng text-xl text-green-400 font-bold">TTShort</h4>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                            <span className="font-eng text-green-100/50">Releases 00/00/2024</span>

                            <div>
                                <span className="font-thai text-sm px-8 bg-transparent text-green-400 rounded-full border-2 border-green-300">variz</span>
                            </div>
                        </div>

                        <p className="font-thai text-white my-3">Project นี้ตอนแรกเราสร้างขึ้นมาเผื่อใช้งานในทีมของเราเองเพราะบางที่มีคนส่งลิ้งค์ยาวๆให้ปล้วมันจำยากหรือเราจะส่งให้ใครเราก็ไม่อยากส่งลิ้งค์ที่มันยาวๆไปเพราะจะดูไม่ค่อยเป็นมืออาชีพ5555 แต่ตอนนี้เราก็เปิดให้ทุกคนได้เขามาใช้งานกันแล้ว</p>
                    </div>
                </div>

                <div className="w-full md:w-[520px] px-0 md:px-[60px]">
                    <div className="py-3 px-5 border border-green-400 rounded-lg transition duration-500 hover:bg-green-400/20">
                        <a href="https://free-analytics.web.app/" rel="noopener noreferrer" target="_blank">
                            <Image src={'/free-analytics.png'} className=" rounded-lg mb-3" width={1000} height={1000} alt="free-analytics" />
                        </a>

                        <h4 className="font-eng text-xl text-green-400 font-bold">FreeAnalytics</h4>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                            <span className="font-eng text-green-100/50">Releases 00/00/2024</span>

                            <div>
                                <span className="font-thai text-sm px-8 bg-transparent text-green-400 rounded-full border-2 border-green-300">9ho</span>
                            </div>
                        </div>

                        <p className="font-thai text-white my-3">ที่เราสร้างตัว Analytics Tool ตัวนี้ขึ้นมาเพราะเราอยากมีเป็นของตัวเองแล้วอีกอย่างถ้าใช้ของ Vercel ไปสักพักมันจะเต็มตอนนั้นก็เลยตัดสินใจสร้างเว็บ Analytics ขึ้นมาใช้เองเลยเพราะเราจะได้จัดการได้ทุกอย่างเลยด้วยคือถ้ามีเป็นของตัวเองเราก็ปรับได้ทุกอย่างเลย</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mb-16">
                <button type="button" className="font-thai w-96 text-base md:text-xl px-8 md:px-12 py-2 md:py-3 bg-transparent text-green-400 rounded-full border-2 border-green-300 transition duration-500 hover:border-green-400 hover:bg-green-400/20 hover:scale-[0.975]">ผลงานทั้งหมด</button>
            </div>
        </>
    )
}
