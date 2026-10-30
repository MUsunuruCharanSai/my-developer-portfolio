"use client"

import { motion } from "framer-motion"
import SectionHeader from "./SectionHeader"

const skillCategories = [
  {
    name: "Web Development",
    icon: "🌐",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript (Intermediate)", level: 80 },
      { name: "Bootstrap", level: 85 },
      { name: "React.js", level: 85 },
    ],
  },
  {
    name: "Backend Development",
    icon: "🖥️",
    skills: [
      { name: "Node.js (Intermediate)", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    name: "AI & Agent Systems",
    icon: "🤖",
    skills: [
      { name: "LangChain", level: 80 },
      { name: "LangGraph", level: 75 },
      { name: "RAG", level: 80 },
      { name: "MCP", level: 75 },
    ],
  },
  {
    name: "Programming Languages",
    icon: "👨‍💻",
    skills: [{ name: "Python", level: 70 }],
  },
  {
    name: "Version Control",
    icon: "📊",
    skills: [{ name: "Git", level: 80 }],
  },
  {
    name: "Design Tools",
    icon: "🎨",
    skills: [
      { name: "Figma", level: 75 },
      { name: "Canva", level: 80 },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="page-wrap">
        <SectionHeader eyebrow="Toolkit" title="My Skills" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="surface surface-glow h-full p-7 sm:p-8"
            >
              <h3 className="mb-6 flex items-center text-xl font-medium text-[#f7f1e4]">
                <span className="mr-2 text-lg">{category.icon}</span>
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-[#e9dfc8]">{skill.name}</span>
                      <span className="text-[#e8c547]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#2a2418]">
                      <motion.div
                        className="gold-bar h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
