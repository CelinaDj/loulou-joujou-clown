import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BombIcon as Balloon, Calendar, PartyPopper } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<PartyPopper className="h-10 w-10 text-[#c184c2]" />}
              title="Anniversaires"
              description="Animation festive pour les anniversaires de vos enfants avec jeux, maquillage et sculptures de ballons."
            />
            <ServiceCard
              icon={<Calendar className="h-10 w-10 text-[#c184c2]" />}
              title="Mariages"
              description="Ajoutez une touche de magie et de rire à votre mariage avec nos animations pour petits et grands."
            />
            <ServiceCard
              icon={<Balloon className="h-10 w-10 text-[#c184c2]" />}
              title="Événements d'entreprise"
              description="Animations professionnelles pour vos événements d'entreprise, séminaires et fêtes de fin d'année."
            />
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-[#c184c2] hover:bg-[#c184c2] text-white">
              <Link href="/services">Voir tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Notre Galerie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=400&width=400`}
                  alt={`Animation clown ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-[#c184c2] text-[#c184c2] hover:bg-[#c184c2] hover:text-white"
            >
              <Link href="/galerie">Voir toute la galerie</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Marie L."
              event="Anniversaire 6 ans"
              rating={5}
              testimonial="Loulou et Joujou ont fait un travail extraordinaire pour l'anniversaire de ma fille. Les enfants étaient enchantés et les parents impressionnés !"
            />
            <TestimonialCard
              name="Thomas D."
              event="Mariage"
              rating={5}
              testimonial="Une animation parfaite pour notre mariage ! Ils ont su divertir les enfants pendant que les adultes profitaient de la soirée. Merci !"
            />
            <TestimonialCard
              name="Entreprise XYZ"
              event="Fête de Noël"
              rating={5}
              testimonial="Professionnels, ponctuels et très talentueux. Nos employés et leurs enfants ont adoré l'animation de notre fête de fin d'année."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-[#FFED4A]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à réserver votre animation ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour vérifier notre disponibilité et obtenir un devis personnalisé pour votre
            événement.
          </p>
          <Button asChild className="bg-[#c184c2] hover:bg-[#c184c2] text-white text-lg px-8 py-6">
            <Link href="/reservation">Réserver maintenant</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
