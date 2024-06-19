import Developer from "@/components/core/Developer";
import Product from "@/components/core/Product";
import Way from "@/components/core/Way";
import Container from "@/components/interface/Container";
import Link from "next/link";

export default function Home() {
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

        <Way />

        <div id="product" className="pt-[100px] flex justify-center px-6 2xl:px-0">
          <div className="w-[1280px]">
            <div className="mb-24 md:mb-32">
              <Product />              
              <Developer />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
