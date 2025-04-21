"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

interface Project {
  title: string
  description: string
  link: string
  github?: string
  tech: string[]
  image?: string
}

interface ProjectShowcaseProps {
  projects: Project[]
  className?: string
}

export function ProjectShowcase({ projects, className }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse position tracking for 3D effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Auto-rotate through projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [projects.length])

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-[500px] perspective-1000", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {projects?.map((project, index) => (
          <motion.div
            key={project.title}
            className="absolute w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.8, z: -100 }}
            animate={{
              opacity: index === activeIndex ? 1 : 0.3,
              scale: index === activeIndex ? 1 : 0.8,
              z: index === activeIndex ? 0 : -100,
              x: (index - activeIndex) * 300,
            }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveIndex(index)}
          >
            <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.title}</span>
                  <div className="flex items-center space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GitHubLogoIcon className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  </div>
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
      </motion.div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects?.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === activeIndex
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
} 