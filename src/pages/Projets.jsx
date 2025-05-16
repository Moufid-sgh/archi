import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import FirstSection from '../components/projets/FirstSection'

const Projets = () => {


  return (
    <div className='min-h-screen bg-white text-black flex justify-center px-2 lg:px-8 pb-10'>
        <FirstSection />
    </div>
  )
}

export default Projets