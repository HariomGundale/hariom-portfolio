import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-[#0b0d12]">
            <h1 className={`${archivoBlack.className} text-xl bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent font-bold px-20`}>Hariom's Portfolio</h1>

            <ul className="flex gap-7 pr-30 ">
                <li className="cursor-pointer hover:text-purple-500">
                    <Link href="/" className="relative inline-block text-white 
                        after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                        after:h-[2px] after:w-0 after:bg-purple-400 
                        after:transition-all after:duration-300 
                        hover:after:w-full hover:after:left-0"
                    >Home</Link>
                </li>
                <li className="cursor-pointer hover:text-purple-500">
                    <Link href="/about" className="relative inline-block text-white after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                    >About</Link>
                </li>
                <li className="cursor-pointer hover:text-purple-500">
                    <Link href="/projects" className="relative inline-block text-white 
                    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                    after:h-[2px] after:w-0 after:bg-purple-400 
                    after:transition-all after:duration-300 
                    hover:after:w-full hover:after:left-0"
                    >Projects</Link>
                </li>
                <li className="cursor-pointer hover:text-purple-500">
                    <Link href="/contact" className="relative inline-block text-white 
                    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                    after:h-[2px] after:w-0 after:bg-purple-400 
                    after:transition-all after:duration-300 
                    hover:after:w-full hover:after:left-0"
                    >Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
