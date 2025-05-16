import BeforeServiceSlide from "../components/BeforeServiceSlide"
import Contact from "../components/Contact"
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
      <Contact />
    </div>
  )
}

export default Home