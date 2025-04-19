
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);


const Services = () => {

    const serviceRef = useRef(null);

    useGSAP(() => {
        //title reveal
        gsap.set(".title", { y: 100 });

        gsap.to(".title", {
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".title-wrapper",
              scrub: 1,
              start: "top 80%",
              end: "top 40%",
              once: true,
            }
          });

        //title pin
        gsap.to(".title", {
            scrollTrigger: {
                trigger: ".title-wrapper",
                start: "top 85px",
                end: "bottom 550",
                endTrigger: serviceRef.current,
                pin: true,
                pinSpacing: false,
                scrub: true,
            }
        });

        //cards
        const cardsWrappers = gsap.utils.toArray(".card-wrapper");
        const cards = gsap.utils.toArray(".card");

        cardsWrappers.forEach((wrapper, i) => {
            const card = cards[i];

            gsap.to(card, {
                // x: x,
                transformOrigin: "top center",
                ease: "power1.out",
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top " + (170 + 57 * i),
                    end: "bottom 550",
                    endTrigger: serviceRef.current,
                    scrub: true,
                    pin: wrapper,
                    pinSpacing: false,
                    id: i + 1,
                }
            });
        });
    }, { scope: serviceRef });

    const services = [{ title: "AMO & PROGRAMMATION", description: "Programmation stratégique, fonctionnelle, architecturale et technique Schéma directeur immobilier. Assistance du MOA et du MOE dans le développement du projet." },
    { title: "ARCHITECTURE D'INTERIEURE", description: "Programmation stratégique, fonctionnelle, architecturale et technique Schéma directeur immobilier. Assistance du MOA et du MOE dans le développement du projet." },
    { title: "ACCOMPAGNEMENT AU CHANGEMENT", description: "Programmation stratégique, fonctionnelle, architecturale et technique Schéma directeur immobilier. Assistance du MOA et du MOE dans le développement du projet." },
    { title: "CONSEIL EN IMMOBILIER D’ENTREPRISE", description: "Programmation stratégique, fonctionnelle, architecturale et technique Schéma directeur immobilier. Assistance du MOA et du MOE dans le développement du projet." }]

    return (
        <div ref={serviceRef} className="rounded-3xl w-full min-h-screen mt-6 lg:mt-8 pb-[50px]">

            <div className="title-wrapper mb-[470px] overflow-hidden">
                <h1 className="title PolySans tracking-wide text-4xl lg:text-7xl text-center">
                    Services
                </h1>
            </div>

            <div className="cards lg:w-[65%] mx-auto py-0 px-2 lg:px-[50px]">

                {services.map((service, index) => (
                    <div key={index} className="card-wrapper relative rounded-3xl shadow-lg w-full bg-white border border-gray-300 perspective-[500px] mb-52 last:mb-0">
                        <div className="card h-[370px] md:h-[300px] px-4 md:px20 flex flex-col items-start">
                            <div className='lg:flex lg:items-end space-x-2 syne font-bold text-xl text-[#091423] md:text-2xl mb-8 mt-2'>
                                <span className='text-5xl pt-1'>.0{index + 1}</span>
                                <p>{service.title}</p>
                            </div>
                            <ul className='h-1/2 flex flex-col justify-center space-x-2 space-y-4 mb-4 pl-4 text-xl text-slate-700'>
                                {service.description.split('. ').map((desc, i) => (
                                    <li key={i}>
                                        <span className='mr-1.5 text-[#E63098] font-bold'>&#10004;</span>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    );
};

export default Services;