import Navigation from "./components/layout/Navigation"
import ThemeController from "./components/ThemeController"
import RevealObserver from "./components/RevealObserver"
import Hero from "./components/sections/Hero"
import AboutUs from "./components/sections/AboutUs"
import Companies from "./components/sections/Companies"
import CeoMessage from "./components/sections/CeoMessage"
import OurServices from "./components/sections/OurServices"
import NewsSection from "./components/sections/NewsSection"
import ProjectsSlider from "./components/sections/ProjectsSlider"
import OurBrands from "./components/sections/OurBrands"
import ContactUs from "./components/sections/ContactUs"
import Footer from "./components/sections/Footer"

export default function Home() {
  return (
    <main id="main" className="bg-paper text-ink">
      <ThemeController />
      <RevealObserver />
      <Navigation overlay />
      <Hero />
      <AboutUs />
      <Companies />
      <CeoMessage />
      <OurServices />
      <NewsSection />
      <ProjectsSlider />
      <OurBrands />
      <ContactUs />
      <Footer />
    </main>
  )
}
