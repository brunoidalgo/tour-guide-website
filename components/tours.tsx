import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

import { Calendar, MapPin, Star, Users } from "lucide-react"

export default function Tours() {
    return (
        <section id="tours" className="flex justify-center items-center bg-muted p-16 md:p-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Passeios mais procurados 😁</h2>
                    <p className="mt-4 text-muted-foreground">
                        Descubra experiências únicas e inesquecíveis com nossos guias locais especializados
                    </p>
                </div>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                    {tours.map((tour) => (
                        <Card key={tour.id} className="flex flex-col rounded-lg">
                            <div className="relative h-48">
                                <div className="absolute right-2 top-2 z-10 rounded-full bg-background px-2 py-1 text-xs font-medium">
                                    {tour.duration}
                                </div>
                                <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover rounded-lg" />
                            </div>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>{tour.name}</CardTitle>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-primary text-primary" />
                                        <span className="text-sm font-medium">{tour.rating}</span>
                                    </div>
                                </div>
                                <CardDescription>{tour.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                        <span>{tour.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span>{tour.dates}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                        <span>{tour.groupSize}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-bold">R${tour.price}</span>
                                    <span className="text-sm text-muted-foreground"> / pessoa</span>
                                </div>
                                <Button className="bg-white text-black border-2 underline">Agendar</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link href="https://wa.me/+558281527890">
                        <Button variant="outline" size="lg">
                            Ver mais passeios
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

import maragogi from "@/public/maragogi.jpg"
import gunga from "@/public/gunga.jpeg"
import saoMiguel from "@/public/sao-miguel-milagres.jpeg"
import riosaofrancisco from "@/public/foz-rio-sao-francisco.jpeg"

import Link from "next/link"

const tours = [
    {
        id: 1,
        name: " Gunga",
        description: "Desfrute de uma vista incrível do Mirante do Gunga",
        image: gunga,
        duration: "1 Dia",
        location: "Gunga, Maceió, Brasil",
        dates: "Ano todo",
        groupSize: "Máximo 6 pessoas",
        price: 250,
        rating: 4.9,
    },
    {
        id: 2,
        name: "São Miguel dos Milagres",
        description: "Desfrute de uma vista incrível de São Miguel dos Milagres",
        image: saoMiguel,
        duration: "1 Dia",
        location: "Gunga, Maceió, Brasil",
        dates: "Ano todo",
        groupSize: "Máximo 6 pessoas",
        price: 250,
        rating: 4.9,
    },
    {
        id: 3,
        name: "Foz do Rio São Francisco",
        description: "Desfrute de uma vista incrível do Foz do Rio São Francisco",
        image: riosaofrancisco,
        duration: "1 Dia",
        location: "Gunga, Maceió, Brasil",
        dates: "Ano todo",
        groupSize: "Máximo 6 pessoas",
        price: 250,
        rating: 4.9,
    },
]