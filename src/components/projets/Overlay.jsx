import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const Overlay = ({ isOpen, onClose, project }) => {
    if (!project) return null;

    const overlayRef = useRef(null);
    const mainImgRef = useRef(null);
    const mainImgContainerRef = useRef(null);


    useGSAP(() => {
        // Animation for image
        let tl = gsap.timeline({ defaults: { ease: 'power1.out', } })

        let mm = gsap.matchMedia();

        tl.from(mainImgContainerRef.current, {
            yPercent: 100,
            autoAlpha: 0,
            duration: 1
        })
            .from(mainImgRef.current, {
                yPercent: 100,
                scale: 1.3,
                duration: 1,
                ease: "sine.inOut",
                delay: 0.2,
            }, "-=1")

        //Animation text for desktop
        mm.add("(min-width: 1024px)", () => {
           const split = new SplitText(".text", {
                type: "lines",
                mask: "lines",
                autoSplit: true,    
                onSplit: (self) => {
                    return gsap.from(self.lines, {
                        duration: 0.6,
                        ease: "sine.inOut",
                        yPercent: 100,
                        stagger: 0.05,
                        force3D: true,
                        delay: 0.2
                    });
                }
            });
            return () => {
                if (split) {
                    split.revert();
                }
            };
        });

        //Animation text fro mobile
        mm.add("(max-width: 1024px)", () => {
           const split = new SplitText(".text", {
                type: "lines",
                mask: "lines",
                autoSplit: true,    
                onSplit: (self) => {
                    return gsap.from(self.lines, {
                        duration: 0.6,
                        ease: "sine.inOut",
                        yPercent: 100,
                        stagger: 0.05,
                        force3D: true,
                        delay: 1
                    });
                }
            });
            return () => {
                if (split) {
                    split.revert();
                }
            };
        });


    }, { scope: overlayRef });






    return (
        <div
            className={`fixed inset-0 z-50 overflow-y-auto transition-transform duration-700 ease-in-out bg-[#091423] text-white  w-full
                  ${isOpen ? 'translate-y-0 ease-out' : 'translate-y-full ease-in'}`}
        >
            <div className="min-h-screen">
                <button
                    onClick={onClose}
                    className="absolute right-6 top-4 text-white hover:text-[#E63098] duration-300 text-2xl font-bold cursor-pointer"
                >
                    ✕
                </button>


                <div ref={overlayRef} className="lg:flex items-start justify-between lg:px-20 px-2 mt-16">
                    {/* img */}
                    <div ref={mainImgContainerRef} className="lg:w-1/2 w-auto h-[500px] flex justify-center lg:justify-end lg:order-2 mb-6 lg:mb-0 overflow-hidden">
                        <img
                            src={project.img}
                            alt={project.name}
                            ref={mainImgRef}
                            className=" object-cover origin-bottom h-full"
                        />
                    </div>

                    <div className="lg:w-1/2 lg:order-1">
                        <h2 className="BebasNeue text text-7xl lg:text-8xl font-bold mb-6">{project.name}</h2>
                        {/* description */}
                        <div className="whitespace-pre-line space-y-3">
                            {project?.description.map((paragraph, index) => (
                                <p key={index} className="text">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        {/* details */}
                        <div className="flex items-center gap-10 mt-6">
                            <div className="text">
                                <p className="text-[#E63098]">adresse</p>
                                <p className="font-bold text-xl">{project?.location}</p>
                            </div>
                            <div className='text'>
                                <p className="text-[#E63098]">surface</p>
                                <p className="font-bold text-xl">{project?.surface}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Overlay;