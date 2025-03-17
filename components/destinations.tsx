import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Destinations() {
    return (
        <section id="destinations" className="p-16 md:p-24 bg-white text-primary flex flex-col items-center justify-center">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Destinos Populares 🤩</h2>
                    <p className="mt-4 text-muted-foreground">Explore destinos incríveis e descubra o mundo
                    </p>
                </div>
                <div className="flex justify-center items-center gap-8 flex-wrap">
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
                                <Link href={"https://wa.me/+558281527890/?text=Vim%20do%20Google%20e%20quero%20saber%20mais%20sobre%20os%destinos,%20por%20gentileza"}>
                                    <Button variant="outline" className="w-full">
                                        Agendar meu passeio
                                    </Button>
                                </Link>
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
import capitaoNikolas from "@/public/capitaoNikolas.jpg"
import dunas from "@/public/dunasMarape.jpg"
import frances from "@/public/frances.jpg"

import Link from "next/link"

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
    {
        id: 4,
        name: "Capitão Nikolas, Maceió",
        description: "Descubra a beleza de Praia Capitão Nikolas 🤩",
        image: capitaoNikolas,
    },
    {
        id: 5,
        name: "Dunas de Marapé, Maceió",
        description: "Descubra a beleza de Dunas de Marapé 🤩",
        image: dunas,
    },
    {
        id: 3,
        name: "Francês, Maceió",
        description: "Descubra a beleza de Francês 🤩",
        image: frances,
    },
]