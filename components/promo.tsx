import Image from "next/image"
import { Button } from "@/components/ui/button"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Promo() {
    return (
        <section id="destinations" className="p-16 md:p-24 bg-white text-primary flex flex-col items-center justify-center text-center">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Promoções 🤩</h2>
                    <p className="mt-4 text-muted-foreground">Curta 3 dias de passeio em 5 destinos com sua família!
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
                        </Card>
                    ))}
                </div>
            </div>
            <Link href={"https://wa.me/+558281527890"}>
                <Button className="w-[200px] min-h-[50px] flex-wrap mt-12 bg-[#25D366] text-white">
                    Fale Comigo Agora
                </Button>
            </Link>
        </section>
    )
}

import gunga from "@/public/gunga.jpeg"
import saoMiguel from "@/public/sao-miguel-milagres.jpeg"
import capitaoNikolas from "@/public/capitaoNikolas.jpg"
import dunasMarape from "@/public/dunasMarape.jpg"
import frances from "@/public/frances.jpg"
import maragogi from "@/public/maragogi.jpg"

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
        id: 3,
        name: "Capitão Nikolas, Maceió",
        description: "Descubra a beleza de Praia Capitão Nikolas 🤩",
        image: capitaoNikolas,
    },
    {
        id: 4,
        name: "Dunas de Marapé, Maceió",
        description: "Descubra a beleza de Dunas de Marapé 🤩",
        image: dunasMarape,
    },
    {
        id: 5,
        name: "Francês, Maceió",
        description: "Descubra a beleza de Francês 🤩",
        image: frances,
    },
]