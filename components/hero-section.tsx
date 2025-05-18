import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-[#f6c0f7] overflow-hidden">
      <div className="container mx-auto py-16 px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Des animations festives pour tous vos événements
            </h1>
            <p className="text-xl mb-8 max-w-lg mx-auto lg:mx-0">
              Loulou & Joujou Clown, duo de clowns professionnels, apporte joie
              et magie à vos anniversaires, mariages et Autres Événements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#c184c2] hover:bg-[#c184c2] text-white"
              >
                <Link href="/reservation">Réserver maintenant</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#c184c2] text-[#c184c2] hover:bg-[#c184c2] hover:text-white"
              >
                <Link href="/services">Voir nos services</Link>
              </Button>
            </div>
          </div>
          <div
            className="
    relative h-[400px] lg:h-[500px] rounded-xl 
   filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)]
  overflow-hidden rounded-full animate-waltz
  "
          >
            <Image
              src="logo1.png"
              alt="Loulou et Joujou Clown en animation"
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
