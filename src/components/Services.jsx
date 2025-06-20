
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
              start: "top 70%",
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
                    start: "top " + (190 + 120 * i),
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

    const services = [{ title: "AUDIT ET CONSEIL IMMOBILIER", bgStyle: "bg-slate-50" },
    { title: "ARCHITECTURE D'INTÉRIEUR", bgStyle: "bg-slate-100" },
    { title: "AMO & PROGRAMMATION", bgStyle: "bg-slate-200" },
    ]

    return (
        <div ref={serviceRef} className="w-full min-h-screen mt-20 lg:mt-48 pb-[50px]">

            <div className="title-wrapper mb-[470px] overflow-hidden">
                <h1 className="title BebasNeue tracking-wide text-4xl lg:text-7xl text-center">
                    Expertises
                </h1>
            </div>

            <div className="cards lg:w-[65%] mx-auto py-0 px-2 lg:px-[50px]">

                {services.map((service, index) => (
                    <div key={index} className="card-wrapper relative w-full text-[#091423] perspective-[500px] mb-52 last:mb-0">
                        <div className={`card flex items-center justify-center text-center h-[180px] font-bold text-3xl lg:text-4xl rounded-lg shadow border border-gray-300 ${service.bgStyle} `}>
                                <p>{service.title}</p>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    );
};

export default Services;