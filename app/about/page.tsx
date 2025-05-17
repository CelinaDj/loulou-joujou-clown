import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Heart, Star, ThumbsUp } from "lucide-react"

export const metadata: Metadata = {
  title: "À propos | Loulou & Joujou Clown",
  description:
    "Découvrez l'histoire de Loulou & Joujou Clown, notre expérience et notre univers artistique. Plus de 6 ans d'animation festive professionnelle.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Découvrez l'histoire de Loulou & Joujou Clown, notre expérience et notre univers artistique.
        </p>
      </div>

      {/* Notre histoire */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Loulou et Joujou Clown"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
          <p className="mb-4">
          Loulou & Joujou Clown puise ses racines il y a plus de six ans au sein de l’association culturelle TUSNA de notre village Amarat Commune Barbacha, wilaya Béjaia où deux artistes passionnés ont découvert l’art du clown et de l’animation pour enfants. C’est là que nos premiers sourires sont nés, et que l’étincelle de notre duo a pris vie.
          </p>
          <p className="mb-4">
          Forts de cette expérience, nous avons uni nos talents pour donner naissance à un duo unique, chargé d’apporter joie et émerveillement à tout type d’événement. Nous avons même formé un petit groupe de jeunes clowns en herbe, issus du village, qui nous accompagnent de temps en temps pour partager rires et bonne humeur avec les enfants.
          </p>
          <p>
          Notre mission reste la même : faire de chaque moment un souvenir magique et inoubliable, où petits et grands plongent dans un univers de fantaisie et de complicité.
          </p>
        </div>
      </section>

    {/* Notre équipe */}
<section className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Notre équipe</h2>
  <div className="grid md:grid-cols-2 gap-12">
    
    {/* Loulou */}
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
        <Image
          src="/placeholder.svg?height=600&width=600"
          alt="Loulou"
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2">Loulou</h3>
      <p className="text-muted-foreground mb-4">Co‑fondatrice & Clown</p>
      <p className="mb-4">
        Depuis 2018, Loulou &amp; Joujou Clown forment un duo complice et égalitaire. Étudiante titulaire
        d’une licence et d’un master en Informatique, Loulou allie sa passion pour la technologie et
        son envie de faire rire les enfants. Elle a conçu et développé notre site vitrine,
        tout en excellent dans le maquillage artistique le dessin et l’animation de jeux.
      </p>
      <div className="flex items-center gap-2 text-[#cebe29]">
        <Award className="h-5 w-5 fill-[#FFED4A]" />
        <span className="font-medium">
          Spécialité : Développement digital, maquillage artistique & jeux interactifs
        </span>
      </div>
    </div>

    {/* Joujou */}
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
        <Image
          src="/placeholder.svg?height=600&width=600"
          alt="Joujou"
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2">Joujou</h3>
      <p className="text-muted-foreground mb-4">Co‑fondatrice & Clown</p>
      <p className="mb-4">
        Depuis 2018, Loulou &amp; Joujou Clown forment un duo complice et égalitaire. Actuellement
        étudiante en Licence de Biologie, Joujou combine curiosité scientifique et créativité
        artistique. Elle excelle dans  l’animation de jeux, et la narration
        d’histoires, pour transporter les enfants dans un monde merveilleux.
      </p>
      <div className="flex items-center gap-2 text-[#cebe29]">
        <Award className="h-5 w-5 fill-[#FFED4A]" />
        <span className="font-medium">
          Spécialité : contes imaginaires, maquillage artistique & jeux interactifs 
        </span>
      </div>
    </div>

  </div>
</section>


      {/* Nos valeurs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos valeurs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-[#FFED4A] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-[#c184c2]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Passion</h3>
            <p>
              Nous mettons tout notre cœur dans chaque animation, car nous aimons ce que nous faisons et cela se ressent
              dans notre travail.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-[#FFED4A] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-[#c184c2]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Qualité</h3>
            <p>
              Nous nous engageons à offrir des prestations de haute qualité, avec un matériel professionnel et des
              animations soigneusement préparées.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-[#FFED4A] h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="h-8 w-8 text-[#c184c2]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Adaptation</h3>
            <p>
              Chaque événement est unique, c'est pourquoi nous adaptons nos animations aux besoins spécifiques de chaque
              client.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#FFED4A] p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Prêts à collaborer avec nous ?</h2>
        <p className="mb-6">Contactez-nous dès maintenant pour discuter de votre projet et réserver votre date.</p>
        <Button asChild className="bg-[#c184c2] hover:bg-[#c184c2]">
          <Link href="/reservation">Réserver maintenant</Link>
        </Button>
      </div>
    </div>
  )
}
