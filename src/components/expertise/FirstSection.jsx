import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';
gsap.registerPlugin(SplitText);
import mainImg from '/projets-main.webp'

const FirstSection = () => {

    const firstSectionRef = useRef(null)
    const imgContainerRef = useRef(null);
    const imgRef = useRef(null);


    useGSAP(() => {
        // Animation for image
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        tl.from(imgContainerRef.current, {
            yPercent: -100,
            autoAlpha: 0,
            duration: 1
        })
            .from(imgRef.current, {
                yPercent: 100,
                scale: 1.3,
                duration: 1
            }, "-=1")

        // Animation for text
        new SplitText("p", {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) => {
                return gsap.from(self.lines, {
                    duration: 0.8,
                    ease: "sine.inOut",
                    yPercent: 100,
                    stagger: 0.05,
                });
            }
        });

    }, { scope: firstSectionRef });


    return (
        <div className='bg-white text-black min-h-screen lg:flex flex-col items-center'>

            <div ref={firstSectionRef} className='lg:flex items-center justify-between w-full mt-20 md:mt-40'>
                <div className='mb-10 lg:mb-0 lg:w-1/2'>
                    <p className="text-8xl lg:text-9xl font-semibold BebasNeue mb-3">
                        Expertises
                    </p>
                    <p className='text-xl text-justify w-[350px] lg:w-[470px]'>
                        De la stratégie immobilière à la création de vos espaces, notre expertise couvre chaque étape de votre projet.
                    </p>
                </div>
                <div className='overflow-hidden shadow' ref={imgContainerRef} >
                    <img src={mainImg} alt='img' ref={imgRef} />
                </div>
            </div>


            <div className='lg:flex items-start justify-between pt-10 py-20 lg:py-40 px-2 lg:px-0 lg:w-[60%]'>
                <p translate="no" className='text-2xl font-semibold whitespace-nowrap mb-4'>Full accompagnement:</p>
                <ul className='list-disc text-xl lg:pr-28 mt-4 lg:mt-0 ml-4 lg:ml-0 space-y-1'>
                    <li>Audit et conseil Immobilier</li>
                    <li>Architecture d'intérieur</li>
                    <li>AMO & Programmation</li>
                </ul>
            </div>
        </div>
    )
}

export default FirstSection