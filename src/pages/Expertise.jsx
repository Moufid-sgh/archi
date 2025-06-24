import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';
import FirstSection from '../components/expertise/FirstSection';
import SecondSection from '../components/expertise/SecondSection';
gsap.registerPlugin(SplitText);


const Expertise = () => {

  const ExpertiseRef = useRef(null);


  return (
    <div className='min-h-screen bg-white text-black flex flex-col justify-center px-2 lg:px-8 pb-10'>
      <FirstSection />
      <SecondSection />
    </div>
  )
}

export default Expertise