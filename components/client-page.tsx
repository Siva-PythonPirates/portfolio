"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import AchievementsSection from "@/components/achievements-section"
import { EducationSection } from "@/components/sections/education"
// import { HobbiesSection } from "@/components/sections/hobbies"
import { ResponsibilitiesSection } from "@/components/sections/responsibilities"
import { ContactSection } from "@/components/sections/contact"
import Footer from "@/components/footer"
import { CustomCursor } from "@/components/ui/custom-cursor"
import ParticleBackground from "@/components/ui/particle-background"

interface ClientPageProps {
  educationData: any[]
  hobbiesData: any[]
  responsibilitiesData: any[]
  socialLinksData: any[]
}

export default function ClientPage({
  educationData,
  // hobbiesData,
  responsibilitiesData,
  socialLinksData,
}: ClientPageProps) {
  const [activeSection, setActiveSection] = useState("hero")
  const sectionRefs = useRef({
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    achievements: useRef<HTMLDivElement>(null),
    hobbies: useRef<HTMLDivElement>(null),
    responsibility: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  })

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3

    Object.entries(sectionRefs.current).forEach(([section, ref]) => {
      if (ref.current) {
        const { offsetTop, offsetHeight } = ref.current

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
        }
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToSection = useCallback((section: string) => {
    const ref = sectionRefs.current[section as keyof typeof sectionRefs.current]
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <ParticleBackground />
      <div className="relative z-10">
        <Header activeSection={activeSection} onNavClick={scrollToSection} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={sectionRefs.current.hero}>
            <HeroSection />
          </div>
          <div ref={sectionRefs.current.about}>
            <AboutSection />
            <div ref={sectionRefs.current.education}>
          <EducationSection />
          </div>
          </div>
          <div ref={sectionRefs.current.skills}>
            <SkillsSection />
          </div>
          <div ref={sectionRefs.current.projects}>
            <ProjectsSection />
          </div>
          <div ref={sectionRefs.current.achievements}>
            <AchievementsSection />
          </div>
          
          {/* <div ref={sectionRefs.current.hobbies}>
            <HobbiesSection hobbies={hobbiesData} />
          </div> */}
          <div ref={sectionRefs.current.responsibility}>
            <ResponsibilitiesSection responsibilities={responsibilitiesData} />
          </div>
          <div ref={sectionRefs.current.contact}>
            <ContactSection socialLinks={socialLinksData} />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
} 