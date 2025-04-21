"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Desktop Cleaner",
      description: "Python automation tool to organize files on the desktop based on file type.",
      image: "https://agileit.com/wp-content/uploads/2020/02/iStock-582265246.jpg",
      tags: ["Python", "Automation"],
      liveUrl: "#",
      githubUrl: "https://github.com/Siva-PythonPirates/desktop-cleaner",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "TerraSense",
      description: "Developed a mobile app providing climate and environmental insights for farmers.",
      image: "https://th.bing.com/th/id/OIP.A06RcqEHSpBZWSDhC3H5XAHaFj?rs=1&pid=ImgDetMain",
      tags: ["Flutter", "Dart", "Firebase"],
      liveUrl: "https://youtu.be/LQ8288P1A_0",
      githubUrl: "https://github.com/Siva-PythonPirates/google_hackathon",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "TrainLab",
      description: "Developed a Streamlit application for end-to-end data analysis, machine learning, and model training.",
      image: "https://www.ecampusnews.com/files/2024/04/equity-AI-higher-education.jpeg",
      tags: ["Python", "Streamlit", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "https://github.com/Siva-PythonPirates/Automatic-Model-Trainer-WebApp---StreamLit/",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "REC Library Mobile Application",
      description: "Flutter-based Library Management App for REC students and faculties.",
      image: "https://i.pinimg.com/originals/5d/3f/a3/5d3fa3a2a9b56d5779579cb9f7b6f4a9.jpg",
      tags: ["Flutter", "Django", "SQLite"],
      liveUrl: "#",
      githubUrl: "https://github.com/Siva-PythonPirates/Lib_Manage_App",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Image Classification Bot",
      description: "UiPath's AI Center-powered bot that identifies and labels images with high accuracy.",
      image: "https://file-uploads.teachablecdn.com/73e9e4c282db48aaabe8990b9a4a83a1/7a936c260a5243bcb30522a377854e78",
      tags: ["UiPath AI Center", "Machine Learning"],
      liveUrl: "uipath",
      githubUrl: "https://github.com/Siva-PythonPirates/UiPath-AI-Center-Projects/tree/main/ImageClassification",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Signature Verification Bot",
      description: "UiPath's AI Center-powered bot that detects and verifies fake signatures with high accuracy.",
      image: "https://file-uploads.teachablecdn.com/73e9e4c282db48aaabe8990b9a4a83a1/7a936c260a5243bcb30522a377854e78",
      tags: ["UiPath AI Center", "Machine Learning", "Python"],
      liveUrl: "uipath",
      githubUrl: "https://github.com/Siva-PythonPirates/UiPath-AI-Center-Projects/tree/main/SignatureVerification",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Product Review Sentiment Analysis Bot",
      description: "UiPath's AI Center-powered bot that analyzes product reviews and provides sentiment analysis insights.",
      image: "https://file-uploads.teachablecdn.com/73e9e4c282db48aaabe8990b9a4a83a1/7a936c260a5243bcb30522a377854e78",
      tags: ["UiPath AI Center", "NLP", "Python"],
      liveUrl: "uipath",
      githubUrl: "https://github.com/Siva-PythonPirates/UiPath-AI-Center-Projects/tree/main/ProductReview_SentimentAnalysis",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Student Feedback Analyser Bot",
      description: "UiPath AI Center-powered bot that consolidates student feedback, generates summary reports, and visualizes insights through charts.",
      image: "https://file-uploads.teachablecdn.com/73e9e4c282db48aaabe8990b9a4a83a1/7a936c260a5243bcb30522a377854e78",
      tags: ["UiPath AI Center", "Data Visualization", "Python"],
      liveUrl: "uipath",
      githubUrl: "https://github.com/Siva-PythonPirates/UiPath-Feedback-Analysis",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black z-0"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              Featured Projects
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
            </h2>
            <p className="text-gray-400 text-lg">Showcasing my best work and technical expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card-3d group"
              >
                <div className="bg-gray-900/70 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col neon-box">
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white bg-black/50 hover:bg-black/70"
                        onClick={() => setSelectedProject(index)}
                      >
                        <Maximize2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col card-3d-content">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-gray-800/50 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-700 hover:border-purple-500 hover:bg-purple-500/10"
                        asChild
                      >
                        {project.liveUrl !== "uipath" && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      )}

                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-700 hover:border-purple-500 hover:bg-purple-500/10"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10 text-white bg-black/50 hover:bg-black/70"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="relative h-64 sm:h-80 md:h-96">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${projects[selectedProject].color} opacity-20`}
                ></div>
                <Image
                  src={projects[selectedProject].image || "/placeholder.svg"}
                  alt={projects[selectedProject].title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{projects[selectedProject].title}</h3>
                <p className="text-gray-300 mb-6">{projects[selectedProject].description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject].tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-gray-800/50 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <Button
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    asChild
                  >
                    <a href={projects[selectedProject].liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-700 hover:border-purple-500 hover:bg-purple-500/10"
                    asChild
                  >
                    <a href={projects[selectedProject].githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

