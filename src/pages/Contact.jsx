import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const Contact = () => {

    const desktopSvgRef = useRef(null);
    const mobileSvgRef = useRef(null);

   useGSAP(() => {
        // Desktop SVG animation
        const desktopPath = desktopSvgRef.current?.querySelector("path");
        const desktopMarker = desktopSvgRef.current?.querySelector("#SvgjsMarker1915 polygon");

        if (desktopPath && desktopMarker) {
            gsap.set(desktopPath, { drawSVG: "0%" });
            gsap.set(desktopMarker, { scale: 0, opacity: 0 });

            gsap.timeline({
                defaults: { ease: "power2.inOut" }
            })
            .to(desktopPath, {
                drawSVG: "100%",
                duration: 2
            })
            .to(desktopMarker, {
                scale: 1,
                opacity: 1,
                duration: 0.3
            }, "-=0.3");
        }
        
        // Mobile SVG animation
        const mobilePath = mobileSvgRef.current?.querySelector("path");
        const mobileMarker = mobileSvgRef.current?.querySelector("#SvgjsMarker1914 polygon");

        if (mobilePath && mobileMarker) {
            gsap.set(mobilePath, { drawSVG: "0%" });
            gsap.set(mobileMarker, { scale: 0, opacity: 0 });

            gsap.timeline({
                defaults: { ease: "power2.inOut" }
            })
            .to(mobilePath, {
                drawSVG: "100%",
                duration: 2
            })
            .to(mobileMarker, {
                scale: 1,
                opacity: 1,
                duration: 0.3
            }, "-=0.3");
        }
    }, { scope: [desktopSvgRef, mobileSvgRef] });


    return (
        <div className='min-h-screen lg:flex items-center px-2 lg:px-8'>

            <section className='lg:w-1/2 mt-28 lg:mt-0'>
                <h1 className='text-5xl font-bold'>
                    Une belle collaboration commence ici.
                </h1>

                {/* svg for desktop--------- */}
                <svg
                    ref={desktopSvgRef}    
                    className='size-48 ml-16 my-8 hidden lg:block'
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="200 200 400 400"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g strokeWidth="10" stroke="#d52c8a" fill="none" strokeLinecap="square">
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
                            <polygon points="0,4.5 1.5,2.25 0,0 4.5,2.25" fill="#d52c8a" />
                        </marker>
                    </defs>
                </svg>

                {/* svg for mobile------------------- */}
                <svg ref={mobileSvgRef} className='size-48 ml-20 mt-4 lg:hidden' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.1"  viewBox="200 200 600 500"><g strokeWidth="10" stroke="#d52c8a" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M250 322.54331970214844Q320 -29.456680297851562 400 472.54331970214844Q507 -101.45668029785156 550 622.5433197021484 " markerEnd="url(#SvgjsMarker1914)"></path></g><defs><marker markerWidth="4.5" markerHeight="4.5" refX="2.25" refY="2.25" viewBox="0 0 4.5 4.5" orient="auto" id="SvgjsMarker1914"><polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="#d52c8a"></polygon></marker></defs></svg>

                <div className="hidden lg:block">
                    <p>Suivez-nous</p>
                    <ul className="flex items-center space-x-4">
                        <li className='hover:opacity-50 duration-300 cursor-pointer'>Linkedin</li>
                        <li className='hover:opacity-50 duration-300 cursor-pointer'>Instagram</li>
                        <li className='hover:opacity-50 duration-300 cursor-pointer'>Facebook</li>
                    </ul>
                </div>
            </section>


            <section className='lg:w-1/2 my-6 lg:my-0 lg:pl-8'>
                <p className='text-2xl font-bold'>
                    Contactez-nous
                </p>

                <form className='flex flex-col items-center mt-4 space-y-6 text-black'>
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
                        className='bg-[#E63098] text-white rounded-md p-2 w-full hover:bg-violet-600 transition duration-500 cursor-pointer'
                    >
                        Envoyer
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Contact