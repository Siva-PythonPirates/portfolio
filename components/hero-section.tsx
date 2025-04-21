"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const hexagons: {
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      color: string
    }[] = []

    const colors = ["#8b5cf6", "#6366f1", "#ec4899", "#06b6d4"]

    // Create hexagons
    for (let i = 0; i < 30; i++) {
      hexagons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 10,
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const drawHexagon = (x: number, y: number, size: number, color: string, opacity: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const xPos = x + size * Math.cos(angle)
        const yPos = y + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(xPos, yPos)
        } else {
          ctx.lineTo(xPos, yPos)
        }
      }
      ctx.closePath()
      ctx.fillStyle = `${color}${Math.floor(opacity * 255)
        .toString(16)
        .padStart(2, "0")}`
      ctx.fill()
      ctx.strokeStyle = `${color}${Math.floor((opacity + 0.1) * 255)
        .toString(16)
        .padStart(2, "0")}`
      ctx.lineWidth = 1
      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      hexagons.forEach((hexagon) => {
        hexagon.y += hexagon.speed
        if (hexagon.y > canvas.height + hexagon.size) {
          hexagon.y = -hexagon.size
          hexagon.x = Math.random() * canvas.width
        }

        drawHexagon(hexagon.x, hexagon.y, hexagon.size, hexagon.color, hexagon.opacity)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ filter: "blur(1px)" }} />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10"></div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300"
          >
            <Code className="mr-2 h-4 w-4" />
            <span>Software Engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter neon-glow"
          >
            SIVASHANKAR S
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-16"
          >
            <TypeAnimation
              sequence={[
                "Building modern web applications",
                1000,
                "Crafting elegant user interfaces",
                1000,
                "Developing scalable solutions",
                1000,
                "Turning ideas into code",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="font-light"
            />
          </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:shadow-purple-600/40"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/50 text-white hover:bg-purple-500/10 transition-all duration-300"
                onClick={() => {
                  const projectsSection = document.getElementById("projects")
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                View Projects
              </Button>
            </motion.div>
          <br />
          <br />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-10 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <ArrowDown className="h-8 w-8 text-purple-400 hover:text-purple-500 transition-all duration-300" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

