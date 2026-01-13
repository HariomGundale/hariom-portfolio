import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full px-6 py-4 flex justify-between items-center border-b">
            <h1 className="text-xl font-bold">My Portfolio</h1>

            <ul className="flex gap-6">
                <li className="cursor-pointer hover:text-blue-500">
                    <Link href="/" className="hover:text-blue-500">Home</Link>
                </li>
                <li className="cursor-pointer hover:text-blue-500">
                    <Link href="/about" className="hover:text-blue-500">About</Link>
                </li>
                <li className="cursor-pointer hover:text-blue-500">
                    <Link href="/projects" className="hover:text-blue-500">Ptojects</Link>
                </li>
                <li className="cursor-pointer hover:text-blue-500">
                    <Link href="/contact" className="hover:text-blue-500">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
