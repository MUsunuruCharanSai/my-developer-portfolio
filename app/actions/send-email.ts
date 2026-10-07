"use server"

import { Resend } from "resend"

export async function sendEmail(formData: FormData) {
  const email = formData.get("email") as string
  const name = formData.get("name") as string
  const message = formData.get("message") as string

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set")
    return {
      success: false,
      message: "Email service is not configured. Please contact the administrator.",
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { data, error } = await resend.emails.send({
      from: "Charan Sai Portfolio <onboarding@resend.dev>",
      to: ["charansaimusunuru@gmail.com"],
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      reply_to: email,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        message: "Failed to send email. Please try contacting through LinkedIn or phone.",
      }
    }

    console.log("Email sent successfully:", data)
    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Unexpected error sending email:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try contacting through LinkedIn or phone.",
    }
  }
}
