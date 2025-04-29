"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronRight, Menu, X, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Refs for each section
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const achievementsRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  // const hobbiesRef = useRef<HTMLElement>(null)
  const responsibilitiesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLElement>> = {
      hero: heroRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      achievements: achievementsRef,
      education: educationRef,
      // hobbies: hobbiesRef,
      responsibilities: responsibilitiesRef,
      contact: contactRef,
    }

    const section = sectionMap[sectionId]
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // Show/hide scroll to top button
      if (scrollPosition > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      // Determine active section
      const sections = [
        { id: "hero", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "achievements", ref: achievementsRef },
        { id: "education", ref: educationRef },
        // { id: "hobbies", ref: hobbiesRef },
        { id: "responsibilities", ref: responsibilitiesRef },
        { id: "contact", ref: contactRef },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Particle background effect for hero section
  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container absolute inset-0">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="particle absolute rounded-full bg-primary/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">SIVASHANKAR S</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-6"
          >
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "achievements", label: "Achievements" },
              { id: "education", label: "Education" },
              { id: "responsibilities", label: "Responsibilities" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  activeSection === item.id ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.nav>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center space-x-4"
          >
            <a
              href="https://github.com/Siva-PythonPirates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sivashankar-s-33117b249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:sivashankars0803@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background border-b shadow-lg md:hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {[
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "achievements", label: "Achievements" },
                { id: "education", label: "Education" },
                // { id: "hobbies", label: "Hobbies" },
                { id: "responsibilities", label: "Responsibilities" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-sm font-medium py-2 transition-colors hover:text-primary text-left",
                    activeSection === item.id ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </button>
              ))}

              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          <ParticleBackground />
          <div className="container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                SIVASHANKAR S
              </h1>
              <div className="flex items-center justify-center space-x-4 mb-8 text-muted-foreground">
                <span className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 9363173016
                </span>
                <span>•</span>
                <span>Chennai</span>
                <span>•</span>
                <span className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  sivashankars0803@gmail.com
                </span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center space-x-4"
              >
                <a
                  href="https://www.linkedin.com/in/sivashankar-s-33117b249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Siva-PythonPirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Highly motivated and result-oriented Software Engineer with a strong foundation in Fullstack Web and Mobile App
                    development, Artificial Intelligence, and Bot Building. Passionate about learning new technologies and applying my
                    creative problem-solving techniques.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle>Technical Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2">Programming Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          {["Python", "Java", "C", "Dart"].map((skill) => (
                            <Badge key={skill} variant="secondary" className="px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                          {["Flutter", "Django-REST", "Streamlit"].map((skill) => (
                            <Badge key={skill} variant="secondary" className="px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Tools/Software</h3>
                        <div className="flex flex-wrap gap-2">
                          {["Git and Github", "UiPath Studio", "Star UML"].map((skill) => (
                            <Badge key={skill} variant="secondary" className="px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle>Soft Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "Problem Solving",
                        "Critical Thinking",
                        "Logical Reasoning",
                        "Adaptiveness",
                        "Team Player",
                        "Leadership"
                      ].map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <div className="w-full">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{skill}</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "REC Library Mobile Application",
                    description: "Flutter-based Library Management App for REC students and faculties.",
                    link: "https://github.com/Siva-PythonPirates/rec-library",
                    tech: ["Flutter", "Firebase", "Dart"]
                  },
                  {
                    title: "Student Feedback Analyser Bot",
                    description: "UiPath AI Center-powered bot that consolidates student feedback, generates summary reports, and visualizes insights through charts",
                    link: "https://github.com/Siva-PythonPirates/feedback-analyzer",
                    tech: ["UiPath", "AI Center", "Python"]
                  },
                  {
                    title: "Desktop Cleaner",
                    description: "Python automation tool to organize files on the desktop based on file type.",
                    link: "https://github.com/Siva-PythonPirates/desktop-cleaner",
                    tech: ["Python", "Automation"]
                  },
                  {
                    title: "TerraSense",
                    description: "Developed a mobile app providing climate and environmental insights for farmers.",
                    link: "https://github.com/Siva-PythonPirates/terrasense",
                    tech: ["Flutter", "API Integration", "Weather Data"]
                  },
                  {
                    title: "TrainLab",
                    description: "Developed a Streamlit application for end-to-end data analysis, machine learning, and model training.",
                    link: "https://github.com/Siva-PythonPirates/trainlab",
                    tech: ["Streamlit", "Python", "Machine Learning"]
                  }
                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-background/50 backdrop-blur-sm border-primary/20 h-full hover:border-primary/40 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{project.title}</span>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="px-2 py-0.5 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section ref={achievementsRef} className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Cyber Conquest",
                    description: "Winner of the Cyber Conquest event, Chennai Institute of Technology ",
                    icon: "🏆"
                  },
                  {
                    title: "Game Jam",
                    description: "Winner of Game Jam, Techathon2k23, Rajalakshmi Engineering College (Game Development)",
                    icon: "🎮"
                  },
                  {
                    title: "Hack-A-Bot",
                    description: "Winner of Hack-A-Bot, UiPath Community and Jaipur National University (Robotic Process and Automation)",
                    icon: "🤖"
                  },
                  {
                    title: "SQL Detective",
                    description: "2nd Runner Up in SQL Detective, Techathon2k23, Rajalakshmi Engineering College (Database Management)",
                    icon: "🔍"
                  },
                  {
                    title: "Nexus Elite Security CTF",
                    description: "5th Place in the Nexus Elite Security CTF competition ",
                    icon: "🛡️"
                  },
                  {
                    title: "PeCan+ Capture the Flag",
                    description: "6th Place in the PeCan+ Capture the Flag (CTF) event, Edith Cowan University ",
                    icon: "🚩"
                  },
                  {
                    title: "Penathon2k24 CTF",
                    description: "37th Rank in the national-level Penathon2k24 CTF challenge ",
                    icon: "🎯"
                  }
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-background/50 backdrop-blur-sm border-primary/20 h-full hover:border-primary/40 transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl">{achievement.icon}</span>
                          <div>
                            <h3 className="font-semibold mb-1">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section ref={educationRef} className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
              <div className="space-y-6">
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                      <h3 className="text-xl font-semibold">BE- Computer Science and Engineering</h3>
                      <span className="text-muted-foreground">2021 - 2025</span>
                    </div>
                    <p className="text-muted-foreground">Rajalakshmi Engineering College</p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                      <h3 className="text-xl font-semibold">Higher Secondary Education</h3>
                      <span className="text-muted-foreground">2019 - 2021</span>
                    </div>
                    <p className="text-muted-foreground">DAV School, Adambakkam - 89.80%</p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                      <h3 className="text-xl font-semibold">Secondary Education</h3>
                      <span className="text-muted-foreground">2017 - 2019</span>
                    </div>
                    <p className="text-muted-foreground">DAV School, Adambakkam - 85.80%</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hobbies Section */}
        {/* <section ref={hobbiesRef} id="hobbies" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Hobbies & Interests</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Photography",
                    description: "Capturing landscapes and street photography",
                    icon: "📷",
                  },
                  {
                    title: "Hiking",
                    description: "Exploring nature trails and mountains",
                    icon: "🥾",
                  },
                  {
                    title: "Reading",
                    description: "Science fiction and technical books",
                    icon: "📚",
                  },
                  {
                    title: "Chess",
                    description: "Strategic thinking and tournaments",
                    icon: "♟️",
                  },
                  {
                    title: "Cooking",
                    description: "Experimenting with international cuisines",
                    icon: "🍳",
                  },
                  {
                    title: "Music",
                    description: "Playing guitar and attending concerts",
                    icon: "🎸",
                  },
                ].map((hobby, index) => (
                  <motion.div
                    key={hobby.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="text-3xl mb-2">{hobby.icon}</div>
                        <CardTitle>{hobby.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{hobby.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section> */}

        {/* Responsibilities Section */}
        <section ref={responsibilitiesRef} className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Position of Responsibility</h2>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      As an App Development Mentor in DEVs Club at Rajalakshmi Engineering College, I have actively engaged in
                      fostering a collaborative learning environment through mentorship and workshops. Key contributions include:
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Conducted a hands-on workshop on App Development using Flutter for Google Developers Students Club and DEVs Club, guiding peers in building cross-platform mobile apps.",
                        "Mentored a team for the Smart India Hackathon 2024, providing support in problem-solving and project development.",
                        "Mentored junior developers in mobile app development as part of the Peer-to-Peer Hub in the DEVs Club."
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle>LinkedIn Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {["Python Essentials", "Advanced Python", "Java OOP"].map((cert) => (
                        <li key={cert} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-muted-foreground">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle>IIT Madras</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {["Data Analytics with Python", "Joy of Computing Using Python"].map((cert) => (
                        <li key={cert} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-muted-foreground">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle>UiPath</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "RPA Design and Development v4.0",
                        "Automation Explorer",
                        "Intro to AI-Powered Automation",
                        "AI Center, Managing ML Models"
                      ].map((cert) => (
                        <li key={cert} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-muted-foreground">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle>PWC</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="text-primary">✓</span>
                        <span className="text-muted-foreground">Cloud Launchpad Program</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* UiPath Tools Section */}
        <section className="py-20 bg-background/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">UiPath Tools</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {["UiPath Studio", "Assistant", "Orchestrator", "AI Center"].map((tool) => (
                  <Badge key={tool} variant="secondary" className="px-4 py-2 text-base">
                    {tool}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50 z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Get In Touch</h2>

              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                            <a href="mailto:sivashankars0803@gmail.com" className="hover:text-primary transition-colors">
                              contact@example.com
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                            <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                              +1 (234) 567-890
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Linkedin className="h-5 w-5 mr-3 text-muted-foreground" />
                            <a
                              href="https://linkedin.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              linkedin.com/in/sivashankar
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Github className="h-5 w-5 mr-3 text-muted-foreground" />
                            <a
                              href="https://github.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              github.com/sivashankar
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4">Location</h3>
                        <p className="text-muted-foreground">San Francisco, California, USA</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="transition-all focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="transition-all focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Your message"
                            rows={4}
                            className="resize-none transition-all focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <Button type="submit" className="w-full group">
                          Send Message
                          <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} className="ml-2">
                            →
                          </motion.span>
                        </Button>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Sivashankar S. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:sivashankars0803@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection("hero")}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg z-50 hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* CSS for particle animation */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        .particle {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  )
}

