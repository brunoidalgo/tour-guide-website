import Image from "next/image"
import { Button } from "@/components/ui/button"

import marcondes from "@/public/marcondes.jpeg"
import Link from "next/link"

export default function HeroSection() {
    return (
        <section id="hero" className="relative">
            <div className="absolute inset-0 z-10 bg-black/20" />
            <div className="relative h-[70vh] w-full">
                <Image
                    src={marcondes}
                    alt="Praia de Maceió"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Explore Maceió Conosco 😎</h1>
                <p className="mt-4 max-w-[300px] text-xs sm:text-base">
                    Os Melhores destinos para você aproveitar com sua família e amigos você encontra aqui 👌
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link href="#destinations">
                        <Button size="lg" className="bg-[#ffa200]">
                            Explore Passeios
                        </Button>
                    </Link>
                    <Link href="#about">
                        <Button size="lg" variant="outline" className="border-white hover:bg-white text-black">
                            Saiba mais
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}