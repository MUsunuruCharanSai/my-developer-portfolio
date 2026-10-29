"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import SectionHeader from "./SectionHeader"
import Experience from "./Experience"

const education = [
  {
    title: "B.Tech, IT",
    institution: "Vishnu Institute of Technology",
    period: "2022–26 | Bhimavaram",
    grade: "CGPA: 8.53",
  },
]

const certifications = [
  { title: "Agentic AI Certified Foundations Associate", details: "Oracle" },
  { title: "Prompt Engineering for Developers", details: "Infosys Springboard" },
  { title: "React & Redux", details: "Complete Coding by Prashant Sir (24 July 2024)" },
  {
    title: "Figma",
    details: "By Guvi (10 March 2024)",
    achievement: "Ranked in the top 50 among 2 lakh participants in Guvi's Skill-a-thon",
  },
  { title: "Git", details: "By Let's Upgrade (04 April 2024)" },
  { title: "Python", details: "By HackerRank" },
]

const About = () => {
  return (
    <>
      <section id="about" className="section-shell">
        <div className="page-wrap">
          <SectionHeader eyebrow="Profile" title="About Me" />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="surface surface-glow space-y-5 p-6 sm:p-8 text-[15px] leading-8 text-[#d8ccb4] sm:text-base"
          >
            <p>
              I am a Software Engineer at Volteo Maritime, specializing in scalable web applications and AI-driven
              solutions. Having progressed from Full-Stack Intern to Software Engineer, I have gained experience in
              enterprise application development, Angular-to-React migration, API integration, and performance
              optimization across maritime systems.
            </p>
            <p>
              I build and deploy practical digital products, including AI-powered voice calling agents, GPS-based land
              measurement applications, and developer learning platforms. My technical expertise spans React.js, Node.js,
              Express.js, MongoDB, LangChain, LangGraph, RAG, and MCP.
            </p>
            <p>
              Ranked among the{" "}
              <span className="font-medium text-[#f7f1e4]">top 50 out of 2 lakh participants in GUVI’s Skill-a-thon</span>
              , I am committed to continuous learning and technical excellence. I also mentor aspiring developers through
              the campus DoIT Club, sharing knowledge of AWS and software development.
            </p>
            <p>I strive to engineer reliable, scalable solutions that transform ideas into impactful products.</p>
          </motion.div>
        </div>
      </section>

      <Experience />

      <section className="section-shell pt-4 sm:pt-8">
        <div className="page-wrap">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface surface-glow p-6 sm:p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-[#e8c547]" />
              <h3 className="text-2xl font-medium text-[#f7f1e4]">Education</h3>
            </div>
            {education.map((item) => (
              <div key={item.title} className="rounded-xl border border-[#d4af37]/25 bg-black/35 p-5">
                <h4 className="text-lg font-medium text-[#f7f1e4]">{item.title}</h4>
                <p className="mt-1 text-sm text-[#d8ccb4]">{item.institution}</p>
                <p className="text-sm text-[#c4b48f]">{item.period}</p>
                <p className="mt-1 text-sm text-[#e8c547]">{item.grade}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface surface-glow mt-6 p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <Award className="h-5 w-5 text-[#e8c547]" />
              <h3 className="text-2xl font-medium text-[#f7f1e4]">Certifications & Achievements</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((item) => (
                <div key={item.title} className="rounded-xl border border-[#d4af37]/22 bg-black/35 p-4">
                  <h4 className="font-medium text-[#f7f1e4]">{item.title}</h4>
                  <p className="mt-1 text-sm text-[#d8ccb4]">{item.details}</p>
                  {item.achievement && <p className="mt-2 text-sm text-[#e8c547]">{item.achievement}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About
