"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Bike, Book, Camera, Code, Gamepad2, Music } from "lucide-react"

export default function HobbiesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const hobbies = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Coding",
      description: "Building side projects and contributing to open-source in my free time.",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      delay: 0.1,
    },
    {
      icon: <Book className="h-10 w-10" />,
      title: "Reading",
      description: "Exploring technical books and science fiction novels.",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      delay: 0.2,
    },
    {
      icon: <Music className="h-10 w-10" />,
      title: "Music",
      description: "Playing guitar and exploring different music genres.",
      color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      delay: 0.3,
    },
    {
      icon: <Bike className="h-10 w-10" />,
      title: "Cycling",
      description: "Weekend cycling adventures and exploring new trails.",
      color: "bg-green-500/20 text-green-400 border-green-500/30",
      delay: 0.4,
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: "Photography",
      description: "Capturing landscapes and urban environments.",
      color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      delay: 0.5,
    },
    {
      icon: <Gamepad2 className="h-10 w-10" />,
      title: "Gaming",
      description: "Playing strategy and puzzle games to unwind.",
      color: "bg-red-500/20 text-red-400 border-red-500/30",
      delay: 0.6,
    },
  ]

  return (
    <section id="hobbies" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black z-0"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              Hobbies & Interests
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
            </h2>
            <p className="text-gray-400 text-lg">What I enjoy doing in my free time</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: hobby.delay }}
                className="group"
              >
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 h-full neon-box">
                  <div
                    className={`p-4 rounded-lg ${hobby.color} mb-4 inline-block transition-all duration-300 group-hover:scale-110`}
                  >
                    {hobby.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-gray-400">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

