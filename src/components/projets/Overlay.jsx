import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { SplitText } from "gsap/SplitText";
import Carousel from './Carousel';
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
                        duration: 0.8,
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

        //Animation text for mobile
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



    const OPTIONS = { align: 'start' }



    return (
        <div
            className={`fixed inset-0 z-50 overflow-y-auto transition-transform duration-700 ease-in-out bg-white text-[#091423] w-full
                  ${isOpen ? 'translate-y-0 ease-out' : 'translate-y-full ease-in'}`}
        >
            <div className='mb-24'>
                <button
                    onClick={onClose}
                    className="absolute right-6 top-4 text-[#091423] hover:text-[#E63098] duration-300 text-2xl font-bold cursor-pointer"
                >
                    ✕
                </button>

                <div ref={overlayRef} className="lg:flex items-start justify-between px-2 lg:px-20 mt-16">
                    {/* img */}
                    <div ref={mainImgContainerRef} className="lg:w-1/2 w-auto flex justify-center lg:justify-end lg:order-2 mb-6 lg:mb-0 overflow-hidden">
                        <img
                            src={project.img}
                            alt={project.name}
                            ref={mainImgRef}
                            className=" object-cover origin-bottom max-h-[550px]"
                        />
                    </div>

                    <div className="lg:w-1/2 lg:order-1 lg:pr-8">
                        <h2 className="BebasNeue text text-7xl lg:text-8xl font-bold mb-4">{project.name}</h2>
                        {/* details */}
                        <div className="flex items-center gap-10 mb-6">
                            <p className="text font-bold text-xl">{project?.location}</p>
                            <p className="text font-bold text-xl">{project?.surface}</p>
                        </div>
                        {/* description */}
                        {/* <div className=" space-y-3 mx-auto">
                            {project?.description.map((paragraph, index) => (
                                <p key={index} className="text text-justify leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div> */}
                        <div className="max-w-prose mx-auto space-y-3 prose-justified">
                            {project?.description.map((p, i) => (
                                <p key={i} className="text text-justify leading-relaxed">
                                    {p.replace(/\n+/g, ' ')}
                                </p>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <Carousel
                slides={project.slideImgs}
                options={OPTIONS}
            />

        </div>
    );
};

export default Overlay;