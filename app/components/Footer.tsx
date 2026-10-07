"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-800 text-white py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">CHARAN SAI</h3>
            <p className="text-gray-400 text-sm">MERN Stack Developer | Full Stack Developer</p>
          </div>

          <div className="flex space-x-4">
            <SocialLink href="https://github.com/MUsunuruCharanSai" icon={<Github size={20} />} label="GitHub" />
            <SocialLink
              href="https://www.linkedin.com/in/charan-sai-musunuru-90ba59261/"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
            <SocialLink href="mailto:charansaimusunuru@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MUSUNURU CHARAN SAI. All rights reserved.
          </p>

          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              Back to top <ArrowUp size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon, label }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
    aria-label={label}
  >
    {icon}
  </Link>
)

export default Footer
