import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"


const Preloader = () => {

    const loaderRef = useRef(null)
    const nameRef = useRef(null)

    useGSAP(() => { 
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(loaderRef.current, {
            yPercent: -100,
            display: "none",
            delay: 0.1,
            duration: 0.8,
            ease: "power2.inOut",
          });
        }
      });
  
      // Set initial states
      gsap.set(".word", { y: 200, opacity: 0 });
  
      // Animation sequence
      tl.to(".word", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.4
      });

      tl.to(nameRef.current, {
        scale: 1.2,
        duration: 1,
        ease: "power2.out",
      });

      tl.to(nameRef.current, {
        y: -30,
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.2,
      });
    }, {scope: loaderRef})


  return (
    <div ref={loaderRef} className="fixed top-0 left-0 right-0 h-screen bg-[#091423] z-50 flex items-center justify-center">
        <div ref={nameRef} className="flex items-center space-x-4 text-2xl md:text-4xl font-bold Cropar w-fit overflow-hidden">
          <span className="word">Manel</span>
          <span className="word">Archi</span>
          <span className="word">Immo</span>
        </div>
      </div>
  )
}

export default Preloader