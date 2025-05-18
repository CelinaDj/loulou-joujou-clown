import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Services & Tarifs | Loulou & Joujou Clown",
  description:
    "Découvrez nos différentes packs d'animation pour anniversaires, mariages et Autres Événements. Tarifs et prestations détaillés.",
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos Services & Tarifs</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Découvrez nos différentes packs adaptées à tous types d'événements. Des animations sur mesure pour créer
          des souvenirs inoubliables !
        </p>
      </div>

      {/* Formules */}
      <div className="grid gap-12">
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Packs Anniversaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col border-2 border-[#c184c2]">
              <CardHeader>
                <CardTitle className="text-2xl">Pack Étoile</CardTitle>
                <CardDescription>Idéale pour les petits groupes</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-6">2000 DA</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>1 heure de travail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>1 clown animateur</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Danses et maquillage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Jusqu'à 10 enfants</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#c184c2] hover:bg-[#c184c2]">
                  <Link href="/reservation">Réserver</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-2 border-[#FFED4A] relative">
              <div className="absolute top-0 right-0 bg-[#c184c2] text-white px-4 py-1 rounded-bl-lg font-medium">
                Populaire
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pack Magique</CardTitle>
                <CardDescription>Notre Pack la plus demandée</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-6">4000 DA </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 heures de travail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 clowns animateurs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Danses, jeux et maquillage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Jusqu'à 15 enfants</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#c184c2] hover:bg-[#c184c2]">
                  <Link href="/reservation">Réserver</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Pack Royale</CardTitle>
                <CardDescription>Pour les grands événements</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-6">5500 DA </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 heures 30 min de travail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 clowns animateurs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Animation complète</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Jusqu'à 25 enfants ou plus</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Petit spectacle inclus</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#c184c2] hover:bg-[#c184c2]">
                  <Link href="/reservation">Réserver</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Packs Mariages & Autres Événements</h2>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Pour les mariages et Autres Événements, nous proposons des packs sur mesure adaptées à vos besoins
            spécifiques. Contactez-nous pour obtenir un devis personnalisé.
          </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col border-2 border-[#c184c2]">
              <CardHeader>
                <CardTitle className="text-2xl">Pack Étoile</CardTitle>
                <CardDescription>Idéale pour les petits groupes</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-6">6000 DA</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 heure et 30 min de travail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 clown animateurs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Danses | Sketch | Jeux </span>
                  </li>
                
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#c184c2] hover:bg-[#c184c2]">
                  <Link href="/reservation">Réserver</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-2 border-[#FFED4A] relative">
              <div className="absolute top-0 right-0 bg-[#c184c2] text-white px-4 py-1 rounded-bl-lg font-medium">
                Populaire
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pack Magique</CardTitle>
                <CardDescription>Notre pack la plus demandée</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-6">8000 DA </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>3 heures et 30 min de travail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 clowns animateurs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Danses | Sketch pour enfants et femmes | Maquillage artistique | Jeux </span>
                  </li>
                
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#c184c2] hover:bg-[#c184c2]">
                  <Link href="/reservation">Réserver</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Pack Royale</CardTitle>
                <CardDescription>Pour les grands événements</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-6">10000 DA </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>4 heures 30 min de travail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 clowns animateurs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Animation complète inclus Danses | Sketch pour enfants et femmes | Maquillage artistique | Jeux | Coloriage et dessin sur feuilles    </span>
                  </li>
                
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Compétitions et traveaux à main + cadeaux pour les gagnants inclus</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#c184c2] hover:bg-[#c184c2]">
                  <Link href="/reservation">Réserver</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>




  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col border-2 border-[#c184c2]">
              <CardHeader>
                <CardTitle className="text-2xl">Pack Étoile Mascotte </CardTitle>
                <CardDescription>Idéale pour les petits groupes</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-6">8000 DA</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 heure et 30 min de travail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 clown animateurs et une Mascotte</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Danses | Sketch | Jeux </span>
                  </li>
                
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#c184c2] hover:bg-[#c184c2]">
                  <Link href="/reservation">Réserver</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-2 border-[#FFED4A] relative">
              <div className="absolute top-0 right-0 bg-[#c184c2] text-white px-4 py-1 rounded-bl-lg font-medium">
                Populaire
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pack Magique Mascotte</CardTitle>
                <CardDescription>Notre pack la plus demandée</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-6">10000 DA </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>3 heures et 30 min de travail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 clowns animateurs et une mascotte </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Danses | Sketch pour enfants et femmes | Maquillage artistique | Jeux </span>
                  </li>
                
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#c184c2] hover:bg-[#c184c2]">
                  <Link href="/reservation">Réserver</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Pack Royale Mascotte </CardTitle>
                <CardDescription>Pour les grands événements</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-6">12000 DA </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>4 heures 30 min de travail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>2 clowns animateurs et une mascotte </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Animation complète inclus Danses | Sketch pour enfants et femmes | Maquillage artistique | Jeux | Coloriage et dessin sur feuilles    </span>
                  </li>
                
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                    <span>Compétitions et traveaux à main + cadeaux pour les gagnants inclus</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-[#c184c2] hover:bg-[#c184c2]">
                  <Link href="/reservation">Réserver</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>



          
          <div className="bg-gray-50 p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Nos prestations incluent :</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                <span>Animation pour enfants</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                <span>Maquillage artistique</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                <span>Danses</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                <span>Jeux d'intélligence</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                <span>Jeux interactifs</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                <span>Narration d’histoires</span>
              </li>
                <li className="flex items-start">
                <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                <span>Dessins et coloriage </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#c184c2] mr-2 mt-0.5" />
                <span> Mascottes  </span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <Button asChild className="bg-[#c184c2] hover:bg-[#c184c2]">
                <Link href="/reservation">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </section>



        
      </div>

      {/* CTA */}
      <div className="mt-16 bg-[#FFED4A] p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Une question sur nos services ?</h2>
        <p className="mb-6">N'hésitez pas à nous contacter pour plus d'informations ou pour une demande spécifique.</p>
        <Button asChild className="bg-[#c184c2] hover:bg-[#c184c2]">
          <Link href="/contact">Contactez-nous</Link>
        </Button>
      </div>
    </div>
  )
}
