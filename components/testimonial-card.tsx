import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  event: string
  rating: number
  testimonial: string
}

export default function TestimonialCard({ name, event, rating, testimonial }: TestimonialCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground">{event}</p>
          </div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-[#FFED4A] text-[#FFED4A]" : "text-gray-300"}`} />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="italic">{testimonial}</p>
      </CardContent>
    </Card>
  )
}
