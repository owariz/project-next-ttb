import Image from "next/image"

export default function Developer() {
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
        image: 'https://firebasestorage.googleapis.com/v0/b/imagestorage-afd63.appspot.com/o/image%2Fbc3a4ab1-003c-43e0-ac42-06902b01d775?alt=media&token=040e1f92-07eb-4bff-8e19-29f14fd7e014'
    },{
        name: 'Bom Wasurat',
        role: 'Tester',
        desc: 'Be content with what you have, be happy with what you get.',
        image: 'https://firebasestorage.googleapis.com/v0/b/imagestorage-afd63.appspot.com/o/image%2F449724440_825601732505464_8669372810596658179_n.jpg?alt=media&token=7ce9e8de-d040-448a-bbb6-bb3cbe878014'
    },{
        name: 'FU SE',
        role: 'Accounting',
        desc: 'No Glitch',
        image: 'https://firebasestorage.googleapis.com/v0/b/imagestorage-afd63.appspot.com/o/image%2F429674422_442940711486691_1141564563363107158_n.jpg?alt=media&token=8a0423e3-d478-4f90-9c46-d70e14132418'
    }]
    
    return (
        <>
            <div className="text-center mb-16">
                <h1 id="developer" className="font-eng w-fit mx-auto pt-2 text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold">Developers</h1>
            </div>

            <div className="flex flex-col flex-wrap md:flex-row justify-center gap-12 md:gap-0 mb-12 md:mb-16">
                {teams.map((t, i) => (
                    <div data-aos={i % 2 === 0 && i + 1 == teams.length ? "fade-up" : i % 2 === 0 ? "fade-left" : "fade-right"} key={i} className={`mt-16 w-full md:w-[520px] px-0 md:px-[60px] ${i % 2 === 0 && i + 1 == teams.length ? '' : i % 2 === 0 ? 'md:border-r md:border-gray-200' : ''}`}>
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
        </>
    )
}
