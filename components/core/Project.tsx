import Image from "next/image"
import Link from "next/link"

export default function Product() {
    const prods = [{
        "project": "TTShort",
        "releases": "00/00/2024",
        "type": "Website",
        "link": "https://ttshort.vercel.app/",
        "image": "/ttshort.png",
        "desc": "Simple Short URL Project"
    },{
        "project": "FreeAnalytics",
        "releases": "12/04/2024",
        "type": "Website",
        "link": "https://free-analytics.web.app/",
        "image": "/free-analytics.png",
        "desc": "Simple Free Analytics Tools Website"
    },{
        "project": "Post-it Here",
        "releases": "23/05/2024",
        "type": "Website",
        "link": "https://post-it-here.vercel.app/",
        "image": "https://firebasestorage.googleapis.com/v0/b/imagestorage-afd63.appspot.com/o/image%2FScreenshot%202024-06-25%20031520.png?alt=media&token=d7eb23ae-d2ec-4a87-b925-41ed55be2ee7",
        "desc": "Post-it in the online world where you can create a public or private board and share it with your friends to write Post-it on the board."
    }]
    // Boom, Pls optimize your hard code and fix your css, responsive
    return (
        <>
            <div className="text-center mb-16">
                <h1 className="font-eng w-fit mx-auto pt-2 text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold">Projects</h1>
            </div>

            <div className="flex flex-col flex-wrap md:flex-row justify-center gap-12 md:gap-0 mb-12 md:mb-16">
                {prods.map((p, i) => (
                    <div data-aos={i % 2 === 0 && i + 1 == prods.length ? "fade-up" : i % 2 === 0 ? "fade-left" : "fade-right"} key={i} className={`w-full md:w-[520px] mb-16 px-0 md:px-[60px] ${i % 2 === 0 && i + 1 == prods.length ? '' : i % 2 === 0 ? 'md:border-r md:border-gray-200' : ''}`}>
                        <div className="py-3 px-5 border border-green-400 rounded-lg transition duration-500 hover:bg-green-400/20">
                            <a href={p.link} rel="noopener noreferrer" target="_blank">
                                <Image src={p.image} className=" rounded-lg mb-3" width={1000} height={1000} alt={p.project} />
                            </a>

                            <h4 className="font-eng text-xl text-green-400 font-bold">{p.project}</h4>

                            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                                <span className="font-eng text-green-100/50">Releases {p.releases}</span>

                                <div>
                                    <span className="font-thai text-sm px-8 bg-transparent text-green-400 rounded-full border-2 border-green-300">{p.type}</span>
                                </div>
                            </div>

                            <p className="font-thai text-white my-3">{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mb-16">
                <Link href={'/projects'} className="font-thai w-96 text-center text-base md:text-xl px-8 md:px-12 py-2 md:py-3 bg-transparent text-green-400 rounded-full border-2 border-green-300 transition duration-500 hover:border-green-400 hover:bg-green-400/20 hover:scale-[0.975]">ผลงานทั้งหมด</Link>
            </div>
        </>
    )
}
