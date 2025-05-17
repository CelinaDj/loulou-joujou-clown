"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services & Tarifs", href: "/services" },
  { name: "À propos", href: "/about" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-35 items-center justify-between">
      <div className="flex items-center gap-2">
  <Link href="/" className="flex items-center gap-2">
    <div className="relative h-28 w-28 overflow-hidden rounded-full animate-waltz">
      <Image
        src="logo1.png"
        alt="Loulou & Joujou Clown Logo"
        fill
      />
    </div>
  </Link>
</div>

        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-[#c184c2]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:flex bg-[#9b59b6] hover:bg-[#c184c2]">
            <Link href="/reservation" >Réserver</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-[#c184c2]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-[#c184c2] hover:bg-[#c184c2]">
                  <Link href="/reservation" onClick={() => setIsOpen(false)}>
                    Réserver
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
