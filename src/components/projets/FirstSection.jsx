import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';
gsap.registerPlugin(SplitText);
import mainImg from '/projets-main.webp'

const FirstSection = () => {

    const firstSectionRef = useRef(null)
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const imgContainerRef = useRef(null);
    const imgRef = useRef(null);

    useGSAP(() => {
        //for img
        let tl = gsap.timeline({ defaults: { ease: 'power1.out', duration: 0.8 } })

        tl.from(imgContainerRef.current, 1, { yPercent: -100, autoAlpha: 0 })
            .from(imgRef.current, 1, { yPercent: 100, scale: 1.3, delay: -1 })
            
        //for title
        // gsap.from(titleRef.current, { y: 100, autoAlpha: 0, ease: 'power2.out', duration: 0.6 })

        // new SplitText(subtitleRef.current, {
        //     type: "lines",
        //     autoSplit: true,
        //     onSplit: (self) => {
        //         return gsap.from(self.lines, {
        //             y: 100,
        //             autoAlpha: 0,
        //             stagger: 0.05,
        //             delay: 0.2,
        //             ease: 'power2.out',
        //             duration: 0.8
        //         });
        //     }
        // });

        //  new SplitText(".anim", { type: "lines", linesClass: "lineParent" });
        new SplitText(".anim", {
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
        <div ref={firstSectionRef} className='bg-white text-black min-h-screen lg:flex flex-col items-center'>

            <div className='md:flex items-center justify-between w-full mt-20 md:mt-40'>
                <div className='mb-10 md:mb-0 lg:w-1/2'>
                    {/* <div className='overflow-hidden'> */}
                        <p  className="anim text-9xl font-semibold BebasNeue">NOS PROJETS</p>
                    {/* </div> */}
                    {/* <div className='overflow-hidden'> */}
                        <p  className='anim text-xl pr-28'>Des espaces pensés pour l’usage, guidés par l’émotion et portés par une vision.</p>
                    {/* </div> */}
                </div>
                <div className='overflow-hidden' ref={imgContainerRef} >
                    <img src={mainImg} alt='img' ref={imgRef} />
                </div>
            </div>

            <div className='lg:flex items-start justify-between py-20 md:py-40 px-2 lg:px-0 lg:w-2/3'>
                <p translate="no" className='text-2xl font-semibold whitespace-nowrap'>We design your "why"</p>
                <p className='text-xl lg:px-20 mt-8 lg:mt-0'>
                    Chaque espace que nous concevons est une réponse sur-mesure

                    aux besoins & à la rasion d'être de chacun de nos clients.

                    Découvre nos projets vivants, porteurs de sens et de performance
                </p>
            </div>
        </div>
    )
}

export default FirstSection