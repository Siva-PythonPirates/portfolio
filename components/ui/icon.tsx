"use client"

import { useEffect, useState } from "react"
import * as LucideIcons from "lucide-react"

interface IconProps {
  name: string
  size?: number
  className?: string
}

export function Icon({ name, size = 24, className }: IconProps) {
  const [IconComponent, setIconComponent] = useState<any>(null)

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const icons = await import("lucide-react")
        // @ts-ignore
        setIconComponent(() => icons[name] || icons.HelpCircle)
      } catch (error) {
        console.error(`Error loading icon ${name}:`, error)
        const { HelpCircle } = await import("lucide-react")
        setIconComponent(() => HelpCircle)
      }
    }
    loadIcon()
  }, [name])

  if (!IconComponent) {
    return (
      <div 
        className={`animate-pulse bg-muted rounded ${className || ''}`}
        style={{ width: size, height: size }}
      />
    )
  }

  return <IconComponent size={size} className={className} />
} 