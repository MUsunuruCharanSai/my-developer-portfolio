"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Languages, Award, Briefcase, ChevronDown, ChevronUp } from "lucide-react"

const About = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const sections = [
    {
      id: "education",
      title: "Education",
      icon: GraduationCap,
      content: [
        {
          title: "B.Tech, IT",
          institution: "VISHNU INSTITUTE OF TECHNOLOGY",
          period: "2022-26 | BHIMAVARAM",
          grade: "CGPA: 8.53",
        },
        {
          title: "Intermediate, MPC",
          institution: "SRI CHAITANYA COLLEGE",
          period: "2020-22 | VIJAYAWADA",
          grade: "PERCENTAGE: 85.4%",
        },
        {
          title: "SSC Board",
          institution: "SRI CHAITANYA SCHOOL",
          period: "2019-20 | NUZIVIDU",
          grade: "PERCENTAGE: 97.3%",
        },
      ],
    },
    {
      id: "experience",
      title: "Experience",
      icon: Briefcase,
      content: [
        {
          title: "Volteo Maritime | Intern | Feb 2025–Jun 2025 | Kakinada, Andhra Pradesh",
          description: "FULL-STACK: React.js | Node.js | MongoDB | Firebase",
          details: [
            "Built and deployed 3 live applications for APMB: IES, HRMS, and SMWTC -- all accessible via the official APMaritime website.",
            "HRMS is actively used by 250+ employees daily.",
            "IES is implemented across 6 ports and used by 2 HODs.",
            "SMWTC streamlines work allocation across multiple departments.",
            "Also contributed to Smartport and other digitalization efforts.",
            "Presented progress to the APMB CEO in key meetings and worked under a Technical Consultant.",
            "Earned a decent stipend for delivering real-world impact.",
          ],
          highlight: true,
        },
        {
          title: "Mentor at Campus DOIT Club",
          description: "Guiding juniors and teaching AWS (Amazon Web Services)",
        },
      ],
    },
    {
      id: "languages",
      title: "Languages & Profile",
      icon: Languages,
      content: [
        { title: "Languages", items: ["English", "Telugu"] },
        {
          title: "Profile Summary",
          description:
            "I'm a passionate Web Developer with experience in React.js, Node.js, Express.js, MongoDB, Firebase, and Python, focused on building scalable full-stack applications. I enjoy creating responsive, user-friendly interfaces using Bootstrap, Figma, and Canva, and I'm comfortable using Git for version control and collaboration. I completed an onsite Full Stack internship at Volteo Maritime, where I developed real-world solutions now used across ports and departments. I'm always eager to learn, improve, and stay up-to-date in the fast-paced world of web development.",
        },
      ],
    },
    {
      id: "certifications",
      title: "Certifications & Achievements",
      icon: Award,
      content: [
        { title: "React & Redux", details: "Complete Coding by Prashant Sir (24-July-2024)" },
        {
          title: "Figma",
          details: "By Guvi (10-March-2024)",
          achievement: "Ranked in the top 50 among 2 lakh participants in Guvi's Skill-a-thon",
        },
        { title: "Git", details: "By Let's Upgrade (04-April-2024)" },
        { title: "Python", details: "By HackerRank" },
      ],
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
          {...fadeInUp}
        >
          About Me
        </motion.h2>
        <motion.div className="space-y-4 sm:space-y-6" variants={staggerChildren} initial="initial" animate="animate">
          {sections.map((section) => (
            <motion.div key={section.id} className="bg-white rounded-lg shadow-lg overflow-hidden" variants={fadeInUp}>
              <button
                className="w-full p-4 sm:p-6 flex justify-between items-center text-left focus:outline-none bg-gradient-to-r from-gray-50 to-white"
                onClick={() => toggleSection(section.id)}
                aria-expanded={expandedSection === section.id}
                aria-controls={`content-${section.id}`}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 line-clamp-1">
                    {section.title}
                  </h3>
                </div>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>

              {expandedSection === section.id && (
                <div className="p-4 sm:p-6 bg-gray-50" id={`content-${section.id}`}>
                  {section.content.map((item, index) => (
                    <div
                      key={index}
                      className={`mb-4 sm:mb-6 last:mb-0 ${
                        item.highlight ? "p-3 sm:p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500" : ""
                      }`}
                    >
                      {"title" in item && (
                        <h4 className="font-semibold text-base sm:text-lg mb-2 text-purple-600 break-words">
                          {item.title}
                        </h4>
                      )}

                      {"institution" in item && (
                        <div className="text-sm sm:text-base">
                          <p className="text-gray-600">{item.institution}</p>
                          <p className="text-gray-600">{item.period}</p>
                          <p className="text-gray-600">{item.grade}</p>
                        </div>
                      )}

                      {"items" in item && (
                        <ul className="list-disc list-inside text-sm sm:text-base">
                          {item.items.map((lang, i) => (
                            <li key={i} className="text-gray-600">
                              {lang}
                            </li>
                          ))}
                        </ul>
                      )}

                      {"description" in item && (
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
                      )}

                      {"details" in item && Array.isArray(item.details) && (
                        <ul className="mt-2 space-y-2 list-disc pl-4 sm:pl-5 text-sm sm:text-base">
                          {item.details.map((detail, i) => (
                            <li key={i} className="text-gray-700">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}

                      {"details" in item && !Array.isArray(item.details) && (
                        <div className="text-sm sm:text-base">
                          <p className="text-gray-600">{item.details}</p>
                          {"achievement" in item && (
                            <p className="text-xs sm:text-sm text-purple-600 mt-1">{item.achievement}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
