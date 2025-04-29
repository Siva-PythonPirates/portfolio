// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Code, Database, Globe, Layout, Terminal, PenToolIcon as Tool } from "lucide-react";

// export default function SkillsSection() {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   // Technical skills categories based on your resume:
//   const skillCategories = [
//     {
//       title: "Programming Languages",
//       icon: <Terminal className="h-6 w-6" />,
//       skills: [
//         { name: "Python", level: 90 },
//         { name: "Java", level: 85 },
//         { name: "C", level: 80 },
//         { name: "Dart", level: 75 },
//       ],
//       color: "from-indigo-500 to-purple-500",
//       delay: 0.1,
//     },
//     {
//       title: "Tools & Software",
//       icon: <Tool className="h-6 w-6" />,
//       skills: [
//         { name: "Git & GitHub", level: 90 },
//         { name: "UiPath Studio", level: 85 },
//         { name: "Star UML", level: 80 },
//       ],
//       color: "from-green-500 to-teal-500",
//       delay: 0.2,
//     },
//     {
//       title: "Database Management",
//       icon: <Database className="h-6 w-6" />,
//       skills: [
//         { name: "SQL Programming", level: 85 },
//       ],
//       color: "from-red-500 to-pink-500",
//       delay: 0.3,
//     },
//   ];

//   // Soft skills as a list of badges
//   const softSkills = [
//     "Problem Solving",
//     "Critical Thinking",
//     "Logical Reasoning",
//     "Adaptiveness",
//     "Team Player",
//     "Leadership",
//   ];

//   return (
//     <section id="skills" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black z-0"></div>
//       <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
//         <div ref={ref} className="max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-16"
//           > //   <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative"> //     Technical Skills //     <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span> //   </h2> //   <p className="text-gray-400 text-lg"> //     My technical expertise and proficiency //   </p> // </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {skillCategories.map((category, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.5, delay: category.delay }}
//                 className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 neon-box"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
//                     {category.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold">{category.title}</h3>
//                 </div>
//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div key={skillIndex}>
//                       <div className="flex justify-between mb-1">
//                         <span className="text-gray-300">{skill.name}</span>
//                         <span className="text-gray-400">{skill.level}%</span>
//                       </div>
//                       <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
//                           transition={{ duration: 1, delay: category.delay + skillIndex * 0.1 }}
//                           className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Soft Skills Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="mt-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center inline-block relative">
//               Soft Skills
//               <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
//             </h2>
//             <div className="mt-4 flex flex-wrap justify-center gap-4">
//               {softSkills.map((skill, idx) => (
//                 <span
//                   key={idx}
//                   className="px-4 py-2 border border-purple-500/30 rounded-full text-gray-300 hover:bg-purple-500/10 transition-colors duration-300"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </motion.div>

//           {/* Additional Skill Icons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center"
//           >
//             {[
//               { name: "Git", icon: <Code className="h-8 w-8 mx-auto mb-2 text-gray-400" /> },
//               { name: "REST API", icon: <Globe className="h-8 w-8 mx-auto mb-2 text-gray-400" /> },
//               { name: "GraphQL", icon: <Database className="h-8 w-8 mx-auto mb-2 text-gray-400" /> },
//               { name: "Testing", icon: <Tool className="h-8 w-8 mx-auto mb-2 text-gray-400" /> },
//               { name: "UI/UX", icon: <Layout className="h-8 w-8 mx-auto mb-2 text-gray-400" /> },
//               { name: "CLI", icon: <Terminal className="h-8 w-8 mx-auto mb-2 text-gray-400" /> },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="p-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
//               >
//                 {item.icon}
//                 <span className="text-gray-300">{item.name}</span>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Globe, Layout, Server, Terminal, PenToolIcon as Tool, Workflow, Shield, Key, Bug, Lock, Layers } from "lucide-react"

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-6 w-6" />,
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
      ],
      color: "from-blue-500 to-cyan-400",
      delay: 0.1,
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Flask", logo: "https://imgs.search.brave.com/54LX0wjNt6-0Zg8jY7UK-ST_iJzlZnIMAFKudJjWtB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzE4OC0x/ODgyNDE2X2ZsYXNr/LXB5dGhvbi1sb2dv/LWhkLXBuZy1kb3du/bG9hZC5wbmc" },
      ],
      color: "from-purple-500 to-indigo-500",
      delay: 0.2,
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "MySQL", logo: "https://imgs.search.brave.com/V_Bi9H91yErhgempAyQmfkK2bKA7eoMR-O_Y4O6deG8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9t/eXNxbC13aGl0ZS1s/b2dvLXBuZy1pbWFn/ZS03MDE3NTE2OTQ3/NzE3ODEwYnppcmh6/cnlmLnBuZw" },
      ],
      color: "from-green-500 to-emerald-400",
      delay: 0.3,
    },
    {
      title: "DevOps (Basics)",
      icon: <Workflow className="h-6 w-6" />,
      skills: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", logo: "https://i.pinimg.com/736x/4a/41/7d/4a417d1f8cab870d4e93498ae1ae2d21.jpg" },
        { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      ],
      color: "from-orange-500 to-amber-400",
      delay: 0.4,
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        { name: "Cryptography", logo: "https://cdn-icons-png.flaticon.com/512/4661/4661536.png",},
        { name: "Steganography", logo: "https://cdn-icons-png.flaticon.com/512/10335/10335693.png",},
        { name: "Forensics", logo: "https://cdn-icons-png.flaticon.com/512/2920/2920257.png",},
        { name: "VAPT", logo: "https://cdn-icons-png.flaticon.com/512/10493/10493475.png", },
        { name: "Reverse Engineering", logo: "https://cdn-icons-png.flaticon.com/512/10493/10493455.png",},
      ],
      color: "from-red-500 to-pink-400",
      delay: 0.5,
    },    
    {
      title: "UiPath Tools",
      icon: <Layers className="h-6 w-6" />,
      skills: [
        { name: "Studio", logo: "https://raw.githubusercontent.com/Shivzalt/GitBot/refs/heads/main/Screenshot%202025-02-27%20163934.png" },
        { name: "Assistant", logo: "https://raw.githubusercontent.com/Shivzalt/GitBot/refs/heads/main/Screenshot%202025-02-27%20164246.png" },
        { name: "Orchestrator", logo: "https://cdn-icons-png.flaticon.com/512/4177/4177500.png" },
        { name: "AI Center", logo: "https://cdn-icons-png.flaticon.com/128/5337/5337412.png" },
      ],
      color: "from-yellow-500 to-lime-400",
      delay: 0.6,
    }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black z-0"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div   initial={{ opacity: 0, y: 20 }}   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}   transition={{ duration: 0.5 }}   className="text-center mb-16" >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">     Technical Skills     <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>   </h2>   <p className="text-gray-400 text-lg">     My technical expertise and proficiency   </p> </motion.div>
        <div ref={ref} className="max-w-5xl mx-auto"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8">   {skillCategories.map((category, index) => (     <motion.div       key={index}       initial={{ opacity: 0, y: 20 }}       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}       transition={{ duration: 0.5, delay: category.delay }}       className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 neon-box"     >       <div className="flex items-center mb-6">         <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>{category.icon}</div>         <h3 className="text-xl font-semibold">{category.title}</h3>       </div>       <div className="grid grid-cols-2 gap-4">         {category.skills.map((skill, skillIndex) => (           <div key={skillIndex} className="flex items-center space-x-3">             <img src={skill.logo} alt={skill.name} className="h-8 w-8" />             <span className="text-gray-300">{skill.name}</span>           </div>         ))}       </div>     </motion.div>   ))} </div>
        </div>
      </div>
    </section>
  )
}
