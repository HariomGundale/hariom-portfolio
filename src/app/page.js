"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";



export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0b0d12] text-white flex items-center py-6 sm:py-10 px-4 sm:px-8 md:pl-16 lg:pl-24">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      {/* Main Grid */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 1.1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[350px] xl:h-[350px]">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-8px] bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-50"
            />

            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full p-[3px]">
                <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden relative">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src="/profile.jpg"
                    alt="Hariom Gundale"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="relative text-center md:text-left md:pl-8 lg:pl-12"
        >
          {/* Welcome */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            className="flex items-center justify-center md:justify-start gap-2 mb-3 sm:mb-4"
          >
            <span className="h-[1px] w-8 bg-purple-500 hidden md:block"></span>
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-purple-400">
              Welcome to my portfolio
            </span>
            <span className="h-[1px] w-8 bg-purple-500 hidden md:block"></span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4"
          >
            <span className="">
              Hariom Gundale
            </span>
          </motion.h1>

          {/* Titles */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <p className="text-base sm:text-lg pb-1 font-semibold text-gray-200 mb-1">
              Full-Stack Developer
            </p>
            <p className="text-xs sm:text-sm text-purple-300/80 font-medium mb-4 sm:mb-6 italic">
              B.Tech Computer Engineering Student
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mb-5 sm:mb-8 mx-auto md:mx-0"
          >
            I focus on building <span className="text-white font-medium">modern, scalable, and user-focused</span> web applications.
            Currently honing my skills in <span className="text-white font-medium">DSA with C++</span> and looking for
            opportunities to contribute to impactful projects.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <Link
              href="/projects"
              className="w-full sm:w-auto text-center px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-500 font-bold transition-all shadow-lg shadow-purple-500/20"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto text-center px-8 py-3 rounded-full border border-gray-700 hover:border-purple-400 text-gray-300 hover:text-purple-400 transition-all"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
