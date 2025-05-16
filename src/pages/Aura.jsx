import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';
gsap.registerPlugin(SplitText);


function Aura() {

  const containerRef = useRef(null)
  const titleRef = useRef(null);
  const paraRef = useRef(null);


  useGSAP(() => {

    const tl = gsap.timeline({  defaults: { ease: 'power2.out', duration: 0.8 } });

    const split = new SplitText(paraRef.current, { 
      type: "lines",
       linesClass: "line" 
      });



    tl.from(titleRef.current, { y: 100, autoAlpha: 0, })
      .from(split.lines, {
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      }, "-=0.4")

  }, { scope: containerRef });


  return (
    <div  className="min-h-screen bg-white text-black flex justify-center pt-16 px-2 pb-10">

      <section ref={containerRef} className="relative  text-lg leading-10 w-full md:w-[70%] lg:w-[50%] p-8 lg:p-10 space-y-4">
        <div className='overflow-hidden text-center py-2 mb-6'>
          <h1 ref={titleRef} className='BebasNeue font-bold text-6xl'>Aura</h1>
        </div>

          <div ref={paraRef}>
            Nous pensons que le système qui régit la relation « agence-client » est totalement dépassé.
            Les marques se sentent coincées dans une boucle infinie : tout semble indiquer qu'elles n'ont pas d'autre choix que de dépenser chaque année plus, sur plus de points de contact, pour être plus compétitives. Les agences, en miroir, font de leur mieux pour leur fournir toujours plus...
            Plus, plus, plus – alors qu'en fait, les marques peuvent dépenser plus intelligemment si elles se concentrent sur leur “truc”. Leur vérité à elle, leur raison d'être et la manière de rendre cet ADN actuel ou – comme nous aimons le dire – culturellement pertinent.
          </div>

      
      </section>
    </div>
  );
}

export default Aura;