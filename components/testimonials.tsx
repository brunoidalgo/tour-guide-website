import maragogi from "@/public/maragogi.jpg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

import { Star } from "lucide-react"

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-muted p-8 md:p-20 flex flex-col items-center justify-center">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Feedbacks 😁</h2>
                    <p className="mt-4 text-muted-foreground">
                        Leia os depoimentos de nossos clientes satisfeitos!
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="h-full max-md:m-4">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                        <Image
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                                        <CardDescription>{testimonial.tour}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <p className="text-muted-foreground">{testimonial.comment}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        avatar: maragogi,
        tour: "São Miguel dos Milagres",
        rating: 5,
        comment:
            "Nosso guia foi incrível! Ele nos levou a lugares que nunca teríamos encontrado sozinhos. A comida era deliciosa e as acomodações eram confortáveis.",
    },
    {
        id: 2,
        name: "David Chen",
        avatar: maragogi,
        tour: "Mirante do Gunga",
        rating: 5,
        comment:
            "Nosso guia foi incrível! Ele nos levou a lugares que nunca teríamos encontrado sozinhos. A comida era deliciosa e as acomodações eram confortáveis.",
    },
    {
        id: 3,
        name: "Maria Rodriguez",
        avatar: maragogi,
        tour: "Maragogi",
        rating: 4,
        comment:
            "Nosso guia foi incrível! Ele nos levou a lugares que nunca teríamos encontrado sozinhos. A comida era deliciosa e as acomodações eram confortáveis.",
    },
]