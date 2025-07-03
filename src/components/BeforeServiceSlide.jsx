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
        <div ref={BeforeServiceRef} className='h-fit flex flex-col px-2 lg:px-8 py-8 mt-10'>
            <p className='BebasNeue text-5xl lg:text-8xl text-center '>
                MAI’N votre partenaire expert pour l’aménagement de vos bureaux
            </p>


            <div className='lg:flex justify-center text-lg lg:text-2xl mt-32  text-center'>
                <p>Nous donnons forme à l’invisible</p>
                <p >votre “why”</p>
            </div>
        </div>
    )
}

export default BeforeServiceSlide