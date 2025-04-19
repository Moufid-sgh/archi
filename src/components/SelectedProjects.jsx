import { useRef } from 'react';
import img1 from '/house.jpg'
import img2 from '/bureau-2.jpg'
import img3 from '/bureau-3.jpg'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const SelectedProjects = () => {

    const projectRef = useRef(null)

    const imgs = [img1, img2, img3]

    useGSAP(() => {
        // Initial states
        gsap.set(".title", { y: 100 });
        const images = gsap.utils.toArray(".images");
        gsap.set(images, { y: 200, opacity: 0 });

        // Title animation
        gsap.to(".title", {
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".title-wrapper",
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
                once: true,
            }
        }); 

         // Images animation with stagger
         images.forEach((image, i) => {
            gsap.to(image, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: image,
                    start: "top 90%",
                    end: "top 65%",
                    scrub: 1,
                    once: true,
                }
            });
        });
       

    }, { scope: projectRef });


    return (
        <div ref={projectRef} className='mt-48 px-2 lg:px-8'>
            <div className="title-wrapper overflow-hidden">
                <h1 className="title PolySans tracking-wide text-4xl lg:text-7xl text-center">
                    Projets
                </h1>
            </div>

            <section className='lg:flex items-center justify-between mt-12 lg:mt-24 space-y-12 lg:space-y-0'>
                {
                    imgs.map((el, index) => {
                        return (
                            <div key={index} className='images relative h-[400px] w-auto group'>
                                <div className='relative rounded-xl text-[#091423] group-hover:scale-95 overflow-hidden duration-700 ease-out'>
                                    <img src={el} alt="img" className='h-96 w-full object-cover rounded-2xl shadow-sm group-hover:scale-115 duration-700 ease-out'
                                    />
                                    {/* redirect */}
                                    <div className='absolute top-1.5 right-1.5 p-1.5 rounded-[12px] bg-white translate-y-[-45px] group-hover:translate-y-0 ease-out delay-200 duration-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10m0 0v10m0-10L7 17" /></svg>
                                    </div>

                                    {/* description */}
                                    <div className='absolute left-0 right-0 bg-white rounded-[12px] border border-gray-300 shadow-sm font-semibold scale-95 py-2 px-3 translate-y-0 group-hover:translate-y-[-52px] ease-out delay-200 duration-500'>
                                        Titre
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <div className='text-center mt-16'>
                <button className='border rounded-3xl cursor-pointer h-10 w-36 group overflow-hidden'>
                    <div className='group-hover:-translate-y-10 duration-500 ease-in-out mt-1.5'>
                        <p>Voir plus</p>
                        <p className="text-[#091423] bg-white rounded-3xl w-full mt-2.5  py-2">Voir plus</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SelectedProjects