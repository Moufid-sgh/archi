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

    const accompagnement = ["Audit et conseil Immobilier", "Architecture d'intérieur", "AMO & Programmation"];


    return (
        <div className='bg-white text-black min-h-screen lg:flex flex-col items-center'>

            <div ref={firstSectionRef} className='lg:flex items-center justify-between w-full mt-20 md:mt-40'>
                <div className='mb-10 lg:mb-0 lg:w-1/2'>
                    <p className="text-8xl lg:text-9xl font-semibold BebasNeue mb-3">
                        Expertise
                    </p>
                    <p className='text-xl text-justify w-[350px] lg:w-[470px]'>
                        De la stratégie immobilière à la création de vos espaces, notre expertise couvre chaque étape de votre projet.
                    </p>
                </div>
                <div className='overflow-hidden shadow' ref={imgContainerRef} >
                    <img src={mainImg} alt='img' ref={imgRef} />
                </div>
            </div>


            <div className='lg:flex items-start justify-between my-28 p-6 space-x-16'>
                <p translate="no" className='text-2xl font-bold whitespace-nowrap mb-4'>Full accompagnement :</p>
                <ul className='text-xl space-y-2'>
                    { accompagnement.map((item, index) => (
                        <li key={index} className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#E63098" d="M12 21c-.801 0-1.555-.312-2.121-.879S8.999 18.8 9 17.998c0-.746.271-.998.764-1.998H4.928c-1.654 0-3-1.347-3-3s1.346-3 3-3h4.836C9.27 9 9 8.745 9 7.999a2.98 2.98 0 0 1 .88-2.121c1.132-1.132 3.108-1.133 4.241.001L21.242 13l-7.121 7.121A2.98 2.98 0 0 1 12 21m-7.072-9a1.001 1.001 0 0 0 0 2h9.658l-3.293 3.293a1 1 0 0 0-.293.706c0 .269.104.519.293.708a1.023 1.023 0 0 0 1.414 0L18.414 13l-5.707-5.707a1.023 1.023 0 0 0-1.414 0a1 1 0 0 0-.293.706c0 .268.104.519.293.708L14.586 12z"/></svg>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FirstSection