"use client";

import React from "react";
import { motion } from "framer-motion";
import projectdata from "./info/projectdata";

/* Card animation variants */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0b0d12] text-white py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full" />

      <div className="relative max-w-5xl mx-auto">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 text-4xl sm:text-5xl text-center font-bold"
        >
          MY PROJECTS
        </motion.h1>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFCDC9]/60 to-transparent my-10 blur-[1px]" />

        <p className="mb-14 text-xl text-center text-gray-400">
          Some of the things I’ve built while learning and exploring Full-Stack Development.
        </p>

        {/* Project Cards */}
        <div className="space-y-12">
          {projectdata.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex justify-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="w-full max-w-xl rounded-xl border border-cyan-400 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                
                {/* Title */}
                <h3 className="text-2xl font-semibold text-cyan-200 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-md bg-cyan-600 text-white hover:bg-cyan-700 transition"
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-md border border-cyan-600 text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-950 transition"
                  >
                    GitHub Repo
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
