"use client"; // You don't actually need this in Vite, but it doesn't hurt if you plan to migrate later.

import { motion } from "framer-motion";
import Link from "next/link";
// Removing next/image for standard img tag compatibility with Vite

export default function Home() {
  return (
    // Added extra padding-left (pl-*) classes for larger screens
    <main className="min-h-screen relative overflow-hidden bg-[#0b0d12] text-white flex items-center py-10 px-4 sm:px-8 md:pl-16 lg:pl-24">

      {/* --- Background Elements (Unchanged) --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      {/* --- Main Content Grid --- */}
      {/* Changed items-center to items-start for better desktop alignment if text is long */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">

        {/* LEFT SIDE - Image Section */}
        <motion.div
          // UPDATED ANIMATION: Added scale for a more dynamic entrance
          initial={{ opacity: 0, y: 40, scale: 1.1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          // Added flex justify-center for mobile alignment
          className="flex justify-center md:justify-start"
        >
          {/* UPDATED SIZING: Reduced sizes slightly across breakpoints so it's "a little bit small" */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[350px] xl:h-[350px]">

            {/* ANIMATED OUTER GLOW RING */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              // Made colors more vibrant
              className="absolute inset-[-8px] bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-50"
            />

            {/* Main Photo Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl z-10">
              {/* STATIC INNER BORDER */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full p-[3px]">
                <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden relative">
                  {/* Vite compatible Standard <img> tag */}
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src="/profile.jpg" // Ensure this image is in your /public folder
                    alt="Your Name"
                    className="w-full h-full object-cover"
                  />

                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — Text Content */}
        {/* RIGHT SIDE — Content Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // This creates the "senior" staggered effect
              },
            },
          }}
          className="relative text-center md:text-left md:pl-8 lg:pl-12"
        >
          {/* 1. Welcome Tag */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            className="flex items-center justify-center md:justify-start gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-purple-500 hidden md:block"></span>
            <span className=" text-sm font-medium tracking-widest uppercase text-purple-400">
              Welcome to my portfolio 👋
            </span>
          </motion.div>
          
          {/* 2. Headline */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Hariom Gundale
            </span>
          </motion.h1>

          {/* 3. Professional Titles */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <p className="text-lg pb-2 font-semibold text-gray-200 mb-1">
              Full-Stack Web Developer
            </p>
            <p className="text-sm text-purple-300/80 font-medium mb-6 italic">
               B.Tech Computer Engineering Student
            </p>
          </motion.div>

          {/* 4. Bio - Optimized for Readability */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-400 text-base leading-relaxed max-w-xl mb-8 mx-auto md:mx-0"
          >
            I focus on building <span className="text-white font-medium">modern, scalable, and user-focused</span> web applications.
            Currently honing my skills in <span className="text-white font-medium">DSA with C++</span> and looking for
            opportunities to contribute to impactful projects.
          </motion.p>

          {/* 5. CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link href="/projects" className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-500 font-bold transition-all shadow-lg shadow-purple-500/20">View Projects</Link>

            <Link href="/contact" className="px-8 py-3 rounded-full border border-gray-700 hover:border-purple-400 text-gray-300 hover:text-purple-400 transition-all">Contact Me</Link>
          </motion.div>
        </motion.div>

      </div>
    </main>
  );
}