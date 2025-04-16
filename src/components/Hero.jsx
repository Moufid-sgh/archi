import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {

    const data = [
        {
            image: "/Euroapi_1.jpg",
            title: "Need for Speed",
            text: "Transformons votre intérieur en une œuvre d’art vivante."
        },
        {
            image: "/Euroapi_2.jpg",
            title: "Battle Field",
            text: "Chaque détail raconte une histoire, chaque pièce reflète une âme."
        },
        {
            image: "/Euroapi_3.jpg",
            title: "Diablo",
            text: "L'harmonie des espaces commence par une vision."
        },

    ];

    const [currentIdx, setCurrentIdx] = useState(0)

    const { text, image } = data[currentIdx]

    const handlePrev = () => {
        setCurrentIdx(prev => prev === 0 ? data.length - 1 : prev - 1)
    }

    const handleNext = () => {
        setCurrentIdx(prev => prev === data.length - 1 ? 0 : prev + 1)
    }

    const heroContainerRef = useRef(null)
    const textRef = useRef(null)
    const imgRef = useRef(null)



    useGSAP(() => {

        gsap.set(textRef.current, { y: 80 })
        gsap.set(imgRef.current, { y: 250, scale: 1.3 })

        gsap.to(textRef.current, { y: 0, duration: 1, ease: 'power1.out' })
        gsap.to(imgRef.current, { y: 0, scale: 1, duration: 1, ease: 'power1.out' })

    }, { dependencies: [currentIdx], scope: heroContainerRef })





    return (
        <section ref={heroContainerRef} className='flex flex-col lg:flex-row items-center lg:justify-between mt-24 pb-6 sm:pb-0 px-2'>

            <div className='order-last lg:order-first md:w-1/2 h-1/2 md:h-full lg:pr-8'>

                <div className='overflow-hidden PoiretOne text-4xl md:text-5xl leading-14'>
                    <p ref={textRef}>{text}</p>
                </div>

                <a href="mailto:manelrachdi@hotmail.fr"
                    className='relative inline-flex items-center justify-center bg-[#E63098] text-white font-[550] overflow-hidden tracking-wider rounded-xl px-8 py-3 lg:px-10 lg:py-3.5 mt-10 duration-500 cursor-pointer group'
                >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-violet-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative">CONTACT</span>
                </a>

            </div>

            {/* images part ************************/}
            <div className='relative w-full md:w-1/2 h-1/2 md:h-full'>
                <div className='absolute bottom-4 right-4 z-40 flex items-center text-end font-bold space-x-3'>
                    <p onClick={handlePrev} className='cursor-pointer text-lg bg-white text-[#091423] hover:text-[#E63098] duration-300 px-2.5 rounded-md'>&#10094;</p>
                    <p onClick={handleNext} className='cursor-pointer text-lg bg-white text-[#091423]  hover:text-[#E63098] duration-300 px-2.5 rounded-md'>&#10095;</p>
                </div>

                <div className='overflow-hidden rounded-3xl'>
                    <img
                        src={image}
                        alt="pic"
                        ref={imgRef}
                        className='w-full h-[60vh] lg:h-[80vh] object-cover object-center rounded-3xl'
                    />
                </div>
            </div>

        </section>
    )
}

export default Hero