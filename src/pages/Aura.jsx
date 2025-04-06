import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
import { useRef, useState, useLayoutEffect } from "react";
import SplitType from 'split-type';



function Aura() {

  const auraRef = useRef(null)
  const containerRef = useRef(null)
  const titleRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);



  useGSAP(() => {

    gsap.set(titleRef.current, { y: 400 });
    gsap.set(containerRef.current, { opacity: 0 });
    gsap.set(para1Ref.current, { y: 400 });
    gsap.set(para2Ref.current, { y: 400 });
    gsap.set(para3Ref.current, { y: 400 });

    const tl = gsap.timeline({  defaults: { ease: 'power2.out' }});

    tl.to(containerRef.current, { opacity: 1, duration: 1 })
      .to(titleRef.current, { y: 0, duration: 1 }, '-=0.8')
      .to(para1Ref.current, { y: 0, duration: 1 }, '-=0.5')
      .to(para2Ref.current, { y: 0, duration: 1 }, '-=0.5')
      .to(para3Ref.current, { y: 0, duration: 1 }, '-=0.5');
   
  }, { scope: auraRef });


  return (
    <div ref={auraRef} className="flex justify-center mt-28 px-2 pb-10">

      <section ref={containerRef} className="relative bg-white shadow-md rounded-2xl text-lg leading-10 w-full md:w-[70%] lg:w-[50%] p-8 lg:p-10 space-y-4">
        <div className='overflow-hidden text-center py-2 mb-6'>
          <h1 ref={titleRef} className='syne font-bold text-5xl'>Aura</h1>
        </div>

        <div className="overflow-hidden">
          <p ref={para1Ref}>Nous pensons que le système qui régit la relation « agence-client » est totalement dépassé.</p>
        </div>

        <div className="overflow-hidden">
        <p ref={para2Ref}> Les marques se sentent coincées dans une boucle infinie : tout semble indiquer qu'elles n'ont pas d'autre choix que de dépenser chaque année plus, sur plus de points de contact, pour être plus compétitives. Les agences, en miroir, font de leur mieux pour leur fournir toujours plus...
        </p>
        </div>

        <div className="overflow-hidden">
          <p ref={para3Ref}>Plus, plus, plus – alors qu'en fait, les marques peuvent dépenser plus intelligemment si elles se concentrent sur leur “truc”. Leur vérité à elle, leur raison d'être et la manière de rendre cet ADN actuel ou – comme nous aimons le dire – culturellement pertinent.</p>
        </div>

      </section>
    </div>
  );
}

export default Aura;