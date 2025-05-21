import BeforeServiceSlide from "../components/BeforeServiceSlide"
import ContactSection from "../components/ContactSection"
import Hero from "../components/Hero"
import SelectedProjects from "../components/SelectedProjects"
import Services from "../components/Services"



const Home = () => {


  return (
    <div>
      <Hero />
      <BeforeServiceSlide />
      <Services />
      <SelectedProjects />
      <ContactSection />
    </div>
  )
}

export default Home