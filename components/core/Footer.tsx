import Link from "next/link"

export default function Footer() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
        <footer className='font-eng px-6 2xl:px-0 text-center py-6 text-gray-400'>
            <div className="container mx-auto">
                <span>&copy; { currentYear } <Link href={'/'} className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 font-semibold">FullTech</Link>
                </span>
                <span className="block md:inline-flex"> | All rights reserved.</span>
                <br className="inline-flex md:hidden" />
            </div>
        </footer>
    )
}