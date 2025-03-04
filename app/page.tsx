import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import logo from "@/public/logo-thiago.png"
import praia from "@/public/fundo-site-thiago.png"

export default function TourGuidePage() {
  return (
    <div className="flex min-h-screen flex-col text-black">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center text-center items-center">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <MapPin className="h-6 w-6 text-primary" />
            <span>Maragogi Turismo</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#destinations" className="text-sm font-medium hover:text-primary">
              Destinos
            </Link>
            <Link href="#tours" className="text-sm font-medium hover:text-primary">
              Passeios
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Sobre nós
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Feedbacks
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="bg-transparent text-black">Agendar Passeios</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-black/40" />
          <div className="relative h-[70vh] w-full">
            <Image
              src={praia}
              alt="Praia de Maceió"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Descubra Maceió Conosco</h1>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl">
              Destinos incríveis, experiências autênticas e guias locais especializados
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Passeios
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white text-black">
                Saiba mais
              </Button>
            </div>
          </div>
        </section>

        <section id="destinations" className="p-16 md:p-24 bg-white text-primary">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Destinos Populares</h2>
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

        <section id="tours" className="flex justify-center items-center bg-muted p-16 md:p-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Passeios mais procurados!</h2>
              <p className="mt-4 text-muted-foreground">
                Descubra experiências únicas e inesquecíveis com nossos guias locais especializados
              </p>
            </div>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {tours.map((tour) => (
                <Card key={tour.id} className="flex flex-col">
                  <div className="relative h-48">
                    <div className="absolute right-2 top-2 z-10 rounded-full bg-background px-2 py-1 text-xs font-medium">
                      {tour.duration}
                    </div>
                    <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
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
                      <span className="text-sm text-muted-foreground"> / person</span>
                    </div>
                    <Button>Book Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Ver mais passeios
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="p-16">
          <div>
            <div className="flex justify-center items-center text-center gap-8 max-md:flex-col max-md:max-w-[300px]">
              <div className="max-w-[400px]">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sobre a Maragogi Turismo</h2>
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
                    <span className="text-sm text-muted-foreground">Nota</span>
                  </div>
                </div>
              </div>
              <Image
                src={maragogi}
                alt="Tour guide with travelers"
                width={1000}
                height={1000}
                className="object-cover h-[400px] rounded-lg"
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">O que falam nossos clientes ?</h2>
              <p className="mt-4 text-muted-foreground">
                Leia os depoimentos de nossos clientes satisfeitos sobre suas experiências de viagem conosco
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

        <section id="contact" className="p-16 max-md:p-18">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
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
                      <p className="text-muted-foreground">(82) 9390-8415</p>
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
                      <p className="text-muted-foreground">maragogiturismo@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="data"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Data Chegada em Maceió
                    </label>
                    <Input id="data" placeholder="10/04/2024" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensagem
                    </label>
                    <Textarea id="message" placeholder="Escreva uma mensagem" className="min-h-32" />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsappButton />
      <footer className="border-t bg-muted">
        <div className="container p-8 md:p-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 text-lg font-bold">
                <MapPin className="h-6 w-6 text-primary" />
                <span>Maragogi Turismo</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Descubra destinos incríveis, experiências autênticas e guias locais especializados
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Inicial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Passeios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Destinos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium"> Passeios Populares</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Mirante do Gunga
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    São Miguel dos Milagres
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Maragogi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Milagres
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Gunga
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Newsletter</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Inscreva-se para receber as últimas notícias e ofertas especiais
              </p>
              <form className="space-y-2">
                <Input placeholder="Seu email" type="email" />
                <Button type="submit" className="w-full">
                  Increver-se
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Maragogi Turismo. Todos os direitos reservados.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import maragogi from "@/public/maragogi.jpg"
import WhatsappButton from "@/components/whatsapp-button"

// Sample data
const destinations = [
  {
    id: 1,
    name: "Maragogi, Maceió",
    description: "Explore Maragogi com sua família e amigos",
    image: maragogi,
  },
  {
    id: 2,
    name: "Gunga, Maceió",
    description: "Tenha experiências incríveis no Gunga",
    image: maragogi,
  },
  {
    id: 3,
    name: "São Miguel dos Milagres, Maceió",
    description: "Descubra a beleza de São Miguel dos Milagres",
    image: maragogi,
  },
]

const tours = [
  {
    id: 1,
    name: "Mirante do Gunga",
    description: "Desfrute de uma vista incrível do Mirante do Gunga",
    image: maragogi,
    duration: "1 Dia",
    location: "Gunga, Maceió, Brasil",
    dates: "Ano todo",
    groupSize: "Máximo 6 pessoas",
    price: 250,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Mirante do Gunga",
    description: "Desfrute de uma vista incrível do Mirante do Gunga",
    image: maragogi,
    duration: "1 Dia",
    location: "Gunga, Maceió, Brasil",
    dates: "Ano todo",
    groupSize: "Máximo 6 pessoas",
    price: 250,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Mirante do Gunga",
    description: "Desfrute de uma vista incrível do Mirante do Gunga",
    image: maragogi,
    duration: "1 Dia",
    location: "Gunga, Maceió, Brasil",
    dates: "Ano todo",
    groupSize: "Máximo 6 pessoas",
    price: 250,
    rating: 4.9,
  },
]

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

