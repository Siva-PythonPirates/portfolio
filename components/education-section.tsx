"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react"

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      description:
        "Specialized in Artificial Intelligence and Machine Learning with a focus on neural networks and deep learning algorithms.",
      color: "from-purple-500 to-indigo-500",
      delay: 0.1,
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      location: "Mumbai, India",
      period: "2014 - 2018",
      description:
        "Graduated with honors. Focused on data structures, algorithms, and software engineering principles.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      degree: "Certification in Full Stack Development",
      institution: "Udacity",
      location: "Online",
      period: "2017",
      description: "Completed an intensive program covering modern web development technologies and best practices.",
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
  ]

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black z-0"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              Education
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
            </h2>
            <p className="text-gray-400 text-lg">Academic background and qualifications</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 transform md:translate-x-px"></div>

            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-gray-900 border-2 border-purple-500 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <GraduationCap className="h-4 w-4 text-purple-400" />
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500/30 transition-all duration-300 neon-box">
                      <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>

                      <div className="flex items-center mb-2">
                        <BookOpen className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-300">{item.institution}</span>
                      </div>

                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-400">{item.location}</span>
                      </div>

                      <div className="flex items-center mb-4">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-400">{item.period}</span>
                      </div>

                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

