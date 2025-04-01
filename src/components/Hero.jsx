import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import img from '/landing.jpg'
import SplitType from 'split-type';
import '../index.css'

const Hero = () => {

    const titleRef = useRef(null);
    const containerRef = useRef(null)
    const imgContainerRef = useRef(null)
    const imgRef = useRef(null)


    useGSAP(() => {

        //split text
        const text = new SplitType('.info p', {
            types: 'lines',
            tagName: 'div',
            lineClass: 'line'
        });

        text.lines.forEach((line) => {
            const content = line.innerHTML;
            line.innerHTML = `<span>${content}</span>`
        })

        gsap.set('.info p .line span', { y: 400,  display: 'block' })

        //timeline
        let tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

        tl.from(titleRef.current, 1.5, { y: 400 })
            .to('.info p .line span', { y: 0, duration: 2, stagger: 0.12 }, "-=1")
            .fromTo(imgContainerRef.current, 1, { yPercent: -100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, delay: 1 }, "-=1")
            .from(imgRef.current, 1, { yPercent: 100, scale: 1.3, delay: -1 })

    }, { scope: containerRef })


    return (
        <div ref={containerRef} className="mt-32 lg:mt-8 lg:flex items-center justify-center min-h-screen">
            <div className='lg:w-1/2'>
                <div className='overflow-hidden py-2 mb-6'>
                    <h1 className='syne font-bold text-5xl' ref={titleRef} >Wanna work with me</h1>
                </div>
                <div className='info lg:pr-10'>
                    <p>
                        Parce que Yemanja conçoit et réalise des aménagements d’une grande diversité, chaque projet est pour nous l’occasion de développer des solutions singulières et de challenger notre créativité. Chacun a ses spécificités mais tous sont empreints du plaisir que nous avons à les réaliser !
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