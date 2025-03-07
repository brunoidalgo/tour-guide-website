"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="p-2 sticky top-0 z-50 w-full bg-[#ffa200] backdrop-blur supports-[backdrop-filter]:bg-[#ffa200]/100 flex justify-center text-center items-center text-white">
            <div className="container flex h-16 items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-lg font-bold">
                    <MapPin fill="white" className="h-6 w-6 text-primary" />
                    <span>Marcondes Turismo</span>
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden md:flex gap-6">
                    <Link href="#destinations" className="text-sm font-medium">
                        Destinos
                    </Link>
                    <Link href="#tours" className="text-sm font-medium">
                        Passeios
                    </Link>
                    <Link href="#about" className="text-sm font-medium">
                        Sobre nós
                    </Link>
                    <Link href="#testimonials" className="text-sm font-medium">
                        Feedbacks
                    </Link>
                    <Link href="#contact" className="text-sm font-medium">
                        Contato
                    </Link>
                </nav>

                {/* Botão de Agendamento */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href={"https://wa.me/+558281527890"}>
                        <Button className="bg-transparent text-white">
                            Agendar Passeios
                        </Button>
                    </Link>
                </div>

                {/* Menu Hambúrguer Mobile */}
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Dropdown Mobile */}
            <div className={`md:hidden absolute top-16 left-0 w-full bg-[#ffa200] text-white rounded-b-3xl transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <nav className="flex flex-col items-center gap-4 p-4">
                    <Link href="#destinations" className="text-sm font-medium hover:text-primary" onClick={() => setMenuOpen(false)}>
                        Destinos
                    </Link>
                    <Link href="#tours" className="text-sm font-medium hover:text-primary" onClick={() => setMenuOpen(false)}>
                        Passeios
                    </Link>
                    <Link href="#about" className="text-sm font-medium hover:text-primary" onClick={() => setMenuOpen(false)}>
                        Sobre nós
                    </Link>
                    <Link href="#testimonials" className="text-sm font-medium hover:text-primary" onClick={() => setMenuOpen(false)}>
                        Feedbacks
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary" onClick={() => setMenuOpen(false)}>
                        Contato
                    </Link>
                    <Link href={"https://wa.me/+558281527890"}>
                        <Button className="bg-transparent text-white">
                            Agendar Passeios
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
