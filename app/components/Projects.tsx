"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, X } from "lucide-react"

const projects = [
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
  const [selectedProject, setSelectedProject] = useState(null)
  const modalRef = useRef(null)

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null)
      }
    }

    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      // Restore body scrolling when modal is closed
      document.body.style.overflow = "auto"
    }
  }, [selectedProject])

  // Close modal with escape key
  useEffect(() => {
    const handleEscKey = (event) => {
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
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-base sm:text-lg font-semibold px-2 text-center">View Details</span>
                  </div>
                </div>

                <CardContent className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base line-clamp-2 mb-4">{project.description}</p>
                  </div>

                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white mt-auto"
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal with improved responsiveness */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div
              ref={modalRef}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="relative h-48 sm:h-64">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 768px"
                />
                <button
                  className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
                  {selectedProject.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
                  <Button asChild variant="default" className="w-full sm:w-auto">
                    <Link
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                    <Link
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Link>
                  </Button>
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
