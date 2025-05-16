import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import  { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);


const BeforeServiceSlide = () => {

    const title = "La phrase de Manel Archi immo"

    const BeforeServiceRef =  useRef();

    useGSAP(() => {
        gsap.set(BeforeServiceRef.current.querySelectorAll('span'), { y: 200, opacity: 0 })
        gsap.to(BeforeServiceRef.current.querySelectorAll('span'),
         { y: 0, 
           opacity:1, 
           stagger: 0.3,
           duration:0.7 , 
           ease:"power1.Out",
           scrollTrigger: {
            trigger: BeforeServiceRef.current,
            start: "center 80%",
            end: "bottom center",
            toggleActions: "play none none none", 
            once: true,
            // markers: true 
          }
         })
    }, { scope: BeforeServiceRef})

    return (
        <div ref={BeforeServiceRef} className='h-[80vh] flex items-center justify-center BebasNeue text-6xl lg:text-8xl'>
            <div className='flex flex-wrap px-8 lg:px-0 justify-center'>
            {
                title.split(" ").map((el, i) => {
                    return (
                        <p key={i} className='overflow-hidden px-2'>
                            <span className='inline-block will-change-transform'>{el}</span>
                        </p>
                    )
                })
            }
            </div>
        </div>
    )
}

export default BeforeServiceSlide