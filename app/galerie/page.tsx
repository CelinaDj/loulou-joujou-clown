import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Galerie | Loulou & Joujou Clown",
  description:
    "Découvrez nos animations en images : anniversaires, mariages, événements. Galerie photos et vidéos de Loulou & Joujou Clown.",
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Notre Galerie</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Découvrez nos animations en images et vidéos. Un aperçu de nos prestations pour différents types d'événements.
        </p>
      </div>

      <Tabs defaultValue="anniversaires" className="mb-16">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="anniversaires">Anniversaires</TabsTrigger>
          <TabsTrigger value="mariages">Mariages</TabsTrigger>
          <TabsTrigger value="entreprises">Autres Événements</TabsTrigger>
        </TabsList>

        <TabsContent value="anniversaires">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={`anniv-${i}`} className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={`/placeholder.svg?height=600&width=600`}
                  alt={`Animation anniversaire ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="font-bold text-lg">Anniversaire {i + 1}</h3>
                    <p>Animation pour enfants</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mariages">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`mariage-${i}`} className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={`/placeholder.svg?height=600&width=600`}
                  alt={`Animation mariage ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="font-bold text-lg">Mariage {i + 1}</h3>
                    <p>Animation pour les invités</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="entreprises">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`entreprise-${i}`} className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={`/placeholder.svg?height=600&width=600`}
                  alt={`Événement d'entreprise ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="font-bold text-lg">Événement {i + 1}</h3>
                    <p>Animation d'entreprise</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Vidéos */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Nos Vidéos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            
            <a
  href="https://www.instagram.com/reel/DJcKGIfIWFI/?igsh=MWYzdmo5M2psdmt2dg=="
  target="_blank"
  rel="noopener noreferrer"
  className="block aspect-video bg-gray-100 rounded-lg overflow-hidden"
>
  <img src="1.jpg" alt="Vidéo Instagram" className="object-cover w-full h-full" />
  
</a>
          </div>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            
            <a
  href="https://www.instagram.com/reel/DAKL9JKND0v/?igsh=OGF2ejJqcmlyYXpv"
  target="_blank"
  rel="noopener noreferrer"
  className="block aspect-video bg-gray-100 rounded-lg overflow-hidden"
>
  <img src="histoire.jpg" alt="Vidéo Instagram" className="object-cover w-full h-full" />
</a>
          </div>
        </div>
      </section>
    </div>
  )
}
