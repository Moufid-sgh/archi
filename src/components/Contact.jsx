import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type';
import { useRef } from "react";



const Contact = () => {

   const contactRef = useRef(null)

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
            // markers: true,
          }
        })
      })
    })

    return (
        <div ref={contactRef} className="reveal mt-20 text-3xl lg:text-5xl leading-15 lg:leading-22 mb-24">
            <p>Vous avez un projet en tête ? Parlons-en !</p>
            <div className=''>
                <p className="space-x-4">Envoyez-nous un message et nous reviendrons vers vous rapidement
                        <a href="mailto:manelrachdi@hotmail.fr" 
                            className='border rounded-4xl inline-block bg-white cursor-pointer px-4  hover:border-[#00FFA9] duration-300'>
                            Contactez-nous
                        </a>
                </p>
            </div>
        </div>
    )
}



export default Contact