import { useRef, useState, useEffect, Suspense, lazy } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { dataSelectedProjects } from '../dataSelectedProjects';
const Overlay = lazy(() => import("./projets/Overlay"));

gsap.registerPlugin(ScrollTrigger);


const SelectedProjects = () => {

    const projectRef = useRef(null)


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


    //handle overlay
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleOpenOverlay = (project) => {
        setSelectedProject(project);

        setTimeout(() => {
            setIsOpen(true);
        }, 10);
    };


    const handleCloseOverlay = () => {
        setIsOpen(false);

        setTimeout(() => {
            setSelectedProject(null);
        }, 1000);
    };


    return (
        <div ref={projectRef} className='mt-48 px-2 lg:px-8'>
            <div className="title-wrapper overflow-hidden">
                <h1 className="title BebasNeue tracking-wide text-4xl lg:text-7xl text-center">
                    Projets
                </h1>
            </div>

            <section className='mt-12 lg:mt-16 grid grid-cols-1 gap-12 lg:grid-cols-4'>
                {
                    dataSelectedProjects.map((el, index) => {
                        const isFirst = index === 0;

                        const cardLgWidthClass = isFirst
                            ? 'lg:col-span-2' // Paysage 
                            : 'lg:col-span-1'; // Portrait 

                        const heightClass = 'h-[440px]';

                        return (
                            <div
                                key={index}
                                className={`images relative group ${heightClass} ${cardLgWidthClass}`}
                                onClick={() => handleOpenOverlay(el)}
                            >
                                <div className='relative text-[#091423] overflow-hidden h-full'>
                                    <img
                                        src={el.img}
                                        alt={el.name}
                                        className={`${heightClass} w-full object-cover shadow-sm group-hover:scale-115 duration-700`}
                                    />

                                    <div className='absolute bottom-0 flex items-center justify-center bg-gradient-to-b from-black/0 to-black/60 w-full h-full opacity-0 group-hover:opacity-100 duration-700 cursor-pointer'>
                                    </div>

                                    <p className='BebasNeue absolute bottom-4 left-4 uppercase text-white text-4xl tracking-wide group-hover:-translate-y-6 duration-700'>{el.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            {selectedProject && (
                <Suspense fallback={null}>
                    <Overlay
                        isOpen={isOpen}
                        onClose={handleCloseOverlay}
                        project={selectedProject}
                    />
                    /
                </Suspense>
            )}

            <div className='text-center mt-16'>
                <button className='border rounded-3xl cursor-pointer h-10 w-36 group overflow-hidden'>
                    <Link to='/projets' className='block group-hover:-translate-y-10 duration-500 ease-in-out mt-1.5'>
                        <p className='pt-0.5'>Voir plus</p>
                        <p className="text-[#091423] bg-white rounded-3xl w-full mt-2 py-2">Voir plus</p>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default SelectedProjects