import emailjs from "@emailjs/browser"

interface EmailData {
  name: string
  email: string
  phone: string
  eventType: string
  date: string
  message: string
}

export async function sendEmail(data: EmailData): Promise<void> {
  try {
    // Remplacez ces valeurs par vos identifiants EmailJS
    const serviceId = "service_il3zk4c"
    const templateId = "template_2uxvv7u"
    const publicKey = "P1f8hoV9ku3b7RSML"

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      event_type: data.eventType,
      event_date: data.date,
      message: data.message,
    }

    // Envoi de l'email via EmailJS
    await emailjs.send(serviceId, templateId, templateParams, publicKey)

    console.log("Email envoyé avec succès!")
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    throw new Error("Erreur lors de l'envoi de l'email")
  }
}
