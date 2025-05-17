import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Loulou & Joujou Clown</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Duo de clowns professionnels spécialisé dans l'animation festive depuis plus de cinqs ans. Nous proposons
              des animations pour anniversaires, mariages et tout types d'événements.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100066308755542"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#c184c2]"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="instagram.com/louloujoujou_clown?igsh=d2U4cXJ1azN6aDlk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#c184c2]"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="loulou.joujou.clown@gmail.com" className="text-muted-foreground hover:text-[#c184c2]">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              {/* <a href="tel:+33600000000" className="text-muted-foreground hover:text-[#c184c2]">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Téléphone</span>
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-[#c184c2]">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-[#c184c2]">
                  Services & Tarifs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#c184c2]">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-muted-foreground hover:text-[#c184c2]">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-[#c184c2]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              {/* <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">06 00 00 00 00</span>
              </li> */}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">loulou.joujou.clown@gmail.com</span>
              </li>
              <li className="mt-4">
                <Link href="/reservation" className="text-[#c184c2] hover:underline font-medium">
                  Réserver une animation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Loulou & Joujou Clown. Tous droits réservés. réaliser par Celina Djermoune</p>
        </div>
      </div>
    </footer>
  )
}
