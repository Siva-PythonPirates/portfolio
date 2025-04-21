"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "../ui/icon"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { hobbiesData } from "@/data/sections-data"

interface Hobby {
  title: string
  description: string
  icon: string
  skillLevel: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  details: string[]
}

interface HobbiesSectionProps {
  className?: string
}

const skillLevelColors: Record<Hobby["skillLevel"], string> = {
  Beginner: "bg-blue-500/10 text-blue-500",
  Intermediate: "bg-yellow-500/10 text-yellow-500",
  Advanced: "bg-green-500/10 text-green-500",
  Expert: "bg-purple-500/10 text-purple-500",
}

export function HobbiesSection({ className }: HobbiesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFlipped) {
        setActiveIndex((prev) => (prev + 1) % hobbiesData.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isFlipped])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isFlipped) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const nextHobby = () => {
    if (!isFlipped) {
      setActiveIndex((prev) => (prev + 1) % hobbiesData.length)
    }
  }

  const prevHobby = () => {
    if (!isFlipped) {
      setActiveIndex((prev) => (prev - 1 + hobbiesData.length) % hobbiesData.length)
    }
  }

  return (
    <section className={cn("w-full min-h-[600px] flex flex-col items-start justify-start p-8 relative", className)}>
      <div className="grid-pattern opacity-5" />
      
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-4xl font-bold">
          <span className="text-white">My Hobbies</span>
          <span className="text-gray-500"> & Interests</span>
        </h2>
      </div>

      <div className="w-full max-w-4xl perspective-1200" ref={containerRef}>
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-white"
            onClick={prevHobby}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-white"
            onClick={nextHobby}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                transform: isFlipped ? "none" : `perspective(1000px) rotateY(${mousePosition.x * 20}deg) rotateX(${-mousePosition.y * 20}deg)`,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <Card className={cn(
                "w-full min-h-[400px] bg-[#0A0F1C] border-gray-800",
                isFlipped && "rotate-y-180"
              )}>
                <div className="absolute inset-0 backface-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-white text-2xl">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Icon name={hobbiesData[activeIndex].icon} className="h-8 w-8" />
                        </motion.div>
                        {hobbiesData[activeIndex].title}
                      </CardTitle>
                      <Badge className={cn(
                        "ml-2 text-sm font-medium",
                        skillLevelColors[hobbiesData[activeIndex].skillLevel as Hobby["skillLevel"]]
                      )}>
                        {hobbiesData[activeIndex].skillLevel}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400 text-base mt-2">
                      {hobbiesData[activeIndex].description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Click to see more details...</p>
                  </CardContent>
                </div>

                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-3">
                      {hobbiesData[activeIndex].details.map((detail, index) => (
                        <li key={index} className="text-gray-400">{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="absolute bottom-4 w-full">
                    <p className="text-sm text-gray-500">Click to flip back</p>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 gap-2">
            {hobbiesData.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={cn(
                  "w-2 h-2 p-0 rounded-full",
                  index === activeIndex ? "bg-white" : "bg-gray-700"
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}