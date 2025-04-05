import Contact from "../components/Contact"
import Hero from "../components/Hero"
import SelectedProjects from "../components/SelectedProjects"
import Services from "../components/Services"


const Home = () => {

  return (
    <div className='px-2 lg:px-8'>
      <Hero />
      <Services />
      <SelectedProjects />
      <Contact />
    </div>
  )
}

export default Home