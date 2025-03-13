import maragogi from "@/public/maragogi.jpg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

import { Star } from "lucide-react"

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-muted p-8 md:p-20 flex flex-col items-center justify-center">
            <div className="container mb-12">
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
                                <p className="text-muted-foreground w-[250px]">{testimonial.comment}</p>
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
        name: "B Fogaca",
        avatar: maragogi,
        tour: "São Miguel dos Milagres",
        rating: 5,
        comment:
            "Parabéns Marcondes e Ana, pessoas incríveis especiais e profissionais excelentes! Com certeza voltaremos a Maceió e contrataremos o serviço da Marcondes Turismo!",
    },
    {
        id: 2,
        name: "Marcos e Jacqui",
        avatar: maragogi,
        tour: "Maragogi",
        rating: 5,
        comment:
            "Passeio maravilhoso obrigado a Marcondes Turismo por essa oportunidade de conhecer esse lugar mágico Maragogi um verdadeira Paraíso",
    },
    {
        id: 3,
        name: "Superclean Franca Higienização",
        avatar: maragogi,
        tour: "Maragogi",
        rating: 4,
        comment:
            "Super indico, de confiança, tudo que foi combinado, foi cumprido, eu e minha família estamos muito satisfeitos com seus serviços, obrigado 🙏",
    },
    {
        id: 4,
        name: "Kelly Bertolini",
        avatar: maragogi,
        tour: "Maragogi",
        rating: 4,
        comment:
            "Melhor empresa com as guias mais top de Alagoas! 👏",
    },
    {
        id: 5,
        name: "July",
        avatar: maragogi,
        tour: "Maragogi",
        rating: 4,
        comment:
            "Meu sonho também era conhecer Maceió, eu amei e super indíco a Marcondes Turismo, atendimento top, super carismático, quem me atendeu foi a Ana Cleia juntamente com o Marcondes, o povo bom sô, amei, amei, amei, super recomendo 👏👏",
    },
]