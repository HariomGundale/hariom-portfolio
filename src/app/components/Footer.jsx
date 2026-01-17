"use client";

import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";


export default function Footer() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollposition = window.scrollY;
            const windowheight = window.innerHeight;
            const documentheight = document.body.scrollHeight;

            if (scrollposition + windowheight > documentheight - 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })
    return (
        <footer className="bg-[#0b0d12] py-16 px-6 sm:px-10 relative overflow-hidden">

            {/* Neon Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-[120px]"></div>
            {/* Content Container */}
            <div className="max-w-10xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-bold text-[#cc59d2]">
                        Hariom Gundale
                    </h2>
                    <p className="text-gray-400 max-w-sm">
                        Building modern web experiences through clean architecture, thoughtful design, and scalable solutions, with a strong focus on performance, reliability, and user experience.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#DA70D6]/30 text-xs text-[#DA70D6] bg-[#DA70D6]/10 w-fit cursor-arrow">
                        <span className="w-2 h-2 rounded-full bg-[#6eeb83] animate-pulse cursor-arrow"></span>
                        Open for opportunities
                    </div>
                </div>

                {/* Navigation Column */}
                <div className="flex flex-col gap-4 md:pl-30 ">
                    <h2 className="font-bold text-base text-gray-200">Quick Links</h2>

                    <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About", href: "/about" },
                            { name: "Projects", href: "/projects" },
                            { name: "Contact", href: "/contact" },
                        ].map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href} scroll={true}
                                    className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-[#DA70D6] hover:drop-shadow-[0_0_10px_rgba(218,112,214,0.7)]"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Column */}
                <div className="flex flex-col gap-4 text-sm text-gray-400 md:pl-10">
                    <h2 className="font-semibold text-base text-gray-200">Social Info</h2>

                    <div className="flex flex-col gap-2.5 items-start">
                        <div className="group flex items-center gap-3 py-1 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:text-[#DA70D6] hover:drop-shadow-[0_0_10px_rgba(218,112,214,0.7)]">
                            <a href="mailto:hariomgundale21@gmail.com" target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 py-1 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:text-[#DA70D6] hover:drop-shadow-[0_0_10px_rgba(218,112,214,0.7)]">
                                <Mail className="w-4 h-4" />
                                <span>Email</span>
                            </a>
                        </div>

                        <div className="group flex items-center gap-3 py-1 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:text-[#DA70D6] hover:drop-shadow-[0_0_10px_rgba(218,112,214,0.7)]">
                            <a href="https://github.com/HariomGundale" target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 py-1 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:text-[#DA70D6] hover:drop-shadow-[0_0_10px_rgba(218,112,214,0.7)]">
                                <Github className="w-4 h-4" />
                                <span>GitHub</span>
                            </a>
                        </div>

                        <div className="group flex items-center gap-3 py-1 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:text-[#DA70D6] hover:drop-shadow-[0_0_10px_rgba(218,112,214,0.7)]">
                            <a href="https://www.linkedin.com/in/hariom-gundale-28448332b/" target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 py-1 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:text-[#DA70D6] hover:drop-shadow-[0_0_10px_rgba(218,112,214,0.7)]">
                                <Linkedin className="w-4 h-4" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Glow Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#DA70D6]/60 to-transparent my-10 blur-[1px]" />
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500 relative z-10">
                <span>© {new Date().getFullYear()} Hariom Gundale. All rights reserved.</span>
                <span className="text-gray-400">
                    Built with <span className="text-gray">Next.js</span>, <span className="text-gray">Tailwind CSS</span> & <span className="text-gray">Framer Motion</span>
                </span>
            </div>
            {showTopBtn && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 p-3 rounded-full bg-[#0b0d12] border border-[#DA70D6]/30 text-[#DA70D6] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_12px_rgba(218,112,214,0.8)]"
                >
                    ↑
                </button>
            )}

        </footer>
    );
}
