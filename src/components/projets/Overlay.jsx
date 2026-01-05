import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect } from 'react';
import { SplitText } from "gsap/SplitText";
import Carousel from './Carousel';

gsap.registerPlugin(SplitText);

const Overlay = ({ isOpen, onClose, project }) => {
    if (!project) return null;

    const overlayRef = useRef(null);
    const mainImgRef = useRef(null);
    const mainImgContainerRef = useRef(null);

    // Gestion du scroll body
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);


    useGSAP(() => {
        if (!isOpen) return;

        let tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
        let mm = gsap.matchMedia();

        // 1. Animation de l'image principale
        tl.from(mainImgContainerRef.current, {
            yPercent: 100,
            autoAlpha: 0,
            duration: 1.2
        })
            .from(mainImgRef.current, {
                yPercent: 100,
                scale: 1.3,
                duration: 1.2,
                ease: "sine.inOut",
            }, "-=1");

        // 2. Animation des textes (Desktop vs Mobile)
        mm.add("(min-width: 1024px)", () => {
            // SplitText tittre
            const splitTitle = new SplitText(".split-title", { type: "lines", mask: "lines", linesClass: "overflow-hidden" });

            tl.from(splitTitle.lines, {
                yPercent: 100,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.5")
                // Animation fluide pour la description 
                .from(".desc-para", {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out"
                }, "-=0.4");

            return () => splitTitle.revert();
        });

        mm.add("(max-width: 1023px)", () => {
            const splitTitle = new SplitText(".split-title", { type: "lines" });

            tl.from(splitTitle.lines, {
                yPercent: 100,
                duration: 0.6,
                stagger: 0.05,
                delay: 0.5
            }, "-=0.5")
                .from(".desc-para", {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    stagger: 0.1
                }, "-=0.3");

            return () => splitTitle.revert();
        });

    }, { scope: overlayRef, dependencies: [isOpen] });

    const OPTIONS = { align: 'start' };



    const formatText = (text) => {
        const keywords = /((?:Game plan|The idea|MAI’N) :?)/gi;

        const parts = text.split(keywords);

        return parts.map((part, i) =>
            keywords.test(part) ? <span key={i} className="font-bold font-sans text-lg">{part}</span> : part
        );
    };

    return (
        <div
            className={`fixed inset-0 z-50 overflow-y-auto min-h-screen transition-transform duration-700 ease-in-out bg-white text-[#091423] w-full
                  ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
            style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
        >
            <div className="min-h-full w-full relative">
                <div className='mb-24' ref={overlayRef}>
                    <button
                        onClick={onClose}
                        className="fixed right-6 top-4 z-[60] text-[#091423] hover:text-[#E63098] duration-300 text-2xl font-bold cursor-pointer"
                    >
                        ✕
                    </button>

                    <div className="lg:flex items-start justify-between px-2 lg:px-8 mt-16">
                        {/* Colonne Image */}
                        <div ref={mainImgContainerRef} className="lg:w-1/2 w-auto flex justify-center lg:justify-end lg:order-2 mb-6 lg:mb-0 overflow-hidden">
                            <img
                                src={project.img}
                                alt={project.name}
                                ref={mainImgRef}
                                className="object-cover origin-bottom max-h-[550px]"
                            />
                        </div>

                        {/* Colonne Infos */}
                        <div className="lg:w-1/2 lg:order-1 lg:pr-8">
                            <h2 className="BebasNeue split-title text-7xl lg:text-8xl font-bold mb-4">
                                {project.name}
                            </h2>

                            <div className="flex items-center gap-10 mb-6 overflow-hidden">
                                <p className="split-title font-bold text-xl">{project?.location}</p>
                                <p className="split-title font-bold text-xl">{project?.surface}</p>
                            </div>

                            {/* Description*/}
                            <div className="space-y-4 mx-auto">
                                {project?.description.map((paragraph, index) => (
                                    <p key={index} className="desc-para text-justify leading-relaxed">
                                        {formatText(paragraph)}
                                    </p>
                                ))}
                            </div>
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