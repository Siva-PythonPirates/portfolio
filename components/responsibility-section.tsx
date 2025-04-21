"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ResponsibilitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const responsibilities = [
    {
      title: "Technical Lead",
      organization: "Open Source Community",
      period: "2021 - Present",
      description:
        "Leading a team of developers contributing to various open-source projects, mentoring new contributors, and ensuring code quality.",
      color: "from-purple-500 to-indigo-500",
      delay: 0.1,
    },
    {
      title: "Hackathon Organizer",
      organization: "Tech Innovators Club",
      period: "2020 - Present",
      description:
        "Organizing annual hackathons, coordinating with sponsors, and creating an environment that fosters innovation and collaboration.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      title: "Workshop Facilitator",
      organization: "Code for Change",
      period: "2019 - 2021",
      description:
        "Conducted workshops on web development technologies for underprivileged students, helping them gain valuable skills for future employment.",
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
  ]

  return (
    <section id="responsibility" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black z-0"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              Positions of Responsibility
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
            </h2>
            <p className="text-gray-400 text-lg">Leadership roles and community contributions</p>
          </motion.div>

          <div className="space-y-6">
            {responsibilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden neon-box">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className={`p-4 rounded-lg bg-gradient-to-r ${item.color} mb-4 md:mb-0 md:mr-6 shrink-0`}>
                        <Briefcase className="h-8 w-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <div className="flex items-center mt-2 md:mt-0">
                            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-400">{item.period}</span>
                          </div>
                        </div>

                        <div className="flex items-center mb-4">
                          <Users className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-gray-300">{item.organization}</span>
                        </div>

                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

