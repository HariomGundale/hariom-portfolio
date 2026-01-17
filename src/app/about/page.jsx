"use client";
import { motion } from "framer-motion";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiExpress,
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss, SiGit, SiGithub
} from "react-icons/si";

export default function AboutPage() {

    const box = {
        borderRadius: 5,
    }

    const tech = [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        {name : "Express.js", icon: SiExpress },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
    ];

    const soft = [
        "Problem Solving", "Communication", "Team Collaboration",
        "Time Management", "Adaptability", "Critical Thinking",
    ]

    return (
        <main className="min-h-screen relative overflow-hidden bg-[#0b0d12] text-white flex items-center sm:py-10 px-4 sm:px-8 md:pl-16 lg:pl-24">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>
            <div>
                <section className="relative w-full bg-transparent py-20 px-6">
                    <div className="mx-auto max-w-5xl px-4 py-15 sm:py-15 lg:py-12">

                        {/* About Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="mb-8 text-4xl text-center font-bold tracking-tight text-white sm:text-5xl"
                        >
                            ABOUT ME
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
                                I am a Computer Engineering student and Full Stack Developer dedicated to building high-performance, responsive web applications. I manage the entire development lifecycle, from designing polished user interfaces to architecting reliable backend systems. My engineering background allows me to understand how every layer of the tech stack connects, ensuring that the final product is both visually engaging and technically sound.
                            </p>

                            <p>
                                Beyond just making things work, I prioritize writing clean, maintainable code that is built to scale. I believe great software should be intuitive for the user and efficient for the developer to evolve over time. My goal is to bridge the gap between creative design and robust system architecture, delivering digital solutions that are as stable as they are user-friendly.
                            </p>
                        </motion.div>

                    </div>
                </section>
                {/* Education Section */}
                <section className="relative w-full bg-transparent">
                    <div className="mx-auto max-w-6xl py-15 sm:py-15 lg:py-15">

                        {/* Section Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="mb-14 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center"
                        >
                            EDUCATION
                        </motion.h2>

                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFCDC9]/60 to-transparent my-9 blur-[1px]" />

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

                            {/* College Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style={box}
                                className="overflow-hidden rounded-xl border border-white/10"
                            >
                                <img
                                    src="/college.jpg"
                                    alt="College Campus"
                                    className="h-full w-full object-cover"
                                />
                            </motion.div>

                            {/* Education Details */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-semibold text-white">
                                    Pimpri Chinchwad College Of Engineering, Pune
                                </h3>

                                <h3 className="text-2xl font-semibold text-white">
                                    Bachelor of Technology (B.Tech)
                                </h3>

                                <p className="text-lg font-medium text-cyan-400">
                                    Computer Engineering
                                </p>

                                <p className="text-sm text-gray-400">
                                    2024 – 2028
                                </p>

                                <p className="max-w-xl text-base leading-relaxed text-gray-300">
                                    Currently pursuing a degree in Computer Engineering with a focus on
                                    software development, web technologies, and core computer science
                                    fundamentals.
                                </p>
                            </motion.div>

                        </div>
                    </div>
                </section>
                {/* Skills Section */}
                <section className="relative w-full bg-transparent">
                    <div className="mx-auto max-w-6xl px-6 py-15 sm:py-10 lg:py-5">

                        {/* Section Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="mb-14 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center"
                        >
                            SKILLS
                        </motion.h2>

                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFCDC9]/60 to-transparent my-10 blur-[1px]" />

                        {/* Skills Grid */}
                        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">

                            {/* Tech Skills */}
                            <div className="rounded-2xl border border-white/15 bg-purple/5 p-8">
                                {/* Skills pills */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={box}
                                >
                                    <h3 className="mb-6 text-xl font-semibold text-white text-center">
                                        Technical Skills
                                    </h3>
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFCDC9]/60 to-transparent my-5 blur-[1px]" />
                                    <div className="flex flex-wrap gap-3">
                                        {tech.map(({ name, icon: Icon }) => (
                                            <span
                                                key={name}
                                                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-cyan-400/60 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                                            ><Icon className="text-base text-gray-400 transition-colors duration-300 group-hover:text-cyan-400" />
                                                {name}

                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Soft Skills */}
                            <div className="rounded-2xl border border-white/15 bg-purple/5 p-8">
                                {/* Skills pills */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={box}
                                >
                                    <h3 className="mb-6 text-xl font-semibold text-white text-center" >
                                        Soft Skills
                                    </h3>
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFCDC9]/60 to-transparent my-5 blur-[1px]" />
                                    <div className="flex flex-wrap gap-3">
                                        {soft.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-purple-400/60 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}