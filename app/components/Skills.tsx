"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

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
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full">
                <CardContent className="p-4 sm:p-6 h-full">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
                    <span className="mr-2 text-2xl sm:text-3xl">{category.icon}</span>
                    {category.name}
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1 sm:space-y-2">
                        <div className="flex justify-between text-sm sm:text-base">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-indigo-600">{skill.level}%</span>
                        </div>

                        <div className="relative">
                          <Progress
                            value={skill.level}
                            className="h-1.5 sm:h-2 bg-gradient-to-r from-indigo-500 to-purple-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
