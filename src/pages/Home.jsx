import Services from "../components/Services"


const Home = () => {

  return (
    <div className='h-[4000px] px-8'>

      <section className="min-h-screen">
        <h1 className='mt-48 mb-4 syne font-bold text-4xl'>Wanna work with me</h1>
        <p className="w-1/2">
        Parce que Yemanja conçoit et réalise des aménagements d’une grande diversité, chaque projet est pour nous l’occasion de développer des solutions singulières et de challenger notre créativité. Chacun a ses spécificités mais tous sont empreints du plaisir que nous avons à les réaliser !
        </p>
      </section>

      <Services />
    </div>
  )
}

export default Home