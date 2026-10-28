"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import type { ReactNode } from "react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t border-[#d4af37]/20 bg-[#070604] py-12">
      <div className="page-wrap">
        <div className="mb-8 flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-semibold tracking-[0.16em] text-[#f7f1e4]">CHARAN SAI</h3>
            <p className="mt-1 text-sm text-[#c4b48f]">MERN Stack Developer | Full Stack Developer</p>
          </div>

          <div className="flex gap-2">
            <SocialLink href="https://github.com/MUsunuruCharanSai" icon={<Github size={16} />} label="GitHub" />
            <SocialLink
              href="https://www.linkedin.com/in/charan-sai-musunuru-90ba59261/"
              icon={<Linkedin size={16} />}
              label="LinkedIn"
            />
            <SocialLink href="mailto:charansaimusunuru@gmail.com" icon={<Mail size={16} />} label="Email" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#d4af37]/20 pt-6 md:flex-row">
          <p className="text-xs text-[#8f846c]">
            &copy; {new Date().getFullYear()} MUSUNURU CHARAN SAI. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-xs text-[#c4b48f] transition-colors hover:text-[#e8c547]"
            aria-label="Scroll to top"
          >
            Back to top <ArrowUp size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon, label }: { href: string; icon: ReactNode; label: string }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl border border-[#d4af37]/25 p-2.5 text-[#c4b48f] transition-all duration-300 hover:border-[#e8c547]/60 hover:text-[#e8c547] hover:shadow-[0_0_18px_rgba(232,197,71,0.2)]"
    aria-label={label}
  >
    {icon}
  </Link>
)

export default Footer
