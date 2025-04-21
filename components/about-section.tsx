"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, User, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black z-0"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">Get to know me better</p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I'm a passionate Software Engineer with expertise in building modern, high-performance web and mobile applications.
              With a strong foundation in both frontend and backend technologies, I create seamless digital experiences
              that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in software development began with a curiosity about how things work, which evolved into a
              career focused on crafting elegant solutions. I'm constantly exploring new technologies and methodologies
              to enhance my skills and deliver exceptional results.
            </p>
          </motion.div>
          
          {/* Profile Image with a Sleek Hover Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center relative"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Outer Rotating Frame */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                whileHover={{
                  scale: 1.05,
                  filter: "brightness(1.5)",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(139,92,246,0.8), rgba(99,102,241,0.8), rgba(236,72,153,0.8), rgba(6,182,212,0.8), rgba(139,92,246,0.8))",
                  zIndex: 0,
                }}
              />
              {/* Profile Image Container */}
              <motion.div
                className="relative rounded-full overflow-hidden border-4 border-purple-500/50 shadow-lg shadow-purple-500/30 neon-box z-10"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <Image
                  src="/profile2.png"
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: <Zap className="h-10 w-10 text-purple-400" />,
              title: "Fast Learner",
              description: "Quickly adapt to new technologies and methodologies to stay at the cutting edge.",
              delay: 0.2,
            },
            {
              icon: <Terminal className="h-10 w-10 text-blue-400" />,
              title: "Problem Solver",
              description: "Approach challenges with analytical thinking and creative solutions.",
              delay: 0.3,
            },
            {
              icon: <User className="h-10 w-10 text-pink-400" />,
              title: "Team Player",
              description: "Collaborate effectively with cross-functional teams to achieve common goals.",
              delay: 0.4,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full neon-box">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-gray-800/80">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
