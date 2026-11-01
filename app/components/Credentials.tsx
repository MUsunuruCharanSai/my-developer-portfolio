"use client"

import { motion } from "framer-motion"
import { GraduationCap, Languages, Award } from "lucide-react"
import SectionHeader from "./SectionHeader"

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

const Credentials = () => {
  return (
    <section id="credentials" className="relative scroll-mt-28 pb-16 sm:pb-20">
      <div className="page-wrap">
        <SectionHeader eyebrow="Profile" title="Education & Certifications" />

        <div className="grid gap-5 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gold-card p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap className="h-4 w-4 text-gold" />
              <h3 className="font-serif text-xl text-[#f3ead7]">Education</h3>
            </div>
            {education.map((item) => (
              <div key={item.title} className="rounded-xl border border-[#d4af37]/15 bg-[#0a0907] p-4">
                <h4 className="font-medium text-[#f3ead7]">{item.title}</h4>
                <p className="mt-1 text-sm text-[#cbbd9a]">{item.institution}</p>
                <p className="text-sm text-[#b8a88a]">{item.period}</p>
                <p className="mt-1 text-sm text-gold-soft">{item.grade}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gold-card p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <Languages className="h-4 w-4 text-gold" />
              <h3 className="font-serif text-xl text-[#f3ead7]">Languages</h3>
            </div>
            <div className="flex gap-2">
              {["English", "Telugu"].map((lang) => (
                <span key={lang} className="rounded-full border border-[#d4af37]/30 px-3 py-1 text-sm text-[#e8dfcc]">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gold-card p-6 lg:col-span-1"
          >
            <div className="mb-5 flex items-center gap-3">
              <Award className="h-4 w-4 text-gold" />
              <h3 className="font-serif text-xl text-[#f3ead7]">Achievements</h3>
            </div>
            <p className="text-sm leading-6 text-[#cbbd9a]">
              Ranked among the top 50 of 2 lakh participants in GUVI&apos;s Skill-a-thon. Mentor at the campus DoIT Club,
              sharing AWS and software development knowledge.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gold-card mt-5 p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <Award className="h-4 w-4 text-gold" />
            <h3 className="font-serif text-xl text-[#f3ead7]">Certifications</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => (
              <div key={item.title} className="rounded-xl border border-[#d4af37]/15 bg-[#0a0907] p-4">
                <h4 className="font-medium text-[#f3ead7]">{item.title}</h4>
                <p className="mt-1 text-sm text-[#cbbd9a]">{item.details}</p>
                {item.achievement && <p className="mt-2 text-sm text-gold-soft">{item.achievement}</p>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Credentials
