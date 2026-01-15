"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0b0d12] text-white flex items-center py-6 sm:py-10 px-4 sm:px-8 md:pl-16 lg:pl-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>
      <section className="relative w-full bg-transparent">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-18 lg:py-12">
        
        {/* About Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 text-4xl text-center font-bold tracking-tight text-white sm:text-5xl"
        >
          About Me
        </motion.h1>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFCDC9]/60 to-transparent my-10 blur-[1px]" />

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="space-y-6 text-base leading-relaxed text-gray-300 sm:text-lg"
        >
          <p>
            I’m a Full Stack Web Developer and Computer Engineering student
            focused on building modern, responsive, and scalable web
            applications. I enjoy working across the full development
            lifecycle—from designing clean user interfaces to developing
            reliable backend systems.
          </p>

          <p>
            I care deeply about writing maintainable code, creating intuitive
            user experiences, and understanding the systems I build. My goal
            is to develop software that not only works well but is structured,
            efficient, and easy to evolve over time.
          </p>
        </motion.div>

      </div>
    </section>
    </main>
  );
}
