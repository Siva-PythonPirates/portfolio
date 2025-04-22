"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icon } from "@/components/ui/icon"

interface SocialLink {
  platform: string
  url: string
  icon: string
}

interface ContactSectionProps {
  socialLinks?: SocialLink[]
  className?: string
}

const defaultSocialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Siva-PythonPirates",
    icon: "GitHub",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/sivashankar-s-33117b249/",
    icon: "Linkedin",
  },
  {
    platform: "Twitter",
    url: "https://x.com/Shivzalt",
    icon: "Twitter",
  },
  {
    platform: "Email",
    url: "mailto:sivashankars0803@gmail.com",
    icon: "Mail",
  },
]

export function ContactSection({ socialLinks = defaultSocialLinks, className }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        console.error('Error sending message:', data.error);
        // You could add error handling UI here
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // You could add error handling UI here
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section ref={containerRef} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Left Column - Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="p-6 h-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out to me through any of these platforms or fill out the contact form.
              </p>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-primary/5"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={link.icon} size={20} className="text-primary" />
                    </div>
                    <span className="font-medium">{link.platform}</span>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="bg-background/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full relative overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      animate={{ x: isSubmitting ? "0%" : "-100%" }}
                      transition={{ duration: 1.5, repeat: isSubmitting ? Infinity : 0 }}
                    />
                  </Button>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-green-500/20 text-green-500 rounded-md flex items-center"
                    >
                      <Icon name="CheckCircle" size={20} className="text-green-500 mr-2" />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
