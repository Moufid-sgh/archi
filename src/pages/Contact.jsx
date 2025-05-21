import { useEffect, useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const Contact = () => {

    const svgRef = useRef(null);

    useGSAP(() => {

         const path = svgRef.current.querySelector("path");
        const marker = svgRef.current.querySelector("#SvgjsMarker1915 polygon");

        // Set initial states
        gsap.set(path, { drawSVG: "0%" });
        gsap.set(marker, { scale: 0, opacity: 0 });

        // Create timeline
        const tl = gsap.timeline({
            defaults: { ease: "power2.inOut" }
        });

        tl.to(path, {
            drawSVG: "100%",
            duration: 2
        })
        .to(marker, {
            scale:   1,
            opacity: 1,
            duration: 0.3
        }, "-=0.3"); // Start slightly before path animation ends


     }, { scope: svgRef.current });

    return (
        <div className='min-h-screen lg:flex items-center px-2 lg:px-8'>

            <section className='lg:w-1/2 mt-28 lg:mt-0'>
                <h1 className='text-5xl font-bold'>
                    Une belle collaboration commence ici.
                </h1>


                <svg
                ref={svgRef}
                    className='size-48 ml-8 my-8'
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="200 200 400 400"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        strokeWidth="10"
                        stroke="#d52c8a"
                        fill="none"
                        strokeLinecap="square"
                    >
                        <path
                            d="M240.5 240.5Q673.5 296.5 400 400Q49.5 523.5 559.5 559.5"
                            markerEnd="url(#SvgjsMarker1915)"
                        />
                    </g>
                    <defs>
                        <marker
                            markerWidth="4.5"
                            markerHeight="4.5"
                            refX="2.25"
                            refY="2.25"
                            viewBox="0 0 4.5 4.5"
                            orient="auto"
                            id="SvgjsMarker1915"
                        >
                            <polygon
                                points="0,4.5 1.5,2.25 0,0 4.5,2.25"
                                fill="#d52c8a"
                            />
                        </marker>
                    </defs>
                </svg>

                <div>
                    <p>Trouvez-nous</p>
                    <ul className="flex items-center space-x-4">
                        <li className='hover:opacity-50 duration-300 cursor-pointer'>Linkedin</li>
                        <li className='hover:opacity-50 duration-300 cursor-pointer'>Instagram</li>
                        <li className='hover:opacity-50 duration-300 cursor-pointer'>Facebook</li>
                    </ul>
                </div>
            </section>


            <section className='lg:w-1/2 my-12 lg:my-0 lg:pl-8'>
                <p className='text-2xl font-bold'>
                    Contactez-nous
                </p>

                <form className='flex flex-col items-center mt-4 space-y-6'>
                    <input
                        type="text"
                        placeholder="Nom"
                        className='bg-white placeholder-[#091423] rounded-md p-2 w-full'
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className='bg-white placeholder-[#091423] rounded-md p-2 w-full'
                    />
                    <textarea
                        placeholder="Message"
                        className='bg-white placeholder-[#091423] rounded-md p-2 h-36 w-full'
                    ></textarea>
                    <button
                        type="submit"
                        className='bg-[#E63098] text-white rounded-md p-2 w-full hover:bg-[#d52c8a] transition duration-300'
                    >
                        Envoyer
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Contact