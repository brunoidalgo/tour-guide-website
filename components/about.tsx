import Image from "next/image"
import sobre from "@/public/imagem-sobre.jpeg"

export default function About() {
    return (
        <section id="about" className="p-16">
            <div>
                <div className="flex justify-center items-center text-center gap-8 max-md:flex-col max-md:max-w-[300px]">
                    <div className="max-w-[400px]">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Marcondes Turismo 😁</h2>
                        <p className="mt-4 text-muted-foreground">
                            Maragogi Turismo é uma agência de viagens especializada em passeios locais e experiências autênticas.
                            Nossos guias locais são especialistas em seus destinos e estão comprometidos em fornecer uma
                            experiência inesquecível.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Desde 2010, temos ajudado viajantes a descobrir os destinos mais incríveis do mundo. Nossos passeios são
                            projetados para serem educativos, divertidos e culturalmente enriquecedores.
                        </p>
                        <div className="m-8 flex flex-wrap gap-4 text-center justify-center">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary">1000+</span>
                                <span className="text-sm text-muted-foreground">Passeios</span>
                                <span className="text-sm text-muted-foreground">Privativos</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary">50+</span>
                                <span className="text-sm text-muted-foreground">Destinos</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary">10k+</span>
                                <span className="text-sm text-muted-foreground">Clientes
                                </span>
                                <span className="text-sm text-muted-foreground">Satisfeitos</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary">4.9</span>
                                <span className="text-sm text-muted-foreground">Avaliação</span>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={sobre}
                        alt="Tour guide with travelers"
                        width={1000}
                        height={1000}
                        className="object-cover h-[400px] rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}