import React from 'react'

export default function Way() {
    return (
        <div id="way" className="pt-[100px] pb-[100px] flex justify-center px-6 2xl:px-0">
            <div className="w-full xl:w-[1280px]">
                <div className="flex flex-col md:flex-row gap-8 md:gap-0 overflow-hidden">
                    <div data-aos="fade-up-right" className="md:min-w-[450px]">
                        <h1 className="font-thai text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold">เราคือใคร?</h1>
                    </div>

                    <div data-aos="fade-up-left" className="w-full text-white text-base md:text-xl">
                        <p>
                            <span className="font-eng text-green-400"><b>FullTech</b> </span>
                            <span className="font-thai">
                                ของเราเป็นทีมพัฒนาซอฟต์แวร์และเรากำลังวางแผนที่จะพัฒนาทีมของเราให้อยู่ในระดับสากล
                                ทีมของเรานั้นพร้อมที่จะสร้างทุกระบบไม่ว่าตัวระบบนั้นจะง่ายหรือยากแค่ไหนทีม FullTech ของเราก็พร้อมรับทำและให้คำปรึกษากับคุณได้
                                FullTech ของเรามีความเข้าใจในเรื่อง Tech หลากหลายพร้อมสร้าง Product ให้กับคุณได้แทบจะทุก tech stack เลยก็ว่าได้
                            </span>
                        </p>
                        <br />
                        <p>
                            <span className="font-eng">
                                <span className="text-green-400"><b>FullTech</b> </span>  Ours is a software development team and we are planning to develop our team internationally. Our team is ready to build any system, no matter how simple or difficult it is. FullTech Our team is ready to accept and give advice to you. FullTech We have an understanding of a variety of tech and are ready to create products for you in almost every tech stack.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
