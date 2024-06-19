import Container from "@/components/interface/Container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const teams = [{
    name: 'Somchai Wantaeng',
    role: 'Co-Founder / CEO / Developer',
    desc: '...',
    image: 'https://firebasestorage.googleapis.com/v0/b/imagestorage-afd63.appspot.com/o/image%2F3edf971f-5f25-4058-81af-cefaff72ef36?alt=media&token=1758ad7f-0c11-4e54-b087-bb584fdde493'
  }, {
    name: 'Panit Thapwon',
    role: 'Co-Founder / CTO / Developer',
    desc: 'Trust in the power of code.',
    image: 'https://firebasestorage.googleapis.com/v0/b/imagestorage-afd63.appspot.com/o/image%2F0a03bc76-9457-4be8-b9f7-4a1f8e43dc80?alt=media&token=7d914211-56d3-4869-b1c5-1d8e3af76db5'
  }, {
    name: 'Satit Akkeeroj',
    role: 'Developer / UX/UI Designer',
    desc: 'It is not the mountain we conquer but ourselves',
    image: 'https://firebasestorage.googleapis.com/v0/b/imagestorage-afd63.appspot.com/o/image%2F9f4a9fa3-e596-4fad-8d7f-e311f46ffc3a?alt=media&token=16cd96b2-576a-48e3-a462-b41b046d7429'
  }, {
    name: 'Supakorn Montreewan',
    role: 'Developer',
    desc: 'No matter how long you spend climbing out, you can still fall back down in an instant.',
    image: 'https://firebasestorage.googleapis.com/v0/b/imagestorage-afd63.appspot.com/o/image%2F7a030a7f-63b5-45bf-90b3-1368859b8dd2?alt=media&token=f8e4f8ed-1eb7-43df-9290-b0164e3449ce'
  }, {
    name: 'Muhammad Hussain Rana',
    role: 'Developer / IT Support',
    desc: `🍾 Always remember you're someone's reason to smile because you're a joke.`,
    image: 'https://firebasestorage.googleapis.com/v0/b/imagestorage-afd63.appspot.com/o/image%2F537b7f49-f42a-420b-9e43-0a7ff0272e8a?alt=media&token=6b461002-d7c4-4f96-9762-9cd0dddb5e24'
  }]
  return (
    <>
      <Container>
        <div className="relative pt-[40px] flex flex-col items-center mb-16">
          <div className="text-center text-gray-400 mb-8">
            <h1 className="font-eng text-5xl md:text-5xl 2xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500 font-bold mb-4">
              Welcome to <br className="inline-flex md:hidden"></br>FullTech
            </h1>

            <p className="font-eng text-base md:text-xl 2xl:text-2xl">Full Service Software Development</p>
          </div>

          <Link href={'#way'} className="font-thai w-96 text-center text-base md:text-xl px-8 md:px-12 py-2 md:py-3 bg-transparent text-green-400 rounded-full border-2 border-transparent transition duration-500 hover:border-green-400 hover:bg-green-400/20 hover:scale-[0.975]">เพิ่มเติม</Link>

          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ptIZhaT_KOo?si=21_v6sRk_hpHUy1j" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="mt-10" /> */}
        </div>

        <div id="way" className="pt-[100px] pb-[100px] flex justify-center px-6 2xl:px-0">
          <div className="w-full xl:w-[1280px]">
            <div className="flex flex-col md:flex-row gap-8 md:gap-0">
              <div className="md:min-w-[450px]">
                <h1 className="font-thai text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold">เราคือใคร?</h1>
              </div>

              <div className="w-full text-white text-base md:text-xl">
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

        <div id="product" className="pt-[100px] flex justify-center px-6 2xl:px-0">
          <div className="w-[1280px]">
            <div className="mb-24 md:mb-32">
              <div className="text-center mb-16">
                <h1 className="font-eng w-fit mx-auto pt-2 text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold">Products</h1>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-0 mb-12 md:mb-16">
                <div className="w-full md:w-[520px] px-0 md:px-[60px] md:border-r md:border-gray-200">
                  <div className="py-3 px-5 border border-green-400 rounded-lg transition duration-500 hover:bg-green-400/20">
                    <a href="https://ttshort.vercel.app/">
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
                    <a href="https://free-analytics.web.app/">
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

              <div className="text-center mb-16">
                <h1 id="developer" className="font-eng w-fit mx-auto pt-2 text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold">Developers</h1>
              </div>

              <div className="flex flex-col flex-wrap md:flex-row justify-center gap-12 md:gap-0 mb-12 md:mb-16">
                {teams.map((t, index) => (
                  <div key={index} className={`mt-16 w-full md:w-[520px] px-0 md:px-[60px] ${index % 2 === 0 && index+1==teams.length ? '' : index % 2 === 0 ? 'md:border-r md:border-gray-200' : ''}`}>
                    <div className="py-3 px-5 border border-green-400 rounded-lg transition duration-500 hover:bg-green-400/20">
                      <div className="flex flex-row gap-2">
                        <Image src={t.image} alt={t.name} className="min-w-[80px] max-h-[80px] object-cover rounded-full" width={80} height={80} />
                        <div className="flex flex-col">
                          <span className="font-eng text-white font-bold mt-3">{t.name}</span>
                          <span className="font-eng text-sm text-green-100/50">{t.role}</span>
                          <span className="font-eng text-md text-white">{t.desc}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
