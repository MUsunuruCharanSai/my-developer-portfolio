"use client"

import { motion } from "framer-motion"
import SectionHeader from "./SectionHeader"

const roles = [
  {
    title: "Software Engineer",
    company: "Volteo Maritime",
    period: "March 2026 – Present",
    current: true,
    bullets: [
      "Migrating frontend applications from Angular to React.js while ensuring system stability and a seamless user experience.",
      "Developing and enhancing the SmartPort application to meet evolving business requirements.",
      "Identifying and resolving performance bottlenecks and optimization issues across application modules.",
      "Integrating third-party APIs and services to improve application functionality and interoperability.",
    ],
  },
  {
    title: "Full-Stack Intern",
    company: "Volteo Maritime",
    period: "October 2025 – February 2026",
    current: false,
    bullets: [
      "Contributed to the development and enhancement of IES and SmartPort applications.",
      "Supported application maintenance, feature enhancements, debugging, and issue resolution.",
      "Collaborated with the development team to improve application functionality, reliability, and performance.",
    ],
  },
  {
    title: "Full-Stack Intern",
    company: "Volteo Maritime",
    period: "February 2025 – June 2025",
    current: false,
    bullets: [
      "Contributed to the design, development, testing, and deployment of enterprise applications, including IES, HRMS, and SMWTC.",
      "Developed and maintained REST APIs, performed debugging, and validated application functionality.",
      "Assisted in preparing technical and functional documentation and maintaining project documentation libraries.",
      "Contributed to process improvement initiatives to enhance application performance, usability, and operational efficiency.",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="page-wrap">
        <SectionHeader eyebrow="Career" title="Experience" />

        <div className="relative">
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-[#e8c547] via-[#d4af37]/40 to-transparent sm:left-[11px]" />

          <div className="space-y-7">
            {roles.map((role, index) => (
              <motion.article
                key={`${role.title}-${role.period}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-9 sm:pl-12"
              >
                <div className="absolute left-0 top-7 h-3 w-3 rounded-full border-2 border-[#e8c547] bg-[#070604] shadow-[0_0_12px_rgba(232,197,71,0.7)] sm:left-1" />

                <div className="surface surface-glow p-6 sm:p-8 lg:p-9">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs uppercase tracking-[0.16em] text-[#e8c547]">{role.company}</span>
                    {role.current && (
                      <span className="rounded-full border border-[#e8c547]/40 bg-[#e8c547]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#fff1b8]">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-medium text-[#f7f1e4] sm:text-3xl">{role.title}</h3>
                  <p className="mt-1 mb-5 text-sm text-[#c4b48f]">{role.period}</p>

                  <ul className="space-y-2.5">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[15px] leading-7 text-[#d8ccb4]">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8c547]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
