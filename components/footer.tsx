"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/10 to-transparent z-0"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h3 className="text-xl font-bold tracking-tighter mb-2 neon-glow">SIVASHANKAR S</h3>
              <p className="text-sm text-gray-400">© {currentYear} All rights reserved.</p>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <ul className="space-x-6 flex justify-center">
                <li>
                  <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.nav>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center md:justify-end space-x-4"
            >
              <a
                href="https://github.com/Siva-PythonPirates"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/sivashankar-s-33117b249/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/Shivzalt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Bottom Links
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 pt-8 border-t border-gray-800 text-center"
          >
            <div className="flex justify-center space-x-4">
              <a href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-xs text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </motion.div> */}
        </div>
      </div>
    </footer>
  )
}

