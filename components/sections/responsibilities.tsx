"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";

interface Responsibility {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

interface ResponsibilitiesSectionProps {
  responsibilities: Responsibility[];
  className?: string;
}

export function ResponsibilitiesSection({
  responsibilities,
  className,
}: ResponsibilitiesSectionProps) {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className={`py-20 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            Professional Experience
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
          </h2>
          <p className="text-gray-400 text-lg">My professional journey and accomplishments</p>
        </motion.div>

        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {responsibilities.map((role, index) => (
            <motion.div
              key={`${role.company}-${role.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="h-96 perspective-1000"
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{
                  rotateY: flippedIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <motion.div
                  className="absolute w-full h-full backface-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Card
                    className="p-6 h-full bg-gradient-to-br from-gray-900/70 to-gray-800/60 
                    border border-gray-700 backdrop-blur-md hover:shadow-purple-700/30 
                    transition-all duration-500 neon-box flex flex-col rounded-2xl hover:scale-[1.03]"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold">{role.title}</h3>
                        <p className="text-gray-300">{role.company}</p>
                      </div>
                      <Badge variant="secondary" className="mt-2 md:mt-0">
                        {role.period}
                      </Badge>
                    </div>
                    <p className="text-gray-300 mb-4 flex-grow">{role.description}</p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {role.skills.slice(0, 3).map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="hover:bg-purple-800/30 hover:border-purple-400 transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {role.skills.length > 3 && (
                          <Badge
                            variant="outline"
                            className="hover:bg-purple-800/30 hover:border-purple-400 transition-colors duration-300"
                          >
                            +{role.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-purple-400 animate-pulse-slow">
                      <Icon name="FlipHorizontal" size={24} />
                    </div>
                  </Card>
                </motion.div>

                {/* Back */}
                <motion.div
                  className="absolute w-full h-full backface-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Card
                    className="p-6 h-full bg-gradient-to-br from-gray-900/70 to-gray-800/60 
                    border border-gray-700 backdrop-blur-md hover:shadow-purple-700/30 
                    transition-all duration-500 neon-box rounded-2xl"
                  >
                    <h4 className="font-medium mb-4 text-xl text-purple-300">Key Achievements</h4>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                      {role.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-medium mb-2 text-xl text-purple-300">Skills Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="hover:bg-purple-700/30 hover:border-purple-400 transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ResponsibilitiesSection;