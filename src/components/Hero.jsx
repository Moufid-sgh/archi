import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { useRef, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import img from '/landing.jpg'
import SplitType from 'split-type';
import '../index.css'

const Hero = () => {

    const location = useLocation();
    const titleRef = useRef(null);
    const containerRef = useRef(null)
    const imgContainerRef = useRef(null)
    const imgRef = useRef(null)
    const textRef = useRef(null)

    const [textReady, setTextReady] = useState(false)

    useLayoutEffect(() => {
        setTextReady(false);
        // Implémentation maison de debounce
        const debounce = (func, wait) => {
            let timeout;
            return (...args) => {
              clearTimeout(timeout);
              timeout = setTimeout(() => func(...args), wait);
            };
          };

        let text;
        let ctx = gsap.context(() => {});
        const container = containerRef.current;

        const initAnimation = () => {
          setTextReady(false);
          ctx.revert();

          // Clear les propriétés GSAP
          gsap.set(
            [titleRef.current, '.info p .line span', imgContainerRef.current, imgRef.current],
            { clearProps: "all" }
          );

          // Re-split le texte
          text = new SplitType('.info p', {
            types: 'lines',
            tagName: 'div',
            lineClass: 'line',
          });

          // Encapsuler chaque ligne dans un span
          text.lines?.forEach((line) => {
            line.innerHTML = `<span>${line.innerHTML}</span>`;
          });

          setTimeout(() => setTextReady(true), 10);
        };

        // Initialisation
        initAnimation();

        // Handler de resize avec debounce
        const handleResize = debounce(([entry]) => {
          const cr = entry.contentRect;
          const currentWidth = Math.round(cr.width);
          const lastWidth = parseInt(container.dataset.lastWidth || 0);

          if (text && currentWidth !== lastWidth) {
            text.revert();
            initAnimation();
            container.dataset.lastWidth = currentWidth;
          }
        }, 250);

        // Observer les changements de taille
        const resizeObserver = new ResizeObserver(handleResize);

        if (container) {
          resizeObserver.observe(container);
          // Stocker la largeur initiale
          container.dataset.lastWidth = Math.round(container.offsetWidth);
        }

        // Nettoyage
        return () => {
          resizeObserver.disconnect();
          text?.revert();
          ctx.revert();
          if (container) delete container.dataset.lastWidth;
        };
      }, [location.pathname]);


    useGSAP(() => {
        if (!textReady) return;

        const tl = gsap.timeline({  defaults: { ease: 'power2.out' }});

        gsap.set(titleRef.current, { y: 400 });
        gsap.set('.info p .line span', { y: 400, display: 'inline-block'});
        gsap.set(imgContainerRef.current, { yPercent: -100, autoAlpha: 0 });
        gsap.set(imgRef.current, { yPercent: 100, scale: 1.3 });

        tl.to(titleRef.current, { y: 0, duration: 1.5 })
          .to('.info p .line span', { y: 0, duration: 2, stagger: 0.12 }, '-=1')
          .to(imgContainerRef.current, { yPercent: 0, autoAlpha: 1, duration: 1 }, '-=1')
          .to(imgRef.current, { yPercent: 0, scale: 1, duration: 1 }, '-=1');

    },
        { dependencies: [textReady], scope: containerRef }
    );



    return (
        <div ref={containerRef} className="mt-32 lg:mt-8 lg:flex items-center justify-center min-h-screen">
            <div className='lg:w-1/2'>
                <div className='overflow-hidden py-2 mb-6'>
                    <h1 className='syne font-bold text-5xl' ref={titleRef} >Wanna work with me</h1>
                </div>
                <div className='info text-xl lg:pr-16 leading-20'>
                    <p ref={textRef} >
                        Parce que Yemanja conçoit et réalise des aménagements d’une grande diversité, chaque projet est pour nous l’occasion de développer des solutions singulières et de challenger notre créativité.
                        Chacun a ses spécificités mais tous sont empreints du plaisir que nous avons à les réaliser tout
                    </p>
                </div>
            </div>

            <div className='lg:w-1/2 mt-8 lg:mt-0 relative rounded-lg overflow-hidden' ref={imgContainerRef} >
                <img src={img} alt='img' className='object-cover origin-left' ref={imgRef} />
            </div>
        </div>
    )
}

export default Hero