
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import checkIcon from '/check.svg'

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    useGSAP(() => {
        //title
        gsap.to(".title", {
            scrollTrigger: {
                trigger: ".title-wrapper",
                start: "top 80px",
                end: "bottom 550",
                endTrigger: ".wrapper",
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
            // const x = 30 * i;
            
            gsap.to(card, {
                // x: x,
                transformOrigin: "top center",
                ease: "expo.in",
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top " + (180 + 53 * i),
                    end: "bottom 550",
                    endTrigger: ".wrapper",
                    scrub: true,
                    pin: wrapper,
                    pinSpacing: false,
                    id: i + 1,
                }
            });
        });
    });

    return (
        <div className="wrapper w-full min-h-screen pt-[100px] pb-[50px]">

            <div className="title-wrapper mb-72">
                <h1 className="title syne text-4xl lg:text-6xl font-bold text-center">
                    Nos Services
                </h1>
            </div>

            <div className="cards lg:w-[65%] mx-auto py-0 px-2 lg:px-[50px]">

                <div className="card-wrapper rounded-3xl shadow-lg bg-[#EAF0F1] border border-gray-200 w-full perspective-[500px] mb-24 last:mb-0">
                    <div className="card h-[350px] px-8 md:px20 text-black flex flex-col items-start">
                        <div className='lg:flex lg:items-end space-x-3 font-extrabold text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.01</span>
                             <p>AMO & PROGRAMMATION</p>
                        </div>
                        <div className='flex items-start space-x-2 mb-4'>
                            <img src={checkIcon} alt="check icon" width="20" height="20" />
                            <p>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier
                            </p>
                        </div>
                        <div className='flex items-start space-x-2'>
                            <img src={checkIcon} alt="check icon" width="20" height="20" />
                            <p>
                                Assistance du MOA et du MOE dans le développement du projet
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper rounded-3xl shadow-lg bg-white border border-gray-200 w-full perspective-[500px] mb-24 last:mb-0">
                    <div className="card h-[350px] px-8 md:px20 text-black flex flex-col items-start">
                        <div className='lg:flex lg:items-end space-x-3 font-extrabold text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.02</span>
                             <p>ARCHITECTURE D'INTERIEURE</p>
                        </div>
                        <div className='flex items-start space-x-2 mb-4'>
                            <img src={checkIcon} alt="check icon" width="20" height="20" />
                            <p>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier
                            </p>
                        </div>
                        <div className='flex items-start space-x-2'>
                            <img src={checkIcon} alt="check icon" width="20" height="20" />
                            <p>
                                Assistance du MOA et du MOE dans le développement du projet
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper rounded-3xl shadow-lg bg-white border border-gray-200 w-full perspective-[500px] mb-24 last:mb-0">
                    <div className="card h-[350px] px-8 md:px20 text-black flex flex-col items-start">
                        <div className='lg:flex lg:items-end space-x-3 font-extrabold text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.03</span>
                             <p>ACCOMPAGNEMENT AU CHANGEMENT</p>
                        </div>
                        <div className='flex items-start space-x-2 mb-4'>
                            <img src={checkIcon} alt="check icon" width="20" height="20" />
                            <p>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier
                            </p>
                        </div>
                        <div className='flex items-start space-x-2'>
                            <img src={checkIcon} alt="check icon" width="20" height="20" />
                            <p>
                                Assistance du MOA et du MOE dans le développement du projet
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper rounded-3xl shadow-lg bg-white border border-gray-200 w-full perspective-[500px] mb-24 last:mb-0">
                    <div className="card h-[350px] px-8 md:px20 text-black flex flex-col items-start">
                        <div className='lg:flex lg:items-end space-x-3 font-extrabold text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.04</span>
                             <p>CONSEIL EN IMMOBILIER D’ENTREPRISE</p>
                        </div>
                        <div className='flex items-start space-x-2 mb-4'>
                            <img src={checkIcon} alt="check icon" width="20" height="20" />
                            <p>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier
                            </p>
                        </div>
                        <div className='flex items-start space-x-2'>
                            <img src={checkIcon} alt="check icon" width="20" height="20" />
                            <p>
                                Assistance du MOA et du MOE dans le développement du projet
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;