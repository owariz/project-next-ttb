import Container from "@/components/interface/Container";

export default function Home() {
  return (
    <>
    <Container>
        <div className="relative pt-[40px] flex flex-col items-center mb-16">
            <div className="text-center text-gray-400 mb-8">
              <h1 className="font-eng text-5xl md:text-5xl 2xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500 font-bold mb-4">
                Welcome to <br className="inline-flex md:hidden"></br>TechTitanByte Website
              </h1>
              
              <p className="font-eng text-base md:text-xl 2xl:text-2xl">Superproject init by TechTitanByte</p>
            </div>

            <button type="button" className="font-thai w-96 text-base md:text-xl px-8 md:px-12 py-2 md:py-3 bg-transparent text-green-400 rounded-full border-2 border-transparent transition duration-500 hover:border-green-400 hover:bg-green-400/20 hover:scale-[0.975]">เพิ่มเติม</button>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/ptIZhaT_KOo?si=21_v6sRk_hpHUy1j" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="mt-10" />
        </div>

        <div className="pt-[100px] pb-[100px] flex justify-center px-6 2xl:px-0">
          <div className="w-full xl:w-[1280px]">
            <div className="flex flex-col md:flex-row gap-8 md:gap-0">
              <div className="md:min-w-[450px]">
                <h1 className="font-thai text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold">เราคือใคร?</h1>
              </div>

              <div className="w-full text-white text-base md:text-xl">
                <p>
                  <span className="font-eng text-green-400"><b>TechTitanByte</b> </span> 
                  <span className="font-thai">
                    ของเราเป็นทีมพัฒนาซอฟต์แวร์และเรากำลังวางแผนที่จะพัฒนาทีมของเราให้อยู่ในระดับสากล 
                    ทีมของเรานั้นพร้อมที่จะสร้างทุกระบบไม่ว่าตัวระบบนั้นจะง่ายหรือยากแค่ไหนทีม TechTitanByte ของเราก็พร้อมรับทำและให้คำปรึกษากับคุณได้ 
                    TechTitanByte ของเรามีความเข้าใจในเรื่อง Tech หลากหลายพร้อมสร้าง Product ให้กับคุณได้แทบจะทุก tech stack เลยก็ว่าได้
                  </span>
                </p>
                <br />
                <p>
                  <span className="font-eng">
                    <span className="text-green-400"><b>TechTitanByte</b> </span>  Ours is a software development team and we are planning to develop our team internationally. Our team is ready to build any system, no matter how simple or difficult it is. TechTitanByte Our team is ready to accept and give advice to you. TechTitanByte We have an understanding of a variety of tech and are ready to create products for you in almost every tech stack.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[100px] flex justify-center px-6 2xl:px-0">
          <div className="w-[1280px]">
            <div className="mb-24 md:mb-32">
              <div className="text-center mb-16">
                <h1 className="font-eng w-fit mx-auto pt-2 text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold">Products</h1>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-0 mb-12 md:mb-16">
                <div className="w-full md:w-[520px] px-0 md:px-[60px] md:border-r md:border-gray-200">
                  <div className="py-3 px-5 bg-green-400/10 border border-green-400 rounded-lg">
                    
                  </div>
                </div>

                <div className="w-full md:w-[520px] px-0 md:px-[60px] md:border-r md:border-gray-200">
                  <div className="py-3 px-5 bg-green-400/10 border border-green-400 rounded-lg">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    </>
  )
}
