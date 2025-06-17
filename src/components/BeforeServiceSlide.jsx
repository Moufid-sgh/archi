import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText);


const BeforeServiceSlide = () => {


    const BeforeServiceRef = useRef();


    useGSAP(() => {
        new SplitText("p", {
            type: "chars, lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) => {
                return gsap.from(self.chars, {
                    duration: 1,
                    ease: "sine.inOut",
                    yPercent: 170,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: BeforeServiceRef.current,
                        start: 'center 85%',
                        end: 'bottom center',
                        toggleActions: 'play none none none',
                        once: true,
                    },
                });
            }
        });

    }, { scope: BeforeServiceRef });


    return (
        <div ref={BeforeServiceRef} className='h-fit flex flex-col px-2 lg:px-8 py-8'>
            <p className='BebasNeue text-5xl lg:text-8xl text-center '>
                MAI’N votre partenaire expert pour l’aménagement de vos bureaux
            </p>

            {/* <p className='text-2xl lg:text-3xl text-center my-16'>
                Nous vous accompagnons dans le conseil immobilier, la conception et la réalisations de vos espaces de travail
            </p> */}

            <p className='text-lg lg:text-2xl text-center mt-28'>
                <span>Nous donnons forme à l’invisible, votre “why”</span>
            </p>
        </div>
    )
}

export default BeforeServiceSlide