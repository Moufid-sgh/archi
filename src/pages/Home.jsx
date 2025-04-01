import Hero from "../components/Hero"
import Projets from "../components/Projets"
import Services from "../components/Services"


const Home = () => {

  return (
    <div className='h-[4000px] px-2 lg:px-8'>
      <Hero />
      <Services />
      <Projets />
    </div>
  )
}

export default Home