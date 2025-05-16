import { useRef } from 'react';
import img1 from '/house.jpg'
import img2 from '/bureau-2.jpg'
import img3 from '/bureau-3.jpg'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

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
                <h1 className="title BebasNeue tracking-wide text-4xl lg:text-7xl text-center">
                    Projets
                </h1>
            </div>

            <section className='lg:flex items-center justify-between mt-12 lg:mt-24 space-y-12 lg:space-y-0'>
                {
                    imgs.map((el, index) => {
                        return (
                            <div key={index} className='images relative h-[420px] w-auto group'>
                                <div className='relative text-[#091423] overflow-hidden'>
                                    <img src={el} alt="img" className='h-[420px] w-full object-cover shadow-sm group-hover:scale-115 duration-700'/>

                                    <div className='absolute bottom-0 flex items-center justify-center bg-gradient-to-b from-black/0 to-black/60 w-full h-full opacity-0 group-hover:opacity-100 duration-700 cursor-pointer'>
                                    </div>

                                    <p className='BebasNeue absolute bottom-4 left-4 uppercase text-white text-4xl tracking-wide   group-hover:-translate-y-6  duration-700'>Projest ternes</p>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <div className='text-center mt-16'>
                <button className='border rounded-3xl cursor-pointer h-10 w-36 group overflow-hidden'>
                    <Link to='/projets' className='block group-hover:-translate-y-10 duration-500 ease-in-out mt-1.5'>
                        <p>Voir plus</p>
                        <p className="text-[#091423] bg-white rounded-3xl w-full mt-2.5  py-2">Voir plus</p>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default SelectedProjects