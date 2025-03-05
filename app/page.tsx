import WhatsappButton from "@/components/whatsapp-button"
import Header from "@/components/header"
import HeroSection from "@/components/herosection"
import Destinations from "@/components/destinations"
import Tours from "@/components/tours"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function TourGuidePage() {
  return (
    <div className="flex min-h-screen flex-col text-black">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Destinations />
        <Tours />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <WhatsappButton />

      <Footer />
    </div>
  )
}

