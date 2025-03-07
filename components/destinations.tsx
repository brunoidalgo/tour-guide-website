import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Destinations() {
    return (
        <section id="destinations" className="p-16 md:p-24 bg-white text-primary">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Destinos Populares 🤩</h2>
                    <p className="mt-4 text-muted-foreground">Explore destinos incríveis e descubra o mundo
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {destinations.map((destination) => (
                        <Card key={destination.id} className="overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src={destination.image || "/placeholder.svg"}
                                    alt={destination.name}
                                    fill
                                    className="object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>{destination.name}</CardTitle>
                                <CardDescription>{destination.description}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button variant="outline" className="w-full underline">
                                    Saber mais
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

import maragogi from "@/public/maragogi.jpg"
import gunga from "@/public/gunga.jpeg"
import saoMiguel from "@/public/sao-miguel-milagres.jpeg"

const destinations = [
    {
        id: 1,
        name: "Maragogi, Maceió",
        description: "Explore Maragogi com sua família e amigos 🤩",
        image: maragogi,
    },
    {
        id: 2,
        name: "Gunga, Maceió",
        description: "Tenha experiências incríveis no Gunga 🤩",
        image: gunga,
    },
    {
        id: 3,
        name: "São Miguel dos Milagres, Maceió",
        description: "Descubra a beleza de São Miguel dos Milagres 🤩",
        image: saoMiguel,
    },
]