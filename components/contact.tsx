import { MapPin } from "lucide-react"
import Image from "next/image"

export default function Contact() {
    return (
        <section id="contact" className="p-16 max-md:p-18 flex flex-col items-center justify-center">
            <div className="container">
                <div className="flex max-md:flex-col gap-4 justify-between">
                    <div className="w-full">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Fale Conosco</h2>
                        <p className="mt-4 text-muted-foreground">
                            Entre em contato conosco para obter mais informações sobre nossos passeios e serviços
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-4">
                                <MapPin className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="font-medium">Endereço</p>
                                    <p className="text-muted-foreground">
                                        Maceió, Alagoas, Brasil</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5 text-primary"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <div>
                                    <p className="font-medium">Telefone</p>
                                    <Link href="https://wa.me/+558281527890">
                                        <p className="text-muted-foreground">(82) 8152-7890</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5 text-primary"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-muted-foreground">marcondesturismo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image alt="marcondes-turismo" className="rounded-xl object-cover h-[400px]" src={saoFrancisco} />
                    </div>
                </div>
            </div>
        </section >
    )
}

import saoFrancisco from "@/public/foz-rio-sao-francisco.jpeg"
import Link from "next/link"
