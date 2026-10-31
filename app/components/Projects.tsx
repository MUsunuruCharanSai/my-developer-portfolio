"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink, X, ArrowUpRight } from "lucide-react"
import SectionHeader from "./SectionHeader"

const projects = [
  {
    title: "AI-Powered Voice Calling Agent",
    description:
      "Built an AI-powered voice calling agent for a consultancy website that automatically connects with potential clients, engages them in real-time conversations, qualifies leads, and helps convert them into customers.",
    technologies: ["AI Voice Agent", "Real-time Conversation", "Lead Qualification"],
    liveLink: "https://youtu.be/z1_DFpyG0ek",
    githubLink: "https://github.com/MUsunuruCharanSai/AI-Voice-Calling-Agent.git",
    image: "/images/ai-voice-calling-agent.jpg",
    demoLabel: "Watch Demo",
    id: 10,
  },
  {
    title: "GeoPlot",
    description:
      "A land measurement web app that calculates land area and perimeter by marking points on an interactive map or walking around the boundary using GPS. It supports acres, square feet, hectares, location search, satellite maps, and GeoJSON/JSON export.",
    technologies: ["React", "Leaflet", "Turf.js", "Express"],
    liveLink: "https://geoplot-flame.vercel.app",
    githubLink: "https://github.com/MUsunuruCharanSai/GeoPlot.git",
    image: "/images/geoplot.png",
    id: 11,
  },
  {
    title: "Japanese Theme DSA Platform",
    description:
      "A DSA learning and practice platform that makes Data Structures and Algorithms preparation engaging and enjoyable. It combines a Japanese-inspired theme and music with focus features, curated DSA problems, coding-platform links, YouTube explanations, and learning resources.",
    technologies: ["React", "Vite", "Vercel"],
    liveLink: "https://dsa-sheet-online.vercel.app/",
    githubLink: "https://github.com/MUsunuruCharanSai/JapaneseThemeDSAPlatform.git",
    image: "/images/dsa-sheet.png",
    id: 12,
  },
  {
    title: "Live Gold and Silver Rates",
    description:
      "Live Gold & Silver Price website built with Vite and React JS, featuring real-time rate updates and gold/silver quantity calculators with a premium jewellery-inspired UI.",
    technologies: ["Vite", "React.js", "Vercel"],
    liveLink: "https://live-gold-and-silver-rates.vercel.app",
    githubLink: "https://github.com/MUsunuruCharanSai/Live-Gold-and-Silver-Rates.git",
    image: "/images/gold-silver-rates.png",
    id: 13,
  },
  {
    title: "Trend-Wave E-Commerce Website",
    description:
      "Developed a fully functional e-commerce platform with user and admin panels, enabling secure product management and order processing.",
    technologies: ["React.js", "Redux", "Tailwind CSS", "Firebase Authentication", "Firestore"],
    liveLink: "https://trendwave1.netlify.app/",
    githubLink: "https://github.com/MUsunuruCharanSai/TrendWave",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-21%20073506-AkQhojShJeWBj5KZdxkZMVyy617pv8.png",
    id: 1,
  },
  {
    title: "SweetHaven Website",
    description:
      "Developed a feature-rich website for an online sweet shop, including user and admin functionalities for managing orders and cart items.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Firebase Authentication",
      "Node.js",
      "Express.js",
      "Firebase Storage",
      "Firestore",
      "Netlify",
    ],
    liveLink: "https://sweets-heaven.netlify.app/",
    githubLink: "https://github.com/MUsunuruCharanSai/Sweet-Heaven-React-js.git",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-25%20144446-h12b0hX64vphsm1hWbrF2WSrODzepx.png",
    id: 2,
  },
  {
    title: "Book-Resell Website",
    description:
      "Built an efficient book-reselling platform with user and admin panels for managing book listings and user transactions.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Firebase Authentication",
      "Node.js",
      "Express.js",
      "Firebase Storage",
      "Firestore",
      "Netlify",
    ],
    liveLink: "https://booksresell.netlify.app/",
    githubLink: "https://github.com/MUsunuruCharanSai/Book-Resell-React-js.git",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-25%20144546-Zc0ItM5Y8FGTAXXhfq2B6QIxqY8rrJ.png",
    id: 3,
  },
  {
    title: "Royal Touch Product Showcase",
    description: "Developed a responsive product showcase website with WhatsApp contact, increasing sales by 40%.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://musunurucharansai.github.io/RoyalTouch./",
    githubLink: "https://github.com/MUsunuruCharanSai/RoyalTouch.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-21%20073928-TfVGppttCpkfgwO2GzSv65vp6zz4bA.png",
    id: 4,
  },
  {
    title: "Complaints Portal",
    description:
      "Built a complaint platform with like, comment, and filter features, reducing complaint resolution time by 60%.",
    technologies: ["HTML", "CSS", "EJS", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://vit-complaints.onrender.com/",
    githubLink: "https://github.com/MUsunuruCharanSai/VIT-COMPLAINTS",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-21%20074027-wcmVFEjy58ue4fIjo2NCG2RJCvdwVl.png",
    id: 5,
  },
  {
    title: "DoIT Club Website",
    description:
      "A web platform for the DoIT Club at Vishnu Institute of Technology, showcasing events, gallery, and activities.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://lnkd.in/gH84_Ddy",
    githubLink: "https://github.com/MUsunuruCharanSai/DoItClub.git",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-16%20202320-665eFqUKWkHYX03dwRyYxj7k43Tb7W.png",
    id: 0,
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedProject(null)
      }
    }

    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [selectedProject])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null)
      }
    }

    if (selectedProject) {
      window.addEventListener("keydown", handleEscKey)
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [selectedProject])

  return (
    <section id="projects" className="section-shell">
      <div className="page-wrap">
        <SectionHeader eyebrow="Work" title="My Projects" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.24), ease: [0.22, 1, 0.36, 1] }}
              className="group surface surface-glow flex h-full flex-col overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="flex h-full flex-col text-left"
                aria-label={`View project ${project.title}`}
              >
                <div className="relative h-56 overflow-hidden sm:h-72 lg:h-80">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                  <span className="absolute bottom-4 right-4 inline-flex items-center rounded-md border border-[#e8c547]/30 bg-black/70 px-3 py-1.5 text-[11px] tracking-wide text-[#f7f1e4] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View details
                    <ArrowUpRight className="ml-1 h-3 w-3 text-[#e8c547]" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-medium text-[#f7f1e4] sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 mb-5 line-clamp-3 text-[15px] leading-7 text-[#d8ccb4]">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#d4af37]/25 px-2.5 py-1 text-[11px] text-[#e8c547]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1 text-[11px] text-[#c4b48f]">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/82 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
          >
            <div
              ref={modalRef}
              className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#e8c547]/30 bg-[#12100c] shadow-[0_0_50px_rgba(212,175,55,0.18)]"
            >
              <div className="relative h-56 sm:h-72">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 768px"
                />
                <button
                  className="absolute right-3 top-3 rounded-md bg-black/70 p-2 text-[#f7f1e4] transition-colors hover:bg-black hover:text-[#e8c547]"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="overflow-y-auto p-6 sm:p-8">
                <h3 id="project-dialog-title" className="text-2xl font-medium text-[#f7f1e4] sm:text-3xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#d8ccb4]">{selectedProject.description}</p>

                <div className="mt-6">
                  <h4 className="mb-2 text-xs uppercase tracking-[0.18em] text-[#e8c547]">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#d4af37]/25 px-2.5 py-1 text-xs text-[#e9dfc8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold h-11 px-5"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    {selectedProject.demoLabel || "Live Demo"}
                  </Link>
                  <Link
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold h-11 px-5"
                  >
                    <Github size={14} className="mr-2" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
