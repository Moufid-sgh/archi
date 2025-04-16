import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type';
import { useRef } from "react";



const Contact = () => {

   const contactRef = useRef(null);

   useGSAP(() => {    
    gsap.utils.toArray('.reveal').forEach(text => {
        // Split text
        let splitText = new SplitType(text, { type: 'words'})
      
        // Animation
        gsap.from(splitText.words, {
          opacity: 0,
          y: 50,
          ease: 'power3.out',
          stagger: 0.2,
          duration: 0.5,
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 70%",
            end: "center center",
            toggleActions: "play none none none", 
            once: true, 
          }
        })
      })
    , { scope: contactRef }})
    

    return (
        <div ref={contactRef} className="reveal PoiretOne mt-20 text-3xl lg:text-5xl leading-15 lg:leading-22 mb-24">
            <p>Vous avez un projet en tête ? Parlons-en !</p>
            <div className='flex'>
                <p>Envoyez-nous un message et nous reviendrons vers vous rapidement.
                        <a href="mailto:manelrachdi@hotmail.fr" 
                            className='inline-block cursor-pointer ml-2 text-[#E63098] hover:text-violet-600 duration-500'>
                            Contactez-nous
                        </a>
                </p>
            </div>
        </div>
    )
}



export default Contact