"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Linkedin, Send } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import SectionHeader from "./SectionHeader"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    console.log("Form submitted:", { name, email, message })
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
      variant: "default",
    })

    setName("")
    setEmail("")
    setMessage("")
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section-shell">
      <div className="page-wrap">
        <SectionHeader eyebrow="Connect" title="Contact Me" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface surface-glow p-7 sm:p-9"
          >
            <h3 className="text-2xl font-medium text-[#f7f1e4]">Get in Touch</h3>
            <p className="mt-2 mb-7 text-sm leading-7 text-[#c4b48f]">
              Fill out the form and I will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                required
                aria-label="Your Name"
                className="h-12 w-full rounded-xl border-[#d4af37]/25 bg-black/40 text-[#f7f1e4] placeholder:text-[#8f846c]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Your Email"
                required
                aria-label="Your Email"
                className="h-12 w-full rounded-xl border-[#d4af37]/25 bg-black/40 text-[#f7f1e4] placeholder:text-[#8f846c]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
                placeholder="Your Message"
                required
                aria-label="Your Message"
                className="min-h-[160px] rounded-xl border-[#d4af37]/25 bg-black/40 text-[#f7f1e4] placeholder:text-[#8f846c]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="btn-gold h-12 w-full disabled:opacity-60" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface surface-glow p-7 sm:p-9"
          >
            <h3 className="text-2xl font-medium text-[#f7f1e4]">Contact Information</h3>
            <p className="mt-2 mb-7 text-sm leading-7 text-[#c4b48f]">
              Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-[#d4af37]/30 bg-[#e8c547]/10 p-3">
                  <Phone className="h-4 w-4 text-[#e8c547]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#c4b48f]">Phone</p>
                  <p className="text-sm font-medium text-[#f7f1e4]">+91 7601017292</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-[#d4af37]/30 bg-[#e8c547]/10 p-3">
                  <Mail className="h-4 w-4 text-[#e8c547]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#c4b48f]">Email</p>
                  <p className="break-all text-sm font-medium text-[#f7f1e4]">charansaimusunuru@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-[#d4af37]/30 bg-[#e8c547]/10 p-3">
                  <Linkedin className="h-4 w-4 text-[#e8c547]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#c4b48f]">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/charan-sai-musunuru-90ba59261/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#f7f1e4] transition-colors hover:text-[#e8c547]"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#d4af37]/20 pt-6">
              <p className="text-[15px] leading-7 text-[#d8ccb4]">
                I am currently available for freelance work and full-time positions. Let us work together on your next
                project.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
