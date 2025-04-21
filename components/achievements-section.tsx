"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Medal, Trophy, User, Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = {
    cybersecurity: [
      {
        icon: <Trophy className="h-10 w-10 text-yellow-400" />,
        title: "Cyber Conquest Winner",
        description: "Winner of the Cyber Conquest event at Chennai Institute of Technology (Cybersecurity).",
        year: "2023",
        color: "from-yellow-500 to-amber-500",
        delay: 0.1,
      },
      {
        icon: <Award className="h-10 w-10 text-orange-400" />,
        title: "5th Place – Nexus Elite Security CTF",
        description: "Secured 5th Place in the Nexus Elite Security CTF competition (Cybersecurity).",
        year: "2023",
        color: "from-orange-500 to-red-500",
        delay: 0.2,
      },
      {
        icon: <Award className="h-10 w-10 text-red-400" />,
        title: "6th Place – PeCan+ CTF",
        description: "Achieved 6th Place in the PeCan+ Capture the Flag event at Edith Cowan University (Cybersecurity).",
        year: "2023",
        color: "from-red-500 to-pink-500",
        delay: 0.3,
      },
      {
        icon: <Award className="h-10 w-10 text-gray-400" />,
        title: "37th Rank – Penathon2k24 CTF",
        description: "Secured 37th Rank in the national-level Penathon2k24 CTF challenge (Cybersecurity).",
        year: "2024",
        color: "from-gray-500 to-gray-700",
        delay: 0.4,
      },
    ],
    softwareDevelopment: [
      {
        icon: <Trophy className="h-10 w-10 text-blue-400" />,
        title: "Game Jam Winner",
        description: "Winner of Game Jam at Techathon2k23, Rajalakshmi Engineering College (Game Development).",
        year: "2023",
        color: "from-blue-500 to-cyan-500",
        delay: 0.1,
      },
      {
        icon: <Trophy className="h-10 w-10 text-purple-400" />,
        title: "Hack-A-Bot Winner",
        description: "Winner of Hack-A-Bot at UiPath Community and Jaipur National University (Robotic Process and Automation).",
        year: "2023",
        color: "from-purple-500 to-indigo-500",
        delay: 0.2,
      },
    ],
    databaseManagement: [
      {
        icon: <Medal className="h-10 w-10 text-green-400" />,
        title: "2nd Runner Up – SQL Detective",
        description: "Achieved 2nd Runner Up in SQL Detective at Techathon2k23, Rajalakshmi Engineering College (Database Management).",
        year: "2023",
        color: "from-green-500 to-emerald-500",
        delay: 0.1,
      },
    ],
    leadership: [
      {
        icon: <User className="h-10 w-10 text-blue-400" />,
        title: "Founder – Cyber Sentinels Club",
        description: "Founded and led the Cyber Sentinels Club at Rajalakshmi Engineering College, focusing on cybersecurity awareness and competitions.",
        year: "2023-Present",
        color: "from-blue-500 to-indigo-500",
        delay: 0.1,
      },
      {
        icon: <User className="h-10 w-10 text-cyan-400" />,
        title: "App Development Mentor – DEVs Club",
        description: "Mentored peers at DEVs Club, Rajalakshmi Engineering College—conducted Flutter workshops and led a team for Smart India Hackathon 2024.",
        year: "2023-2024",
        color: "from-cyan-500 to-blue-500",
        delay: 0.2,
      },
    ],
    workshops: [
      {
        icon: <Mic className="h-10 w-10 text-purple-400" />,
        title: "Bridging Gap Between AI and Automation Workshop",
        description: "Conducted a 3-day workshop on RPA using UiPath at SVREC Nandhiyal using UiPath Beginner to Advanced concepts.",
        year: "2024",
        color: "from-purple-500 to-indigo-500",
        delay: 0.1,
      },
      {
        icon: <Mic className="h-10 w-10 text-blue-400" />,
        title: "Getting to know RPA using UiPath Workshop",
        description: "Conducted a 3-day workshop at Sairam Engineering College covering UiPath beginner topics and Clipboard AI tool.",
        year: "2024",
        color: "from-blue-500 to-cyan-500",
        delay: 0.2,
      },
      {
        icon: <Mic className="h-10 w-10 text-green-400" />,
        title: "Flutter App Development",
        description: "Conducted Flutter app development workshops for DEVs REC, GDSC REC and INTELLEXA Club REC.",
        year: "2023-2024",
        color: "from-green-500 to-emerald-500",
        delay: 0.3,
      },
      {
        icon: <Mic className="h-10 w-10 text-orange-400" />,
        title: "CTF Workshop",
        description: "Conducted a Capture The Flag (CTF) workshop for the root@localhost CTF event by Cyber Sentinels Club at REC.",
        year: "2023",
        color: "from-orange-500 to-red-500",
        delay: 0.4,
      },
    ],
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/10 to-black z-0"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              Achievements
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
            </h2>
            <p className="text-gray-400 text-lg">Recognition and accomplishments throughout my career</p>
          </motion.div>

          {Object.entries(achievements).map(([category, items], index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold text-white mb-6 capitalize">
                {category.replace(/([A-Z])/g, " $1")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: achievement.delay }}
                  >
                    <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full overflow-hidden neon-box">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} mr-4 shrink-0`}>
                            {achievement.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{achievement.title}</h3>
                            <p className="text-gray-300">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
