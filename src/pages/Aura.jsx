import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';

gsap.registerPlugin(SplitText);

function Aura() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ 
      defaults: { ease: 'power2.out', duration: 0.8 } 
    });

    // Animation titre
    const titles = containerRef.current.querySelectorAll('.split-title');
    
    titles.forEach((title) => {
      const split = new SplitText(title, {
        type: "lines",
        linesClass: "overflow-hidden" 
      });

      tl.from(split.lines, {
        y: 80,
        autoAlpha: 0,
        stagger: 0.1,
      }, "-=0.4"); 
    });

    // Animation des Paragraphes 
    tl.from(".desc-para", {
      y: 30,
      autoAlpha: 0,
      stagger: 0.1,
      duration: 1,
    }, "-=1");

  }, { scope: containerRef });

  return (
    <div className="min-h-screen bg-white text-black flex justify-center pt-24 px-4 pb-10">
      <section ref={containerRef} className="relative text-lg leading-relaxed w-full lg:w-[70%]">

        {/* --- PARTIE 1 --- */}
        <div className='overflow-hidden py-2 mb-6 lg:mb-12'>
          <h1 className='split-title BebasNeue font-bold text-center text-6xl'>
            Exigeants & professionnels
          </h1>
        </div>

        <div className="space-y-6">
          <p className='desc-para text-justify'>
            Chez MAI'N, nous concevons des espaces de travail avec rigueur, intention et une réflexion profonde sur l’humain, l’espace, et leur interaction.
            Chaque projet est le fruit d’une écoute attentive, d’une analyse stratégique et d’un regard esthétique affirmé.
          </p>
          <p className="desc-para text-justify">
            Notre approche est structurée, orientée résultats, sans jamais perdre de vue l’humain.
          </p>
          <p className='desc-para text-justify'>
            Nous imaginons des environnements pensés pour leurs usages, mais aussi pour leurs impacts : des lieux où l’on pense plus juste, où l’on ose plus grand.
          </p>
          <p className='desc-para text-justify'>
            <span className='font-bold block'>Notre mission :</span>
            De la réflexion initiale à la livraison finale, chaque détail est maîtrisé avec exigence dans le respect des délais et des budgets.
          </p>
        </div>

        {/* --- PARTIE 2 --- */}
        <p className='split-title BebasNeue font-bold text-center text-6xl mt-20 lg:mt-24 mb-12'>
          Sensibles & alignés
        </p>
        
        <div className="space-y-6">
          <p className="desc-para text-justify">
            Notre travail est porté par une émotion sincère et une exigence d’alignement entre fond et forme.
            Pour nous, l’espace est un lieu vivant, une extension de l’identité, porteur d’intention et de valeurs.
          </p>
          <p className="desc-para text-justify">
            Nous concevons des environnements sensibles, audacieux et stylés — pensés pour résonner avec ceux qui les habitent.
          </p>
          <p className='desc-para text-justify'>
            Des lieux fluides, où l’esthétique sert toujours le sens.
          </p>
          <p className="desc-para text-justify">
            Nous croyons que l’architecture intérieure a le pouvoir de transformer et d’aligner :
            aligner les personnes à leur environnement, aligner les entreprises à leur raison d’être.
          </p>
          <p className='desc-para text-justify'>
            <span className='font-bold block'>Ce qui nous anime ?</span>
            Traduire vos convictions dans l’espace et révéler, à chaque mètre carré, l’empreinte de votre identité profonde.
          </p>
        </div>

        {/* --- PARTIE 3 --- */}
        <p className='split-title BebasNeue font-bold text-center text-6xl mt-20 lg:mt-24 mb-12'>
          Authentiques & passionnés
        </p>

        <div className="space-y-6">
          <p className="desc-para text-justify">
            MAI'N est née d’un désir clair : concevoir des espaces pensés pour l’usage, guidés par l’émotion, et portés par une vision.
          </p>
          <p className="desc-para text-justify">
            Notre mission : révéler le why de chaque entreprise.
          </p>
          <p className="desc-para text-justify">
            Avant de penser volumes, matières ou lumière, nous cherchons le sens.
            Celui qui guide les choix, donne de la cohérence, et relie les personnes à leur environnement.
          </p>
          <p className="desc-para text-justify">
            Nous croyons qu’un espace réussi naît toujours d’un pourquoi fort, jamais d’un effet de mode.
            Chaque entreprise a une histoire, une énergie, un souffle unique — et c’est cette essence que nous traduisons spatialement.
          </p>
          <p className="desc-para text-justify">
            Notre vision : un design qui dépasse la forme, pour révéler ce qui vous rend unique.
          </p>
          <p className='desc-para text-justify'>
            Des lieux qui racontent une histoire, portent une conviction, et laissent une trace — une aura.
          </p>
          <div className="pt-6">
             <p className="desc-para text-justify">MAI'N s’engage à faire juste.</p>
             <p className="desc-para text-justify">Juste pour vous. Juste pour eux.</p>
             <p className="desc-para text-justify">Juste pour maintenant. Juste pour demain.</p>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Aura;