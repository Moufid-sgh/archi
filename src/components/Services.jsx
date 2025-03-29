
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
                start: "top 85px",
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
                    start: "top " + (180 + 55 * i),
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

            <div className="title-wrapper mb-[460px]">
                <h1 className="title syne text-4xl lg:text-6xl font-bold text-center">
                    Nos Services
                </h1>
            </div>

            <div className="cards lg:w-[65%] mx-auto py-0 px-2 lg:px-[50px]">

                {/* <div className="card-wrapper rounded-3xl shadow-lg bg-[#ECE1FF] w-full perspective-[500px] mb-52 last:mb-0">
                    <div className="card h-[370px] md:h-[300px] px-4 md:px20 flex flex-col items-start">
                        <div className='lg:flex lg:items-end space-x-3 font-extrabold  text-lime-500 text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.01</span>
                            <p>AMO & PROGRAMMATION</p>
                        </div>
                        <ul className='h-3/4 flex flex-col justify-center font-semibold space-x-2 space-y-4 mb-4 pl-4'>
                            <li className='bg-[#F4EDFF] rounded-sm p-1'>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier.
                            </li>
                            <li className='bg-[#F4EDFF] rounded-sm p-1'>
                                Assistance du MOA et du MOE dans le développement du projet.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card-wrapper rounded-3xl shadow-lg bg-[#ECE1FF] w-full perspective-[500px] mb-52 last:mb-0">
                    <div className="card h-[370px] md:h-[300px] px-4 md:px20 flex flex-col items-start">
                        <div className='lg:flex lg:items-end space-x-3 font-extrabold text-lime-500 text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.02</span>
                            <p>ARCHITECTURE D'INTERIEURE</p>
                        </div>
                        <ul className='h-3/4 flex flex-col justify-center font-semibold space-x-2 space-y-4 mb-4 pl-4'>
                            <li className='bg-[#F4EDFF] rounded-sm p-1'>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier.
                            </li>
                            <li className='bg-[#F4EDFF] rounded-sm p-1'>
                                Assistance du MOA et du MOE dans le développement du projet.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card-wrapper rounded-3xl shadow-lg bg-[#ECE1FF] w-full perspective-[500px] mb-52 last:mb-0">
                    <div className="card h-[370px] md:h-[300px] px-4 md:px20 flex flex-col items-start">
                        <div className='lg:flex lg:items-end space-x-3 text-lime-500 font-extrabold text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.03</span>
                            <p>ACCOMPAGNEMENT AU CHANGEMENT</p>
                        </div>
                        <ul className='h-3/4 flex flex-col justify-center font-semibold space-x-2 space-y-4 mb-4 pl-4'>
                            <li className='bg-[#F4EDFF] rounded-sm p-1'>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier.
                            </li>
                            <li className='bg-[#F4EDFF] rounded-sm p-1'>
                                Assistance du MOA et du MOE dans le développement du projet.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card-wrapper rounded-3xl shadow-lg bg-[#ECE1FF] w-full perspective-[500px] mb-52 last:mb-0">
                    <div className="card h-[370px] md:h-[300px] px-4 md:px20 flex flex-col items-start">
                        <div className='lg:flex lg:items-end space-x-3 text-lime-500 font-extrabold text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.04</span>
                            <p>CONSEIL EN IMMOBILIER D’ENTREPRISE</p>
                        </div>
                        <ul className='h-3/4 flex flex-col justify-center font-semibold space-x-2 space-y-4 mb-4 pl-4'>
                            <li className='bg-[#F4EDFF] rounded-sm p-1'>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier.
                            </li>
                            <li className='bg-[#F4EDFF] rounded-sm p-1'>
                                Assistance du MOA et du MOE dans le développement du projet.
                            </li>
                        </ul>
                    </div>
                </div> */}


                <div className="card-wrapper rounded-3xl shadow-lg bg-[#FFC2D1] w-full perspective-[500px] mb-52 last:mb-0">
                    <div className="card h-[370px] md:h-[300px] px-4 md:px20 flex flex-col items-start">
                        <div className='lg:flex lg:items-end space-x-3 font-extrabold text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.01</span>
                            <p>AMO & PROGRAMMATION</p>
                        </div>
                        <ul className='h-3/4 flex flex-col justify-center font-semibold space-x-2 space-y-4 mb-4 pl-4'>
                            <li className='bg-[#FFE5EC] rounded-sm p-1'>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier.
                            </li>
                            <li className='bg-[#FFE5EC] rounded-sm p-1'>
                                Assistance du MOA et du MOE dans le développement du projet.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card-wrapper rounded-3xl shadow-lg bg-[#FFB3C6] w-full perspective-[500px] mb-52 last:mb-0">
                    <div className="card h-[370px] md:h-[300px] px-4 md:px20 flex flex-col items-start">
                        <div className='lg:flex lg:items-end space-x-3 font-extrabold text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.02</span>
                            <p>ARCHITECTURE D'INTERIEURE</p>
                        </div>
                        <ul className='h-3/4 flex flex-col justify-center font-semibold space-x-2 space-y-4 mb-4 pl-4'>
                            <li className='bg-[#FFC2D1] rounded-sm p-1'>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier.
                            </li>
                            <li className='bg-[#FFC2D1] rounded-sm p-1'>
                                Assistance du MOA et du MOE dans le développement du projet.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card-wrapper rounded-3xl shadow-lg bg-[#FF8FAB] w-full perspective-[500px] mb-52 last:mb-0">
                    <div className="card h-[370px] md:h-[300px] px-4 md:px20 flex flex-col items-start">
                        <div className='lg:flex lg:items-end space-x-3  font-extrabold text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.03</span>
                            <p>ACCOMPAGNEMENT AU CHANGEMENT</p>
                        </div>
                        <ul className='h-3/4 flex flex-col justify-center font-semibold space-x-2 space-y-4 mb-4 pl-4'>
                            <li className='bg-[#FFB3C6] rounded-sm p-1'>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier.
                            </li>
                            <li className='bg-[#FFB3C6] rounded-sm p-1'>
                                Assistance du MOA et du MOE dans le développement du projet.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card-wrapper rounded-3xl shadow-lg bg-[#FB6F92] w-full perspective-[500px] mb-52 last:mb-0">
                    <div className="card h-[370px] md:h-[300px] px-4 md:px20 flex flex-col items-start text-">
                        <div className='lg:flex lg:items-end space-x-3 font-extrabold text-xl md:text-2xl mb-8 mt-2'>
                            <span className='text-5xl pt-1'>.04</span>
                            <p>CONSEIL EN IMMOBILIER D’ENTREPRISE</p>
                        </div>
                        <ul className='h-3/4 flex flex-col justify-center font-semibold space-x-2 space-y-4 mb-4 pl-4'>
                            <li className='bg-[#FF8FAB] rounded-sm p-1'>
                                Programmation stratégique, fonctionnelle, architecturale et technique
                                Schéma directeur immobilier.
                            </li>
                            <li className='bg-[#FF8FAB] rounded-sm p-1'>
                                Assistance du MOA et du MOE dans le développement du projet.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;