"use client";
import Link from "next/link";
import { Archivo_Black } from "next/font/google";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const touchStartX = useRef(0);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Scroll lock
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Swipe logic
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 80) setIsOpen(false);
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-[#0b0d12] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-[120px]" />

        {/* Logo */}
        <h1
          className={`${archivoBlack.className} text-xl text-white bg-clip-text text-transparent font-bold px-6`}
        >
          Hariom's Portfolio
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-7 pr-10">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative inline-block text-white transition-all duration-300
                    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                    after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 
                    hover:after:w-full hover:after:left-0
                  `}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 z-50"
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "rotate-50 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "-rotate-50 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="absolute top-0 right-0 w-3/4 h-full bg-[#0b0d12] p-8 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex-1 flex flex-col justify-center items-center text-center gap-6">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg transition-all duration-300 ${
                        isActive
                          ? "text-purple-400 underline underline-offset-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                          : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
