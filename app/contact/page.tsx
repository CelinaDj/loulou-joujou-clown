import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Loulou & Joujou Clown",
  description:
    "Contactez Loulou & Joujou Clown pour vos animations festives. Téléphone, email et réseaux sociaux pour nous joindre facilement.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Vous avez des questions ou souhaitez réserver une animation ? N'hésitez pas à nous contacter !
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Nos coordonnées</h2>
          <div className="space-y-6">
            {/* <div className="flex items-start gap-4">
              <div className="bg-[#FFED4A] p-3 rounded-full">
                <Phone className="h-6 w-6 text-[#c184c2]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Téléphone</h3>
                <p className="text-muted-foreground">Du lundi au samedi, de 9h à 19h</p>
                <a href="tel:+33600000000" className="text-[#c184c2] font-medium hover:underline">
                  06 00 00 00 00
                </a>
              </div>
            </div> */}

            <div className="flex items-start gap-4">
              <div className="bg-[#FFED4A] p-3 rounded-full">
                <Mail className="h-6 w-6 text-[#c184c2]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">Nous vous répondons sous 24h</p>
                <a href="mailto:loulou.joujou.clown@gmail.com" className="text-[#c184c2] font-medium hover:underline">
                  loulou.joujou.clown@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#FFED4A] p-3 rounded-full">
                <MapPin className="h-6 w-6 text-[#c184c2]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Zone d'intervention</h3>
                <p className="text-muted-foreground">Nous intervenons dans un rayon de 50km autour de :</p>
                <p className="font-medium">Béjaia et ces communes </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100066308755542"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c184c2] text-white p-3 rounded-full hover:bg-[#c184c2] transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="instagram.com/louloujoujou_clown?igsh=d2U4cXJ1azN6aDlk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c184c2] text-white p-3 rounded-full hover:bg-[#c184c2] transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Besoin d'un devis ?</h2>
              <p className="text-muted-foreground">
                Remplissez notre formulaire de réservation pour obtenir un devis personnalisé.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold">Informations nécessaires :</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                  <li>Type d'événement</li>
                  <li>Date souhaitée</li>
                  <li>Nombre d'invités</li>
                  <li>Lieu de l'événement</li>
                  <li>Durée d'animation souhaitée</li>
                </ul>
              </div>
              <Button asChild className="w-full bg-[#c184c2] hover:bg-[#c184c2]">
                <Link href="/reservation">Demander un devis</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Quelle est votre zone d'intervention ?</h3>
            <p>
              Nous intervenons principalement à Béjaia et ces environs. Pour des distances
              plus importantes, des frais de déplacement peuvent s'appliquer.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Combien de temps à l'avance faut-il réserver ?</h3>
            <p>
              Nous vous conseillons de réserver au moins 3 à 4 semaines à l'avance, surtout pour les périodes chargées
              (vacances scolaires, fêtes de fin d'année).
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Quels sont vos tarifs ?</h3>
            <p>
              Nos tarifs varient en fonction du type d'animation, de la durée et du nombre de participants. Consultez
              notre page Services & Tarifs ou demandez-nous un devis personnalisé.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Comment se déroule le paiement ?</h3>
            <p>
              Nous demandons un acompte de 30% à la réservation, le solde étant à régler le jour de la prestation. Nous
              acceptons les paiements par virement, chèque ou espèces.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#FFED4A] p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Prêt à réserver votre animation ?</h2>
        <p className="mb-6">N'attendez plus et contactez-nous dès maintenant pour créer des souvenirs inoubliables !</p>
        <Button asChild className="bg-[#c184c2] hover:bg-[#c184c2]">
          <Link href="/reservation">Réserver maintenant</Link>
        </Button>
      </div>
    </div>
  )
}
